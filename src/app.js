// Launcher TV — point d’entrée.
// Monte l’accueil (toujours présent) et le hub (posé par-dessus quand il est ouvert), met l’écran 1920×1080 à l’échelle,
// et remplace la navigation entre planches de la maquette (liens *.dc.html) par un simple changement d’écran.
import { h, render, Component } from "preact";
import htm from "htm";
import boardsCss from "./boards/boards.css";
import { cssAssets } from "./assets.js";
import { makeBoards } from "./tv-boards.js";
import { onTV, log } from "./tv.js";
import { cachedRecos, fetchRecos, heroItems } from "./recos.js";

const html = htm.bind(h);
const { Main, Hub, mainDefaults, hubDefaults } = makeBoards(html);

// Réglages de production (dans la maquette, « Démo » ouvrait directement l’écran de veille).
const PROD = { ecranVeille: false, vueApplis: false };
const cfg = (typeof window !== "undefined" && window.__LAUNCHER__) || {};
const mainProps = Object.assign({}, mainDefaults, PROD, cfg.props || {});
const hubProps = Object.assign({}, hubDefaults, { accent: mainProps.accent, sons: mainProps.sons, volumeSons: mainProps.volumeSons }, cfg.hubProps || {});
// Où lire les recos : à côté de la page (site en ligne, aperçu), ou à l’adresse en ligne pour l’appli TV.
const DATA_BASE = cfg.dataBase != null ? cfg.dataBase : "";

const APP_CSS = `
@font-face{font-family:"Inter";src:url(assets/inter.woff2) format("woff2");font-weight:100 900;font-style:normal;font-display:swap}
html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#05070E}
#launcher{position:fixed;left:0;top:0;width:1920px;height:1080px;transform-origin:0 0;overflow:hidden}
.board{position:absolute;left:0;top:0;width:1920px;height:1080px}
.board-hub{z-index:5}
.board-hub.out{animation:hubOut 260ms cubic-bezier(.4,0,.2,1) forwards;pointer-events:none}
@keyframes hubOut{to{opacity:0;transform:translateX(28px)}}
.launcher-toast{position:absolute;left:50%;top:56px;z-index:50;transform:translate(-50%,-16px);opacity:0;padding:16px 28px;border-radius:999px;
  background:rgba(22,24,31,.86);backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);color:#F5F5F7;font:500 22px/1.2 Inter,system-ui,sans-serif;
  box-shadow:0 12px 40px rgba(0,0,0,.35);transition:opacity 260ms ease,transform 360ms cubic-bezier(.34,1.4,.5,1);pointer-events:none;white-space:nowrap}
.launcher-toast.on{opacity:1;transform:translate(-50%,0)}
.launcher-log{position:absolute;left:40px;bottom:40px;z-index:60;max-width:1100px;padding:20px 24px;border-radius:20px;background:rgba(0,0,0,.82);
  color:#9EF29E;font:400 18px/1.45 ui-monospace,Menlo,monospace;white-space:pre-wrap}
`;

function injectCss() {
  const el = document.createElement("style");
  el.textContent = cssAssets(APP_CSS + "\n" + boardsCss);
  document.head.appendChild(el);
}

// 1920×1080 quelle que soit la résolution annoncée par le navigateur de la TV.
function fit() {
  const el = document.getElementById("launcher");
  if (!el) return;
  const k = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
  el.style.transform = "scale(" + k + ")";
  el.style.left = (window.innerWidth - 1920 * k) / 2 + "px";
  el.style.top = (window.innerHeight - 1080 * k) / 2 + "px";
}

class App extends Component {
  constructor() {
    super();
    const cached = cachedRecos();
    this.state = { hub: null, hubKey: 0, toast: null, log: false, recosData: cached, recos: cached ? heroItems(cached) : null };
  }

  // Recos : au démarrage, au retour dans le launcher et toutes les 30 minutes (elles changent toutes les 6 h en ligne).
  refreshRecos() {
    if (cfg.dataBase === null) return;
    fetchRecos(DATA_BASE).then((data) => {
      const cur = this.state.recosData;
      if (cur && cur.generatedAt === data.generatedAt) return;
      this.setState({ recosData: data, recos: heroItems(data) });
    }).catch(() => {});
  }

  componentDidMount() {
    window.__dcRemote = "main";
    // Les planches se parlent par des liens (Hub.dc.html / Main.dc.html) : on les intercepte.
    this._onClick = (e) => {
      const a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
      const m = a && /^(Main|Hub)\.dc\.html$/.exec(a.getAttribute("href") || "");
      if (!m) return;
      e.preventDefault();
      e.stopPropagation();
      if (m[1] === "Hub") this.openHub();
      else this.closeHub();
    };
    document.addEventListener("click", this._onClick, true);
    this._onToast = (e) => this.toast(e.detail);
    window.addEventListener("launcher:toast", this._onToast);
    // Journal de diagnostic (lancement des applis, entrées HDMI) : touche « i » au clavier, ou Info sur la télécommande.
    this._onKey = (e) => {
      if (e.key === "i" || e.keyCode === 457) this.setState((s) => ({ log: !s.log }));
    };
    window.addEventListener("keydown", this._onKey);
    this.refreshRecos();
    this._recosT = setInterval(() => this.refreshRecos(), 30 * 60 * 1000);
    document.addEventListener("visibilitychange", () => { if (!document.hidden) this.refreshRecos(); });
  }

  openHub() {
    clearTimeout(this._hubT);
    window.__dcRemote = "hub";
    this.setState((s) => ({ hub: "in", hubKey: s.hub === "in" ? s.hubKey : s.hubKey + 1 }));
  }

  closeHub() {
    window.__dcRemote = "main";
    if (!this.state.hub) return;
    this.setState({ hub: "out" });
    clearTimeout(this._hubT);
    this._hubT = setTimeout(() => this.setState({ hub: null }), 270);
  }

  toast(text) {
    clearTimeout(this._toastT);
    this.setState({ toast: { text, on: false } });
    requestAnimationFrame(() => requestAnimationFrame(() => this.setState((s) => (s.toast ? { toast: { text: s.toast.text, on: true } } : {}))));
    this._toastT = setTimeout(() => this.setState((s) => (s.toast ? { toast: { text: s.toast.text, on: false } } : {})), 2800);
  }

  render(_, s) {
    return html`
      <div class="board board-main"><${Main} ...${mainProps} recos=${s.recos} /></div>
      ${s.hub ? html`<div class=${"board board-hub" + (s.hub === "out" ? " out" : "")}><${Hub} key=${s.hubKey} ...${hubProps} /></div>` : null}
      ${s.toast ? html`<div class=${"launcher-toast" + (s.toast.on ? " on" : "")} role="status">${s.toast.text}</div>` : null}
      ${s.log ? html`<div class="launcher-log">${(onTV ? "TV Samsung (Tizen)" : "Aperçu navigateur") + "\n" + (log.length ? log.join("\n") : "Rien pour l’instant.")
        + "\n\nRecos : " + (s.recosData ? s.recosData.items.length + " titres, mises à jour le " + new Date(s.recosData.generatedAt).toLocaleString("fr-FR") : "exemples (pas encore de recos en ligne)")
        + "\n" + ((s.recosData && s.recosData.credits) || "Données et images : TMDB (ce produit utilise l’API TMDB mais n’est ni approuvé ni certifié par TMDB). Disponibilités : JustWatch.")}</div>` : null}
    `;
  }
}

function start() {
  injectCss();
  // Touche Info de la télécommande (journal de diagnostic).
  try { if (onTV && window.tizen.tvinputdevice) window.tizen.tvinputdevice.registerKey("Info"); } catch (e) {}
  let root = document.getElementById("launcher");
  if (!root) {
    root = document.createElement("div");
    root.id = "launcher";
    document.body.appendChild(root);
  }
  fit();
  window.addEventListener("resize", fit);
  render(h(App, null), root);
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
else start();

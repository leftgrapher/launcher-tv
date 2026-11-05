// Launcher TV — point d’entrée.
// Monte l’accueil (toujours présent) et le hub (posé par-dessus quand il est ouvert), met l’écran 1920×1080 à l’échelle,
// et remplace la navigation entre planches de la maquette (liens *.dc.html) par un simple changement d’écran.
import { h, render, Component } from "preact";
import htm from "htm";
import boardsCss from "./boards/boards.css";
import { cssAssets } from "./assets.js";
import { makeBoards } from "./tv-boards.js";
import { onTV, log, note, diagnostics } from "./tv.js";
import { cachedRecos, fetchRecos, heroItems } from "./recos.js";
import { videoState } from "./video.js";
import { cachedMeteo, fetchMeteo } from "./meteo.js";

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
/* Hub ouvert : l’accueil reste en place sous le panneau. Seuls ses boutons arrivent par le côté ; la barre du haut
   (météo, heure, bouton du hub) ne bouge pas et n’est pas assombrie, le reste de l’écran l’est (voile de la maquette). */
.board-hub [data-hub-scrim],.board-hub [data-hub-top]{display:none!important}
[data-topbar]{z-index:4}
.board-main [data-launcher]::after{content:"";position:absolute;inset:0;z-index:3;pointer-events:none;opacity:0;will-change:opacity;transition:opacity 220ms ease;
  background:linear-gradient(270deg,rgba(5,7,14,.62) 0%,rgba(5,7,14,.36) 28%,rgba(5,7,14,0) 52%),rgba(5,7,14,.18)}
.board-main.hub-on [data-launcher]::after{opacity:1;transition-duration:300ms}
.board-hub.out{animation:hubOut 260ms cubic-bezier(.4,0,.2,1) forwards;pointer-events:none}
@keyframes hubOut{to{opacity:0;transform:translateX(96px)}}
.launcher-toast{position:absolute;left:50%;top:56px;z-index:50;transform:translate(-50%,-16px);opacity:0;padding:16px 28px;border-radius:999px;
  background:rgba(22,24,31,.86);backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);color:#F5F5F7;font:500 22px/1.2 Inter,system-ui,sans-serif;
  box-shadow:0 12px 40px rgba(0,0,0,.35);transition:opacity 260ms ease,transform 360ms cubic-bezier(.34,1.4,.5,1);pointer-events:none;white-space:nowrap}
.launcher-toast.on{opacity:1;transform:translate(-50%,0)}
.launcher-log{position:absolute;left:40px;bottom:40px;z-index:60;max-width:1780px;font-size:17px!important;padding:20px 24px;border-radius:20px;background:rgba(0,0,0,.82);
  color:#9EF29E;font:400 18px/1.45 ui-monospace,Menlo,monospace;white-space:pre-wrap}
`;

// Mode TV : on garde le look mais on retire ce qui coûte le plus cher au processeur graphique de la TV
// (flous d’arrière-plan sur de grandes surfaces, filtre « verre déformant », liseré arc-en-ciel animé).
// Les voiles qui comptaient sur le flou deviennent simplement plus opaques.
const PERF_CSS = `
*{-webkit-backdrop-filter:none!important;backdrop-filter:none!important}
[style*="blur(56px)"]{background:rgba(8,10,18,.86)!important}
[style*="blur(36px)"]{background-color:rgba(18,20,28,.97)!important}
.lg-refract{filter:none!important}
.tile-rim-rainbow{animation:none!important}
[data-tile]{will-change:auto!important}
@keyframes heroIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
@keyframes heroIn2{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
`;
const PERF = cfg.perf != null ? !!cfg.perf : onTV;

// Sur la TV : ouverture des sources (launch-fx.js) et plan vidéo sous l’interface (video.js).
// La page elle-même est transparente en permanence (le fond sombre est celui de l’accueil) : la changer à chaque aperçu
// ou fond 4K obligeait la TV à redessiner tout l’écran.
// Réactivité d’abord : seules des transformations et des fondus sont animés (la TV les calcule à part, sans retarder
// la touche suivante) ; couleurs, bordures et ombres changent d’un coup. Le hub glisse en un seul bloc au lieu de faire
// apparaître ses boutons un par un, et l’aperçu en image des tuiles est retiré (seule l’image en direct d’une source reste).
// Le décor du programme ne bouge plus (effet Ken Burns retiré) : l’image 4K qui le remplace est fixe, et c’est un
// grand calque animé en moins pour la TV.
const TV_CSS = `
.vplane{position:fixed;left:0;top:0;width:1920px;height:1080px}
[data-herobg],[data-herobase]{animation:none!important}
[data-launcher] [data-launch-overlay],html.lfx-hub [data-hub] [data-launch-overlay]{display:none!important}
.lfx{position:absolute;left:0;top:0;width:1920px;height:1080px;z-index:40;pointer-events:none;overflow:hidden}
.lfx-card{position:absolute;left:0;top:0;width:1920px;height:1080px;transform-origin:0 0;overflow:hidden;will-change:transform}
.lfx-tint{position:absolute;left:0;top:0;right:0;bottom:0;opacity:0;will-change:opacity}
.lfx-face{position:absolute!important;transform-origin:50% 50%!important;background:transparent!important;border-color:transparent!important;
  box-shadow:none!important;animation:none!important;transition:none!important;scale:none!important;rotate:none!important;margin:0!important;will-change:transform}
.lfx-hide{opacity:0!important;transition:none!important;animation:none!important}
html,body{background:transparent!important}
html.v-under [data-launcher]{background:transparent!important}
html.v-under [data-herobase]{visibility:hidden}
html.v-hero [data-herobg="1"]{opacity:0!important}
html.v-snap [data-herobg]{transition:none!important}
html.v-full .board{visibility:hidden}
html.v-return .board{animation:vReturn 320ms ease both}
@keyframes vReturn{from{opacity:0}to{opacity:1}}
html.v-quit #launcher{opacity:0;transition:opacity 240ms ease}
[data-dots]{filter:none!important}
[data-dots]>span{box-shadow:0 1px 5px rgba(0,0,0,.35)}
.lfx-wait>span:first-child{animation:lfxPulse 1.1s ease-in-out infinite!important}
.lfx-wait[data-card]{animation:lfxPulse2 1.1s ease-in-out infinite!important}
@keyframes lfxPulse{0%,100%{opacity:1}50%{opacity:.3}}
@keyframes lfxPulse2{0%,100%{opacity:1}50%{opacity:.6}}
[data-peek]{display:none!important}
[data-herobase] *{transition:none!important}
[data-herobg]{will-change:opacity}
.tile-flare{display:none!important}
[data-tile]{transition:transform 380ms cubic-bezier(0.25,1.4,0.5,1),scale 320ms cubic-bezier(0.34,1.5,0.5,1),opacity 220ms ease!important}
[data-hub] .lg{transition:transform 380ms cubic-bezier(0.25,1.4,0.5,1),scale 320ms cubic-bezier(0.34,1.5,0.5,1),opacity 220ms ease!important}
.board-hub{will-change:opacity,transform}
.board-hub.off{opacity:0;pointer-events:none}
.board-hub.in{animation:hubInTV 280ms cubic-bezier(0.2,0.9,0.3,1) both}
.board-hub.out{animation-duration:220ms!important}
@keyframes hubInTV{from{opacity:0;transform:translateX(96px)}to{opacity:1;transform:none}}
`;

function injectCss() {
  const el = document.createElement("style");
  el.textContent = cssAssets(APP_CSS + "\n" + boardsCss + (PERF ? "\n" + PERF_CSS : "") + (onTV ? "\n" + TV_CSS : ""));
  document.head.appendChild(el);
}

// Fluidité mesurée (images par seconde), pour le panneau Info. Seulement quand le panneau est ouvert :
// une boucle d’images permanente obligerait la TV à recalculer la page à chaque image, même sans rien toucher.
const perf = { fps: 0, slow: 0, on: false };
function measureFps(on) {
  perf.on = on;
  if (!on || perf.running) return;
  perf.running = true;
  let n = 0, t0 = performance.now(), last = t0;
  const tick = (t) => {
    if (!perf.on) { perf.running = false; return; }
    n++;
    if (t - last > 50) perf.slow++;
    last = t;
    if (t - t0 >= 2000) { perf.fps = Math.round((n * 1000) / (t - t0)); n = 0; t0 = t; perf.slow = 0; }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// 1920×1080 quelle que soit la résolution annoncée par le navigateur de la TV.
function fit() {
  const el = document.getElementById("launcher");
  if (!el) return;
  const k = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
  // À 1920×1080 pile (la TV), aucune transformation : rien n’est rééchantillonné.
  el.style.transform = Math.abs(k - 1) < 0.001 ? "none" : "scale(" + k + ")";
  el.style.left = (window.innerWidth - 1920 * k) / 2 + "px";
  el.style.top = (window.innerHeight - 1080 * k) / 2 + "px";
}

class App extends Component {
  constructor() {
    super();
    const cached = cachedRecos();
    this.state = { hub: null, hubKey: 0, toast: null, log: false, recosData: cached, recos: cached ? heroItems(cached, DATA_BASE) : null, meteo: cachedMeteo() };
  }

  // Recos : au démarrage, au retour dans le launcher et toutes les 30 minutes (elles changent toutes les 6 h en ligne).
  refreshRecos() {
    if (cfg.dataBase === null) return;
    fetchRecos(DATA_BASE).then((data) => {
      const cur = this.state.recosData;
      if (cur && cur.generatedAt === data.generatedAt) return;
      this.setState({ recosData: data, recos: heroItems(data, DATA_BASE) });
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
      // « i » au clavier, Info (457) ou Lecture/Pause (10252) sur la télécommande Solar de la S95F, qui n’a pas de touche Info.
      if (e.key === "i" || e.keyCode === 457 || e.keyCode === 10252 || e.key === "MediaPlayPause") {
        const on = !this.state.log;
        this.setState({ log: on });
        measureFps(on);
        if (on) {
          clearInterval(this._logT);
          this._logT = setInterval(() => this.forceUpdate(), 1000);
          diagnostics().then((d) => this.setState({ diag: d })).catch(() => {});
        } else clearInterval(this._logT);
      }
    };
    window.addEventListener("keydown", this._onKey);
    this.refreshRecos();
    this._recosT = setInterval(() => this.refreshRecos(), 30 * 60 * 1000);
    // Météo : au démarrage, toutes les 15 minutes et au retour dans le launcher.
    this.refreshMeteo();
    this._meteoT = setInterval(() => this.refreshMeteo(), 15 * 60 * 1000);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden && (!this.state.meteo || Date.now() - this.state.meteo.at > 10 * 60 * 1000)) this.refreshMeteo();
    });
    if (onTV) setTimeout(() => this.setState({ hubReady: true }), 1500);
    document.addEventListener("visibilitychange", () => { if (!document.hidden) this.refreshRecos(); });
  }

  // Sur la TV, le hub est préparé une fois pour toutes au démarrage (caché) : l’ouvrir ou le fermer ne fait plus que
  // le faire glisser et apparaître, ce que la TV calcule à part, sans reconstruire tous ses boutons à chaque fois.
  refreshMeteo() {
    fetchMeteo().then((m) => this.setState({ meteo: m }), (e) => note("météo : " + e.message));
  }

  openHub() {
    clearTimeout(this._hubT);
    window.__dcRemote = "hub";
    if (onTV) {
      if (this._hub && this._hub.tvReset) this._hub.tvReset();
      this.setState({ hub: "in", hubReady: true });
      return;
    }
    this.setState((s) => ({ hub: "in", hubKey: s.hub === "in" ? s.hubKey : s.hubKey + 1 }));
  }

  closeHub() {
    window.__dcRemote = "main";
    if (!this.state.hub) return;
    this.setState({ hub: "out" });
    clearTimeout(this._hubT);
    this._hubT = setTimeout(() => this.setState({ hub: null }), onTV ? 230 : 270);
  }

  logText(s) {
    const d = s.diag || {};
    const lines = [
      (onTV ? "TV Samsung (Tizen)" : "Aperçu navigateur") + (PERF ? " · mode TV allégé" : "") + " · version " + ((window.__LAUNCHER__ || {}).running || "aperçu"),
      "Écran : " + window.innerWidth + "×" + window.innerHeight + " · densité " + window.devicePixelRatio + " · écran " + screen.width + "×" + screen.height + " · " + perf.fps + " images/s",
      "Moteur : " + ((/Chrome\/[\d.]+/.exec(navigator.userAgent) || [""])[0] || navigator.userAgent.slice(0, 60)),
      "Vidéo : " + videoState(),
      "Tizen : " + (d.tizen ? "oui" : "non") + " · lancement d’applis : " + (d.application ? "oui" : "non") + (d.apps != null ? " · " + d.apps + " applis vues" + (d.appsError ? " (" + d.appsError + ")" : "") : ""),
      "",
      log.length ? log.slice(-14).join("\n") : "Rien pour l’instant.",
      "",
      "Recos : " + (s.recosData ? s.recosData.items.length + " titres, mises à jour le " + new Date(s.recosData.generatedAt).toLocaleString("fr-FR") : "exemples (pas encore de recos en ligne)"),
      (s.recosData && s.recosData.credits) || "Données et images : TMDB (ce produit utilise l’API TMDB mais n’est ni approuvé ni certifié par TMDB). Disponibilités : JustWatch.",
      "Météo : Weather data by Open-Meteo.com (CC BY 4.0)" + (s.meteo ? " · " + Math.round(s.meteo.temp) + "°, code " + s.meteo.code + ", relevée à " + new Date(s.meteo.at).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }) : "")
    ];
    if (d.names && d.names.length) lines.splice(4, 0, "Applis : " + d.names.slice(0, 18).join(" · "));
    return lines.join("\n");
  }

  toast(text) {
    clearTimeout(this._toastT);
    this.setState({ toast: { text, on: false } });
    requestAnimationFrame(() => requestAnimationFrame(() => this.setState((s) => (s.toast ? { toast: { text: s.toast.text, on: true } } : {}))));
    this._toastT = setTimeout(() => this.setState((s) => (s.toast ? { toast: { text: s.toast.text, on: false } } : {})), 2800);
  }

  render(_, s) {
    return html`
      <div class=${"board board-main" + (s.hub === "in" ? " hub-on" : "")}><${Main} ...${mainProps} recos=${s.recos} meteo=${s.meteo} /></div>
      ${onTV
        ? (s.hubReady ? html`<div class=${"board board-hub" + (s.hub === "in" ? " in" : s.hub === "out" ? " out" : " off")}><${Hub} ref=${(r) => (this._hub = r)} premount=${true} ...${hubProps} /></div>` : null)
        : s.hub ? html`<div class=${"board board-hub" + (s.hub === "out" ? " out" : "")}><${Hub} key=${s.hubKey} ...${hubProps} /></div>` : null}
      ${s.toast ? html`<div class=${"launcher-toast" + (s.toast.on ? " on" : "")} role="status">${s.toast.text}</div>` : null}
      ${s.log ? html`<div class="launcher-log">${this.logText(s)}</div>` : null}
    `;
  }
}

function start() {
  window.addEventListener("error", (e) => note("erreur : " + (e.message || e.type)));
  window.addEventListener("unhandledrejection", (e) => note("erreur : " + ((e.reason && e.reason.message) || e.reason)));
  injectCss();
  // Touche Info de la télécommande (journal de diagnostic).
  ["Info", "MediaPlayPause"].forEach((k) => { try { if (onTV && window.tizen.tvinputdevice) window.tizen.tvinputdevice.registerKey(k); } catch (e) {} });
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

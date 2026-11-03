// Les deux planches de la maquette, branchées sur la vraie TV.
// La logique de la maquette est reprise telle quelle (boards/*.js, générés) ; seules les actions « vers l’extérieur »
// (ouvrir une appli, une entrée HDMI, les réglages Samsung…) sont ajoutées ici, par héritage.
import { Component } from "preact";
import * as MainBoard from "./boards/main.js";
import * as HubBoard from "./boards/hub.js";
import { onTV, launchApp, showSource, quitLauncher, HDMI, store, note } from "./tv.js";
import { openFx, rectIn } from "./launch-fx.js";
import * as video from "./video.js";

function boardBase(mod, html) {
  return class DCLogic extends Component {
    render() {
      return mod.template(this.renderVals(), html);
    }
  };
}

const remote = () => (typeof window !== "undefined" ? window.__dcRemote : undefined);
const toast = (text) => window.dispatchEvent(new CustomEvent("launcher:toast", { detail: text }));

const SAVED = "launcher.home";

export function makeBoards(html) {
  const MainLogic = MainBoard.makeLogic(boardBase(MainBoard, html));
  const HubLogic = HubBoard.makeLogic(boardBase(HubBoard, html));

  class Main extends MainLogic {
    constructor(props) {
      super(props);
      // Ordre des applis, dernières ouvertes : retrouvés au rallumage.
      const saved = store.load(SAVED, null);
      this.state = Object.assign({}, this.state || {}, saved || {});
    }

    componentDidMount() {
      super.componentDidMount();
      this._onVis = () => {
        if (document.hidden) {
          // L’appli passe derrière une autre : l’aperçu en direct s’arrête (il sera relancé au retour).
          if (this._pvFor) { this._pvFor = null; video.stopPreview(); }
          return;
        }
        this._resume();
      };
      document.addEventListener("visibilitychange", this._onVis);
      this._tvVideo();
    }

    componentWillUnmount() {
      super.componentWillUnmount();
      document.removeEventListener("visibilitychange", this._onVis);
      clearTimeout(this._tvT);
      clearTimeout(this._safeT);
    }

    componentDidUpdate(prevProps, prevState) {
      if (super.componentDidUpdate) super.componentDidUpdate(prevProps, prevState);
      const s = this.state || {};
      const keep = { order: s.order, recent: s.recent, lastFav: s.lastFav, lastOpen: s.lastOpen };
      const json = JSON.stringify(keep);
      if (json !== this._savedJson) {
        this._savedJson = json;
        store.save(SAVED, keep);
      }
      this._tvVideo();
    }

    // Plan vidéo de la TV : fond 4K du programme affiché, ou image en direct de la source HDMI sélectionnée.
    _tvVideo() {
      if (!onTV) return;
      const s = this.state || {};
      const N = this._nav || {};
      const view = N.view;
      const calm = !s.launch && !s.sys && !s.edit && !this._fx && !document.hidden && !(remote() && remote() !== "main");
      let cur = null;
      try { cur = N.progFor && N.idx != null ? N.progFor(N.idx) : null; } catch (e) {}
      video.wantBg(calm && (view === "home" || view === "hero") && cur && cur.bg4k ? cur.bg4k : null);
      // Aperçu : quand la tuile d’une source HDMI reste sélectionnée (comme l’aperçu en image des applis),
      // son image en direct s’affiche dans la tuile.
      const f = s.focus || s.lastOpen;
      const n = HDMI[f];
      const want = calm && !!n && s.peek === f && view === "home" && this.props.apercuDirect !== false;
      if (want && this._pvFor !== f) {
        const el = document.querySelector('[data-tile="' + f + '"]');
        if (!el) return;
        this._pvFor = f;
        // Un peu en retrait des bords : l’image en direct est rectangulaire, la tuile a des coins arrondis.
        const r = rectIn(el);
        const k = 7 * (r.w / (el.offsetWidth || r.w));
        video.preview(n, { x: r.x + k, y: r.y + k, w: r.w - 2 * k, h: r.h - 2 * k });
      } else if (!want && this._pvFor) {
        this._pvFor = null;
        video.stopPreview();
      }
    }

    // Pendant que le hub est affiché par-dessus, l’accueil ne part pas en veille.
    _sleep() {
      if (remote() && remote() !== "main") { this._armIdle(); return; }
      super._sleep();
    }

    // Réglages : sur la TV, le vrai panneau Samsung s’ouvre par-dessus le launcher (le panneau simulé reste pour l’aperçu).
    _openSys() {
      if (!onTV) return super._openSys();
      launchApp("reglages").then((ok) => { if (!ok) super._openSys(); });
    }

    // Sur la TV, l’écran de lancement de la maquette est remplacé par la tuile qui s’agrandit (launch-fx.js),
    // et l’appli est lancée tout de suite, pendant l’animation.
    _startFx(el, opts) {
      if (this._fx) this._fx.close(true);
      this._fx = null;
      try { this._fx = openFx(el, opts); } catch (e) { note("animation d’ouverture : " + e.message); }
    }

    _launch(it, el) {
      const before = this._memo();
      super._launch(it, el);
      if (!onTV || it.sys) return;
      const key = it.add || it.installed === false ? "store" : it.id;
      // Source HDMI : son image en direct est demandée tout de suite (si elle était déjà en aperçu dans la tuile, elle passe
      // directement en plein écran, sous l’écran qui grandit).
      this._srcP = HDMI[key] ? video.full(HDMI[key]) : null;
      this._startFx(el, { id: it.id });
      this._goOut(() => (HDMI[key] ? this._openSource(HDMI[key]) : launchApp(key)), it.add ? "Le store Samsung" : it.name, before);
    }

    _launchHero(r, el) {
      const before = this._memo();
      super._launchHero(r, el);
      if (!onTV) return;
      this._srcP = HDMI[r.app] ? video.full(HDMI[r.app]) : null;
      this._startFx(el, { id: r.app, image: r.backdrop || null });
      this._goOut(() => (HDMI[r.app] ? this._openSource(HDMI[r.app]) : launchApp(r.app)), r.name, before);
    }

    // Source HDMI : son image en direct passe sous l’écran qui grandit, qui s’efface ensuite pour la laisser voir ;
    // puis l’écran TV de Samsung prend le relais (mode jeu, VRR).
    async _openSource(n) {
      const fx = this._fx;
      const res = await (this._srcP || video.full(n));
      this._srcP = null;
      if (fx) await fx.grown;
      if (res === 2 && fx === this._fx) {
        video.revealPage();
        if (fx) await fx.reveal();
      }
      return showSource(n, res >= 1);
    }

    // Sur la TV, Retour sur l’accueil (rien d’ouvert) : un message, puis un 2e appui ferme le launcher.
    _remote(k) {
      if (onTV && k === "back" && this._canQuit()) {
        if (Date.now() - (this._quitAt || 0) < 2500) {
          this._quitAt = 0;
          document.documentElement.classList.add("v-quit");
          setTimeout(() => quitLauncher().then((ok) => { if (!ok) document.documentElement.classList.remove("v-quit"); }), 260);
        } else {
          this._quitAt = Date.now();
          toast("Appuie encore sur Retour pour fermer le launcher");
        }
        return;
      }
      this._quitAt = 0;
      super._remote(k);
    }

    _canQuit() {
      const s = this.state || {};
      const N = this._nav || {};
      return N.view === "home" && s.focus !== "hub" && !s.launch && !s.sys && !s.edit && !this._fx;
    }

    // Retour pendant l’ouverture (l’appli tarde à s’afficher) : on revient à l’accueil.
    _back(el) {
      if (onTV && this._fx) { clearTimeout(this._tvT); this._resume(); return; }
      super._back(el);
    }

    // Ce qui change quand une appli est ouverte (dernière appli, récentes, reco affichée) : remis comme avant si elle ne s’ouvre pas.
    _memo() {
      const s = this.state || {};
      return { lastOpen: s.lastOpen, recent: s.recent, lastFav: s.lastFav, idx: s.idx };
    }

    // L’appli est lancée presque tout de suite (la tuile grandit pendant ce temps). Si la TV n’y arrive pas, on revient.
    // Si elle dit l’avoir ouverte mais que rien ne s’affiche, on revient aussi au bout de 8 s.
    _goOut(fn, name, before) {
      clearTimeout(this._tvT);
      clearTimeout(this._safeT);
      this._tvT = setTimeout(() => {
        fn().then((ok) => {
          if (ok) {
            this._safeT = setTimeout(() => { if (!document.hidden) { note((name || "l’appli") + " ne s’est pas affichée"); this._resume(); } }, 8000);
            return;
          }
          toast((name || "Cette appli") + " n’a pas pu s’ouvrir");
          if (before) this.setState(before);
          this._resume();
        });
      }, 90);
    }

    // Retour dans le launcher (après une appli, une source…) : l’accueil réapparaît en fondu.
    _resume() {
      const s = this.state || {};
      clearTimeout(this._safeT);
      if (this._fx) { this._fx.close(); this._fx = null; }
      if (onTV) video.releaseLive();
      this._armIdle();
      if (!s.launch) { this._tvVideo(); return; }
      clearTimeout(this._lt1);
      clearTimeout(this._lt2);
      clearTimeout(this._fadeT);
      this.setState({ launch: Object.assign({}, s.launch, { phase: "fade" }) });
      this._fadeT = setTimeout(() => this.setState({ launch: null }), 260);
    }
  }

  class Hub extends HubLogic {
    componentDidMount() {
      super.componentDidMount();
      if (typeof window !== "undefined") window.__dcRemote = "hub";
      this._onVis = () => {
        const L = (this.state || {}).launch;
        if (document.hidden) return;
        if (this._fx || document.documentElement.classList.contains("lfx-hub")) this._endFx();
        if (!L) return;
        clearTimeout(this._lt1);
        clearTimeout(this._lt2);
        this.setState({ launch: Object.assign({}, L, { phase: "fade" }) });
        this._lt1 = setTimeout(() => this.setState({ launch: null }), 260);
      };
      document.addEventListener("visibilitychange", this._onVis);
    }

    componentWillUnmount() {
      super.componentWillUnmount();
      document.removeEventListener("visibilitychange", this._onVis);
      clearTimeout(this._tvT);
      if (this._fx) this._fx.close(true);
      if (typeof document !== "undefined") document.documentElement.classList.remove("lfx-hub");
    }

    _openSys() {
      if (!onTV) return super._openSys();
      launchApp("reglages").then((ok) => { if (!ok) super._openSys(); });
    }

    _open(id, el) {
      super._open(id, el);
      if (!onTV) return;
      const n = HDMI[id];
      this._srcP = n ? video.full(n) : null;
      const go = n ? () => this._openSource(n)
        : id === "tizen" ? quitLauncher
        : id === "smartthings" ? () => launchApp("smartthings")
        : null;
      if (!go) return;
      // Même ouverture que sur l’accueil : le bouton grandit jusqu’au plein écran.
      const btn = el || document.querySelector('[data-hub-btn="' + id + '"]');
      if (this._fx) this._fx.close(true);
      this._fx = null;
      document.documentElement.classList.add("lfx-hub");
      try { this._fx = openFx(btn, { id: id, splash: id === "switch" ? "#2A0B0C" : "#0B0C10" }); } catch (e) { note("animation d’ouverture : " + e.message); }
      clearTimeout(this._tvT);
      this._tvT = setTimeout(() => go().then((ok) => {
        if (ok) return;
        toast("La TV n’a pas pu ouvrir « " + ((this._pages()[id] || {}).name || id) + " »");
        this._endFx();
        this.setState({ launch: null });
      }), 90);
    }

    async _openSource(n) {
      const fx = this._fx;
      const res = await (this._srcP || video.full(n));
      this._srcP = null;
      if (fx) await fx.grown;
      if (res === 2 && fx === this._fx) {
        video.revealPage();
        if (fx) await fx.reveal();
      }
      return showSource(n, res >= 1);
    }

    // Retour pendant l’ouverture : on revient au hub.
    _close() {
      if (onTV && this._fx) { clearTimeout(this._tvT); this._endFx(); this.setState({ launch: null }); return; }
      super._close();
    }

    _endFx() {
      if (this._fx) { this._fx.close(); this._fx = null; }
      video.releaseLive();
      setTimeout(() => { if (!this._fx) document.documentElement.classList.remove("lfx-hub"); }, 300);
    }
  }

  return { Main, Hub, mainDefaults: MainBoard.defaults, hubDefaults: HubBoard.defaults };
}

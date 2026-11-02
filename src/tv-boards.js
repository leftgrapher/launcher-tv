// Les deux planches de la maquette, branchées sur la vraie TV.
// La logique de la maquette est reprise telle quelle (boards/*.js, générés) ; seules les actions « vers l’extérieur »
// (ouvrir une appli, une entrée HDMI, les réglages Samsung…) sont ajoutées ici, par héritage.
import { Component } from "preact";
import * as MainBoard from "./boards/main.js";
import * as HubBoard from "./boards/hub.js";
import { onTV, launchApp, showSource, tizenHome, HDMI, store } from "./tv.js";

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
      this._onVis = () => { if (!document.hidden) this._resume(); };
      document.addEventListener("visibilitychange", this._onVis);
    }

    componentWillUnmount() {
      super.componentWillUnmount();
      document.removeEventListener("visibilitychange", this._onVis);
      clearTimeout(this._tvT);
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

    _launch(it, el) {
      const before = this._memo();
      super._launch(it, el);
      if (!onTV || it.sys) return;
      const key = it.add || it.installed === false ? "store" : it.id;
      this._goOut(() => (HDMI[key] ? showSource(HDMI[key]) : launchApp(key)), it.add ? "Le store Samsung" : it.name, before);
    }

    _launchHero(r, el) {
      const before = this._memo();
      super._launchHero(r, el);
      if (!onTV) return;
      this._goOut(() => (HDMI[r.app] ? showSource(HDMI[r.app]) : launchApp(r.app)), r.name, before);
    }

    // Ce qui change quand une appli est ouverte (dernière appli, récentes, reco affichée) : remis comme avant si elle ne s’ouvre pas.
    _memo() {
      const s = this.state || {};
      return { lastOpen: s.lastOpen, recent: s.recent, lastFav: s.lastFav, idx: s.idx };
    }

    // L’écran de lancement s’agrandit (≈ 0,65 s), puis la TV ouvre l’appli. Si elle n’y arrive pas, on revient.
    _goOut(fn, name, before) {
      clearTimeout(this._tvT);
      this._tvT = setTimeout(() => {
        fn().then((ok) => {
          if (ok) return;
          toast((name || "Cette appli") + " n’a pas pu s’ouvrir");
          if (before) this.setState(before);
          this._resume();
        });
      }, 680);
    }

    // Retour dans le launcher (après une appli, une source…) : l’écran se referme dans sa tuile.
    _resume() {
      const s = this.state || {};
      this._armIdle();
      if (s.launch && s.launch.phase === "open") this._back(document.querySelector("[data-launcher]"));
      else if (s.launch) setTimeout(() => this._resume(), 300);
    }
  }

  class Hub extends HubLogic {
    componentDidMount() {
      super.componentDidMount();
      if (typeof window !== "undefined") window.__dcRemote = "hub";
      this._onVis = () => {
        if (!document.hidden && (this.state || {}).launch) this._close();
      };
      document.addEventListener("visibilitychange", this._onVis);
    }

    componentWillUnmount() {
      super.componentWillUnmount();
      document.removeEventListener("visibilitychange", this._onVis);
      clearTimeout(this._tvT);
    }

    _openSys() {
      if (!onTV) return super._openSys();
      launchApp("reglages").then((ok) => { if (!ok) super._openSys(); });
    }

    _open(id, el) {
      super._open(id, el);
      if (!onTV) return;
      const go = HDMI[id] ? () => showSource(HDMI[id])
        : id === "tizen" ? tizenHome
        : id === "smartthings" ? () => launchApp("smartthings")
        : null;
      if (!go) return;
      clearTimeout(this._tvT);
      this._tvT = setTimeout(() => go().then((ok) => {
        if (ok) return;
        toast("La TV n’a pas pu ouvrir « " + ((this._pages()[id] || {}).name || id) + " »");
        this._close();
      }), 680);
    }
  }

  return { Main, Hub, mainDefaults: MainBoard.defaults, hubDefaults: HubBoard.defaults };
}

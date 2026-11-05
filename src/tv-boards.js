// Les deux planches de la maquette, branchées sur la vraie TV.
// La logique de la maquette est reprise telle quelle (boards/*.js, générés) ; seules les actions « vers l’extérieur »
// (ouvrir une appli, une entrée HDMI, les réglages Samsung…) sont ajoutées ici, par héritage.
import { Component } from "preact";
import * as MainBoard from "./boards/main.js";
import * as HubBoard from "./boards/hub.js";
import { onTV, launchApp, launchYoutubeVideo, launchYoutubeOfficial, showSource, quitLauncher, HDMI, store, note } from "./tv.js";
import { openFx, rectIn } from "./launch-fx.js";
import * as video from "./video.js";
import { playFast, warmSounds } from "./sounds.js";
import * as ST from "./smartthings.js";

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
// État des boutons SmartThings du hub (Hue Sync, mode, toute la pièce), retrouvé au démarrage.
const HUB_SAVED = "launcher.hubState";

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
          // L’appli passe derrière une autre : l’aperçu en direct s’arrête (il sera relancé au retour),
          // et l’appli ouverte prend sa place en tête de l’accueil (pas avant, pour que rien ne bouge pendant l’attente).
          if (this._pvFor) { this._pvFor = null; video.stopPreview(); }
          this._flushOpen();
          return;
        }
        this._resume();
      };
      document.addEventListener("visibilitychange", this._onVis);
      this._tvVideo();
      // Sons de l’accueil et du hub préparés d’avance, pendant que rien ne bouge.
      if (onTV) setTimeout(() => {
        warmSounds(this);
        warmSounds({ props: Object.assign({}, HubBoard.defaults, { sons: this.props.sons, volumeSons: this.props.volumeSons }), _sons: HubLogic.prototype._sons });
      }, 1200);
    }

    // Sons : rejoués depuis des tampons préparés d’avance (voir sounds.js).
    _snd(name, o) {
      if (onTV && playFast(this, name, o)) return;
      super._snd(name, o);
    }

    componentWillUnmount() {
      super.componentWillUnmount();
      document.removeEventListener("visibilitychange", this._onVis);
      clearTimeout(this._tvT);
      clearTimeout(this._safeT);
      clearTimeout(this._pvT);
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
      // Le hub s’ouvre par-dessus sans toucher au fond 4K (le couper et le recharger ferait saccader son ouverture).
      const calmBg = !s.launch && !s.sys && !s.edit && !this._fx && !document.hidden;
      const calm = calmBg && !(remote() && remote() !== "main");
      let cur = null;
      try { cur = N.progFor && N.idx != null ? N.progFor(N.idx) : null; } catch (e) {}
      const f = s.focus || s.lastOpen;
      const n = HDMI[f];
      // Pas de fond 4K quand une source HDMI est sélectionnée dans le dock : son aperçu en direct va prendre le plan vidéo.
      const srcFocus = view === "home" && !!n;
      video.wantBg(calmBg && !srcFocus && (view === "home" || view === "hero") && cur && cur.bg4k ? cur.bg4k : null);
      // Aperçu : quand la tuile d’une source HDMI reste sélectionnée, son image en direct s’affiche dans la tuile.
      // La tuile doit avoir fini de grandir (rebond compris) avant qu’on mesure sa place : sinon, en revenant vite sur
      // la PS5, l’image en direct se calait sur une tuile encore en mouvement, donc décalée.
      if (f !== this._lastFocus) { this._lastFocus = f; this._focusAt = Date.now(); }
      const want = calm && !!n && s.peek === f && view === "home" && this.props.apercuDirect !== false;
      const since = Date.now() - (this._focusAt || 0);
      if (want && this._pvFor !== f && since < 800) {
        clearTimeout(this._pvT);
        this._pvT = setTimeout(() => this._tvVideo(), 820 - since);
        return;
      }
      if (want && this._pvFor !== f) {
        const el = document.querySelector('[data-tile="' + f + '"]');
        if (!el) return;
        this._pvFor = f;
        // L’image en direct remplit l’intérieur du cadre de la tuile (le liseré de sélection reste autour), coins arrondis compris.
        const r = rectIn(el);
        const k = r.w / (el.offsetWidth || r.w);
        const rim = 2 * k;
        const rad = (parseFloat(getComputedStyle(el).borderTopLeftRadius) || 22) * k;
        video.preview(n, { x: r.x + rim, y: r.y + rim, w: r.w - 2 * rim, h: r.h - 2 * rim, r: Math.max(0, rad - rim) });
      } else if (!want && this._pvFor) {
        this._pvFor = null;
        video.stopPreview();
      }
    }

    // Pas d’écran de veille sur la TV (il ne servait à rien) ; dans la maquette, il reste visible.
    _sleep() {
      if (onTV) return;
      if (remote() && remote() !== "main") { this._armIdle(); return; }
      super._sleep();
    }

    // Réglages : sur la TV, le vrai panneau Samsung s’ouvre par-dessus le launcher (le panneau simulé reste pour l’aperçu).
    _openSys() {
      if (!onTV) return super._openSys();
      launchApp("reglages").then((ok) => { if (!ok) super._openSys(); });
    }

    // Sur la TV, l’écran de lancement de la maquette n’est pas affiché.
    // Applis : lancées tout de suite ; la tuile pulse doucement jusqu’à ce que l’appli s’affiche (une animation plein écran
    // ne servait à rien, l’appli mettant plus de temps à démarrer).
    // Sources HDMI : la tuile grandit jusqu’au plein écran et laisse voir l’image en direct (launch-fx.js).
    _startFx(el, opts) {
      if (this._fx) this._fx.close(true);
      this._fx = null;
      try { this._fx = openFx(el, opts); } catch (e) { note("animation d’ouverture : " + e.message); }
    }

    _wait(el) {
      this._unwait();
      if (!el) return;
      const holder = el.parentElement && el.parentElement.querySelector("[data-tile]") === el ? el.parentElement : el;
      holder.classList.add("lfx-wait");
      this._waitEl = holder;
    }

    _unwait() {
      if (this._waitEl) this._waitEl.classList.remove("lfx-wait");
      this._waitEl = null;
    }

    // La maquette range l’appli ouverte en tête de l’accueil 0,64 s après l’appui : sur la TV, on attend qu’elle s’affiche.
    _deferOpen(update) {
      clearTimeout(this._lt2);
      this._pendingOpen = update;
    }

    _flushOpen() {
      const f = this._pendingOpen;
      this._pendingOpen = null;
      if (f) this.setState((s) => (s.launch ? f(s) : {}));
    }

    _launch(it, el) {
      const before = this._memo();
      super._launch(it, el);
      if (!onTV || it.sys) return;
      const key = it.add || it.installed === false ? "store" : it.id;
      const store = it.installed === false || !!it.add;
      this._deferOpen((s) => (store
        ? { launch: Object.assign({}, s.launch, { phase: "open" }), focus: it.id }
        : Object.assign({ launch: Object.assign({}, s.launch, { phase: "open" }), lastOpen: it.id, focus: it.id, lastFav: it.id, view: "home" }, this._opened(s, it.id))));
      if (HDMI[key]) {
        // Source HDMI : son image en direct est demandée tout de suite (si elle était déjà en aperçu dans la tuile,
        // elle passe directement en plein écran, sous l’écran qui grandit).
        this._srcP = video.full(HDMI[key]);
        this._startFx(el, { id: it.id });
        this._goOut(() => this._openSource(HDMI[key]), it.name, before);
        return;
      }
      this._wait(el);
      this._goOut(() => launchApp(key), it.add ? "Le store Samsung" : it.name, before);
    }

    // Reco : YouTube ouvre directement la vidéo (TizenTube) ; les autres applis de streaming de la TV n’acceptent pas
    // qu’on leur demande un titre précis, elles s’ouvrent sur leur accueil.
    _launchHero(r, el) {
      const before = this._memo();
      super._launchHero(r, el);
      if (!onTV) return;
      // Vidéo YouTube : dans TizenTube, ou dans l’appli officielle si les recos le demandent (recos.youtube.openIn).
      const official = r.app === "youtube" && r.video && r.openIn === "youtubeapp";
      const tile = official ? "youtubeapp" : r.app;
      this._deferOpen((s) => Object.assign({
        launch: Object.assign({}, s.launch, { phase: "open", card: s.launch && s.launch.card != null ? "0" : null }),
        lastOpen: tile, focus: tile, lastFav: tile
      }, this._opened(s, tile)));
      if (HDMI[r.app]) {
        this._srcP = video.full(HDMI[r.app]);
        this._startFx(el, { id: r.app, image: r.backdrop || null });
        this._goOut(() => this._openSource(HDMI[r.app]), r.name, before);
        return;
      }
      this._wait(el);
      if (!el) toast("Ouverture dans " + (r.name || "l’appli") + "…");
      this._goOut(() => (official ? launchYoutubeOfficial(r.video) : r.app === "youtube" && r.video ? launchYoutubeVideo(r.video) : launchApp(r.app)), r.name, before);
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
      return N.view === "home" && s.focus !== "hub" && !s.launch && !s.sys && !s.edit && !this._fx && !this._waitEl;
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
      }, 0);
    }

    // Retour dans le launcher (après une appli, une source…) : l’accueil réapparaît en fondu.
    _resume() {
      const s = this.state || {};
      clearTimeout(this._safeT);
      if (this._fx) { this._fx.close(); this._fx = null; }
      this._unwait();
      this._pendingOpen = null;
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
    _snd(name, o) {
      if (this._mute) return;
      if (onTV && playFast(this, name, o)) return;
      super._snd(name, o);
    }

    // Réouverture (hub préparé d’avance) : il repart de son état de départ, sans son.
    tvReset() {
      clearTimeout(this._lt1);
      clearTimeout(this._lt2);
      this._mute = true;
      this._cell = null;
      this.setState({ focus: null, tilt: null, pressed: false, launch: null, off: null, toast: null, sys: null }, () => {
        if (this._sndState) this._sndPrev = this._sndState();
        this._mute = false;
      });
    }

    // Boutons reliés à SmartThings : chaque changement lance la routine choisie pour ce bouton (page smartthings.html).
    // Pas encore connecté : le panneau de connexion s’ouvre. Échec : le bouton revient à son état d’avant.
    _set(patch) {
      const s = this.state || {};
      const act = !patch || !onTV ? null
        : "hueOn" in patch && patch.hueOn !== (s.hueOn ?? true) ? (patch.hueOn ? "hueOn" : "hueOff")
        : "mode" in patch ? (patch.mode === "jeu" ? "jeu" : "video")
        : "zoneRoom" in patch && patch.zoneRoom !== !!s.zoneRoom ? (patch.zoneRoom ? "pieceOn" : "pieceOff")
        : null;
      if (!act) return super._set(patch);
      if (!ST.connected()) {
        if (patch.focus) super._set({ focus: patch.focus });
        window.dispatchEvent(new CustomEvent("launcher:smartthings"));
        return;
      }
      const before = { hueOn: s.hueOn ?? true, mode: s.mode || "video", zoneRoom: !!s.zoneRoom };
      super._set(patch);
      this._saveHub(patch);
      ST.run(act).then((r) => {
        if (r.ok) return;
        // Aucune routine choisie pour ce bouton : il ne change pas d’état pour rien.
        this._toast(r.why);
        this.setState(before);
        this._saveHub(before);
      }, (e) => {
        note(e.message);
        if (e.lost) window.dispatchEvent(new CustomEvent("launcher:smartthings"));
        else this._toast("SmartThings n’a pas répondu");
        this.setState(before);
        this._saveHub(before);
      });
    }

    _saveHub(patch) {
      const cur = store.load(HUB_SAVED, {});
      ["hueOn", "mode", "zoneRoom"].forEach((k) => { if (k in patch) cur[k] = patch[k]; });
      store.save(HUB_SAVED, cur);
    }

    componentDidMount() {
      super.componentDidMount();
      const saved = store.load(HUB_SAVED, null);
      if (saved) {
        this._mute = true;
        this.setState(saved, () => { if (this._sndState) this._sndPrev = this._sndState(); this._mute = false; });
      }
      // Préparé d’avance sur la TV : il ne prend la télécommande qu’à son ouverture (App.openHub).
      if (typeof window !== "undefined" && !this.props.premount) window.__dcRemote = "hub";
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
      if (this._fx) this._fx.close(true);
      this._fx = null;
      document.documentElement.classList.add("lfx-hub");
      // Source HDMI : comme sur l’accueil, le bouton grandit jusqu’au plein écran et laisse voir l’image en direct.
      if (n) {
        const btn = el || document.querySelector('[data-hub-btn="' + id + '"]');
        try { this._fx = openFx(btn, { id: id, splash: id === "switch" ? "#2A0B0C" : "#0B0C10" }); } catch (e) { note("animation d’ouverture : " + e.message); }
      }
      clearTimeout(this._tvT);
      this._tvT = setTimeout(() => go().then((ok) => {
        if (ok) return;
        toast("La TV n’a pas pu ouvrir « " + ((this._pages()[id] || {}).name || id) + " »");
        this._endFx();
        this.setState({ launch: null });
      }), 0);
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

// Plan vidéo de la TV : la seule surface que la TV affiche en vraie 4K (l’interface web, elle, est dessinée en 1920×1080).
// Il sert à deux choses, jamais en même temps :
//  1. les fonds 4K : un court clip HEVC d’une seule image (préparé en ligne avec les recos) joué sous l’interface ;
//     l’image 1080p de la planche s’efface en fondu par-dessus, puis revient avant chaque changement de programme ;
//  2. l’image en direct d’une entrée HDMI : dans la tuile sélectionnée (aperçu) ou en plein écran (ouverture de la source).
// Hors TV (navigateur), rien ne se passe : la planche garde ses images.
import { onTV, note, setHdmi } from "./tv.js";

const T = typeof window !== "undefined" ? window.tizen : undefined;
const html = typeof document !== "undefined" ? document.documentElement : null;
const cls = (name, on) => { if (html) html.classList.toggle(name, !!on); };

const FADE = 900;     // durée du fondu des images de fond dans la planche (transition opacity 900ms)
const DWELL = 700;    // on attend que le programme affiché se stabilise avant de charger sa version 4K
const IDLE = 1500;    // et que la télécommande soit au repos : charger une vidéo 4K pendant qu’on navigue ralentirait l’interface

let lastKey = 0;
if (typeof window !== "undefined") window.addEventListener("keydown", () => { lastKey = Date.now(); }, true);

// ── Lecteur AVPlay (webapis) ─────────────────────────────────

let apisP = null;
function webapis() {
  if (apisP) return apisP;
  apisP = new Promise((res, rej) => {
    if (window.webapis && window.webapis.avplay) return res(window.webapis);
    const s = document.createElement("script");
    s.src = "$WEBAPIS/webapis/webapis.js";
    const t = setTimeout(() => rej(new Error("webapis : pas de réponse")), 5000);
    s.onload = () => { clearTimeout(t); window.webapis && window.webapis.avplay ? res(window.webapis) : rej(new Error("lecteur vidéo absent")); };
    s.onerror = () => { clearTimeout(t); rej(new Error("webapis introuvable")); };
    document.head.appendChild(s);
  });
  apisP.catch((e) => note("fonds 4K désactivés : " + e.message));
  return apisP;
}

let plane = null;
// La TV affiche la vidéo dans la zone de cet élément : sa taille doit être dans son propre attribut style
// (une classe CSS ne suffit pas : sans taille, l’élément garde sa taille par défaut, toute petite, en haut à gauche).
const FULL = "position:fixed;left:0px;top:0px;width:1920px;height:1080px;";
function planeEl() {
  if (plane) return plane;
  plane = document.createElement("object");
  plane.type = "application/avplayer";
  plane.className = "vplane";
  plane.setAttribute("style", FULL);
  plane.setAttribute("width", "1920");
  plane.setAttribute("height", "1080");
  document.body.insertBefore(plane, document.body.firstChild);
  return plane;
}

// Zone d’affichage en coordonnées 1920×1080 (celles qu’attend le lecteur, quelle que soit la taille de la page).
function fullRect(av) {
  const k = 1920 / (window.innerWidth || 1920);
  const r = plane.getBoundingClientRect();
  const x = Math.round(r.left * k), y = Math.round(r.top * k);
  const w = Math.round((r.width || 1920 / k) * k), h = Math.round((r.height || 1080 / k) * k);
  av.setDisplayRect(x, y, w, h);
  return x + "," + y + " " + w + "×" + h;
}

const player = { url: null, gen: 0 };

function closePlayer() {
  player.gen++;
  player.url = null;
  const av = window.webapis && window.webapis.avplay;
  if (!av) return;
  try { av.stop(); } catch (e) {}
  try { av.close(); } catch (e) {}
}

// Ouvre le clip et s’arrête sur sa première image. Résout quand l’image est à l’écran (sous l’interface).
function play(url) {
  return webapis().then((w) => new Promise((res, rej) => {
    closePlayer();
    const g = ++player.gen;
    const av = w.avplay;
    planeEl();
    let done = false;
    const ready = () => {
      if (done || g !== player.gen) return;
      done = true;
      clearTimeout(timer);
      player.url = url;
      res();
    };
    const fail = (e) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      rej(e instanceof Error ? e : new Error(String((e && (e.name || e.message)) || e)));
    };
    const timer = setTimeout(() => fail(new Error("pas d’image au bout de 6 s")), 6000);
    try {
      av.open(url);
      av.setListener({
        // Première image affichée : on fige le clip dessus (en pause, l’image reste à l’écran).
        oncurrentplaytime: (t) => {
          if (done || !(t > 0)) return;
          setTimeout(() => { try { if (g === player.gen) av.pause(); } catch (e) {} ready(); }, 80);
        },
        // Clip terminé sans arrêt : la dernière image reste affichée.
        onstreamcompleted: () => ready(),
        onerror: (e) => fail(new Error("lecture : " + e)),
        onbufferingstart: () => {},
        onbufferingprogress: () => {},
        onbufferingcomplete: () => {},
        onevent: () => {}
      });
      try { av.setStreamingProperty("SET_MODE_4K", "TRUE"); } catch (e) {}
      const zone = fullRect(av);
      try { av.setDisplayMethod("PLAYER_DISPLAY_MODE_FULL_SCREEN"); } catch (e) {}
      if (!player.noted) { player.noted = true; note("fond 4K : zone " + zone + " (page " + window.innerWidth + "×" + window.innerHeight + ")"); }
      av.prepareAsync(() => {
        if (g !== player.gen) return;
        // Zone redonnée une fois le clip prêt : certaines TV la recalculent à la préparation.
        try { fullRect(av); } catch (e) {}
        try { av.play(); } catch (e) { fail(e); }
      }, fail);
    } catch (e) {
      fail(e);
    }
  }));
}

// ── Fonds 4K ─────────────────────────────────────────────────
// Classes posées sur <html> :
//  v-under : la page est transparente sous le programme (fond de la planche, décor dessiné) → on voit le plan vidéo ;
//  v-hero  : l’image 1080p du programme affiché s’efface (fondu de 900 ms) → la 4K apparaît.

const bg = { want: null, shown: null, failed: {}, dwellT: null, tearT: null, waiters: [], gen: 0 };
let liveOn = false;

export function wantBg(url) {
  if (!onTV) return;
  url = url || null;
  if (bg.failed[url]) url = null;
  if (url === bg.want) return;
  bg.want = url;
  stepBg();
}

function flush() {
  const w = bg.waiters;
  bg.waiters = [];
  w.forEach((f) => f());
}

function stepBg() {
  clearTimeout(bg.dwellT);
  const g = ++bg.gen;
  const want = liveOn ? null : bg.want;
  // Déjà en train de repasser en 1080p : on attend la fin du fondu, puis on reprend d’ici.
  if (bg.tearT) return;
  if (bg.shown && bg.shown === want) { cls("v-hero", true); return; }
  if (bg.shown) {
    // Changement de programme : la nouvelle image 1080p arrive en fondu par-dessus la 4K, puis on coupe le lecteur.
    cls("v-hero", false);
    bg.tearT = setTimeout(() => {
      bg.tearT = null;
      closePlayer();
      bg.shown = null;
      cls("v-under", false);
      flush();
      stepBg();
    }, FADE + 60);
    return;
  }
  if (!want) { flush(); return; }
  const wait = () => Math.max(DWELL, IDLE - (Date.now() - lastKey));
  const go = () => {
    if (g !== bg.gen) return;
    if (Date.now() - lastKey < IDLE) { bg.dwellT = setTimeout(go, wait()); return; }
    play(want).then(() => {
      if (g !== bg.gen || bg.want !== want || liveOn) { closePlayer(); return; }
      bg.shown = want;
      cls("v-under", true);
      cls("v-hero", true);
      note("fond 4K affiché");
    }, (e) => {
      bg.failed[want] = true;
      note("fond 4K : " + e.message);
      if (g === bg.gen) closePlayer();
    });
  };
  bg.dwellT = setTimeout(go, wait());
}

// Coupe tout, sans fondu (l’appli passe en arrière-plan, ou une source HDMI prend le plan vidéo) :
// l’image 1080p (la même) revient d’un coup, sans laisser voir le décor dessiné le temps d’un fondu.
function dropBg() {
  clearTimeout(bg.dwellT);
  clearTimeout(bg.tearT);
  bg.tearT = null;
  bg.gen++;
  closePlayer();
  bg.shown = null;
  if (html && html.classList.contains("v-hero")) {
    cls("v-snap", true);
    cls("v-hero", false);
    cls("v-under", false);
    void html.offsetWidth;
    requestAnimationFrame(() => requestAnimationFrame(() => cls("v-snap", false)));
  } else {
    cls("v-hero", false);
    cls("v-under", false);
  }
  flush();
}

// Le plan vidéo est rendu à la source HDMI : la 4K repasse en image 1080p (en fondu, ou d’un coup si « now »),
// et le lecteur est coupé avant que la source ne s’affiche.
function yieldBg(now) {
  liveOn = true;
  if (now || !bg.shown) { dropBg(); return Promise.resolve(); }
  return new Promise((res) => {
    bg.waiters.push(res);
    stepBg();
  });
}

function resumeBg() {
  liveOn = false;
  stepBg();
}

if (onTV && typeof document !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { dropBg(); return; }
    stepBg();
  });
}

// ── Image en direct d’une entrée HDMI ────────────────────────

const live = { mode: null, n: null, gen: 0 };
const hasTvWindow = () => !!(T && T.tvwindow && T.tvwindow.show);

function tvShow(r, z) {
  return new Promise((res, rej) => {
    try {
      T.tvwindow.show(res, rej, [Math.round(r.x) + "px", Math.round(r.y) + "px", Math.round(r.w) + "px", Math.round(r.h) + "px"], "MAIN", z);
    } catch (e) { rej(e); }
  });
}

function tvHide() {
  try { T.tvwindow.hide(() => {}, () => {}, "MAIN"); } catch (e) {}
}

// Y a-t-il une image sur cette entrée ? (console en veille : non). Sans moyen de le savoir, on suppose que oui.
function signal(ms) {
  if (!T.tvwindow.getVideoResolution) return new Promise((res) => setTimeout(() => res(true), 700));
  const end = Date.now() + ms;
  return new Promise((res) => {
    const ask = () => {
      try {
        T.tvwindow.getVideoResolution((v) => {
          if (v && v.width > 0 && v.height > 0) return res(true);
          if (Date.now() > end) return res(false);
          setTimeout(ask, 250);
        }, () => (Date.now() > end ? res(false) : setTimeout(ask, 250)), "MAIN");
      } catch (e) { res(true); }
    };
    ask();
  });
}

const err = (e) => ((e && ((e.name || "") + " " + (e.message || "")).trim()) || String(e));

// Fenêtre découpée dans l’interface (coins arrondis compris) à l’endroit de la tuile : l’image en direct, placée
// sous l’interface, n’est visible que là, exactement dans le cadre de la tuile.
let holeT = null;
function setHole(h, later) {
  const root = document.querySelector("[data-launcher]");
  if (!root) return;
  const st = root.style;
  clearTimeout(holeT);
  if (!h) {
    const clear = () => ["-webkit-mask-image", "-webkit-mask-size", "-webkit-mask-position", "-webkit-mask-repeat", "-webkit-mask-composite", "mask-composite"].forEach((p) => st.removeProperty(p));
    if (!later || !st.getPropertyValue("-webkit-mask-image")) { clear(); return; }
    // Fermeture rapide : la fenêtre est simplement poussée hors de l’écran (l’interface redevient opaque partout tout de
    // suite) ; le masque lui-même n’est retiré qu’ensuite, quand la tuile suivante est affichée.
    st.setProperty("-webkit-mask-position", "0 0, -4000px -4000px");
    holeT = setTimeout(clear, later);
    return;
  }
  const svg = "<svg xmlns='http://www.w3.org/2000/svg' width='" + h.w + "' height='" + h.h + "'><rect width='" + h.w + "' height='" + h.h + "' rx='" + h.r + "' ry='" + h.r + "' fill='black'/></svg>";
  st.setProperty("-webkit-mask-image", "linear-gradient(#000,#000), url(\"data:image/svg+xml;utf8," + encodeURIComponent(svg) + "\")");
  st.setProperty("-webkit-mask-size", "100% 100%, " + h.w + "px " + h.h + "px");
  st.setProperty("-webkit-mask-position", "0 0, " + h.x + "px " + h.y + "px");
  st.setProperty("-webkit-mask-repeat", "no-repeat");
  st.setProperty("-webkit-mask-composite", "xor");
  st.setProperty("mask-composite", "exclude");
}

// Position réelle de l’image en direct (pour le panneau Info) : la TV a-t-elle bien pris la taille demandée ?
function checkRect(want, g) {
  try {
    T.tvwindow.getRect((r) => {
      if (g !== live.gen) return;
      const got = (r || []).map((v) => Math.round(parseFloat(v)));
      const exp = [want.x, want.y, want.w, want.h].map(Math.round);
      const off = got.length === 4 && got.some((v, i) => Math.abs(v - exp[i]) > 3);
      note("aperçu : demandé " + exp.join(",") + " · TV " + got.join(",") + (off ? " → recalé" : ""));
      if (off) tvShow(want, "BEHIND").catch(() => {});
    }, () => {}, "px", "MAIN");
  } catch (e) {}
}

// Aperçu en direct dans une tuile. hole : intérieur du cadre de la tuile en coordonnées 1920×1080, avec son arrondi
// { x, y, w, h, r }. L’image (16:9) le couvre entièrement, centrée, sans être déformée. Résout true si elle est affichée.
export async function preview(n, hole) {
  if (!onTV || !hasTvWindow()) return false;
  const g = ++live.gen;
  live.mode = "preview";
  live.n = n;
  try {
    const hadBg = !!bg.shown || !!player.url;
    await yieldBg(false);
    if (g !== live.gen) return false;
    // Le lecteur 4K vient d’être fermé : on laisse la TV le libérer avant d’afficher la source.
    if (hadBg) await new Promise((r) => setTimeout(r, 200));
    await setHdmi(n);
    if (g !== live.gen) return false;
    if (!(await signal(2200))) {
      note("aperçu HDMI " + n + " : pas d’image (appareil éteint ?)");
      if (g === live.gen) { live.mode = null; resumeBg(); }
      return false;
    }
    if (g !== live.gen) return false;
    const w = Math.max(hole.w, (hole.h * 16) / 9) + 2, h = (w * 9) / 16;
    const rect = { x: hole.x + hole.w / 2 - w / 2, y: hole.y + hole.h / 2 - h / 2, w, h };
    await tvShow(rect, "BEHIND");
    if (g !== live.gen) { tvHide(); return false; }
    // Vérifiée un peu plus tard : si la TV a gardé une autre taille, on la redonne.
    setTimeout(() => { if (g === live.gen) checkRect(rect, g); }, 350);
    setHole({ x: Math.round(hole.x), y: Math.round(hole.y), w: Math.round(hole.w), h: Math.round(hole.h), r: Math.round(hole.r) });
    note("aperçu en direct HDMI " + n);
    return true;
  } catch (e) {
    note("aperçu HDMI " + n + " : " + err(e));
    if (g === live.gen) { live.mode = null; setHole(null); resumeBg(); }
    return false;
  }
}

// Arrêt de l’aperçu (on vient de quitter la tuile) : la fenêtre se referme tout de suite dans l’interface, et l’image
// en direct est masquée juste après, pour ne pas retarder l’affichage de la tuile suivante.
export function stopPreview() {
  if (live.mode !== "preview") return;
  const g = ++live.gen;
  live.mode = null;
  setHole(null, 600);
  // L’image en direct est déjà cachée par l’interface redevenue opaque : on la retire plus tard, une fois la tuile
  // suivante affichée (cet appel à la TV peut bloquer un instant).
  setTimeout(() => { if (g === live.gen) tvHide(); }, 600);
  resumeBg();
}

// Ouverture d’une source : son image en direct en plein écran, sous l’interface.
// Renvoie 2 si l’image est là (la page peut devenir transparente pour la laisser voir),
// 1 si la source est choisie mais sans image à montrer, 0 si la source n’a pas pu être choisie.
export async function full(n) {
  if (!onTV || !hasTvWindow()) return 0;
  const g = ++live.gen;
  const already = live.mode === "preview" && live.n === n;
  live.mode = "full";
  live.n = n;
  let set = already;
  try {
    await yieldBg(true);
    if (!already) {
      await setHdmi(n);
      set = true;
      if (!(await signal(1600))) { note("HDMI " + n + " : pas encore d’image"); return 1; }
    }
    if (g !== live.gen) return 1;
    await tvShow({ x: 0, y: 0, w: 1920, h: 1080 }, "BEHIND");
    setHole(null);
    return g === live.gen ? 2 : 1;
  } catch (e) {
    note("image en direct HDMI " + n + " : " + err(e));
    return set ? 1 : 0;
  }
}

// Retour dans le launcher : plus d’image en direct, l’interface redevient opaque, les fonds 4K reprennent.
export function releaseLive() {
  if (!live.mode && !html.classList.contains("v-full")) { if (liveOn) resumeBg(); return; }
  live.gen++;
  live.mode = null;
  setHole(null);
  if (hasTvWindow()) tvHide();
  if (html.classList.contains("v-full")) {
    cls("v-full", false);
    // L’interface réapparaît en fondu.
    cls("v-return", true);
    setTimeout(() => cls("v-return", false), 400);
  }
  resumeBg();
}

export function revealPage() { cls("v-full", true); }

// Pour le panneau Info.
export function videoState() {
  return (bg.shown ? "fond 4K affiché" : bg.want ? "fond 4K en attente" : "pas de fond 4K") + (live.mode ? " · HDMI " + live.n + " en direct (" + live.mode + ")" : "");
}

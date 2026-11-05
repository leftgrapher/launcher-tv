// SmartThings : les boutons du hub (Hue Sync, mode vidéo, mode gaming, toute la pièce) lancent tes routines.
//
// La connexion se fait une fois depuis le téléphone (page smartthings.html du site) : elle autorise l’appli
// SmartThings, fait choisir une routine par bouton, puis donne un « code de connexion » à coller ici. Ce code
// contient les identifiants de l’appli SmartThings, un jeton de renouvellement et les routines choisies.
// Tout reste sur la TV (localStorage) ; le jeton d’accès (24 h) est renouvelé tout seul, et chaque renouvellement
// donne un nouveau jeton de renouvellement (l’ancien ne sert plus).
import { store, note } from "./tv.js";

const KEY = "launcher.smartthings";
const API = "https://api.smartthings.com/v1";

export const ACTIONS = {
  video: "Mode vidéo",
  jeu: "Mode gaming",
  hueOn: "Hue Sync activé",
  hueOff: "Hue Sync désactivé",
  pieceOn: "Toute la pièce",
  pieceOff: "TV seule"
};

let st = store.load(KEY, null);
let refreshing = null;
let lastError = "";

const save = () => store.save(KEY, st);

export function connected() {
  return !!(st && st.ci && st.cs && st.rt);
}

export function sceneFor(action) {
  return (st && st.sc && st.sc[action]) || null;
}

// Code de connexion de la page du téléphone : « ST1: » + JSON en base64url.
export function decode(text) {
  const m = /ST1:([A-Za-z0-9_-]+)/.exec(String(text || "").replace(/\s+/g, ""));
  if (!m) throw new Error("ce n’est pas un code de connexion (il commence par ST1:)");
  const b64 = m[1].replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(b64 + "=".repeat((4 - (b64.length % 4)) % 4));
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  let o;
  try { o = JSON.parse(new TextDecoder().decode(bytes)); } catch (e) { throw new Error("code de connexion incomplet (copié en entier ?)"); }
  if (!o || !o.ci || !o.cs || !o.rt || !o.sc) throw new Error("code de connexion incomplet");
  return o;
}

// Nouveau jeton d’accès (et nouveau jeton de renouvellement). Un seul renouvellement à la fois.
function refresh() {
  if (refreshing) return refreshing;
  refreshing = (async () => {
    const r = await fetch(API + "/oauth/token", {
      method: "POST",
      headers: { Authorization: "Basic " + btoa(st.ci + ":" + st.cs), "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
      body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: st.rt, client_id: st.ci }).toString()
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok || !j.access_token) {
      const err = new Error("SmartThings a refusé le renouvellement (" + r.status + (j.error ? " " + j.error : "") + ")");
      // Jeton refusé (expiré, déjà utilisé, appli supprimée) : il faut refaire la connexion depuis le téléphone.
      if (r.status === 400 || r.status === 401) { st = Object.assign({}, st, { rt: null, at: null, exp: 0 }); save(); err.lost = true; }
      throw err;
    }
    st = Object.assign({}, st, { at: j.access_token, rt: j.refresh_token || st.rt, exp: Date.now() + (j.expires_in || 86400) * 1000 });
    save();
    return st.at;
  })();
  refreshing.then(() => { refreshing = null; lastError = ""; }, (e) => { refreshing = null; lastError = e.message; });
  return refreshing;
}

// Jeton d’accès valable : renouvelé quand il lui reste moins de 6 heures (sur 24).
function token() {
  if (!connected()) return Promise.reject(Object.assign(new Error("SmartThings n’est pas connecté"), { lost: true }));
  if (st.at && st.exp - Date.now() > 6 * 3600 * 1000) return Promise.resolve(st.at);
  return refresh();
}

async function call(path, opts = {}, retry = true) {
  const at = await token();
  const r = await fetch(API + path, Object.assign({}, opts, {
    headers: Object.assign({ Authorization: "Bearer " + at, Accept: "application/json" }, opts.headers || {})
  }));
  if (r.status === 401 && retry) {
    st.exp = 0;
    await refresh();
    return call(path, opts, false);
  }
  if (!r.ok) throw new Error("SmartThings " + r.status);
  return r.status === 204 ? null : r.json().catch(() => null);
}

export async function scenes() {
  const out = [];
  let next = "/scenes?max=200";
  for (let n = 0; next && n < 10; n++) {
    const j = await call(next);
    ((j && j.items) || []).forEach((s) => out.push({ id: s.sceneId, name: s.sceneName || "Sans nom" }));
    const href = j && j._links && j._links.next && j._links.next.href;
    next = href ? href.replace(API, "") : null;
  }
  return out;
}

// Lance la routine d’un bouton du hub. { ok: false, why } si aucune routine n’est choisie pour ce bouton.
export async function run(action) {
  const id = sceneFor(action);
  if (!id) return { ok: false, why: "Pas de routine pour « " + ACTIONS[action] + " »" };
  await call("/scenes/" + encodeURIComponent(id) + "/execute", { method: "POST" });
  note("SmartThings : " + ACTIONS[action] + ((st.names && st.names[action]) ? " (« " + st.names[action] + " »)" : "") + " lancé");
  return { ok: true };
}

// Connexion avec le code collé : on renouvelle tout de suite le jeton (ce qui vérifie le code), puis on retient le
// nom des routines choisies pour le panneau Info.
export async function connect(text) {
  const o = decode(text);
  st = { ci: o.ci, cs: o.cs, rt: o.rt, sc: o.sc, at: null, exp: 0, at0: Date.now() };
  await refresh();
  try {
    const list = await scenes();
    st.names = {};
    Object.keys(st.sc).forEach((k) => { const s = list.find((x) => x.id === st.sc[k]); if (s) st.names[k] = s.name; });
    save();
  } catch (e) { note("SmartThings : noms des routines indisponibles (" + e.message + ")"); }
  note("SmartThings connecté (" + Object.keys(st.sc).length + " routines)");
  return st;
}

// Au démarrage puis toutes les 6 heures : garde la connexion vivante (le jeton de renouvellement expire s’il ne sert
// pas pendant longtemps).
export function keepAlive() {
  if (connected()) token().catch((e) => note(e.message));
}

export function status() {
  if (!st || !st.ci) return "pas connecté (bouton du hub > Connecter SmartThings)";
  if (!st.rt) return "à reconnecter" + (lastError ? " · " + lastError : "");
  const names = st.names || {};
  const map = Object.keys(ACTIONS).filter((k) => st.sc && st.sc[k]).map((k) => ACTIONS[k] + " → « " + (names[k] || "routine") + " »");
  return "connecté · " + (map.length ? map.join(" · ") : "aucune routine choisie") + (lastError ? " · dernier souci : " + lastError : "");
}

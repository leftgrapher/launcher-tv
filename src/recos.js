// Recos de l’accueil : préparées en ligne toutes les 6 h (tools/recos.mjs), lues ici et gardées pour démarrer sans réseau.
import { store } from "./tv.js";

const KEY = "launcher.recos";

export function cachedRecos() {
  const c = store.load(KEY, null);
  return c && Array.isArray(c.items) && c.items.length ? c : null;
}

export async function fetchRecos(base) {
  const r = await fetch((base || "") + "data/recos.json?t=" + Date.now(), { cache: "no-store" });
  if (!r.ok) throw new Error("recos " + r.status);
  const j = await r.json();
  if (!j || !Array.isArray(j.items) || !j.items.length) throw new Error("recos vides");
  store.save(KEY, j);
  return j;
}

// Format attendu par l’écran d’accueil (planche Main) : titre, appli, raison, détail, images.
export function heroItems(data) {
  return ((data && data.items) || []).map((it) => ({
    id: it.id, kind: it.kind, tmdb: it.tmdb,
    title: it.title, app: it.app, reason: it.reason, detail: it.detail,
    backdrop: it.backdrop, thumb: it.thumb, logo: it.logo
  }));
}

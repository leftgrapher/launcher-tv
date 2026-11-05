// Prépare les recos de l’accueil : node tools/recos.mjs [fichier de sortie]
//
// Sources : ta liste et tes séries en cours (Serializd), ta watchlist, tes films vus et notés (Letterboxd),
// le Top 10 officiel de Netflix en France, et TMDB pour les détails, les images, les bandes-annonces
// et les plateformes où chaque titre est inclus dans l’abonnement (données JustWatch).
// Il faut une clé TMDB dans la variable TMDB_TOKEN (jeton de lecture « eyJ… » ou clé d’API).
// En option : YOUTUBE_KEY (nouvelles vidéos de tes abonnements) et IGDB_CLIENT_ID + IGDB_CLIENT_SECRET (jeux RPG, indé
// et puzzle du moment, via IGDB : identifiants d’une appli Twitch, gratuite).
import fs from "node:fs";
import path from "node:path";
import * as L from "./recos-lib.mjs";
import { prepare4k } from "./bg4k.mjs";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const cfg = JSON.parse(fs.readFileSync(process.env.RECOS_CONFIG || path.join(root, "launcher.config.json"), "utf8")).recos || {};
const OUT = path.resolve(process.argv[2] || path.join(root, "dist/site/data/recos.json"));
const CACHE = path.resolve(process.env.RECOS_CACHE || path.join(root, ".cache/recos-cache.json"));
const TOKEN = (process.env.TMDB_TOKEN || "").trim();
const REGION = cfg.region || "FR";
const LANG = cfg.language || "fr-FR";
const MINE = cfg.platforms || ["netflix", "prime", "appletv", "hbo", "crunchyroll"];
const MAX = cfg.max || 12;
const YT_KEY = (process.env.YOUTUBE_KEY || "").trim();
const IGDB_ID = (process.env.IGDB_CLIENT_ID || "").trim();
const IGDB_SECRET = (process.env.IGDB_CLIENT_SECRET || "").trim();
const YT = cfg.youtube || {};
const GAMES = cfg.games || {};

if (!TOKEN) {
  console.log("Pas de clé TMDB (variable TMDB_TOKEN) : les recos ne sont pas générées, l’accueil garde ses exemples.");
  process.exit(0);
}

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.log(...a);

async function get(url, opts = {}, tries = 3) {
  let last;
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { ...opts, headers: { "User-Agent": UA, ...(opts.headers || {}) }, signal: AbortSignal.timeout(60000) });
      if (r.status === 429 || r.status >= 500) { last = new Error(r.status + " " + url); await sleep(1500 * (i + 1)); continue; }
      if (!r.ok) throw Object.assign(new Error(r.status + " " + url), { status: r.status });
      return r;
    } catch (e) {
      last = e;
      if (e.status && e.status < 500) break;
      await sleep(800 * (i + 1));
    }
  }
  throw last;
}

let cache = {};
try { cache = JSON.parse(fs.readFileSync(CACHE, "utf8")); } catch (e) {}
cache.lbFilms = cache.lbFilms || {};

// ── Serializd ────────────────────────────────────────────────
const SZ = "https://serializd.onrender.com/api/user/" + encodeURIComponent(cfg.serializd || "") + "/";
const SZ_HEADERS = { Accept: "application/json, text/plain, */*", "X-Requested-With": "serializd_vercel" };

async function szList(name, query) {
  const out = [];
  for (let page = 1; page <= 20; page++) {
    const j = await (await get(SZ + name + "/" + page + query, { headers: SZ_HEADERS })).json();
    out.push(...L.szItems(j));
    if (page >= (j.totalPages || 1)) break;
  }
  return out;
}

async function serializd() {
  if (!cfg.serializd) return { watchlist: [], watching: [], watched: [] };
  try {
    const q = "?sort_by=date_added_desc&filters=%7B%7D";
    const data = {
      watchlist: await szList("watchlistpage_v2", q),
      watching: await szList("currently_watching_page", "?sort_by=date_added_desc"),
      watched: await szList("watchedpage_v2", q)
    };
    cache.serializd = data;
    log("Serializd :", data.watchlist.length, "dans ta liste,", data.watching.length, "en cours,", data.watched.length, "vues");
    return data;
  } catch (e) {
    log("Serializd indisponible (" + e.message + ") : dernière version connue.");
    return cache.serializd || { watchlist: [], watching: [], watched: [] };
  }
}

// ── Letterboxd ───────────────────────────────────────────────
const LB = "https://letterboxd.com/" + encodeURIComponent(cfg.letterboxd || "") + "/";

// Letterboxd limite les lectures trop rapprochées : pages espacées, et ce qui a été lu est gardé si une page est refusée.
async function lbPages(p) {
  const out = [];
  let complete = true;
  for (let page = 1; page <= 40; page++) {
    let html;
    try { html = await (await get(LB + p + (page > 1 ? "page/" + page + "/" : ""), {}, 2)).text(); } catch (e) { complete = false; break; }
    const items = L.lbPosters(html);
    out.push(...items);
    if (!items.length || !L.lbHasNext(html)) break;
    await sleep(1500);
  }
  return { items: out, complete };
}

async function lbTmdb(slug) {
  if (cache.lbFilms[slug]) return cache.lbFilms[slug];
  const html = await (await get("https://letterboxd.com/film/" + slug + "/", {}, 1)).text();
  const t = L.lbFilmTmdb(html);
  if (t) cache.lbFilms[slug] = t;
  await sleep(900);
  return t;
}

async function letterboxd() {
  const empty = { watchlist: [], watched: [], diary: [] };
  if (!cfg.letterboxd) return empty;
  const prev = cache.letterboxd || empty;
  const notes = [];
  const wl = await lbPages("watchlist/");
  await sleep(1500);
  const wd = await lbPages("films/");
  let diary = prev.diary;
  try { diary = L.lbRss(await (await get(LB + "rss/", {}, 2)).text()); } catch (e) { notes.push("journal"); }
  // Identifiants TMDB des films (mémorisés d’un passage à l’autre) ; on s’arrête au premier refus.
  let fetched = 0;
  for (const f of wl.items.concat(wd.items)) {
    if (cache.lbFilms[f.slug] || fetched >= 120) continue;
    try { await lbTmdb(f.slug); fetched++; } catch (e) { notes.push("fiches films"); break; }
  }
  const withId = (list) => list.map((f) => Object.assign({}, f, cache.lbFilms[f.slug] || {})).filter((f) => f.tmdb);
  const merge = (fresh, complete, old) => {
    if (complete) return fresh;
    const seen = new Set(fresh.map((f) => f.slug));
    return fresh.concat((old || []).filter((f) => !seen.has(f.slug)));
  };
  if (!wl.complete) notes.push("watchlist");
  if (!wd.complete) notes.push("films vus");
  const data = {
    watchlist: withId(wl.items.length || wl.complete ? merge(wl.items, wl.complete, prev.watchlist) : prev.watchlist),
    watched: withId(merge(wd.items, wd.complete, prev.watched)),
    diary
  };
  cache.letterboxd = data;
  log("Letterboxd :", data.watchlist.length, "dans ta watchlist,", data.watched.length, "films vus,", diary.length, "dans le journal" + (notes.length ? " (en partie : " + notes.join(", ") + " refusé par Letterboxd, dernière version connue gardée)" : ""));
  return data;
}

// ── TMDB ─────────────────────────────────────────────────────
const TM = "https://api.themoviedb.org/3";
const bearer = TOKEN.startsWith("eyJ");

async function tm(p, params = {}) {
  const u = new URL(TM + p);
  for (const k of Object.keys(params)) u.searchParams.set(k, params[k]);
  if (!bearer) u.searchParams.set("api_key", TOKEN);
  return (await get(u, bearer ? { headers: { Authorization: "Bearer " + TOKEN, Accept: "application/json" } } : {})).json();
}

async function providerIds() {
  const ids = {};
  for (const kind of ["tv", "movie"]) {
    const j = await tm("/watch/providers/" + kind, { watch_region: REGION, language: LANG });
    for (const p of j.results || []) {
      const app = L.appOfProvider(p.provider_name);
      if (app && MINE.indexOf(app) >= 0) (ids[app] = ids[app] || new Set()).add(p.provider_id);
    }
  }
  return ids;
}

async function details(kind, id) {
  return tm("/" + kind + "/" + id, {
    language: LANG,
    append_to_response: "images,watch/providers,videos",
    include_image_language: LANG.slice(0, 2) + ",en,null",
    include_video_language: LANG.slice(0, 2) + ",en"
  });
}

async function pool(items, n, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => {
    while (i < items.length) {
      const k = i++;
      try { out[k] = await fn(items[k]); } catch (e) { out[k] = null; }
    }
  }));
  return out;
}

// ── YouTube : nouvelles vidéos de tes abonnements ───────────
// Abonnements lus avec la clé YOUTUBE_KEY (ils doivent être publics sur ta chaîne), ou liste fixe dans launcher.config.json.
// Les vidéos viennent ensuite des flux RSS des chaînes (gratuits, sans quota).
async function youtube() {
  let channels = (YT.channels || []).slice();
  if (YT_KEY && YT.channelId) {
    try {
      let pageToken = "";
      for (let n = 0; n < 4; n++) {
        const u = new URL("https://www.googleapis.com/youtube/v3/subscriptions");
        u.search = new URLSearchParams({ part: "snippet", channelId: YT.channelId, maxResults: "50", order: "relevance", key: YT_KEY, ...(pageToken ? { pageToken } : {}) });
        const j = await (await get(u)).json();
        if (n === 0) log("YouTube : abonnements de la chaîne " + YT.channelId + " : " + (j.pageInfo && j.pageInfo.totalResults != null ? j.pageInfo.totalResults : (j.items || []).length) + " visibles.");
        (j.items || []).forEach((it) => { const id = it.snippet && it.snippet.resourceId && it.snippet.resourceId.channelId; if (id && channels.indexOf(id) < 0) channels.push(id); });
        if (!j.nextPageToken) break;
        pageToken = j.nextPageToken;
      }
      cache.ytChannels = channels;
    } catch (e) {
      log("Abonnements YouTube indisponibles (" + e.message + ") : dernière liste connue.");
      channels = cache.ytChannels || channels;
    }
  }
  if (!channels.length) {
    log("YouTube : aucune chaîne à suivre" + (YT_KEY ? " (abonnements privés ? Sur YouTube : Paramètres > Confidentialité > décocher « Garder tous mes abonnements privés »)." : " (pas de clé YOUTUBE_KEY)."));
    return [];
  }
  const since = Date.now() - (YT.days || 10) * 86400000;
  const feeds = await pool(channels.slice(0, YT.channelsMax || 40), 6, async (id) => L.ytFeed(await (await get("https://www.youtube.com/feeds/videos.xml?channel_id=" + id)).text()));
  const vids = [];
  feeds.forEach((list, rank) => (list || []).forEach((v) => {
    const t = Date.parse(v.published);
    if (!v.short && t >= since) vids.push(Object.assign(v, { rank, age: (Date.now() - t) / 86400000 }));
  }));
  // Les plus récentes des chaînes que tu regardes le plus (ordre de pertinence de YouTube), une par chaîne.
  vids.sort((a, b) => (a.rank * 0.6 + a.age * 2) - (b.rank * 0.6 + b.age * 2));
  const seenCh = new Set();
  const out = [];
  for (const v of vids) {
    if (seenCh.has(v.channel) || out.length >= (YT.max || 3)) continue;
    seenCh.add(v.channel);
    let img = "https://i.ytimg.com/vi/" + v.id + "/maxresdefault.jpg";
    try { await get(img, { method: "HEAD" }, 1); } catch (e) { img = "https://i.ytimg.com/vi/" + v.id + "/hqdefault.jpg"; }
    const date = new Date(v.published).toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
    out.push({
      key: "video:" + v.id, kind: "video", app: "youtube", signals: [{ type: "video", reason: "Nouvelle vidéo de " + v.channel, bonus: Math.max(0, 8 - Math.round(v.age)) }],
      out: { id: "video:" + v.id, kind: "video", video: v.id, openIn: YT.openIn || null, title: v.title, app: "youtube", platform: "YouTube", reason: "Nouvelle vidéo de " + v.channel,
        detail: "Vidéo · " + v.channel + " · " + date, overview: "", backdrop: img, thumb: "https://i.ytimg.com/vi/" + v.id + "/mqdefault.jpg", logo: null, trailer: null }
    });
  }
  log("YouTube :", channels.length, "chaînes,", vids.length, "vidéos récentes,", out.length, "retenues");
  return out;
}

// ── Jeux : RPG, indé et puzzle du moment sur PS5 et Switch (IGDB) ─
// IGDB (la base de jeux de Twitch) : jeux sortis ces derniers mois ou qui sortent bientôt, classés selon ce que ses
// membres jouent et veulent jouer en ce moment, et selon l’attente avant leur sortie.
async function igdb(token, endpoint, body) {
  const r = await get("https://api.igdb.com/v4/" + endpoint, {
    method: "POST",
    headers: { "Client-ID": IGDB_ID, Authorization: "Bearer " + token, Accept: "application/json", "Content-Type": "text/plain" },
    body
  }, 2);
  await sleep(300); // IGDB accepte 4 requêtes par seconde
  return r.json();
}

async function games() {
  if (!IGDB_ID || !IGDB_SECRET) {
    if (IGDB_ID || IGDB_SECRET) log("Jeux : secret GitHub " + (IGDB_ID ? "IGDB_CLIENT_SECRET" : "IGDB_CLIENT_ID") + " absent ou vide.");
    return [];
  }
  let token;
  try {
    // Identifiants dans le corps de la requête (jamais dans l’adresse, qui peut apparaître dans le journal en cas d’erreur).
    const r = await get("https://id.twitch.tv/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ client_id: IGDB_ID, client_secret: IGDB_SECRET, grant_type: "client_credentials" }).toString()
    }, 2);
    token = (await r.json()).access_token;
    if (!token) throw new Error("pas de jeton");
  } catch (e) {
    log("Jeux : connexion à IGDB impossible (" + e.message + "). Vérifie IGDB_CLIENT_ID et IGDB_CLIENT_SECRET.");
    return [];
  }
  try {
    // Plateformes : PS5, Switch et Switch 2.
    let ps = [167], ns = [130];
    try {
      const plats = await igdb(token, "platforms", 'fields id,slug; where slug = ("ps5","switch","switch-2"); limit 10;');
      if (plats.some((p) => p.slug === "ps5")) ps = plats.filter((p) => p.slug === "ps5").map((p) => p.id);
      if (plats.some((p) => /^switch/.test(p.slug))) ns = plats.filter((p) => /^switch/.test(p.slug)).map((p) => p.id);
    } catch (e) { log("Jeux : plateformes IGDB par défaut (" + e.message + ")."); }
    // Popularité du moment : listes « en train d’y jouer » (3) et « envie d’y jouer » (2) des membres d’IGDB.
    const pop = {};
    for (const [type, weight] of [[3, 1.2], [2, 1]]) {
      try {
        const list = await igdb(token, "popularity_primitives", "fields game_id,value; where popularity_type = " + type + "; sort value desc; limit 500;");
        list.forEach((p, i) => { pop[p.game_id] = (pop[p.game_id] || 0) + weight * (1 - i / list.length); });
      } catch (e) { log("Jeux : popularité IGDB (" + type + ") indisponible (" + e.message + ")."); }
    }
    const now = Math.floor(Date.now() / 1000);
    const from = now - (GAMES.days || 150) * 86400, to = now + 45 * 86400;
    const kinds = [
      { genre: 12, label: "RPG", reason: "Tendance RPG", n: 2 },
      { genre: 32, label: "Indé", reason: "Pépite indé du moment", n: 1 },
      { genre: 9, label: "Puzzle", reason: "Puzzle du moment", n: 1 }
    ];
    const raw = await igdb(token, "games",
      "fields name,first_release_date,genres,platforms,hypes,total_rating,total_rating_count," +
      "artworks.image_id,artworks.width,artworks.height,screenshots.image_id,screenshots.width,screenshots.height;" +
      " where platforms = (" + ps.concat(ns).join(",") + ") & genres = (" + kinds.map((k) => k.genre).join(",") + ")" +
      " & first_release_date >= " + from + " & first_release_date <= " + to + " & parent_game = null & version_parent = null;" +
      " sort hypes desc; limit 500;");
    const pool = L.igdbGames(raw, { pop, ps, ns });
    const out = [];
    const taken = new Set();
    for (const k of kinds) {
      let n = 0;
      for (const g of pool) {
        if (n >= k.n || taken.has(g.id) || g.genres.indexOf(k.genre) < 0) continue;
        taken.add(g.id);
        n++;
        const app = g.ps5 ? "ps5" : "switch";
        const soon = g.released && g.released > new Date().toISOString().slice(0, 10);
        const reason = soon ? "Bientôt : " + new Date(g.released).toLocaleDateString("fr-FR", { day: "numeric", month: "long" }) : k.reason;
        const detail = ["Jeu", app === "ps5" ? "PS5" : "Switch", g.released ? g.released.slice(0, 4) : null, k.label].filter(Boolean).join(" · ");
        out.push({
          key: "game:" + g.id, kind: "game", app, signals: [{ type: "game", reason, bonus: Math.max(0, 6 - n * 2) }],
          out: { id: "game:" + g.id, kind: "game", title: g.title, app, platform: app === "ps5" ? "PS5" : "Nintendo Switch", reason, detail,
            overview: "", backdrop: g.backdrop, thumb: g.thumb, uhd: g.uhd, logo: null, trailer: null }
        });
      }
    }
    log("Jeux : IGDB,", (raw || []).length, "jeux récents,", pool.length, "candidats,", out.length, "retenus" + (out.length ? " (" + out.map((o) => o.out.title).join(", ") + ")" : ""));
    return out;
  } catch (e) {
    log("Jeux indisponibles (IGDB) : " + e.message);
    return [];
  }
}

// ── Assemblage ───────────────────────────────────────────────
async function main() {
  const [sz, lb] = [await serializd(), await letterboxd()];
  const cands = new Map();
  const add = (kind, id, signal) => L.addSignal(cands, kind, id, signal);

  // Déjà vu : jamais recommandé (sauf une série en cours).
  const seen = new Set();
  sz.watched.forEach((s) => seen.add("tv:" + s.tmdb));
  lb.watched.forEach((f) => seen.add((f.type === "tv" ? "tv:" : "movie:") + f.tmdb));
  lb.diary.forEach((f) => seen.add("movie:" + f.tmdb));

  sz.watching.forEach((s, i) => add("tv", s.tmdb, { type: "resume", reason: "Reprendre", bonus: Math.max(0, 6 - i) }));
  sz.watchlist.forEach((s, i) => add("tv", s.tmdb, { type: "list", reason: "Dans ta liste", bonus: Math.max(0, 8 - i) }));
  lb.watchlist.forEach((f, i) => add(f.type === "tv" ? "tv" : "movie", f.tmdb, { type: "list", reason: "Dans ta liste", bonus: Math.max(0, 8 - i) }));

  // Proches de ce que tu as aimé : films notés 4/5 ou plus (ou aimés), séries en cours et dernières séries vues.
  const seeds = [];
  lb.diary.filter((f) => f.like || (f.rating || 0) >= 4).slice(0, 6).forEach((f) => seeds.push({ kind: "movie", id: f.tmdb, title: f.title }));
  sz.watching.slice(0, 4).forEach((s) => seeds.push({ kind: "tv", id: s.tmdb, title: s.title }));
  sz.watched.slice(0, 3).forEach((s) => seeds.push({ kind: "tv", id: s.tmdb, title: s.title }));
  await pool(seeds, 4, async (s) => {
    const j = await tm("/" + s.kind + "/" + s.id + "/recommendations", { language: LANG });
    (j.results || []).slice(0, 8).forEach((r, i) => add(s.kind, r.id, { type: "similar", reason: "Parce que tu as aimé " + s.title, bonus: Math.max(0, 6 - i) }));
  });

  // Tendances : ce qui monte cette semaine, et les nouveautés populaires sur tes plateformes (pas les vieux catalogues).
  for (const kind of ["tv", "movie"]) {
    for (const page of [1, 2]) {
      const j = await tm("/trending/" + kind + "/week", { language: LANG, page });
      (j.results || []).forEach((r, i) => add(kind, r.id, { type: "trend", reason: "Tendance", bonus: Math.max(0, 8 - Math.floor(((page - 1) * 20 + i) / 3)) }));
    }
  }
  const prov = await providerIds();
  const provList = [].concat(...Object.values(prov).map((s) => [...s])).join("|");
  if (provList) {
    const since = new Date(Date.now() - 540 * 86400000).toISOString().slice(0, 10);
    for (const kind of ["tv", "movie"]) {
      const j = await tm("/discover/" + kind, {
        language: LANG, watch_region: REGION, with_watch_providers: provList,
        with_watch_monetization_types: "flatrate", sort_by: "popularity.desc",
        "vote_count.gte": kind === "tv" ? 30 : 100,
        [kind === "tv" ? "first_air_date.gte" : "primary_release_date.gte"]: since
      });
      (j.results || []).slice(0, 20).forEach((r, i) => add(kind, r.id, { type: "trend", reason: "Tendance", bonus: Math.max(0, 8 - Math.floor(i / 2)) }));
    }
  }

  // Top 10 officiel de Netflix en France (titres en anglais, retrouvés sur TMDB).
  if (MINE.indexOf("netflix") >= 0) {
    try {
      const tsv = await (await get("https://www.netflix.com/tudum/top10/data/all-weeks-countries.tsv")).text();
      const top = L.netflixTop10(tsv, REGION);
      await pool(top, 4, async (t) => {
        const j = await tm("/search/" + t.kind, { query: t.title, language: "en-US" });
        const hit = (j.results || [])[0];
        if (hit) add(t.kind, hit.id, { type: "top10", reason: "N°" + t.rank + " en France sur Netflix", bonus: 10 - t.rank, app: "netflix" });
      });
      log("Top 10 Netflix :", top.length, "titres (semaine du " + (top[0] ? top[0].week : "?") + ")");
    } catch (e) {
      log("Top 10 Netflix indisponible (" + e.message + ")");
    }
  }

  // Détails, images et plateformes de chaque candidat ; on ne garde que ce qui est inclus dans tes abonnements.
  const list = [...cands.values()].filter((c) => !seen.has(c.key) || c.signals.some((s) => s.type === "resume"));
  log("Candidats :", list.length);
  const got = await pool(list, 6, (c) => details(c.kind, c.tmdb));
  const ok = [];
  list.forEach((c, i) => {
    const d = got[i];
    if (!d || !d.id) return;
    const apps = L.appsFor(d, REGION, MINE);
    if (!apps.length) return;
    const wanted = c.signals.find((s) => s.app && apps.indexOf(s.app) >= 0);
    c.details = d;
    c.app = wanted ? wanted.app : apps[0];
    ok.push(c);
  });

  // Tes goûts : genres de ta liste et de tes séries en cours.
  const taste = {};
  ok.filter((c) => c.signals.some((s) => s.type === "list" || s.type === "resume")).forEach((c) => {
    (c.details.genres || []).forEach((g) => { taste[g.id] = (taste[g.id] || 0) + 1; });
  });
  const top = Math.max(1, ...Object.values(taste));
  Object.keys(taste).forEach((k) => { taste[k] = (taste[k] / top) * 3; });

  const extra = (await youtube()).concat(await games());
  ok.forEach((c) => { c.score = L.score(c, taste); });
  extra.forEach((c) => { c.score = L.score(c, {}); });
  const chosen = L.pick(ok.concat(extra), MAX);

  const items = chosen.map((c) => {
    if (c.out) return Object.assign({ score: Math.round(c.score) }, c.out);
    const d = c.details;
    const img = L.imagesFor(d, LANG);
    const trailer = ((d.videos && d.videos.results) || []).find((v) => v.site === "YouTube" && v.type === "Trailer");
    let reason = L.reasonOf(c);
    if (reason === "Tendance") reason = "Tendance sur " + L.PLATFORM_NAMES[c.app];
    return {
      id: c.key,
      kind: c.kind,
      tmdb: c.tmdb,
      title: d.name || d.title,
      app: c.app,
      platform: L.PLATFORM_NAMES[c.app],
      reason,
      detail: L.detailLine(c.kind, d),
      overview: (d.overview || "").length > 240 ? d.overview.slice(0, 237).replace(/\s+\S*$/, "") + "…" : (d.overview || ""),
      backdrop: img.backdrop,
      thumb: img.thumb,
      logo: img.logo,
      uhd: img.uhd,
      trailer: trailer ? trailer.key : null,
      score: Math.round(c.score)
    };
  }).filter((it) => it.backdrop);

  // Fonds 4K (image 1920 + clip vidéo 3840×2160) pour le plan vidéo de la TV.
  const dataDir = path.dirname(OUT);
  await prepare4k(items, { siteDir: path.dirname(dataDir), outDir: path.join(dataDir, "bg"), cacheDir: path.join(path.dirname(CACHE), "bg"), log });

  const out = {
    generatedAt: new Date().toISOString(),
    region: REGION,
    items,
    credits: "Données et images : TMDB (ce produit utilise l’API TMDB mais n’est ni approuvé ni certifié par TMDB). Disponibilités : JustWatch." + (extra.some((c) => c.kind === "game") ? " Jeux : IGDB (igdb.com)." : "") + (extra.some((c) => c.kind === "video") ? " Vidéos : YouTube." : "")
  };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(out, null, 1));
  fs.mkdirSync(path.dirname(CACHE), { recursive: true });
  fs.writeFileSync(CACHE, JSON.stringify(cache));
  log("Recos :", items.length, "→", path.relative(root, OUT));
  items.slice(0, 6).forEach((it, i) => log("  " + (i + 1) + ". " + it.title + " — " + it.reason + " · " + it.platform + " (" + it.score + ")"));
}

main().catch((e) => {
  console.error("Recos non générées :", e.message);
  process.exit(0);
});

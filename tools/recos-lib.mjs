// Recos du launcher : lecture des sources (Serializd, Letterboxd, Top 10 Netflix) et calcul du classement.
// Fonctions pures (sans réseau) : testables avec des pages réelles enregistrées.

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
export function decode(s) {
  return String(s || "").replace(/&(#x?[0-9a-f]+|\w+);/gi, (m, e) => {
    if (e[0] === "#") return String.fromCodePoint(e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
    return ENTITIES[e.toLowerCase()] ?? m;
  });
}

function attrs(tag) {
  const out = {};
  tag.replace(/([\w:-]+)="([^"]*)"/g, (m, k, v) => { out[k] = decode(v); return m; });
  return out;
}

// ── Letterboxd ───────────────────────────────────────────────

// Affiches d’une page de liste (watchlist, films vus) : slug et nom affiché « Titre (année) ».
export function lbPosters(html) {
  const out = [];
  const re = /<[a-z]+\b[^>]*data-component-class="LazyPoster"[^>]*>/gi;
  let m;
  while ((m = re.exec(html))) {
    const a = attrs(m[0]);
    const slug = a["data-item-slug"] || a["data-film-slug"];
    if (!slug) continue;
    const full = a["data-item-full-display-name"] || a["data-item-name"] || "";
    const y = /\((\d{4})\)\s*$/.exec(full);
    out.push({ slug, title: full.replace(/\s*\(\d{4}\)\s*$/, ""), year: y ? +y[1] : null });
  }
  return out;
}

export function lbHasNext(html) {
  return /<a[^>]+class="next"/i.test(html);
}

// Page d’un film : son identifiant TMDB.
export function lbFilmTmdb(html) {
  const id = /data-tmdb-id="(\d+)"/.exec(html);
  const type = /data-tmdb-type="(\w+)"/.exec(html);
  return id ? { tmdb: +id[1], type: type ? type[1] : "movie" } : null;
}

// Flux RSS du journal : films vus, avec note, « j’aime » et identifiant TMDB.
export function lbRss(xml) {
  const items = [];
  const re = /<item>([\s\S]*?)<\/item>/g;
  let m;
  const tag = (s, t) => { const r = new RegExp("<" + t + ">([\\s\\S]*?)</" + t + ">").exec(s); return r ? decode(r[1].trim()) : null; };
  while ((m = re.exec(xml))) {
    const s = m[1];
    const tmdb = tag(s, "tmdb:movieId");
    if (!tmdb) continue;
    items.push({
      tmdb: +tmdb,
      title: tag(s, "letterboxd:filmTitle"),
      year: +tag(s, "letterboxd:filmYear") || null,
      rating: tag(s, "letterboxd:memberRating") ? +tag(s, "letterboxd:memberRating") : null,
      like: tag(s, "letterboxd:memberLike") === "Yes",
      date: tag(s, "letterboxd:watchedDate")
    });
  }
  return items;
}

// ── Serializd ────────────────────────────────────────────────

export function szItems(json) {
  return ((json && json.items) || []).filter((i) => i && i.showId).map((i) => ({ tmdb: +i.showId, title: i.showName, added: i.dateAdded || null }));
}

// ── Top 10 Netflix (fichier officiel, une ligne par pays, semaine, catégorie et rang) ──

export function netflixTop10(tsv, iso2) {
  const lines = String(tsv || "").split(/\r?\n/);
  const head = (lines.shift() || "").split("\t");
  const col = (n) => head.indexOf(n);
  const ci = col("country_iso2"), wi = col("week"), ki = col("category"), ri = col("weekly_rank"), ti = col("show_title"), si = col("season_title");
  if (ci < 0 || wi < 0) return [];
  const rows = lines.map((l) => l.split("\t")).filter((r) => r[ci] === iso2);
  const last = rows.reduce((w, r) => (r[wi] > w ? r[wi] : w), "");
  return rows.filter((r) => r[wi] === last).map((r) => ({
    kind: /tv/i.test(r[ki]) ? "tv" : "movie",
    rank: +r[ri],
    title: r[ti],
    season: si >= 0 && r[si] && r[si] !== "N/A" ? r[si] : null,
    week: last
  })).sort((a, b) => a.rank - b.rank);
}

// ── YouTube : flux RSS d’une chaîne (gratuit, sans clé) ──

export function ytFeed(xml) {
  const out = [];
  const re = /<entry>([\s\S]*?)<\/entry>/g;
  let m;
  const tag = (s, t) => { const r = new RegExp("<" + t + "[^>]*>([\\s\\S]*?)</" + t + ">").exec(s); return r ? decode(r[1].trim()) : null; };
  while ((m = re.exec(xml))) {
    const s = m[1];
    const id = tag(s, "yt:videoId");
    const link = (/<link[^>]+href="([^"]+)"/.exec(s) || [])[1] || "";
    if (!id) continue;
    const views = /<media:statistics[^>]+views="(\d+)"/.exec(s);
    out.push({
      id,
      title: tag(s, "title"),
      channel: tag(s, "name"),
      channelId: tag(s, "yt:channelId"),
      published: tag(s, "published"),
      views: views ? +views[1] : 0,
      short: /\/shorts\//.test(link)
    });
  }
  return out;
}

// ── Jeux (RAWG) ──

export function rawgImage(url, width) {
  return url ? url.replace("/media/games/", "/media/resize/" + width + "/-/games/").replace("/media/screenshots/", "/media/resize/" + width + "/-/screenshots/") : null;
}

export function rawgGames(json) {
  return ((json && json.results) || []).filter((g) => g && g.background_image).map((g) => {
    const plats = (g.platforms || []).map((p) => p.platform && p.platform.id);
    return {
      id: g.id,
      title: g.name,
      released: g.released || null,
      added: g.added || 0,
      rating: g.rating || 0,
      genres: (g.genres || []).map((x) => x.name),
      ps5: plats.indexOf(187) >= 0,
      switch: plats.indexOf(7) >= 0,
      image: g.background_image
    };
  });
}

// ── Plateformes (fournisseurs TMDB / JustWatch) → applis du launcher ──

const PLATFORMS = [
  ["netflix", /^netflix/i, "Netflix"],
  ["prime", /amazon prime video|^prime video/i, "Prime Video"],
  ["appletv", /^apple tv(\+| plus)?$/i, "Apple TV"],
  ["hbo", /^(hbo )?max$|hbo max/i, "HBO Max"],
  ["crunchyroll", /^crunchyroll/i, "Crunchyroll"],
  ["disney", /^disney\+?( plus)?$/i, "Disney+"],
  ["paramount", /^paramount\+?( plus)?/i, "Paramount+"],
  ["canal", /^canal\+/i, "Canal+"]
];
export const PLATFORM_NAMES = Object.fromEntries(PLATFORMS.map(([k, , n]) => [k, n]));

export function appOfProvider(name) {
  const hit = PLATFORMS.find(([, re]) => re.test(String(name || "").trim()));
  return hit ? hit[0] : null;
}

// Applis (parmi tes abonnements) où le titre est inclus dans l’abonnement, dans ta région.
export function appsFor(details, region, mine) {
  const fr = details && details["watch/providers"] && details["watch/providers"].results ? details["watch/providers"].results[region] : null;
  const list = (fr && fr.flatrate) || [];
  const apps = [];
  for (const p of list.slice().sort((a, b) => (a.display_priority ?? 99) - (b.display_priority ?? 99))) {
    const app = appOfProvider(p.provider_name);
    if (app && mine.indexOf(app) >= 0 && apps.indexOf(app) < 0) apps.push(app);
  }
  return apps;
}

// ── Images ───────────────────────────────────────────────────

const IMG = "https://image.tmdb.org/t/p/";
// Fond sans texte de préférence (comme sur l’Apple TV), sinon le fond par défaut ; logo du titre en français, sinon en anglais.
export function imagesFor(d, lang) {
  const imgs = d.images || {};
  const byVotes = (a, b) => (b.vote_average || 0) - (a.vote_average || 0) || (b.width || 0) - (a.width || 0);
  const backs = (imgs.backdrops || []).filter((b) => b.width >= 1280);
  const textless = backs.filter((b) => !b.iso_639_1).sort(byVotes)[0];
  const back = textless || backs.sort(byVotes)[0];
  const backPath = back ? back.file_path : d.backdrop_path;
  const short = (lang || "fr").slice(0, 2);
  const logos = (imgs.logos || []).filter((l) => /\.png$/i.test(l.file_path));
  const logo = logos.filter((l) => l.iso_639_1 === short).sort(byVotes)[0] || logos.filter((l) => l.iso_639_1 === "en").sort(byVotes)[0];
  return {
    backdrop: backPath ? IMG + "original" + backPath : null,
    thumb: backPath ? IMG + "w780" + backPath : null,
    logo: logo ? IMG + "w500" + logo.file_path : null
  };
}

// ── Présentation ─────────────────────────────────────────────

const GENRE_SHORT = {
  "Science-Fiction & Fantastique": "Science-fiction",
  "Action & Aventure": "Action",
  "War & Politics": "Guerre",
  "Guerre & Politique": "Guerre",
  "Sci-Fi & Fantasy": "Science-fiction",
  "Action & Adventure": "Action"
};

export function kindLabel(kind, d) {
  const anime = (d.genres || []).some((g) => g.id === 16) && ((d.origin_country || []).indexOf("JP") >= 0 || d.original_language === "ja");
  if (anime) return "Anime";
  return kind === "tv" ? "Série" : "Film";
}

export function detailLine(kind, d) {
  const parts = [kindLabel(kind, d)];
  const date = kind === "tv" ? d.first_air_date : d.release_date;
  if (date) parts.push(date.slice(0, 4));
  const g = (d.genres || []).find((x) => x.id !== 16) || (d.genres || [])[0];
  if (g) parts.push(GENRE_SHORT[g.name] || g.name);
  if (kind === "tv" && d.number_of_seasons > 1) parts.push(d.number_of_seasons + " saisons");
  return parts.join(" · ");
}

// ── Classement ───────────────────────────────────────────────
// Un candidat : { key: "tv:123", kind, tmdb, signals: [{ type, weight, reason }] }.
// type : resume (série en cours), list (ta liste), top10, similar (proche de ce que tu as aimé), trend (tendance sur une de tes plateformes).
const WEIGHT = { resume: 100, list: 80, top10: 50, video: 45, similar: 40, game: 35, trend: 30 };

export function addSignal(map, kind, tmdb, signal) {
  const key = kind + ":" + tmdb;
  const c = map.get(key) || { key, kind, tmdb: +tmdb, signals: [] };
  c.signals.push(signal);
  map.set(key, c);
  return c;
}

export function score(c, tasteGenres) {
  let best = 0;
  for (const s of c.signals) best = Math.max(best, (WEIGHT[s.type] || 0) + (s.bonus || 0));
  const extra = Math.min(15, (c.signals.length - 1) * 5);
  const genres = (c.details && c.details.genres) || [];
  const taste = genres.reduce((n, g) => n + (tasteGenres[g.id] || 0), 0);
  const pop = c.details ? Math.min(6, Math.log10(1 + (c.details.popularity || 0)) * 2) : 0;
  return best + extra + Math.min(12, taste * 2) + pop;
}

export function reasonOf(c) {
  const order = ["resume", "list", "top10", "similar", "trend"];
  const s = c.signals.slice().sort((a, b) => order.indexOf(a.type) - order.indexOf(b.type) || (b.bonus || 0) - (a.bonus || 0))[0];
  return s ? s.reason : "";
}

export function primaryType(c) {
  let best = null;
  for (const s of c.signals) if (!best || (WEIGHT[s.type] || 0) > (WEIGHT[best] || 0)) best = s.type;
  return best;
}

// En tête (les 8 premiers, ceux de l’accueil) : un mélange de séries en cours, de ta liste, de vidéos, de jeux et de découvertes,
// sans plus de 3 titres par appli. Ensuite, le reste par ordre de score.
const CAPS = { resume: 2, list: 3, top10: 1, video: 1, game: 1, similar: 2, trend: 2 };
export function pick(cands, max, head = 8) {
  const sorted = cands.slice().sort((a, b) => b.score - a.score);
  const out = [];
  const rest = [];
  const perType = {};
  const perApp = {};
  for (const c of sorted) {
    if (out.length >= max) break;
    const t = primaryType(c);
    if (out.length < head && ((perType[t] || 0) >= (CAPS[t] || 2) || (perApp[c.app] || 0) >= 3)) { rest.push(c); continue; }
    out.push(c);
    perType[t] = (perType[t] || 0) + 1;
    perApp[c.app] = (perApp[c.app] || 0) + 1;
  }
  for (const c of rest) { if (out.length >= max) break; out.push(c); }
  // Au moins une vidéo et un jeu à l’accueil quand il y en a : ils prennent la place des dernières découvertes.
  for (const t of ["video", "game"]) {
    const n = Math.min(head, out.length);
    if (out.slice(0, n).some((c) => primaryType(c) === t)) continue;
    const j = out.findIndex((c, i) => i >= n && primaryType(c) === t);
    const cand = j >= 0 ? out[j] : sorted.find((c) => primaryType(c) === t && out.indexOf(c) < 0);
    if (!cand) continue;
    let k = -1;
    for (let i = n - 1; i >= 0; i--) { if (["similar", "trend", "top10"].indexOf(primaryType(out[i])) >= 0) { k = i; break; } }
    if (k < 0) continue;
    const moved = out[k];
    if (j >= 0) out.splice(j, 1);
    out[k] = cand;
    out.splice(n, 0, moved);
    if (out.length > max) out.length = max;
  }
  return out;
}

// Pont vers la TV Samsung (Tizen). Dans un navigateur, window.tizen n’existe pas : tout reste simulé comme dans la maquette.
//
// Les identifiants d’applis changent selon l’année et la version de Tizen : on essaie d’abord ceux qui sont connus,
// puis on cherche parmi les applis installées par leur nom. Ce qui est trouvé est retenu (localStorage).

const T = typeof window !== "undefined" ? window.tizen : undefined;
export const onTV = !!(T && T.application);

// Applis du launcher → identifiants Tizen connus (appli ou paquet) et nom à chercher parmi les applis installées.
const APPS = {
  youtube: { ids: [], name: /tizen ?brew|tizentube/i },              // TizenTube passe par TizenBrew
  youtubeapp: { ids: ["com.samsung.tv.cobalt-yt", "111299001912", "9Ur5IzDKqV.TizenYouTube"], name: /^youtube$/i },
  netflix: { ids: ["org.tizen.netflix-app", "3201907018807", "11101200001"], name: /netflix/i },
  appletv: { ids: ["com.samsung.tv.aria-video", "3201807016597"], name: /apple ?tv/i },
  hbo: { ids: ["3202301029760", "3201601007230"], name: /hbo|^max$/i },
  spotify: { ids: ["rJeHak5zRg.Spotify", "3201606009684"], name: /spotify/i },
  prime: { ids: ["org.tizen.primevideo", "3201910019365", "3201512006785"], name: /prime ?video/i },
  disney: { ids: ["MCmYXNxgcu.DisneyPlus", "3202204027038", "3202009021709", "3201901017640"], name: /disney/i },
  crunchyroll: { ids: ["3202302030097"], name: /crunchyroll/i },
  freetv: { ids: [], name: /free ?tv|oqee/i },
  paramount: { ids: ["rJyOSqC6Up.CBSAllAccess", "3202110025305", "3201710014981"], name: /paramount/i },
  canal: { ids: ["3201606009910"], name: /canal/i },
  hue: { ids: [], name: /hue/i },
  smartthings: { ids: ["com.samsung.tv.coba.smartthings", "3202311033054", "3201910019378", "3201710015016"], name: /smartthings/i },
  // Applis système (souvent cachées de la liste) : lancées directement par leur identifiant.
  store: { ids: ["com.samsung.tv.store", "org.volt.apps"], name: null },
  reglages: { ids: ["com.samsung.tv.coba.setting"], name: null },
  sources: { ids: ["com.samsung.tv.coba.source"], name: null },
  tizen: { ids: ["com.samsung.tv.csfs"], name: null }
};

// Entrées HDMI des appareils (accueil et hub).
export const HDMI = { ps5: 1, switch: 2, mac: 3, pc: 4 };

const MEMO_KEY = "launcher.appIds";

function load(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch (e) {
    return fallback;
  }
}

function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
}

export const store = { load, save };

export const log = [];
export function note(msg) {
  log.push(new Date().toLocaleTimeString("fr-FR") + " " + msg);
  if (log.length > 60) log.shift();
}

// Une réponse de la TV qui n’arrive jamais ne doit pas bloquer le launcher : chaque appel a un délai maximum.
function withTimeout(p, ms, label) {
  return new Promise((res, rej) => {
    const t = setTimeout(() => rej(new Error(label + " : pas de réponse")), ms);
    p.then((v) => { clearTimeout(t); res(v); }, (e) => { clearTimeout(t); rej(e); });
  });
}

let installed = null;
let installedErr = null;
function apps() {
  if (installed) return installed;
  installed = withTimeout(new Promise((res, rej) => {
    try { T.application.getAppsInfo((list) => res(list || []), rej); } catch (e) { rej(e); }
  }), 4000, "liste des applis").catch((e) => {
    installedErr = (e && (e.name || "") + " " + (e.message || "")).trim();
    note("liste des applis indisponible : " + installedErr);
    installed = null;
    return [];
  });
  return installed;
}

// Pour le panneau Info : ce que la TV permet et ce qu’elle voit.
export async function diagnostics() {
  const out = { tizen: !!T, application: !!(T && T.application), apps: null, names: [] };
  if (!onTV) return out;
  const list = await apps();
  out.apps = list.length;
  out.appsError = installedErr;
  out.names = list.filter((a) => a.show !== false).map((a) => a.name + " = " + a.id).slice(0, 40);
  return out;
}

// Identifiants à essayer pour une appli du launcher, du plus probable au moins probable.
async function candidates(key) {
  const def = APPS[key];
  if (!def) return [];
  const memo = load(MEMO_KEY, {});
  const out = [];
  const add = (id) => { if (id && out.indexOf(id) < 0) out.push(id); };
  add(memo[key]);
  const list = await apps();
  for (const known of def.ids) {
    const hit = list.find((a) => a.id === known || a.packageId === known);
    if (hit) add(hit.id);
  }
  if (def.name) {
    const hit = list.find((a) => def.name.test(a.name || ""));
    if (hit) add(hit.id);
  }
  // Applis système ou liste incomplète : on tente quand même les identifiants connus.
  def.ids.forEach(add);
  return out;
}

function launchId(id) {
  return withTimeout(new Promise((res, rej) => {
    try { T.application.launch(id, res, rej); } catch (e) { rej(e); }
  }), 6000, "ouverture de " + id);
}


// Lance une appli du launcher. Renvoie true si la TV l’a ouverte.
export async function launchApp(key) {
  if (!onTV) { note("pas d’API Tizen : " + key + " simulé"); return false; }
  const ids = await candidates(key);
  note(key + " : " + (ids.length ? ids.join(", ") : "aucun identifiant connu"));
  for (const id of ids) {
    try {
      await launchId(id);
      const memo = load(MEMO_KEY, {});
      if (memo[key] !== id) { memo[key] = id; save(MEMO_KEY, memo); }
      note("ouvert " + key + " → " + id);
      return true;
    } catch (e) {
      note("échec " + key + " → " + id + " : " + (e && ((e.name || "") + " " + (e.message || "")).trim()));
    }
  }
  return false;
}

// Bascule la TV sur une entrée HDMI, puis s’efface pour laisser l’image de la source (mode jeu, VRR… restent ceux de la TV).
// Si la TV refuse, on ouvre le menu Sources de Samsung.
export async function showSource(n) {
  if (!onTV) return false;
  try {
    const info = await withTimeout(new Promise((res, rej) => T.systeminfo.getPropertyValue("VIDEOSOURCE", res, rej)), 4000, "sources");
    const all = (info.connected || []).concat(info.disconnected || []);
    const src = all.find((s) => s.type === "HDMI" && s.number === n);
    if (!src) throw new Error("HDMI " + n + " introuvable");
    await withTimeout(new Promise((res, rej) => T.tvwindow.setSource(src, res, rej, "MAIN")), 4000, "HDMI");
    T.application.getCurrentApplication().hide();
    note("source HDMI " + n);
    return true;
  } catch (e) {
    note("source HDMI " + n + " : " + (e && (e.name || e.message)));
    return launchApp("sources");
  }
}

// Revenir à l’accueil Samsung d’origine.
export async function tizenHome() {
  if (!onTV) return false;
  if (await launchApp("tizen")) return true;
  try { T.application.getCurrentApplication().hide(); return true; } catch (e) { return false; }
}


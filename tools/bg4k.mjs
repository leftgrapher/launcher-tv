// Fonds 4K des recos, préparés en ligne avec elles.
// La TV dessine l’interface en 1920×1080 ; seul son plan vidéo affiche de vrais pixels 4K. Pour chaque reco dont
// TMDB a un fond sans texte en 3840 px, on prépare :
//   <clé>.jpg : la même image en 1920×1080, affichée par l’interface (plus nette que la taille TMDB la plus proche, 1280 px) ;
//   <clé>.mp4 : 3 secondes de cette image en HEVC 3840×2160, que la TV joue sous l’interface et fige sur une image
//   (assez long pour que le lecteur de la TV signale le début de la lecture ; une image fixe pèse presque rien de plus).
// Les fichiers déjà préparés restent dans le cache (.cache/bg) d’un passage à l’autre : seules les nouvelles recos sont converties.
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const CROP = "crop=w='min(iw,trunc(ih*16/9/2)*2)':h='min(ih,trunc(iw*9/16/2)*2)':x='(iw-ow)/2':y='(ih-oh)*0.3'";

function ffmpeg(args) {
  const r = spawnSync("ffmpeg", ["-v", "error", "-y"].concat(args), { encoding: "utf8" });
  if (r.status !== 0) throw new Error((r.stderr || "ffmpeg").trim().split("\n").pop());
}

export function hasFfmpeg() {
  try { return spawnSync("ffmpeg", ["-version"]).status === 0; } catch (e) { return false; }
}

async function download(url, file, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url);
      if (!r.ok) throw new Error("HTTP " + r.status);
      fs.writeFileSync(file, Buffer.from(await r.arrayBuffer()));
      return;
    } catch (e) {
      if (i === tries - 1) throw e;
      await new Promise((res) => setTimeout(res, 1500 * (i + 1)));
    }
  }
}

function encode(src, jpg, mp4) {
  ffmpeg(["-i", src, "-vf", CROP + ",scale=1920:1080:flags=lanczos", "-q:v", "3", jpg]);
  ffmpeg([
    "-loop", "1", "-framerate", "60", "-i", src, "-t", "3",
    // JPEG (BT.601, pleine échelle) → vidéo BT.709 limitée, 10 bits pour éviter les aplats en escalier dans les ciels.
    "-vf", CROP + ",scale=3840:2160:flags=lanczos:in_range=pc:out_range=tv:in_color_matrix=bt601:out_color_matrix=bt709,format=yuv420p10le",
    "-c:v", "libx265", "-preset", "medium", "-crf", "16",
    "-x265-params", "keyint=600:min-keyint=600:scenecut=0:log-level=error",
    "-tag:v", "hvc1", "-color_primaries", "bt709", "-color_trc", "bt709", "-colorspace", "bt709", "-color_range", "tv",
    "-movflags", "+faststart", "-an", mp4
  ]);
}

/**
 * items   : recos (celles qui ont `uhd`, l’adresse du fond 4K, sont converties) ; `uhd` est retiré de toutes.
 * siteDir : racine du site publié (les adresses écrites dans les recos lui sont relatives).
 * outDir  : dossier du site où copier les fonds ; cacheDir : fichiers déjà préparés.
 */
export async function prepare4k(items, { siteDir, outDir, cacheDir, log = console.log, budgetMs = 6 * 60 * 1000 }) {
  const todo = items.filter((it) => it.uhd);
  const done = { ok: 0, cached: 0, failed: 0, waiting: 0 };
  if (!todo.length) return done;
  // Sans ffmpeg, les fonds déjà prêts (cache) servent quand même ; les nouveaux attendent le prochain passage.
  const ff = hasFfmpeg();
  if (!ff) log("Fonds 4K : ffmpeg absent, seuls les fonds déjà prêts sont utilisés.");
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(cacheDir, { recursive: true });
  const t0 = Date.now();
  const keep = new Set();
  for (const it of todo) {
    // « -3s » : version du clip (les anciens, d’une demi-seconde, étaient trop courts pour la TV).
    const key = path.basename(new URL(it.uhd).pathname).replace(/\.\w+$/, "").replace(/[^\w-]/g, "") + "-3s";
    const cj = path.join(cacheDir, key + ".jpg"), cm = path.join(cacheDir, key + ".mp4");
    keep.add(key);
    try {
      if (fs.existsSync(cj) && fs.existsSync(cm)) {
        done.cached++;
      } else if (!ff) {
        done.waiting++;
        continue;
      } else {
        if (Date.now() - t0 > budgetMs) throw new Error("temps écoulé, au prochain passage");
        const src = path.join(cacheDir, key + ".src");
        await download(it.uhd, src);
        try { encode(src, cj + ".tmp.jpg", cm + ".tmp.mp4"); } finally { fs.rmSync(src, { force: true }); }
        fs.renameSync(cj + ".tmp.jpg", cj);
        fs.renameSync(cm + ".tmp.mp4", cm);
        done.ok++;
      }
      const oj = path.join(outDir, key + ".jpg"), om = path.join(outDir, key + ".mp4");
      fs.copyFileSync(cj, oj);
      fs.copyFileSync(cm, om);
      it.backdrop = path.relative(siteDir, oj).split(path.sep).join("/");
      it.bg4k = path.relative(siteDir, om).split(path.sep).join("/");
    } catch (e) {
      done.failed++;
      log("  fond 4K de « " + it.title + " » : " + e.message);
    }
  }
  items.forEach((it) => delete it.uhd);
  // Le cache ne garde que les fonds des recos du moment (et ceux de la dernière semaine).
  const week = Date.now() - 7 * 24 * 3600 * 1000;
  for (const f of fs.readdirSync(cacheDir)) {
    const key = f.replace(/\..*$/, "");
    const p = path.join(cacheDir, f);
    if (!keep.has(key) && fs.statSync(p).mtimeMs < week) fs.rmSync(p, { force: true });
  }
  log("Fonds 4K : " + done.ok + " préparés, " + done.cached + " déjà prêts" + (done.waiting ? ", " + done.waiting + " au prochain passage" : "") + (done.failed ? ", " + done.failed + " en échec" : "") + ".");
  return done;
}

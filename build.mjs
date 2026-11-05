// Construit le launcher :
//   dist/site/     ce qui est mis en ligne (code + images publiques) — chaque mise en ligne = mise à jour sur la TV
//   dist/preview/  la même chose avec les fichiers privés, pour l’essayer dans un navigateur
//   dist/tv/       l’appli Tizen à installer une fois (coquille + version embarquée + tous les fichiers)
import { build } from "esbuild";
import fs from "node:fs";
import path from "node:path";

const root = path.dirname(new URL(import.meta.url).pathname);
const out = (...p) => path.join(root, "dist", ...p);
const cfg = JSON.parse(fs.readFileSync(path.join(root, "launcher.config.json"), "utf8"));
const remote = (cfg.remote || "").replace(/\/?$/, cfg.remote ? "/" : "");

const now = new Date();
const pad = (n) => String(n).padStart(2, "0");
const BUILD = `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}`;
// Version de l’appli TV (x.y.z, y ≤ 255, z ≤ 65535) : toujours croissante, pour que chaque réinstallation passe.
const VERSION = `1.${(now.getUTCFullYear() - 2026) * 12 + now.getUTCMonth() + 1}.${now.getUTCDate() * 1440 + now.getUTCHours() * 60 + now.getUTCMinutes()}`;

fs.rmSync(out(), { recursive: true, force: true });
for (const d of ["site/assets", "preview/assets", "tv/assets"]) fs.mkdirSync(out(d), { recursive: true });

await build({
  entryPoints: [path.join(root, "src/app.js")],
  bundle: true,
  format: "iife",
  target: ["chrome85"],
  minify: true,
  legalComments: "inline",
  loader: { ".css": "text" },
  define: { "process.env.NODE_ENV": '"production"' },
  outfile: out("site/launcher.js")
});

const copyDir = (from, to) => {
  if (!fs.existsSync(from)) return [];
  const files = fs.readdirSync(from).filter((f) => !f.startsWith(".") && fs.statSync(path.join(from, f)).isFile());
  for (const f of files) fs.copyFileSync(path.join(from, f), path.join(to, f));
  return files;
};

// En ligne : code + fichiers publics uniquement.
const pub = copyDir(path.join(root, "public/assets"), out("site/assets"));
// Pages annexes du site (connexion SmartThings depuis le téléphone).
copyDir(path.join(root, "public"), out("site"));
fs.writeFileSync(out("site/version.json"), JSON.stringify({ v: BUILD }) + "\n");
const page = `<!DOCTYPE html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=1920, initial-scale=1">
<title>Launcher</title><style>html,body{margin:0;background:#05070E}</style></head>
<body><div id="launcher"></div><script src="launcher.js?v=${BUILD}"></script></body></html>
`;
fs.writeFileSync(out("site/index.html"), page);

// Aperçu local : + fichiers privés.
copyDir(out("site"), out("preview"));
copyDir(out("site/assets"), out("preview/assets"));
const priv = copyDir(path.join(root, "private/assets"), out("preview/assets"));

// Appli TV : coquille + version embarquée + tous les fichiers.
fs.copyFileSync(out("site/launcher.js"), out("tv/launcher.js"));
copyDir(out("site/assets"), out("tv/assets"));
copyDir(path.join(root, "private/assets"), out("tv/assets"));
const local = pub.concat(priv).filter((f) => !/\.txt$/.test(f));
const shell = fs.readFileSync(path.join(root, "tv/index.html"), "utf8")
  .replace("%REMOTE%", remote)
  .replace("%LOCAL%", JSON.stringify(local))
  .replace("%BUILD%", BUILD);
fs.writeFileSync(out("tv/index.html"), shell);
fs.writeFileSync(out("tv/config.xml"), fs.readFileSync(path.join(root, "tv/config.xml"), "utf8").replace("%VERSION%", VERSION));
fs.copyFileSync(path.join(root, "tv/icon.png"), out("tv/icon.png"));

const kb = (f) => Math.round(fs.statSync(f).size / 1024) + " Ko";
console.log(`version ${BUILD} (${VERSION}) — launcher.js ${kb(out("site/launcher.js"))}, ${pub.length} fichiers publics, ${priv.length} privés`);
console.log(remote ? `mises à jour depuis ${remote}` : "pas d’adresse en ligne : l’appli TV utilisera sa version embarquée");

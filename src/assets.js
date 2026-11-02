// Où trouver les images et polices.
// L’appli installée sur la TV embarque ses fichiers (dont les privés : police d’essai, fond d’écran) et
// déclare leur liste dans window.__LAUNCHER__.local ; tout le reste vient du serveur (remoteBase).
// Sans configuration (aperçu dans un navigateur), tout est relatif à la page : assets/<fichier>.
const cfg = (typeof window !== "undefined" && window.__LAUNCHER__) || {};

export function A(file) {
  if (cfg.local && cfg.local.indexOf(file) >= 0) return (cfg.localBase || "assets/") + file;
  return (cfg.remoteBase || "assets/") + file;
}

export function cssAssets(css) {
  return css.replace(/url\((["']?)assets\/([^"')]+)\1\)/g, (m, q, f) => 'url("' + A(f) + '")');
}

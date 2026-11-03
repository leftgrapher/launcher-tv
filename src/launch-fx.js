// Ouverture sur la TV : la tuile choisie s’agrandit jusqu’au plein écran, puis prend l’allure de l’écran de démarrage
// de l’appli (sa couleur, son logo) en attendant qu’elle s’affiche. Pour une source HDMI, l’image en direct apparaît dessous.
//
// Seules des transformations et des fondus sont animés : la TV les calcule à part, ils restent fluides même pendant
// qu’elle lance l’appli. La tuile d’origine est masquée dès le départ (plus de bord qui dépasse pendant son rebond).

const EASE = "cubic-bezier(0.2, 0.8, 0.2, 1)";
const GROW = 520;

// Écran de démarrage des applis dont la tuile est claire (leur appli démarre sur fond sombre) ;
// les autres gardent leur couleur, assombrie si elle est vive, pour ne pas éblouir sur l’OLED.
const SPLASH = {
  netflix: "#000000",
  youtube: "#0F0F0F",
  youtubeapp: "#0F0F0F",
  spotify: "#121212",
  hue: "#101114",
  prime: "#0F171E",
  disney: "#0A1E53"
};

function parseColor(c) {
  const m = /rgba?\(([^)]+)\)/.exec(c || "");
  if (m) { const p = m[1].split(",").map((x) => parseFloat(x)); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; }
  const h = /^#([0-9a-f]{6})$/i.exec(c || "");
  if (h) { const n = parseInt(h[1], 16); return { r: n >> 16, g: (n >> 8) & 255, b: n & 255, a: 1 }; }
  return null;
}

export function splashOf(id, tileBg) {
  if (SPLASH[id]) return SPLASH[id];
  const c = parseColor(tileBg);
  if (!c || c.a < 0.9) return "#0B0C10";
  const lum = (0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b) / 255;
  if (lum < 0.12) return "rgb(" + c.r + ", " + c.g + ", " + c.b + ")";
  // Couleur vive : on garde sa teinte, très assombrie.
  const k = 0.22;
  const mix = (v, base) => Math.round(v * k + base * (1 - k));
  return "rgb(" + mix(c.r, 8) + ", " + mix(c.g, 9) + ", " + mix(c.b, 14) + ")";
}

function host() {
  return document.getElementById("launcher") || document.body;
}

// Position d’un élément dans l’écran 1920×1080 du launcher.
export function rectIn(el) {
  const h = host().getBoundingClientRect();
  const k = h.width / 1920 || 1;
  const r = el.getBoundingClientRect();
  return { x: (r.left - h.left) / k, y: (r.top - h.top) / k, w: r.width / k, h: r.height / k };
}

// Copie du contenu de la tuile (logo, illustration), sans son fond, sa bordure ni ses effets de sélection.
function faceOf(el) {
  const face = el.cloneNode(true);
  const kids = Array.prototype.slice.call(el.children);
  Array.prototype.slice.call(face.children).forEach((c, i) => {
    const orig = kids[i];
    const cs = orig ? getComputedStyle(orig) : null;
    const keep = c.classList.contains("tile-art") || (cs && cs.position !== "absolute" && cs.display !== "none");
    if (!keep) c.remove();
  });
  [face].concat(Array.prototype.slice.call(face.querySelectorAll("*"))).forEach((n) => {
    ["data-tile", "data-card", "data-hub-btn", "id", "aria-label", "aria-pressed"].forEach((a) => n.removeAttribute && n.removeAttribute(a));
  });
  return face;
}

/**
 * el      : la tuile (ou la vignette) qui s’ouvre ; sans élément, l’écran part d’un grand cadre centré.
 * opts    : { id, image (fond en image, pour une reco), splash (couleur d’arrivée), face (false : pas de logo) }
 * Renvoie { grown (promesse), reveal() (fondu qui laisse voir ce qui est dessous), close(vite) }.
 */
export function openFx(el, opts = {}) {
  const h = host();
  const r = el ? rectIn(el) : { x: 64, y: 64, w: 1792, h: 952 };
  const cs = el ? getComputedStyle(el) : null;
  const tileBg = cs ? cs.backgroundColor : "#0B0C10";
  const splash = opts.splash || splashOf(opts.id, tileBg);

  const wrap = document.createElement("div");
  wrap.className = "lfx";
  const card = document.createElement("div");
  card.className = "lfx-card";
  if (opts.image) {
    card.style.background = "#0B0C10 url(\"" + opts.image + "\") 50% 30% / cover no-repeat";
  } else if (cs) {
    card.style.backgroundColor = tileBg;
    if (cs.backgroundImage && cs.backgroundImage !== "none") {
      card.style.backgroundImage = cs.backgroundImage;
      card.style.backgroundSize = "100% 100%";
    }
  } else {
    card.style.backgroundColor = splash;
  }
  // Couleur d’arrivée, en fondu par-dessus le fond de la tuile (pas pour une reco : son image reste visible).
  const tint = opts.image ? null : document.createElement("div");
  if (tint) {
    tint.className = "lfx-tint";
    tint.style.backgroundColor = splash;
    card.appendChild(tint);
  }

  // Coins : arrondis comme la tuile au départ (rayon exprimé à l’échelle du plein écran).
  const sx = r.w / 1920, sy = r.h / 1080;
  const rawRad = el ? String(cs.borderTopLeftRadius || "") : "";
  const rad = /%$/.test(rawRad) ? (parseFloat(rawRad) / 100) * Math.min(r.w, r.h)
    : el ? (parseFloat(rawRad) || 0) * (r.w / (el.offsetWidth || r.w)) : 24;
  // Bouton rond (hub) : un cercle agrandi deviendrait une ellipse plein écran ; l’écran part plutôt d’un carré arrondi
  // qui apparaît en fondu par-dessus le bouton.
  const round = rad > 0.3 * Math.min(r.w, r.h);
  card.style.borderRadius = round ? "64px" : (rad / sx).toFixed(1) + "px / " + (rad / sy).toFixed(1) + "px";
  wrap.appendChild(card);

  let face = null;
  if (el && opts.face !== false && !opts.image) {
    face = faceOf(el);
    face.classList.add("lfx-face");
    const w = el.offsetWidth || r.w, hh = el.offsetHeight || r.h;
    face.style.width = w + "px";
    face.style.height = hh + "px";
    face.style.left = "0px";
    face.style.top = "0px";
    wrap.appendChild(face);
    face._size = { w, h: hh };
  }
  h.appendChild(wrap);

  // La tuile d’origine (et son halo) disparaît : la copie prend sa place exactement.
  const holder = el && el.parentElement && el.parentElement.querySelector("[data-tile]") === el ? el.parentElement : el;
  if (holder) holder.classList.add("lfx-hide");

  const from = "translate(" + r.x.toFixed(2) + "px, " + r.y.toFixed(2) + "px) scale(" + sx.toFixed(5) + ", " + sy.toFixed(5) + ")";
  const anims = [];
  const run = (node, frames, o) => {
    try {
      const a = node.animate(frames, Object.assign({ duration: GROW, easing: EASE, fill: "forwards" }, o));
      anims.push(a);
      return a.finished ? a.finished.catch(() => {}) : new Promise((res) => setTimeout(res, (o && o.duration) || GROW));
    } catch (e) {
      // Sans animations Web (très vieux moteur) : état final directement.
      const last = frames[frames.length - 1];
      Object.keys(last).forEach((k) => { node.style[k] = last[k]; });
      return Promise.resolve();
    }
  };

  const steps = [run(card, round
    ? [{ transform: from, opacity: 0 }, { opacity: 1, offset: 0.22 }, { transform: "translate(0px, 0px) scale(1, 1)", opacity: 1 }]
    : [{ transform: from }, { transform: "translate(0px, 0px) scale(1, 1)" }])];
  if (tint) steps.push(run(tint, [{ opacity: 0 }, { opacity: 0, offset: 0.25 }, { opacity: 1 }]));
  if (face) {
    const s0 = r.w / face._size.w;
    const cx = 960 - face._size.w / 2, cy = 540 - face._size.h / 2;
    const fx = r.x + (r.w - face._size.w) / 2, fy = r.y + (r.h - face._size.h) / 2;
    steps.push(run(face, [
      { transform: "translate(" + fx.toFixed(2) + "px, " + fy.toFixed(2) + "px) scale(" + s0.toFixed(4) + ")", opacity: 1 },
      { transform: "translate(" + cx.toFixed(2) + "px, " + cy.toFixed(2) + "px) scale(1.9)", opacity: 1 }
    ]));
  }
  const grown = Promise.all(steps).then(() => {
    // Plein écran : les coins deviennent droits.
    card.style.transition = "border-radius 180ms ease";
    card.style.borderRadius = "0px";
  });

  let closed = false;
  const unhide = () => { if (holder) holder.classList.remove("lfx-hide"); };
  return {
    grown,
    // Fondu de l’écran de démarrage : ce qui est dessous (image en direct d’une source HDMI) apparaît.
    reveal() {
      return run(wrap, [{ opacity: 1 }, { opacity: 0 }], { duration: 320, easing: "ease" });
    },
    close(fast) {
      if (closed) return;
      closed = true;
      unhide();
      if (fast) { wrap.remove(); return; }
      run(wrap, [{ opacity: getComputedStyle(wrap).opacity }, { opacity: 0 }], { duration: 260, easing: "ease" }).then(() => wrap.remove());
    }
  };
}

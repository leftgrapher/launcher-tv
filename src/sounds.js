// Sons de l’interface, préparés une seule fois : chaque son de la maquette (oscillateurs, filtres, enveloppes) est
// calculé d’avance dans un petit tampon audio, puis simplement rejoué. Sur la TV, construire le son à chaque appui
// coûtait plusieurs millisecondes de processeur, au moment précis où l’écran doit réagir.
const cache = new Map();
const pending = new Set();
// Clé d’un son : son nom, sa définition (l’accueil et le hub ont chacun la leur), son volume.
const keyOf = (name, notes, vol, c) => name + "|" + JSON.stringify(notes) + "|" + vol.toFixed(3) + "|" + c.sampleRate;

function ctx() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  if (!window.__dcAudio) {
    try { window.__dcAudio = new AC(); } catch (e) { return null; }
  }
  return window.__dcAudio;
}

// Même synthèse que la maquette (Main/Hub _snd), rendue hors ligne.
function render(notes, vol, rate) {
  const OAC = window.OfflineAudioContext || window.webkitOfflineAudioContext;
  if (!OAC) return Promise.reject(new Error("pas de rendu hors ligne"));
  const end = Math.max(...notes.map((n) => (n.at || 0) / 1000 + n.ms / 1000)) + 0.05;
  const c = new OAC(1, Math.ceil(end * rate), rate);
  notes.forEach((n) => {
    const t0 = (n.at || 0) / 1000;
    const t1 = t0 + n.ms / 1000;
    const tg = n.glide ? t0 + n.glide / 1000 : t1;
    const osc = c.createOscillator();
    osc.type = n.wave || "sine";
    osc.frequency.setValueAtTime(n.hz, t0);
    if (n.to) osc.frequency.exponentialRampToValueAtTime(n.to, tg);
    const g = c.createGain();
    const atk = Math.min((n.atk ?? 4) / 1000, (n.ms / 1000) * 0.6);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, (n.gain ?? 0.05) * vol), t0 + atk);
    g.gain.exponentialRampToValueAtTime(0.0001, t1);
    let tail = osc;
    if (n.cut) {
      const f = c.createBiquadFilter();
      f.type = "lowpass";
      f.frequency.value = n.cut;
      osc.connect(f);
      tail = f;
    }
    tail.connect(g);
    g.connect(c.destination);
    osc.start(t0);
    osc.stop(t1 + 0.02);
  });
  return c.startRendering();
}

/**
 * Joue un son de la planche. Renvoie false si le son n’est pas encore prêt (la planche le joue alors à l’ancienne,
 * et il sera prêt la fois suivante).
 * board : la planche (pour ses réglages sons/volumeSons et sa liste de sons) ; o : { volume, pitch } comme dans la maquette.
 */
export function playFast(board, name, o) {
  const props = board.props || {};
  if (!(props.sons ?? true)) return true;
  if (board._sonsFor !== props) { board._sonsFor = props; board._sonsMap = board._sons(); }
  const notes = board._sonsMap[name];
  if (!notes) return true;
  const now = Date.now();
  board._sndLast = board._sndLast || {};
  if (now - (board._sndLast[name] || 0) < (name === "bump" ? 240 : 60)) return true;
  const vol = (Math.max(0, Math.min(100, props.volumeSons ?? 60)) / 50) * ((o && o.volume) || 1);
  if (vol <= 0) return true;
  const c = ctx();
  if (!c) return true;
  const key = keyOf(name, notes, vol, c);
  const buf = cache.get(key);
  if (!buf) {
    if (!pending.has(key)) {
      pending.add(key);
      render(notes, vol, c.sampleRate).then((b) => cache.set(key, b), () => {}).then(() => pending.delete(key));
    }
    return false;
  }
  board._sndLast[name] = now;
  if (c.state === "suspended" && c.resume) c.resume();
  try {
    const s = c.createBufferSource();
    s.buffer = buf;
    // Un brin de variation pour qu’un même son répété ne sonne jamais mécanique (comme dans la maquette).
    s.playbackRate.value = ((o && o.pitch) || 1) * (name === "glide" ? 0.985 + Math.random() * 0.03 : 1);
    s.connect(c.destination);
    s.start(c.currentTime + 0.005);
  } catch (e) {}
  return true;
}

// Prépare d’avance les sons d’une planche (au démarrage, pendant que rien ne bouge).
export function warmSounds(board) {
  const props = board.props || {};
  if (!(props.sons ?? true) || typeof board._sons !== "function") return;
  const c = ctx();
  if (!c) return;
  const vol = (Math.max(0, Math.min(100, props.volumeSons ?? 60)) / 50);
  const all = board._sons();
  Object.keys(all).forEach((name) => {
    [1, 0.8].forEach((k) => {
      const key = keyOf(name, all[name], vol * k, c);
      if (cache.has(key) || pending.has(key)) return;
      pending.add(key);
      render(all[name], vol * k, c.sampleRate).then((b) => cache.set(key, b), () => {}).then(() => pending.delete(key));
    });
  });
}

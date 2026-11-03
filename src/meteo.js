// Météo de Paris pour l’accueil (à côté de l’heure) : Open-Meteo, gratuit et sans clé, lu directement par la TV.
// Données sous licence CC BY 4.0 : « Weather data by Open-Meteo.com » (crédit affiché dans le panneau Info).
import { store } from "./tv.js";

const PARIS = { lat: 48.8566, lon: 2.3522 };
const KEY = "launcher.meteo";
const URL = "https://api.open-meteo.com/v1/forecast?latitude=" + PARIS.lat + "&longitude=" + PARIS.lon +
  "&current=temperature_2m,weather_code,is_day&current_weather=true&timezone=Europe%2FParis";

// Dernière météo connue, si elle a moins de 3 heures (pour afficher quelque chose dès l’allumage).
export function cachedMeteo() {
  const m = store.load(KEY, null);
  return m && Date.now() - m.at < 3 * 3600 * 1000 ? m : null;
}

export async function fetchMeteo() {
  const r = await fetch(URL, { cache: "no-store" });
  if (!r.ok) throw new Error("météo " + r.status);
  const j = await r.json();
  // Format actuel (« current »), sinon l’ancien (« current_weather »).
  const c = j.current || {};
  const o = j.current_weather || {};
  const temp = c.temperature_2m != null ? c.temperature_2m : o.temperature;
  const code = c.weather_code != null ? c.weather_code : o.weathercode;
  const day = c.is_day != null ? c.is_day : o.is_day;
  if (typeof temp !== "number" || typeof code !== "number") throw new Error("météo illisible");
  const m = { temp, code, isDay: day !== 0, at: Date.now() };
  store.save(KEY, m);
  return m;
}

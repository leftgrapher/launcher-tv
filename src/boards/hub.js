// Généré depuis la maquette (Hub.dc.html) par build/convert.py — ne pas modifier à la main.
import { A } from "../assets.js";

export const defaults = {
  "mouvement": true,
  "accent": "#F2B66D",
  "sons": true,
  "volumeSons": 60
};

export function template(v, html) {
  return html`<div data-hub="1" onMouseEnter="${v?.claimRemote}" onMouseDown="${v?.claimRemote}" style="position: relative; width: 1920px; height: 1080px; overflow: hidden; background: transparent; color: #F5F5F7; font-family: 'Inter', system-ui, sans-serif; font-optical-sizing: auto">

<svg aria-hidden="true" width="0" height="0" style="position: absolute"><filter id="lg-refract" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.011 0.011" numOctaves="2" seed="7" result="bruit"></feTurbulence><feGaussianBlur in="bruit" stdDeviation="2" result="doux"></feGaussianBlur><feDisplacementMap in="SourceGraphic" in2="doux" scale="22" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap></filter></svg>
<div aria-hidden="true" style="position: absolute; inset: 0; background: rgba(5, 7, 14, 0.18)"></div>
<div aria-hidden="true" style="position: absolute; inset: 0; background: linear-gradient(270deg, rgba(5, 7, 14, 0.62) 0%, rgba(5, 7, 14, 0.36) 28%, rgba(5, 7, 14, 0) 52%); animation: ${v?.scrimAnim}"></div>

<div style="position: absolute; top: 60px; right: 56px; height: 56px; display: flex; align-items: center; gap: 24px">
<span style="font-size: 30px; font-weight: 500; letter-spacing: -0.01em; font-variant-numeric: tabular-nums; text-shadow: 0 2px 16px rgba(0, 0, 0, 0.35)">${v?.heure}</span>
<a href="Main.dc.html" aria-label="Fermer le hub" style="width: 56px; height: 56px; border-radius: 28px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; color: #0B0C0F; text-decoration: none; background: #F5F5F7; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3)">
<svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</a>
</div>

<section aria-label="Hub" style="position: absolute; top: 132px; right: 56px; width: 346px">
<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); grid-auto-rows: 76px; gap: 14px">

<button type="button" class="lg lg-refract" aria-label="Hue Sync" aria-pressed="${v?.hue?.pressed}" onClick="${v?.hue?.toggle}" onFocus="${v?.hue?.pick}" onMouseEnter="${v?.hue?.pick}" style="grid-column: span 2; grid-row: span 2; border-radius: 36px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; background: ${v?.hue?.bg}; color: ${v?.hue?.fg}; border: 1px solid ${v?.hue?.border}; box-shadow: ${v?.hue?.shadow}; --lg-fx: ${v?.hue?.fx}; transform: scale(${v?.hue?.scale}); transition: ${v?.hue?.transition}; animation: ${v?.hue?.enter}">
<svg aria-hidden="true" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="color: ${v?.hue?.icon}; opacity: ${v?.hue?.iconOpacity}; filter: ${v?.hue?.iconFilter}; transition: color 220ms ease, opacity 220ms ease, filter 220ms ease"><circle cx="12" cy="12" r="4" style="fill: ${v?.hue?.sunFill}; transition: fill 220ms ease"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<span style="display: flex; flex-direction: column; align-items: center; gap: 4px">
<span style="font-size: 17px; font-weight: 600">Hue Sync</span>
<span style="font-size: 13px; font-weight: 500; color: ${v?.hue?.fg2}">${v?.hue?.sub}</span>
</span>
</button>

${(v?.modes || []).map((item, $index) => html`
<button type="button" class="lg lg-refract" aria-label="${item?.name}" aria-pressed="${item?.pressed}" onClick="${item?.choose}" onFocus="${item?.pick}" onMouseEnter="${item?.pick}" style="grid-column: span 2; border-radius: 38px; padding: 0 18px; box-sizing: border-box; display: flex; align-items: center; gap: 12px; text-align: left; background: ${item?.bg}; color: ${item?.fg}; border: 1px solid ${item?.border}; box-shadow: ${item?.shadow}; --lg-fx: ${item?.fx}; transform: scale(${item?.scale}); transition: ${item?.transition}; animation: ${item?.enter}">
<span aria-hidden="true" style="display: flex; flex-shrink: 0; color: ${item?.icon}; opacity: ${item?.iconOpacity}; filter: ${item?.iconFilter}; transition: color 220ms ease, opacity 220ms ease, filter 220ms ease">
${(item?.isVideo) ? html`
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m12.296 3.464 3.02 3.956"></path><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="m6.18 5.276 3.1 3.899"></path></svg>
` : null}
${(item?.isGame) ? html`
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
` : null}
</span>
<span style="font-size: 16px; font-weight: 600; line-height: 1.2; min-width: 0">${item?.name}</span>
</button>
`)}

<button type="button" class="lg lg-refract" aria-label="Toute la pièce" aria-pressed="${v?.zone?.pressed}" onClick="${v?.zone?.toggle}" onFocus="${v?.zone?.pick}" onMouseEnter="${v?.zone?.pick}" style="grid-column: span 2; border-radius: 38px; padding: 0 18px; box-sizing: border-box; display: flex; align-items: center; gap: 12px; text-align: left; background: ${v?.zone?.bg}; color: ${v?.zone?.fg}; border: 1px solid ${v?.zone?.border}; box-shadow: ${v?.zone?.shadow}; --lg-fx: ${v?.zone?.fx}; transform: scale(${v?.zone?.scale}); transition: ${v?.zone?.transition}; animation: ${v?.zone?.enter}">
<svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; color: ${v?.zone?.icon}; opacity: ${v?.zone?.iconOpacity}; filter: ${v?.zone?.iconFilter}; transition: color 220ms ease, opacity 220ms ease, filter 220ms ease"><path d="M12 10v12"></path><path d="M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z"></path><path d="M9 22h6"></path></svg>
<span style="font-size: 16px; font-weight: 600; line-height: 1.2; min-width: 0">Toute la pièce</span>
</button>

<button type="button" class="lg lg-refract" data-hub-btn="power" aria-label="Tout éteindre, TV et lumières" onClick="${v?.power?.open}" onFocus="${v?.power?.pick}" onMouseEnter="${v?.power?.pick}" style="grid-column: span 2; border-radius: 38px; padding: 0 18px; box-sizing: border-box; display: flex; align-items: center; gap: 12px; text-align: left; background: ${v?.power?.bg}; color: ${v?.power?.fg}; border: 1px solid ${v?.power?.border}; box-shadow: ${v?.power?.shadow}; --lg-fx: ${v?.power?.fx}; transform: scale(${v?.power?.scale}); transition: ${v?.power?.transition}; animation: ${v?.power?.enter}">
<svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0"><path d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path></svg>
<span style="font-size: 16px; font-weight: 600; line-height: 1.2; min-width: 0">Tout éteindre</span>
</button>

${(v?.connect || []).map((item, $index) => html`
<button type="button" class="lg lg-refract" data-hub-btn="${item?.id}" aria-label="${item?.label}" aria-pressed="${item?.pressed}" onClick="${item?.toggle}" onFocus="${item?.pick}" onMouseEnter="${item?.pick}" style="position: relative; border-radius: 38px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; background: ${item?.bg}; color: ${item?.icon}; border: 1px solid ${item?.border}; box-shadow: ${item?.shadow}; --lg-fx: ${item?.fx}; transform: scale(${item?.scale}); transition: ${item?.transition}; animation: ${item?.enter}">
<span aria-hidden="true" style="display: flex; opacity: ${item?.iconOpacity}; filter: ${item?.iconFilter}; transition: opacity 220ms ease, filter 220ms ease">
${(item?.isWifi) ? html`
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
` : null}
${(item?.isBluetooth) ? html`
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m7 7 10 10-5 5V2l5 5L7 17"></path></svg>
` : null}
</span>
</button>
`)}

<button type="button" class="lg lg-refract" data-hub-btn="tizen" aria-label="Accueil Tizen, revenir à l’interface Samsung d’origine" onClick="${v?.tizen?.open}" onFocus="${v?.tizen?.pick}" onMouseEnter="${v?.tizen?.pick}" style="grid-column: span 2; border-radius: 38px; padding: 0 18px; box-sizing: border-box; display: flex; align-items: center; gap: 12px; text-align: left; background: ${v?.tizen?.bg}; color: ${v?.tizen?.fg}; border: 1px solid ${v?.tizen?.border}; box-shadow: ${v?.tizen?.shadow}; --lg-fx: ${v?.tizen?.fx}; transform: scale(${v?.tizen?.scale}); transition: ${v?.tizen?.transition}; animation: ${v?.tizen?.enter}">
<svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
<span style="font-size: 16px; font-weight: 600; line-height: 1.2; min-width: 0">Accueil Tizen</span>
</button>

${(v?.circles || []).map((item, $index) => html`
<button type="button" class="lg lg-refract" data-hub-btn="${item?.id}" aria-label="${item?.label}" onClick="${item?.open}" onFocus="${item?.pick}" onMouseEnter="${item?.pick}" style="position: relative; border-radius: 38px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; background: ${item?.bg}; color: ${item?.fg}; border: 1px solid ${item?.border}; box-shadow: ${item?.shadow}; --lg-fx: ${item?.fx}; transform: scale(${item?.scale}); transition: ${item?.transition}; animation: ${item?.enter}">
<span aria-hidden="true" style="display: flex; opacity: ${item?.iconOpacity}; filter: ${item?.iconFilter}; transition: opacity 220ms ease, filter 220ms ease">
${(item?.isConsole) ? html`
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
` : null}
${(item?.isHandheld) ? html`
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="10" y1="12" y2="12"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="15" x2="15.01" y1="13" y2="13"></line><line x1="18" x2="18.01" y1="11" y2="11"></line><rect width="20" height="12" x="2" y="6" rx="2"></rect></svg>
` : null}
${(item?.isDesktop) ? html`
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
` : null}
${(item?.isTower) ? html`
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"></rect><path d="M15 14h.01"></path><path d="M9 6h6"></path><path d="M9 10h6"></path></svg>
` : null}
${(item?.isUsb) ? html`
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 16h.01"></path><path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><path d="M21.946 12.013H2.054"></path><path d="M6 16h.01"></path></svg>
` : null}
${(item?.isHome) ? html`
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
` : null}
${(item?.isSettings) ? html`
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
` : null}
${(item?.isAdd) ? html`
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
` : null}
</span>
</button>
`)}

</div>
</section>

<div aria-live="polite" style="position: absolute; top: 682px; right: 56px; width: 346px; display: flex; justify-content: center; pointer-events: none; opacity: ${v?.toast?.opacity}; transform: translateY(${v?.toast?.shift}); transition: ${v?.toast?.transition}">
<span class="lg" style="padding: 12px 20px; border-radius: 999px; background: rgba(10, 12, 20, 0.55); border: 1px solid rgba(255, 255, 255, 0.08); -webkit-backdrop-filter: blur(16px) saturate(170%); backdrop-filter: blur(16px) saturate(170%); font-size: 15px; font-weight: 500; color: #F5F5F7; white-space: nowrap">${v?.toast?.text}</span>
</div>

${(v?.sys?.on) ? html`
<div onClick="${v?.sys?.close}" style="position: absolute; inset: 0; z-index: 35; background: rgba(0, 0, 0, ${v?.sys?.dim}); transition: background-color 320ms ease">
<div role="dialog" aria-label="Réglages TV, interface Samsung" onClick="${v?.sys?.stop}" style="position: absolute; left: 48px; top: 48px; bottom: 48px; width: 540px; box-sizing: border-box; padding: 44px 28px 32px; border-radius: 30px; display: flex; flex-direction: column; gap: 6px; background: rgba(24, 26, 32, 0.9); -webkit-backdrop-filter: blur(36px) saturate(140%); backdrop-filter: blur(36px) saturate(140%); border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 30px 90px rgba(0, 0, 0, 0.55); color: #F5F5F7; opacity: ${v?.sys?.opacity}; transform: translateX(${v?.sys?.shift}); transition: ${v?.sys?.transition}; cursor: default">
<p style="margin: 0 0 2px 18px; font-size: 14px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255, 255, 255, 0.45)">Interface Samsung</p>
<p style="margin: 0 0 22px 18px; font-size: 36px; font-weight: 700; letter-spacing: -0.02em">Réglages</p>
${(v?.sys?.items || []).map((r, $index) => html`
<div onMouseEnter="${r?.pick}" style="display: flex; align-items: center; gap: 18px; padding: 16px 18px; border-radius: 18px; background: ${r?.bg}; color: ${r?.fg}; transform: scale(${r?.scale}); transition: background-color 200ms ease, color 200ms ease, transform 320ms cubic-bezier(0.34, 1.4, 0.5, 1)">
<span aria-hidden="true" style="display: flex; flex-shrink: 0">
${(r?.isImage) ? html`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>` : null}
${(r?.isSon) ? html`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>` : null}
${(r?.isConnexion) ? html`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>` : null}
${(r?.isAppareils) ? html`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><path d="M2 12a9 9 0 0 1 8 8"></path><path d="M2 16a5 5 0 0 1 4 4"></path><line x1="2" x2="2.01" y1="20" y2="20"></line></svg>` : null}
${(r?.isGeneral) ? html`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>` : null}
${(r?.isAide) ? html`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>` : null}
</span>
<span style="font-size: 22px; font-weight: 600; white-space: nowrap">${r?.name}</span>
<span style="margin-left: auto; font-size: 17px; font-weight: 500; color: ${r?.fg2}; white-space: nowrap">${r?.value}</span>
</div>
`)}
<p style="margin: auto 0 0 18px; font-size: 16px; font-weight: 500; color: rgba(255, 255, 255, 0.42)">Retour pour fermer</p>
</div>
</div>
` : null}

${(v?.launch?.on) ? html`
<button type="button" aria-label="Revenir au hub" onClick="${v?.launch?.back}" style="position: absolute; z-index: 30; left: 0; top: 0; width: 1920px; height: 1080px; clip-path: ${v?.launch?.clip}; -webkit-clip-path: ${v?.launch?.clip}; background: ${v?.launch?.bg}; opacity: ${v?.launch?.opacity}; overflow: hidden; cursor: pointer; transition: ${v?.launch?.transition}; will-change: clip-path">
<div style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; color: #F5F5F7; opacity: ${v?.launch?.contentOpacity}; transform: scale(${v?.launch?.contentScale}); transition: ${v?.launch?.contentTransition}">
<span style="font-size: 56px; font-weight: 700; letter-spacing: -0.02em">${v?.launch?.name}</span>
<span style="margin-top: -10px; font-size: 22px; font-weight: 400; opacity: 0.8">${v?.launch?.sub}</span>
<span style="font-size: 18px; font-weight: 500; opacity: 0.55">Clique pour revenir au hub</span>
</div>
</button>
` : null}

${(v?.off?.on) ? html`
<button type="button" aria-label="Rallumer la TV" onClick="${v?.off?.wake}" style="position: absolute; z-index: 40; left: 0; top: 0; width: 1920px; height: 1080px; display: flex; align-items: center; justify-content: center; background: #000000; opacity: ${v?.off?.opacity}; transition: opacity 700ms ease; cursor: pointer">
<span style="font-size: 18px; font-weight: 500; color: rgba(255, 255, 255, 0.32); opacity: ${v?.off?.hintOpacity}; transition: ${v?.off?.hintTransition}">TV et lumières éteintes · clique pour rallumer</span>
</button>
` : null}

</div>`;
}

export function makeLogic(DCLogic) {
class Component extends DCLogic {
  componentDidMount() {
    this._sndPrev = this._sndState();
    this._timer = setInterval(() => this.forceUpdate(), 30000);
    this._watchMode(() => this.setState({ focus: null, tilt: null, pressed: false, launch: null, off: null, toast: null }));
    // Télécommande simulée au clavier : flèches, Entrée = OK, ⌫ ou Échap = Retour (ferme le hub).
    // Télécommande prioritaire : après une touche, le survol de la souris est ignoré tant qu’elle ne bouge pas vraiment.
    // (Quand la grille défile sous une souris immobile, le navigateur « survole » la tuile qui passe dessous : la sélection sautait.)
    this._onMM = (e) => {
      const p = e.screenX + "," + e.screenY;
      if (this._lastMM !== undefined && this._lastMM !== p) this._kbdMode = false;
      this._lastMM = p;
    };
    if (typeof window !== "undefined") window.addEventListener("mousemove", this._onMM, true);
    this._onKey = (e) => this._key(e);
    if (typeof window !== "undefined") window.addEventListener("keydown", this._onKey);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
    clearTimeout(this._lt1);
    clearTimeout(this._lt2);
    clearTimeout(this._toastT);
    clearTimeout(this._bounceT);
    if (this._mo) this._mo.disconnect();
    if (typeof window !== "undefined") { window.removeEventListener("keydown", this._onKey); window.removeEventListener("mousemove", this._onMM, true); }
  }

  _nextFrame(fn) {
    if (typeof requestAnimationFrame === "undefined") { this._lt1 = setTimeout(fn, 40); return; }
    requestAnimationFrame(() => requestAnimationFrame(fn));
  }

  _rect(root, el) {
    const rr = root.getBoundingClientRect();
    const k = rr.width / 1920 || 1;
    const r = el.getBoundingClientRect();
    return { x: (r.left - rr.left) / k, y: (r.top - rr.top) / k, w: r.width / k, h: r.height / k };
  }

  // Ce que fait chaque bouton : ouvrir un écran (source, appli, réglages) ou, faute d’appareil, afficher un message.
  _pages() {
    return {
      ps5: { name: "PS5 Pro", sub: "Entrée HDMI 1", bg: "#000000" },
      switch: { name: "Nintendo Switch", sub: "Entrée HDMI 2", bg: "#E52528" },
      mac: { name: "Mac Studio", sub: "Entrée HDMI 3 · aucun signal", bg: "#0B0C10" },
      pc: { name: "PC", sub: "Entrée HDMI 4 · aucun signal", bg: "#0B0C10" },
      smartthings: { name: "SmartThings", sub: "Maison connectée", bg: "#008DF6" },
      tizen: { name: "Tizen", sub: "Retour à l’accueil Samsung d’origine", bg: "#1428A0" },
      ajouter: { name: "Ajouter un raccourci", sub: "Choisis une appli ou une entrée à épingler dans le hub", bg: "#16181F" }
    };
  }

  _press(id) {
    this._pressId = id;
    this._pressN = (this._pressN || 0) + 1;
  }

  _toast(text) {
    clearTimeout(this._toastT);
    this.setState({ toast: { text: text, on: true } });
    this._toastT = setTimeout(() => this.setState((s) => (s.toast ? { toast: Object.assign({}, s.toast, { on: false }) } : {})), 2400);
  }

  _open(id, el) {
    if (!this._live()) return;
    this._press(id);
    if (id === "reglages") { this.setState({ focus: id }); this._openSys(); return; }
    if (id === "usb") { this.setState({ focus: id }); this._toast("Aucun stockage USB branché"); return; }
    const P = this._pages()[id];
    if (!P) return;
    const root = el && el.closest ? el.closest("[data-hub]") : null;
    clearTimeout(this._lt1);
    clearTimeout(this._lt2);
    const L = { id: id, name: P.name, sub: P.sub, bg: P.bg, phase: "start", rect: root ? this._rect(root, el) : { x: 1574, y: 572, w: 76, h: 76 } };
    this.setState({ focus: id, launch: L });
    this._nextFrame(() => this.setState((s) => (s.launch ? { launch: Object.assign({}, s.launch, { phase: "grow" }) } : {})));
    this._lt2 = setTimeout(() => this.setState((s) => (s.launch ? { launch: Object.assign({}, s.launch, { phase: "open" }) } : {})), 640);
  }

  // Réglages TV : comme sur Tizen, le panneau système s’ouvre par-dessus l’écran en cours (accueil, applis, hub ou appli), sans le quitter.
  _openSys() {
    if (!this._live()) return;
    clearTimeout(this._sysT);
    this.setState({ sys: { phase: "start", idx: 0 } });
    this._nextFrame(() => this.setState((s) => (s.sys ? { sys: Object.assign({}, s.sys, { phase: "on" }) } : {})));
  }

  _closeSys() {
    const S = (this.state || {}).sys;
    if (!S || S.phase === "off") return;
    this.setState({ sys: Object.assign({}, S, { phase: "off" }) });
    clearTimeout(this._sysT);
    this._sysT = setTimeout(() => this.setState({ sys: null }), 340);
  }

  // Touches pendant que les réglages sont ouverts : ↑ ↓ dans la liste, Retour (ou ←) ferme.
  _sysKey(k) {
    const S = (this.state || {}).sys;
    if (!S) return false;
    if (k === "up" || k === "down") this.setState({ sys: Object.assign({}, S, { idx: Math.max(0, Math.min(5, S.idx + (k === "down" ? 1 : -1))) }) });
    else if (k === "back" || k === "left") this._closeSys();
    return true;
  }

  _close() {
    const L = (this.state || {}).launch;
    if (!L || L.phase !== "open") return;
    clearTimeout(this._lt1);
    clearTimeout(this._lt2);
    // Même retour que sur l’accueil : coins ré-arrondis, l’écran se referme dans son bouton, puis fondu.
    this.setState({ launch: Object.assign({}, L, { phase: "round" }) });
    this._lt1 = setTimeout(() => {
      this.setState((s) => ({ launch: Object.assign({}, s.launch, { phase: "shrink" }) }));
      this._lt2 = setTimeout(() => {
        this.setState((s) => ({ launch: Object.assign({}, s.launch, { phase: "fade" }) }));
        this._lt1 = setTimeout(() => this.setState({ launch: null }), 240);
      }, 580);
    }, 320);
  }

  // Tout éteindre : l’écran passe au noir (TV et lumières) ; un clic ou une touche rallume.
  _powerOff() {
    if (!this._live()) return;
    clearTimeout(this._lt1);
    this._press("power");
    this.setState({ focus: "power", off: { phase: "start" } });
    this._nextFrame(() => this.setState((s) => (s.off ? { off: { phase: "on" } } : {})));
  }

  _wake() {
    if (!(this.state || {}).off) return;
    clearTimeout(this._lt1);
    this.setState({ off: { phase: "wake" } });
    this._lt1 = setTimeout(() => this.setState({ off: null }), 720);
  }

  // ── Sons d’interface ──────────────────────────────────────────
  // Synthétisés en direct (Web Audio), sans fichier. « glide », « bump » et « buzz » viennent de Bencho
  // (bencho.dev, licence MIT, © 2026 Lorenzo Cabra) ; les autres sont faits sur le même principe.
  // Chaque son = des notes : hauteur (hz, glissando vers « to »), durée (ms), volume, forme d’onde, passe-bas (cut), attaque (atk), décalage (at).
  _sons() {
    return {
      glide: [{ hz: 397, to: 276, ms: 205, gain: 0.065, wave: "sine", cut: 820, atk: 90 }],
      bump: [{ hz: 208, to: 165, ms: 120, gain: 0.03, wave: "sine", cut: 520, atk: 10 }],
      bulle: [
        { hz: 260, to: 720, glide: 38, ms: 90, gain: 0.07, wave: "sine", cut: 2600, atk: 2 },
        { hz: 1040, to: 1480, glide: 22, ms: 46, gain: 0.014, wave: "sine", cut: 5000, atk: 2, at: 18 }
      ],
      retour: [{ hz: 520, to: 300, glide: 60, ms: 120, gain: 0.04, wave: "sine", cut: 1400, atk: 6 }],
      edition: [
        { hz: 392, ms: 110, gain: 0.04, wave: "sine", cut: 2200, atk: 6 },
        { hz: 523, ms: 120, gain: 0.04, wave: "sine", cut: 2400, atk: 6, at: 70 },
        { hz: 659, ms: 220, gain: 0.038, wave: "sine", cut: 2600, atk: 8, at: 140 }
      ],
      prise: [{ hz: 330, to: 780, glide: 55, ms: 100, gain: 0.055, wave: "sine", cut: 2400, atk: 3 }],
      deplace: [{ hz: 620, to: 540, ms: 60, gain: 0.03, wave: "triangle", cut: 1500, atk: 4 }],
      pose: [
        { hz: 760, to: 320, glide: 45, ms: 110, gain: 0.055, wave: "sine", cut: 2000, atk: 2 },
        { hz: 150, to: 120, ms: 110, gain: 0.04, wave: "sine", cut: 500, atk: 3, at: 25 }
      ],
      fin: [
        { hz: 659, ms: 110, gain: 0.04, wave: "sine", cut: 2600, atk: 5 },
        { hz: 988, ms: 300, gain: 0.036, wave: "sine", cut: 3000, atk: 6, at: 85 }
      ],
      hub: [{ hz: 240, to: 460, ms: 230, gain: 0.04, wave: "sine", cut: 1100, atk: 70 }],
      hubFin: [{ hz: 460, to: 240, ms: 200, gain: 0.04, wave: "sine", cut: 1100, atk: 40 }],
      on: [{ hz: 540, to: 820, glide: 28, ms: 70, gain: 0.05, wave: "sine", cut: 2600, atk: 3 }],
      off: [{ hz: 620, to: 360, glide: 28, ms: 70, gain: 0.045, wave: "sine", cut: 1800, atk: 3 }],
      panneau: [{ hz: 300, to: 380, ms: 160, gain: 0.04, wave: "sine", cut: 1200, atk: 30 }],
      reveil: [
        { hz: 262, ms: 260, gain: 0.04, wave: "sine", cut: 1000, atk: 50 },
        { hz: 392, ms: 380, gain: 0.034, wave: "sine", cut: 1200, atk: 60, at: 110 }
      ],
      eteint: [{ hz: 330, to: 82, ms: 460, gain: 0.05, wave: "sine", cut: 700, atk: 15 }],
      erreur: [
        { hz: 344, to: 239, ms: 24, gain: 0.048, wave: "triangle", cut: 1100, atk: 7 },
        { hz: 344, to: 239, ms: 24, gain: 0.048, wave: "triangle", cut: 1100, atk: 7, at: 80 }
      ]
    };
  }

  // Joue un son. Réglages « Sons » et « Volume des sons » ; o.volume et o.pitch l’ajustent ponctuellement.
  _snd(name, o) {
    if (!(this.props.sons ?? true) || typeof window === "undefined") return;
    const AC = window.AudioContext || window.webkitAudioContext;
    const notes = this._sons()[name];
    if (!AC || !notes) return;
    const now = Date.now();
    this._sndLast = this._sndLast || {};
    if (now - (this._sndLast[name] || 0) < (name === "bump" ? 240 : 60)) return;
    this._sndLast[name] = now;
    let c = window.__dcAudio;
    if (!c) {
      try { c = window.__dcAudio = new AC(); } catch (e) { return; }
    }
    if (c.state === "suspended" && c.resume) c.resume();
    const vol = (Math.max(0, Math.min(100, this.props.volumeSons ?? 60)) / 50) * ((o && o.volume) || 1);
    if (vol <= 0) return;
    // Un brin de variation pour qu’un même son répété ne sonne jamais mécanique.
    const bend = ((o && o.pitch) || 1) * (name === "glide" ? 0.985 + Math.random() * 0.03 : 1);
    const when = c.currentTime + 0.005;
    try {
      notes.forEach((n) => {
        const t0 = when + (n.at || 0) / 1000;
        const t1 = t0 + n.ms / 1000;
        const tg = n.glide ? t0 + n.glide / 1000 : t1;
        const osc = c.createOscillator();
        osc.type = n.wave || "sine";
        osc.frequency.setValueAtTime(n.hz * bend, t0);
        if (n.to) osc.frequency.exponentialRampToValueAtTime(n.to * bend, tg);
        // Jamais de départ à plein volume : ça claquerait.
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
    } catch (e) {}
  }

  // Quel son pour ce qui vient de changer dans le hub.
  _sndState() {
    const s = this.state || {};
    return {
      focus: s.focus || "hue", hue: s.hueOn ?? true, zone: !!s.zoneRoom, wifi: s.wifiOn ?? true, bt: s.btOn ?? true,
      mode: s.mode || "video", launch: s.launch ? s.launch.phase : null, off: s.off ? s.off.phase : null,
      sys: s.sys ? s.sys.phase : null, sysIdx: s.sys ? s.sys.idx : 0, toast: s.toast && s.toast.on ? s.toast.text : null
    };
  }

  componentDidUpdate() {
    const cur = this._sndState();
    const p = this._sndPrev;
    this._sndPrev = cur;
    if (!p) return;
    const byKey = Date.now() - (this._sndKeyAt || 0) < 450;
    if (cur.off && !p.off) { this._snd("eteint"); return; }
    if (cur.off === "wake" && p.off !== "wake") { this._snd("reveil"); return; }
    if (cur.launch && !p.launch) { this._snd("bulle"); return; }
    if (cur.launch === "round" && p.launch === "open") { this._snd("retour"); return; }
    if (cur.sys && !p.sys) { this._snd("panneau"); return; }
    if (cur.sys === "off" && p.sys !== "off") { this._snd("retour"); return; }
    if (cur.sys && byKey && cur.sysIdx !== p.sysIdx) { this._snd("glide", { volume: 0.8 }); return; }
    if (cur.toast && cur.toast !== p.toast) { this._snd("erreur"); return; }
    for (const k of ["hue", "zone", "wifi", "bt"]) {
      if (cur[k] !== p[k]) { this._snd(cur[k] ? "on" : "off"); return; }
    }
    if (cur.mode !== p.mode) { this._snd("on"); return; }
    if (byKey && cur.focus !== p.focus) this._snd("glide");
  }

  _sndSig() {
    const s = this.state || {};
    return [s.focus, s.sys ? s.sys.idx : ""].join("|");
  }

  _key(e) {
    if (!e || e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName || ""))) return;
    if (!this._live()) return;
    if (typeof window === "undefined" || window.__dcRemote !== "hub") return;
    const k = e.keyCode === 10009 ? "back"
      : { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", Enter: "ok", Escape: "back", Backspace: "back" }[e.key];
    if (!k) return;
    this._kbdMode = true;
    e.preventDefault();
    const now = Date.now();
    if (e.repeat && now - (this._keyAt || 0) < 110) return;
    this._keyAt = now;
    this._sndKeyAt = now;
    const before = /^(left|right|up|down)$/.test(k) && !(this.state || {}).launch ? this._sndSig() : null;
    this._remote(k);
    if (before !== null) setTimeout(() => { if (this._sndSig() === before) this._snd("bump", { volume: 0.8 }); }, 0);
  }

  // Les boutons du hub sur leur grille de 4 colonnes : on se déplace case par case jusqu’au bouton voisin.
  _remote(k) {
    const grid = [
      ["hue", "hue", "video", "video"],
      ["hue", "hue", "jeu", "jeu"],
      ["zone", "zone", "power", "power"],
      ["wifi", "bt", "tizen", "tizen"],
      ["ps5", "switch", "mac", "pc"],
      ["usb", "smartthings", "reglages", "ajouter"]
    ];
    const s = this.state || {};
    const focus = s.focus || "hue";
    if (s.off) { this._wake(); return; }
    if (s.sys) { this._sysKey(k); return; }
    if (s.launch) {
      if (k === "back" || k === "ok") this._close();
      return;
    }
    if (k === "back") {
      const root = this._root || (typeof document !== "undefined" ? document.querySelector("[data-hub]") : null);
      const a = root ? root.querySelector('a[href="Main.dc.html"]') : null;
      if (a) {
        window.__dcRemote = "main";
        this._snd("hubFin");
        a.click();
      }
      return;
    }
    if (k === "ok") {
      const act = this._act && this._act[focus];
      if (act) act();
      else {
        const root = this._root || (typeof document !== "undefined" ? document.querySelector("[data-hub]") : null);
        const el = root ? root.querySelector('[data-hub-btn="' + focus + '"]') : null;
        if (focus === "power") this._powerOff();
        else this._open(focus, el);
      }
      return;
    }
    let c = this._cell;
    if (!c || !grid[c.r] || grid[c.r][c.c] !== focus) {
      c = null;
      grid.forEach((row, r) => row.forEach((id, i) => { if (!c && id === focus) c = { r: r, c: i }; }));
      if (!c) c = { r: 0, c: 0 };
    }
    const d = { left: [0, -1], right: [0, 1], up: [-1, 0], down: [1, 0] }[k];
    let r = c.r, col = c.c;
    while (true) {
      r += d[0];
      col += d[1];
      if (r < 0 || r >= grid.length || col < 0 || col >= 4) return;
      if (grid[r][col] !== focus) break;
    }
    this._cell = { r: r, c: col };
    this._set({ focus: grid[r][col] });
  }

  // Interactions seulement en lecture : pendant l’édition, la maquette reste figée.
  _live() {
    const b = typeof document !== "undefined" ? document.body : null;
    return !b || !b.hasAttribute("data-dc-editor-on") || b.getAttribute("data-dc-editor-tool") === "interact";
  }

  _set(patch) {
    if (this._live()) this.setState(patch);
  }

  _watchMode(onEdit) {
    if (typeof MutationObserver === "undefined" || typeof document === "undefined" || !document.body) return;
    this._wasLive = this._live();
    this._mo = new MutationObserver(() => {
      const live = this._live();
      if (live === this._wasLive) return;
      this._wasLive = live;
      if (!live && onEdit) onEdit();
      this.forceUpdate();
    });
    this._mo.observe(document.body, { attributes: true, attributeFilter: ["data-dc-editor-on", "data-dc-editor-tool"] });
  }

  renderVals() {
    const st = this.state || {};
    const focus = st.focus || "hue";
    const hueOn = st.hueOn ?? true;
    const mode = st.mode || "video";
    const zoneOn = !!st.zoneRoom;
    const accent = this.props.accent ?? "#F2B66D";
    const motion = this.props.mouvement ?? true;
    const transition = motion
      ? "transform 440ms cubic-bezier(0.2, 0.9, 0.3, 1.15), background-color 300ms ease, box-shadow 380ms ease, color 300ms ease, border-color 300ms ease"
      : "background-color 160ms ease, color 160ms ease, border-color 160ms ease";
    const enterAt = (ms) => motion ? "tileIn 560ms cubic-bezier(0.2, 0.9, 0.3, 1.12) " + ms + "ms backwards" : "none";
    // Rebond une fois quand un bouton devient sélectionné, puis retiré.
    if (this._bounceFor !== focus) {
      this._bounceFor = focus;
      this._bounceOn = true;
      clearTimeout(this._bounceT);
      this._bounceT = setTimeout(() => { this._bounceOn = false; this.forceUpdate(); }, 720);
    }
    const animFor = (id, ms) => motion ? [
      enterAt(ms),
      focus === id && this._bounceOn ? "tileBounce 600ms cubic-bezier(0.3, 0.7, 0.4, 1) both" : null,
      this._pressId === id ? (this._pressN % 2 ? "pressPopA" : "pressPopB") + " 420ms cubic-bezier(0.3, 0.7, 0.4, 1) both" : null
    ].filter(Boolean).join(", ") : "none";

    // Pictos des interrupteurs : activé = blanc plein avec une légère lueur ; désactivé = picto « en verre » (blanc translucide, petit reflet).
    // active vaut true ou false pour un interrupteur, null pour un bouton sans état (Tout éteindre, appareils, Tizen).
    const iconFx = (on, active) => active === true
      ? { iconOpacity: "1", iconFilter: on ? "none" : "drop-shadow(0 0 6px rgba(255, 255, 255, 0.55))" }
      : active === false
        ? { iconOpacity: on ? "0.4" : "0.48", iconFilter: on ? "none" : "drop-shadow(0 1px 0 rgba(255, 255, 255, 0.35)) drop-shadow(0 -1px 0 rgba(0, 0, 0, 0.12))" }
        : { iconOpacity: "1", iconFilter: "none" };
    const look = (on, active) => Object.assign(on
      ? {
          bg: "rgba(245, 246, 250, 0.92)",
          fg: "#0B0C0F",
          fg2: "#3C3E47",
          icon: "#0B0C0F",
          border: "rgba(255, 255, 255, 0.85)",
          shadow: "inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 22px 44px rgba(0, 0, 0, 0.35)",
          fx: "0",
          scale: motion ? "1.06" : "1",
          transition: transition
        }
      : {
          bg: "rgba(255, 255, 255, 0.08)",
          fg: "#FFFFFF",
          fg2: "#E4E6EE",
          icon: "#FFFFFF",
          border: "rgba(255, 255, 255, 0.08)",
          shadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3), inset 0 -1px 1px rgba(255, 255, 255, 0.06), 0 12px 32px rgba(0, 0, 0, 0.22)",
          fx: "1",
          scale: "1",
          transition: transition
        }, iconFx(on, active));

    const pickFor = (id) => () => { if (!this._kbdMode) this._set({ focus: id }); };

    const hue = Object.assign({}, look(focus === "hue", hueOn), {
      pick: pickFor("hue"),
      toggle: () => { this._press("hue"); this._set({ focus: "hue", hueOn: !hueOn }); },
      pressed: hueOn ? "true" : "false",
      sub: hueOn ? "Activé" : "Désactivé",
      sunFill: hueOn ? "currentColor" : "transparent",
      enter: animFor("hue", 0)
    });

    const modes = [
      { id: "video", name: "Mode vidéo", hint: "Films et séries" },
      { id: "jeu", name: "Mode gaming", hint: "Réaction rapide" }
    ].map((it, i) => {
      const active = it.id === mode;
      return Object.assign({}, it, look(it.id === focus, active), {
        enter: animFor(it.id, 50 + i * 50),
        pick: pickFor(it.id),
        choose: () => { this._press(it.id); this._set({ focus: it.id, mode: it.id }); },
        pressed: active ? "true" : "false",
        sub: active ? "Actif" : it.hint,
        isVideo: it.id === "video",
        isGame: it.id === "jeu"
      });
    });

    const zone = Object.assign({}, look(focus === "zone", zoneOn), {
      pick: pickFor("zone"),
      toggle: () => { this._press("zone"); this._set({ focus: "zone", zoneRoom: !zoneOn }); },
      pressed: zoneOn ? "true" : "false",
      sub: zoneOn ? "TV + ampoules" : "TV seule",
      enter: animFor("zone", 150)
    });

    const power = Object.assign({}, look(focus === "power", null), { pick: pickFor("power"), open: () => this._powerOff(), enter: animFor("power", 200) });

    const rawCircles = [
      { id: "ps5", name: "PS5 Pro", detail: "HDMI 1 · actif", connected: true, icon: "console" },
      { id: "switch", name: "Switch", detail: "HDMI 2 · actif", connected: true, icon: "handheld" },
      { id: "mac", name: "Mac Studio", detail: "HDMI 3 · inactif", connected: false, icon: "desktop" },
      { id: "pc", name: "PC", detail: "HDMI 4 · inactif", connected: false, icon: "tower" },
      { id: "usb", name: "Stockage USB", detail: "rien de branché", connected: false, icon: "usb" },
      { id: "smartthings", name: "SmartThings", detail: "ouvrir l’appli", icon: "home" },
      { id: "reglages", name: "Réglages TV", detail: "image, son, réseau", icon: "settings" },
      { id: "ajouter", name: "Ajouter un raccourci", detail: "", icon: "add" }
    ];

    const circles = rawCircles.map((it, i) => {
      const on = it.id === focus;
      const label = it.detail ? it.name + " · " + it.detail : it.name;
      // Appareil débranché : bouton en retrait (verre plus discret, picto atténué), sans pastille.
      const off = it.connected === false;
      return Object.assign({}, it, look(on, null), off && !on ? {
        bg: "rgba(255, 255, 255, 0.03)",
        border: "rgba(255, 255, 255, 0.06)",
        shadow: "inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        fx: "0.35"
      } : {}, {
        enter: animFor(it.id, 300 + i * 35),
        pick: pickFor(it.id),
        open: (e) => this._open(it.id, e && e.currentTarget),
        label: label,
        iconOpacity: off ? (on ? "0.5" : "0.38") : "1",
        isConsole: it.icon === "console",
        isHandheld: it.icon === "handheld",
        isDesktop: it.icon === "desktop",
        isTower: it.icon === "tower",
        isUsb: it.icon === "usb",
        isHome: it.icon === "home",
        isSettings: it.icon === "settings",
        isAdd: it.icon === "add"
      });
    });

    // Écran ouvert depuis un bouton : il grandit depuis le bouton jusqu’au plein écran (même animation que l’accueil).
    const L = this._live() ? st.launch : null;
    const ease = "cubic-bezier(0.32, 0.72, 0, 1)";
    const full = !!L && (L.phase === "grow" || L.phase === "open" || L.phase === "round");
    const lr = L ? (full ? { x: 0, y: 0, w: 1920, h: 1080 } : L.rect) : { x: 0, y: 0, w: 0, h: 0 };
    const rad = L && L.phase === "open" ? 0 : 38;
    const cornersOnly = !!L && (L.phase === "open" || L.phase === "round");
    const launch = {
      on: !!L,
      clip: "inset(" + lr.y.toFixed(1) + "px " + (1920 - lr.x - lr.w).toFixed(1) + "px " + (1080 - lr.y - lr.h).toFixed(1) + "px " + lr.x.toFixed(1) + "px round " + rad + "px)",
      bg: L ? (full ? L.bg : "rgba(245, 246, 250, 0.92)") : "transparent",
      opacity: L && L.phase === "fade" ? "0" : "1",
      transition: motion
        ? (cornersOnly ? "clip-path 320ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-clip-path 320ms cubic-bezier(0.4, 0, 0.2, 1)" : "clip-path 580ms " + ease + ", -webkit-clip-path 580ms " + ease) + ", background-color 420ms ease, opacity 240ms ease"
        : "none",
      contentOpacity: L && L.phase === "open" ? "1" : "0",
      contentScale: L && L.phase === "open" ? "1" : "0.92",
      contentTransition: motion ? "opacity 260ms ease, transform 560ms cubic-bezier(0.34, 1.56, 0.64, 1)" : "none",
      name: L ? L.name : "",
      sub: L ? L.sub : "",
      back: () => this._close()
    };
    const O = this._live() ? st.off : null;
    const off = {
      on: !!O,
      opacity: O && O.phase === "on" ? "1" : "0",
      hintOpacity: O && O.phase === "on" ? "1" : "0",
      hintTransition: O && O.phase === "on" ? "opacity 600ms ease 1200ms" : "opacity 200ms ease",
      wake: () => this._wake()
    };
    const T = st.toast;
    const toast = {
      text: T ? T.text : "",
      opacity: T && T.on ? "1" : "0",
      shift: T && T.on ? "0px" : "-8px",
      transition: motion ? "opacity 260ms ease, transform 520ms cubic-bezier(0.34, 1.56, 0.64, 1)" : "opacity 200ms ease"
    };

    // Wi-Fi et Bluetooth : interrupteurs (picto blanc quand c’est activé, picto en verre sinon).
    const wifiOn = st.wifiOn ?? true;
    const btOn = st.btOn ?? true;
    const connect = [
      { id: "wifi", name: "Wi-Fi", on: wifiOn, key: "wifiOn", isWifi: true, isBluetooth: false },
      { id: "bt", name: "Bluetooth", on: btOn, key: "btOn", isWifi: false, isBluetooth: true }
    ].map((it, i) => {
      const f = it.id === focus;
      return Object.assign({}, it, look(f, it.on), {
        enter: animFor(it.id, 220 + i * 35),
        pick: pickFor(it.id),
        toggle: () => {
          if (!this._live()) return;
          this._press(it.id);
          this.setState({ focus: it.id, [it.key]: !it.on });
          this._toast(it.name + (it.on ? " désactivé" : " activé"));
        },
        pressed: it.on ? "true" : "false",
        label: it.name + (it.on ? ", activé" : ", désactivé")
      });
    });
    const tizen = Object.assign({}, look(focus === "tizen", null), {
      pick: pickFor("tizen"),
      open: (e) => this._open("tizen", e && e.currentTarget),
      enter: animFor("tizen", 290)
    });

    // Touche OK : même effet qu’un clic sur le bouton sélectionné.
    this._act = { hue: hue.toggle, video: modes[0].choose, jeu: modes[1].choose, zone: zone.toggle, wifi: connect[0].toggle, bt: connect[1].toggle };
    const claimRemote = (e) => {
      if (typeof window !== "undefined") window.__dcRemote = "hub";
      if (e && e.currentTarget) this._root = e.currentTarget;
    };

    const now = new Date();
    const heure = now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });

    // Panneau des réglages Samsung (simulé) : s’ouvre par-dessus tout, la liste se parcourt aux flèches.
    const SYS = this._live() ? st.sys : null;
    const sysOpen = !!SYS && SYS.phase === "on";
    const sys = {
      on: !!SYS,
      dim: sysOpen ? "0.38" : "0",
      opacity: sysOpen ? "1" : "0",
      shift: sysOpen ? "0px" : "-48px",
      transition: (this.props.mouvement ?? true) ? "transform 460ms cubic-bezier(0.34, 1.25, 0.5, 1), opacity 260ms ease" : "opacity 200ms ease",
      close: () => this._closeSys(),
      stop: (e) => { if (e && e.stopPropagation) e.stopPropagation(); },
      items: [
        { id: "image", name: "Image", value: "Standard" },
        { id: "son", name: "Son", value: "Haut-parleurs TV" },
        { id: "connexion", name: "Connexion", value: "Wi-Fi" },
        { id: "appareils", name: "Appareils connectés", value: "" },
        { id: "general", name: "Général et confidentialité", value: "" },
        { id: "aide", name: "Assistance", value: "" }
      ].map((r, i) => {
        const on = !!SYS && SYS.idx === i;
        return Object.assign({}, r, {
          bg: on ? "rgba(245, 246, 250, 0.95)" : "rgba(255, 255, 255, 0)",
          fg: on ? "#0B0C0F" : "#F5F5F7",
          fg2: on ? "#3C3E47" : "rgba(255, 255, 255, 0.5)",
          scale: on ? "1.02" : "1",
          pick: () => { const s = this.state || {}; if (!this._kbdMode && s.sys && s.sys.idx !== i) this.setState({ sys: Object.assign({}, s.sys, { idx: i }) }); },
          isImage: r.id === "image", isSon: r.id === "son", isConnexion: r.id === "connexion",
          isAppareils: r.id === "appareils", isGeneral: r.id === "general", isAide: r.id === "aide"
        });
      })
    };

    return {
      sys: sys,
      claimRemote: claimRemote,
      heure: heure,
      scrimAnim: motion ? "fadeIn 420ms ease both" : "none",
      launch: launch,
      connect: connect,
      tizen: tizen,
      off: off,
      toast: toast,
      hue: hue,
      modes: modes,
      zone: zone,
      power: power,
      circles: circles
    };
  }
}
  return Component;
}

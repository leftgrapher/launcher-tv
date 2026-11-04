// Généré depuis la maquette (Main.dc.html) par build/convert.py — ne pas modifier à la main.
import { A } from "../assets.js";

export const defaults = {
  "mouvement": true,
  "accent": "#C9A7F5",
  "selection": "Halo de marque",
  "policeHeure": "ABC Arizona",
  "vueApplis": false,
  "ecranVeille": true,
  "veilleApres": 90,
  "programmeAffiche": 1,
  "nombreRecos": 8,
  "sons": true,
  "volumeSons": 60
};

export function template(v, html) {
  return html`<div data-launcher="1" onWheel="${v?.onWheel}" onMouseEnter="${v?.claimRemote}" onMouseDown="${v?.claimRemote}" style="position: relative; width: 1920px; height: 1080px; overflow: hidden; background: #05070E; color: #F5F5F7; font-family: 'Inter', system-ui, sans-serif; font-optical-sizing: auto">

<svg aria-hidden="true" data-herobase="1" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; transform-origin: 62% 48%; animation: ${v?.kenBurns}; animation-play-state: ${v?.kenPlay}">
<defs>
<linearGradient id="main-ciel" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" style="stop-color: ${v?.s?.sky0}; transition: stop-color 900ms ease"></stop>
<stop offset="0.34" style="stop-color: ${v?.s?.sky1}; transition: stop-color 900ms ease"></stop>
<stop offset="0.46" style="stop-color: ${v?.s?.sky2}; transition: stop-color 900ms ease"></stop>
<stop offset="1" style="stop-color: ${v?.s?.sky2}; transition: stop-color 900ms ease"></stop>
</linearGradient>
<radialGradient id="main-halo" cx="1380" cy="500" r="600" gradientUnits="userSpaceOnUse">
<stop offset="0" style="stop-color: ${v?.s?.glow}; stop-opacity: 0.55; transition: stop-color 900ms ease"></stop>
<stop offset="0.45" style="stop-color: ${v?.s?.glow}; stop-opacity: 0.16; transition: stop-color 900ms ease"></stop>
<stop offset="1" style="stop-color: ${v?.s?.glow}; stop-opacity: 0; transition: stop-color 900ms ease"></stop>
</radialGradient>
</defs>
<rect width="1920" height="1080" fill="url(#main-ciel)"></rect>
<rect width="1920" height="1080" fill="url(#main-halo)"></rect>
<circle cx="1380" cy="498" r="54" style="fill: ${v?.s?.sun}; transition: fill 900ms ease"></circle>
<path d="M0 520 C 180 470, 320 490, 480 450 S 820 420, 1000 460 S 1300 520, 1460 470 S 1780 430, 1920 460 V1080 H0 Z" style="fill: ${v?.s?.r1}; transition: fill 900ms ease"></path>
<path d="M0 620 C 220 570, 380 590, 560 545 S 900 585, 1100 550 S 1500 515, 1700 570 S 1880 590, 1920 580 V1080 H0 Z" style="fill: ${v?.s?.r2}; transition: fill 900ms ease"></path>
<path d="M0 730 C 260 680, 480 710, 700 670 S 1080 635, 1320 690 S 1700 750, 1920 695 V1080 H0 Z" style="fill: ${v?.s?.r3}; transition: fill 900ms ease"></path>
<path d="M0 860 C 300 820, 560 850, 860 810 S 1400 790, 1920 840 V1080 H0 Z" style="fill: ${v?.s?.r4}; transition: fill 900ms ease"></path>
</svg>
${(v?.heroBgs || []).map((b, $index) => html`
${(b?.has) ? html`
<img aria-hidden="true" data-herobg="${b?.cur}" alt="" src="${b?.src}" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 30%; opacity: ${b?.opacity}; transition: opacity 900ms ease; transform-origin: 62% 48%; animation: ${v?.kenBurns}; animation-play-state: ${v?.kenPlay}" />
` : null}
`)}
<div aria-hidden="true" style="position: absolute; inset: 0; opacity: ${v?.photoScrim}; transition: opacity 900ms ease; background: linear-gradient(90deg, rgba(5, 7, 14, 0.55) 0%, rgba(5, 7, 14, 0.18) 42%, rgba(5, 7, 14, 0) 62%), linear-gradient(180deg, rgba(5, 7, 14, 0.35) 0%, rgba(5, 7, 14, 0) 22%)"></div>
<div aria-hidden="true" style="position: absolute; inset: 0; background: linear-gradient(90deg, rgba(5, 7, 14, 0.6) 0%, rgba(5, 7, 14, 0.22) 45%, rgba(5, 7, 14, 0) 70%)"></div>
<div aria-hidden="true" style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(5, 7, 14, 0.3) 0%, rgba(5, 7, 14, 0) 18%, rgba(5, 7, 14, 0) 55%, rgba(5, 7, 14, 0.5) 100%)"></div>
<div aria-hidden="true" style="position: absolute; inset: 0; background: rgba(8, 10, 18, 0.34); backdrop-filter: blur(56px) saturate(150%); -webkit-backdrop-filter: blur(56px) saturate(150%); opacity: ${v?.blurOpacity}; visibility: ${v?.blurVisibility}; transition: ${v?.blurTransition}; pointer-events: none"></div>

<div style="position: absolute; left: 0; top: 0; width: 1920px; height: 1080px; transform: translateY(${v?.stageShift}); transition: ${v?.stageTransition}; will-change: transform">

<section aria-live="polite" style="position: absolute; left: 56px; top: 60px; max-width: 1100px; opacity: ${v?.heroOpacity}; transition: opacity 380ms ease">
${(v?.hero0) ? html`
<div style="animation: ${v?.heroAnim}; text-shadow: 0 2px 24px rgba(0, 0, 0, 0.4)">
<h1 style="margin: 0; font-size: 46px; font-weight: 700; letter-spacing: -0.025em; line-height: 56px; max-width: 960px; text-wrap: balance">
${(v?.hero?.hasLogo) ? html`<img src="${v?.hero?.logo}" alt="${v?.hero?.title}" style="display: block; max-width: 520px; max-height: 150px; width: auto; height: auto; margin-bottom: 10px; filter: drop-shadow(0 2px 18px rgba(0, 0, 0, 0.4))" />` : null}
${(v?.hero?.noLogo) ? html`${v?.hero?.title}` : null}
</h1>
<p style="position: absolute; left: 0; top: 675px; width: 1808px; margin: 0; display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: 500; color: #D5D7E0; white-space: nowrap">
<span aria-hidden="true" class="service-logo" style="display: inline-flex; align-items: center; height: 24px; color: #FFFFFF; filter: drop-shadow(0 1px 10px rgba(0, 0, 0, 0.35))">
<span class="service-ph" style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 24px; box-sizing: border-box; border-radius: 7px; background: rgba(255, 255, 255, 0.1); border: 1.5px dashed rgba(255, 255, 255, 0.45); color: #D5D7E0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></span>
<svg class="rl rl-netflix" id="uuid-58aafc6a-06eb-438d-85c1-ea2cd7179cc6" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 675.68">
  <defs>
    
  </defs>
  <path class="uuid-1a9b45d3-0187-451d-8583-a6eb59cee4af" d="M2366.26,321.62l133.74,354.05c-39.41-5.63-78.81-12.68-118.92-19.03l-75.34-195.63-77.41,179.48c-37.99-6.35-75.31-8.47-113.31-13.4l135.84-309.68L2127.66,0h114.03l68.96,177.34L2384.57,0h115.41l-133.72,321.62ZM2037.61,0h-103.47v613.74c33.79,2.12,68.96,3.51,103.47,7.73V0ZM1844.75,606.69c-94.3-6.33-188.63-11.94-285.05-14.08V0h105.57v492.68c60.54,1.4,121.06,6.31,179.48,9.12v104.89ZM1447.07,240.02v105.56h-144.28v240h-104.14V0h295.61v105.56h-191.44v134.46h144.28-.02ZM1021.26,105.56v485.65c-35.2,0-71.08,0-105.58,1.4V105.56h-109.1V0h324.45v105.56h-109.77ZM692.57,351.19c-46.44,0-101.35,0-140.77,2.14v156.94c61.94-4.23,123.87-9.14,186.51-11.26v101.35l-292.07,23.24V0h292.05v105.56h-186.49v142.18c40.83,0,103.47-2.12,140.76-2.12v105.58-.02ZM107.66,292.07v368.81c-37.97,4.23-71.78,9.17-107.66,14.8V0h100.65l137.23,383.61V0h105.58v632.03c-37.3,6.35-75.31,8.47-115.43,14.08l-120.38-354.03Z"></path>
</svg>
</span>
<span style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap">Netflix</span>
${(v?.hero?.hasReason) ? html`
<span style="display: inline-flex; align-items: center; height: 30px; margin-left: 12px; padding: 0 13px; box-sizing: border-box; border-radius: 15px; background: rgba(255, 255, 255, 0.14); border: 1px solid rgba(255, 255, 255, 0.24); backdrop-filter: blur(14px) saturate(140%); -webkit-backdrop-filter: blur(14px) saturate(140%); color: #F5F5F7; font-size: 16px; font-weight: 600; letter-spacing: 0.01em; white-space: nowrap; text-shadow: none">${v?.hero?.reason}</span>
<span style="margin-left: auto; font-size: 20px; font-weight: 500; color: #E2E4EC; white-space: nowrap">${v?.hero?.detail}</span>
` : null}
</p>
</div>
` : null}
${(v?.hero1) ? html`
<div style="animation: ${v?.heroAnim}; text-shadow: 0 2px 24px rgba(0, 0, 0, 0.4)">
<h1 style="margin: 0; font-size: 46px; font-weight: 700; letter-spacing: -0.025em; line-height: 56px; max-width: 960px; text-wrap: balance">
${(v?.hero?.hasLogo) ? html`<img src="${v?.hero?.logo}" alt="${v?.hero?.title}" style="display: block; max-width: 520px; max-height: 150px; width: auto; height: auto; margin-bottom: 10px; filter: drop-shadow(0 2px 18px rgba(0, 0, 0, 0.4))" />` : null}
${(v?.hero?.noLogo) ? html`${v?.hero?.title}` : null}
</h1>
<p style="position: absolute; left: 0; top: 675px; width: 1808px; margin: 0; display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: 500; color: #D5D7E0; white-space: nowrap">
<span aria-hidden="true" class="service-logo" style="display: inline-flex; align-items: center; height: 24px; color: #FFFFFF; filter: drop-shadow(0 1px 10px rgba(0, 0, 0, 0.35))">
<span class="service-ph" style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 24px; box-sizing: border-box; border-radius: 7px; background: rgba(255, 255, 255, 0.1); border: 1.5px dashed rgba(255, 255, 255, 0.45); color: #D5D7E0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></span>
<svg class="rl rl-ps5" id="uuid-266facb8-2576-4dbb-ad44-42beae600b32" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 890.96 132.25" style="fill: #ffffff">
  <defs>
    
  </defs>
  <g id="uuid-b1c0af39-f2c2-4eff-831f-a5ccc07009ab" data-name="PS5">
    <path id="uuid-dfc80cd6-1417-4ef7-a61b-c71e0a505de5" data-name="S" class="uuid-4cd12e92-abf3-407a-af14-4f4fc0606c47" d="M308.75,0c-19.77,0-35.79,16.02-35.79,35.79v61.07c0,11.17-9.06,20.23-20.23,20.23h-68.89v15.16h81.93c19.77,0,35.79-16.02,35.79-35.79v-61.07c0-11.17,9.06-20.23,20.23-20.23h70.17V0h-83.21Z"></path>
    <path id="uuid-46a7f757-b0f0-4ff9-a882-907fcbd61255" data-name="P" class="uuid-4cd12e92-abf3-407a-af14-4f4fc0606c47" d="M0,0v15.16h143.9c11.47,0,20.77,9.3,20.77,20.77,0,11.47-9.3,20.77-20.77,20.77H35.79C16.02,56.69,0,72.72,0,92.48v39.77h28.6v-40.16c0-11.17,9.06-20.23,20.23-20.23h108.51c19.84,0,35.93-16.09,35.93-35.93,0-19.84-16.09-35.93-35.93-35.93H0Z"></path>
    <path id="uuid-c03d01cf-12ba-4ba7-9719-14378b32f2a9" data-name="5" class="uuid-4cd12e92-abf3-407a-af14-4f4fc0606c47" d="M419.52,0v49.38c0,12.41,10.06,22.47,22.47,22.47h119.75c12.49,0,22.62,10.12,22.62,22.61,0,12.49-10.13,22.62-22.62,22.62h-142.22v15.16h155.66c20.86,0,37.78-16.91,37.78-37.78,0-20.86-16.91-37.78-37.78-37.78h-118.03c-4.99,0-9.03-4.04-9.03-9.03V15.16h159.65V0h-188.25Z"></path>
  </g>
  <g id="uuid-e8c2c2ae-c158-49d9-bb5d-8e47ca614353" data-name="Pro">
    <path id="uuid-7ae377cf-e7a2-401d-9911-03e457c199b3" data-name="1" class="uuid-e49ea97e-8a93-4865-826e-7a6075d9c30e" d="M833.12,59.13c-8.89,0-12.12,7.94-12.36,15.03-.14,4.37.69,9.52,3.85,12.77,1.68,1.74,4.77,3.39,8.51,3.4,1.49-.07,5.53-.32,8.51-3.4,3.15-3.25,3.99-8.4,3.85-12.77-.23-7.1-3.46-15.03-12.36-15.03Z"></path>
    <path id="uuid-b7d1c2c1-2829-422d-abbb-99c546926785" data-name="2" class="uuid-e49ea97e-8a93-4865-826e-7a6075d9c30e" d="M746.75,43.41c-4.32-.47-8.87-.05-13.97-.05v20.47c4.11,0,7.77,0,11.11-.04,1.05-.01,2.11-.09,3.13-.3,5.57-1.19,8.45-4.72,8.39-10.18-.06-5.4-3.13-9.29-8.65-9.89Z"></path>
    <path id="uuid-b44f3e8a-c428-400f-a1d4-69785c037153" data-name="3" class="uuid-e49ea97e-8a93-4865-826e-7a6075d9c30e" d="M874.49.94h-170.66c-9.1,0-16.47,7.37-16.47,16.47v98.22c0,9.1,7.37,16.47,16.47,16.47h170.66c9.1,0,16.47-7.37,16.47-16.47V17.4c0-9.1-7.37-16.47-16.47-16.47ZM765.47,66.27c-4.24,6.04-10.64,8.13-17.6,8.61-4.62.32-9.27.06-14.98.06v24.57h-12.69V31.91h12.58c1.26,0,2.51.02,3.77.03,2.68-.04,5.36-.04,8.04.05.03,0,.05,0,.08,0,0,0,0,0-.01,0,1.99.07,3.98.18,5.96.37,16.7,1.57,24.56,20.11,14.86,33.91ZM806.75,58.83c-.48-.11-1.16-.24-1.98-.31-3.84-.33-7.09.93-8.36,1.79-3.33,2.23-5.41,6.43-5.72,12.47-.16,2.99-.21,5.99-.22,8.99v4.36c0,2.32.02,4.64,0,6.96,0,.12,0,.24,0,.36v5.91h-12.55v-49.38h12.55v6.32c.97-1.5,3.76-5.27,8.92-6.96,3.42-1.12,6.4-.84,8-.57-.21,3.36-.43,6.72-.64,10.07ZM850.11,94.93c-4.53,4.67-10.98,5.9-16.99,5.91-6.01,0-12.46-1.24-16.99-5.91-5.29-5.46-8.29-13.7-8.05-21.14.41-12.55,7.33-25.03,25.04-25.03,2.23-.09,9.82-.16,16.37,5.22,5.84,4.8,8.42,12.3,8.67,19.82.24,7.44-2.76,15.68-8.05,21.14Z"></path>
  </g>
  <path id="uuid-0395740c-3c1c-46f6-b8ab-440b15d2321b" data-name="R" class="uuid-4cd12e92-abf3-407a-af14-4f4fc0606c47" d="M634.06,110.8c-1.82.98-3.24,2.38-4.26,4.21-1.02,1.83-1.53,3.73-1.53,5.71s.5,3.85,1.51,5.66c1.01,1.81,2.41,3.22,4.22,4.22,1.81,1,3.69,1.5,5.67,1.5s3.86-.5,5.67-1.5c1.81-1,3.21-2.41,4.21-4.22,1-1.81,1.5-3.7,1.5-5.66s-.51-3.88-1.52-5.71c-1.02-1.83-2.43-3.23-4.25-4.21-1.82-.98-3.69-1.47-5.6-1.47s-3.78.49-5.6,1.47ZM644.32,112.44c1.52.82,2.7,1.99,3.55,3.52.85,1.52,1.27,3.11,1.27,4.76s-.42,3.21-1.25,4.71c-.83,1.5-2.01,2.68-3.52,3.52-1.51.84-3.08,1.26-4.72,1.26s-3.21-.42-4.72-1.26c-1.51-.84-2.68-2.01-3.52-3.52-.84-1.5-1.26-3.08-1.26-4.71s.43-3.24,1.28-4.76c.85-1.52,2.04-2.7,3.55-3.52,1.51-.82,3.07-1.23,4.67-1.23s3.14.41,4.66,1.23ZM636.64,127.01v-5.21h1.16c.69,0,1.22.14,1.58.42.52.38,1.21,1.33,2.07,2.85l1.09,1.93h2.41l-1.49-2.4c-.71-1.14-1.32-1.95-1.81-2.43-.26-.25-.61-.47-1.04-.65,1.06-.08,1.9-.45,2.54-1.12.64-.66.96-1.44.96-2.34,0-.63-.19-1.23-.57-1.8-.38-.56-.9-.96-1.54-1.18-.64-.23-1.68-.34-3.12-.34h-4.21v12.25h1.98ZM636.64,116.42h2.25c.97,0,1.63.07,1.98.21.36.14.64.35.84.64.2.29.3.61.3.97,0,.56-.21,1.02-.63,1.36s-1.2.51-2.35.51h-2.4v-3.7Z"></path>
</svg>
</span>
<span style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap">PS5 Pro</span>
${(v?.hero?.hasReason) ? html`
<span style="display: inline-flex; align-items: center; height: 30px; margin-left: 12px; padding: 0 13px; box-sizing: border-box; border-radius: 15px; background: rgba(255, 255, 255, 0.14); border: 1px solid rgba(255, 255, 255, 0.24); backdrop-filter: blur(14px) saturate(140%); -webkit-backdrop-filter: blur(14px) saturate(140%); color: #F5F5F7; font-size: 16px; font-weight: 600; letter-spacing: 0.01em; white-space: nowrap; text-shadow: none">${v?.hero?.reason}</span>
<span style="margin-left: auto; font-size: 20px; font-weight: 500; color: #E2E4EC; white-space: nowrap">${v?.hero?.detail}</span>
` : null}
</p>
</div>
` : null}
${(v?.hero2) ? html`
<div style="animation: ${v?.heroAnim}; text-shadow: 0 2px 24px rgba(0, 0, 0, 0.4)">
<h1 style="margin: 0; font-size: 46px; font-weight: 700; letter-spacing: -0.025em; line-height: 56px; max-width: 960px; text-wrap: balance">
${(v?.hero?.hasLogo) ? html`<img src="${v?.hero?.logo}" alt="${v?.hero?.title}" style="display: block; max-width: 520px; max-height: 150px; width: auto; height: auto; margin-bottom: 10px; filter: drop-shadow(0 2px 18px rgba(0, 0, 0, 0.4))" />` : null}
${(v?.hero?.noLogo) ? html`${v?.hero?.title}` : null}
</h1>
<p style="position: absolute; left: 0; top: 675px; width: 1808px; margin: 0; display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: 500; color: #D5D7E0; white-space: nowrap">
<span aria-hidden="true" class="service-logo" style="display: inline-flex; align-items: center; height: 24px; color: #FFFFFF; filter: drop-shadow(0 1px 10px rgba(0, 0, 0, 0.35))">
<span class="service-ph" style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 24px; box-sizing: border-box; border-radius: 7px; background: rgba(255, 255, 255, 0.1); border: 1.5px dashed rgba(255, 255, 255, 0.45); color: #D5D7E0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></span>
<svg class="rl rl-appletv" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 53.231222 26.889077">
  <path d="M14.889225 4.3111C15.816331 3.14893 16.447942 1.59411 16.279104 0c-1.354598.0668-3.011479.89483-3.973421 2.05744-.860327.99388-1.621489 2.61882-1.425272 4.14226 1.527332.13356 3.046872-.76127 4.008814-1.8886"></path>
  <path d="M16.263078 6.49798c-2.214481-.13356-4.095181 1.25643-5.15128 1.25643-1.059549 0-2.6778106-1.18966-4.4289608-1.15827-2.277252.0334-4.3895615 1.32321-5.5478315 3.37275-2.3794228 4.09507-.62882908 10.17702 1.6843718 13.51437 1.1228775 1.65299 2.4774757 3.47081 4.2600117 3.40403 1.6843718-.0668 2.3479257-1.08737 4.3935678-1.08737 2.049538 0 2.642419 1.08737 4.424955 1.05621 1.853209-.0334 3.007584-1.65299 4.130461-3.30598 1.28782-1.8807 1.817929-3.69851 1.849314-3.80068-.03339-.0334-3.565071-1.38988-3.600464-5.45357-.03339-3.40413 2.775975-5.02184 2.90942-5.12-1.586208-2.34793-4.063683-2.61092-4.923565-2.6777"></path>
  <path d="M30.358089 3.36518v4.48773h3.608255v2.9644h-3.608255v10.55787c0 1.6334.71898 2.39111 2.29684 2.39111.396218 0 1.043968-.0556 1.295722-.089v2.9801c-.431833.089-1.295722.16138-2.1398.16138-3.73391 0-5.186672-1.43707-5.186672-5.06491V10.81902h-2.768073v-2.9644h2.768073V3.36689Z"></path>
  <path d="M46.600913 26.67059h-3.96563l-6.662918-18.8149H39.9144l4.676263 15.12028h.08904l4.676263-15.12028h3.875258z"></path>
</svg>
</span>
<span style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap">Apple TV</span>
${(v?.hero?.hasReason) ? html`
<span style="display: inline-flex; align-items: center; height: 30px; margin-left: 12px; padding: 0 13px; box-sizing: border-box; border-radius: 15px; background: rgba(255, 255, 255, 0.14); border: 1px solid rgba(255, 255, 255, 0.24); backdrop-filter: blur(14px) saturate(140%); -webkit-backdrop-filter: blur(14px) saturate(140%); color: #F5F5F7; font-size: 16px; font-weight: 600; letter-spacing: 0.01em; white-space: nowrap; text-shadow: none">${v?.hero?.reason}</span>
<span style="margin-left: auto; font-size: 20px; font-weight: 500; color: #E2E4EC; white-space: nowrap">${v?.hero?.detail}</span>
` : null}
</p>
</div>
` : null}
${(v?.hero3) ? html`
<div style="animation: ${v?.heroAnim}; text-shadow: 0 2px 24px rgba(0, 0, 0, 0.4)">
<h1 style="margin: 0; font-size: 46px; font-weight: 700; letter-spacing: -0.025em; line-height: 56px; max-width: 960px; text-wrap: balance">
${(v?.hero?.hasLogo) ? html`<img src="${v?.hero?.logo}" alt="${v?.hero?.title}" style="display: block; max-width: 520px; max-height: 150px; width: auto; height: auto; margin-bottom: 10px; filter: drop-shadow(0 2px 18px rgba(0, 0, 0, 0.4))" />` : null}
${(v?.hero?.noLogo) ? html`${v?.hero?.title}` : null}
</h1>
<p style="position: absolute; left: 0; top: 675px; width: 1808px; margin: 0; display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: 500; color: #D5D7E0; white-space: nowrap">
<span aria-hidden="true" class="service-logo" style="display: inline-flex; align-items: center; height: 24px; color: #FFFFFF; filter: drop-shadow(0 1px 10px rgba(0, 0, 0, 0.35))">
<span class="service-ph" style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 24px; box-sizing: border-box; border-radius: 7px; background: rgba(255, 255, 255, 0.1); border: 1.5px dashed rgba(255, 255, 255, 0.45); color: #D5D7E0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></span>
<svg class="rl rl-crunchyroll" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 303 52">
  <path d="M62.1772 26.0647C62.1772 17.3803 69.1876 10.3699 77.872 10.3699C84.2042 10.3699 89.2693 13.8967 91.8466 19.0081L85.425 22.1742C84.0686 19.2794 81.3094 17.1091 77.872 17.1091C73.1676 17.1091 69.3233 20.9996 69.3233 26.0647C69.3233 31.1299 73.1676 35.0667 77.872 35.0667C81.3094 35.0667 84.0686 32.8963 85.425 30.0015L91.8466 33.1676C89.2693 38.279 84.2042 41.8058 77.872 41.8058C69.1876 41.8058 62.1772 34.7954 62.1772 26.0647Z M94.3376 18.7368H101.077V22.3992C102.298 20.0933 104.197 18.7368 106.506 18.7368H108.405V25.3865H106.188C102.976 25.3865 101.484 27.1499 101.484 30.2728V41.3526H94.3376V18.7368Z M110.754 31.6724V18.7368H117.9V31.6724C117.9 34.1603 119.484 35.6986 121.88 35.6986C124.275 35.6986 125.86 34.1603 125.86 31.6724V18.7368H133.006V31.6724C133.006 37.6871 128.301 41.8027 121.88 41.8027C115.458 41.8027 110.754 37.6871 110.754 31.6724Z M136.4 18.7368H143.41V21.4959C144.995 19.6863 147.208 18.5117 149.789 18.5117C155.307 18.5117 158.926 22.538 158.926 28.3275V41.3526H151.78V28.3275C151.78 25.9291 150.017 24.1195 147.665 24.1195C145.312 24.1195 143.549 25.9291 143.549 28.3275V41.3526H136.403V18.7368H136.4Z M178.691 32.1256L184.526 34.8848C182.671 38.9541 178.647 41.8058 173.761 41.8058C167.158 41.8058 161.864 36.5588 161.864 30.0447C161.864 23.5306 167.158 18.2836 173.761 18.2836C178.691 18.2836 182.717 21.1784 184.573 25.2478L178.694 28.0532C177.926 25.9723 176.024 24.5264 173.764 24.5264C170.78 24.5264 168.517 26.968 168.517 30.0447C168.517 33.1214 170.78 35.563 173.764 35.563C175.981 35.563 177.88 34.1603 178.694 32.1256H178.691Z M186.832 10.8231H193.978V21.4528C195.563 19.6432 197.733 18.5117 200.221 18.5117C205.739 18.5117 209.359 22.538 209.359 28.3275V41.3526H202.213V28.3275C202.213 25.9291 200.449 24.1195 198.097 24.1195C195.745 24.1195 193.981 25.9291 193.981 28.3275V41.3526H186.835V10.8231H186.832Z M222.337 32.215L227.131 18.7368H234.277L225.14 42.7091C223.241 47.6848 220.254 49.8089 215.188 49.8089H211.933V43.5661H215.188C217.134 43.5661 218.129 42.7522 218.672 41.3958L209.67 18.7368H217.312L222.334 32.215H222.337Z M236.087 18.7368H242.826V22.3992C244.047 20.0933 245.946 18.7368 248.255 18.7368H250.154V25.3865H247.938C244.725 25.3865 243.233 27.1499 243.233 30.2728V41.3526H236.087V18.7368Z M251.15 30.0447C251.15 23.5769 256.443 18.2836 263.136 18.2836C269.829 18.2836 275.122 23.5769 275.122 30.0447C275.122 36.5125 269.829 41.8058 263.136 41.8058C256.443 41.8058 251.15 36.5588 251.15 30.0447ZM257.8 30.0447C257.8 33.2108 260.152 35.563 263.136 35.563C266.12 35.563 268.472 33.2108 268.472 30.0447C268.472 26.8786 266.12 24.5264 263.136 24.5264C260.152 24.5264 257.8 26.8786 257.8 30.0447Z M286.427 41.3526C280.502 41.3526 278.06 38.7291 278.06 33.1214V10.8231H285.206V33.1214C285.206 34.3884 285.749 35.1129 287.016 35.1129H288.19V41.3557H286.427V41.3526Z M298.367 41.3526C292.442 41.3526 290 38.7291 290 33.1214V10.8231H297.146V33.1214C297.146 34.3884 297.689 35.1129 298.956 35.1129H300.13V41.3557H298.367V41.3526Z M7.81735 28.8732C7.82968 17.2231 17.2848 7.78652 28.9349 7.79885C40.0886 7.81118 49.2108 16.4771 49.9568 27.4366C49.9846 26.968 50 26.4963 50 26.0247C50.0123 12.7684 39.2809 2.01234 26.0247 2.00001C12.7684 1.98768 2.01234 12.7222 2.00001 25.9753C1.98768 39.2316 12.7222 49.9877 25.9753 50C26.5241 50 27.0667 49.9815 27.6062 49.9476C16.5542 49.2724 7.80502 40.0917 7.81735 28.8732Z M40.3846 29.1846C35.8559 29.1815 32.1873 25.5037 32.1935 20.9749C32.1965 17.4235 34.4594 14.4023 37.6193 13.2647C35.1191 11.9453 32.2705 11.1961 29.2432 11.1931C19.2948 11.1838 11.2208 19.2393 11.2116 29.1877C11.2023 39.136 19.2578 47.21 29.2062 47.2193C39.1545 47.2285 47.2285 39.173 47.2378 29.2216C47.2378 28.0933 47.136 26.9927 46.9387 25.9198C45.4405 27.9021 43.0636 29.1846 40.3846 29.1815V29.1846Z"></path>
</svg>
</span>
<span style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap">Crunchyroll</span>
${(v?.hero?.hasReason) ? html`
<span style="display: inline-flex; align-items: center; height: 30px; margin-left: 12px; padding: 0 13px; box-sizing: border-box; border-radius: 15px; background: rgba(255, 255, 255, 0.14); border: 1px solid rgba(255, 255, 255, 0.24); backdrop-filter: blur(14px) saturate(140%); -webkit-backdrop-filter: blur(14px) saturate(140%); color: #F5F5F7; font-size: 16px; font-weight: 600; letter-spacing: 0.01em; white-space: nowrap; text-shadow: none">${v?.hero?.reason}</span>
<span style="margin-left: auto; font-size: 20px; font-weight: 500; color: #E2E4EC; white-space: nowrap">${v?.hero?.detail}</span>
` : null}
</p>
</div>
` : null}
${(v?.hero4) ? html`
<div style="animation: ${v?.heroAnim}; text-shadow: 0 2px 24px rgba(0, 0, 0, 0.4)">
<h1 style="margin: 0; font-size: 46px; font-weight: 700; letter-spacing: -0.025em; line-height: 56px; max-width: 960px; text-wrap: balance">
${(v?.hero?.hasLogo) ? html`<img src="${v?.hero?.logo}" alt="${v?.hero?.title}" style="display: block; max-width: 520px; max-height: 150px; width: auto; height: auto; margin-bottom: 10px; filter: drop-shadow(0 2px 18px rgba(0, 0, 0, 0.4))" />` : null}
${(v?.hero?.noLogo) ? html`${v?.hero?.title}` : null}
</h1>
<p style="position: absolute; left: 0; top: 675px; width: 1808px; margin: 0; display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: 500; color: #D5D7E0; white-space: nowrap">
<span aria-hidden="true" class="service-logo" style="display: inline-flex; align-items: center; height: 24px; color: #FFFFFF; filter: drop-shadow(0 1px 10px rgba(0, 0, 0, 0.35))">
<span class="service-ph" style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 24px; box-sizing: border-box; border-radius: 7px; background: rgba(255, 255, 255, 0.1); border: 1.5px dashed rgba(255, 255, 255, 0.45); color: #D5D7E0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></span>
<svg class="rl rl-youtube" id="uuid-868f0d4d-cba3-4fb1-baf2-e231ec2a0cbe" data-name="Mode Isolation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 923.08 205.94" style="fill: #ffffff">
  <defs>
    
  </defs>
  <g id="uuid-78af6ac4-ef69-4719-b7ac-cd3290b5a6c7" data-name="g7433">
    <path class="uuid-810f4b76-0a99-44c2-805e-8ada64a71328" d="M288.07,32.23c-3.39-12.6-13.33-22.54-25.92-25.93C239.13,0,147.06,0,147.06,0c0,0-92.06,0-115.08,6.06-12.35,3.39-22.53,13.57-25.92,26.17C0,55.24,0,102.97,0,102.97c0,0,0,47.97,6.06,70.74,3.39,12.6,13.32,22.54,25.92,25.93,23.26,6.3,115.08,6.3,115.08,6.3,0,0,92.07,0,115.09-6.06,12.59-3.39,22.53-13.32,25.92-25.92,6.06-23.02,6.06-70.75,6.06-70.75,0,0,.24-47.97-6.06-70.98ZM117.75,147.06V58.88l76.56,44.09-76.56,44.09Z"></path>
  </g>
  <g id="uuid-5fa4a20c-7410-4e01-a5ce-7bbc6382d6a7" data-name="g7451">
    <g id="uuid-9ddd18c7-fefd-4f15-9cd9-500e15564696" data-name="g7449">
      <path id="uuid-2ef4f604-b85e-4b4c-9e62-1b4d89a72768" data-name="path7435" class="uuid-810f4b76-0a99-44c2-805e-8ada64a71328" d="M427.14,187.52c-5.81-3.88-9.93-9.93-12.36-18.41-2.42-8.24-3.63-19.38-3.63-32.95v-18.66c0-13.81,1.45-24.95,4.12-33.43,2.91-8.48,7.27-14.54,13.08-18.41,6.06-3.88,13.81-5.81,23.5-5.81s17.2,1.94,23.02,5.81,9.93,10.18,12.6,18.41c2.67,8.24,4.12,19.38,4.12,33.43v18.66c0,13.81-1.21,24.71-3.88,33.19-2.67,8.24-6.78,14.54-12.6,18.41s-13.81,5.81-23.74,5.81c-10.18-.24-18.41-2.18-24.23-6.06h0ZM459.84,167.17c1.7-4.12,2.42-11.14,2.42-20.59v-40.22c0-9.21-.73-15.99-2.42-20.35-1.7-4.36-4.36-6.3-8.48-6.3-3.88,0-6.78,2.18-8.24,6.3-1.7,4.36-2.42,11.14-2.42,20.35v40.22c0,9.45.73,16.47,2.42,20.59,1.45,4.12,4.36,6.3,8.48,6.3,3.88,0,6.54-1.94,8.24-6.3Z"></path>
      <path id="uuid-5be10837-0a3c-4ba6-8ed9-ad0c2807e7e1" data-name="path7437" class="uuid-810f4b76-0a99-44c2-805e-8ada64a71328" d="M874.38,136.4v6.54c0,8.24.24,14.54.73,18.66.48,4.12,1.45,7.27,3.15,8.96,1.45,1.94,3.88,2.91,7.27,2.91,4.36,0,7.27-1.7,8.96-5.09s2.42-8.96,2.67-16.96l24.95,1.45c.24,1.21.24,2.67.24,4.6,0,11.87-3.15,20.84-9.69,26.65s-15.75,8.72-27.62,8.72c-14.29,0-24.23-4.6-30.04-13.57s-8.72-22.77-8.72-41.67v-22.53c0-19.38,2.91-33.43,8.96-42.4s16.23-13.33,30.53-13.33c9.93,0,17.69,1.94,23.02,5.57s8.96,9.45,11.14,16.96c2.18,7.75,3.15,18.41,3.15,31.98v22.05h-48.7v.48ZM878.01,82.13c-1.45,1.94-2.42,4.85-2.91,8.96s-.73,10.42-.73,18.9v9.21h21.32v-9.21c0-8.24-.24-14.54-.73-18.9-.48-4.36-1.7-7.27-3.15-8.96-1.45-1.7-3.88-2.67-6.78-2.67-3.39-.24-5.57.73-7.03,2.67h0Z"></path>
      <path id="uuid-72b5fcbd-ce69-454e-a44d-39188ffd4786" data-name="path7439" class="uuid-810f4b76-0a99-44c2-805e-8ada64a71328" d="M356.39,133.98l-32.95-119.44h28.83l11.63,54.03c2.91,13.33,5.09,24.71,6.54,34.16h.73c.97-6.78,3.15-17.93,6.54-33.92l12.11-54.27h28.83l-33.43,119.44v57.18h-28.59v-57.18h-.24Z"></path>
      <path id="uuid-837d1c92-f41f-48ca-823b-07b530cf1c8e" data-name="path7441" class="uuid-810f4b76-0a99-44c2-805e-8ada64a71328" d="M585.34,62.27v129.13h-22.77l-2.42-15.75h-.73c-6.06,11.87-15.51,17.93-27.86,17.93-8.48,0-14.78-2.91-18.9-8.48s-6.06-14.29-6.06-26.41V62.27h29.07v94.73c0,5.81.73,9.93,1.94,12.36s3.39,3.63,6.3,3.63c2.42,0,4.85-.73,7.27-2.42,2.42-1.45,4.12-3.39,5.09-5.81V62.27h29.07Z"></path>
      <path id="uuid-8e066830-a347-429d-b220-a7405790f743" data-name="path7443" class="uuid-810f4b76-0a99-44c2-805e-8ada64a71328" d="M734.34,62.27v129.13h-22.77l-2.42-15.75h-.73c-6.06,11.87-15.51,17.93-27.86,17.93-8.48,0-14.78-2.91-18.9-8.48-4.12-5.57-6.06-14.29-6.06-26.41V62.27h29.07v94.73c0,5.81.73,9.93,1.94,12.36s3.39,3.63,6.3,3.63c2.42,0,4.85-.73,7.27-2.42,2.42-1.45,4.12-3.39,5.09-5.81V62.27h29.07Z"></path>
      <path id="uuid-fb8b5d5a-6e2d-47eb-9e42-4827cd8f613c" data-name="path7445" class="uuid-810f4b76-0a99-44c2-805e-8ada64a71328" d="M664.33,38.04h-28.83v153.12h-28.35V38.04h-28.83V14.54h86.01v23.5Z"></path>
      <path id="uuid-0e810dd3-51c1-4a92-bfc3-44c773919dca" data-name="path7447" class="uuid-810f4b76-0a99-44c2-805e-8ada64a71328" d="M830.53,82.86c-1.7-8.24-4.6-14.05-8.48-17.69s-9.45-5.57-16.23-5.57c-5.33,0-10.42,1.45-15.02,4.6-4.6,2.91-8.24,7.03-10.66,11.87h-.24V8h-28.1v183.16h23.99l2.91-12.11h.73c2.18,4.36,5.57,7.75,10.18,10.42,4.6,2.42,9.45,3.88,15.02,3.88,9.93,0,16.96-4.6,21.56-13.57s7.03-23.26,7.03-42.4v-20.35c-.24-14.78-.97-26.17-2.67-34.16h0ZM803.88,135.44c0,9.45-.48,16.72-1.21,22.05s-2.18,9.21-3.88,11.39c-1.94,2.18-4.36,3.39-7.27,3.39-2.42,0-4.6-.48-6.54-1.7-1.94-1.21-3.63-2.91-4.85-5.09v-73.17c.97-3.39,2.67-6.3,5.09-8.72,2.42-2.18,5.09-3.39,7.75-3.39,2.91,0,5.33,1.21,6.78,3.39,1.7,2.42,2.67,6.3,3.39,11.63.73,5.57.97,13.33.97,23.26v16.96h-.24Z"></path>
    </g>
  </g>
</svg>
</span>
<span style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap">YouTube</span>
${(v?.hero?.hasReason) ? html`
<span style="display: inline-flex; align-items: center; height: 30px; margin-left: 12px; padding: 0 13px; box-sizing: border-box; border-radius: 15px; background: rgba(255, 255, 255, 0.14); border: 1px solid rgba(255, 255, 255, 0.24); backdrop-filter: blur(14px) saturate(140%); -webkit-backdrop-filter: blur(14px) saturate(140%); color: #F5F5F7; font-size: 16px; font-weight: 600; letter-spacing: 0.01em; white-space: nowrap; text-shadow: none">${v?.hero?.reason}</span>
<span style="margin-left: auto; font-size: 20px; font-weight: 500; color: #E2E4EC; white-space: nowrap">${v?.hero?.detail}</span>
` : null}
</p>
</div>
` : null}
${(v?.hero5) ? html`
<div style="animation: ${v?.heroAnim}; text-shadow: 0 2px 24px rgba(0, 0, 0, 0.4)">
<h1 style="margin: 0; font-size: 46px; font-weight: 700; letter-spacing: -0.025em; line-height: 56px; max-width: 960px; text-wrap: balance">
${(v?.hero?.hasLogo) ? html`<img src="${v?.hero?.logo}" alt="${v?.hero?.title}" style="display: block; max-width: 520px; max-height: 150px; width: auto; height: auto; margin-bottom: 10px; filter: drop-shadow(0 2px 18px rgba(0, 0, 0, 0.4))" />` : null}
${(v?.hero?.noLogo) ? html`${v?.hero?.title}` : null}
</h1>
<p style="position: absolute; left: 0; top: 675px; width: 1808px; margin: 0; display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: 500; color: #D5D7E0; white-space: nowrap">
<span aria-hidden="true" class="service-logo" style="display: inline-flex; align-items: center; height: 24px; color: #FFFFFF; filter: drop-shadow(0 1px 10px rgba(0, 0, 0, 0.35))">
<span class="service-ph" style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 24px; box-sizing: border-box; border-radius: 7px; background: rgba(255, 255, 255, 0.1); border: 1.5px dashed rgba(255, 255, 255, 0.45); color: #D5D7E0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></span>
<svg class="rl rl-switch" id="uuid-3c57e04f-79d8-4ded-9123-4f10bc054ff2" data-name="katman 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372.85 78.96" style="fill: #ffffff">
  <defs>
    
  </defs>
  <path class="uuid-e1e202fc-4740-44b3-972a-c9b4ff5e9c61" d="M11.79,23.59c0,3.93,3.28,7.54,7.54,7.54s7.54-3.28,7.54-7.54-3.28-7.54-7.54-7.54-7.54,3.6-7.54,7.54ZM57.99,0h-12.12c-.33,0-.66.33-.66.66v77.65c0,.33.33.66.66.66h12.12c11.14,0,20.31-9.17,20.31-19.99V20.31c0-11.14-9.17-20.31-20.31-20.31ZM60.94,51.11c-4.26,0-7.86-3.6-7.86-7.86s3.6-7.86,7.86-7.86,7.86,3.6,7.86,7.86-3.6,7.86-7.86,7.86ZM37.02,0h-17.04C8.85,0,0,9.17,0,20.31v38.33c0,11.14,9.17,19.99,19.99,19.99h17.04c.33,0,.66-.33.66-.66V.66c0-.33-.33-.66-.66-.66ZM31.13,72.41h-11.47c-3.6,0-7.21-1.31-9.83-3.93-2.62-2.62-3.93-6.23-3.93-9.83V20.31c0-3.6,1.31-7.21,3.93-9.83s6.23-3.93,9.83-3.93h11.47v65.85ZM160.54,9.17l10.81,14.74h4.26V1.64h-4.26v14.42l-10.81-14.42h-4.59v21.95h4.59v-14.42ZM115.66,51.44c-5.9-.98-9.83-1.97-9.83-4.91,0-3.28,4.26-4.59,10.16-4.59,5.24,0,10.81,1.97,12.78,2.95l2.95-7.21c-1.97-.98-8.85-3.28-16.05-3.28-8.85,0-18.68,4.26-18.68,12.45,0,6.55,4.59,9.83,16.71,12.12,8.52,1.31,13.11,2.29,12.78,5.9,0,1.97-1.64,5.24-11.14,5.24-7.54,0-13.11-2.62-14.74-3.93l-3.93,7.21c1.97.98,9.17,4.26,18.35,4.26,13.11,0,20.31-4.59,20.31-13.11-.66-4.91-2.29-10.16-19.66-13.11ZM102.88,9.17l10.81,14.74h4.26V1.64h-4.59v14.42l-10.81-14.42h-4.59v21.95h4.59l.33-14.42h0ZM181.51,65.2l-8.85-30.14h-7.54l-8.85,30.14-7.86-30.14h-9.17l11.79,41.61h10.16l7.86-27.52,7.86,27.52h10.16l11.79-41.61h-9.17l-8.19,30.14ZM139.57,1.64h-4.91v21.95h4.91V1.64ZM209.03,76.67h9.17v-41.61h-9.17v41.61ZM346.97.98c-6.55,0-11.79,5.24-11.79,11.79s5.24,11.79,11.79,11.79,11.79-5.24,11.79-11.79c-.33-6.55-5.57-11.79-11.79-11.79ZM346.97,19.66c-3.93,0-6.88-2.95-6.88-6.88s2.95-6.88,6.88-6.88,6.88,2.95,6.88,6.88c0,3.6-3.28,6.88-6.88,6.88ZM348.28,51.44h-19.33v-16.38h-8.52v41.61h8.52v-16.71h19.33v16.71h8.52v-41.61h-8.52v16.38ZM370.88,71.1l-1.31,4.26-1.31-4.26h-1.64v5.57h.98v-4.26l1.64,4.26h.98l1.64-4.26v4.26h.98v-5.57h-1.97ZM309.62,1.64h-9.17v21.95h9.17c6.23,0,11.47-4.91,11.47-11.14-.33-5.9-5.24-10.81-11.47-10.81ZM309.62,19h-4.91V6.23h4.91c3.6,0,6.55,2.95,6.55,6.55s-2.95,6.23-6.55,6.23ZM360.73,72.08h1.64v4.59h.98v-4.59h1.64v-.98h-4.59v.98h.33ZM292.58,42.92c4.59,0,9.17,2.62,11.47,6.55l6.88-5.9c-4.26-6.23-11.14-9.83-18.35-9.83-12.12,0-22.28,9.83-22.28,22.28s9.83,22.28,22.28,22.28c7.54,0,14.42-3.6,18.35-9.83l-6.88-5.9c-2.29,3.93-6.88,6.55-11.47,6.55-7.21,0-13.11-5.9-13.11-13.11s5.9-13.11,13.11-13.11ZM243.76,19.66h-12.78v-5.24h11.79v-3.93h-11.79v-4.59h12.78V1.64h-17.04v21.95h17.04v-3.93ZM228.36,43.9h13.43v32.76h8.85v-32.76h13.11v-8.85h-35.38v8.85ZM210.34,1.64h-18.68v4.59h7.21v17.36h4.59V6.23h6.88V1.64h0ZM281.77,23.92V1.64h-4.59v14.42l-10.81-14.42h-4.59v21.95h4.59v-14.74l10.81,14.74,4.59.33h0Z"></path>
</svg>
</span>
<span style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap">Nintendo Switch</span>
${(v?.hero?.hasReason) ? html`
<span style="display: inline-flex; align-items: center; height: 30px; margin-left: 12px; padding: 0 13px; box-sizing: border-box; border-radius: 15px; background: rgba(255, 255, 255, 0.14); border: 1px solid rgba(255, 255, 255, 0.24); backdrop-filter: blur(14px) saturate(140%); -webkit-backdrop-filter: blur(14px) saturate(140%); color: #F5F5F7; font-size: 16px; font-weight: 600; letter-spacing: 0.01em; white-space: nowrap; text-shadow: none">${v?.hero?.reason}</span>
<span style="margin-left: auto; font-size: 20px; font-weight: 500; color: #E2E4EC; white-space: nowrap">${v?.hero?.detail}</span>
` : null}
</p>
</div>
` : null}
${(v?.hero6) ? html`
<div style="animation: ${v?.heroAnim}; text-shadow: 0 2px 24px rgba(0, 0, 0, 0.4)">
<h1 style="margin: 0; font-size: 46px; font-weight: 700; letter-spacing: -0.025em; line-height: 56px; max-width: 960px; text-wrap: balance">
${(v?.hero?.hasLogo) ? html`<img src="${v?.hero?.logo}" alt="${v?.hero?.title}" style="display: block; max-width: 520px; max-height: 150px; width: auto; height: auto; margin-bottom: 10px; filter: drop-shadow(0 2px 18px rgba(0, 0, 0, 0.4))" />` : null}
${(v?.hero?.noLogo) ? html`${v?.hero?.title}` : null}
</h1>
<p style="position: absolute; left: 0; top: 675px; width: 1808px; margin: 0; display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: 500; color: #D5D7E0; white-space: nowrap">
<span aria-hidden="true" class="service-logo" style="display: inline-flex; align-items: center; height: 24px; color: #FFFFFF; filter: drop-shadow(0 1px 10px rgba(0, 0, 0, 0.35))">
<span class="service-ph" style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 24px; box-sizing: border-box; border-radius: 7px; background: rgba(255, 255, 255, 0.1); border: 1.5px dashed rgba(255, 255, 255, 0.45); color: #D5D7E0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></span>
<svg class="rl rl-disney" id="uuid-db936074-7144-49df-9273-9345b1d5aadf-reco" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1040.44 564.42">
  <g id="uuid-5a460b47-5a8a-4c23-ac3f-c53b3184bffe" data-name="Layer 1">
    <g id="uuid-98f4460c-f322-4729-8e3a-54da924acec0" data-name="group">
      <g id="uuid-cd0f4090-9d13-4c3d-903b-7c6c3944ce5f" data-name="group-1">
        <g id="uuid-45da7814-db6a-4bd4-9837-43ac88c99698" data-name="group-2">
          <path id="uuid-5f7e3624-9ef9-4986-8b10-d385865c439c" data-name="Path" class="uuid-6c88f9fb-2017-4f7d-a5ec-02d4d62f6454" d="M735.34,365.4c-14.4,3.3-52.3,5.2-52.3,5.2l-4.8,15s18.9-1.6,32.7-.2c0,0,4.5-.5,5,5.1.2,5.2-.4,10.8-.4,10.8,0,0-.3,3.4-5.1,4.2-5.2.9-40.8,2.2-40.8,2.2l-5.8,19.5s-2.1,4.5,2.7,3.2c4.5-1.2,41.8-8.2,46.7-7.2,5.2,1.3,11,8.2,9.3,14.6-2,7.8-39.2,31.6-61.9,29.9,0,0-11.9.8-22-15.3-9.4-15.3,3.6-44.4,3.6-44.4,0,0-5.9-13.6-1.6-18.1,0,0,2.6-2.3,10-2.9l9.1-18.9s-10.4.7-16.6-6.9c-5.8-7.3-6.2-10.6-1.8-12.6,4.7-2.3,48-10.2,77.8-9.2,0,0,10.4-1,19.3,17-.1,0,4.3,7.3-3.1,9ZM623.24,438c-3.8,9-13.9,18.6-26.4,12.6-12.4-6-32.1-46.3-32.1-46.3,0,0-7.5-15-8.9-14.7,0,0-1.6-2.9-2.6,13.5s.2,48.3-6.3,53.3c-6.2,5-13.7,3-17.6-2.9-3.5-5.8-5-19.6-3.1-43.8,2.3-24.2,7.9-50,15.1-58.1,7.2-8,13-2.2,15.2-.1,0,0,9.6,8.7,25.5,34.3l2.8,4.7s14.4,24.2,15.9,24.1c0,0,1.2,1.1,2.2.3,1.5-.4.9-8.2.9-8.2,0,0-3-26.3-16.1-70.9,0,0-2-5.6-.6-10.8,1.3-5.3,6.6-2.8,6.6-2.8,0,0,20.4,10.2,30.2,43.4,9.7,33.5,3.1,63.4-.7,72.4ZM523.04,352.7c-1.7,3.4-2.7,8.3-11.3,9.6,0,0-82.3,5.6-86.2,11.4,0,0-2.9,3.4,1.6,4.4,4.5.9,23.1,3.4,32.1,3.9,9.6.1,42,.4,53.6,14.9,0,0,6.9,6.9,6.6,22.5-.3,16-3.1,21.6-9.3,27.4-6.5,5.4-62.3,30.4-98.3-8,0,0-16.6-18.5,5.7-32.5,0,0,16.1-9.7,57,1.7,0,0,12.4,4.5,11.8,9-.7,4.8-10.2,9.9-24,9.6-13.4-.4-23.2-6.8-21.3-5.8,1.8.7-14.4-7.8-19.4-2-5,5.3-3.8,8.6,1.1,11.9,12.5,7.1,60.8,4.6,75.2-11.4,0,0,5.7-6.5-3-11.8-8.7-5-33.6-8-43.3-8.5-9.3-.5-43.9.1-48.9-9.1,0,0-5-6.2.5-23.8,5.8-18.4,46.1-25.5,63.5-27.1,0,0,47.9-1.7,56.7,8.1-.1,0,1.1,2.3-.4,5.6ZM387.04,460.6c-5.8,4.3-18.1,2.4-21.6-2.4-3.5-4.3-4.7-21.4-4-48.2.7-27.1,1.3-60.7,7.1-66,6.2-5.4,10-.7,12.4,3,2.6,3.6,5.7,7.6,6.4,16.1.6,8.5,2.6,53.1,2.6,53.1,0,0,2.6,40.2-2.9,44.4ZM399.54,316.8c-16.9,5.6-28.5,3.7-38.3-.5-4.3,7.5-6.8,9.8-10.1,10.3-4.8.5-9.1-7.2-9.9-9.7-.8-1.9-3.1-5.1-.3-12.7-9.6-8.6-10.3-20.2-8.7-28,2.4-9,18.6-43.2,67.9-47.2,0,0,24.1-1.8,28.2,11.1h.7s23.4.1,22.9,20.9c-.3,20.9-26,46.9-52.4,55.8ZM353.54,270.5c-5,8-5.2,12.8-2.9,16.1,5.7-8.7,16.1-22.4,31.4-32.8-11.8,1-21.7,6.1-28.5,16.7ZM421.64,257.1c-15.5,2.3-39.5,23.1-50.9,40.1,17.5,3.2,48.4,2,62.1-25.9-.1,0,6.5-17.3-11.2-14.2ZM842.44,418.2c-9.3,16.2-35.4,50-70.2,42.1-11.5,27.9-21.1,56-26.6,98.2,0,0-1.2,8.2-8,5.3-6.7-2.4-17.9-13.6-20.1-29.1-2.4-20.4,6.7-54.9,25.2-94.4-5.4-8.8-9.1-21.4-5.9-39.3,0,0,4.7-33.2,38-63.2,0,0,4-3.5,6.3-2.4,2.6,1.1,1.4,11.9-.7,17.1-2.1,5.2-17,31-17,31,0,0-9.3,17.4-6.7,31.1,17.5-26.9,57.3-81.2,82-64.1,8.3,5.9,12.1,18.8,12.1,32.7-.1,12.3-3,25.3-8.4,35ZM835.24,375.6s-1.4-10.7-11.8,1.1c-9,9.9-25.2,28.6-38.3,53.9,13.7-1.5,26.9-9,30.9-12.8,6.5-5.8,21.6-21.4,19.2-42.2ZM349.74,389.2c-1.9,24.2-11.2,64.9-77.1,85-43.5,13.1-84.6,6.8-107,1.1-.5,8.9-1.5,12.7-2.9,14.2-1.9,1.9-16.1,10.1-23.9-1.5-3.5-5.5-5.3-15.5-6.3-24.4-50.4-23.2-73.6-56.6-74.5-58.1-1.1-1.1-12.6-13.1-1.1-27.8,10.8-13.3,46.1-26.6,77.9-32,1.1-27.2,4.3-47.7,8.1-57.1,4.6-10.9,10.4-1.1,15.4,6.3,4.2,5.5,6.7,29.2,6.9,48.1,20.8-1,33.1.5,56.3,4.7,30.2,5.5,50.4,20.9,48.6,38.4-1.3,17.2-17.1,24.3-23.1,24.8-6.3.5-16.1-4-16.1-4-6.7-3.2-.5-6,7.6-9.5,8.8-4.3,6.8-8.7,6.8-8.7-3.3-9.6-42.5-16.3-81.5-16.3-.2,21.5.9,57.2,1.4,78,27.3,5.2,47.7,4.2,47.7,4.2,0,0,99.6-2.8,102.6-66.4,3.1-63.7-99.3-124.8-175-144.2-75.6-19.8-118.4-6-122.1-4.1-4,2-.3,2.6-.3,2.6,0,0,4.1.6,11.2,3,7.5,2.4,1.7,6.3,1.7,6.3-12.9,4.1-27.4,1.5-30.2-4.4-2.8-5.9,1.9-11.2,7.3-18.8,5.4-8,11.3-7.7,11.3-7.7,93.5-32.4,207.4,26.2,207.4,26.2,106.7,54.1,124.9,117.5,122.9,142.1ZM67.54,385.9c-10.6,5.2-3.3,12.7-3.3,12.7,19.9,21.4,44.4,34.8,67.7,43.1,2.7-36.9,2.3-49.9,2.6-68.5-36.4,2.5-57.4,8.3-67,12.7Z"></path>
        </g>
      </g>
      <g id="uuid-a83dae4c-fba2-4a44-826a-e1d0613a7952" data-name="group-3">
        <g id="uuid-77ac9e02-5740-46fb-89c0-3112db277b12" data-name="group-4">
          <g id="uuid-3f1056e5-b2d8-44cf-bfeb-75553c399257" data-name="group-5">
            <path id="uuid-ec3a24a3-8659-4291-a594-3f70983d63c3" data-name="Path-1" class="uuid-6c88f9fb-2017-4f7d-a5ec-02d4d62f6454" d="M1040.44,378.3v13.2c0,2.9-2.3,5.2-5.2,5.2h-62.9c0,3.3.1,6.2.1,8.9,0,19.5-.8,35.4-2.7,53.3-.3,2.7-2.5,4.7-5.1,4.7h-13.6c-1.4,0-2.7-.6-3.6-1.6-.9-1-1.4-2.4-1.2-3.8,1.9-17.8,2.8-33.5,2.8-52.6,0-2.8,0-5.7-.1-8.9h-62.2c-2.9,0-5.2-2.3-5.2-5.2v-13.2c0-2.9,2.3-5.2,5.2-5.2h61.3c-1.3-21.5-3.9-42.2-8.1-63.2-.2-1.3.1-2.6.9-3.6s2-1.6,3.3-1.6h14.7c2.3,0,4.2,1.6,4.7,3.9,4.1,21.7,6.7,42.8,8,64.5h63.7c2.8,0,5.2,2.4,5.2,5.2Z"></path>
          </g>
        </g>
      </g>
      <g id="uuid-0e3fc9fb-cc15-4955-b452-6cc8e9ff4990" data-name="group-6">
        <g id="uuid-18d1996b-5b3b-43e5-9f51-1165cbb48275" data-name="group-7">
          <path id="uuid-d92c36ba-649d-4b54-a0f3-f94225dd736a" data-name="Path-2" class="uuid-ee9a0946-cd15-4fe0-8bc8-850957ced6cd" d="M199.74,204h-.1M198.94,204.1c-.3,0-.6-.1-.9-.1.3.1.6.1.9.1h.3-.3ZM198.94,204.1c-.3,0-.6-.1-.9-.1.3.1.6.1.9.1h.3-.3Z"></path>
          <path id="uuid-7a0708b8-d091-4b77-99da-3cf8611dbd1f" data-name="Path-3" class="uuid-d5a4b3ef-2c31-4dfa-bfda-33792d0fda9a" d="M954.84,273.6c-32.5-79.9-87.4-148-158.8-197C722.94,26.5,637.24,0,548.24,0c-147.2,0-283.8,73.1-365.3,195.6-.9,1.3-1.1,3-.6,4.5.5,1.6,1.7,2.7,3.2,3.2l11.4,3.9c.7.2,1.4.3,2,.3,2.1,0,4.1-1.1,5.3-2.8,37.4-55,88-100.7,146.4-132.3,60.3-32.6,128.6-49.9,197.5-49.9,83.3,0,163.6,24.6,232.4,71,67.1,45.3,119.2,108.6,150.7,182.9.9,2.2,3.1,3.7,5.5,3.7h13.6c1.6,0,3.1-.8,3.9-2.1,1-1.3,1.2-2.9.6-4.4ZM198.94,204.1c-.3,0-.6-.1-.9-.2.3.1.6.2.9.2h.2-.2ZM933.94,278.3c.3.2.6.4.9.5-.3-.2-.6-.3-.9-.5Z"></path>
        </g>
      </g>
    </g>
  </g>
</svg>
</span>
<span style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap">Disney+</span>
${(v?.hero?.hasReason) ? html`
<span style="display: inline-flex; align-items: center; height: 30px; margin-left: 12px; padding: 0 13px; box-sizing: border-box; border-radius: 15px; background: rgba(255, 255, 255, 0.14); border: 1px solid rgba(255, 255, 255, 0.24); backdrop-filter: blur(14px) saturate(140%); -webkit-backdrop-filter: blur(14px) saturate(140%); color: #F5F5F7; font-size: 16px; font-weight: 600; letter-spacing: 0.01em; white-space: nowrap; text-shadow: none">${v?.hero?.reason}</span>
<span style="margin-left: auto; font-size: 20px; font-weight: 500; color: #E2E4EC; white-space: nowrap">${v?.hero?.detail}</span>
` : null}
</p>
</div>
` : null}
${(v?.hero7) ? html`
<div style="animation: ${v?.heroAnim}; text-shadow: 0 2px 24px rgba(0, 0, 0, 0.4)">
<h1 style="margin: 0; font-size: 46px; font-weight: 700; letter-spacing: -0.025em; line-height: 56px; max-width: 960px; text-wrap: balance">
${(v?.hero?.hasLogo) ? html`<img src="${v?.hero?.logo}" alt="${v?.hero?.title}" style="display: block; max-width: 520px; max-height: 150px; width: auto; height: auto; margin-bottom: 10px; filter: drop-shadow(0 2px 18px rgba(0, 0, 0, 0.4))" />` : null}
${(v?.hero?.noLogo) ? html`${v?.hero?.title}` : null}
</h1>
<p style="position: absolute; left: 0; top: 675px; width: 1808px; margin: 0; display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: 500; color: #D5D7E0; white-space: nowrap">
<span aria-hidden="true" class="service-logo" style="display: inline-flex; align-items: center; height: 24px; color: #FFFFFF; filter: drop-shadow(0 1px 10px rgba(0, 0, 0, 0.35))">
<span class="service-ph" style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 24px; box-sizing: border-box; border-radius: 7px; background: rgba(255, 255, 255, 0.1); border: 1.5px dashed rgba(255, 255, 255, 0.45); color: #D5D7E0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></span>
<svg class="rl rl-paramount" xmlns="http://www.w3.org/2000/svg" viewBox="-161.599 -100.544 1000 622.214">
  <path d="M283.887,219.392c-2.459-1.02-6.49-5.543,0.216-18.138l15.578-32.558c0.473-0.984-0.664-2.216-1.374-1.38 l-13.621,13.695c-6.445,6.727-17.378,25.635-19.495,29.134L248.643,237.5c1.229-0.039,2.258,0.927,2.297,2.156 c0.012,0.405-0.085,0.805-0.283,1.159l-15.125,25.404c-3.693,6.3,2.942,10.704,3.841,9.254c23.773-38.291,37.6-35.234,37.6-35.234 l7.936-18.377c0.418-0.921,0.01-2.006-0.911-2.424C283.964,219.421,283.926,219.407,283.887,219.392z M337.935-100.544 c-135.92,0-246.104,110.13-246.104,245.983c-0.072,52.591,16.8,103.807,48.115,146.058c10.324-4.456,16.061-11.117,20.159-16.218 l45.823-58.576c0.965-1.235,2.225-2.206,3.665-2.825l6.898-2.967l75.345-95.524l10.925-8.549l22.45-31.233 c0.58-0.808,1.287-1.519,2.094-2.104l9.795-7.117c2.42-1.758,5.688-1.786,8.136-0.068l11.886,8.339 c6.306,4.423,11.417,10.338,14.88,17.217l47.61,83.586c0.777,1.595,2.098,2.86,3.724,3.568c9.337,4.646,15.041,5.467,27.261,18.735 c5.702,6.186,30.688,34.117,65.705,77.526c5.089,6.964,11.902,12.484,19.769,16.02c31.22-42.219,48.034-93.359,47.96-145.868 C584.031,9.585,473.852-100.544,337.935-100.544z M158.201,158.997l-15.957-5.18l-9.857,13.56v-16.758l-15.958-5.181l15.958-5.181 v-16.763l9.857,13.563l15.957-5.18l-9.859,13.562L158.201,158.997z M154.418,213.846l-5.183,15.943l-5.183-15.943h-16.771 l13.567-9.854l-5.182-15.942l13.568,9.854l13.569-9.854l-5.183,15.942l13.569,9.854H154.418z M157.621,86.876l5.183,15.942 l-13.569-9.854l-13.568,9.854l5.182-15.942l-13.567-9.854h16.771l5.183-15.942l5.184,15.942h16.771L157.621,86.876z M184.552,50.813 l-9.852-13.563l-15.957,5.18l9.858-13.561l-9.858-13.562l15.957,5.18l9.858-13.562v16.764l15.957,5.171l-15.957,5.182v16.763 L184.552,50.813z M226.495-7.873L221.312,8.07l-5.183-15.942h-16.772l13.569-9.854l-5.182-15.943l13.568,9.852l13.567-9.854 l-5.182,15.956l13.569,9.854h-16.772V-7.873z M279.348-34.791l-9.858,13.563v-16.759l-15.958-5.18l15.958-5.182v-16.763 l9.858,13.563l15.95-5.18l-9.858,13.562l9.859,13.561L279.348-34.791z M346.321-50.157l5.183,15.942l-13.569-9.854l-13.569,9.854 l5.177-15.935l-13.567-9.854h16.771l5.185-15.942l5.183,15.942h16.771L346.321-50.157z M406.374-37.987v16.763l-9.854-13.563 l-15.956,5.181l9.858-13.561l-9.857-13.562l15.957,5.18l9.854-13.563v16.763l15.957,5.182L406.374-37.987z M517.662,131.877 l15.956,5.18l9.855-13.563v16.763l15.958,5.181l-15.958,5.181v16.762l-9.855-13.561l-15.956,5.18l9.869-13.562L517.662,131.877z M454.556,8.074l-5.186-15.943H432.6l13.564-9.854l-5.171-15.944l13.563,9.854l13.563-9.852l-5.172,15.942l13.565,9.854h-16.771 L454.556,8.074z M491.317,50.817V34.055l-15.957-5.182l15.957-5.171V6.931l9.854,13.562l15.957-5.18l-9.854,13.562l9.854,13.561 l-15.957-5.18L491.317,50.817z M521.443,77.027l5.188-15.942l5.186,15.942h16.77l-13.563,9.854l5.186,15.942l-13.577-9.854 l-13.564,9.854l5.186-15.942l-13.578-9.854H521.443z M531.816,213.846l-5.186,15.943l-5.188-15.943h-16.77l13.578-9.854 l-5.186-15.942l13.564,9.854l13.577-9.854l-5.186,15.942l13.563,9.854H531.816z M427.075,287.598 c1.182-1.718,3.103-6.43-0.503-15.162l-10.89-29.273c-1.478-3.737,1.759-6.004,3.931-3.547c0,0,20.582,23.722,25.901,33.627 l10.15,16.843c8.732,0.564,32.83,1.221,56.027,1.221c-2.336-2.319-4.493-4.811-6.457-7.454 c-39.583-49.053-64.687-76.34-64.938-76.61c-8.022-8.717-11.73-10.392-17.849-13.178c-0.886-0.402-1.847-0.836-2.836-1.307v7.447 c0.061,0.503-0.299,0.96-0.803,1.02c-0.407,0.048-0.798-0.18-0.955-0.559L359.658,98.482l-0.162-0.323 c-2.427-4.813-6.004-8.953-10.414-12.052l-5.677-3.989l-27.763,64.021c3.317-0.001,6.008,2.687,6.01,6.004 c0.001,0.821-0.167,1.634-0.494,2.388l-25.651,59.312h23.546c9.1,0,18.114,1.771,26.536,5.22l6.206,2.543 c0,0-18.725,38.509-18.725,58.786c0.027,3.688,0.542,7.355,1.529,10.908h43.163l-1.999-12.155 c16.932,3.78,34.062,6.604,51.311,8.459V287.598z M94.026,349.996c0-39.614-42.017-58.689-91.935-58.689 c-53.398,0-102.392,23.657-120.375,60.339c-4.963,9.773-7.542,20.584-7.528,31.546c-0.227,9.479,2.396,18.807,7.528,26.778 c7.705,11.377,21.466,18.528,41.652,18.528c24.776,0,44.411-13.576,44.411-37.234c0,0,0.364-6.598-7.341-6.598 c-6.239,0-7.893,4.399-7.708,6.598c0.922,18.525-10.092,33.383-29.728,33.383c-22.014,0-31.197-18.708-31.197-38.698 c0-40.902,30.829-68.05,62.942-79.786c15.007-5.667,30.944-8.47,46.985-8.259c36.333,0,66.061,13.942,66.061,51.361 c0,31.175-26.24,57.771-57.623,60.157l1.284-4.217c6.425-22.929,14.315-48.054,27.157-66.58c0.739-1.107,2.02-2.936,3.489-4.768 l-1.833-2.203c-2.746,1.666-5.383,3.503-7.897,5.501c-60.183,46.956-62.011,179.011-142.209,179.011 c-2.762,0-5.519-0.185-8.256-0.551c-16.696-2.75-25.51-13.941-25.51-29.524c0-3.118,1.103-7.339,1.103-9.72 c0.127-4.43-3.361-8.123-7.791-8.252c-0.035-0.001-0.068-0.001-0.101-0.001h-0.915c-7.155,0-10.092,5.678-10.276,13.754 c-0.548,23.294,16.696,36.862,43.309,39.434c2.933,0.182,5.87,0.364,8.99,0.364c62.571,0,100.923-47.32,117.257-104.729 c8.273-0.97,16.441-2.687,24.403-5.131C61.374,403.73,94.026,384.298,94.026,349.996z M690.057,363.75h-22.029l-4.949,11.557 l-8.629,19.441h-10.269l-3.133,6.604h10.652l-12.853,28.43c-9.161,19.991-23.479,39.617-31.738,39.617 c-1.832,0-2.94-0.738-2.94-2.565s0.547-3.49,2.571-8.623c2.571-6.057,6.796-14.858,9.914-21.276 c4.58-9.353,11.924-23.843,11.924-30.996c0-7.154-4.581-12.841-13.579-12.841c-10.091,0-19.267,6.059-27.718,14.854l5.511-13.204 h-20.729l-16.889,38.517c-6.782,13.573-20.553,36.133-29.182,36.133c-1.832,0-2.571-1.103-2.571-2.935 c0.179-1.647,0.612-3.257,1.286-4.771c0.738-1.65,10.83-25.309,10.83-25.309l18.351-42.002h-22.384l-17.805,40.898 c-5.496,12.658-19.443,34.117-28.442,34.117c-1.567,0.153-2.964-0.992-3.117-2.563c0,0,0,0,0-0.003v-0.738 c0-2.198,1.655-6.236,2.941-9.172l9.353-20.538l19.266-42.002h-22.192l-4.418,9.537c-3.294,6.418-8.806,13.938-17.611,13.938 c-4.225,0-6.235-1.646-7.151-3.3c-1.285-14.123-10.283-21.644-23.493-21.644c-18.351,0-31.381,10.821-40.011,24.029 c-5.653,9.103-10.094,18.905-13.206,29.158c-7.893,13.026-16.146,23.116-22.754,23.116c-1.653,0-2.756-0.922-2.756-3.12 c0-2.201,2.204-7.151,2.938-8.992l14.497-30.811c4.037-9.533,6.796-15.77,6.796-22.008c0-6.604-4.58-11.376-12.116-11.376 c-10.46,0-21.84,6.057-30.83,15.957c0.305-1.571,0.427-3.173,0.366-4.771c0-7.338-3.667-11.191-11.195-11.191 c-9.539,0-19.447,5.692-28.438,15.958l5.873-14.313h-20.189l-17.062,38.528c-8.073,18.16-21.102,36.139-28.445,36.139 c-1.649,0-2.751-0.924-2.751-3.122c0-3.483,3.854-12.104,5.32-15.59l22.573-51.17c1.651-3.85-9.178-6.238-22.94-6.238 c-14.129,0-28.627,6.973-39.267,15.957c-7.523,6.233-13.029,9.354-15.787,9.354c-0.899,0.192-1.785-0.381-1.979-1.279 c-0.026-0.122-0.038-0.246-0.036-0.37c0-3.119,7.523-11.927,7.523-18.711c0-3.117-1.649-5.137-5.875-5.137 c-8.069,0-17.616,7.705-24.588,15.772l5.873-14.125h-19.815l-17.063,38.52c-8.076,18.16-21.472,37.054-28.812,37.054 c-1.653,0-2.749-0.915-2.749-3.12c0-3.484,3.67-11.917,5.687-16.324l22.572-51.353c1.651-3.85-9.177-6.238-22.942-6.238 c-20.369,0-40.189,13.756-50.647,27.88c-11.559,15.218-19.447,31.361-19.633,44.569c-0.18,10.637,5.318,17.239,16.331,17.239 c12.296,0,22.208-9.719,27.893-17.058c-0.337,1.452-0.584,2.922-0.739,4.404c0,7.332,2.937,12.653,11.927,12.653 c7.889,0,18.35-6.603,26.792-17.058l-6.798,15.592h21.467l21.105-47.872c6.989-15.587,14.88-23.654,17.074-23.654 c0.505-0.097,0.993,0.233,1.091,0.738c0.01,0.058,0.016,0.118,0.016,0.178c0,1.652-3.301,6.059-3.301,10.087 c0,4.029,2.195,7.151,8.076,7.151c4.58,0,9.721-2.202,14.31-5.14c-10.826,14.679-18.173,30.084-18.173,42.743 c-0.181,10.638,5.318,17.239,16.333,17.239c11.558,0,22.385-11.005,28.257-18.342c-0.221,1.704-0.343,3.418-0.366,5.135 c0,7.157,4.039,13.207,12.295,13.207c9.172,0,16.515-5.689,25.69-16.872l-6.796,15.406h22.016l20.183-45.672 c8.809-19.809,20.734-30.451,26.607-30.451c1.467-0.151,2.782,0.915,2.935,2.384c0,0.003,0,0.006,0.001,0.009v0.546 c-0.242,2.228-0.863,4.399-1.834,6.418l-28.967,66.948h22.571l20.554-46.59c8.803-19.989,18.533-29.715,25.872-29.715 c2.201,0,3.122,1.108,3.122,3.486c-0.196,2.554-0.882,5.047-2.019,7.345l-19.821,42.181c-1.825,4.06-2.942,8.4-3.304,12.836 c0,6.421,3.485,12.116,13.399,12.116c12.854,0,22.571-9.721,33.577-24.21v3.116c0.921,11.555,7.342,21.643,24.406,21.643 c20.184,0,36.524-13.94,46.424-36.128c3.744-7.801,6.167-16.173,7.165-24.77c2.21,1.121,4.68,1.63,7.151,1.478 c3.335,0.037,6.621-0.785,9.545-2.388l-3.486,7.517c-4.049,8.439-8.452,17.794-11.924,25.686c-2.199,4.666-3.508,9.702-3.855,14.85 c0,7.884,4.402,13.575,13.386,13.575s21.291-8.438,30.098-20.359h0.191c-0.59,2.465-0.901,4.985-0.931,7.518 c0,6.605,2.024,12.842,11.199,12.842c10.653,0,18.898-7.705,26.979-17.428l-6.796,15.409h22.206l17.806-40.351 c10.092-22.743,20.183-36.496,29.534-36.496c1.607-0.057,2.981,1.148,3.133,2.75v0.542c0,3.855-5.511,14.31-10.461,24.763 c-4.595,9.538-8.082,16.871-10.461,22.563c-2.208,4.794-3.514,9.952-3.855,15.219c0,6.966,3.855,12.287,12.485,12.287 c12.839,0,25.871-12.472,32.83-21.828c-1.57,4.485-2.433,9.186-2.557,13.936c0,12.845,7.697,19.263,18.527,19.263 c7.196-0.055,14.191-2.363,20.006-6.6c8.437-5.872,15.234-14.674,20.922-22.744l-3.855-3.672 c-5.319,7.522-11.199,14.677-17.258,19.079c-3.193,2.699-7.199,4.249-11.378,4.402c-4.579,0-7.52-2.387-7.52-8.251 c0-5.863,2.748-13.759,6.975-24.399c0.176-0.179,6.234-13.755,11.923-26.773c4.772-11.013,9.544-21.646,10.461-23.847h14.495 l2.938-6.604h-14.315L690.057,363.75z M64.122,469.581c-3.118,0-5.32-1.1-5.32-5.135c0.182-10.823,9.171-30.08,20.372-45.489 c7.888-10.638,18.163-18.521,29.174-18.521L94.4,431.61C83.94,455.091,72.563,469.581,64.122,469.581z M201.383,469.581 c-3.117,0-5.319-1.1-5.5-5.135c0.182-10.823,9.172-30.08,20.369-45.489c7.886-10.638,18.165-18.521,29.175-18.521l-13.95,31.175 c-10.64,24.034-21.466,37.971-30.097,37.971H201.383z M445.071,408.875c-0.547,11.918-11.008,40.71-23.301,57.958 c-4.949,6.968-9.176,8.983-12.839,8.983c-5.143,0-6.62-4.221-5.882-10.454c1.094-10.82,10.092-36.131,22.577-53.556 c5.688-7.887,9.545-11.189,13.947-11.189C443.977,400.618,445.262,404.288,445.071,408.875z M787.559,394.747l20.212-46.649h-23.92 l-20.213,46.649h-50.841l-8.481,19.563h50.856l-20.212,46.649h23.92l20.214-46.649h50.84l8.467-19.563H787.559z"></path>
</svg>
</span>
<span style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap">Paramount+</span>
${(v?.hero?.hasReason) ? html`
<span style="display: inline-flex; align-items: center; height: 30px; margin-left: 12px; padding: 0 13px; box-sizing: border-box; border-radius: 15px; background: rgba(255, 255, 255, 0.14); border: 1px solid rgba(255, 255, 255, 0.24); backdrop-filter: blur(14px) saturate(140%); -webkit-backdrop-filter: blur(14px) saturate(140%); color: #F5F5F7; font-size: 16px; font-weight: 600; letter-spacing: 0.01em; white-space: nowrap; text-shadow: none">${v?.hero?.reason}</span>
<span style="margin-left: auto; font-size: 20px; font-weight: 500; color: #E2E4EC; white-space: nowrap">${v?.hero?.detail}</span>
` : null}
</p>
</div>
` : null}
${(v?.hero8) ? html`
<div style="animation: ${v?.heroAnim}; text-shadow: 0 2px 24px rgba(0, 0, 0, 0.4)">
<h1 style="margin: 0; font-size: 46px; font-weight: 700; letter-spacing: -0.025em; line-height: 56px; max-width: 960px; text-wrap: balance">
${(v?.hero?.hasLogo) ? html`<img src="${v?.hero?.logo}" alt="${v?.hero?.title}" style="display: block; max-width: 520px; max-height: 150px; width: auto; height: auto; margin-bottom: 10px; filter: drop-shadow(0 2px 18px rgba(0, 0, 0, 0.4))" />` : null}
${(v?.hero?.noLogo) ? html`${v?.hero?.title}` : null}
</h1>
<p style="position: absolute; left: 0; top: 675px; width: 1808px; margin: 0; display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: 500; color: #D5D7E0; white-space: nowrap">
<span aria-hidden="true" class="service-logo" style="display: inline-flex; align-items: center; height: 24px; color: #FFFFFF; filter: drop-shadow(0 1px 10px rgba(0, 0, 0, 0.35))">
<span class="service-ph" style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 24px; box-sizing: border-box; border-radius: 7px; background: rgba(255, 255, 255, 0.1); border: 1.5px dashed rgba(255, 255, 255, 0.45); color: #D5D7E0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></span>
<svg class="rl rl-hbo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 894.5">
  <g>
    <g>
      <g>
        <path d="M985.6482.0953c-100.4861,0-187.3514,58.5811-228.67,143.6164-.1018-1.1192-.2146-2.2465-.345-3.3865C749.9079,81.5007,701.6393,8.3742,616.1691,8.3742h-224.7v500.52H611.2316c79.341,0,140.7414-70.3358,145.2314-130.5054q.41-5.5.4337-10.7219c41.2863,85.1247,128.2,143.7813,228.7515,143.7813,140.4746,0,254.3518-114.47,254.3518-255.6765S1126.1228.0953,985.6482.0953ZM583.8624,393.714H519.7767V307.8607h64.0857c29.1569,0,41.8413,24.0916,41.8413,42.9266C625.7037,373.4106,608.8692,393.714,583.8624,393.714Zm0-188.5518H519.7767V119.309h64.0857c25.0068,0,41.8413,20.3034,41.8413,42.9265C625.7037,181.0705,613.0193,205.1622,583.8624,205.1622Zm98.8226,50.2735c12.3981-3.8318,33.9048-13.4754,50.6956-32.52a259.8885,259.8885,0,0,0,.8,71.4576C717.5083,271.7588,695.6065,259.5328,682.685,255.4357ZM985.9132,382.4119A127.253,127.253,0,1,1,1113.1661,255.159,127.2529,127.2529,0,0,1,985.9132,382.4119Z"></path>
        <circle cx="985.9131" cy="255.159" r="100.0913" transform="translate(108.3426 771.8802) rotate(-45)"></circle>
      </g>
      <polygon points="225.562 8.374 225.562 195.489 139.102 195.489 139.102 8.374 0 8.374 0 508.895 139.102 508.895 139.102 315.288 225.562 315.288 225.562 508.895 364.664 508.895 364.664 8.374 225.562 8.374"></polygon>
    </g>
    <g>
      <path d="M843.4549,576.9984s49.0535,77.73,127.8337,152.3122c-25.7061,24.5422-85.2422,84.7844-134.8356,160.497h90.5248c35.92-56.0952,70.47-93.1441,90.2269-112.1843,19.7569,19.04,54.3072,56.0891,90.2269,112.1843h90.5249c-49.5934-75.7126-109.1295-135.9547-134.8357-160.497,78.78-74.5819,127.8338-152.3122,127.8338-152.3122H1100.43s-21.6688,39.9-83.225,106.2046C955.6486,616.898,933.98,576.9984,933.98,576.9984Z"></path>
      <path d="M266.786,889.8076V680.5512c122.5577-106.3484,118.5219,4.562,118.5219,4.562V889.8076h72.53V671.8755s0-102.8368-84.0544-102.8368c-28.54,0-45.4135,6.4759-67.1467,18.2178,0,0-24.3683,13.11-50.0206,37.9793-4.6973-20.1625-21.6863-56.1971-83.1223-56.1971-39.8132,0-79.07,29.8727-99.2613,48.0384V576.9984H1.7026V889.8076h72.53V681.8585c124.091-108.559,120.0223,3.2547,120.0223,3.2547V889.8076Z"></path>
      <path d="M743.3317,576.9984V614.866c-23.435-28.9267-58.2409-46.8488-104.5181-46.8488-85.4748,0-154.7659,73.0643-154.7659,163.1937s69.2911,163.1938,154.7659,163.1938c46.2772,0,81.0831-18.39,104.5181-47.319v42.7219h72.5944V576.9984ZM648.5184,824.71a94.776,94.776,0,1,1,94.776-94.776A94.7761,94.7761,0,0,1,648.5184,824.71Z"></path>
    </g>
  </g>
</svg>
</span>
<span style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap">HBO Max</span>
${(v?.hero?.hasReason) ? html`
<span style="display: inline-flex; align-items: center; height: 30px; margin-left: 12px; padding: 0 13px; box-sizing: border-box; border-radius: 15px; background: rgba(255, 255, 255, 0.14); border: 1px solid rgba(255, 255, 255, 0.24); backdrop-filter: blur(14px) saturate(140%); -webkit-backdrop-filter: blur(14px) saturate(140%); color: #F5F5F7; font-size: 16px; font-weight: 600; letter-spacing: 0.01em; white-space: nowrap; text-shadow: none">${v?.hero?.reason}</span>
<span style="margin-left: auto; font-size: 20px; font-weight: 500; color: #E2E4EC; white-space: nowrap">${v?.hero?.detail}</span>
` : null}
</p>
</div>
` : null}
${(v?.hero9) ? html`
<div style="animation: ${v?.heroAnim}; text-shadow: 0 2px 24px rgba(0, 0, 0, 0.4)">
<h1 style="margin: 0; font-size: 46px; font-weight: 700; letter-spacing: -0.025em; line-height: 56px; max-width: 960px; text-wrap: balance">
${(v?.hero?.hasLogo) ? html`<img src="${v?.hero?.logo}" alt="${v?.hero?.title}" style="display: block; max-width: 520px; max-height: 150px; width: auto; height: auto; margin-bottom: 10px; filter: drop-shadow(0 2px 18px rgba(0, 0, 0, 0.4))" />` : null}
${(v?.hero?.noLogo) ? html`${v?.hero?.title}` : null}
</h1>
<p style="position: absolute; left: 0; top: 675px; width: 1808px; margin: 0; display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: 500; color: #D5D7E0; white-space: nowrap">
<span aria-hidden="true" class="service-logo" style="display: inline-flex; align-items: center; height: 24px; color: #FFFFFF; filter: drop-shadow(0 1px 10px rgba(0, 0, 0, 0.35))">
<span class="service-ph" style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 24px; box-sizing: border-box; border-radius: 7px; background: rgba(255, 255, 255, 0.1); border: 1.5px dashed rgba(255, 255, 255, 0.45); color: #D5D7E0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></span>
<svg class="rl rl-canal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285.03 52.14">
  <path class="uuid-910f435c-737e-49c6-88cb-b839efcedb34" d="M44.64,5.58c0-.51-.12-.64-.58-.96C39.9,1.93,33.67.26,27.78.26,11.67.26,0,11.48,0,27s10.58,25.14,26.1,25.14c4.3,0,7.76-.77,10.2-2.25.64-.38.71-.51.9-1.86l1.28-8.85c.07-.58.07-.83.07-.96,0-.39-.07-.57-.19-.57s-.32.06-.58.19c-.39.2-.84.32-1.41.52-3.4.96-6.54,1.6-9.04,1.6-7.51,0-12.95-5.64-12.95-13.4,0-8.41,6.15-14.24,15-14.24,3.72,0,8.15,1.15,11.04,2.95,1.16.77,1.47.9,1.73.9.38,0,.45-.06.7-1.41l1.6-8.02c.13-.64.19-.9.19-1.16M80.37,1.93h-14.82c-.9,0-1.09.13-1.48.9l-22.83,46.17c-.06.2-.13.39-.13.58,0,.26.19.45.51.45h12.44c.83,0,1.28-.26,1.54-.77l3.21-6.6c.32-.64.58-.77,1.28-.77h15.65c.51,0,.96.32,1.03.83l1.67,6.67c.13.39.45.65.9.65h11.1c.38,0,.58-.19.58-.58v-.25L81.45,2.95c-.19-.77-.44-1.03-1.09-1.03M70.55,15.97c.07,0,.26.26.32.64l3.27,13.65c.06.26.13.45.13.58s-.19.26-.64.26h-9.3c-.26,0-.45-.06-.45-.19q.07-.19.13-.38l6.22-14.11c.13-.26.26-.45.32-.45M97.11,49.38c0,.58.12.65,1.09.65h10.71c.64,0,.96-.26,1.03-.9l3.85-27.45c.07-.45.13-.83.2-.83.06,0,.25.25.51.64l15.71,27.64c.38.71.77.9,1.54.9h10.97c.83,0,1.15-.19,1.21-.77l6.42-46.43v-.19c0-.58-.19-.7-.83-.7h-11.35c-.96,0-1.15.19-1.28.96l-3.46,24.88c-.07.58-.2.97-.32.97-.13,0-.32-.26-.58-.7l-14.36-25.2c-.45-.83-.58-.9-1.54-.9h-12.18c-.58,0-.96.26-1.03.83l-6.28,46.37v.25ZM149.51,49.7c0,.19.19.32.51.32h12.32c.71,0,1.1-.19,1.35-.71l3.46-6.73c.32-.64.51-.7,1.35-.7h14.81c1.03,0,1.15.13,1.34,1.02l1.22,6.22c.13.71.45.9,1.22.9h10.97c.58,0,.77-.07.77-.39,0-.2,0-.45-.07-.64l-9.69-46.1c-.19-.83-.32-.96-1.15-.96h-14.11c-.83,0-1.09.13-1.41.83l-22.71,46.37c-.13.25-.19.45-.19.58M178.75,15.39c.07,0,.19.26.25.58l3.08,14.04c0,.19.06.45.06.64,0,.25-.26.45-.71.45h-8.66c-.64,0-.83-.12-.83-.39,0-.19.06-.38.12-.58l6.28-14.17c.2-.38.32-.58.39-.58M210.82,2.95l-6.67,46.23v.32c0,.38.13.51.58.51h26.94c.64,0,.9-.19.96-.77l1.28-9.17v-.26c0-.51-.12-.64-.64-.64h-12.89c-.58,0-.78-.19-.78-.71v-.12l4.81-35.6v-.25c0-.45-.13-.57-.64-.57h-12.12c-.51,0-.71.26-.83,1.03M268.43,31.04h15.9c.45,0,.7-.26.7-.77v-13.08c0-.64-.19-.83-.7-.83h-16.1c-.51,0-.64-.19-.64-.9V.64c0-.45-.26-.64-.84-.64h-13.08c-.38,0-.65.26-.65.64v14.81c0,.64-.19.9-.77.9h-17.19c-.45,0-.71.19-.71.7v13.15c0,.58.26.83.77.83h17.06c.58,0,.83.26.83.96v17.25c0,.51.26.77.71.77h13.15c.52,0,.71-.26.71-.9v-17.25c0-.71.13-.84.84-.84"></path>
</svg>
</span>
<span style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap">Canal+</span>
${(v?.hero?.hasReason) ? html`
<span style="display: inline-flex; align-items: center; height: 30px; margin-left: 12px; padding: 0 13px; box-sizing: border-box; border-radius: 15px; background: rgba(255, 255, 255, 0.14); border: 1px solid rgba(255, 255, 255, 0.24); backdrop-filter: blur(14px) saturate(140%); -webkit-backdrop-filter: blur(14px) saturate(140%); color: #F5F5F7; font-size: 16px; font-weight: 600; letter-spacing: 0.01em; white-space: nowrap; text-shadow: none">${v?.hero?.reason}</span>
<span style="margin-left: auto; font-size: 20px; font-weight: 500; color: #E2E4EC; white-space: nowrap">${v?.hero?.detail}</span>
` : null}
</p>
</div>
` : null}
${(v?.hero10) ? html`
<div style="animation: ${v?.heroAnim}; text-shadow: 0 2px 24px rgba(0, 0, 0, 0.4)">
<h1 style="margin: 0; font-size: 46px; font-weight: 700; letter-spacing: -0.025em; line-height: 56px; max-width: 960px; text-wrap: balance">
${(v?.hero?.hasLogo) ? html`<img src="${v?.hero?.logo}" alt="${v?.hero?.title}" style="display: block; max-width: 520px; max-height: 150px; width: auto; height: auto; margin-bottom: 10px; filter: drop-shadow(0 2px 18px rgba(0, 0, 0, 0.4))" />` : null}
${(v?.hero?.noLogo) ? html`${v?.hero?.title}` : null}
</h1>
<p style="position: absolute; left: 0; top: 675px; width: 1808px; margin: 0; display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: 500; color: #D5D7E0; white-space: nowrap">
<span aria-hidden="true" class="service-logo" style="display: inline-flex; align-items: center; height: 24px; color: #FFFFFF; filter: drop-shadow(0 1px 10px rgba(0, 0, 0, 0.35))">
<span class="service-ph" style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 24px; box-sizing: border-box; border-radius: 7px; background: rgba(255, 255, 255, 0.1); border: 1.5px dashed rgba(255, 255, 255, 0.45); color: #D5D7E0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></span>
<svg class="rl rl-prime" xmlns="http://www.w3.org/2000/svg" viewBox="3.957 4.029 24.607 24.611">
  <path d="M14.7858 28.623c-2.2778-.1804-4.0662-.654-5.8212-1.5414-1.1972-.6054-1.9656-1.151-2.794-1.984-.6461-.6497-.9695-1.0786-1.0354-1.3731-.0539-.2405.0438-.3877.2573-.3877.1385 0 .3681.132.7585.4358 1.7029 1.3256 4.0807 2.2867 6.7193 2.716 2.4595.4 4.9596.351 7.4985-.147.829-.1626 1.561-.3539 2.3134-.6042.5662-.1885.9335-.34 1.51-.623.3821-.1877.4981-.2329.6226-.2424.1456-.0111.157-.0076.2348.0779.1203.1316.1159.2992-.013.4932-.1191.1796-.333.3933-.6431.6428-1.6106 1.2957-4.227 2.2257-7.0314 2.4993-.5025.049-2.1335.073-2.5763.0379zM25.31 27.094c-.1597-.1401-.1323-.294.1294-.728.3494-.5792.6425-1.2774.7158-1.7053.0616-.359-.0287-.4746-.4257-.545-.3728-.066-1.2411-.0198-1.7872.095-.1007.0212-.2829.0385-.4048.0385-.1993 0-.2278-.0067-.2822-.0645-.0333-.0354-.067-.112-.0748-.1701-.0122-.0916-.0025-.119.074-.2061.1218-.1386.3575-.2935.6792-.4461.5587-.2651 1.0496-.3746 1.6788-.3744.812.0002 1.461.1955 1.678.505.0796.1135.0814.1233.091.4967.0071.2772-.0023.4466-.0349.6221-.1065.5746-.4042 1.2376-.7466 1.6627-.2225.2763-.7182.73-.8927.817-.2024.1012-.2843.1017-.3973.003zm-11.4332-5.962c-.672-.1285-1.2398-.808-1.4655-1.7537-.1545-.6472-.1647-1.5821-.0243-2.2342.1858-.8634.6042-1.4902 1.171-1.7541.7213-.3358 1.4706-.1278 1.9156.5316.0733.1086.1448.1905.1588.1818.0155-.0096.0255-.4887.0255-1.2219 0-1.1803.001-1.2072.055-1.261.0529-.053.08-.0548.683-.047.4566.0056.6372.0171.6615.0415.0617.0618.0697.6112.0575 3.9653l-.012 3.3278-.0563.0604c-.0544.0585-.0721.0604-.5592.0604-.2767 0-.5226-.0076-.5465-.0167-.072-.0276-.1137-.142-.1778-.4869-.0335-.1806-.0679-.3283-.0764-.3283-.0085 0-.051.0694-.0944.1543-.1172.2286-.4363.534-.6872.6576-.1114.055-.267.112-.3458.127-.1716.0325-.502.0307-.6825-.0038zm1.1773-1.2712c.4351-.2107.6684-.9124.62-1.8646-.044-.863-.2991-1.3672-.7542-1.4904-.1502-.0406-.1966-.043-.3201-.0152-.4332.0969-.6774.4909-.7665 1.2365-.0552.462-.0235 1.003.0814 1.3909.105.3882.2826.639.5355.7562.1534.071.4428.0647.6039-.0133zm4.7904 1.264c-.2654-.056-.453-.1264-.6767-.2544-.6454-.3693-1.102-1.0849-1.2439-1.9494-.058-.3537-.058-1.0127 0-1.3664.1365-.8321.5897-1.5798 1.1947-1.9708.3178-.2054.8209-.3518 1.209-.3518.225 0 .5954.071.8151.1563.533.207 1.0047.702 1.2718 1.3346.1795.425.2533.821.2579 1.3842.003.3777-.0017.4253-.0477.4764-.051.0566-.056.0568-1.6304.0568h-1.5792v.0916c0 .164.0752.4899.1602.6941.1026.2465.2328.4024.413.4949.1884.0966.499.1003.709.0086.169-.0739.3603-.2745.4175-.4378.0217-.0623.0563-.1616.0766-.2207.033-.0952.0479-.1082.1324-.1154.1196-.01 1.0882.2 1.174.2548.0883.0563.068.178-.083.4955-.151.3178-.3942.6236-.6443.8104-.4167.3112-.7572.4211-1.349.4354-.2726.0067-.4589-.0019-.577-.027zm1.3113-3.4752c.0288-.0178.027-.0653-.0095-.2602-.0885-.473-.2755-.7918-.5355-.9129-.3983-.1855-.8453.0532-1.0367.5536-.089.2326-.1584.5803-.123.6157.0351.035 1.6482.0387 1.7047.0038zm4.0347 3.4726c-.668-.1526-1.2758-.6575-1.6276-1.3517-.1168-.2307-.2563-.6905-.2977-.982-.1625-1.1424.1616-2.2463.8516-2.9012.3602-.342.6845-.5177 1.1152-.6043 1.516-.305 2.8188.9341 2.8976 2.756.033.7608-.1514 1.4852-.5197 2.0418-.308.4654-.7933.8363-1.311 1.002-.2426.0775-.8475.099-1.1084.0394zm.8131-1.214c.2445-.1267.4312-.4248.5313-.848.0504-.2132.058-.3248.0584-.8493.0003-.4856-.0089-.6432-.0472-.805-.1383-.585-.3708-.8916-.733-.9668-.4736-.0983-.851.2559-.9901.9294-.1685.8158-.0675 1.8239.2274 2.2691.0832.1256.2755.2802.3978.3197.1236.04.4369.0123.5554-.0491zM5.8782 20.9777c-.0524-.0578-.0783-.1364-.2439-.7406a204.9529 204.9529 0 0 0-.2682-.9661 208.1657 208.1657 0 0 1-.4023-1.4492 239.7715 239.7715 0 0 0-.512-1.8412c-.0655-.2304-.119-.444-.119-.4749 0-.1261.0722-.1395.7544-.1395.5697 0 .6412.0048.6943.048.0499.0403.0923.1977.2693.9996.212.9602.2816 1.273.376 1.6898.137.6047.2944 1.3462.2944 1.3873 0 .0841.044-.002.0778-.1528.0347-.1543.1056-.4772.4424-2.0128.3557-1.6223.412-1.856.4575-1.9017.0378-.0379.1328-.045.6804-.051.6825-.0076.7625.0048.7793.122.0075.0525-.085.3994-.4942 1.8524a393.9247 393.9247 0 0 0-.5782 2.0984c-.0932.3421-.1636.5897-.3752 1.3207-.0286.099-.0707.1986-.0935.2214-.0354.0354-.159.0413-.8672.0413-.7781 0-.8285-.0029-.8722-.0511zm4.1875-.0048-.0711-.056.0071-2.7207c.0067-2.5696.0097-2.7235.055-2.7687.0425-.0426.1143-.0488.6493-.056.5067-.0067.6145-.002.6835.0342l.082.0423v2.7086c0 1.9448-.0086 2.7273-.0302 2.7747-.0166.0364-.0558.073-.0872.0814-.0314.0086-.3182.0156-.6372.0157-.5475.0003-.5841-.0029-.6512-.0555zm.4216-6.0333c-.2383-.0616-.477-.285-.5561-.5204-.0543-.1614-.0554-.4244-.0027-.6021.0484-.163.2378-.3861.3992-.4702.1678-.0873.5799-.1004.7528-.0238.2007.0887.3263.2048.416.3845.0738.1475.0821.1892.0816.4083-.0007.2837-.0505.424-.2089.5884-.1589.165-.329.2376-.5812.2482-.1186.0048-.254-.0008-.3007-.013zm-6.3827-1.3908a.2899.2899 0 0 1-.1006-.0547c-.0443-.0393-.047-.2465-.0466-3.6404.0002-1.9793.0093-3.612.0201-3.6282.0512-.0767.1504-.0912.6196-.0912.2655 0 .5021.0076.5259.0165.0673.0259.0917.0922.1635.4449.0368.1806.076.3374.087.3484.011.011.0556-.049.0991-.1332.0936-.1813.3767-.4753.561-.5827.3221-.1876.6802-.2586 1.0303-.2041.8145.1266 1.3815.8216 1.6334 2.0022.0627.2936.0792 1.2937.0277 1.6773-.0912.6796-.3508 1.3098-.6885 1.6715-.3439.3682-.656.5237-1.1006.5481-.3188.0175-.5242-.0196-.766-.1383-.217-.1066-.466-.3395-.6223-.582-.0556-.0864-.1102-.157-.1213-.1572-.011-.0001-.02.5243-.02 1.1654 0 .6524-.011 1.1945-.025 1.2312-.0406.1068-.1526.1261-.7104.1227-.282-.0019-.5368-.0086-.5663-.0162zm2.4707-2.8972c.1947-.0663.383-.2667.4874-.5186.1185-.286.1712-.5725.1877-1.0198.0287-.7791-.1484-1.4474-.451-1.702-.0966-.0813-.3467-.1766-.4635-.1766-.5822 0-.9571.6662-.9563 1.6994.0006.7365.1469 1.263.4295 1.5457.2025.2025.4883.2666.7662.1719zm19.2198 1.2532c-.9286-.1678-1.6543-.8886-1.9088-1.8962-.3432-1.3585.0316-2.7882.918-3.502.837-.674 2.0391-.6726 2.8057.0038.3352.2955.5295.5755.7155 1.0309.154.3772.2159.6988.2333 1.2146.0081.2387.0071.4643-.0022.5013-.0399.159.0418.1516-1.6676.1516-.8616 0-1.573.0104-1.5808.023-.029.047.0683.5245.1503.737.108.2802.3095.4965.5184.5566.4544.1308.8854-.0736 1.0306-.4889.0995-.2842.1133-.3034.2252-.3128.0839-.0067.6994.115 1.0735.2126.1559.0407.1706.1146.073.3674-.1135.2936-.256.5247-.4535.7356-.4387.4683-.9101.6657-1.6268.681-.2066.0048-.4333-.0019-.5038-.0151zm1.2687-3.5442c0-.271-.1724-.7676-.3319-.9562-.1098-.13-.3202-.2237-.4986-.2223-.2844.0019-.5005.1345-.6575.4025-.103.1757-.2176.5125-.2452.7208l-.0182.1368h1.7514zM9.531 11.7426l-.0725-.057V8.9535c0-2.5066.0036-2.7352.0443-2.769.0593-.0493 1.0006-.0686 1.1112-.0228.0932.0386.1183.1011.188.469.0308.1624.0642.3038.0744.3143.0101.0104.0604-.062.1118-.161.1138-.2195.3915-.5093.579-.604.3128-.158.77-.1998 1.1207-.1026.2217.0614.3131.1385.3131.264 0 .0898-.1788.8432-.2582 1.088-.0604.186-.0992.1964-.364.0973-.3125-.117-.4712-.1573-.6205-.1576-.4033-.001-.657.2112-.788.6592-.0412.1411-.0481.3571-.0612 1.9222-.0117 1.394-.0221 1.7705-.0496 1.798-.026.0261-.1894.037-.6455.043-.5881.0076-.6133.0057-.683-.049zm3.9635.028c-.0311-.0126-.0637-.0414-.0724-.0641-.0116-.0303-.0296-4.92-.02-5.4173.0027-.1377.0875-.155.7608-.155.6647 0 .679.0038.6903.1744.0029.0444.004 1.2731.0025 2.7307-.003 2.6125-.0036 2.651-.0565 2.7039-.0506.0506-.0883.0535-.6508.0519-.3285-.001-.6227-.012-.6538-.0246zm2.3576-.002c-.0335-.0133-.0727-.0557-.0873-.0939-.0167-.044-.0264-1.0531-.0264-2.7464 0-2.2687.0058-2.6848.038-2.729.035-.0478.0803-.0528.552-.0613.3476-.0066.538.0008.5887.0218.0809.0335.0908.0625.1864.5434.0256.1287.0542.2416.0636.251.0094.0095.0594-.0669.111-.1695.1685-.3344.446-.5852.7839-.7086.126-.046.2226-.0585.4675-.0605.3287-.0028.4604.027.7378.166.1812.0907.4652.3819.5883.603.0555.0997.1089.1809.1187.1805.0098-.0004.0565-.0577.1038-.1275.2485-.3665.6096-.6551.956-.764.272-.0855.707-.0843.9625.0029.5491.1867.8732.5958 1.0752 1.3572.056.2108.0578.2728.0668 2.2296.008 1.7344.0038 2.0202-.03 2.0665-.037.0505-.0755.0542-.6528.062-.5888.0087-.6165.0068-.685-.0477l-.0715-.056-.009-1.8176c-.0089-1.7914-.0099-1.82-.0683-1.9942-.1205-.3592-.3173-.5165-.6503-.5194-.3369-.0029-.5748.1788-.7.5351-.0893.254-.1047.5782-.1049 2.2074-.0002 1.5542-.0014 1.5913-.0539 1.6438-.0504.0504-.0894.0536-.6458.0536-.6052 0-.6706-.0097-.723-.1076-.0189-.0353-.028-.6098-.0275-1.737.0007-1.6872-.0085-1.8915-.0976-2.1651-.1262-.3872-.5996-.5531-.9828-.3446-.245.1334-.375.408-.4223.8923-.0136.1402-.0251.952-.0255 1.8038l-.0007 1.5488-.0588.0547c-.0555.0516-.0909.0546-.6374.053-.3182-.001-.606-.0127-.6394-.0262zm-1.9655-6.0624c-.2343-.0715-.442-.2525-.5411-.4714-.0859-.1896-.0857-.533.0005-.7272.076-.1714.2453-.3392.4199-.4164.1911-.0845.5338-.0834.7318.0028.1939.084.3845.2958.448.4977.0645.2049.0447.492-.0478.694-.081.177-.2817.346-.4811.4052-.1437.0426-.4155.0507-.5302.0157z"></path>
</svg>
</span>
<span style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap">Prime Video</span>
${(v?.hero?.hasReason) ? html`
<span style="display: inline-flex; align-items: center; height: 30px; margin-left: 12px; padding: 0 13px; box-sizing: border-box; border-radius: 15px; background: rgba(255, 255, 255, 0.14); border: 1px solid rgba(255, 255, 255, 0.24); backdrop-filter: blur(14px) saturate(140%); -webkit-backdrop-filter: blur(14px) saturate(140%); color: #F5F5F7; font-size: 16px; font-weight: 600; letter-spacing: 0.01em; white-space: nowrap; text-shadow: none">${v?.hero?.reason}</span>
<span style="margin-left: auto; font-size: 20px; font-weight: 500; color: #E2E4EC; white-space: nowrap">${v?.hero?.detail}</span>
` : null}
</p>
</div>
` : null}
</section>

<div aria-hidden="true" data-dots="1" style="position: absolute; left: 0; right: 0; top: 748px; display: flex; justify-content: center; gap: 8px; pointer-events: none; filter: drop-shadow(0 1px 6px rgba(0, 0, 0, 0.35)); opacity: ${v?.dotsOpacity}; transition: ${v?.dotsTransition}">
${(v?.dots || []).map((d, $index) => html`
<span style="position: relative; display: block; overflow: hidden; width: ${d?.w}; height: 4px; border-radius: 2px; background: rgba(255, 255, 255, 0.28); transition: width 400ms ease">
<span style="position: absolute; inset: 0; border-radius: 2px; background: #F5F5F7; transform-origin: left center; transform: scaleX(${d?.fill}); animation: ${d?.anim}"></span>
</span>
`)}
</div>

<button type="button" aria-label="Programme suivant" onClick="${v?.heroClick}" onMouseDown="${v?.swipeStart}" onMouseUp="${v?.swipeEnd}" onTouchStart="${v?.touchStart}" onTouchEnd="${v?.touchEnd}" style="position: absolute; left: 0; top: 0; width: 1920px; height: 760px; background: transparent; cursor: grab"></button>
<button type="button" aria-label="Programme précédent" onClick="${v?.heroPrev}" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap"></button>

<div role="group" aria-label="Programmes" style="position: absolute; left: 64px; right: 64px; bottom: 64px; height: ${v?.cardH}; opacity: ${v?.cardsOpacity}; transform: translateY(${v?.cardsShift}); transition: ${v?.cardsTransition}; pointer-events: ${v?.cardsPointer}">
<div style="position: absolute; left: 0; bottom: 0; display: flex; gap: ${v?.cardGap}; transform: translateX(${v?.cardTrackX}); transition: ${v?.cardTrackTransition}; will-change: transform">
${(v?.cards || []).map((c, $index) => html`
<button type="button" data-card="${c?.key}" aria-label="${c?.label}" onClick="${c?.open}" onFocus="${c?.pick}" onMouseEnter="${c?.pick}" style="position: relative; flex: none; overflow: hidden; width: ${v?.cardW}; height: ${v?.cardH}; border-radius: ${v?.cardR}; box-sizing: border-box; border: 2px solid ${c?.border}; background: radial-gradient(circle at 72% 46%, ${c?.glowA} 0%, rgba(0, 0, 0, 0) 48%), linear-gradient(180deg, ${c?.sky0} 0%, ${c?.sky1} 34%, ${c?.sky2} 46%, ${c?.sky2} 100%); transform: scale(${c?.scale}); box-shadow: ${c?.shadow}; transition: ${c?.transition}; animation: ${c?.bounce}">
<svg aria-hidden="true" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style="position: absolute; inset: 0; width: 100%; height: 100%">
<circle cx="1380" cy="498" r="54" style="fill: ${c?.sun}"></circle>
<path d="M0 520 C 180 470, 320 490, 480 450 S 820 420, 1000 460 S 1300 520, 1460 470 S 1780 430, 1920 460 V1080 H0 Z" style="fill: ${c?.r1}"></path>
<path d="M0 620 C 220 570, 380 590, 560 545 S 900 585, 1100 550 S 1500 515, 1700 570 S 1880 590, 1920 580 V1080 H0 Z" style="fill: ${c?.r2}"></path>
<path d="M0 730 C 260 680, 480 710, 700 670 S 1080 635, 1320 690 S 1700 750, 1920 695 V1080 H0 Z" style="fill: ${c?.r3}"></path>
<path d="M0 860 C 300 820, 560 850, 860 810 S 1400 790, 1920 840 V1080 H0 Z" style="fill: ${c?.r4}"></path>
</svg>
${(c?.hasImg) ? html`
<img alt="" aria-hidden="true" src="${c?.img}" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover" />
` : null}
</button>
`)}
</div>
</div>


<div aria-hidden="true" class="lg" style="position: absolute; left: 56px; right: 56px; top: 785px; height: 219px; box-sizing: border-box; border-radius: 50px; background: rgba(10, 12, 20, 0.24); border: 1px solid rgba(255, 255, 255, 0.06); box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.22), inset 0 -1px 1px rgba(255, 255, 255, 0.06), 0 30px 80px rgba(0, 0, 0, 0.3); backdrop-filter: blur(22px) saturate(185%) brightness(1.04); -webkit-backdrop-filter: blur(22px) saturate(185%) brightness(1.04); transform: translateY(${v?.dockShift}); opacity: ${v?.dockOpacity}; transition: ${v?.dockTransition}"></div>

<div role="group" aria-label="Applications" style="position: absolute; inset: 0; pointer-events: none">
${(v?.tiles || []).map((item, $index) => html`
<div style="position: absolute; left: 0; top: 0; z-index: ${item?.z}; transform: translate3d(${item?.x}, ${item?.y}, 0); transition: ${item?.posTransition}; --lag: ${item?.rowLag}; animation: ${item?.rowAnim}; will-change: transform; pointer-events: none">
<span aria-hidden="true" style="position: absolute; left: 0; top: 0; width: ${item?.w}; height: 161px; border-radius: 22px; box-shadow: ${item?.glow}; opacity: ${item?.glowOn}; transform: ${item?.transform}; scale: ${item?.lift}; animation: ${item?.bounce}; transition: ${item?.glowTransition}; will-change: opacity, transform; pointer-events: none"></span>
<button type="button" data-tile="${item?.id}" aria-label="${item?.label}" onClick="${item?.open}" onFocus="${item?.pick}" onMouseEnter="${item?.pick}" onMouseMove="${item?.move}" onMouseLeave="${item?.leave}" onMouseDown="${item?.down}" onMouseUp="${item?.up}" style="position: relative; width: ${item?.w}; height: 161px; overflow: hidden; border-radius: 22px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; background: ${item?.bg}; background-origin: border-box; background-repeat: no-repeat; color: ${item?.fg}; border: 1px solid ${item?.border}; transform: ${item?.transform}; box-shadow: ${item?.shadow}; opacity: ${item?.opacity}; transition: ${item?.tileTransition}; animation: ${item?.bounce}; scale: ${item?.lift}; will-change: transform; pointer-events: auto">
${(item?.isPs5) ? html`
<span aria-hidden="true" style="position: relative; display: flex; flex-direction: column; align-items: center; gap: 8px; color: #ffffff; transform: ${item?.layer}; transition: ${item?.layerTransition}">
<svg id="uuid-8e0a8c63-6762-4426-82b4-d42a7cc9ca04" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 890.96 132.25" style="fill: #f5f5f7; width: 149px; height: 22px">
  <defs>
    
  </defs>
  <g id="uuid-21b2683b-e86f-42a8-8fb0-413a77e462a8" data-name="PS5">
    <path id="uuid-76aba7d7-7921-4820-a0e4-1720bfcfb85b" data-name="S" class="uuid-5268c863-64cd-4a7c-b4c8-f6dbddc24154" d="M308.75,0c-19.77,0-35.79,16.02-35.79,35.79v61.07c0,11.17-9.06,20.23-20.23,20.23h-68.89v15.16h81.93c19.77,0,35.79-16.02,35.79-35.79v-61.07c0-11.17,9.06-20.23,20.23-20.23h70.17V0h-83.21Z"></path>
    <path id="uuid-52f625d0-b9f6-4e49-a68b-36d5b0d15541" data-name="P" class="uuid-5268c863-64cd-4a7c-b4c8-f6dbddc24154" d="M0,0v15.16h143.9c11.47,0,20.77,9.3,20.77,20.77,0,11.47-9.3,20.77-20.77,20.77H35.79C16.02,56.69,0,72.72,0,92.48v39.77h28.6v-40.16c0-11.17,9.06-20.23,20.23-20.23h108.51c19.84,0,35.93-16.09,35.93-35.93,0-19.84-16.09-35.93-35.93-35.93H0Z"></path>
    <path id="uuid-5e6175ad-247a-452e-b46a-243a8a972459" data-name="5" class="uuid-5268c863-64cd-4a7c-b4c8-f6dbddc24154" d="M419.52,0v49.38c0,12.41,10.06,22.47,22.47,22.47h119.75c12.49,0,22.62,10.12,22.62,22.61,0,12.49-10.13,22.62-22.62,22.62h-142.22v15.16h155.66c20.86,0,37.78-16.91,37.78-37.78,0-20.86-16.91-37.78-37.78-37.78h-118.03c-4.99,0-9.03-4.04-9.03-9.03V15.16h159.65V0h-188.25Z"></path>
  </g>
  <g id="uuid-ac9a5ad6-8082-401c-945d-50a9d59f5a46" data-name="Pro">
    <path id="uuid-c85fa24d-3274-4045-8d84-0d7e886b3393" data-name="1" class="uuid-da8627d4-0da0-47f6-af46-0cb0d7647b6e" d="M833.12,59.13c-8.89,0-12.12,7.94-12.36,15.03-.14,4.37.69,9.52,3.85,12.77,1.68,1.74,4.77,3.39,8.51,3.4,1.49-.07,5.53-.32,8.51-3.4,3.15-3.25,3.99-8.4,3.85-12.77-.23-7.1-3.46-15.03-12.36-15.03Z"></path>
    <path id="uuid-060eee5e-5026-4669-95d2-fc38dc7f5be9" data-name="2" class="uuid-da8627d4-0da0-47f6-af46-0cb0d7647b6e" d="M746.75,43.41c-4.32-.47-8.87-.05-13.97-.05v20.47c4.11,0,7.77,0,11.11-.04,1.05-.01,2.11-.09,3.13-.3,5.57-1.19,8.45-4.72,8.39-10.18-.06-5.4-3.13-9.29-8.65-9.89Z"></path>
    <path id="uuid-a5b35d20-1593-4c21-b5f8-6790d9246816" data-name="3" class="uuid-da8627d4-0da0-47f6-af46-0cb0d7647b6e" d="M874.49.94h-170.66c-9.1,0-16.47,7.37-16.47,16.47v98.22c0,9.1,7.37,16.47,16.47,16.47h170.66c9.1,0,16.47-7.37,16.47-16.47V17.4c0-9.1-7.37-16.47-16.47-16.47ZM765.47,66.27c-4.24,6.04-10.64,8.13-17.6,8.61-4.62.32-9.27.06-14.98.06v24.57h-12.69V31.91h12.58c1.26,0,2.51.02,3.77.03,2.68-.04,5.36-.04,8.04.05.03,0,.05,0,.08,0,0,0,0,0-.01,0,1.99.07,3.98.18,5.96.37,16.7,1.57,24.56,20.11,14.86,33.91ZM806.75,58.83c-.48-.11-1.16-.24-1.98-.31-3.84-.33-7.09.93-8.36,1.79-3.33,2.23-5.41,6.43-5.72,12.47-.16,2.99-.21,5.99-.22,8.99v4.36c0,2.32.02,4.64,0,6.96,0,.12,0,.24,0,.36v5.91h-12.55v-49.38h12.55v6.32c.97-1.5,3.76-5.27,8.92-6.96,3.42-1.12,6.4-.84,8-.57-.21,3.36-.43,6.72-.64,10.07ZM850.11,94.93c-4.53,4.67-10.98,5.9-16.99,5.91-6.01,0-12.46-1.24-16.99-5.91-5.29-5.46-8.29-13.7-8.05-21.14.41-12.55,7.33-25.03,25.04-25.03,2.23-.09,9.82-.16,16.37,5.22,5.84,4.8,8.42,12.3,8.67,19.82.24,7.44-2.76,15.68-8.05,21.14Z"></path>
  </g>
  <path id="uuid-6783dbf1-802a-4869-8522-4ca7a5356830" data-name="R" class="uuid-5268c863-64cd-4a7c-b4c8-f6dbddc24154" d="M634.06,110.8c-1.82.98-3.24,2.38-4.26,4.21-1.02,1.83-1.53,3.73-1.53,5.71s.5,3.85,1.51,5.66c1.01,1.81,2.41,3.22,4.22,4.22,1.81,1,3.69,1.5,5.67,1.5s3.86-.5,5.67-1.5c1.81-1,3.21-2.41,4.21-4.22,1-1.81,1.5-3.7,1.5-5.66s-.51-3.88-1.52-5.71c-1.02-1.83-2.43-3.23-4.25-4.21-1.82-.98-3.69-1.47-5.6-1.47s-3.78.49-5.6,1.47ZM644.32,112.44c1.52.82,2.7,1.99,3.55,3.52.85,1.52,1.27,3.11,1.27,4.76s-.42,3.21-1.25,4.71c-.83,1.5-2.01,2.68-3.52,3.52-1.51.84-3.08,1.26-4.72,1.26s-3.21-.42-4.72-1.26c-1.51-.84-2.68-2.01-3.52-3.52-.84-1.5-1.26-3.08-1.26-4.71s.43-3.24,1.28-4.76c.85-1.52,2.04-2.7,3.55-3.52,1.51-.82,3.07-1.23,4.67-1.23s3.14.41,4.66,1.23ZM636.64,127.01v-5.21h1.16c.69,0,1.22.14,1.58.42.52.38,1.21,1.33,2.07,2.85l1.09,1.93h2.41l-1.49-2.4c-.71-1.14-1.32-1.95-1.81-2.43-.26-.25-.61-.47-1.04-.65,1.06-.08,1.9-.45,2.54-1.12.64-.66.96-1.44.96-2.34,0-.63-.19-1.23-.57-1.8-.38-.56-.9-.96-1.54-1.18-.64-.23-1.68-.34-3.12-.34h-4.21v12.25h1.98ZM636.64,116.42h2.25c.97,0,1.63.07,1.98.21.36.14.64.35.84.64.2.29.3.61.3.97,0,.56-.21,1.02-.63,1.36s-1.2.51-2.35.51h-2.4v-3.7Z"></path>
</svg>
</span>
` : null}
${(item?.isSwitch) ? html`
<span aria-hidden="true" class="logo-slot" style="position: relative; display: flex; flex-direction: column; width: 150px; color: #FFFFFF; transform: ${item?.layer}; transition: ${item?.layerTransition}">
<span class="logo-ph" style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 0; border-radius: 10px; border: 1.5px dashed rgba(255, 255, 255, 0.45)"><svg class="ph-icon" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="10" y1="12" y2="12"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="15" x2="15.01" y1="13" y2="13"></line><line x1="18" x2="18.01" y1="11" y2="11"></line><rect width="20" height="12" x="2" y="6" rx="2"></rect></svg><span style="font-size: 18px; font-weight: 700; letter-spacing: -0.01em">${item?.name}</span></span>
<svg id="uuid-47ef533c-0e72-4a94-84ce-7836d8cac961" data-name="katman 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372.85 78.96" style="fill: #ffffff">
  <defs>
    
  </defs>
  <path class="uuid-fbfa3fa2-390f-40c4-89b4-d089cbc0e8c3" d="M11.79,23.59c0,3.93,3.28,7.54,7.54,7.54s7.54-3.28,7.54-7.54-3.28-7.54-7.54-7.54-7.54,3.6-7.54,7.54ZM57.99,0h-12.12c-.33,0-.66.33-.66.66v77.65c0,.33.33.66.66.66h12.12c11.14,0,20.31-9.17,20.31-19.99V20.31c0-11.14-9.17-20.31-20.31-20.31ZM60.94,51.11c-4.26,0-7.86-3.6-7.86-7.86s3.6-7.86,7.86-7.86,7.86,3.6,7.86,7.86-3.6,7.86-7.86,7.86ZM37.02,0h-17.04C8.85,0,0,9.17,0,20.31v38.33c0,11.14,9.17,19.99,19.99,19.99h17.04c.33,0,.66-.33.66-.66V.66c0-.33-.33-.66-.66-.66ZM31.13,72.41h-11.47c-3.6,0-7.21-1.31-9.83-3.93-2.62-2.62-3.93-6.23-3.93-9.83V20.31c0-3.6,1.31-7.21,3.93-9.83s6.23-3.93,9.83-3.93h11.47v65.85ZM160.54,9.17l10.81,14.74h4.26V1.64h-4.26v14.42l-10.81-14.42h-4.59v21.95h4.59v-14.42ZM115.66,51.44c-5.9-.98-9.83-1.97-9.83-4.91,0-3.28,4.26-4.59,10.16-4.59,5.24,0,10.81,1.97,12.78,2.95l2.95-7.21c-1.97-.98-8.85-3.28-16.05-3.28-8.85,0-18.68,4.26-18.68,12.45,0,6.55,4.59,9.83,16.71,12.12,8.52,1.31,13.11,2.29,12.78,5.9,0,1.97-1.64,5.24-11.14,5.24-7.54,0-13.11-2.62-14.74-3.93l-3.93,7.21c1.97.98,9.17,4.26,18.35,4.26,13.11,0,20.31-4.59,20.31-13.11-.66-4.91-2.29-10.16-19.66-13.11ZM102.88,9.17l10.81,14.74h4.26V1.64h-4.59v14.42l-10.81-14.42h-4.59v21.95h4.59l.33-14.42h0ZM181.51,65.2l-8.85-30.14h-7.54l-8.85,30.14-7.86-30.14h-9.17l11.79,41.61h10.16l7.86-27.52,7.86,27.52h10.16l11.79-41.61h-9.17l-8.19,30.14ZM139.57,1.64h-4.91v21.95h4.91V1.64ZM209.03,76.67h9.17v-41.61h-9.17v41.61ZM346.97.98c-6.55,0-11.79,5.24-11.79,11.79s5.24,11.79,11.79,11.79,11.79-5.24,11.79-11.79c-.33-6.55-5.57-11.79-11.79-11.79ZM346.97,19.66c-3.93,0-6.88-2.95-6.88-6.88s2.95-6.88,6.88-6.88,6.88,2.95,6.88,6.88c0,3.6-3.28,6.88-6.88,6.88ZM348.28,51.44h-19.33v-16.38h-8.52v41.61h8.52v-16.71h19.33v16.71h8.52v-41.61h-8.52v16.38ZM370.88,71.1l-1.31,4.26-1.31-4.26h-1.64v5.57h.98v-4.26l1.64,4.26h.98l1.64-4.26v4.26h.98v-5.57h-1.97ZM309.62,1.64h-9.17v21.95h9.17c6.23,0,11.47-4.91,11.47-11.14-.33-5.9-5.24-10.81-11.47-10.81ZM309.62,19h-4.91V6.23h4.91c3.6,0,6.55,2.95,6.55,6.55s-2.95,6.23-6.55,6.23ZM360.73,72.08h1.64v4.59h.98v-4.59h1.64v-.98h-4.59v.98h.33ZM292.58,42.92c4.59,0,9.17,2.62,11.47,6.55l6.88-5.9c-4.26-6.23-11.14-9.83-18.35-9.83-12.12,0-22.28,9.83-22.28,22.28s9.83,22.28,22.28,22.28c7.54,0,14.42-3.6,18.35-9.83l-6.88-5.9c-2.29,3.93-6.88,6.55-11.47,6.55-7.21,0-13.11-5.9-13.11-13.11s5.9-13.11,13.11-13.11ZM243.76,19.66h-12.78v-5.24h11.79v-3.93h-11.79v-4.59h12.78V1.64h-17.04v21.95h17.04v-3.93ZM228.36,43.9h13.43v32.76h8.85v-32.76h13.11v-8.85h-35.38v8.85ZM210.34,1.64h-18.68v4.59h7.21v17.36h4.59V6.23h6.88V1.64h0ZM281.77,23.92V1.64h-4.59v14.42l-10.81-14.42h-4.59v21.95h4.59v-14.74l10.81,14.74,4.59.33h0Z"></path>
</svg>
</span>
` : null}
${(item?.isOtherSource) ? html`
<span aria-hidden="true" style="position: relative; display: flex; flex-direction: column; align-items: center; gap: 6px; color: ${item?.fg}; transform: ${item?.layer}; transition: ${item?.layerTransition}">
<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="10" y1="12" y2="12"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="15" x2="15.01" y1="13" y2="13"></line><line x1="18" x2="18.01" y1="11" y2="11"></line><rect width="20" height="12" x="2" y="6" rx="2"></rect></svg>
<span style="font-size: 18px; font-weight: 700; letter-spacing: -0.01em">${item?.name}</span>
</span>
` : null}
${(item?.isAdd) ? html`
<span aria-hidden="true" style="position: relative; display: flex; color: ${item?.fg2}; transform: ${item?.layer}; transition: ${item?.layerTransition}">
<svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
` : null}
${(item?.isArt) ? html`
<span aria-hidden="true" style="position: absolute; inset: 0">
<span class="tile-art-ph" style="position: absolute; inset: 12px; border-radius: 10px; border: 1.5px dashed ${item?.slotBorder}; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; color: ${item?.fg2}"><svg class="ph-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg><span style="font-size: 18px; font-weight: 600">${item?.name}</span></span>
</span>
` : null}
${(item?.art_youtube) ? html`
<span aria-hidden="true" class="logo-slot" style="position: relative; display: flex; flex-direction: column; width: 150px; color: ${item?.fg}; opacity: ${item?.artOpacity}; transform: ${item?.layer}; transition: ${item?.layerTransition}">
<span class="logo-ph" style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 0; border-radius: 10px; border: 1.5px dashed ${item?.slotBorder}"><svg class="ph-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg><span style="font-size: 18px; font-weight: 700; letter-spacing: -0.01em">${item?.name}</span></span>
<img src="${A("5d6ec99beb042687169d4f17c98a9fae-640.webp")}" alt="adobe-illustrator-2024-2026-10-28-21-16-" width="3849" height="860" style="max-width: 100%; height: auto; display: block; object-fit: cover; width: 3849px; aspect-ratio: 3849 / 860" />
</span>
` : null}
${(item?.art_appletv) ? html`
<span aria-hidden="true" class="logo-slot" style="position: relative; display: flex; flex-direction: column; width: 112px; color: ${item?.fg}; opacity: ${item?.artOpacity}; transform: ${item?.layer}; transition: ${item?.layerTransition}">
<span class="logo-ph" style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 0; border-radius: 10px; border: 1.5px dashed ${item?.slotBorder}"><svg class="ph-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg><span style="font-size: 18px; font-weight: 700; letter-spacing: -0.01em">${item?.name}</span></span>
<img src="${A("ce658ecf4d7ab6243b2720cf7ac97a9b-640.png")}" alt="apple-tv-logo" width="1080" height="1080" style="max-width: 100%; height: auto; display: block; object-fit: cover; width: 1080px; aspect-ratio: 1080 / 1080" />
</span>
` : null}
${(item?.art_netflix) ? html`
<span aria-hidden="true" class="logo-slot" style="position: relative; display: flex; flex-direction: column; width: 150px; opacity: ${item?.artOpacity}; transform: ${item?.layer}; transition: ${item?.layerTransition}; color: #E50914">
<span class="logo-ph" style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 0; border-radius: 10px; border: 1.5px dashed ${item?.slotBorder}"><svg class="ph-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg><span style="font-size: 18px; font-weight: 700; letter-spacing: -0.01em">${item?.name}</span></span>
<svg id="uuid-7cc709b8-9c0e-4a8e-901b-325b4b8f77ff" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 675.68">
  <defs>
    
  </defs>
  <path class="uuid-8a804853-d802-416b-8953-50b2a3d3a2c7" d="M2366.26,321.62l133.74,354.05c-39.41-5.63-78.81-12.68-118.92-19.03l-75.34-195.63-77.41,179.48c-37.99-6.35-75.31-8.47-113.31-13.4l135.84-309.68L2127.66,0h114.03l68.96,177.34L2384.57,0h115.41l-133.72,321.62ZM2037.61,0h-103.47v613.74c33.79,2.12,68.96,3.51,103.47,7.73V0ZM1844.75,606.69c-94.3-6.33-188.63-11.94-285.05-14.08V0h105.57v492.68c60.54,1.4,121.06,6.31,179.48,9.12v104.89ZM1447.07,240.02v105.56h-144.28v240h-104.14V0h295.61v105.56h-191.44v134.46h144.28-.02ZM1021.26,105.56v485.65c-35.2,0-71.08,0-105.58,1.4V105.56h-109.1V0h324.45v105.56h-109.77ZM692.57,351.19c-46.44,0-101.35,0-140.77,2.14v156.94c61.94-4.23,123.87-9.14,186.51-11.26v101.35l-292.07,23.24V0h292.05v105.56h-186.49v142.18c40.83,0,103.47-2.12,140.76-2.12v105.58-.02ZM107.66,292.07v368.81c-37.97,4.23-71.78,9.17-107.66,14.8V0h100.65l137.23,383.61V0h105.58v632.03c-37.3,6.35-75.31,8.47-115.43,14.08l-120.38-354.03Z"></path>
</svg>
</span>
` : null}
${(item?.art_hbo) ? html`
<span aria-hidden="true" class="logo-slot" style="position: relative; display: flex; flex-direction: column; width: 95px; color: ${item?.fg}; opacity: ${item?.artOpacity}; transform: ${item?.layer}; transition: ${item?.layerTransition}">
<span class="logo-ph" style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 0; border-radius: 10px; border: 1.5px dashed ${item?.slotBorder}"><svg class="ph-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg><span style="font-size: 18px; font-weight: 700; letter-spacing: -0.01em">${item?.name}</span></span>
<img src="${A("c21c80858a7706cf1b5d4556d2ad1c5d.png")}" alt="HBO Max" width="614" height="459" style="display: block; width: 100%; height: auto" />
</span>
` : null}
${(item?.art_freetv) ? html`
<span aria-hidden="true" class="tile-art" style="position: absolute; inset: 0; pointer-events: none; opacity: ${item?.artOpacity}; transform: ${item?.layer} scale(1.07); transition: ${item?.layerTransition}; --art-bg: ${item?.artBg}; --art-x: ${item?.artX}; --art-y: ${item?.artY}; --art-w: ${item?.artW}; --art-h: ${item?.artH}; --art-clip: ${item?.artClip}"><img src="${A("9dddd8f5120cceb2d4cb72ac2d402dda-640.png")}" alt="image" width="1920" height="1280" style="max-width: 100%; height: auto; display: block; object-fit: cover; width: 1920px; aspect-ratio: 1920 / 1280" /></span>
` : null}
${(item?.art_prime) ? html`
<span aria-hidden="true" class="logo-slot" style="position: relative; display: flex; flex-direction: column; width: 76px; color: #ffffff; opacity: ${item?.artOpacity}; transform: ${item?.layer}; transition: ${item?.layerTransition}">
<span class="logo-ph" style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 0; border-radius: 10px; border: 1.5px dashed ${item?.slotBorder}"><svg class="ph-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg><span style="font-size: 18px; font-weight: 700; letter-spacing: -0.01em">${item?.name}</span></span>
<svg id="uuid-7285baa0-6759-4e14-b281-a81064a5c4c7" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.61 24.61">
  <defs>
    
  </defs>
  <path class="uuid-f616be16-25b0-4e0e-adb3-dcfbc689c406" d="M10.83,24.59c-2.28-.18-4.07-.65-5.82-1.54-1.2-.61-1.97-1.15-2.79-1.98-.65-.65-.97-1.08-1.04-1.37-.05-.24.04-.39.26-.39.14,0,.37.13.76.44,1.7,1.33,4.08,2.29,6.72,2.72,2.46.4,4.96.35,7.5-.15.83-.16,1.56-.35,2.31-.6.57-.19.93-.34,1.51-.62.38-.19.5-.23.62-.24.15-.01.16,0,.23.08.12.13.12.3-.01.49-.12.18-.33.39-.64.64-1.61,1.3-4.23,2.23-7.03,2.5-.5.05-2.13.07-2.58.04h0ZM21.35,23.07c-.16-.14-.13-.29.13-.73.35-.58.64-1.28.72-1.71.06-.36-.03-.47-.43-.55-.37-.07-1.24-.02-1.79.09-.1.02-.28.04-.4.04-.2,0-.23,0-.28-.06-.03-.04-.07-.11-.07-.17-.01-.09,0-.12.07-.21.12-.14.36-.29.68-.45.56-.27,1.05-.37,1.68-.37.81,0,1.46.2,1.68.5.08.11.08.12.09.5,0,.28,0,.45-.03.62-.11.57-.4,1.24-.75,1.66-.22.28-.72.73-.89.82-.2.1-.28.1-.4,0h0ZM9.92,17.1c-.67-.13-1.24-.81-1.47-1.75-.15-.65-.16-1.58-.02-2.23.19-.86.6-1.49,1.17-1.75.72-.34,1.47-.13,1.92.53.07.11.14.19.16.18.02,0,.03-.49.03-1.22,0-1.18,0-1.21.06-1.26.05-.05.08-.05.68-.05.46,0,.64.02.66.04.06.06.07.61.06,3.97v3.33s-.07.06-.07.06c-.05.06-.07.06-.56.06-.28,0-.52,0-.55-.02-.07-.03-.11-.14-.18-.49-.03-.18-.07-.33-.08-.33s-.05.07-.09.15c-.12.23-.44.53-.69.66-.11.06-.27.11-.35.13-.17.03-.5.03-.68,0h0ZM11.1,15.83c.44-.21.67-.91.62-1.86-.04-.86-.3-1.37-.75-1.49-.15-.04-.2-.04-.32-.02-.43.1-.68.49-.77,1.24-.06.46-.02,1,.08,1.39.1.39.28.64.54.76.15.07.44.06.6-.01h0ZM15.89,17.1c-.27-.06-.45-.13-.68-.25-.65-.37-1.1-1.08-1.24-1.95-.06-.35-.06-1.01,0-1.37.14-.83.59-1.58,1.19-1.97.32-.21.82-.35,1.21-.35.23,0,.6.07.82.16.53.21,1,.7,1.27,1.33.18.42.25.82.26,1.38,0,.38,0,.43-.05.48-.05.06-.06.06-1.63.06h-1.58v.09c0,.16.08.49.16.69.1.25.23.4.41.49.19.1.5.1.71,0,.17-.07.36-.27.42-.44.02-.06.06-.16.08-.22.03-.1.05-.11.13-.12.12-.01,1.09.2,1.17.25.09.06.07.18-.08.5-.15.32-.39.62-.64.81-.42.31-.76.42-1.35.44-.27,0-.46,0-.58-.03h0ZM17.2,13.62s.03-.07,0-.26c-.09-.47-.28-.79-.54-.91-.4-.19-.85.05-1.04.55-.09.23-.16.58-.12.62.04.03,1.65.04,1.7,0ZM21.23,17.09c-.67-.15-1.28-.66-1.63-1.35-.12-.23-.26-.69-.3-.98-.16-1.14.16-2.25.85-2.9.36-.34.68-.52,1.12-.6,1.52-.31,2.82.93,2.9,2.76.03.76-.15,1.49-.52,2.04-.31.47-.79.84-1.31,1-.24.08-.85.1-1.11.04ZM22.05,15.88c.24-.13.43-.42.53-.85.05-.21.06-.32.06-.85,0-.49,0-.64-.05-.81-.14-.58-.37-.89-.73-.97-.47-.1-.85.26-.99.93-.17.82-.07,1.82.23,2.27.08.13.28.28.4.32.12.04.44.01.56-.05ZM1.92,16.95c-.05-.06-.08-.14-.24-.74-.09-.32-.18-.64-.27-.97-.14-.48-.27-.97-.4-1.45-.17-.61-.34-1.23-.51-1.84-.07-.23-.12-.44-.12-.47,0-.13.07-.14.75-.14.57,0,.64,0,.69.05.05.04.09.2.27,1,.21.96.28,1.27.38,1.69.14.6.29,1.35.29,1.39,0,.08.04,0,.08-.15.03-.15.11-.48.44-2.01.36-1.62.41-1.86.46-1.9.04-.04.13-.05.68-.05.68,0,.76,0,.78.12,0,.05-.09.4-.49,1.85-.19.7-.39,1.4-.58,2.1-.09.34-.16.59-.38,1.32-.03.1-.07.2-.09.22-.04.04-.16.04-.87.04-.78,0-.83,0-.87-.05h0ZM6.11,16.94l-.07-.06v-2.72c.01-2.57.02-2.72.06-2.77.04-.04.11-.05.65-.06.51,0,.61,0,.68.03l.08.04v2.71c0,1.94,0,2.73-.03,2.77-.02.04-.06.07-.09.08-.03,0-.32.02-.64.02-.55,0-.58,0-.65-.06ZM6.53,10.91c-.24-.06-.48-.28-.56-.52-.05-.16-.06-.42,0-.6.05-.16.24-.39.4-.47.17-.09.58-.1.75-.02.2.09.33.2.42.38.07.15.08.19.08.41,0,.28-.05.42-.21.59-.16.16-.33.24-.58.25-.12,0-.25,0-.3-.01h0ZM.15,9.52s-.07-.03-.1-.05C0,9.43,0,9.22,0,5.83c0-1.98,0-3.61.02-3.63.05-.08.15-.09.62-.09.27,0,.5,0,.53.02.07.03.09.09.16.44.04.18.08.34.09.35.01.01.06-.05.1-.13.09-.18.38-.48.56-.58.32-.19.68-.26,1.03-.2.81.13,1.38.82,1.63,2,.06.29.08,1.29.03,1.68-.09.68-.35,1.31-.69,1.67-.34.37-.66.52-1.1.55-.32.02-.52-.02-.77-.14-.22-.11-.47-.34-.62-.58-.06-.09-.11-.16-.12-.16-.01,0-.02.52-.02,1.17s-.01,1.19-.03,1.23c-.04.11-.15.13-.71.12-.28,0-.54,0-.57-.02ZM2.62,6.62c.19-.07.38-.27.49-.52.12-.29.17-.57.19-1.02.03-.78-.15-1.45-.45-1.7-.1-.08-.35-.18-.46-.18-.58,0-.96.67-.96,1.7,0,.74.15,1.26.43,1.55.2.2.49.27.77.17ZM21.84,7.88c-.93-.17-1.65-.89-1.91-1.9-.34-1.36.03-2.79.92-3.5.84-.67,2.04-.67,2.81,0,.34.3.53.58.72,1.03.15.38.22.7.23,1.21,0,.24,0,.46,0,.5-.04.16.04.15-1.67.15-.86,0-1.57.01-1.58.02-.03.05.07.52.15.74.11.28.31.5.52.56.45.13.89-.07,1.03-.49.1-.28.11-.3.23-.31.08,0,.7.11,1.07.21.16.04.17.11.07.37-.11.29-.26.52-.45.74-.44.47-.91.67-1.63.68-.21,0-.43,0-.5-.02h0ZM23.11,4.33c0-.27-.17-.77-.33-.96-.11-.13-.32-.22-.5-.22-.28,0-.5.13-.66.4-.1.18-.22.51-.25.72l-.02.14h1.75v-.08ZM5.57,7.71l-.07-.06v-2.73c0-2.51,0-2.74.04-2.77.06-.05,1-.07,1.11-.02.09.04.12.1.19.47.03.16.06.3.07.31.01.01.06-.06.11-.16.11-.22.39-.51.58-.6.31-.16.77-.2,1.12-.1.22.06.31.14.31.26,0,.09-.18.84-.26,1.09-.06.19-.1.2-.36.1-.31-.12-.47-.16-.62-.16-.4,0-.66.21-.79.66-.04.14-.05.36-.06,1.92-.01,1.39-.02,1.77-.05,1.8-.03.03-.19.04-.65.04-.59,0-.61,0-.68-.05h0ZM9.54,7.74s-.06-.04-.07-.06c-.01-.03-.03-4.92-.02-5.42,0-.14.09-.16.76-.16s.68,0,.69.17c0,.04,0,1.27,0,2.73,0,2.61,0,2.65-.06,2.7s-.09.05-.65.05c-.33,0-.62-.01-.65-.02h0ZM11.89,7.74s-.07-.06-.09-.09c-.02-.04-.03-1.05-.03-2.75,0-2.27,0-2.68.04-2.73.03-.05.08-.05.55-.06.35,0,.54,0,.59.02.08.03.09.06.19.54.03.13.05.24.06.25,0,0,.06-.07.11-.17.17-.33.45-.59.78-.71.13-.05.22-.06.47-.06.33,0,.46.03.74.17.18.09.47.38.59.6.06.1.11.18.12.18s.06-.06.1-.13c.25-.37.61-.66.96-.76.27-.09.71-.08.96,0,.55.19.87.6,1.08,1.36.06.21.06.27.07,2.23,0,1.73,0,2.02-.03,2.07-.04.05-.08.05-.65.06-.59,0-.62,0-.68-.05l-.07-.06v-1.82c-.02-1.79-.02-1.82-.08-1.99-.12-.36-.32-.52-.65-.52-.34,0-.57.18-.7.54-.09.25-.1.58-.1,2.21,0,1.55,0,1.59-.05,1.64s-.09.05-.65.05c-.61,0-.67,0-.72-.11-.02-.04-.03-.61-.03-1.74,0-1.69,0-1.89-.1-2.17-.13-.39-.6-.55-.98-.34-.25.13-.38.41-.42.89-.01.14-.03.95-.03,1.8v1.55s-.06.05-.06.05c-.06.05-.09.05-.64.05-.32,0-.61-.01-.64-.03h0ZM9.93,1.68c-.23-.07-.44-.25-.54-.47-.09-.19-.09-.53,0-.73.08-.17.25-.34.42-.42.19-.08.53-.08.73,0,.19.08.38.3.45.5.06.2.04.49-.05.69-.08.18-.28.35-.48.41-.14.04-.42.05-.53.02h0Z"></path>
</svg>
</span>
` : null}
${(item?.art_disney) ? html`
<span aria-hidden="true" class="logo-slot" style="position: relative; display: flex; flex-direction: column; width: 124px; color: ${item?.fg}; opacity: ${item?.artOpacity}; transform: ${item?.layer}; transition: ${item?.layerTransition}">
<span class="logo-ph" style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 0; border-radius: 10px; border: 1.5px dashed ${item?.slotBorder}"><svg class="ph-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg><span style="font-size: 18px; font-weight: 700; letter-spacing: -0.01em">${item?.name}</span></span>
<svg id="uuid-d3491f7d-9f9f-4977-953e-8e9c4f3d4c57" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1040.44 564.42">
  <defs>
    
    <radialGradient id="uuid-921f5905-1eeb-4dd0-9e1b-60af23ee92f7" data-name="Dégradé sans nom 3" cx="942.06" cy="285.8" fx="942.06" fy="285.8" r="760.12" gradientTransform="translate(0 565.4) scale(1 -1)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#021192"></stop>
      <stop offset=".03" stop-color="#021096"></stop>
      <stop offset=".06" stop-color="#010cb4"></stop>
      <stop offset=".08" stop-color="#0008ce"></stop>
      <stop offset=".11" stop-color="#0006d7"></stop>
      <stop offset=".14" stop-color="#0004e1"></stop>
      <stop offset=".17" stop-color="#0001fa"></stop>
      <stop offset=".19" stop-color="#0000fe"></stop>
      <stop offset=".22" stop-color="#0f1eff"></stop>
      <stop offset="1" stop-color="aqua" stop-opacity="0"></stop>
    </radialGradient>
  </defs>
  <g id="uuid-2e2666b6-7e34-4464-999c-2280ad670fc4" data-name="Layer 1">
    <g id="uuid-049b6892-16a1-4808-8231-22d6a47dc36a" data-name="group">
      <g id="uuid-3b7f5a3d-d19b-4b7b-9b87-b75dd8af792e" data-name="group-1">
        <g id="uuid-49045c11-d58a-4897-ad25-05a4ed18280f" data-name="group-2">
          <path id="uuid-e23e9e3a-8257-4a57-bb6f-18954ea5d4db" data-name="Path" class="uuid-4e86f130-8e4f-4ab9-9d80-03edc1a0c53b" d="M735.34,365.4c-14.4,3.3-52.3,5.2-52.3,5.2l-4.8,15s18.9-1.6,32.7-.2c0,0,4.5-.5,5,5.1.2,5.2-.4,10.8-.4,10.8,0,0-.3,3.4-5.1,4.2-5.2.9-40.8,2.2-40.8,2.2l-5.8,19.5s-2.1,4.5,2.7,3.2c4.5-1.2,41.8-8.2,46.7-7.2,5.2,1.3,11,8.2,9.3,14.6-2,7.8-39.2,31.6-61.9,29.9,0,0-11.9.8-22-15.3-9.4-15.3,3.6-44.4,3.6-44.4,0,0-5.9-13.6-1.6-18.1,0,0,2.6-2.3,10-2.9l9.1-18.9s-10.4.7-16.6-6.9c-5.8-7.3-6.2-10.6-1.8-12.6,4.7-2.3,48-10.2,77.8-9.2,0,0,10.4-1,19.3,17-.1,0,4.3,7.3-3.1,9ZM623.24,438c-3.8,9-13.9,18.6-26.4,12.6-12.4-6-32.1-46.3-32.1-46.3,0,0-7.5-15-8.9-14.7,0,0-1.6-2.9-2.6,13.5s.2,48.3-6.3,53.3c-6.2,5-13.7,3-17.6-2.9-3.5-5.8-5-19.6-3.1-43.8,2.3-24.2,7.9-50,15.1-58.1,7.2-8,13-2.2,15.2-.1,0,0,9.6,8.7,25.5,34.3l2.8,4.7s14.4,24.2,15.9,24.1c0,0,1.2,1.1,2.2.3,1.5-.4.9-8.2.9-8.2,0,0-3-26.3-16.1-70.9,0,0-2-5.6-.6-10.8,1.3-5.3,6.6-2.8,6.6-2.8,0,0,20.4,10.2,30.2,43.4,9.7,33.5,3.1,63.4-.7,72.4ZM523.04,352.7c-1.7,3.4-2.7,8.3-11.3,9.6,0,0-82.3,5.6-86.2,11.4,0,0-2.9,3.4,1.6,4.4,4.5.9,23.1,3.4,32.1,3.9,9.6.1,42,.4,53.6,14.9,0,0,6.9,6.9,6.6,22.5-.3,16-3.1,21.6-9.3,27.4-6.5,5.4-62.3,30.4-98.3-8,0,0-16.6-18.5,5.7-32.5,0,0,16.1-9.7,57,1.7,0,0,12.4,4.5,11.8,9-.7,4.8-10.2,9.9-24,9.6-13.4-.4-23.2-6.8-21.3-5.8,1.8.7-14.4-7.8-19.4-2-5,5.3-3.8,8.6,1.1,11.9,12.5,7.1,60.8,4.6,75.2-11.4,0,0,5.7-6.5-3-11.8-8.7-5-33.6-8-43.3-8.5-9.3-.5-43.9.1-48.9-9.1,0,0-5-6.2.5-23.8,5.8-18.4,46.1-25.5,63.5-27.1,0,0,47.9-1.7,56.7,8.1-.1,0,1.1,2.3-.4,5.6ZM387.04,460.6c-5.8,4.3-18.1,2.4-21.6-2.4-3.5-4.3-4.7-21.4-4-48.2.7-27.1,1.3-60.7,7.1-66,6.2-5.4,10-.7,12.4,3,2.6,3.6,5.7,7.6,6.4,16.1.6,8.5,2.6,53.1,2.6,53.1,0,0,2.6,40.2-2.9,44.4ZM399.54,316.8c-16.9,5.6-28.5,3.7-38.3-.5-4.3,7.5-6.8,9.8-10.1,10.3-4.8.5-9.1-7.2-9.9-9.7-.8-1.9-3.1-5.1-.3-12.7-9.6-8.6-10.3-20.2-8.7-28,2.4-9,18.6-43.2,67.9-47.2,0,0,24.1-1.8,28.2,11.1h.7s23.4.1,22.9,20.9c-.3,20.9-26,46.9-52.4,55.8ZM353.54,270.5c-5,8-5.2,12.8-2.9,16.1,5.7-8.7,16.1-22.4,31.4-32.8-11.8,1-21.7,6.1-28.5,16.7ZM421.64,257.1c-15.5,2.3-39.5,23.1-50.9,40.1,17.5,3.2,48.4,2,62.1-25.9-.1,0,6.5-17.3-11.2-14.2ZM842.44,418.2c-9.3,16.2-35.4,50-70.2,42.1-11.5,27.9-21.1,56-26.6,98.2,0,0-1.2,8.2-8,5.3-6.7-2.4-17.9-13.6-20.1-29.1-2.4-20.4,6.7-54.9,25.2-94.4-5.4-8.8-9.1-21.4-5.9-39.3,0,0,4.7-33.2,38-63.2,0,0,4-3.5,6.3-2.4,2.6,1.1,1.4,11.9-.7,17.1-2.1,5.2-17,31-17,31,0,0-9.3,17.4-6.7,31.1,17.5-26.9,57.3-81.2,82-64.1,8.3,5.9,12.1,18.8,12.1,32.7-.1,12.3-3,25.3-8.4,35ZM835.24,375.6s-1.4-10.7-11.8,1.1c-9,9.9-25.2,28.6-38.3,53.9,13.7-1.5,26.9-9,30.9-12.8,6.5-5.8,21.6-21.4,19.2-42.2ZM349.74,389.2c-1.9,24.2-11.2,64.9-77.1,85-43.5,13.1-84.6,6.8-107,1.1-.5,8.9-1.5,12.7-2.9,14.2-1.9,1.9-16.1,10.1-23.9-1.5-3.5-5.5-5.3-15.5-6.3-24.4-50.4-23.2-73.6-56.6-74.5-58.1-1.1-1.1-12.6-13.1-1.1-27.8,10.8-13.3,46.1-26.6,77.9-32,1.1-27.2,4.3-47.7,8.1-57.1,4.6-10.9,10.4-1.1,15.4,6.3,4.2,5.5,6.7,29.2,6.9,48.1,20.8-1,33.1.5,56.3,4.7,30.2,5.5,50.4,20.9,48.6,38.4-1.3,17.2-17.1,24.3-23.1,24.8-6.3.5-16.1-4-16.1-4-6.7-3.2-.5-6,7.6-9.5,8.8-4.3,6.8-8.7,6.8-8.7-3.3-9.6-42.5-16.3-81.5-16.3-.2,21.5.9,57.2,1.4,78,27.3,5.2,47.7,4.2,47.7,4.2,0,0,99.6-2.8,102.6-66.4,3.1-63.7-99.3-124.8-175-144.2-75.6-19.8-118.4-6-122.1-4.1-4,2-.3,2.6-.3,2.6,0,0,4.1.6,11.2,3,7.5,2.4,1.7,6.3,1.7,6.3-12.9,4.1-27.4,1.5-30.2-4.4-2.8-5.9,1.9-11.2,7.3-18.8,5.4-8,11.3-7.7,11.3-7.7,93.5-32.4,207.4,26.2,207.4,26.2,106.7,54.1,124.9,117.5,122.9,142.1ZM67.54,385.9c-10.6,5.2-3.3,12.7-3.3,12.7,19.9,21.4,44.4,34.8,67.7,43.1,2.7-36.9,2.3-49.9,2.6-68.5-36.4,2.5-57.4,8.3-67,12.7Z"></path>
        </g>
      </g>
      <g id="uuid-e7ac71aa-e6c4-4c4b-9993-00b19d9b801d" data-name="group-3">
        <g id="uuid-d6ac6b23-b67a-47e1-8c0f-af3acbee3368" data-name="group-4">
          <g id="uuid-3a5d65c5-e862-46d6-b418-a1bc63a82354" data-name="group-5">
            <path id="uuid-41c0adeb-8231-4d4b-a7a5-95230be29bcf" data-name="Path-1" class="uuid-4e86f130-8e4f-4ab9-9d80-03edc1a0c53b" d="M1040.44,378.3v13.2c0,2.9-2.3,5.2-5.2,5.2h-62.9c0,3.3.1,6.2.1,8.9,0,19.5-.8,35.4-2.7,53.3-.3,2.7-2.5,4.7-5.1,4.7h-13.6c-1.4,0-2.7-.6-3.6-1.6-.9-1-1.4-2.4-1.2-3.8,1.9-17.8,2.8-33.5,2.8-52.6,0-2.8,0-5.7-.1-8.9h-62.2c-2.9,0-5.2-2.3-5.2-5.2v-13.2c0-2.9,2.3-5.2,5.2-5.2h61.3c-1.3-21.5-3.9-42.2-8.1-63.2-.2-1.3.1-2.6.9-3.6s2-1.6,3.3-1.6h14.7c2.3,0,4.2,1.6,4.7,3.9,4.1,21.7,6.7,42.8,8,64.5h63.7c2.8,0,5.2,2.4,5.2,5.2Z"></path>
          </g>
        </g>
      </g>
      <g id="uuid-fd190000-f842-48eb-881d-0a04a5d1dfc9" data-name="group-6">
        <g id="uuid-a75b7a15-df9c-46d3-9420-e01f1a1b1876" data-name="group-7">
          <path id="uuid-38bd0d79-6820-4fbe-8cd6-c9dfbfa99704" data-name="Path-2" class="uuid-f424e465-8e40-4067-8f6f-0bb46f329a52" d="M199.74,204h-.1M198.94,204.1c-.3,0-.6-.1-.9-.1.3.1.6.1.9.1h.3-.3ZM198.94,204.1c-.3,0-.6-.1-.9-.1.3.1.6.1.9.1h.3-.3Z"></path>
          <path id="uuid-d2b1cd9a-bd59-4d64-a405-7f7264268ca8" data-name="Path-3" class="uuid-c4462166-77d9-47af-95ba-7adb21075eaa" d="M954.84,273.6c-32.5-79.9-87.4-148-158.8-197C722.94,26.5,637.24,0,548.24,0c-147.2,0-283.8,73.1-365.3,195.6-.9,1.3-1.1,3-.6,4.5.5,1.6,1.7,2.7,3.2,3.2l11.4,3.9c.7.2,1.4.3,2,.3,2.1,0,4.1-1.1,5.3-2.8,37.4-55,88-100.7,146.4-132.3,60.3-32.6,128.6-49.9,197.5-49.9,83.3,0,163.6,24.6,232.4,71,67.1,45.3,119.2,108.6,150.7,182.9.9,2.2,3.1,3.7,5.5,3.7h13.6c1.6,0,3.1-.8,3.9-2.1,1-1.3,1.2-2.9.6-4.4ZM198.94,204.1c-.3,0-.6-.1-.9-.2.3.1.6.2.9.2h.2-.2ZM933.94,278.3c.3.2.6.4.9.5-.3-.2-.6-.3-.9-.5Z"></path>
        </g>
      </g>
    </g>
  </g>
</svg>
</span>
` : null}
${(item?.art_crunchyroll) ? html`
<span aria-hidden="true" class="logo-slot" style="position: relative; display: flex; flex-direction: column; width: 150px; color: ${item?.fg}; opacity: ${item?.artOpacity}; transform: ${item?.layer}; transition: ${item?.layerTransition}">
<span class="logo-ph" style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 0; border-radius: 10px; border: 1.5px dashed ${item?.slotBorder}"><svg class="ph-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg><span style="font-size: 18px; font-weight: 700; letter-spacing: -0.01em">${item?.name}</span></span>
<svg id="uuid-9acdad0d-5cf2-491b-b37e-a941be736db1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298.13 48">
  <defs>
    
  </defs>
  <path class="uuid-0ff34ddf-9f51-4c1b-9264-dedf663d65eb" d="M60.18,24.06c0-8.68,7.01-15.69,15.69-15.69,6.33,0,11.4,3.53,13.97,8.64l-6.42,3.17c-1.36-2.89-4.12-5.07-7.55-5.07-4.7,0-8.55,3.89-8.55,8.96s3.84,9,8.55,9c3.44,0,6.2-2.17,7.55-5.07l6.42,3.17c-2.58,5.11-7.64,8.64-13.97,8.64-8.68,0-15.69-7.01-15.69-15.74ZM92.34,16.74h6.74v3.66c1.22-2.31,3.12-3.66,5.43-3.66h1.9v6.65h-2.22c-3.21,0-4.7,1.76-4.7,4.89v11.08h-7.15v-22.62ZM108.75,29.67v-12.94h7.15v12.94c0,2.49,1.58,4.03,3.98,4.03s3.98-1.54,3.98-4.03v-12.94h7.15v12.94c0,6.01-4.71,10.13-11.13,10.13s-11.13-4.12-11.13-10.13ZM134.4,16.74h7.01v2.76c1.58-1.81,3.8-2.98,6.38-2.98,5.52,0,9.14,4.03,9.14,9.82v13.03h-7.15v-13.03c0-2.4-1.76-4.21-4.12-4.21s-4.12,1.81-4.12,4.21v13.03h-7.15v-22.62h0ZM176.69,30.13l5.84,2.76c-1.85,4.07-5.88,6.92-10.76,6.92-6.6,0-11.9-5.25-11.9-11.76s5.29-11.76,11.9-11.76c4.93,0,8.96,2.89,10.81,6.96l-5.88,2.81c-.77-2.08-2.67-3.53-4.93-3.53-2.98,0-5.25,2.44-5.25,5.52s2.26,5.52,5.25,5.52c2.22,0,4.12-1.4,4.93-3.44h0ZM184.83,8.82h7.15v10.63c1.59-1.81,3.76-2.94,6.24-2.94,5.52,0,9.14,4.03,9.14,9.82v13.03h-7.15v-13.03c0-2.4-1.76-4.21-4.12-4.21s-4.12,1.81-4.12,4.21v13.03h-7.15V8.82h0ZM220.34,30.22l4.79-13.48h7.15l-9.14,23.97c-1.9,4.98-4.89,7.1-9.95,7.1h-3.26v-6.24h3.26c1.95,0,2.94-.81,3.48-2.17l-9-22.66h7.64l5.02,13.48h0ZM234.09,16.74h6.74v3.66c1.22-2.31,3.12-3.66,5.43-3.66h1.9v6.65h-2.22c-3.21,0-4.71,1.76-4.71,4.89v11.08h-7.15v-22.62ZM249.15,28.04c0-6.47,5.29-11.76,11.99-11.76s11.99,5.29,11.99,11.76-5.29,11.76-11.99,11.76-11.99-5.25-11.99-11.76ZM255.8,28.04c0,3.17,2.35,5.52,5.34,5.52s5.34-2.35,5.34-5.52-2.35-5.52-5.34-5.52-5.34,2.35-5.34,5.52ZM284.43,39.35c-5.92,0-8.37-2.62-8.37-8.23V8.82h7.15v22.3c0,1.27.54,1.99,1.81,1.99h1.17v6.24h-1.76ZM296.37,39.35c-5.93,0-8.37-2.62-8.37-8.23V8.82h7.15v22.3c0,1.27.54,1.99,1.81,1.99h1.17v6.24h-1.76ZM5.82,26.87c.01-11.65,9.47-21.09,21.12-21.07,11.15.01,20.28,8.68,21.02,19.64.03-.47.04-.94.04-1.41C48.01,10.77,37.28.01,24.02,0,10.77-.01.01,10.72,0,23.98c-.01,13.26,10.72,24.01,23.98,24.02.55,0,1.09-.02,1.63-.05-11.05-.68-19.8-9.86-19.79-21.07ZM38.38,27.18c-4.53,0-8.2-3.68-8.19-8.21,0-3.55,2.27-6.57,5.43-7.71-2.5-1.32-5.35-2.07-8.38-2.07-9.95,0-18.02,8.05-18.03,17.99,0,9.95,8.05,18.02,17.99,18.03,9.95,0,18.02-8.05,18.03-18,0-1.13-.1-2.23-.3-3.3-1.5,1.98-3.88,3.26-6.55,3.26h0Z"></path>
</svg>
</span>
` : null}
${(item?.art_spotify) ? html`
<span aria-hidden="true" class="logo-slot" style="position: relative; display: flex; flex-direction: column; width: 150px; color: ${item?.fg}; opacity: ${item?.artOpacity}; transform: ${item?.layer}; transition: ${item?.layerTransition}">
<span class="logo-ph" style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 0; border-radius: 10px; border: 1.5px dashed ${item?.slotBorder}"><svg class="ph-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg><span style="font-size: 18px; font-weight: 700; letter-spacing: -0.01em">${item?.name}</span></span>
<svg id="uuid-b5b351c3-82da-47cd-9a50-0e12d0de3e82" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 799.92 218.81">
  <path d="M113.75.09C53.37-2.31,2.48,44.69.09,105.07c-2.4,60.38,44.61,111.26,104.98,113.66,60.38,2.4,111.26-44.6,113.66-104.98C221.12,53.37,174.12,2.48,113.75.09ZM159.93,160.36c-1.36,2.4-4.01,3.6-6.59,3.24-.79-.11-1.58-.37-2.32-.79-14.46-8.23-30.22-13.59-46.84-15.93-16.62-2.34-33.25-1.53-49.42,2.4-3.51.85-7.04-1.3-7.89-4.81-.85-3.51,1.3-7.04,4.81-7.89,17.78-4.32,36.06-5.21,54.32-2.64,18.26,2.57,35.58,8.46,51.49,17.51,3.13,1.79,4.23,5.77,2.45,8.91ZM174.31,131.64c-2.23,4.12-7.39,5.66-11.51,3.43-16.92-9.15-35.24-15.16-54.45-17.86-19.21-2.7-38.47-1.97-57.26,2.16-1.02.22-2.03.26-3.01.12-3.41-.48-6.33-3.02-7.11-6.59-1.01-4.58,1.89-9.11,6.47-10.12,20.77-4.57,42.06-5.38,63.28-2.4,21.21,2.98,41.46,9.62,60.16,19.74,4.13,2.23,5.66,7.38,3.43,11.51ZM190.25,99.27c-2.1,4.04-6.47,6.13-10.73,5.53-1.15-.16-2.28-.52-3.37-1.08-19.7-10.25-40.92-17.02-63.07-20.13-22.15-3.11-44.42-2.45-66.18,1.97-5.66,1.15-11.17-2.51-12.32-8.16-1.15-5.66,2.51-11.17,8.16-12.32,24.1-4.89,48.74-5.62,73.25-2.18,24.51,3.44,47.99,10.94,69.81,22.29,5.12,2.66,7.11,8.97,4.45,14.09ZM314.35,98.94l-7.58-2.26c-15.24-4.51-19.51-6.21-19.51-12.34,0-5.8,6.45-12.09,20.64-12.09s25.88,6.85,32.01,11.93c1.05.89,2.18.48,2.18-.89v-20.08c0-.89-.24-1.37-.89-1.85-7.58-5.64-20.72-9.76-33.94-9.76-26.93,0-43.05,15.32-43.05,32.73,0,19.67,12.5,26.53,33.06,32.33l8.87,2.5c15.4,4.35,18.22,8.22,18.22,14.19,0,10-7.58,13.06-18.87,13.06-14.19,0-31.52-8.3-39.67-18.46-.73-.89-1.61-.48-1.61.56v22.09c0,.89.08,1.29.73,2.02,6.77,7.42,22.98,13.95,41.84,13.95,23.22,0,40.63-13.54,40.63-34.51,0-16.29-9.59-26.12-33.06-33.14ZM406.5,82.9c-15.32,0-24.19,9.35-29.35,18.7v-16.12c0-.73-.4-1.13-1.13-1.13h-20.24c-.73,0-1.13.4-1.13,1.13v103.44c0,.73.4,1.13,1.13,1.13h20.24c.73,0,1.13-.4,1.13-1.13v-41.36c5.16,9.35,13.87,18.54,29.51,18.54,20.64,0,35.47-17.82,35.47-41.76s-15-41.44-35.64-41.44ZM400.53,146.59c-10.8,0-20.16-10.64-23.86-22.41,3.71-12.42,12.25-21.93,23.86-21.93s18.7,8.38,18.7,22.09-7.66,22.25-18.7,22.25ZM771,84.35h-20.64c-.73,0-1.05.16-1.37.89l-20.8,49.99-20.88-49.99c-.32-.73-.64-.89-1.37-.89h-33.38v-5.32c0-8.71,5.89-12.74,13.46-12.74,4.51,0,9.43,2.34,12.9,4.43.81.48,1.37-.08,1.05-.81l-7.26-17.33c-.24-.56-.56-.89-1.13-1.21-3.55-1.85-9.35-3.47-15-3.47-17.09,0-26.93,13.06-26.93,29.67v6.77h-13.71c-.73,0-1.13.4-1.13,1.13v16.12c0,.73.4,1.13,1.13,1.13h13.71v60.79c0,.73.4,1.13,1.13,1.13h20.64c.73,0,1.13-.4,1.13-1.13v-60.79h17.66l25.64,55.71-13.79,30.31c-.4.89.08,1.29.89,1.29h22.01c.73,0,1.05-.16,1.37-.89l45.55-103.52c.32-.73-.08-1.29-.89-1.29ZM492.44,82.42c-26.12,0-44.1,18.46-44.1,42.09s17.98,42.09,44.1,42.09,44.18-18.62,44.18-42.09-18.14-42.09-44.18-42.09ZM492.53,146.83c-12.5,0-21.37-9.51-21.37-22.33s8.87-22.33,21.37-22.33,21.28,9.51,21.28,22.33-8.87,22.33-21.28,22.33ZM798.33,89.09c-1.06-1.83-2.53-3.26-4.41-4.3-1.88-1.03-3.98-1.55-6.32-1.55s-4.44.52-6.32,1.55c-1.88,1.04-3.35,2.47-4.41,4.3-1.06,1.83-1.59,3.9-1.59,6.21s.53,4.34,1.59,6.17c1.06,1.83,2.53,3.26,4.41,4.3,1.88,1.04,3.98,1.55,6.32,1.55s4.44-.52,6.32-1.55,3.35-2.47,4.41-4.3c1.06-1.83,1.59-3.88,1.59-6.17s-.53-4.38-1.59-6.21ZM796.4,100.45c-.86,1.52-2.06,2.7-3.59,3.56-1.53.85-3.27,1.28-5.2,1.28s-3.72-.43-5.25-1.28c-1.53-.85-2.72-2.04-3.57-3.56-.85-1.51-1.27-3.23-1.27-5.15s.42-3.63,1.27-5.13c.85-1.5,2.04-2.68,3.57-3.53,1.53-.85,3.28-1.28,5.25-1.28s3.67.43,5.2,1.28c1.53.85,2.73,2.04,3.59,3.56.86,1.52,1.29,3.23,1.29,5.15s-.43,3.59-1.29,5.11ZM615.56,47.75c-7.74,0-13.38,5.48-13.38,12.74s5.64,12.74,13.38,12.74,13.54-5.48,13.54-12.74-5.64-12.74-13.54-12.74ZM791.78,95.07c.82-.6,1.23-1.4,1.23-2.39s-.4-1.83-1.2-2.43c-.8-.6-1.96-.9-3.48-.9h-5.36v11.2h2.59v-4.45h1.41l3.41,4.45h3.18l-3.73-4.72c.79-.15,1.46-.4,1.96-.77ZM787.92,94.08h-2.36v-2.74h2.45c.73,0,1.29.11,1.68.34.39.23.59.58.59,1.06,0,.45-.21.79-.61,1.01-.41.23-.99.34-1.75.34ZM625.96,84.35h-20.64c-.73,0-1.13.4-1.13,1.13v78.04c0,.73.4,1.13,1.13,1.13h20.64c.73,0,1.13-.4,1.13-1.13v-78.04c0-.73-.4-1.13-1.13-1.13ZM595.56,144.58c-2.34,1.29-5.4,2.34-9.59,2.34-6.61,0-10.8-3.87-10.8-12.42v-31.77h20.16c.73,0,1.13-.4,1.13-1.13v-16.12c0-.73-.4-1.13-1.13-1.13h-20.16v-21.04c0-.89-.56-1.37-1.37-.73l-36.04,28.38c-.48.4-.65.81-.65,1.45v9.19c0,.73.4,1.13,1.13,1.13h14.03v35.15c0,19.03,10.96,27.9,26.61,27.9,6.77,0,13.3-1.77,17.17-4.03.56-.32.64-.65.64-1.21v-15.32c0-.81-.4-1.05-1.13-.64Z"></path>
</svg>
</span>
` : null}
${(item?.art_paramount) ? html`
<span aria-hidden="true" class="logo-slot mono" style="position: relative; display: flex; flex-direction: column; width: 112px; color: ${item?.fg}; opacity: ${item?.artOpacity}; transform: ${item?.layer}; transition: ${item?.layerTransition}">
<span class="logo-ph" style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 0; border-radius: 10px; border: 1.5px dashed ${item?.slotBorder}"><svg class="ph-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg><span style="font-size: 18px; font-weight: 700; letter-spacing: -0.01em">${item?.name}</span></span>
<img src="${A("5df2dfa0298d1a7396e631e9de889735-640.webp")}" alt="adobe-illustrator-2024-2026-10-29-00-54-" width="4167" height="2593" style="max-width: 100%; height: auto; display: block; object-fit: cover; width: 4167px; aspect-ratio: 4167 / 2593" />
</span>
` : null}
${(item?.art_canal) ? html`
<span aria-hidden="true" class="logo-slot" style="position: relative; display: flex; flex-direction: column; width: 140px; color: ${item?.fg}; opacity: ${item?.artOpacity}; transform: ${item?.layer}; transition: ${item?.layerTransition}">
<span class="logo-ph" style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 0; border-radius: 10px; border: 1.5px dashed ${item?.slotBorder}"><svg class="ph-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg><span style="font-size: 18px; font-weight: 700; letter-spacing: -0.01em">${item?.name}</span></span>
<svg id="uuid-6bb76379-5f8b-4a82-8777-89ab57bd1ec5" data-name="svg2659" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285.03 52.14">
  <defs>
    
  </defs>
  <path id="uuid-a71fd1e7-7410-4bbc-b10d-d3d42e68b54e" data-name="path27" class="uuid-910f435c-737e-49c6-88cb-b839efcedb34" d="M44.64,5.58c0-.51-.12-.64-.58-.96C39.9,1.93,33.67.26,27.78.26,11.67.26,0,11.48,0,27s10.58,25.14,26.1,25.14c4.3,0,7.76-.77,10.2-2.25.64-.38.71-.51.9-1.86l1.28-8.85c.07-.58.07-.83.07-.96,0-.39-.07-.57-.19-.57s-.32.06-.58.19c-.39.2-.84.32-1.41.52-3.4.96-6.54,1.6-9.04,1.6-7.51,0-12.95-5.64-12.95-13.4,0-8.41,6.15-14.24,15-14.24,3.72,0,8.15,1.15,11.04,2.95,1.16.77,1.47.9,1.73.9.38,0,.45-.06.7-1.41l1.6-8.02c.13-.64.19-.9.19-1.16M80.37,1.93h-14.82c-.9,0-1.09.13-1.48.9l-22.83,46.17c-.06.2-.13.39-.13.58,0,.26.19.45.51.45h12.44c.83,0,1.28-.26,1.54-.77l3.21-6.6c.32-.64.58-.77,1.28-.77h15.65c.51,0,.96.32,1.03.83l1.67,6.67c.13.39.45.65.9.65h11.1c.38,0,.58-.19.58-.58v-.25L81.45,2.95c-.19-.77-.44-1.03-1.09-1.03M70.55,15.97c.07,0,.26.26.32.64l3.27,13.65c.06.26.13.45.13.58s-.19.26-.64.26h-9.3c-.26,0-.45-.06-.45-.19q.07-.19.13-.38l6.22-14.11c.13-.26.26-.45.32-.45M97.11,49.38c0,.58.12.65,1.09.65h10.71c.64,0,.96-.26,1.03-.9l3.85-27.45c.07-.45.13-.83.2-.83.06,0,.25.25.51.64l15.71,27.64c.38.71.77.9,1.54.9h10.97c.83,0,1.15-.19,1.21-.77l6.42-46.43v-.19c0-.58-.19-.7-.83-.7h-11.35c-.96,0-1.15.19-1.28.96l-3.46,24.88c-.07.58-.2.97-.32.97-.13,0-.32-.26-.58-.7l-14.36-25.2c-.45-.83-.58-.9-1.54-.9h-12.18c-.58,0-.96.26-1.03.83l-6.28,46.37v.25ZM149.51,49.7c0,.19.19.32.51.32h12.32c.71,0,1.1-.19,1.35-.71l3.46-6.73c.32-.64.51-.7,1.35-.7h14.81c1.03,0,1.15.13,1.34,1.02l1.22,6.22c.13.71.45.9,1.22.9h10.97c.58,0,.77-.07.77-.39,0-.2,0-.45-.07-.64l-9.69-46.1c-.19-.83-.32-.96-1.15-.96h-14.11c-.83,0-1.09.13-1.41.83l-22.71,46.37c-.13.25-.19.45-.19.58M178.75,15.39c.07,0,.19.26.25.58l3.08,14.04c0,.19.06.45.06.64,0,.25-.26.45-.71.45h-8.66c-.64,0-.83-.12-.83-.39,0-.19.06-.38.12-.58l6.28-14.17c.2-.38.32-.58.39-.58M210.82,2.95l-6.67,46.23v.32c0,.38.13.51.58.51h26.94c.64,0,.9-.19.96-.77l1.28-9.17v-.26c0-.51-.12-.64-.64-.64h-12.89c-.58,0-.78-.19-.78-.71v-.12l4.81-35.6v-.25c0-.45-.13-.57-.64-.57h-12.12c-.51,0-.71.26-.83,1.03M268.43,31.04h15.9c.45,0,.7-.26.7-.77v-13.08c0-.64-.19-.83-.7-.83h-16.1c-.51,0-.64-.19-.64-.9V.64c0-.45-.26-.64-.84-.64h-13.08c-.38,0-.65.26-.65.64v14.81c0,.64-.19.9-.77.9h-17.19c-.45,0-.71.19-.71.7v13.15c0,.58.26.83.77.83h17.06c.58,0,.83.26.83.96v17.25c0,.51.26.77.71.77h13.15c.52,0,.71-.26.71-.9v-17.25c0-.71.13-.84.84-.84"></path>
</svg>
</span>
` : null}
${(item?.art_hue) ? html`
<span aria-hidden="true" class="logo-slot" style="position: relative; display: flex; flex-direction: column; width: 124px; color: ${item?.fg}; opacity: ${item?.artOpacity}; transform: ${item?.layer}; transition: ${item?.layerTransition}">
<span class="logo-ph" style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 0; border-radius: 10px; border: 1.5px dashed ${item?.slotBorder}"><svg class="ph-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg><span style="font-size: 18px; font-weight: 700; letter-spacing: -0.01em">${item?.name}</span></span>
<img src="${A("3703ccfdce74ce302f7d2a462a814016-640.webp")}" alt="Hue" width="2560" height="1003" style="display: block; object-fit: cover; aspect-ratio: 2560 / 1003" />
</span>
` : null}
${(item?.art_smartthings) ? html`
<span aria-hidden="true" class="logo-slot" style="position: relative; display: flex; flex-direction: column; width: 80px; color: ${item?.fg}; opacity: ${item?.artOpacity}; transform: ${item?.layer}; transition: ${item?.layerTransition}">
<span class="logo-ph" style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 0; border-radius: 10px; border: 1.5px dashed ${item?.slotBorder}"><svg class="ph-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg><span style="font-size: 18px; font-weight: 700; letter-spacing: -0.01em">${item?.name}</span></span>
<img src="${A("20e767f6e87ffe0fb4581fffa1e23a1a-640.png")}" alt="SmartThings" width="800" height="769" style="display: block" />
</span>
` : null}
${(item?.art_reglages) ? html`
<span aria-hidden="true" class="tile-art" style="position: absolute; inset: 0; pointer-events: none; opacity: ${item?.artOpacity}; transform: ${item?.layer} scale(1.07); transition: ${item?.layerTransition}; --art-bg: ${item?.artBg}; --art-x: ${item?.artX}; --art-y: ${item?.artY}; --art-w: ${item?.artW}; --art-h: ${item?.artH}; --art-clip: ${item?.artClip}"><svg class="reglages-art" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 150" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Réglages">
<defs>
<linearGradient id="rg-fond" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DCDDDE"></stop><stop offset="1" stop-color="#898B8F"></stop></linearGradient>
<linearGradient id="rg-corps" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5A5E66"></stop><stop offset="1" stop-color="#26282D"></stop></linearGradient>
<linearGradient id="rg-moyeu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F3F4F6"></stop><stop offset="1" stop-color="#9EA1A8"></stop></linearGradient>
<radialGradient id="rg-reflet" cx="0.38" cy="0.28" r="0.75"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0.32"></stop><stop offset="0.6" stop-color="#FFFFFF" stop-opacity="0"></stop></radialGradient>
<filter id="rg-ombre" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="2" stdDeviation="2.4" flood-color="#1E2026" flood-opacity="0.35"></feDropShadow></filter>
</defs>
<rect width="250" height="150" fill="url(#rg-fond)"></rect>
<g filter="url(#rg-ombre)">
<path fill="url(#rg-corps)" fill-rule="evenodd" d="M 117.48 46.47 Q 119.24 46.07 119.78 44.35 L 120.87 40.90 Q 121.41 39.18 123.20 39.04 A 36.0 36.0 0 0 1 126.80 39.04 Q 128.59 39.18 129.13 40.90 L 130.22 44.35 Q 130.76 46.07 132.52 46.47 A 29.5 29.5 0 0 1 135.69 47.50 Q 137.34 48.21 138.79 47.14 L 141.70 44.98 Q 143.15 43.91 144.68 44.85 A 36.0 36.0 0 0 1 147.59 46.97 Q 148.96 48.13 148.39 49.84 L 147.24 53.27 Q 146.67 54.98 147.85 56.34 A 29.5 29.5 0 0 1 149.81 59.04 Q 150.73 60.58 152.53 60.56 L 156.16 60.53 Q 157.96 60.51 158.64 62.18 A 36.0 36.0 0 0 1 159.75 65.60 Q 160.18 67.35 158.71 68.39 L 155.76 70.50 Q 154.30 71.54 154.45 73.33 A 29.5 29.5 0 0 1 154.45 76.67 Q 154.30 78.46 155.76 79.50 L 158.71 81.61 Q 160.18 82.65 159.75 84.40 A 36.0 36.0 0 0 1 158.64 87.82 Q 157.96 89.49 156.16 89.47 L 152.53 89.44 Q 150.73 89.42 149.81 90.96 A 29.5 29.5 0 0 1 147.85 93.66 Q 146.67 95.02 147.24 96.73 L 148.39 100.16 Q 148.96 101.87 147.59 103.03 A 36.0 36.0 0 0 1 144.68 105.15 Q 143.15 106.09 141.70 105.02 L 138.79 102.86 Q 137.34 101.79 135.69 102.50 A 29.5 29.5 0 0 1 132.52 103.53 Q 130.76 103.93 130.22 105.65 L 129.13 109.10 Q 128.59 110.82 126.80 110.96 A 36.0 36.0 0 0 1 123.20 110.96 Q 121.41 110.82 120.87 109.10 L 119.78 105.65 Q 119.24 103.93 117.48 103.53 A 29.5 29.5 0 0 1 114.31 102.50 Q 112.66 101.79 111.21 102.86 L 108.30 105.02 Q 106.85 106.09 105.32 105.15 A 36.0 36.0 0 0 1 102.41 103.03 Q 101.04 101.87 101.61 100.16 L 102.76 96.73 Q 103.33 95.02 102.15 93.66 A 29.5 29.5 0 0 1 100.19 90.96 Q 99.27 89.42 97.47 89.44 L 93.84 89.47 Q 92.04 89.49 91.36 87.82 A 36.0 36.0 0 0 1 90.25 84.40 Q 89.82 82.65 91.29 81.61 L 94.24 79.50 Q 95.70 78.46 95.55 76.67 A 29.5 29.5 0 0 1 95.55 73.33 Q 95.70 71.54 94.24 70.50 L 91.29 68.39 Q 89.82 67.35 90.25 65.60 A 36.0 36.0 0 0 1 91.36 62.18 Q 92.04 60.51 93.84 60.53 L 97.47 60.56 Q 99.27 60.58 100.19 59.04 A 29.5 29.5 0 0 1 102.15 56.34 Q 103.33 54.98 102.76 53.27 L 101.61 49.84 Q 101.04 48.13 102.41 46.97 A 36.0 36.0 0 0 1 105.32 44.85 Q 106.85 43.91 108.30 44.98 L 111.21 47.14 Q 112.66 48.21 114.31 47.50 A 29.5 29.5 0 0 1 117.48 46.47 Z M 138.60 58.89 A 4.3 4.3 0 1 0 130.00 58.89 A 4.3 4.3 0 1 0 138.60 58.89 Z M 147.90 75.00 A 4.3 4.3 0 1 0 139.30 75.00 A 4.3 4.3 0 1 0 147.90 75.00 Z M 138.60 91.11 A 4.3 4.3 0 1 0 130.00 91.11 A 4.3 4.3 0 1 0 138.60 91.11 Z M 120.00 91.11 A 4.3 4.3 0 1 0 111.40 91.11 A 4.3 4.3 0 1 0 120.00 91.11 Z M 110.70 75.00 A 4.3 4.3 0 1 0 102.10 75.00 A 4.3 4.3 0 1 0 110.70 75.00 Z M 120.00 58.89 A 4.3 4.3 0 1 0 111.40 58.89 A 4.3 4.3 0 1 0 120.00 58.89 Z M 128.60 75.00 A 3.6 3.6 0 1 0 121.40 75.00 A 3.6 3.6 0 1 0 128.60 75.00 Z"></path>
</g>
<path fill="url(#rg-reflet)" fill-rule="evenodd" d="M 117.48 46.47 Q 119.24 46.07 119.78 44.35 L 120.87 40.90 Q 121.41 39.18 123.20 39.04 A 36.0 36.0 0 0 1 126.80 39.04 Q 128.59 39.18 129.13 40.90 L 130.22 44.35 Q 130.76 46.07 132.52 46.47 A 29.5 29.5 0 0 1 135.69 47.50 Q 137.34 48.21 138.79 47.14 L 141.70 44.98 Q 143.15 43.91 144.68 44.85 A 36.0 36.0 0 0 1 147.59 46.97 Q 148.96 48.13 148.39 49.84 L 147.24 53.27 Q 146.67 54.98 147.85 56.34 A 29.5 29.5 0 0 1 149.81 59.04 Q 150.73 60.58 152.53 60.56 L 156.16 60.53 Q 157.96 60.51 158.64 62.18 A 36.0 36.0 0 0 1 159.75 65.60 Q 160.18 67.35 158.71 68.39 L 155.76 70.50 Q 154.30 71.54 154.45 73.33 A 29.5 29.5 0 0 1 154.45 76.67 Q 154.30 78.46 155.76 79.50 L 158.71 81.61 Q 160.18 82.65 159.75 84.40 A 36.0 36.0 0 0 1 158.64 87.82 Q 157.96 89.49 156.16 89.47 L 152.53 89.44 Q 150.73 89.42 149.81 90.96 A 29.5 29.5 0 0 1 147.85 93.66 Q 146.67 95.02 147.24 96.73 L 148.39 100.16 Q 148.96 101.87 147.59 103.03 A 36.0 36.0 0 0 1 144.68 105.15 Q 143.15 106.09 141.70 105.02 L 138.79 102.86 Q 137.34 101.79 135.69 102.50 A 29.5 29.5 0 0 1 132.52 103.53 Q 130.76 103.93 130.22 105.65 L 129.13 109.10 Q 128.59 110.82 126.80 110.96 A 36.0 36.0 0 0 1 123.20 110.96 Q 121.41 110.82 120.87 109.10 L 119.78 105.65 Q 119.24 103.93 117.48 103.53 A 29.5 29.5 0 0 1 114.31 102.50 Q 112.66 101.79 111.21 102.86 L 108.30 105.02 Q 106.85 106.09 105.32 105.15 A 36.0 36.0 0 0 1 102.41 103.03 Q 101.04 101.87 101.61 100.16 L 102.76 96.73 Q 103.33 95.02 102.15 93.66 A 29.5 29.5 0 0 1 100.19 90.96 Q 99.27 89.42 97.47 89.44 L 93.84 89.47 Q 92.04 89.49 91.36 87.82 A 36.0 36.0 0 0 1 90.25 84.40 Q 89.82 82.65 91.29 81.61 L 94.24 79.50 Q 95.70 78.46 95.55 76.67 A 29.5 29.5 0 0 1 95.55 73.33 Q 95.70 71.54 94.24 70.50 L 91.29 68.39 Q 89.82 67.35 90.25 65.60 A 36.0 36.0 0 0 1 91.36 62.18 Q 92.04 60.51 93.84 60.53 L 97.47 60.56 Q 99.27 60.58 100.19 59.04 A 29.5 29.5 0 0 1 102.15 56.34 Q 103.33 54.98 102.76 53.27 L 101.61 49.84 Q 101.04 48.13 102.41 46.97 A 36.0 36.0 0 0 1 105.32 44.85 Q 106.85 43.91 108.30 44.98 L 111.21 47.14 Q 112.66 48.21 114.31 47.50 A 29.5 29.5 0 0 1 117.48 46.47 Z M 138.60 58.89 A 4.3 4.3 0 1 0 130.00 58.89 A 4.3 4.3 0 1 0 138.60 58.89 Z M 147.90 75.00 A 4.3 4.3 0 1 0 139.30 75.00 A 4.3 4.3 0 1 0 147.90 75.00 Z M 138.60 91.11 A 4.3 4.3 0 1 0 130.00 91.11 A 4.3 4.3 0 1 0 138.60 91.11 Z M 120.00 91.11 A 4.3 4.3 0 1 0 111.40 91.11 A 4.3 4.3 0 1 0 120.00 91.11 Z M 110.70 75.00 A 4.3 4.3 0 1 0 102.10 75.00 A 4.3 4.3 0 1 0 110.70 75.00 Z M 120.00 58.89 A 4.3 4.3 0 1 0 111.40 58.89 A 4.3 4.3 0 1 0 120.00 58.89 Z M 128.60 75.00 A 3.6 3.6 0 1 0 121.40 75.00 A 3.6 3.6 0 1 0 128.60 75.00 Z"></path>
<path fill="none" stroke="#FFFFFF" stroke-opacity="0.22" stroke-width="0.6" fill-rule="evenodd" d="M 117.48 46.47 Q 119.24 46.07 119.78 44.35 L 120.87 40.90 Q 121.41 39.18 123.20 39.04 A 36.0 36.0 0 0 1 126.80 39.04 Q 128.59 39.18 129.13 40.90 L 130.22 44.35 Q 130.76 46.07 132.52 46.47 A 29.5 29.5 0 0 1 135.69 47.50 Q 137.34 48.21 138.79 47.14 L 141.70 44.98 Q 143.15 43.91 144.68 44.85 A 36.0 36.0 0 0 1 147.59 46.97 Q 148.96 48.13 148.39 49.84 L 147.24 53.27 Q 146.67 54.98 147.85 56.34 A 29.5 29.5 0 0 1 149.81 59.04 Q 150.73 60.58 152.53 60.56 L 156.16 60.53 Q 157.96 60.51 158.64 62.18 A 36.0 36.0 0 0 1 159.75 65.60 Q 160.18 67.35 158.71 68.39 L 155.76 70.50 Q 154.30 71.54 154.45 73.33 A 29.5 29.5 0 0 1 154.45 76.67 Q 154.30 78.46 155.76 79.50 L 158.71 81.61 Q 160.18 82.65 159.75 84.40 A 36.0 36.0 0 0 1 158.64 87.82 Q 157.96 89.49 156.16 89.47 L 152.53 89.44 Q 150.73 89.42 149.81 90.96 A 29.5 29.5 0 0 1 147.85 93.66 Q 146.67 95.02 147.24 96.73 L 148.39 100.16 Q 148.96 101.87 147.59 103.03 A 36.0 36.0 0 0 1 144.68 105.15 Q 143.15 106.09 141.70 105.02 L 138.79 102.86 Q 137.34 101.79 135.69 102.50 A 29.5 29.5 0 0 1 132.52 103.53 Q 130.76 103.93 130.22 105.65 L 129.13 109.10 Q 128.59 110.82 126.80 110.96 A 36.0 36.0 0 0 1 123.20 110.96 Q 121.41 110.82 120.87 109.10 L 119.78 105.65 Q 119.24 103.93 117.48 103.53 A 29.5 29.5 0 0 1 114.31 102.50 Q 112.66 101.79 111.21 102.86 L 108.30 105.02 Q 106.85 106.09 105.32 105.15 A 36.0 36.0 0 0 1 102.41 103.03 Q 101.04 101.87 101.61 100.16 L 102.76 96.73 Q 103.33 95.02 102.15 93.66 A 29.5 29.5 0 0 1 100.19 90.96 Q 99.27 89.42 97.47 89.44 L 93.84 89.47 Q 92.04 89.49 91.36 87.82 A 36.0 36.0 0 0 1 90.25 84.40 Q 89.82 82.65 91.29 81.61 L 94.24 79.50 Q 95.70 78.46 95.55 76.67 A 29.5 29.5 0 0 1 95.55 73.33 Q 95.70 71.54 94.24 70.50 L 91.29 68.39 Q 89.82 67.35 90.25 65.60 A 36.0 36.0 0 0 1 91.36 62.18 Q 92.04 60.51 93.84 60.53 L 97.47 60.56 Q 99.27 60.58 100.19 59.04 A 29.5 29.5 0 0 1 102.15 56.34 Q 103.33 54.98 102.76 53.27 L 101.61 49.84 Q 101.04 48.13 102.41 46.97 A 36.0 36.0 0 0 1 105.32 44.85 Q 106.85 43.91 108.30 44.98 L 111.21 47.14 Q 112.66 48.21 114.31 47.50 A 29.5 29.5 0 0 1 117.48 46.47 Z M 138.60 58.89 A 4.3 4.3 0 1 0 130.00 58.89 A 4.3 4.3 0 1 0 138.60 58.89 Z M 147.90 75.00 A 4.3 4.3 0 1 0 139.30 75.00 A 4.3 4.3 0 1 0 147.90 75.00 Z M 138.60 91.11 A 4.3 4.3 0 1 0 130.00 91.11 A 4.3 4.3 0 1 0 138.60 91.11 Z M 120.00 91.11 A 4.3 4.3 0 1 0 111.40 91.11 A 4.3 4.3 0 1 0 120.00 91.11 Z M 110.70 75.00 A 4.3 4.3 0 1 0 102.10 75.00 A 4.3 4.3 0 1 0 110.70 75.00 Z M 120.00 58.89 A 4.3 4.3 0 1 0 111.40 58.89 A 4.3 4.3 0 1 0 120.00 58.89 Z M 128.60 75.00 A 3.6 3.6 0 1 0 121.40 75.00 A 3.6 3.6 0 1 0 128.60 75.00 Z"></path>
<path fill="url(#rg-moyeu)" fill-rule="evenodd" d="M 135.50 75.00 A 10.5 10.5 0 1 0 114.50 75.00 A 10.5 10.5 0 1 0 135.50 75.00 Z M 128.60 75.00 A 3.6 3.6 0 1 0 121.40 75.00 A 3.6 3.6 0 1 0 128.60 75.00 Z"></path>
<circle cx="125.0" cy="75.0" r="10.2" fill="none" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="0.5"></circle>
</svg></span>
` : null}
<span aria-hidden="true" data-glare="1" style="position: absolute; inset: 0; pointer-events: none; opacity: ${item?.sheen}; background: ${item?.sheenBg}; transition: opacity 240ms ease"></span>
${(item?.hasPeek) ? html`
<span aria-hidden="true" data-peek="1" style="position: absolute; inset: 0; overflow: hidden; border-radius: inherit; pointer-events: none; opacity: ${item?.peekOpacity}; transition: opacity 700ms ease; background: radial-gradient(circle at 72% 46%, ${item?.pk?.glowA} 0%, rgba(0, 0, 0, 0) 48%), linear-gradient(180deg, ${item?.pk?.sky0} 0%, ${item?.pk?.sky1} 34%, ${item?.pk?.sky2} 46%, ${item?.pk?.sky2} 100%)">
<svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style="position: absolute; inset: 0; width: 100%; height: 100%; transform-origin: 62% 48%; animation: ${item?.peekAnim}">
<circle cx="1380" cy="498" r="54" style="fill: ${item?.pk?.sun}"></circle>
<path d="M0 520 C 180 470, 320 490, 480 450 S 820 420, 1000 460 S 1300 520, 1460 470 S 1780 430, 1920 460 V1080 H0 Z" style="fill: ${item?.pk?.r1}"></path>
<path d="M0 620 C 220 570, 380 590, 560 545 S 900 585, 1100 550 S 1500 515, 1700 570 S 1880 590, 1920 580 V1080 H0 Z" style="fill: ${item?.pk?.r2}"></path>
<path d="M0 730 C 260 680, 480 710, 700 670 S 1080 635, 1320 690 S 1700 750, 1920 695 V1080 H0 Z" style="fill: ${item?.pk?.r3}"></path>
<path d="M0 860 C 300 820, 560 850, 860 810 S 1400 790, 1920 840 V1080 H0 Z" style="fill: ${item?.pk?.r4}"></path>
</svg>
${(item?.hasPeekImg) ? html`
<img aria-hidden="true" alt="" src="${item?.peekImg}" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transform-origin: 62% 48%; animation: ${item?.peekAnim}" />
` : null}
<span style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 38%)"></span>
</span>
` : null}
${(item?.hasBadge) ? html`
<span aria-hidden="true" style="position: absolute; left: 0; right: 0; bottom: 14px; display: flex; justify-content: center; pointer-events: none; transform: ${item?.layer}; transition: ${item?.layerTransition}"><span style="padding: 3px 10px; border-radius: 999px; background: ${item?.badgeBg}; color: ${item?.badgeFg}; font-size: 14px; font-weight: 600; letter-spacing: 0.01em">${item?.badge}</span></span>
` : null}
<span aria-hidden="true" class="${item?.rimClass}" style="opacity: ${item?.rimOpacity}"><span class="tile-rim-rainbow" style="opacity: ${item?.rimRainbow}; animation: ${item?.rimSpin}"></span><span class="tile-rim-light" style="background: ${item?.rimLight}"></span></span>
<span aria-hidden="true" class="tile-flare" style="left: ${item?.flareX}; opacity: ${item?.flareOpacity}"></span>
</button>
</div>
`)}
</div>

</div>

${(v?.isApps) ? html`
<button type="button" aria-label="Revenir à l’accueil" onClick="${v?.goHome}" style="position: absolute; left: 0; top: 0; width: 1600px; height: 112px; background: transparent"></button>
` : null}

${(v?.editBar?.on) ? html`
<div style="position: absolute; z-index: 20; left: 0; right: 0; top: 36px; display: flex; justify-content: center; pointer-events: none; animation: ${v?.editBar?.anim}">
<div class="lg" style="pointer-events: auto; display: flex; align-items: center; gap: 20px; padding: 10px 10px 10px 26px; border-radius: 999px; background: rgba(12, 14, 22, 0.55); border: 1px solid rgba(255, 255, 255, 0.1); -webkit-backdrop-filter: blur(20px) saturate(160%); backdrop-filter: blur(20px) saturate(160%); box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3); color: #F5F5F7">
<span style="font-size: 18px; font-weight: 600">Modifier l’accueil</span>
<span style="font-size: 17px; font-weight: 400; color: rgba(255, 255, 255, 0.7)">${v?.editBar?.text}</span>
<button type="button" onClick="${v?.editBar?.done}" style="padding: 10px 20px; border-radius: 999px; background: #F5F5F7; color: #0B0C0F; font-size: 17px; font-weight: 600">Terminé</button>
</div>
</div>
` : null}

<div aria-hidden="${v?.lock?.ariaHidden}" onClick="${v?.lock?.unlock}" style="position: absolute; inset: 0; overflow: hidden; opacity: ${v?.lock?.opacity}; visibility: ${v?.lock?.visibility}; pointer-events: ${v?.lock?.pointer}; transition: ${v?.lock?.transition}; cursor: pointer">
<div style="position: absolute; inset: 0; transform-origin: 50% 40%; animation: ${v?.lock?.drift}">
<img aria-hidden="true" alt="" src="${A("4f5e09ca6c8aa580ccb346464c135574.webp")}" style="position: absolute; left: 0; top: 0; width: 1920px; height: 1388px; max-width: none; display: block" />
<div style="position: absolute; inset: 0; transform: translateY(${v?.lock?.clockShift}); opacity: ${v?.lock?.clockOpacity}; transition: ${v?.lock?.clockTransition}">
<div style="position: absolute; inset: 0; overflow: hidden; clip-path: url(#veille-heure); -webkit-clip-path: url(#veille-heure)">
<img aria-hidden="true" alt="" src="${A("4f5e09ca6c8aa580ccb346464c135574.webp")}" style="position: absolute; left: 0; top: 0; width: 1920px; height: 1388px; max-width: none; display: block; transform-origin: 960px 328px; transform: scale(1.08); filter: blur(5px) saturate(1.45) brightness(1.15)" />
<div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(220, 240, 255, 0.1) 100%)"></div>
</div>
<svg aria-hidden="true" viewBox="0 0 1920 1080" style="position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; filter: drop-shadow(0 8px 26px rgba(20, 45, 80, 0.28))">
<defs>
<clipPath id="veille-heure" clipPathUnits="userSpaceOnUse"><text class="veille-chiffres ${v?.lock?.fontClass}" x="960" y="0" text-anchor="middle" transform="translate(0 518) scale(1 ${v?.lock?.k})">${v?.lock?.heureTxt}</text></clipPath>
<linearGradient id="veille-lisere" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#FFFFFF" stop-opacity="1"></stop>
<stop offset="0.4" stop-color="#FFFFFF" stop-opacity="0.55"></stop>
<stop offset="0.7" stop-color="#FFFFFF" stop-opacity="0.35"></stop>
<stop offset="1" stop-color="#FFFFFF" stop-opacity="0.85"></stop>
</linearGradient>
<filter id="veille-lueur" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="2.5"></feGaussianBlur></filter>
<filter id="veille-net" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter>
</defs>
<g clip-path="url(#veille-heure)">
<text class="veille-chiffres ${v?.lock?.fontClass}" x="960" y="0" text-anchor="middle" transform="translate(0 518) scale(1 ${v?.lock?.k})" fill="none" stroke="#FFFFFF" stroke-opacity="0.32" stroke-width="16" vector-effect="non-scaling-stroke" filter="url(#veille-lueur)">${v?.lock?.heureTxt}</text>
<g transform="translate(-3.5 -3.5)"><text class="veille-chiffres ${v?.lock?.fontClass}" x="960" y="0" text-anchor="middle" transform="translate(0 518) scale(1 ${v?.lock?.k})" fill="none" stroke="#FFFFFF" stroke-opacity="1" stroke-width="6" vector-effect="non-scaling-stroke">${v?.lock?.heureTxt}</text></g>
<g transform="translate(3 3.5)"><text class="veille-chiffres ${v?.lock?.fontClass}" x="960" y="0" text-anchor="middle" transform="translate(0 518) scale(1 ${v?.lock?.k})" fill="none" stroke="#FFFFFF" stroke-opacity="0.55" stroke-width="5" vector-effect="non-scaling-stroke">${v?.lock?.heureTxt}</text></g>
</g>
<text class="veille-chiffres ${v?.lock?.fontClass}" x="960" y="0" text-anchor="middle" transform="translate(0 518) scale(1 ${v?.lock?.k})" fill="none" stroke="url(#veille-lisere)" stroke-width="3.2" vector-effect="non-scaling-stroke">${v?.lock?.heureTxt}</text>
</svg>
</div>
<img aria-hidden="true" alt="" src="${A("e976f5c87b3654b062bf30f2fc5727dc.webp")}" style="position: absolute; left: 0; top: 0; width: 1920px; height: 1388px; max-width: none; display: block; pointer-events: none" />
<div style="position: absolute; left: 0; right: 0; top: 60px; height: 56px; display: flex; justify-content: center; align-items: center; gap: 18px; font-size: 26px; font-weight: 500; letter-spacing: -0.005em; color: rgba(255, 255, 255, 0.95); text-shadow: 0 1px 2px rgba(20, 40, 70, 0.35), 0 2px 18px rgba(20, 40, 70, 0.4); transform: translateY(${v?.lock?.topShift}); opacity: ${v?.lock?.clockOpacity}; transition: ${v?.lock?.clockTransition}">
<span>${v?.lock?.date}</span>
<span style="display: inline-flex; align-items: center; gap: 8px; font-weight: 400">
<svg aria-hidden="true" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path></svg>
<span>${v?.lock?.meteo}</span>
</span>
</div>
</div>
</div>

<div style="position: absolute; top: 60px; right: 56px; height: 56px; display: flex; align-items: center; gap: 24px">
<span role="img" aria-label="${v?.meteo?.aria}" style="display: flex; align-items: center; gap: 10px; font-size: 30px; font-weight: 500; letter-spacing: -0.01em; font-variant-numeric: tabular-nums; text-shadow: 0 2px 16px rgba(0, 0, 0, 0.35); opacity: ${v?.meteo?.opacity}; transition: opacity 400ms ease">
<span aria-hidden="true" style="display: flex; color: #F5F5F7">
${(v?.meteo?.soleil) ? html`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>` : null}
${(v?.meteo?.lune) ? html`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>` : null}
${(v?.meteo?.eclaircie) ? html`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path></svg>` : null}
${(v?.meteo?.eclaircieNuit) ? html`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"></path><path d="M10.1 9A6 6 0 0 1 16 4a4 4 0 0 0 6 6 6 6 0 0 1-3 5.197"></path></svg>` : null}
${(v?.meteo?.nuage) ? html`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>` : null}
${(v?.meteo?.brouillard) ? html`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M16 17H7"></path><path d="M17 21H9"></path></svg>` : null}
${(v?.meteo?.bruine) ? html`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M8 19v1"></path><path d="M8 14v1"></path><path d="M16 19v1"></path><path d="M16 14v1"></path><path d="M12 21v1"></path><path d="M12 16v1"></path></svg>` : null}
${(v?.meteo?.pluie) ? html`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg>` : null}
${(v?.meteo?.neige) ? html`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M8 15h.01"></path><path d="M8 19h.01"></path><path d="M12 17h.01"></path><path d="M12 21h.01"></path><path d="M16 15h.01"></path><path d="M16 19h.01"></path></svg>` : null}
${(v?.meteo?.orage) ? html`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"></path><path d="m13 12-3 5h4l-3 5"></path></svg>` : null}
</span>
<span aria-hidden="true">${v?.meteo?.temp}</span>
</span>
<span style="font-size: 30px; font-weight: 500; letter-spacing: -0.01em; font-variant-numeric: tabular-nums; text-shadow: 0 2px 16px rgba(0, 0, 0, 0.35); opacity: ${v?.topClockOpacity}; transition: opacity 400ms ease">${v?.heure}</span>
<button type="button" class="lg" aria-label="Ouvrir le hub" onClick="${v?.hub?.go}" onMouseEnter="${v?.hub?.enter}" onFocus="${v?.hub?.enter}" onMouseMove="${v?.hub?.move}" onMouseLeave="${v?.hub?.leave}" onMouseDown="${v?.hub?.down}" onMouseUp="${v?.hub?.up}" style="position: relative; overflow: hidden; width: 56px; height: 56px; border-radius: 28px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; color: ${v?.hub?.fg}; text-decoration: none; background: ${v?.hub?.bg}; border: 1px solid ${v?.hub?.border}; box-shadow: ${v?.hub?.shadow}; transform: ${v?.hub?.transform}; transition: ${v?.hub?.transition}; animation: ${v?.hub?.bounce}; backdrop-filter: blur(14px) saturate(185%) brightness(1.06); -webkit-backdrop-filter: blur(14px) saturate(185%) brightness(1.06); --lg-fx: ${v?.hub?.fx}; will-change: transform">
<span aria-hidden="true" style="position: absolute; inset: 0; pointer-events: none; opacity: ${v?.hub?.sheen}; background: ${v?.hub?.sheenBg}; transition: opacity 240ms ease"></span>
<svg aria-hidden="true" width="26" height="26" style="position: relative; transform: ${v?.hub?.layer}; transition: ${v?.hub?.layerTransition}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</button>
<a href="Hub.dc.html" data-hub-link="1" tabindex="-1" aria-hidden="true" style="position: absolute; width: 1px; height: 1px; overflow: hidden; opacity: 0; pointer-events: none"></a>
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
<button type="button" data-launch-overlay="1" aria-label="Revenir à l’accueil" onClick="${v?.launch?.back}" style="position: absolute; z-index: 30; left: 0; top: 0; width: 1920px; height: 1080px; clip-path: ${v?.launch?.clip}; -webkit-clip-path: ${v?.launch?.clip}; background: ${v?.launch?.bg}; opacity: ${v?.launch?.opacity}; overflow: hidden; cursor: pointer; transition: ${v?.launch?.transition}; will-change: clip-path">
<div style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; color: ${v?.launch?.fg}; opacity: ${v?.launch?.contentOpacity}; transform: scale(${v?.launch?.contentScale}); transition: ${v?.launch?.contentTransition}">
<span style="font-size: 56px; font-weight: 700; letter-spacing: -0.02em">${v?.launch?.name}</span>
<span style="margin-top: -10px; font-size: 22px; font-weight: 400; opacity: 0.8">${v?.launch?.sub}</span>
<span style="font-size: 18px; font-weight: 500; opacity: 0.55">${v?.launch?.hint}</span>
</div>
</button>
` : null}

</div>`;
}

export function makeLogic(DCLogic) {
class Component extends DCLogic {
  componentDidMount() {
    this._sndPrev = this._sndState();
    this._timer = setInterval(() => this.forceUpdate(), 30000);
    this._schedule();
    // Télécommande simulée au clavier : flèches, Entrée = OK, ⌫ ou Échap = Retour.
    // Hauteur des chiffres de l’écran de veille : mesurée une fois la police chargée, pour qu’ils aillent pile du dessous de la date jusque derrière les montagnes.
    this._measureClock();
    if (typeof document !== "undefined" && document.fonts) {
      Promise.all([document.fonts.load('500 520px "Heure Veille"'), document.fonts.load('500 520px "Inter"'), document.fonts.load('700 600px "Arizona Heure"')]).catch(() => {}).then(() => this._measureClock());
      document.fonts.addEventListener && document.fonts.addEventListener("loadingdone", this._onFonts = () => this._measureClock());
    }
    // Télécommande prioritaire : après une touche, le survol de la souris est ignoré tant qu’elle ne bouge pas vraiment.
    // (Quand la grille défile sous une souris immobile, le navigateur « survole » la tuile qui passe dessous : la sélection sautait.)
    this._onMM = (e) => {
      const p = e.screenX + "," + e.screenY;
      if (this._lastMM !== undefined && this._lastMM !== p) { this._kbdMode = false; this._armIdle(); }
      if (this._dragging) this._dragTo(e.clientX, e.clientY);
      this._lastMM = p;
    };
    if (typeof window !== "undefined") window.addEventListener("mousemove", this._onMM, true);
    // Appui long (OK maintenu ou clic maintenu) et glisser-déposer du mode « modifier ».
    this._onKeyUp = (e) => this._keyUp(e);
    this._onMouseUp = () => this._dragEnd();
    if (typeof window !== "undefined") {
      window.addEventListener("keyup", this._onKeyUp);
      window.addEventListener("mouseup", this._onMouseUp, true);
    }
    this._armIdle();
    this._onKey = (e) => this._key(e);
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", this._onKey);
      window.__dcRemote = "main";
    }
    this._watchMode(() => {
      clearTimeout(this._lt1);
      clearTimeout(this._lt2);
      clearTimeout(this._dwell);
      clearTimeout(this._hubT);
      this._dwellFor = null;
      this.setState({ launch: null, peek: null, tilt: null, pressed: false, view: null, focus: null });
    });
  }

  componentWillUnmount() {
    clearInterval(this._timer);
    clearTimeout(this._auto);
    clearTimeout(this._okT);
    clearTimeout(this._hubT);
    clearTimeout(this._rowT);
    clearTimeout(this._bounceT);
    clearTimeout(this._cardBounceT);
    clearTimeout(this._measureT);
    clearTimeout(this._idleT);
    if (typeof window !== "undefined") { window.removeEventListener("keydown", this._onKey); window.removeEventListener("mousemove", this._onMM, true); window.removeEventListener("keyup", this._onKeyUp); window.removeEventListener("mouseup", this._onMouseUp, true); }
    clearTimeout(this._holdT);
    if (this._onFonts && typeof document !== "undefined" && document.fonts && document.fonts.removeEventListener) document.fonts.removeEventListener("loadingdone", this._onFonts);
    clearTimeout(this._lt1);
    clearTimeout(this._lt2);
    clearTimeout(this._dwell);
    if (typeof cancelAnimationFrame !== "undefined") {
      cancelAnimationFrame(this._nf1);
      cancelAnimationFrame(this._nf2);
      cancelAnimationFrame(this._tiltRaf);
    }
    if (this._mo) this._mo.disconnect();
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

  // Lance fn deux images plus tard : l’état de départ est forcément affiché avant que l’animation parte.
  _nextFrame(fn) {
    if (typeof requestAnimationFrame === "undefined") { this._lt1 = setTimeout(fn, 40); return; }
    cancelAnimationFrame(this._nf1);
    cancelAnimationFrame(this._nf2);
    this._nf1 = requestAnimationFrame(() => { this._nf2 = requestAnimationFrame(fn); });
  }

  // Ouverture d’une appli : la tuile s’agrandit jusqu’au plein écran, puis se referme dans sa tuile au retour.
  _rect(root, el) {
    const rr = root.getBoundingClientRect();
    const k = rr.width / 1920 || 1;
    const r = el.getBoundingClientRect();
    return { x: (r.left - rr.left) / k, y: (r.top - rr.top) / k, w: r.width / k, h: r.height / k };
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

  _launch(it, el) {
    // Réglages TV : panneau système par-dessus le launcher, pas une appli plein écran.
    if (it.sys) { this._set({ focus: it.id, pressed: false }); this._openSys(); return; }
    const root = el && el.closest ? el.closest("[data-launcher]") : null;
    clearTimeout(this._lt1);
    clearTimeout(this._lt2);
    if (!root) {
      this.setState((s) => Object.assign({ lastOpen: it.id, focus: it.id }, this._opened(s, it.id)));
      return;
    }
    // Appli pas encore installée : on ouvre sa page dans le store (Samsung Apps) au lieu de l’appli.
    // « Ajouter » ouvre le store d’applis de Tizen (Samsung Apps) ; une appli pas encore installée ouvre sa page dans ce store.
    const store = it.installed === false || !!it.add;
    const L = {
      id: it.id,
      name: it.add ? "Apps" : it.name,
      sub: it.add ? "Store Samsung (Tizen) · choisis une appli à ajouter" : store ? "Pas encore installée · page du Samsung Apps" : (it.launchSub || ""),
      hint: it.source ? "Entrée HDMI · clique pour revenir à l’accueil" : store ? "Clique pour revenir aux applis" : "Clique pour revenir à l’accueil",
      phase: "start",
      rect: this._rect(root, el),
      startBg: it.launchBg || it.artBg || getComputedStyle(el).backgroundColor,
      endBg: it.source ? (it.tint || "#000000") : "#0B0C10"
    };
    this.setState({ launch: L, tilt: null, pressed: false });
    this._nextFrame(() => this.setState((s) => (s.launch ? { launch: Object.assign({}, s.launch, { phase: "grow" }) } : {})));
    this._lt2 = setTimeout(() => this.setState((s) => (store
      ? { launch: Object.assign({}, s.launch, { phase: "open" }), focus: it.id }
      : Object.assign({ launch: Object.assign({}, s.launch, { phase: "open" }), lastOpen: it.id, focus: it.id, lastFav: it.id, view: "home" }, this._opened(s, it.id)))), 640);
  }

  _launchHero(r, el) {
    clearTimeout(this._lt1);
    clearTimeout(this._lt2);
    const root = el && el.closest ? el.closest("[data-launcher]") : null;
    const device = r.app === "ps5" || r.app === "switch";
    const L = {
      id: r.app,
      name: device ? r.name : r.title,
      sub: device ? (r.app === "ps5" ? "Entrée HDMI 1" : "Entrée HDMI 2") : "Sur " + r.name,
      hint: "Clique pour revenir",
      fromHero: true,
      card: root ? r.key : null,
      phase: "start",
      rect: root ? this._rect(root, el) : { x: 64, y: 64, w: 1792, h: 952 },
      startBg: r.bg,
      endBg: r.endBg || "#0B0C10"
    };
    this.setState({ launch: L, tilt: null, pressed: false });
    this._nextFrame(() => this.setState((s) => (s.launch ? { launch: Object.assign({}, s.launch, { phase: "grow" }) } : {})));
    // La reco reprise passe en tête de rangée : au retour, l’écran se referme dans sa nouvelle vignette (la première).
    this._lt2 = setTimeout(() => this.setState((s) => Object.assign({
      launch: Object.assign({}, s.launch, { phase: "open", card: s.launch && s.launch.card != null ? "0" : null }),
      lastOpen: r.app, focus: r.app, lastFav: r.app
    }, this._opened(s, r.app))), 640);
  }

  // Appli ouverte : elle passe en tête des « récentes » ; si elle a une reco, l’accueil affiche cette reco.
  _opened(s, id) {
    const recent = [id].concat((s.recent || []).filter((x) => x !== id));
    const hasReco = (this._recoApps || []).indexOf(id) >= 0;
    return hasReco ? { recent: recent, idx: 0 } : { recent: recent };
  }

  // Hub : depuis la grille d’applis ou le plein écran, l’accueil revient d’abord en douceur (même mouvement que le défilement),
  // puis le hub s’ouvre. Le bouton n’est pas un lien : rien ne part avant la fin du mouvement.
  _openHub() {
    if (!this._live()) return;
    const s = this.state || {};
    if (s.launch) return;
    const v = s.view || this._baseView();
    const go = () => {
      const root = this._rootEl();
      const a = root ? root.querySelector("a[data-hub-link]") : null;
      if (typeof window !== "undefined") window.__dcRemote = "hub";
      this._snd("hub");
      if (a) a.click();
    };
    clearTimeout(this._hubT);
    // Un seul son pour « ouvrir le hub », même si l’accueil glisse d’abord en place.
    this._sndQuiet = Date.now() + 900;
    if (v === "home") { go(); return; }
    this.setState({ view: "home", focus: "hub", tilt: null, pressed: false });
    this._hubT = setTimeout(go, (this.props.mouvement ?? true) ? (v === "apps" ? 760 : 600) : 0);
  }

  // Étirement vertical des chiffres : haut des chiffres à 138 px (sous la date), pied à 518 px (derrière la tête de Jason),
  // quelle que soit la police réellement chargée (SF Pro Compressed sur ton ordi, Inter sinon).
  _measureClock() {
    if (typeof document === "undefined") return;
    const c = this._mc || (this._mc = document.createElement("canvas"));
    const ctx = c.getContext && c.getContext("2d");
    if (!ctx) return;
    const el = document.querySelector("text.veille-chiffres");
    const cs = el ? getComputedStyle(el) : null;
    const fam = cs ? cs.fontFamily : '"Heure Veille", "SF Pro", "Inter", sans-serif';
    ctx.font = (cs ? cs.fontWeight : "500") + " " + (cs ? cs.fontSize : "520px") + " " + fam;
    const asc = ctx.measureText("0123456789").actualBoundingBoxAscent;
    if (!asc) return;
    const k = Math.round(((518 - 178) / asc) * 1000) / 1000;
    if (Math.abs(((this.state || {}).clockK || 0) - k) > 0.004) this.setState({ clockK: k });
  }

  // Inactivité : sans aucune action pendant « veilleApres » secondes (90 par défaut, avant l’économiseur d’écran
  // de la S95F qui part après 2 min d’image fixe), l’écran de veille s’affiche. Pas pendant une appli ou les réglages.
  _armIdle() {
    clearTimeout(this._idleT);
    const secs = Math.max(5, parseInt(this.props.veilleApres, 10) || 90);
    this._idleT = setTimeout(() => this._sleep(), secs * 1000);
  }

  _sleep() {
    const s = this.state || {};
    const v = s.view || this._baseView();
    if (!this._live() || v === "veille" || s.launch || s.sys || s.edit) { this._armIdle(); return; }
    this._beforeVeille = { view: v, focus: s.focus };
    this.setState({ view: "veille", tilt: null, pressed: false });
  }

  // Réveil : on retrouve l’écran tel qu’il était avant la veille (l’accueil si la veille était affichée d’office).
  _wakeUp() {
    const b = this._beforeVeille || { view: "home" };
    this._beforeVeille = null;
    this.setState({ view: b.view, focus: b.focus || (this.state || {}).focus, tilt: null, pressed: false });
    this._armIdle();
  }

  _baseView() {
    return this.props.ecranVeille ? "veille" : this.props.vueApplis ? "apps" : "home";
  }

  _rootEl() {
    if (this._root && this._root.isConnected !== false) return this._root;
    return typeof document !== "undefined" ? document.querySelector("[data-launcher]") : null;
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

  // Quel son pour ce qui vient de changer à l’écran (un seul à la fois, le plus parlant).
  _sndState() {
    const s = this.state || {};
    const L = s.launch, S = s.sys;
    return {
      focus: s.focus, view: s.view || this._baseView(), idx: s.idx, edit: !!s.edit, carry: s.carry || null,
      order: (s.order || []).join(","), pressed: !!s.pressed,
      launch: L ? L.phase : null, sys: S ? S.phase : null, sysIdx: S ? S.idx : 0
    };
  }

  componentDidUpdate() {
    const cur = this._sndState();
    const p = this._sndPrev;
    this._sndPrev = cur;
    if (!p) return;
    const byKey = Date.now() - (this._sndKeyAt || 0) < 450;
    if (cur.pressed && !p.pressed && !cur.edit) { this._sndPressAt = Date.now(); this._snd("bulle"); return; }
    if (cur.launch && !p.launch) { if (Date.now() - (this._sndPressAt || 0) > 400) this._snd("bulle"); return; }
    if (cur.launch === "round" && p.launch === "open") { this._snd("retour"); return; }
    if (cur.launch || p.launch) return;
    if (cur.sys && !p.sys) { this._snd("panneau"); return; }
    if (cur.sys) {
      if (cur.sys === "off" && p.sys !== "off") this._snd("retour");
      else if (byKey && cur.sysIdx !== p.sysIdx) this._snd("glide", { volume: 0.8 });
      return;
    }
    if (cur.edit && !p.edit) { this._snd("edition"); return; }
    if (!cur.edit && p.edit) { this._snd("fin"); return; }
    if (cur.edit) {
      if (cur.carry && !p.carry) { this._snd("prise"); return; }
      if (!cur.carry && p.carry) { this._snd("pose"); return; }
      if (cur.carry) { if (cur.order !== p.order) this._snd("deplace"); return; }
    }
    if (p.view === "veille" && cur.view !== "veille") { this._snd("reveil"); return; }
    if (cur.view === "veille") return;
    if (Date.now() < (this._sndQuiet || 0)) return;
    if (byKey && (cur.focus !== p.focus || cur.view !== p.view || cur.idx !== p.idx)) {
      this._snd("glide", { volume: cur.edit ? 0.8 : 1 });
    }
  }

  // Empreinte de l’écran : si une flèche ne change rien (bord de la grille), petit « bump ».
  _sndSig() {
    const s = this.state || {};
    return [s.focus, s.view, s.idx, s.carry, (s.order || []).join(","), s.sys ? s.sys.idx : ""].join("|");
  }

  _key(e) {
    if (!e || e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName || ""))) return;
    if (!this._live()) return;
    if (typeof window !== "undefined" && window.__dcRemote && window.__dcRemote !== "main") return;
    const k = e.keyCode === 10009 ? "back"
      : { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", Enter: "ok", Escape: "back", Backspace: "back" }[e.key];
    if (!k) return;
    this._kbdMode = true;
    this._armIdle();
    e.preventDefault();
    // OK sur une tuile : l’action part au relâchement ; maintenu 0,6 s, on passe en mode « modifier l’accueil ».
    if (k === "ok") {
      const s0 = this.state || {};
      const N0 = this._nav;
      const onTile = N0 && (N0.view === "home" || N0.view === "apps") && s0.focus !== "hub" && !s0.edit && !s0.launch && !s0.sys;
      if (onTile) {
        if (!e.repeat && !this._holdPending) {
          this._holdPending = true;
          this._holdFired = false;
          clearTimeout(this._holdT);
          this._holdT = setTimeout(() => { this._holdFired = true; this._startEdit(); }, 600);
        }
        return;
      }
      if (e.repeat) return;
    }
    // Touche maintenue : un pas toutes les 110 ms, comme une télécommande.
    const now = Date.now();
    if (e.repeat && now - (this._keyAt || 0) < 110) return;
    this._keyAt = now;
    this._sndKeyAt = now;
    const before = /^(left|right|up|down)$/.test(k) && !(this.state || {}).launch ? this._sndSig() : null;
    this._remote(k);
    if (before !== null) setTimeout(() => { if (this._sndSig() === before) this._snd("bump", { volume: 0.8 }); }, 0);
  }

  _keyUp(e) {
    if (!e || e.key !== "Enter" || !this._holdPending) return;
    this._holdPending = false;
    clearTimeout(this._holdT);
    if (!this._holdFired) this._remote("ok");
  }

  // Mode « modifier l’accueil » (comme sur iPhone / Apple TV) : l’ordre des applis devient le tien et ne bouge plus tout seul.
  _startEdit() {
    const N = this._nav;
    if (!N || !this._live()) return;
    this.setState({ edit: true, carry: null, order: N.ordered.map((it) => it.id), pressed: false, tilt: null, peek: null });
  }

  _endEdit() {
    this._dragging = false;
    this.setState({ edit: false, carry: null, pressed: false });
  }

  // Place l’appli tenue à la position voulue (« Ajouter » reste toujours la dernière).
  _moveCarry(to, keepView) {
    const s = this.state || {};
    if (!s.carry || !s.order) return;
    const rest = s.order.filter((id) => id !== s.carry && id !== "ajouter");
    const t = Math.max(0, Math.min(rest.length, to));
    rest.splice(t, 0, s.carry);
    if (s.order.indexOf("ajouter") >= 0) rest.push("ajouter");
    const patch = { order: rest, focus: s.carry };
    if (t < 6) patch.lastFav = s.carry;
    if (!keepView) patch.view = t < 6 ? "home" : "apps";
    this.setState(patch);
  }

  // Glisser-déposer à la souris : la tuile suit la place la plus proche du pointeur.
  _slotAt(cx, cy) {
    const root = this._rootEl();
    const N = this._nav;
    if (!root || !N || !N.pos) return null;
    const rr = root.getBoundingClientRect();
    const k = rr.width / 1920 || 1;
    const x = (cx - rr.left) / k, y = (cy - rr.top) / k;
    const shift = N.view === "apps" ? -660 : 0;
    const n = N.ordered.filter((it) => !it.add).length;
    let best = null, bd = Infinity;
    for (let i = 0; i < n; i++) {
      const p = N.pos(i);
      const dx = x - (p.x + 134), dy = y - (p.y + 80 + shift), d = dx * dx + dy * dy;
      if (d < bd) { bd = d; best = i; }
    }
    return best;
  }

  _dragTo(cx, cy) {
    const s = this.state || {};
    const N = this._nav;
    if (!s.carry || !N) return;
    const to = this._slotAt(cx, cy);
    if (to != null && to !== N.slotOf[s.carry]) this._moveCarry(to, true);
  }

  _dragEnd() {
    clearTimeout(this._mouseHoldT);
    if (!this._dragging) return;
    this._dragging = false;
    this.setState({ carry: null });
  }

  // Navigation à la télécommande : ↑ ↓ passent d’un étage à l’autre (applis ↔ dock ↔ plein écran ↔ plein écran pur ↔ hub),
  // ← → se déplacent dans l’étage, OK ouvre, Retour remonte vers l’accueil.
  _remote(k) {
    const N = this._nav;
    if (!N) return;
    const s = this.state || {};
    const root = this._rootEl();
    if (s.sys) { this._sysKey(k); return; }
    if (s.launch) {
      if ((k === "back" || k === "ok") && s.launch.phase === "open") this._back(root);
      return;
    }
    const view = N.view;
    if (s.edit) {
      // ← → ↑ ↓ : déplacent la sélection, ou l’appli tenue ; OK : prendre / poser ; Retour : poser, puis terminer.
      const cur = s.carry || s.focus;
      const slot = N.slotOf[cur] != null ? N.slotOf[cur] : 0;
      const row = slot < 6 ? 0 : 1 + Math.floor((slot - 6) / 6);
      const col = slot < 6 ? slot : (slot - 6) % 6;
      const first = (r) => (r === 0 ? 0 : 6 + (r - 1) * 6);
      const lim = s.carry ? N.ordered.filter((it) => !it.add).length - 1 : N.ordered.length - 1;
      let to = null;
      if (k === "left" && col > 0) to = slot - 1;
      else if (k === "right" && col < 5 && slot < lim) to = slot + 1;
      else if (k === "up" && row > 0) to = first(row - 1) + col;
      else if (k === "down" && first(row + 1) <= lim) to = Math.min(lim, first(row + 1) + col);
      if (to != null) {
        if (s.carry) this._moveCarry(to);
        else {
          const id = N.ordered[to].id;
          this.setState(Object.assign({ focus: id, view: to < 6 ? "home" : "apps", tilt: null }, to < 6 ? { lastFav: id } : {}));
        }
      } else if (k === "ok") {
        const it = N.catalog.find((x) => x.id === s.focus);
        if (s.carry) this.setState({ carry: null });
        else if (it && !it.add) this.setState({ carry: it.id });
      } else if (k === "back") {
        if (s.carry) this.setState({ carry: null });
        else this._endEdit();
      }
      return;
    }
    const at = (slot) => N.ordered[Math.max(0, Math.min(N.ordered.length - 1, slot))].id;
    const dockId = () => {
      const f = s.focus;
      if (f && f !== "hub" && N.slotOf[f] < 6) return f;
      const lf = s.lastFav || s.lastOpen;
      return lf && N.slotOf[lf] < 6 ? lf : N.ordered[0].id;
    };
    const focusOn = (id, extra) => {
      const p = { focus: id, tilt: null, pressed: false };
      if (N.slotOf[id] < 6) p.lastFav = id;
      this._set(Object.assign(p, extra || {}));
    };
    const open = (id) => {
      const it = N.catalog.find((x) => x.id === id);
      if (!it) return;
      const el = root ? root.querySelector('[data-tile="' + id + '"]') : null;
      // Petit enfoncement de la tuile, comme un clic de télécommande, puis ouverture.
      this._set({ focus: id, pressed: true });
      clearTimeout(this._okT);
      this._okT = setTimeout(() => this._launch(it, el), 30);
    };
    const toHome = () => focusOn(dockId(), { view: "home" });

    if (s.focus === "hub") {
      if (k === "ok") this._openHub();
      else if (k === "down") focusOn(dockId());
      else if (k === "back") toHome();
      return;
    }

    // Écran de veille : OK ou Retour ramènent à l’accueil, ↓ revient au plein écran, ↑ va au hub.
    // Veille : la première touche réveille simplement l’écran (retour là où on était).
    if (view === "veille") { this._wakeUp(); return; }

    if (view === "hero") {
      if (k === "left") this.step(-1);
      else if (k === "right") this.step(1);
      else if (k === "up") this._set({ focus: "hub", tilt: null, pressed: false });
      else if (k === "down") toHome();
      else if (k === "ok") {
        const card = root ? root.querySelector('[data-card="' + N.idx + '"]') : null;
        this._launchHero(N.progFor(N.idx), card);
      } else if (k === "back") toHome();
      return;
    }

    if (view === "home") {
      const slot = N.slotOf[dockId()];
      if (k === "left" && slot > 0) focusOn(at(slot - 1));
      else if (k === "right" && slot < 5) focusOn(at(slot + 1));
      else if (k === "up") this._set({ view: "hero", tilt: null, pressed: false });
      else if (k === "down" && N.ordered.length > 6) focusOn(at(6 + slot), { view: "apps" });
      else if (k === "ok") open(dockId());
      return;
    }

    // Grille d’applis : rangée 0 = dock, puis rangées de 6.
    const cur = s.focus && N.slotOf[s.focus] != null ? s.focus : at(6);
    const slot = N.slotOf[cur];
    const row = slot < 6 ? 0 : 1 + Math.floor((slot - 6) / 6);
    const col = slot < 6 ? slot : (slot - 6) % 6;
    const first = (r) => (r === 0 ? 0 : 6 + (r - 1) * 6);
    const last = N.ordered.length - 1;
    if (k === "left" && col > 0) focusOn(at(slot - 1));
    else if (k === "right" && col < 5 && slot < last) focusOn(at(slot + 1));
    else if (k === "up") {
      if (row <= 1) focusOn(at(col), { view: "home" });
      else focusOn(at(first(row - 1) + col));
    } else if (k === "down" && first(row + 1) <= last) focusOn(at(Math.min(last, first(row + 1) + col)));
    else if (k === "ok") open(cur);
    else if (k === "back") toHome();
  }

  _back(el) {
    const L = (this.state || {}).launch;
    if (!L || L.phase !== "open") return;
    const root = el && el.closest ? el.closest("[data-launcher]") : null;
    clearTimeout(this._lt1);
    clearTimeout(this._lt2);
    // 1. les coins se ré-arrondissent en plein écran, 2. l’écran se referme dans sa tuile, 3. fondu.
    this.setState({ launch: Object.assign({}, L, { phase: "round" }) });
    this._lt1 = setTimeout(() => {
      const target = !root ? null
        : L.fromHero ? (L.card != null ? root.querySelector('[data-card="' + L.card + '"]') : null)
        : root.querySelector('[data-tile="' + L.id + '"]');
      const rect = target ? this._rect(root, target) : L.rect;
      this.setState((s) => ({ launch: Object.assign({}, s.launch, { phase: "shrink", rect: rect }) }));
      this._lt2 = setTimeout(() => {
        this.setState((s) => ({ launch: Object.assign({}, s.launch, { phase: "fade" }) }));
        this._lt1 = setTimeout(() => this.setState({ launch: null }), 240);
      }, 580);
    }, 320);
  }

  _schedule() {
    clearTimeout(this._auto);
    this._auto = setTimeout(() => {
      const s = this.state || {};
      const n = this._count || 1;
      const cur = s.idx == null ? (this._startIdx || 0) : s.idx;
      const v = s.view || "home";
      if (v === "home" && this._live()) this.setState({ idx: (cur + 1) % n });
      this._schedule();
    }, 7000);
  }

  step(d) {
    if (!this._live()) return;
    const s = this.state || {};
    const n = this._count || 1;
    const cur = s.idx == null ? (this._startIdx || 0) : s.idx;
    this.setState({ idx: (((cur + d) % n) + n) % n });
    this._schedule();
  }

  renderVals() {
    const st = this.state || {};
    const live = this._live();
    const view = st.view || this._baseView();
    const isApps = view === "apps";
    // "hero" = plein écran avec la rangée de vignettes ; "veille" = écran façon écran verrouillé (grande heure, date, météo).
    const isVeille = view === "veille";
    const isHero = view === "hero" || isVeille;
    const showCards = view === "hero";
    const focus = st.focus || st.lastOpen || "youtube";
    const accent = this.props.accent ?? "#F2B66D";
    const motion = this.props.mouvement ?? true;
    const tilt = st.tilt || { x: 0.5, y: 0.3 };
    const pressed = !!st.pressed;
    const spring = "cubic-bezier(0.25, 1.4, 0.5, 1)";
    const rest = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";
    const transition = motion
      ? "transform 380ms " + spring + ", background-color 220ms ease, box-shadow 320ms ease, color 220ms ease, border-color 220ms ease"
      : "background-color 160ms ease, color 160ms ease, border-color 160ms ease";

    const scenes = {
      crepuscule: { sky0: "#0B1022", sky1: "#1E2752", sky2: "#3A3F6E", glow: "#E9A27A", sun: "#F8D3A4", r1: "#262E58", r2: "#1A2147", r3: "#121834", r4: "#0A0E20" },
      braise: { sky0: "#140A10", sky1: "#3A1621", sky2: "#6A2A2C", glow: "#FF8A4C", sun: "#FFC48A", r1: "#3A1A22", r2: "#2A121A", r3: "#1C0C12", r4: "#10070B" },
      ocean: { sky0: "#06141C", sky1: "#0F3442", sky2: "#1D5A66", glow: "#7FD3D0", sun: "#D9F3EE", r1: "#123A48", r2: "#0C2B37", r3: "#081E28", r4: "#04121A" },
      aurore: { sky0: "#120B24", sky1: "#2E1B52", sky2: "#5B3A80", glow: "#E88BD0", sun: "#F7C9EC", r1: "#2C1F4E", r2: "#20163C", r3: "#160F2C", r4: "#0C081A" },
      glacier: { sky0: "#0C1626", sky1: "#23405F", sky2: "#5E83A6", glow: "#BFD8F2", sun: "#F1F6FB", r1: "#3E5F82", r2: "#2C4866", r3: "#1D334C", r4: "#101F31" },
      foret: { sky0: "#07120E", sky1: "#12302A", sky2: "#2C5A46", glow: "#C9D98A", sun: "#EEF3C9", r1: "#18392E", r2: "#112A22", r3: "#0B1E18", r4: "#06120E" }
    };

    const look = (on, installed) => {
      if (on) {
        const s = pressed ? 1.02 : (motion ? 1.08 : 1.04);
        const ry = motion ? ((tilt.x - 0.5) * 10).toFixed(2) : "0";
        const rx = motion ? ((0.5 - tilt.y) * 10).toFixed(2) : "0";
        const ty = "0px";
        return {
          bg: "rgba(240, 242, 248, 0.92)",
          fg: "#0B0C0F",
          fg2: "#3C3E47",
          slotBorder: "rgba(11, 12, 15, 0.28)",
          border: "rgba(255, 255, 255, 0.8)",
          shadow: "inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 34px 60px rgba(0, 0, 0, 0.45), 0 10px 20px rgba(0, 0, 0, 0.25)",
          transform: "perspective(900px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) translateY(" + ty + ") scale(" + s + ")",
          transition: transition,
          sheen: motion ? "1" : "0",
          layer: motion ? "translate(" + ((tilt.x - 0.5) * 14).toFixed(1) + "px, " + ((tilt.y - 0.5) * 10).toFixed(1) + "px)" : "translate(0px, 0px)",
          layerTransition: motion ? "transform 380ms " + spring : "none",
          sheenBg: "radial-gradient(circle at " + (tilt.x * 100).toFixed(1) + "% " + (tilt.y * 100).toFixed(1) + "%, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0) 62%)"
        };
      }
      if (installed === false) {
        return {
          bg: "rgba(255, 255, 255, 0.04)",
          fg: "#A3A6B2",
          fg2: "#A3A6B2",
          slotBorder: "rgba(255, 255, 255, 0.16)",
          border: "rgba(255, 255, 255, 0.08)",
          shadow: "inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 6px 18px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08)",
          transform: rest,
          transition: transition,
          sheen: "0",
          layer: "translate(0px, 0px)",
          layerTransition: motion ? "transform 380ms " + spring : "none",
          sheenBg: "none"
        };
      }
      return {
        bg: "rgba(255, 255, 255, 0.1)",
        fg: "#F5F5F7",
        fg2: "#D5D7E0",
        slotBorder: "rgba(255, 255, 255, 0.3)",
        border: "rgba(255, 255, 255, 0.14)",
        shadow: "inset 0 1px 0 rgba(255, 255, 255, 0.14), 0 6px 18px rgba(0, 0, 0, 0.18), 0 2px 6px rgba(0, 0, 0, 0.1)",
        transform: rest,
        transition: transition,
        sheen: "0",
        layer: "translate(0px, 0px)",
        layerTransition: motion ? "transform 380ms " + spring : "none",
        sheenBg: "none"
      };
    };

    const clamp = (v) => Math.max(0, Math.min(1, v));
    const handlers = (id, inGrid, appId, openable, meta) => ({
      pick: () => !this._kbdMode && this._set(inGrid
        ? { focus: id, view: "apps", tilt: null, pressed: false }
        : { focus: id, lastFav: id, tilt: null, pressed: false }),
      open: (e) => {
        // Après un appui long (entrée en mode « modifier ») ou pendant ce mode, le clic n’ouvre pas l’appli.
        if (this._suppressClick || (this.state || {}).edit) { this._suppressClick = false; return; }
        if (!openable || !meta) {
          this._set(inGrid ? { focus: id, view: "apps", tilt: null, pressed: false } : { focus: id, lastFav: id, tilt: null, pressed: false });
          return;
        }
        this._launch(meta, e && e.currentTarget);
      },
      move: (e) => {
        if (!motion || !e || !e.currentTarget || this._kbdMode) return;
        const r = e.currentTarget.getBoundingClientRect();
        if (!r.width || !r.height) return;
        this._tiltNext = { focus: id, tilt: { x: clamp((e.clientX - r.left) / r.width), y: clamp((e.clientY - r.top) / r.height) } };
        if (typeof requestAnimationFrame === "undefined") { this._set(this._tiltNext); return; }
        if (this._tiltRaf) return;
        this._tiltRaf = requestAnimationFrame(() => {
          this._tiltRaf = 0;
          if (this._tiltNext) this._set(this._tiltNext);
        });
      },
      leave: () => {
        if (this._tiltRaf && typeof cancelAnimationFrame !== "undefined") cancelAnimationFrame(this._tiltRaf);
        this._tiltRaf = 0;
        this._tiltNext = null;
        this._set({ tilt: null, pressed: false });
      },
      down: () => {
        if (!this._live()) return;
        const s = this.state || {};
        if (s.edit) {
          if (!(meta && meta.add)) { this._dragging = true; this.setState({ carry: id, focus: id, pressed: false }); }
          return;
        }
        this._set({ focus: id, pressed: true });
        clearTimeout(this._mouseHoldT);
        // Maintenu 0,6 s : mode « modifier », et la tuile reste dans la main pour être glissée tout de suite.
        this._mouseHoldT = setTimeout(() => {
          this._suppressClick = true;
          this._startEdit();
          if (!(meta && meta.add)) { this._dragging = true; this.setState({ carry: id, focus: id }); }
        }, 600);
      },
      up: () => { clearTimeout(this._mouseHoldT); this._set({ pressed: false }); }
    });

    const goHome = () => this._set((s) => ({ view: "home", focus: (s && (s.lastFav || s.lastOpen)) || "youtube", tilt: null, pressed: false }));
    const onWheel = (e) => {
      if (!e || (this.state || {}).launch || (this.state || {}).sys) return;
      this._armIdle();
      // Veille : un coup de molette réveille l’écran, le reste du geste est ignoré.
      if (((this.state || {}).view || this._baseView()) === "veille") {
        this._wheelLast = Date.now();
        this._wheelDone = true;
        this._wakeUp();
        return;
      }
      // Un geste = un pas : un nouveau geste commence après 180 ms sans événement, la traîne d’inertie est ignorée.
      const t = Date.now();
      if (t - (this._wheelLast || 0) > 180) this._wheelDone = false;
      this._wheelLast = t;
      if (this._wheelDone) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        if (Math.abs(e.deltaX) < 8) return;
        this._wheelDone = true;
        this.step(e.deltaX > 0 ? 1 : -1);
        return;
      }
      // Haut / bas comme sur la télécommande : plein écran ← accueil → grille d’apps.
      if (Math.abs(e.deltaY) < 8) return;
      this._wheelDone = true;
      const v = (this.state || {}).view || this._baseView();
      if (e.deltaY > 0) {
        if (v === "hero") this._set({ view: "home" });
        else if (v === "home") this._set({ view: "apps" });
      } else {
        if (v === "apps") goHome();
        else if (v === "home") this._set({ view: "hero", tilt: null, pressed: false });
      }
    };
    const showDock = () => this._set({ view: "home" });

    // Bouton du hub : même logique de sélection que les tuiles (une seule sélection à la fois).
    const hubOn = focus === "hub";
    const hubLook = look(hubOn);
    const hub = Object.assign({}, hubLook, handlers("hub", false, "hub", false), {
      bg: hubOn ? hubLook.bg : "rgba(255, 255, 255, 0.1)",
      border: hubOn ? hubLook.border : "rgba(255, 255, 255, 0.08)",
      shadow: hubOn ? hubLook.shadow : "inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 8px 24px rgba(0, 0, 0, 0.22)",
      fx: hubOn ? "0" : "1",
      fg: hubOn ? "#0B0C0F" : "#F5F5F7",
      enter: () => { if (!this._kbdMode) this._set({ focus: "hub", tilt: null, pressed: false }); },
      go: () => this._openHub(),
      bounce: hubOn && motion && this._bounceOn ? "tileBounce 600ms cubic-bezier(0.3, 0.7, 0.4, 1) both" : "none"
    });

    const swipeStart = (e) => {
      if (!e || Date.now() - (this._touchAt || 0) < 600) return;
      this._sx = e.clientX;
    };
    const swipeEnd = (e) => {
      if (!e || this._sx == null) return;
      const dx = e.clientX - this._sx;
      this._sx = null;
      this._lastPointer = Date.now();
      this.step(dx > 40 ? -1 : 1);
    };
    const touchStart = (e) => {
      const t = e && e.touches && e.touches[0];
      if (t) this._tx = t.clientX;
    };
    const touchEnd = (e) => {
      const t = e && e.changedTouches && e.changedTouches[0];
      if (!t || this._tx == null) return;
      const dx = t.clientX - this._tx;
      this._tx = null;
      this._touchAt = Date.now();
      this._lastPointer = Date.now();
      this.step(dx > 40 ? -1 : 1);
    };
    const heroClick = () => {
      if (!this._live() || Date.now() - (this._lastPointer || 0) < 500) return;
      if (isHero) {
        this._launchHero(progFor(idx));
        return;
      }
      this._set({ view: "hero", tilt: null, pressed: false });
    };
    const heroPrev = () => this.step(-1);
    const progFor = (i) => {
      const r = reprise[i];
      const sc = scenes[r.scene];
      return Object.assign({}, r, { key: String(i), bg: sc.sky1, endBg: r.app === "switch" ? "#E52528" : r.app === "ps5" ? "#000000" : "#0B0C10" });
    };

    const favs = [
      { id: "youtube", name: "YouTube", label: "YouTube, via TizenTube", tint: "#FFFFFF", ink: "#0B0C0F" },
      { id: "ps5", name: "PS5", label: "PS5 Pro, entrée HDMI 1", source: true, connected: true, tint: "#000000" },
      { id: "netflix", name: "Netflix", label: "Netflix", tint: "#FFFFFF", ink: "#0B0C0F" },
      { id: "appletv", name: "Apple TV", label: "Apple TV", tint: "#000000" },
      { id: "hbo", name: "HBO Max", label: "HBO Max", tint: "#000000" },
      { id: "spotify", name: "Spotify", label: "Spotify", tint: "#1ED760", ink: "#000000" }
    ];

    const others = [
      { id: "prime", name: "Prime Video", tint: "#0779FF", ink: "#000000" },
      { id: "disney", name: "Disney+", tint: "radial-gradient(90% 80% at 50% 100%, #175CC1 0%, rgba(23, 92, 193, 0) 72%), linear-gradient(180deg, #060726 0%, #0A1E53 52%, #0F3983 100%)", launchBg: "#0A1E53" },
      { id: "crunchyroll", name: "Crunchyroll", tint: "#FF5E00" },
      { id: "freetv", name: "Free TV", artBg: "#000000" },
      { id: "paramount", name: "Paramount+", tint: "#0064FF" },
      { id: "canal", name: "Canal+", tint: "#000000" },
      // Appli YouTube officielle (avec pubs), en secours si TizenTube ne marche pas : même logo, étiquette « Appli officielle ».
      { id: "youtubeapp", logo: "youtube", name: "YouTube", label: "YouTube, appli officielle, en secours si TizenTube ne marche pas", launchSub: "Appli officielle", badge: "Appli officielle", tint: "#FFFFFF", ink: "#0B0C0F" },
      { id: "switch", name: "Switch", note: "entrée HDMI 2", source: true, tint: "#E52528" },
      { id: "hue", name: "Hue Sync", tint: "#FFFFFF", ink: "#0B0C0F" },
      { id: "smartthings", name: "SmartThings", tint: "#008DF6" },
      { id: "reglages", name: "Réglages TV", art: true, artFull: true, sys: true },
      { id: "ajouter", name: "Ajouter une appli", note: "ouvre le store Samsung (Tizen)", add: true }
    ];

    // Programmes à l’affiche. Sur la TV : tes vraies recos (séries en cours et liste Serializd, watchlist Letterboxd,
    // Top 10 Netflix, tendances de tes plateformes), avec image de fond et logo du titre. Ici, des exemples tirés de tes listes.
    const plateformes = { netflix: "Netflix", ps5: "PS5 Pro", appletv: "Apple TV", crunchyroll: "Crunchyroll", youtube: "YouTube", switch: "Nintendo Switch", disney: "Disney+", paramount: "Paramount+", hbo: "HBO Max", canal: "Canal+", prime: "Prime Video" };
    const decorDe = { netflix: "braise", ps5: "aurore", appletv: "glacier", crunchyroll: "crepuscule", youtube: "foret", switch: "braise", disney: "glacier", paramount: "ocean", hbo: "aurore", canal: "crepuscule", prime: "ocean" };
    const exemples = [
      { title: "Dark Matter", app: "appletv", reason: "Reprendre", detail: "Série · 2024 · Science-fiction" },
      { title: "Peaky Blinders", app: "netflix", reason: "Dans ta liste", detail: "Série · 2013 · Drame · 6 saisons" },
      { title: "Succession", app: "hbo", reason: "Dans ta liste", detail: "Série · 2018 · Drame · 4 saisons" },
      { title: "Silo", app: "appletv", reason: "Dans ta liste", detail: "Série · 2023 · Science-fiction" },
      { title: "Andor", app: "disney", reason: "Dans ta liste", detail: "Série · 2022 · Science-fiction · 2 saisons" },
      { title: "Titre de la vidéo", app: "youtube", reason: "Nouvelle vidéo", detail: "Vidéo · Nom de la chaîne" },
      { title: "Titre de l’anime", app: "crunchyroll", reason: "Tendance sur Crunchyroll", detail: "Anime · Action" },
      { title: "Titre du jeu", app: "ps5", reason: "Tendance RPG", detail: "Jeu · PS5" }
    ];
    const recues = Array.isArray(this.props.recos) && this.props.recos.length ? this.props.recos : exemples;
    const toutesLesRecos = recues
      .filter((r) => r && r.title && plateformes[r.app])
      .map((r) => Object.assign({}, r, { name: plateformes[r.app], scene: decorDe[r.app] }));
    // 5 recos au maximum, celles des applis ouvertes en dernier d’abord (puis l’ordre ci-dessus).
    // La démo permet d’en afficher moins pour vérifier la mise en page.
    this._recoApps = toutesLesRecos.map((r) => r.app);
    const recent = st.recent || [];
    const rank = (r) => { const i = recent.indexOf(r.app); return i < 0 ? recent.length + toutesLesRecos.indexOf(r) : i; };
    const nRecos = Math.max(1, Math.min(10, parseInt(this.props.nombreRecos, 10) || 8));
    const reprise = toutesLesRecos.slice().sort((a, b) => rank(a) - rank(b)).slice(0, nRecos);
    this._count = reprise.length;
    const startIdx = Math.max(0, Math.min(reprise.length - 1, (parseInt(this.props.programmeAffiche, 10) || 1) - 1));
    this._startIdx = startIdx;
    const idx = (st.idx == null ? startIdx : st.idx) % reprise.length;
    const cur = reprise[idx];
    const heroK = ["netflix", "ps5", "appletv", "crunchyroll", "youtube", "switch", "disney", "paramount", "hbo", "canal", "prime"].indexOf(cur.app);
    const hero = {
      title: cur.title, logo: cur.logo || "", hasLogo: !!cur.logo, noLogo: !cur.logo,
      reason: cur.reason || "", detail: cur.detail || "", hasReason: !!(cur.reason || cur.detail)
    };
    // Seulement l’image affichée, la précédente (pour le fondu) et la suivante (préchargée) : les autres ne prennent pas de mémoire.
    if (this._heroIdx !== idx) { this._heroPrev = this._heroIdx; this._heroIdx = idx; }
    const keepBg = (i) => i === idx || i === this._heroPrev || i === (idx + 1) % reprise.length;
    const heroBgs = reprise.map((r, i) => ({ has: !!r.backdrop && keepBg(i), src: r.backdrop || "", opacity: i === idx ? "1" : "0", cur: i === idx ? "1" : "0" }));

    // Tuile à fond de marque uni (PS5, Switch, YouTube, Netflix, Apple TV, HBO Max, Spotify, Prime Video, Crunchyroll, Disney+ en dégradé) : le fond porte la couleur, le logo est centré.
    const dark = (on, tint, ink) => ({
      bg: tint || "#000000",
      fg: ink || "#FFFFFF",
      fg2: ink || "#FFFFFF",
      slotBorder: ink ? "rgba(11, 12, 15, 0.28)" : "rgba(255, 255, 255, 0.45)",
      border: on ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.16)",
      shadow: on
        ? "inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 34px 60px rgba(0, 0, 0, 0.55), 0 10px 20px rgba(0, 0, 0, 0.3)"
        : "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 6px 18px rgba(0, 0, 0, 0.25), 0 2px 6px rgba(0, 0, 0, 0.12)"
    });
    // Reflet de la tuile sélectionnée : le même pour toutes (couleur, image ou source), posé au-dessus du logo comme sur
    // l’Apple TV, toujours au même endroit (là où pointe la souris, sinon en haut au centre) et avec la même force.
    const glareRest = { x: 0.5, y: 0.3 };
    const glareAt = (t) => "radial-gradient(75% 95% at " + (t.x * 100).toFixed(1) + "% " + (t.y * 100).toFixed(1) + "%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.07) 45%, rgba(255, 255, 255, 0) 100%)";

    // Rebond : joué une seule fois quand la tuile devient sélectionnée, puis retiré (pas de rejeu au retour du hub).
    if (this._bounceFor !== focus) {
      this._bounceFor = focus;
      this._bounceOn = true;
      clearTimeout(this._bounceT);
      this._bounceT = setTimeout(() => { this._bounceOn = false; this.forceUpdate(); }, 760);
    }

    // Aperçu : après quelques secondes sur une tuile, on y voit la source ou l’appli en petit.
    if (this._dwellFor !== focus) {
      this._dwellFor = focus;
      clearTimeout(this._dwell);
      const f = focus;
      this._dwell = setTimeout(() => this._set({ peek: f }), 2500);
    }
    const peekId = live && st.peek === focus && !st.launch && !isHero && !st.edit ? focus : null;
    const peekScenes = {
      youtube: "foret", ps5: "aurore", appletv: "glacier", netflix: "braise", hbo: "crepuscule", freetv: "ocean",
      prime: "ocean", disney: "glacier", crunchyroll: "crepuscule", spotify: "foret", switch: "braise",
      paramount: "glacier", canal: "crepuscule", youtubeapp: "foret"
    };
    // Aperçu dans la tuile d’une source (PS5, Switch…) : sur la TV, son image en direct par-dessus ;
    // en dessous, l’image d’une reco de cette source, ou un paysage d’attente dans la maquette.
    const recosReelles = Array.isArray(this.props.recos) && this.props.recos.length > 0;
    const peekFields = (it, inDock) => {
      const rec = recosReelles ? toutesLesRecos.find((r) => r.app === it.id && (r.thumb || r.backdrop)) : null;
      const sc = it.installed === false ? null : peekScenes[it.id];
      // Aperçu seulement pour les sources (PS5, Switch…) : sur la TV, leur image en direct ; ici, un paysage d’attente.
      const has = !!it.source && !!(rec || sc);
      const on = has && inDock && view === "home" && peekId === it.id;
      const pk = scenes[sc || "crepuscule"];
      return {
        hasPeek: has,
        hasPeekImg: !!rec,
        peekImg: rec ? (rec.thumb || rec.backdrop) : "",
        peekOpacity: on ? "1" : "0",
        peekAnim: on && motion ? "kenburns 14s ease-in-out infinite alternate" : "none",
        pk: Object.assign({}, pk, { glowA: pk.glow + "8C" })
      };
    };

    // Un seul ordre, sans doublon : la dernière appli ou source ouverte en premier (YouTube à l’allumage),
    // puis les favoris dans leur ordre, puis le reste. Le dock prend les 6 premières, la grille la suite.
    const canOpen = () => true;
    const catalog = favs.concat(others);
    const bootApp = "youtube";
    const last = catalog.find((it) => it.id === (st.lastOpen || bootApp)) || favs[0];
    // Une fois l’accueil modifié, ton ordre fait foi (plus de « dernière appli ouverte en premier »).
    let ordered = [last].concat(catalog.filter((it) => it.id !== last.id));
    if (st.order) {
      const byId = {};
      catalog.forEach((it) => { byId[it.id] = it; });
      const seen = {};
      const mine = st.order.filter((id) => byId[id] && !seen[id] && (seen[id] = true)).map((id) => byId[id]);
      catalog.forEach((it) => { if (!seen[it.id]) mine.push(it); });
      ordered = mine.filter((it) => !it.add).concat(mine.filter((it) => it.add));
    }
    const slotOf = {};
    ordered.forEach((it, i) => { slotOf[it.id] = i; });
    // Positions et tailles en pixels entiers : une tuile posée « entre deux pixels » ressort floue sur la TV.
    const pitch = 296, colW = 268, x0 = 86;
    const pos = (slot) => slot < 6
      ? { x: x0 + slot * pitch, y: 814 }
      : { x: x0 + ((slot - 6) % 6) * pitch, y: 1036 + Math.floor((slot - 6) / 6) * 201 };
    const heroDrop = isHero ? 320 : 0;
    const slide = motion ? ", opacity 420ms ease" : ", opacity 200ms ease";
    const posTransition = motion ? "transform 700ms cubic-bezier(0.34, 1.26, 0.5, 1)" : "none";
    const artApps = ["youtube", "appletv", "netflix", "hbo", "freetv", "prime", "disney", "crunchyroll", "spotify", "paramount", "canal", "hue", "smartthings", "reglages"];
    // Défilement accueil ↔ applis : le dock part en premier, chaque rangée de la grille suit avec un léger décalage.
    // L’animation est retirée une fois jouée : sinon elle se rejoue quand on revient du hub (les applis remontaient vers le dock).
    if (this._rowView !== view) {
      if (this._rowView && (view === "apps" || this._rowView === "apps")) {
        this._rowDir = view === "apps" ? "rowUp" : "rowDown";
        clearTimeout(this._rowT);
        this._rowT = setTimeout(() => { this._rowDir = null; this.forceUpdate(); }, 1300);
      }
      this._rowView = view;
    }
    const rowAnim = (row) => (motion && this._rowDir)
      ? this._rowDir + " 860ms cubic-bezier(0.22, 1, 0.36, 1) " + (row * 80) + "ms backwards"
      : "none";
    // Sélection d’une tuile : « Halo de marque » (lumière couleur de la marque autour, liseré blanc irisé, léger décalage chromatique),
    // « Néon irisé » (anneau arc-en-ciel qui tourne, halo violet-cyan) ou « Sobre » (ombre seule, comme avant).
    const selStyle = ({ "Néon irisé": "neon", "Sobre": "sobre" })[this.props.selection] || "halo";
    const glowOf = {
      youtube: "#FF0033", youtubeapp: "#FF0033", ps5: "#2F7BFF", netflix: "#E50914", appletv: "#FFFFFF", hbo: "#FFFFFF", spotify: "#1ED760",
      prime: "#0779FF", disney: "#3D86FF", crunchyroll: "#FF5E00", freetv: "#E3001B", paramount: "#2A7BFF", canal: "#FFFFFF",
      switch: "#E52528", hue: "#FFB070", smartthings: "#008DF6", reglages: "#FFFFFF", ajouter: "#FFFFFF"
    };
    const rgbaOf = (hex, a) => {
      const n = parseInt(hex.slice(1), 16);
      return "rgba(" + ((n >> 16) & 255) + ", " + ((n >> 8) & 255) + ", " + (n & 255) + ", " + a + ")";
    };
    const lx = (tilt.x * 100).toFixed(1) + "%", ly = (tilt.y * 100).toFixed(1) + "%";
    const depth = "0 34px 60px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.28)";
    // Halo très clair (blanc, tons pastel) : on baisse sa luminosité pour qu’il n’éblouisse pas.
    const lum = (hex) => {
      const n = parseInt(hex.slice(1), 16);
      return 0.2126 * (((n >> 16) & 255) / 255) + 0.7152 * (((n >> 8) & 255) / 255) + 0.0722 * ((n & 255) / 255);
    };
    const off = { rimClass: "tile-rim", rimOpacity: "0", rimRainbow: "0", rimSpin: "none", rimLight: "none", flareX: lx, flareOpacity: "0", bounce: "none" };
    const selFx = (it, on) => {
      if (!on) return off;
      const bounce = motion && this._bounceOn ? "tileBounce 640ms cubic-bezier(0.3, 0.7, 0.4, 1) both" : "none";
      if (selStyle === "sobre") return Object.assign({}, off, { bounce: bounce });
      const g = glowOf[it.id] || "#FFFFFF";
      const L = lum(g);
      const k = L > 0.75 ? 0.5 : L > 0.55 ? 0.8 : 1;
      const lightTile = it.tint === "#FFFFFF";
      const highlight = "radial-gradient(70% 95% at " + lx + " " + ly + ", rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.25) 40%, rgba(255, 255, 255, 0) 70%)";
      if (selStyle === "neon") {
        return {
          shadow: ["inset 0 1px 0 rgba(255, 255, 255, 0.4)", "-16px -10px 44px rgba(178, 70, 255, 0.75)", "16px 10px 44px rgba(0, 210, 255, 0.68)", "0 0 100px 16px rgba(110, 100, 255, 0.4)", depth].join(", "),
          border: "rgba(255, 255, 255, 0)",
          rimClass: "tile-rim neon",
          rimOpacity: "1",
          rimRainbow: "1",
          rimSpin: motion ? "rimRotate 3.6s linear infinite" : "none",
          rimLight: highlight,
          flareX: lx,
          flareOpacity: "0.9",
          bounce: bounce
        };
      }
      return {
        shadow: [
          "inset 0 1px 0 rgba(255, 255, 255, 0.55)",
          lightTile ? null : "inset 0 0 34px " + rgbaOf(g, (0.5 * k).toFixed(2)),
          "-4px 0 18px rgba(255, 45, 150, 0.4)",
          "4px 0 18px rgba(0, 210, 255, 0.4)",
          "0 0 34px 4px " + rgbaOf(g, (0.65 * k).toFixed(2)),
          "0 0 110px 22px " + rgbaOf(g, (0.32 * k).toFixed(2)),
          depth
        ].filter(Boolean).join(", "),
        border: "rgba(255, 255, 255, " + (k < 1 ? "0.7" : "0.9") + ")",
        rimClass: "tile-rim",
        rimOpacity: "1",
        rimRainbow: "0.85",
        rimSpin: motion ? "rimRotate 7s linear infinite" : "none",
        rimLight: highlight,
        flareX: lx,
        flareOpacity: k < 1 ? "0.6" : "0.85",
        bounce: bounce
      };
    };
    // Chaque appli a une seule tuile (même visuel dans le dock et dans la grille) ; seule sa place change.
    const tiles = catalog.map((it) => {
      const slot = slotOf[it.id];
      const inGrid = slot >= 6;
      const p = pos(slot);
      const row = slot < 6 ? 0 : 1 + Math.floor((slot - 6) / 6);
      const on = it.id === focus;
      const lk = look(on, it.installed);
      const label = (it.note ? it.name + ", " + it.note : (it.label || it.name)) + (slot === 0 && !st.order ? ", dernière appli ouverte" : "");
      const t = Object.assign({}, it, lk, (it.source || it.tint) ? dark(on, it.tint, it.ink) : {}, handlers(it.id, inGrid, it.id, canOpen(it), it), {
        label: label,
        x: Math.round(p.x) + "px",
        posTransition: posTransition,
        rowLag: (row * 70) + "px",
        rowAnim: rowAnim(row),
        y: Math.round(p.y + heroDrop) + "px",
        w: colW + "px",
        z: on ? "2" : "1",
        opacity: isHero ? "0" : "1",
        tileTransition: lk.transition + slide,
        isPs5: it.id === "ps5",
        isSwitch: it.id === "switch",
        isOtherSource: !!it.source && it.id !== "ps5" && it.id !== "switch",
        isAdd: !!it.add,
        isArt: !it.source && !it.add && !it.tint,
        artOpacity: it.installed === false ? "0.55" : "1",
        artBg: it.artBg || "none",
        artX: it.artX || "0%",
        artY: it.artY || "0%",
        artW: it.artW || "100%",
        artH: it.artH || "100%",
        artFit: it.artFit || "cover",
        artClip: "none",
        sheen: on && motion ? "1" : "0",
        sheenBg: glareAt(on ? tilt : glareRest)
      }, peekFields(it, slot < 6), selFx(it, on));
      artApps.forEach((id) => { t["art_" + id] = (it.logo || it.id) === id; });
      // Mode « modifier » : tremblement (décalé d’une tuile à l’autre) ; l’appli tenue se soulève et ne tremble plus.
      const carried = !!st.edit && st.carry === it.id;
      if (st.edit && motion && !carried && !it.add) {
        const n = catalog.indexOf(it);
        t.bounce = "tileWiggle " + (250 + (n % 3) * 25) + "ms ease-in-out " + (-((n * 71) % 250)) + "ms infinite" + (n % 2 ? " reverse" : "");
      }
      t.lift = carried ? "1.12" : "1";
      if (carried) t.z = "3";
      t.tileTransition = t.tileTransition + (motion ? ", scale 320ms cubic-bezier(0.34, 1.5, 0.5, 1)" : "");
      // Halo : les grandes ombres colorées passent sur un calque à part (allumé ou éteint), la tuile garde seulement ses reflets.
      // Recalculer de grosses ombres floues à chaque image est ce qui coûte le plus cher sur la TV.
      const splitSh = (v) => String(v || "").split(/,(?![^(]*\))/).map((x) => x.trim()).filter(Boolean);
      const onSh = selFx(it, true).shadow || ((it.source || it.tint) ? dark(true, it.tint, it.ink).shadow : look(true, it.installed).shadow);
      t.glow = splitSh(onSh).filter((x) => !/^inset/.test(x)).join(", ") || "none";
      t.glowOn = on ? "1" : "0";
      t.glowScale = on ? (pressed ? "1.02" : (motion ? "1.08" : "1.04")) : "1";
      // Le halo suit exactement la tuile (même transformation, même rebond) : il ne prend plus d’avance ni de retard sur elle.
      t.glowTransition = motion ? "opacity 300ms ease, transform 380ms " + spring + ", scale 320ms cubic-bezier(0.34, 1.5, 0.5, 1)" : "opacity 160ms ease";
      if (on) t.shadow = splitSh(t.shadow).filter((x) => /^inset/.test(x)).join(", ") || "none";
      t.badgeBg = on ? "rgba(11, 12, 15, 0.08)" : "rgba(11, 12, 15, 0.06)";
      t.badgeFg = "#3C3E47";
      return t;
    });
    const spring2 = "cubic-bezier(0.25, 1.4, 0.5, 1)";
    if (this._cardFor !== idx) {
      this._cardFor = idx;
      this._cardBounceOn = true;
      clearTimeout(this._cardBounceT);
      this._cardBounceT = setTimeout(() => { this._cardBounceOn = false; this.forceUpdate(); }, 720);
    }
    const cards = reprise.map((r, i) => {
      const on = i === idx;
      const sc = scenes[r.scene];
      const device = r.app === "ps5" || r.app === "switch";
      return Object.assign({}, sc, {
        key: String(i),
        glowA: sc.glow + "8C",
        label: device ? r.title + ", ouvrir " + r.name : r.title + ", sur " + r.name,
        border: on ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.18)",
        scale: on ? (motion ? "1.1" : "1.05") : "1",
        shadow: on ? "0 24px 50px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.3)" : "0 8px 20px rgba(0, 0, 0, 0.3)",
        transition: motion ? "transform 380ms " + spring2 + ", box-shadow 320ms ease, border-color 220ms ease" : "border-color 160ms ease",
        bounce: on && motion && this._cardBounceOn ? "tileBounce 600ms cubic-bezier(0.3, 0.7, 0.4, 1) both" : "none",
        hasImg: !!(r.thumb || r.backdrop),
        img: r.thumb || r.backdrop || "",
        pick: () => { if (i !== idx && !this._kbdMode) this._set({ idx: i }); },
        open: (e) => { if (this._live()) this._launchHero(progFor(i), e && e.currentTarget); }
      });
    });
    // Rangée de vignettes : 5 au plus, en 232 px, toujours centrées.
    const railW = 1792, cardGap = 16;
    const cardW = Math.min(232, Math.floor((railW - (reprise.length - 1) * cardGap) / Math.max(1, reprise.length)));
    const cardH = Math.round(cardW * 9 / 16);
    const railX = (railW - (reprise.length * cardW + (reprise.length - 1) * cardGap)) / 2;
    const dots = reprise.map((r, i) => ({
      w: i === idx ? "28px" : "8px",
      fill: i === idx && !motion ? "1" : "0",
      anim: i === idx && motion ? "slideProgress 7000ms linear both" : "none"
    }));

    const L = live ? st.launch : null;
    const ease = "cubic-bezier(0.32, 0.72, 0, 1)";
    // L’écran garde ses coins arrondis pendant qu’il grandit, puis les coins passent en angle droit une fois en plein écran.
    const full = !!L && (L.phase === "grow" || L.phase === "open" || L.phase === "round");
    const lr = L ? (full ? { x: 0, y: 0, w: 1920, h: 1080 } : L.rect) : { x: 0, y: 0, w: 0, h: 0 };
    // Découpe d’un calque plein écran (pas de redimensionnement) : seule la zone visible change, c’est beaucoup plus fluide.
    const rad = L && L.phase === "open" ? 0 : (L && L.fromHero ? 16 : 22);
    const cornersOnly = !!L && (L.phase === "open" || L.phase === "round");
    const launch = {
      on: !!L,
      clip: "inset(" + lr.y.toFixed(1) + "px " + (1920 - lr.x - lr.w).toFixed(1) + "px " + (1080 - lr.y - lr.h).toFixed(1) + "px " + lr.x.toFixed(1) + "px round " + rad + "px)",
      bg: L ? (full ? L.endBg : L.startBg) : "transparent",
      fg: "#F5F5F7",
      opacity: L && L.phase === "fade" ? "0" : "1",
      transition: motion
        ? (cornersOnly ? "clip-path 320ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-clip-path 320ms cubic-bezier(0.4, 0, 0.2, 1)" : "clip-path 580ms " + ease + ", -webkit-clip-path 580ms " + ease) + ", background-color 420ms ease, opacity 240ms ease"
        : "none",
      contentOpacity: L && L.phase === "open" ? "1" : "0",
      contentScale: L && (L.phase === "open") ? "1" : "0.92",
      contentTransition: motion ? "opacity 260ms ease, transform 560ms cubic-bezier(0.34, 1.56, 0.64, 1)" : "none",
      name: L ? L.name : "",
      sub: L && L.sub ? L.sub : "",
      hint: L ? L.hint : "",
      back: (e) => this._back(e && e.currentTarget)
    };

    this._nav = { view: view, idx: idx, ordered: ordered, slotOf: slotOf, catalog: catalog, progFor: progFor, pos: pos };
    const editBar = {
      on: !!st.edit && live,
      anim: motion ? "editBarIn 420ms cubic-bezier(0.34, 1.4, 0.5, 1) both" : "none",
      text: st.carry ? (this._dragging ? "Relâche pour poser" : "Flèches pour déplacer · OK pour poser") : "OK pour prendre une appli (ou glisse-la) · Retour pour terminer",
      done: () => this._endEdit()
    };
    const claimRemote = (e) => {
      if (typeof window !== "undefined") window.__dcRemote = "main";
      if (e && e.type === "mousedown") this._armIdle();
      if (e && e.currentTarget) this._root = e.currentTarget;
    };

    const now = new Date();
    const heure = now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
    // Météo à Paris, à côté de l’heure : sur la TV, Open-Meteo (props.meteo, rafraîchie toutes les 15 min ; null tant
    // qu’elle n’est pas arrivée) ; dans la maquette, une valeur d’exemple.
    const mt = this.props.meteo === undefined ? { temp: 13, code: 2, isDay: true } : this.props.meteo;
    const ciel = (c, jour) => c <= 1 ? (jour ? "soleil" : "lune")
      : c === 2 ? (jour ? "eclaircie" : "eclaircieNuit")
      : c === 3 ? "nuage"
      : c === 45 || c === 48 ? "brouillard"
      : c >= 51 && c <= 57 ? "bruine"
      : (c >= 61 && c <= 67) || (c >= 80 && c <= 82) ? "pluie"
      : (c >= 71 && c <= 77) || c === 85 || c === 86 ? "neige"
      : c >= 95 ? "orage" : "nuage";
    const cielTexte = { soleil: "Ensoleillé", lune: "Ciel dégagé", eclaircie: "Éclaircies", eclaircieNuit: "Éclaircies", nuage: "Couvert", brouillard: "Brouillard", bruine: "Bruine", pluie: "Pluie", neige: "Neige", orage: "Orage" };
    const mk = mt ? ciel(mt.code, mt.isDay !== false) : "nuage";
    // Vrai signe moins (−2°), plus lisible que le tiret.
    const degres = mt ? String(Math.round(mt.temp)).replace("-", "−") + "°" : "";
    const meteo = {
      temp: degres,
      aria: mt ? "Paris : " + Math.round(mt.temp) + " degrés, " + cielTexte[mk] : "",
      opacity: mt && !isVeille ? "1" : "0"
    };
    Object.keys(cielTexte).forEach((k) => { meteo[k] = k === mk; });
    const fontClass = this.props.policeHeure === "SF Pro Compressed" ? "" : "arizona";
    if (this._fontClass !== fontClass) {
      this._fontClass = fontClass;
      clearTimeout(this._measureT);
      this._measureT = setTimeout(() => this._measureClock(), 60);
    }
    const lock = {
      opacity: isVeille ? "1" : "0",
      visibility: isVeille ? "visible" : "hidden",
      pointer: isVeille && !st.launch ? "auto" : "none",
      ariaHidden: isVeille ? "false" : "true",
      transition: motion ? (isVeille ? "opacity 600ms ease, visibility 0s" : "opacity 480ms ease, visibility 0s linear 480ms") : "none",
      // L’heure remonte de derrière la montagne en arrivant (avec un léger rebond).
      clockShift: isVeille ? "0px" : "70px",
      topShift: isVeille ? "0px" : "20px",
      clockOpacity: isVeille ? "1" : "0",
      clockTransition: motion ? "transform 950ms cubic-bezier(0.34, 1.3, 0.5, 1) 90ms, opacity 500ms ease 90ms" : "none",
      // Dans un texte SVG, une valeur simple serait enveloppée dans un <span> (invisible en SVG) : on passe une liste pour garder du texte brut.
      heureTxt: [heure],
      fontClass: fontClass,
      k: String(st.clockK || 1.14),
      date: now.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }),
      // Même météo que celle affichée à côté de l’heure.
      meteo: mt ? degres + " " + cielTexte[mk] : "",
      unlock: () => this._wakeUp(),
      drift: isVeille && motion ? "veilleDerive 90s ease-in-out infinite" : "none"
    };

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
      editBar: editBar,
      sys: sys,
      claimRemote: claimRemote,
      lock: lock,
      topClockOpacity: isVeille ? "0" : "1",
      accent: accent,
      s: scenes[cur.scene],
      kenBurns: motion && live ? "kenburns 36s ease-in-out infinite alternate" : "none",
      kenPlay: isApps || (L && L.phase === "open") ? "paused" : "running",
      heroAnim: motion ? "heroIn" + (idx % 2 ? "2" : "") + " 600ms cubic-bezier(0.2, 0.8, 0.2, 1) both" : "none",
      hero: hero,
      heroBgs: heroBgs,
      meteo: meteo,
      photoScrim: cur.backdrop ? "1" : "0",
      isApps: isApps,
      isHero: isHero,
      showDock: showDock,
      hub: hub,
      launch: launch,
      dockShift: isHero ? "320px" : "0px",
      dockOpacity: isHero ? "0" : "1",
      dockTransition: motion ? "transform 700ms cubic-bezier(0.34, 1.26, 0.5, 1), opacity 420ms ease" : "opacity 200ms ease",
      dotsOpacity: isApps || isHero ? "0" : "1",
      cards: cards,
      cardW: cardW + "px",
      cardH: cardH + "px",
      cardR: Math.round(cardW * 0.075) + "px",
      cardGap: cardGap + "px",
      cardTrackX: Math.round(railX) + "px",
      cardTrackTransition: motion ? "transform 520ms cubic-bezier(0.22, 1, 0.36, 1)" : "none",
      cardsOpacity: showCards ? "1" : "0",
      cardsShift: showCards ? "0px" : "40px",
      cardsPointer: showCards && !st.launch ? "auto" : "none",
      cardsTransition: motion ? "opacity 420ms ease, transform 680ms cubic-bezier(0.34, 1.4, 0.5, 1)" : "opacity 200ms ease",
      dotsTransition: motion ? "opacity 380ms ease, transform 640ms cubic-bezier(0.22, 1, 0.36, 1)" : "opacity 380ms ease",
      stageShift: isApps ? "-660px" : "0px",
      stageTransition: motion ? "transform 760ms cubic-bezier(0.22, 1, 0.36, 1)" : "none",
      blurOpacity: isApps ? "1" : "0",
      blurVisibility: isApps ? "visible" : "hidden",
      blurTransition: motion ? (isApps ? "opacity 620ms ease, visibility 0s" : "opacity 620ms ease, visibility 0s linear 620ms") : "none",
      heroOpacity: isApps ? "0" : "1",
      goHome: goHome,
      onWheel: onWheel,
      swipeStart: swipeStart,
      swipeEnd: swipeEnd,
      touchStart: touchStart,
      touchEnd: touchEnd,
      heroClick: heroClick,
      heroPrev: heroPrev,
      heure: heure,
      hero0: heroK === 0,
      hero1: heroK === 1,
      hero2: heroK === 2,
      hero3: heroK === 3,
      hero4: heroK === 4,
      hero5: heroK === 5,
      hero6: heroK === 6,
      hero7: heroK === 7,
      hero8: heroK === 8,
      hero9: heroK === 9,
      hero10: heroK === 10,
      dots: dots,
      tiles: tiles
    };
  }
}
  return Component;
}

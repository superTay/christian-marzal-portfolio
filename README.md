<a href="https://christian-marzal-portfolio.vercel.app/">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:00F5D4,50:7B61FF,100:FF2A6D&height=220&section=header&text=christian-marzal-portfolio&fontSize=42&fontColor=ffffff&desc=Single-page%20portfolio%20%C2%B7%20Vanilla%20HTML%20%2B%20CSS%20%2B%20JS%20%C2%B7%20Trilingual%20%C2%B7%20Zero%20build&descSize=17&descAlign=50&descAlignY=72" alt="Christian Marzal della Rovere — portfolio banner" width="100%">
</a>

<p align="center">
  <a href="https://christian-marzal-portfolio.vercel.app/"><img src="https://img.shields.io/badge/Live%20site-christian--marzal--portfolio.vercel.app-00F5D4?style=for-the-badge&logo=vercel&logoColor=07091A&labelColor=07091A" alt="Live site"></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Deploy-auto%20on%20push-7B61FF?style=for-the-badge&logo=vercel&logoColor=white" alt="Auto deploy"></a>
  <img src="https://img.shields.io/badge/Build-zero%20config-FF2A6D?style=for-the-badge" alt="Zero build">
  <img src="https://img.shields.io/badge/i18n-ES%20%C2%B7%20EN%20%C2%B7%20FR-FFB84D?style=for-the-badge" alt="Trilingual">
</p>

<p align="center"><sub>
  <a href="#-what-it-is">About</a> &nbsp;·&nbsp;
  <a href="#-highlights">Highlights</a> &nbsp;·&nbsp;
  <a href="#-tech">Tech</a> &nbsp;·&nbsp;
  <a href="#-structure">Structure</a> &nbsp;·&nbsp;
  <a href="#-run-locally">Run locally</a> &nbsp;·&nbsp;
  <a href="#-deploy">Deploy</a> &nbsp;·&nbsp;
  <a href="#-spanish-version">🇪🇸 ES</a>
</sub></p>

---

## 🪪 What it is

Personal portfolio site for **[Christian Marzal della Rovere](https://github.com/superTay)** — junior full-stack developer, automation specialist and trilingual builder. Single-page application built from scratch with **vanilla HTML, CSS and JavaScript** — no framework, no bundler, no build step. The whole site is three files plus assets, served as static.

The repo is also a small craft demo: it shows what I can do with the platform primitives alone — animated mesh gradients, a terminal typewriter, IntersectionObserver scroll-reveal, animated metric counters, runtime i18n in three languages, and a design system in pure CSS custom properties.

**→ [Open the live site](https://christian-marzal-portfolio.vercel.app/)**

---

## ✨ Highlights

**Hero with live terminal typewriter.** A simulated `christian@portfolio: ~` shell types lines character-by-character on load with a blinking cursor — pure DOM + `setTimeout`, no library.

**Animated mesh gradient background.** Three blurred radial blobs (mint / magenta / violet) drift in an infinite loop via CSS `@keyframes`, layered with a subtle grid overlay. Renders on every device, costs no JS.

**Trilingual at runtime.** Full ES / EN / FR switcher — every translatable node carries a `data-i18n` key, the dictionary lives in `script.js`, and the active language persists in `localStorage`. Switching is instant.

**Animated metric counters.** Six "big metrics" (commits, n8n workflows, ROC-AUC, languages, hours, projects) ease from 0 to their target value when scrolled into view, using `IntersectionObserver`.

**Scroll-reveal cards.** Project cards fade and slide in as they enter the viewport, again via `IntersectionObserver` — no scroll listeners, no jank.

**Self-contained design system.** Every color, font, spacing token and glow lives in `:root` CSS custom properties — change four hex values and the whole site rethemes. Three Google Fonts (Space Grotesk display, Inter body, JetBrains Mono code).

**Graceful image fallbacks.** Every `<img>` declares an `onerror` fallback to a hand-drawn CSS mockup — the site never shows a broken icon, even before you add the asset.

**Iframe-ready mobile mockup.** The Flutter app card sits inside a real-looking iPhone CSS frame.

**Sections shipped:**
&nbsp;&nbsp;• Hero with terminal + CTA buttons + availability status
&nbsp;&nbsp;• Featured: 3 KonquerAI projects (Dashboard, Mobile, Backend) with screenshots / mockups, chips, metrics and repo links
&nbsp;&nbsp;• More projects: 4 more (Ceremonias Holísticas, Heart Disease NN, FIFA Analytics, BookStore ORM) with live demos
&nbsp;&nbsp;• Stack: 6 categories (Frontend / Backend / Mobile / DBs / AI & ML / DevOps) — only what I actually use in production
&nbsp;&nbsp;• Big metrics: six animated numbers
&nbsp;&nbsp;• About me with photo, language tags and strengths list
&nbsp;&nbsp;• Contact: email / GitHub / LinkedIn cards
&nbsp;&nbsp;• Sticky navbar with logo, anchor nav, lang switcher and GitHub icon

---

## 🧰 Tech

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=07091A" alt="JavaScript">
  <img src="https://img.shields.io/badge/Vanilla-no%20framework-00F5D4?style=flat-square" alt="No framework">
  <img src="https://img.shields.io/badge/Google%20Fonts-Inter%20%C2%B7%20Space%20Grotesk%20%C2%B7%20JetBrains%20Mono-4285F4?style=flat-square&logo=googlefonts&logoColor=white" alt="Fonts">
  <img src="https://img.shields.io/badge/Vercel-deploy-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel">
  <img src="https://img.shields.io/badge/IntersectionObserver-scroll%20reveal%20%2B%20counters-7B61FF?style=flat-square" alt="IntersectionObserver">
  <img src="https://img.shields.io/badge/Web%20APIs-localStorage%20i18n-FF2A6D?style=flat-square" alt="localStorage">
</p>

No dependencies. No `package.json`. No build. Just open `index.html` and it runs.

---

## 🗂 Structure

```
christian-marzal-portfolio/
├── index.html      — semantic HTML, 8 sections, data-i18n keys
├── styles.css      — full design system (CSS variables) + animations
├── script.js       — terminal, i18n, IntersectionObserver, counters
├── assets/
│   ├── foto_perfil.jpg
│   ├── konquerai-web.jpg
│   └── konquerai-mobile.jpg
└── README.md
```

Three source files. ~2,200 lines combined. Zero generated files.

---

## 🚀 Run locally

The site is fully static. Three ways to view it:

```bash
# Option 1 — just open the file
open index.html        # macOS
xdg-open index.html    # Linux

# Option 2 — Python (auto-reload on refresh)
python3 -m http.server 8000
# → http://localhost:8000

# Option 3 — Node
npx serve .
```

No install step. No `.env`. No backend.

---

## 🛰 Deploy

Live at **[christian-marzal-portfolio.vercel.app](https://christian-marzal-portfolio.vercel.app/)** — Vercel detects it as a static site automatically, **auto-deploys on every push to `main`**.

<details>
<summary><b>Other zero-config options</b></summary>

<br>

**GitHub Pages** — Settings → Pages → Source: `main` branch / root → Save.
**Netlify Drop** — drag the folder onto [app.netlify.com/drop](https://app.netlify.com/drop). URL in 30 seconds.
**Cloudflare Pages** — connect the repo, leave build command empty, output directory `/`.

</details>

---

## 🎨 Editing the content

<details>
<summary><b>Where each thing lives</b></summary>

<br>

| What | Where |
|------|-------|
| Translations (ES/EN/FR) | `script.js` → `const i18n = { es: {...}, en: {...}, fr: {...} }` |
| Hero terminal lines | `script.js` → `terminalContent` array |
| Big metric values | `index.html` → `<span data-counter="...">` |
| Project cards | `index.html` → `<article class="card ...">` |
| Theme colors | `styles.css` → `:root` → `--accent-1..4` |
| Fonts | Already loaded in `<head>` (swap the Google Fonts URL) |
| Profile picture | `assets/foto_perfil.jpg` (600×750 vertical 4:5) |

</details>

---

## 🇪🇸 Spanish version

<details>
<summary><b>Versión en español</b></summary>

<br>

Sitio personal de **[Christian Marzal della Rovere](https://github.com/superTay)** — full-stack junior, especialista en automatizaciones y builder trilingüe. Single-page hecho desde cero con **HTML + CSS + JavaScript vanilla** — sin framework, sin bundler, sin paso de build. Tres archivos más assets, servidos como estáticos.

El repo es también una pequeña demo de oficio: enseña lo que puedo hacer con las primitivas de la plataforma — mesh gradients animados, terminal con efecto typewriter, scroll-reveal con `IntersectionObserver`, contadores animados, i18n runtime en tres idiomas y un design system en CSS custom properties.

**→ [Abrir el sitio en vivo](https://christian-marzal-portfolio.vercel.app/)**

**Lo que hay dentro:** terminal animada en el hero, fondo mesh con tres blobs flotantes (mint / magenta / violeta), switcher ES/EN/FR con persistencia en `localStorage`, contadores que cuentan al hacer scroll, cards con fallback CSS si falla la imagen, marco de iPhone para la app móvil, design tokens en `:root`. Sin dependencias, sin `package.json`.

</details>

---

<p align="center">
  Built solo · No framework · No build step · <b>Open <a href="https://christian-marzal-portfolio.vercel.app/">the live site</a> for the full effect.</b>
</p>

<p align="center">
  📬 <a href="mailto:christianmarzaldellarovere@gmail.com">christianmarzaldellarovere@gmail.com</a> ·
  💼 <a href="https://www.linkedin.com/in/christian-marzal-della-rovere-3455073a7/">LinkedIn</a> ·
  🌐 <a href="https://christian-marzal-portfolio.vercel.app/">Portfolio</a>
</p>

<a href="https://christian-marzal-portfolio.vercel.app/">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF2A6D,50:7B61FF,100:00F5D4&height=110&section=footer" alt="" width="100%">
</a>

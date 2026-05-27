# Portfolio web — Christian Marzal della Rovere

Single-page portfolio en HTML + CSS + JS vanilla. Estética dark, vibrante, con efecto terminal typewriter en el hero, gradientes mesh animados de fondo, scroll-reveal en las cards, contadores animados, switcher de idioma ES/EN/FR.

## Archivos

- `index.html` — estructura
- `styles.css` — estilos (todo el design system con CSS variables)
- `script.js` — terminal, i18n, scroll reveal, contadores
- `assets/` — para imágenes/favicons que añadas más adelante

## Ver en local

Abre `index.html` directamente en el navegador (doble click). No necesita servidor. Si quieres una vista limpia con auto-reload mientras editas:

```bash
cd ~/Desktop/buscar_trabajo/04_portfolio_web
python3 -m http.server 8000
# o si tienes node:
npx serve .
```

Y abre `http://localhost:8000`.

## Imágenes a añadir (tú las pones)

Guarda las imágenes en `04_portfolio_web/assets/` con estos nombres exactos. Si falta alguna, el portfolio muestra placeholders/mockups en su lugar (no se rompe).

| Imagen | Ruta | Tamaño recomendado | Notas |
|--------|------|---------------------|-------|
| Foto de perfil | `assets/foto_perfil.jpg` | 600×750 (vertical 4:5) | Tu portrait profesional |
| Web KonquerAI | `assets/konquerai-web.jpg` | 1400×900 o similar | Foto/screenshot del dashboard. Si pones la del laptop con casco de obra, el CSS hace zoom automático sobre la pantalla |
| Mobile KonquerAI | `assets/konquerai-mobile.jpg` | Vertical (ratio ~9:19) | Captura limpia del móvil. Si la pones, aparece dentro de un marco de iPhone real |

Recarga el navegador tras añadir cada archivo. Las imágenes deben tener exactamente esos nombres.

## Deploy gratuito — opciones

### Opción 1: Vercel (recomendado, 2 minutos)

1. Crea cuenta en [vercel.com](https://vercel.com) con tu GitHub.
2. Crea un repo nuevo `christian-marzal-portfolio` con esta carpeta dentro.
3. En Vercel → "Add New Project" → importa el repo → Deploy. Vercel detecta que es estático y lo despliega directo.
4. URL: `christian-marzal-portfolio.vercel.app` (puedes ponerle dominio propio luego).

### Opción 2: GitHub Pages

1. Crea repo `superTay.github.io` (o cualquier nombre con la opción `gh-pages`).
2. Sube los 3 archivos a la raíz.
3. En Settings → Pages → Source → main branch → Save.
4. URL: `https://supertay.github.io` o `https://supertay.github.io/<repo-name>`.

### Opción 3: Netlify drop

1. Ir a [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arrastrar la carpeta `04_portfolio_web` al área de drop.
3. URL inmediata generada.

## Editar contenido

- **Texto i18n:** abre `script.js`, sección `const i18n = { es: {...}, en: {...}, fr: {...} }`. Cada clave `data-i18n` del HTML tiene su texto en los 3 idiomas.
- **Contenido del terminal:** `script.js` → `terminalContent`. Edita las líneas para tu nuevo discurso (ojo: si cambias la longitud, ajusta el ancho mínimo del terminal en `styles.css`).
- **Métricas grandes:** `index.html` sección "METRICS". Cambia `data-counter` y la etiqueta.
- **Cards de proyecto:** `index.html`. Para cambiar un proyecto, edita su `<article class="card ...">` (titulo, chips, métricas, enlaces).

## Personalización rápida

- **Colores:** en `styles.css`, `:root`, cambia las variables `--accent-1`, `--accent-2`, `--accent-3`, `--accent-4`.
- **Tipografías:** ya cargadas vía Google Fonts (Space Grotesk + Inter + JetBrains Mono).
- **Foto:** ver sección "Foto de perfil" arriba.

## Próximos pasos sugeridos

- [ ] Foto de perfil profesional.
- [ ] Screenshots reales (no mockups) en las cards de proyectos. Crear en `assets/screenshots/`.
- [ ] Favicon (`assets/favicon.svg`).
- [ ] Dominio propio (ej. `christianmarzal.dev` o `marzal.dev`).
- [ ] Open Graph image (para que se vea bien al compartir en LinkedIn/WhatsApp).
- [ ] Analytics (opcional, ej. Plausible o Vercel Analytics).

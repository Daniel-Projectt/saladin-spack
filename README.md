# Saladín Industria Gráfica / SPACK — Sitio web

Sitio corporativo estático, bilingüe (ES por defecto / EN), construido con **Astro 5 + Tailwind CSS v4**. Reemplaza el WordPress de saladinig.com con foco en captar cotizaciones B2B.

## Correr en local

```bash
npm install
npm run dev        # http://localhost:4321  (la raíz redirige a /es/)
npm run build      # genera dist/
npm run preview    # sirve dist/ en local
```

## Desplegar

Recomendado: **Cloudflare Pages** (gratis, CDN global, soporta `_redirects`) o **Vercel**.

- Build command: `npm run build` · Output: `dist`
- El archivo `public/_redirects` ya redirige `/` → `/es/` con 301 (Cloudflare/Netlify; en GitHub Pages la raíz usa meta-refresh estático).
- **Preview actual:** GitHub Pages en https://daniel-projectt.github.io/saladin-spack/ (build con `DEPLOY_TARGET=gh`: base `/saladin-spack`, canonical a github.io y `noindex`). `public/robots.txt` solo es válido en producción (apunta el sitemap a saladinig.com); GitHub Pages lo sirve pero el `noindex` de las páginas manda.

## Dónde se edita cada cosa

| Qué | Dónde |
|---|---|
| Todos los textos (por idioma) | `src/content/es/*.json` y `src/content/en/*.json` |
| Colores y tipografías (design tokens) | `src/styles/global.css` → bloque `@theme` |
| Teléfono, WhatsApp, email, direcciones | `src/data/company.ts` |
| Slugs de URLs por idioma | `src/i18n/routes.ts` |
| Formulario RFQ y su endpoint | `src/components/RFQForm.astro` |
| Timeline de 45 años (hitos) | `src/content/{es,en}/about.json` → `timeline.milestones` |
| Placeholders de fotos | `src/components/PlaceholderImage.astro` (sustituir por `<picture>` AVIF/WebP reales manteniendo `width`/`height`) |

## ⚠️ Datos pendientes (Sección B de la auditoría)

> El código ya está preparado para recibirlos: nada de esto aparece en el HTML servido mientras falte (`grep -r "REEMPLAZAR\|XXXXXXX" dist/` → vacío). Al poner cada valor, la funcionalidad reaparece sola.

| # | Dato | Quién lo consigue | Archivo : línea | Efecto al ponerlo |
|---|---|---|---|---|
| B1 | Número WhatsApp Business | Dueño del proyecto | `src/data/company.ts:14-15` (`whatsapp`, `whatsappHref`, hoy `null`) | Reaparecen botón flotante + líneas de footer/contacto |
| B2 | Endpoint Formspree | Requiere cuenta con email real (ideal servicioalcliente@) | `src/components/RFQForm.astro:22` (`FORM_ENDPOINT`) | El formulario pasa de "en configuración" a envío real con estados. Hacer 1 envío de prueba. Adjuntos de 10 MB = plan pago de Formspree (decisión de presupuesto) |
| B3a | Logos oficiales (SVG/AI) | Los entrega Saladín | `src/components/Header.astro` y `Footer.astro` (wordmark "⌖SALADÍN"; mantener texto en `aria-label`) | Marca real en header/footer |
| B3b | Hex del manual de marca | Los entrega Saladín | `src/styles/global.css:11,18,28,32` (`--color-ink-950`, `--color-paper`, `--color-press-600`, `--color-spack-500`) | 4 valores repintan todo el sitio |
| B4 | Fotos reales de planta/producto | Sesión de fotos con el cliente | `src/assets/stock/` + `src/data/stockImages.ts` (lista de tomas abajo); reescribir `alt` en `src/content/{es,en}/home.json` y `products.json` | Sustituyen el stock de Pexels |
| B5a | Specs técnicas de plegadizas y etiquetas | Cliente | `src/content/es/products.json:41-42,114-116` (+ espejo EN) — hoy filtradas del HTML | Aparecen filas nuevas en las tablas de specs |
| B5b | Autorización de marcas (Nestlé, Colgate…) | Cliente | `src/content/{es,en}/home.json` (sección `clients`) | Hoy solo texto histórico; con autorización, logos |
| B5c | Dominio final (¿saladinig.com?) | Cliente | `astro.config.mjs:7` (`SITE`) + `src/data/company.ts:17` (`site`) + `public/robots.txt` | Canonical/sitemap/JSON-LD al dominio real |
| B5d | Horario de atención | Confirmar con cliente (directorios dicen L–J 8:00–17:30, V 8:00–16:30) | `src/content/{es,en}/contact.json` (agregar al bloque `direct`) | Se muestra en Contacto |
| — | Pin exacto de mapas | Verificar en el preview | `src/data/company.ts` (`mapQuery` de cada sede) | Mapa cae en el punto correcto |
| — | Mapeo 301 de URLs viejas | Abrir cada `?page_id=` antes de apagar WordPress | Checklist de lanzamiento (abajo) | Redirects en Cloudflare |

## 📷 Fotos que debe entregar el cliente

**Estado actual:** todas las posiciones llevan **imágenes de stock provisionales** (licencia Pexels, uso libre sin atribución; archivos en `public/images/stock/`, mapeo en `src/data/stockImages.ts`). IDs Pexels usados: 9550363, 31447457, 1440504, 19316517, 31438304, 17260158, 17260157, 32424228, 12336392, 7771976, 4483610. Al recibir las fotos reales, sustituir los archivos o actualizar `stockImages.ts`. Si se quita una entrada del mapeo, la posición vuelve automáticamente al placeholder SVG con su etiqueta. Ideal: horizontales ~1600px de ancho, buena luz de planta.

**Home**
1. Prensa offset en producción (hero, vertical u horizontal alta) — planta Herrera
2. Cajas plegadizas terminadas, varias industrias (card producto 01)
3. Cajas litolaminadas terminadas (card producto 02)
4. Rollos de etiquetas adhesivas impresas (card producto 03)
5. Planta SPACK Las Américas (exterior o interior de nave)

**Plegadizas (detalle)**
6. Estuches plegadizos de alimentos terminados
7. Troqueladora en operación
8. Detalle de impresión offset de un estuche

**Litolaminado (detalle)**
9. Cajas litolaminadas terminadas, planta Las Américas
10. Laminadora / proceso de litolaminado
11. Display de punto de venta litolaminado

**Etiquetas (detalle)**
12. Rollos de etiquetas adhesivas impresas
13. Prensa de etiquetas en operación
14. Productos de clientes etiquetados (**solo con autorización escrita del cliente**)

> Nota: los nombres de marcas (Nestlé, Colgate, etc.) aparecen **solo como texto**; no subir logos de terceros sin autorización.

## ✅ Checklist de lanzamiento

- [ ] Completar la tabla "Datos pendientes" (arriba)
- [ ] Sustituir placeholders por fotos reales (AVIF/WebP, mantener `width`/`height`)
- [ ] Apuntar el dominio `saladinig.com` al hosting (Cloudflare Pages: agregar custom domain)
- [ ] **Redirects 301 de las URLs viejas de WordPress** — son query strings, así que en Cloudflare se hacen con *Redirect Rules* (no con `_redirects`):
  - `/?page_id=206` → `[REEMPLAZAR: página nueva equivalente]`
  - `/?page_id=438` → `[REEMPLAZAR: página nueva equivalente]`
  - `/?page_id=39` → `[REEMPLAZAR: página nueva equivalente]`
  - (Abrir cada URL vieja antes de apagar WordPress para ver qué contenido tenía y mapearla.)
- [ ] Google Search Console: verificar propiedad, enviar `sitemap-index.xml`
- [ ] Google Business Profile: crear/reclamar fichas de **ambas sedes** (Herrera y Las Américas) con el mismo NAP del sitio
- [ ] Probar el formulario RFQ end-to-end (envío real por Formspree) y el botón de WhatsApp con el número real
- [ ] Correr Lighthouse sobre el sitio publicado (objetivo ≥95 en las 4 categorías) — el sitio es estático, sin JS de framework; lo único externo son los iframes de Google Maps (ya con `loading="lazy"`)
- [ ] Revisar hreflang en Search Console (ES default + EN)
- [ ] Sincronizar el case study al portfolio del estudio (`case-study/` → `studio-portfolio`, vía `scripts/sync-case-studies.sh`)

## Estado de la auditoría (jul-2026)

**Hecho (Sección A):** canonical/hreflang/og:url/BreadcrumbList correctos en ambos targets (A1/A7) · imágenes por astro:assets con AVIF/WebP y todas las variantes <200 KB (A2) · og:image por defecto + twitter:card (A3) · formulario con fetch, estados accesibles, honeypot, fecha mínima y modo seguro sin endpoint (A4) · WhatsApp oculto hasta tener número (A5) · alt descriptivos separados del label interno (A6) · galería sin foto repetida, specs pendientes fuera del HTML, redirect raíz verificado en gh (A8) · tarjeta FSC en Calidad (C2).

**Pendiente:** todo lo de la tabla "Datos pendientes" (Sección B — requiere datos del dueño o del cliente) · C1 (OG por producto, usar prop `ogImage`) · C3 (prototipo de caja-dieline en el hero, en rama aparte si se decide explorar).

## Estructura

```
src/
  components/         Header, Footer, Timeline (firma), RFQForm, placeholders…
    pages/            Plantillas de página compartidas ES/EN
  content/es|en/      TODO el contenido editable (JSON por página)
  data/company.ts     Datos duros de la empresa
  i18n/routes.ts      Slugs localizados por página
  layouts/BaseLayout  <head> SEO (canonical, hreflang, OG, JSON-LD), header/footer
  pages/es|en/        Rutas delgadas que montan las plantillas
  styles/global.css   Design tokens (@theme) + estilos del oficio
```

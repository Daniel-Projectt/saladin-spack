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
- El archivo `public/_redirects` ya redirige `/` → `/es/` con 301.

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

## ⚠️ Lista de [REEMPLAZAR] pendientes

1. **Hex del manual de marca** — `src/styles/global.css` (`--color-ink-950`, `--color-paper`, `--color-press-600`, `--color-spack-500`). La paleta actual es provisional.
2. **Número de WhatsApp Business** — `src/data/company.ts` (`whatsapp` y `whatsappHref`, hoy `+1809XXXXXXX`).
3. **Endpoint del formulario** — `src/components/RFQForm.astro` (`FORM_ENDPOINT`, hoy `https://formspree.io/f/REEMPLAZAR`). Crear el form en Formspree (soporta adjuntos) o wirear Resend.
4. **Dominio final** — si no es `saladinig.com`: `astro.config.mjs` (`SITE`), `src/data/company.ts` (`site`) y `public/robots.txt`.
5. **Especificaciones técnicas reales** — `src/content/{es,en}/products.json`: sustratos/acabados de plegadizas y tecnologías/materiales de etiquetas están marcados `[REEMPLAZAR]`.
6. **Mapeo de URLs viejas** — a qué página nueva apunta cada `?page_id=` (ver checklist).
7. **Pin exacto de los mapas** — `src/data/company.ts` (`mapQuery` de cada sede) si el embed genérico no cae en el punto correcto.

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

- [ ] Reemplazar los 7 puntos de la lista `[REEMPLAZAR]`
- [ ] Sustituir placeholders por fotos reales (AVIF/WebP, mantener `width`/`height`)
- [ ] Apuntar el dominio `saladinig.com` al hosting (Cloudflare Pages: agregar custom domain)
- [ ] **Redirects 301 de las URLs viejas de WordPress** — son query strings, así que en Cloudflare se hacen con *Redirect Rules* (no con `_redirects`):
  - `/?page_id=206` → `[REEMPLAZAR: página nueva equivalente]`
  - `/?page_id=438` → `[REEMPLAZAR: página nueva equivalente]`
  - `/?page_id=39` → `[REEMPLAZAR: página nueva equivalente]`
  - (Abrir cada URL vieja antes de apagar WordPress para ver qué contenido tenía y mapearla.)
- [ ] Google Search Console: verificar propiedad, enviar `sitemap-index.xml`
- [ ] Google Business Profile: crear/reclamar fichas de **ambas sedes** (Herrera y Las Américas) con el mismo NAP del sitio
- [ ] Probar el formulario RFQ end-to-end (incluyendo adjunto) y el botón de WhatsApp con el número real
- [ ] Correr Lighthouse sobre el sitio publicado (objetivo ≥95 en las 4 categorías) — el sitio es estático, sin JS de framework; lo único externo son los iframes de Google Maps (ya con `loading="lazy"`)
- [ ] Revisar hreflang en Search Console (ES default + EN)

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

---
client: "Saladín Industria Gráfica / SPACK"
sector: "empaques y artes gráficas"
city: "Santo Domingo, República Dominicana"
year: 2026
url: "https://daniel-projectt.github.io/saladin-spack/es/" # [REEMPLAZAR: saladinig.com al pasar a producción]
services: ["research", "diseño", "build", "SEO técnico", "contenido bilingüe"]
stack: ["Astro 5", "Tailwind CSS v4", "GitHub Actions", "Formspree"]
brief: "Reemplazar un WordPress de 4 páginas por un sitio bilingüe orientado a captar cotizaciones B2B para una imprenta industrial con 45+ años."
constraint: "No existía manual de marca entregado, ni fotografía propia, ni número de WhatsApp ni endpoint de formulario al momento del build: todo el sistema se diseñó para recibir esos datos sin retrabajo — tokens de color centralizados (una paleta alterna completa vive en una rama), placeholders etiquetados que dicen qué foto va en cada posición, y un formulario con modo seguro que se activa solo al poner el endpoint."
results: null
featured: true
---

# Saladín Industria Gráfica / SPACK

Imprenta industrial dominicana fundada en 1979, pionera del litolaminado corrugado en el país,
con su marca de empaques SPACK en Zona Franca Las Américas. El sitio anterior era un WordPress
básico de 4 páginas con URLs `?page_id=`.

## Qué se construyó

- **18 páginas estáticas bilingües** (ES por defecto, EN completo) con slugs localizados por
  idioma y hreflang correcto — Astro 5 + Tailwind v4, cero JavaScript de framework.
- **Identidad tipográfica propia**: Archivo expandida para titulares, Public Sans de cuerpo,
  IBM Plex Mono para la capa técnica (cejillas, especificaciones, contadores) — más los guiños
  al oficio: barras de calibración CMYK como divisores, marcas de registro, textura de flauta
  en los bloques SPACK.
- **Elemento firma**: el timeline de 45 años que se "imprime" al hacer scroll — un rodillo con
  marca de registro desciende y la línea pasa de gris sin tinta a rojo de prensa, con cada hito
  revelándose como recién salido de máquina. Palabras fantasma en contorno (MARCAS, COLGATE,
  SPACK) narran la historia en el margen. Todo respeta `prefers-reduced-motion`.
- **Captación B2B**: formulario RFQ real de imprenta (producto, cantidad, dimensiones, fecha,
  honeypot anti-spam, estados accesibles) con preselección del producto desde cada página de
  detalle.
- **SEO técnico completo**: JSON-LD (Organization, LocalBusiness ×2 sedes, Product,
  BreadcrumbList), sitemap, canonical por target de despliegue, og:image generada por script.
- **Contenido real integrado desde la presentación comercial del cliente**: 24 empresas que
  confían (solo texto, sin logos de terceros), valores, aseguramiento de calidad e insumos.
- **Pipeline de imágenes**: AVIF/WebP responsivos, ninguna variante servida supera 200 KB.

## La restricción que definió el diseño

El build arrancó sin manual de marca, sin fotografía y sin los datos operativos (WhatsApp,
endpoint del formulario). En vez de esperar o inventar, el sistema se diseñó para **recibir
cada dato sin retrabajo**: los 4 hex de marca repintan el sitio desde un solo bloque de tokens
(la paleta morada muestreada del deck del cliente vive completa en la rama `paleta-morada`);
cada posición de foto es un placeholder etiquetado que dice qué toma va ahí; el WhatsApp y el
formulario aparecen solos al recibir sus valores. El sitio estuvo presentable en cada etapa
intermedia.

## Capturas

| Archivo | Qué muestra |
|---|---|
| `home-es-desktop.png` | Home completo, escritorio |
| `home-es-movil.png` | Home completo, móvil 390px |
| `nosotros-es.png` | Historia + misión + valores + sedes |
| `timeline-scrolled.png` | El timeline firma imprimiéndose (scroll) |
| `productos-es.png` | Índice de productos |
| `litolaminado-es.png` | Detalle de producto: specs E/B/C, galería |
| `calidad-es.png` | Las 9 tarjetas de calidad y capacidades |
| `contacto-es.png` | RFQ con preselección + sedes con mapas |
| `og-image.png` | Open Graph 1200×630 generada por script |

## Resultados

*Pendiente de medición a 30 días del lanzamiento en dominio propio. Sin estimaciones.*

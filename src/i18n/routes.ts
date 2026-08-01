export const locales = ['es', 'en'] as const;
export type Lang = (typeof locales)[number];

export type PageKey =
  | 'home'
  | 'about'
  | 'products'
  | 'product-plegadizas'
  | 'product-litolaminado'
  | 'product-etiquetas'
  | 'quality'
  | 'sustainability'
  | 'contact';

/** Slugs localizados por página. URLs limpias y semánticas. */
export const routes: Record<PageKey, Record<Lang, string>> = {
  home: { es: '', en: '' },
  about: { es: 'nosotros', en: 'about' },
  products: { es: 'productos', en: 'products' },
  'product-plegadizas': { es: 'productos/plegadizas', en: 'products/folding-cartons' },
  'product-litolaminado': { es: 'productos/litolaminado', en: 'products/litho-laminated-packaging' },
  'product-etiquetas': { es: 'productos/etiquetas', en: 'products/labels' },
  quality: { es: 'calidad', en: 'quality' },
  sustainability: { es: 'sostenibilidad', en: 'sustainability' },
  contact: { es: 'contacto', en: 'contact' },
};

import { withBase } from '~/lib/base';

/** Ruta absoluta interna para una página en un idioma (respeta el base path). */
export function path(key: PageKey, lang: Lang): string {
  const slug = routes[key][lang];
  return withBase(slug ? `/${lang}/${slug}/` : `/${lang}/`);
}

/** Clave de producto → PageKey de su detalle. */
export const productPageKeys = {
  plegadizas: 'product-plegadizas',
  litolaminado: 'product-litolaminado',
  etiquetas: 'product-etiquetas',
} as const;

export type ProductId = keyof typeof productPageKeys;

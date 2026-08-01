/**
 * Imágenes de stock PROVISIONALES (licencia Pexels, uso libre).
 * Viven en src/assets/stock/ para pasar por el pipeline de Astro
 * (AVIF/WebP, widths responsivos). Al recibir las fotos reales del
 * cliente: sustituir los archivos manteniendo nombres, o actualizar
 * estos imports. Créditos/IDs Pexels en el README.
 */
import type { ImageMetadata } from 'astro';
import type { ProductId } from '~/i18n/routes';

import prensaOffset from '~/assets/stock/prensa-offset.jpg';
import almacenCajas from '~/assets/stock/almacen-cajas.jpg';
import cajaImpresa from '~/assets/stock/caja-impresa.jpg';
import maquinaIndustrial from '~/assets/stock/maquina-industrial.jpg';
import detalleImpresion from '~/assets/stock/detalle-impresion.jpg';
import cajasCarton from '~/assets/stock/cajas-carton.jpg';
import texturaCorrugado from '~/assets/stock/textura-corrugado.jpg';
import cajasTapas from '~/assets/stock/cajas-tapas.jpg';
import envasesEtiquetados from '~/assets/stock/envases-etiquetados.jpg';
import etiquetaBlanca from '~/assets/stock/etiqueta-blanca.jpg';
import frascosEtiquetados from '~/assets/stock/frascos-etiquetados.jpg';

export const stockImages = {
  heroPress: prensaOffset,
  spackPlant: almacenCajas,
  products: {
    plegadizas: [cajaImpresa, maquinaIndustrial, detalleImpresion],
    litolaminado: [cajasCarton, texturaCorrugado, cajasTapas],
    etiquetas: [envasesEtiquetados, etiquetaBlanca, frascosEtiquetados],
  } satisfies Record<ProductId, ImageMetadata[]>,
};

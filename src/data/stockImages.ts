/**
 * Imágenes de stock PROVISIONALES (licencia Pexels, uso libre).
 * Sustituir por las fotos reales del cliente manteniendo estas rutas
 * o actualizando este archivo. Créditos/IDs Pexels en el README.
 */
import type { ProductId } from '~/i18n/routes';
import { withBase } from '~/lib/base';

const base = withBase('/images/stock');

export const stockImages = {
  heroPress: `${base}/prensa-offset.jpg`,
  spackPlant: `${base}/almacen-cajas.jpg`,
  products: {
    plegadizas: [
      `${base}/caja-impresa.jpg`,
      `${base}/maquina-industrial.jpg`,
      `${base}/detalle-impresion.png`,
    ],
    litolaminado: [
      `${base}/cajas-carton.jpg`,
      `${base}/textura-corrugado.jpg`,
      `${base}/cajas-tapas.jpg`,
    ],
    etiquetas: [
      `${base}/envases-etiquetados.jpg`,
      `${base}/etiqueta-blanca.jpg`,
      `${base}/frascos-etiquetados.jpg`,
    ],
  } satisfies Record<ProductId, string[]>,
};

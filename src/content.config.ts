/**
 * Los archivos de src/content/{es,en}/*.json se importan directamente en los
 * componentes (no usamos content collections). Este archivo evita que Astro
 * auto-genere colecciones y muestre la advertencia de deprecación.
 */
export const collections = {};

/**
 * Prefijo de rutas internas. En producción (saladinig.com) es ''.
 * En GitHub Pages (DEPLOY_TARGET=gh) es '/saladin-spack'.
 */
const raw = import.meta.env.BASE_URL;
export const BASE = raw.endsWith('/') ? raw.slice(0, -1) : raw;

/** Antepone el base a una ruta absoluta interna ('/es/…', '/images/…'). */
export const withBase = (p: string) => `${BASE}${p}`;

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// [REEMPLAZAR] si el dominio final no es saladinig.com
const SITE = 'https://saladinig.com';

// DEPLOY_TARGET=gh → build para la vista previa en GitHub Pages (subdirectorio)
const isGhPages = process.env.DEPLOY_TARGET === 'gh';

export default defineConfig({
  site: isGhPages ? 'https://daniel-projectt.github.io' : SITE,
  base: isGhPages ? '/saladin-spack' : '/',
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-DO', en: 'en' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

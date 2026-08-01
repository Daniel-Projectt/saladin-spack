/**
 * Genera public/og/og-default.png (1200×630) para Open Graph.
 * Correr: node scripts/generate-og.mjs
 * Estilo: fondo ink, wordmark SALADÍN, claim y barra de calibración CMYK.
 */
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#3f2b76"/>
  <!-- marca de registro -->
  <g stroke="#a5f0e7" stroke-width="6" fill="none">
    <circle cx="120" cy="180" r="34"/>
    <line x1="120" y1="122" x2="120" y2="158"/>
    <line x1="120" y1="202" x2="120" y2="238"/>
    <line x1="62" y1="180" x2="98" y2="180"/>
    <line x1="142" y1="180" x2="178" y2="180"/>
  </g>
  <text x="220" y="212" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="104" letter-spacing="6" fill="#f6f4ee">SALAD&#205;N</text>
  <text x="222" y="268" font-family="Arial, sans-serif" font-size="30" letter-spacing="10" fill="#a5f0e7">INDUSTRIA GR&#193;FICA · SPACK</text>
  <text x="222" y="392" font-family="Arial, sans-serif" font-weight="bold" font-size="52" fill="#f6f4ee">Empaque que imprime valor</text>
  <text x="222" y="452" font-family="Arial, sans-serif" font-size="28" fill="#9c90c6">Desde 1979 · Santo Domingo, Rep&#250;blica Dominicana</text>
  <!-- barra de calibración CMYK -->
  <g>
    <rect x="0" y="${H - 28}" width="150" height="28" fill="#00a5db"/>
    <rect x="150" y="${H - 28}" width="150" height="28" fill="#d5007f"/>
    <rect x="300" y="${H - 28}" width="150" height="28" fill="#f5d000"/>
    <rect x="450" y="${H - 28}" width="150" height="28" fill="#171717"/>
    <rect x="600" y="${H - 28}" width="150" height="28" fill="#c9a876"/>
    <rect x="750" y="${H - 28}" width="150" height="28" fill="#6a3fd6"/>
    <rect x="900" y="${H - 28}" width="150" height="28" fill="#241849"/>
    <rect x="1050" y="${H - 28}" width="150" height="28" fill="#f6f4ee"/>
  </g>
</svg>`;

mkdirSync('public/og', { recursive: true });
await sharp(Buffer.from(svg)).png().toFile('public/og/og-default.png');
console.log('OK: public/og/og-default.png generado');

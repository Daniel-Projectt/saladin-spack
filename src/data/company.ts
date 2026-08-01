/** Datos duros de la empresa — una sola fuente de verdad. */
export const company = {
  legalName: 'Saladín Industria Gráfica',
  brandChild: 'SPACK',
  founded: 1979,
  employees: 120,
  squareFeet: '97,000',
  phone: '+1 809-530-0101',
  phoneHref: '+18095300101',
  /* [REEMPLAZAR-B1] número real de WhatsApp Business. Mientras sea null,
     el botón flotante y las líneas de WhatsApp NO se renderizan.
     Al ponerlo (ej. '+1 809-555-1234' y 'https://wa.me/18095551234')
     todo reaparece solo. */
  whatsapp: null as string | null,
  whatsappHref: null as string | null,
  email: 'servicioalcliente@saladinig.com',
  site: 'https://saladinig.com',
  hq: {
    name: 'Saladín Industria Gráfica',
    street: 'Av. Isabel Aguiar No. 135, Zona Industrial de Herrera',
    city: 'Santo Domingo Oeste',
    country: 'DO',
    mapQuery: 'Av.+Isabel+Aguiar+135,+Zona+Industrial+de+Herrera,+Santo+Domingo+Oeste',
  },
  spack: {
    name: 'SPACK — Zona Franca Las Américas',
    street: 'Parque Industrial de Zona Franca Las Américas, Nave A7',
    city: 'Santo Domingo Este',
    country: 'DO',
    mapQuery: 'Parque+Industrial+Zona+Franca+Las+Americas,+Santo+Domingo+Este',
  },
} as const;

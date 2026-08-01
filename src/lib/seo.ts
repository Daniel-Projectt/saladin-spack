import { company } from '~/data/company';
import type { Lang } from '~/i18n/routes';

const SITE = company.site;

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.legalName,
    url: SITE,
    foundingDate: String(company.founded),
    founder: { '@type': 'Person', name: 'Eduardo Saladín Zacarías' },
    numberOfEmployees: { '@type': 'QuantitativeValue', value: company.employees },
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.hq.street,
      addressLocality: company.hq.city,
      addressCountry: 'DO',
    },
    brand: [{ '@type': 'Brand', name: 'SPACK' }],
  };
}

export function localBusinessJsonLd() {
  const base = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    url: SITE,
    telephone: company.phone,
    email: company.email,
    parentOrganization: { '@type': 'Organization', name: company.legalName },
  };
  return [
    {
      ...base,
      name: company.hq.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.hq.street,
        addressLocality: company.hq.city,
        addressCountry: 'DO',
      },
    },
    {
      ...base,
      name: company.spack.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.spack.street,
        addressLocality: company.spack.city,
        addressCountry: 'DO',
      },
    },
  ];
}

export function productJsonLd(opts: { name: string; description: string; url: string; lang: Lang }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    brand: { '@type': 'Brand', name: company.legalName },
    manufacturer: { '@type': 'Organization', name: company.legalName },
  };
}

export function breadcrumbJsonLd(items: { label: string; href?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE}${item.href}` } : {}),
    })),
  };
}

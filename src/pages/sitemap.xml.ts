import type { APIRoute } from 'astro';
import { vehicles } from '../data/vehicles';
import { legalPagesEn } from '../data/legalPages';

const site = 'https://eliteridemexico.com';

type BilingualRoute = {
	en: string;
	es: string;
	fr: string;
	changefreq: 'weekly' | 'monthly' | 'yearly';
	priority: string;
};

type SingleRoute = {
	path: string;
	changefreq: 'monthly' | 'yearly';
	priority: string;
};

const bilingualRoutes: BilingualRoute[] = [
	{ en: '/', es: '/es/', fr: '/fr/', changefreq: 'weekly', priority: '1.0' },
	{ en: '/about', es: '/es/about', fr: '/fr/about', changefreq: 'monthly', priority: '0.8' },
	{ en: '/our-fleet', es: '/es/our-fleet', fr: '/fr/our-fleet', changefreq: 'weekly', priority: '0.9' },
	{ en: '/contact', es: '/es/contact', fr: '/fr/contact', changefreq: 'monthly', priority: '0.7' },
	{ en: '/faq', es: '/es/preguntas-frecuentes', fr: '/fr/faq', changefreq: 'monthly', priority: '0.7' },
	{
		en: '/mexico-city-private-chauffeur',
		es: '/es/chofer-privado-cdmx',
		fr: '/fr/mexico-city-private-chauffeur',
		changefreq: 'monthly',
		priority: '0.8'
	},
	{
		en: '/guadalajara-private-driver',
		es: '/es/chofer-privado-guadalajara',
		fr: '/fr/guadalajara-private-driver',
		changefreq: 'monthly',
		priority: '0.8'
	},
	{
		en: '/cancun-airport-transfer',
		es: '/es/traslado-aeropuerto-cancun',
		fr: '/fr/cancun-airport-transfer',
		changefreq: 'monthly',
		priority: '0.8'
	},
	{
		en: '/puerto-vallarta-airport-transfer',
		es: '/es/traslado-aeropuerto-puerto-vallarta',
		fr: '/fr/puerto-vallarta-airport-transfer',
		changefreq: 'monthly',
		priority: '0.8'
	},
	{
		en: '/world-cup-2026-mexico',
		es: '/es/transporte-mundial-2026-mexico',
		fr: '/fr/world-cup-2026-mexico',
		changefreq: 'monthly',
		priority: '0.8'
	},
	{
		en: '/armored-vehicle-rental-mexico',
		es: '/es/vehiculos-blindados-mexico',
		fr: '/fr/armored-vehicle-rental-mexico',
		changefreq: 'monthly',
		priority: '0.8'
	},
	...legalPagesEn.map((page) => ({
		en: `/${page.slug}`,
		es: `/es/${page.alternateSlug}`,
		fr: `/${page.slug}`,
		changefreq: 'yearly' as const,
		priority: '0.4'
	}))
];

const singleRoutes: SingleRoute[] = vehicles.map((vehicle) => ({
	path: `/cars/${vehicle.slug}`,
	changefreq: 'monthly',
	priority: '0.7'
}));

const buildBilingualUrl = (path: string, englishPath: string, spanishPath: string, frenchPath: string, changefreq: string, priority: string) => `  <url>
    <loc>${site}${path}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${site}${englishPath}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${site}${spanishPath}"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${site}${frenchPath}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${site}${englishPath}"/>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

const buildSingleUrl = (path: string, changefreq: string, priority: string) => `  <url>
    <loc>${site}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

export const GET: APIRoute = async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${bilingualRoutes
	.flatMap((route) => [
		buildBilingualUrl(route.en, route.en, route.es, route.fr, route.changefreq, route.priority),
		buildBilingualUrl(route.es, route.en, route.es, route.fr, route.changefreq, route.priority),
		buildBilingualUrl(route.fr, route.en, route.es, route.fr, route.changefreq, route.priority)
	])
	.join('\n')}
${singleRoutes.map((route) => buildSingleUrl(route.path, route.changefreq, route.priority)).join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
};

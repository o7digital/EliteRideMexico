import type { APIRoute } from 'astro';
import { vehicles } from '../data/vehicles';
import { legalPagesEn } from '../data/legalPages';

const site = 'https://eliteridemexico.com';

type BilingualRoute = {
	en: string;
	es: string;
	changefreq: 'weekly' | 'monthly' | 'yearly';
	priority: string;
};

type SingleRoute = {
	path: string;
	changefreq: 'monthly' | 'yearly';
	priority: string;
};

const bilingualRoutes: BilingualRoute[] = [
	{ en: '/', es: '/es/', changefreq: 'weekly', priority: '1.0' },
	{ en: '/about', es: '/es/about', changefreq: 'monthly', priority: '0.8' },
	{ en: '/our-fleet', es: '/es/our-fleet', changefreq: 'weekly', priority: '0.9' },
	{ en: '/contact', es: '/es/contact', changefreq: 'monthly', priority: '0.7' },
	{
		en: '/mexico-city-private-chauffeur',
		es: '/es/chofer-privado-cdmx',
		changefreq: 'monthly',
		priority: '0.8'
	},
	{
		en: '/guadalajara-private-driver',
		es: '/es/chofer-privado-guadalajara',
		changefreq: 'monthly',
		priority: '0.8'
	},
	{
		en: '/cancun-airport-transfer',
		es: '/es/traslado-aeropuerto-cancun',
		changefreq: 'monthly',
		priority: '0.8'
	},
	{
		en: '/puerto-vallarta-airport-transfer',
		es: '/es/traslado-aeropuerto-puerto-vallarta',
		changefreq: 'monthly',
		priority: '0.8'
	},
	{
		en: '/world-cup-2026-mexico',
		es: '/es/copa-del-mundo-2026-mexico',
		changefreq: 'monthly',
		priority: '0.8'
	},
	{
		en: '/armored-vehicle-rental-mexico',
		es: '/es/vehiculos-blindados-mexico',
		changefreq: 'monthly',
		priority: '0.8'
	},
	...legalPagesEn.map((page) => ({
		en: `/${page.slug}`,
		es: `/es/${page.alternateSlug}`,
		changefreq: 'yearly' as const,
		priority: '0.4'
	}))
];

const singleRoutes: SingleRoute[] = vehicles.map((vehicle) => ({
	path: `/cars/${vehicle.slug}`,
	changefreq: 'monthly',
	priority: '0.7'
}));

const buildBilingualUrl = (path: string, englishPath: string, spanishPath: string, changefreq: string, priority: string) => `  <url>
    <loc>${site}${path}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${site}${englishPath}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${site}${spanishPath}"/>
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
		buildBilingualUrl(route.en, route.en, route.es, route.changefreq, route.priority),
		buildBilingualUrl(route.es, route.en, route.es, route.changefreq, route.priority)
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

export type CarDetail = {
	key: string;
	value: string;
	icon: string;
	alt: string;
};

export type FeaturedCarouselItem = {
	key: string;
	name: string;
	year?: string;
	image: string;
	href: string;
	ctaLabel: string;
	details: CarDetail[];
};

export type Location = {
	name: string;
	href?: string;
	image: string;
};

export type Step = {
	title: string;
	description: string;
	icon: string;
	alt: string;
};

export type HeroSlide = {
	key: string;
	image: string;
	alt: string;
	href?: string;
};

export type Offer = {
	key: string;
	title: string;
	description: string;
	ctaLabel: string;
	href: string;
};

export type SocialLink = {
	label: string;
	href: string;
	icon: string;
	alt: string;
};

export type Metric = {
	value: string;
	label: string;
};

export type FooterLink = {
	label: string;
	href: string;
	external?: boolean;
};

export interface HomeEsContent {
	seo: {
		title: string;
		description: string;
		canonicalUrl: string;
		ogImage: string;
	};
	brandName: string;
	nav: {
		homeLabel: string;
		aboutLabel: string;
		fleetLabel: string;
		contactLabel: string;
		ctaLabel: string;
		languageAriaLabel: string;
		spanishLabel: string;
		englishLabel: string;
	};
	hero: {
		titleBeforeHighlight: string;
		titleHighlight: string;
		titleAfterHighlight?: string;
		description: string;
		ctaLabel: string;
		ctaHref: string;
	};
	heroSlides: HeroSlide[];
	sections: {
		featuredCarsHeading: string;
		locationsHeading: string;
	};
	offers: Offer[];
	footer: {
		description: string;
		newsletterTitle: string;
		newsletterPlaceholder: string;
		newsletterSubmitLabel: string;
		pagesHeading: string;
		legalHeading: string;
		contactHeading: string;
		pagesLinks: FooterLink[];
		legalLinks: FooterLink[];
		contactLinks: FooterLink[];
		copyrightText: string;
		copyrightHref: string;
	};
	whatsappLink: string;
	featuredCarouselItems: FeaturedCarouselItem[];
	locations: Location[];
	steps: Step[];
	socialLinks: SocialLink[];
	metrics: Metric[];
}

const specIcons = {
	mileage: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf80e_mileage.svg',
	transmission:
		'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82b_transmission.svg',
	seats: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82a_seats.svg',
	baggage: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf7fd_baggage.svg'
} as const;

const baseCars: FeaturedCarouselItem[] = [
	{
		key: 'car-chevrolet-suburban',
		name: 'Chevrolet Suburban',
		href: '/cars/chevrolet-suburban-black',
		image: '/cars/chevy-suburban-black.webp',
		year: '2025',
		ctaLabel: 'Ver Detalles',
		details: [
			{
				key: 'mileage',
				value: '5200',
				icon: specIcons.mileage,
				alt: 'Mileage Icon'
			},
			{
				key: 'transmission',
				value: 'Automático',
				icon: specIcons.transmission,
				alt: 'Transmission Icon'
			},
			{
				key: 'seats',
				value: '7',
				icon: specIcons.seats,
				alt: 'Seats Icon'
			},
			{
				key: 'baggage',
				value: '8',
				icon: specIcons.baggage,
				alt: 'Baggage Icon'
			}
		]
	},
	{
		key: 'car-chevrolet-suburban-white',
		name: 'Chevrolet Suburban White',
		href: '/cars/chevrolet-suburban-white',
		image: '/cars/chevy-white.webp',
		year: '2025',
		ctaLabel: 'Ver Detalles',
		details: [
			{
				key: 'mileage',
				value: '4800',
				icon: specIcons.mileage,
				alt: 'Mileage Icon'
			},
			{
				key: 'transmission',
				value: 'Automático',
				icon: specIcons.transmission,
				alt: 'Transmission Icon'
			},
			{
				key: 'seats',
				value: '7',
				icon: specIcons.seats,
				alt: 'Seats Icon'
			},
			{
				key: 'baggage',
				value: '8',
				icon: specIcons.baggage,
				alt: 'Baggage Icon'
			}
		]
	},
	{
		key: 'car-gmc-yukon-denali',
		name: 'GMC Yukon Denali',
		href: '/cars/gmc-yukon-denali',
		image: '/cars/gmc-yukon-beige.webp',
		year: '2025',
		ctaLabel: 'Ver Detalles',
		details: [
			{
				key: 'mileage',
				value: '5100',
				icon: specIcons.mileage,
				alt: 'Mileage Icon'
			},
			{
				key: 'transmission',
				value: 'Automático',
				icon: specIcons.transmission,
				alt: 'Transmission Icon'
			},
			{
				key: 'seats',
				value: '7',
				icon: specIcons.seats,
				alt: 'Seats Icon'
			},
			{
				key: 'baggage',
				value: '8',
				icon: specIcons.baggage,
				alt: 'Baggage Icon'
			}
		]
	},
	{
		key: 'car-toyota-land-cruiser',
		name: 'Toyota Land Cruiser',
		href: '/cars/toyota-land-cruiser',
		image: '/cars/toyota-landcruiser-black.webp',
		year: '2024',
		ctaLabel: 'Ver Detalles',
		details: [
			{
				key: 'mileage',
				value: '5600',
				icon: specIcons.mileage,
				alt: 'Mileage Icon'
			},
			{
				key: 'transmission',
				value: 'Automático',
				icon: specIcons.transmission,
				alt: 'Transmission Icon'
			},
			{
				key: 'seats',
				value: '7',
				icon: specIcons.seats,
				alt: 'Seats Icon'
			},
			{
				key: 'baggage',
				value: '8',
				icon: specIcons.baggage,
				alt: 'Baggage Icon'
			}
		]
	}
];

const extraFeaturedCars: FeaturedCarouselItem[] = [
	{
		key: 'camionette-tahoe-01',
		name: 'Chevrolet Tahoe',
		image: '/cars/camionettes/WhatsApp Image 2026-03-12 at 19.31.58.webp',
		href: '/cars/chevrolet-tahoe',
		ctaLabel: 'Ver Detalles',
		details: [
			{ key: 'mileage', value: '-', icon: specIcons.mileage, alt: 'Icono de kilometraje' },
			{ key: 'transmission', value: 'Automática', icon: specIcons.transmission, alt: 'Ícono de transmisión' },
			{ key: 'seats', value: '7', icon: specIcons.seats, alt: 'Icono de asientos' },
			{ key: 'baggage', value: '8', icon: specIcons.baggage, alt: 'Icono de equipaje' }
		]
	},
	{
		key: 'camionette-yukon-01',
		name: 'GMC Yukon Denali',
		image: '/cars/camionettes/WhatsApp Image 2026-03-12 at 19.31.59.webp',
		href: '/cars/gmc-yukon-denali',
		ctaLabel: 'Ver Detalles',
		details: [
			{ key: 'mileage', value: '-', icon: specIcons.mileage, alt: 'Icono de kilometraje' },
			{ key: 'transmission', value: 'Automática', icon: specIcons.transmission, alt: 'Ícono de transmisión' },
			{ key: 'seats', value: '7', icon: specIcons.seats, alt: 'Icono de asientos' },
			{ key: 'baggage', value: '8', icon: specIcons.baggage, alt: 'Icono de equipaje' }
		]
	},
	{
		key: 'camionette-yukon-02',
		name: 'GMC Yukon Denali',
		image: '/cars/camionettes/WhatsApp Image 2026-03-12 at 19.31.59 (1).webp',
		href: '/cars/gmc-yukon-denali',
		ctaLabel: 'Ver Detalles',
		details: [
			{ key: 'mileage', value: '-', icon: specIcons.mileage, alt: 'Icono de kilometraje' },
			{ key: 'transmission', value: 'Automática', icon: specIcons.transmission, alt: 'Ícono de transmisión' },
			{ key: 'seats', value: '7', icon: specIcons.seats, alt: 'Icono de asientos' },
			{ key: 'baggage', value: '8', icon: specIcons.baggage, alt: 'Icono de equipaje' }
		]
	},
	{
		key: 'camionette-yukon-03',
		name: 'GMC Yukon Denali',
		image: '/cars/camionettes/WhatsApp Image 2026-03-12 at 19.32.17 (1).webp',
		href: '/cars/gmc-yukon-denali',
		ctaLabel: 'Ver Detalles',
		details: [
			{ key: 'mileage', value: '-', icon: specIcons.mileage, alt: 'Icono de kilometraje' },
			{ key: 'transmission', value: 'Automática', icon: specIcons.transmission, alt: 'Ícono de transmisión' },
			{ key: 'seats', value: '7', icon: specIcons.seats, alt: 'Icono de asientos' },
			{ key: 'baggage', value: '8', icon: specIcons.baggage, alt: 'Icono de equipaje' }
		]
	},
	{
		key: 'camionette-escalade-01',
		name: 'Cadillac Escalade',
		image: '/cars/camionettes/WhatsApp Image 2026-03-12 at 19.32.17.webp',
		href: '/cars/cadillac-escalade',
		ctaLabel: 'Ver Detalles',
		details: [
			{ key: 'mileage', value: '-', icon: specIcons.mileage, alt: 'Icono de kilometraje' },
			{ key: 'transmission', value: 'Automática', icon: specIcons.transmission, alt: 'Ícono de transmisión' },
			{ key: 'seats', value: '7', icon: specIcons.seats, alt: 'Icono de asientos' },
			{ key: 'baggage', value: '8', icon: specIcons.baggage, alt: 'Icono de equipaje' }
		]
	},
	{
		key: 'camionette-suburban-01',
		name: 'Chevrolet Suburban',
		image: '/cars/camionettes/WhatsApp Image 2026-03-12 at 19.38.51.webp',
		href: '/cars/chevrolet-suburban-black',
		ctaLabel: 'Ver Detalles',
		details: [
			{ key: 'mileage', value: '-', icon: specIcons.mileage, alt: 'Icono de kilometraje' },
			{ key: 'transmission', value: 'Automática', icon: specIcons.transmission, alt: 'Ícono de transmisión' },
			{ key: 'seats', value: '7', icon: specIcons.seats, alt: 'Icono de asientos' },
			{ key: 'baggage', value: '8', icon: specIcons.baggage, alt: 'Icono de equipaje' }
		]
	},
	{
		key: 'camionette-urvan-01',
		name: 'Nissan Urvan',
		image: '/cars/camionettes/WhatsApp Image 2026-03-12 at 19.49.03 (1).webp',
		href: '/cars/nissan-urvan',
		ctaLabel: 'Ver Detalles',
		details: [
			{ key: 'mileage', value: '-', icon: specIcons.mileage, alt: 'Icono de kilometraje' },
			{ key: 'transmission', value: 'Manual/Auto', icon: specIcons.transmission, alt: 'Ícono de transmisión' },
			{ key: 'seats', value: '14', icon: specIcons.seats, alt: 'Icono de asientos' },
			{ key: 'baggage', value: '-', icon: specIcons.baggage, alt: 'Icono de equipaje' }
		]
	}
];

export const defaultHomeEsContent: HomeEsContent = {
	seo: {
		title: 'Renta de SUV Premium con Chofer en México | Elite Ride Mexico',
		description:
			'Servicio privado de transporte premium en México: renta de SUV con chofer, traslados al aeropuerto, vehículos blindados y atención bilingüe en CDMX, Cancún, Guadalajara, Monterrey y más destinos.',
		canonicalUrl: 'https://eliteridemexico.com/es/',
		ogImage: 'https://eliteridemexico.com/cars/chevy-suburban-black.webp'
	},
	brandName: 'ELITE RIDE MEXICO',
	nav: {
		homeLabel: 'Inicio',
		aboutLabel: 'Nosotros',
		fleetLabel: 'Nuestra Flota',
		contactLabel: 'Contacto',
		ctaLabel: 'Reserva ahora',
		languageAriaLabel: 'Cambiar idioma',
		spanishLabel: 'ES',
		englishLabel: 'EN'
	},
	hero: {
		titleBeforeHighlight: 'Renta de SUV Premium con Chofer en',
		titleHighlight: 'México',
		description:
			'Traslados privados al aeropuerto, servicio ejecutivo con chofer, SUVs premium y vehículos blindados para viajeros, empresas, familias y delegaciones internacionales en México.',
		ctaLabel: 'Ver Nuestra Flota',
		ctaHref: '#featured-cars'
	},
	heroSlides: [
		{
			key: 'hero-bmw',
			image: '/slider/gemini-bmw.webp',
			alt: 'SUV premium con chofer en México',
			href: '/es/our-fleet'
		},
		{
			key: 'hero-suburban',
			image: '/cars/chevy-suburban-black.webp',
			alt: 'Chevrolet Suburban premium',
			href: '/cars/chevrolet-suburban-black'
		},
		{
			key: 'hero-yukon',
			image: '/cars/gmc-yukon-beige.webp',
			alt: 'GMC Yukon Denali premium',
			href: '/cars/gmc-yukon-denali'
		}
	],
	sections: {
		featuredCarsHeading: 'Vehículos Destacados',
		locationsHeading: 'Nuestras Ubicaciones'
	},
	offers: [
		{
			key: 'offer-airport-transfer',
			title: 'Traslados Aeropuerto 24/7',
			description: 'Reserva ida o ida y vuelta con chofer privado en minutos.',
			ctaLabel: 'Solicitar',
			href: '/es/contact'
		},
		{
			key: 'offer-hourly-chauffeur',
			title: 'Chofer Privado por Horas',
			description: 'Servicio ejecutivo flexible para eventos, negocios y rutas personalizadas.',
			ctaLabel: 'Cotizar',
			href: '/es/contact'
		},
		{
			key: 'offer-world-cup',
			title: 'Movilidad Copa Mundial 2026',
			description: 'Planeación de transporte premium para grupos y corporativos.',
			ctaLabel: 'Ver Detalles',
			href: '/es/transporte-mundial-2026-mexico'
		}
	],
	footer: {
		description: 'Servicio premium de renta de vehículos con chofer en los principales destinos de México.',
		newsletterTitle: 'Suscríbete a nuestro boletín',
		newsletterPlaceholder: 'example@gmail.com',
		newsletterSubmitLabel: 'Enviar',
		pagesHeading: 'Páginas',
		legalHeading: 'Legal',
		contactHeading: 'Contáctanos',
		pagesLinks: [
			{ label: 'Inicio', href: '/es' },
			{ label: 'Nosotros', href: '/es/about' },
			{ label: 'Nuestra Flota', href: '/es/our-fleet' },
			{ label: 'Contacto', href: '/es/contact' }
		],
		legalLinks: [
			{ label: 'Aviso de Privacidad', href: '/es/aviso-de-privacidad' },
			{ label: 'Cancelación', href: '/es/cancelacion' },
			{ label: 'Reembolsos', href: '/es/reembolsos' },
			{ label: 'Impuestos', href: '/es/impuestos' }
		],
		contactLinks: [
			{ label: '+52 5644166523', href: 'tel:+525644166523' },
			{ label: 'info@eliteridemexico.com', href: 'mailto:info@eliteridemexico.com' },
			{
				label: 'Goldsmith 250, Lomas de Chapultepec, Miguel Hidalgo, 11500, CDMX, México.',
				href: 'https://www.google.com/maps/search/Goldsmith+250,+Lomas+de+Chapultepec,+Ciudad+de+Mexico',
				external: true
			}
		],
		copyrightText: 'Copyright Elite Ride Mexico 2026 - hecho por o7Digital',
		copyrightHref: 'https://www.o7digital.com/en/index-digital-agency'
	},
	whatsappLink: 'https://wa.me/525644166523',
	featuredCarouselItems: [...baseCars, ...extraFeaturedCars],
	locations: [
		{ name: 'Ciudad de México', href: '/es/chofer-privado-cdmx', image: '/towns/gemini-cdmx.webp' },
		{ name: 'Puerto Vallarta', href: '/es/traslado-aeropuerto-puerto-vallarta', image: '/towns/gemini-vallarta.webp' },
		{ name: 'Guadalajara', href: '/es/chofer-privado-guadalajara', image: '/towns/gemini-guadalajara.webp' },
		{ name: 'Ixtapa Zihuatanejo', image: '/towns/gemini-zihua.webp' },
		{ name: 'Cancún', href: '/es/traslado-aeropuerto-cancun', image: '/towns/gemini-cancun.webp' },
		{ name: 'León', image: '/towns/gemini-leon.webp' },
		{ name: 'Cuernavaca', image: '/towns/gemini-cuerna.webp' },
		{ name: 'Monterrey', image: '/towns/gemini-monterrey.webp' }
	],
	steps: [
		{
			title: 'Explora Nuestra Flota',
			description: 'Descubre nuestros vehículos premium disponibles en México.',
			icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/667983a3267985f2f6160ffc_search.png',
			alt: 'Search Icon'
		},
		{
			title: 'Selecciona Tu Vehículo',
			description:
				'Elige la opción que mejor se adapte a tu viaje: traslado al aeropuerto, viaje interurbano o chofer privado.',
			icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/66798467e9aadbf3723fcb9c_select-car.png',
			alt: 'Select Car Icon'
		},
		{
			title: 'Envía tu solicitud',
			description: 'Comparte tus fechas y preferencias en pocos pasos.',
			icon:
				'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6679829d328059dd49614d20_online-booking.png',
			alt: 'Enquiry Form Icon'
		},
		{
			title: 'Tu Chofer al Punto de Encuentro',
			description:
				'Tu chofer privado te recibe en el punto acordado y te lleva a tu destino con seguridad y puntualidad.',
			icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/667983913dc4764e171e992b_drive.png',
			alt: 'Drive Icon'
		}
	],
	socialLinks: [
		{
			label: 'X',
			href: 'https://x.com/',
			icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf7f8_twitter.png',
			alt: 'X Icon'
		},
		{
			label: 'Instagram',
			href: 'https://www.instagram.com/',
			icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf7f9_instagram.png',
			alt: 'Instagram Icon'
		},
		{
			label: 'Facebook',
			href: 'https://www.facebook.com/',
			icon:
				'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf7fa_facebook-app-symbol.png',
			alt: 'Facebook Icon'
		},
		{
			label: 'WhatsApp',
			href: 'https://wa.me/525644166523',
			icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf814_whatsapp.png',
			alt: 'WhatsApp Icon'
		}
	],
	metrics: [
		{ value: '10', label: 'Años de experiencia' },
		{ value: '1000', label: 'Clientes satisfechos' },
		{ value: '200', label: 'Vehículos' },
		{ value: '10', label: 'Ubicaciones' }
	]
};

type PartialHomeEsContent = Partial<HomeEsContent>;

export function mergeHomeEsEditableContent(
	payload: unknown
): Pick<HomeEsContent, 'heroSlides' | 'featuredCarouselItems' | 'offers'> {
	const output = {
		heroSlides: defaultHomeEsContent.heroSlides,
		featuredCarouselItems: defaultHomeEsContent.featuredCarouselItems,
		offers: defaultHomeEsContent.offers
	};

	if (!payload || typeof payload !== 'object') {
		return output;
	}

	const input = payload as PartialHomeEsContent;

	if (Array.isArray(input.heroSlides) && input.heroSlides.length > 0) {
		output.heroSlides = input.heroSlides;
	}

	if (Array.isArray(input.featuredCarouselItems) && input.featuredCarouselItems.length > 0) {
		output.featuredCarouselItems = input.featuredCarouselItems;
	}

	if (Array.isArray(input.offers) && input.offers.length > 0) {
		output.offers = input.offers;
	}

	return output;
}

export type Vehicle = {
	slug: string;
	name: string;
	year: string;
	price: string;
	image: string;
	description: string;
	highlights: string[];
	idealFor: string[];
	specs: {
		mileage: string;
		transmission: string;
		seats: string;
		baggage: string;
	};
};

export const vehicles: Vehicle[] = [
	{
		slug: 'chevrolet-tahoe',
		name: 'Chevrolet Tahoe',
		year: '2024',
		price: '0',
		image: '/cars/camionettes/WhatsApp Image 2026-03-12 at 19.31.58.webp',
		description: 'Full-size SUV for premium airport transfers, private driver service, and family travel across Mexico.',
		highlights: ['Spacious interior with premium comfort.', 'Smooth highway handling for long routes.', 'Professional chauffeur available on request.'],
		idealFor: ['Airport transfers', 'Family trips', 'Executive travel', 'Private tours'],
		specs: {
			mileage: '—',
			transmission: 'Automatic',
			seats: '7',
			baggage: '8'
		}
	},
	{
		slug: 'chevrolet-suburban-black',
		name: 'Chevrolet Suburban',
		year: '2024',
		price: '4500',
		image: '/cars/chevy-suburban-black.webp',
		description:
			'A full-size luxury SUV built for executive airport transfers, family travel, and long-distance comfort across Mexico.',
		highlights: [
			'Premium leather interior with spacious third-row seating.',
			'Smooth ride quality with extra cargo capacity.',
			'Professional chauffeur available 24/7 in major cities.'
		],
		idealFor: ['Airport transfers', 'Business travel', 'Family trips', 'VIP transport'],
		specs: {
			mileage: '5200',
			transmission: 'Automatic',
			seats: '7',
			baggage: '8'
		}
	},
	{
		slug: 'chevrolet-suburban-white',
		name: 'Chevrolet Suburban White',
		year: '2023',
		price: '4200',
		image: '/cars/chevy-white.webp',
		description:
			'Our white Suburban delivers the same executive comfort in a clean, understated finish ideal for corporate travel.',
		highlights: [
			'Comfortable seating for groups with oversized luggage.',
			'Quiet cabin and premium suspension for long rides.',
			'Available with bilingual chauffeur support.'
		],
		idealFor: ['Corporate transfers', 'Group travel', 'Private chauffeur service'],
		specs: {
			mileage: '4800',
			transmission: 'Automatic',
			seats: '7',
			baggage: '8'
		}
	},
	{
		slug: 'gmc-yukon-denali',
		name: 'GMC Yukon Denali',
		year: '2024',
		price: '4800',
		image: '/cars/gmc-yukon-beige.webp',
		description:
			'Executive-grade SUV with bold presence, spacious interior, and refined comfort for premium transfers.',
		highlights: [
			'Denali trim with luxury finishes throughout.',
			'High seating position and smooth highway handling.',
			'Perfect balance of elegance and performance.'
		],
		idealFor: ['Executive travel', 'VIP arrivals', 'Intercity routes'],
		specs: {
			mileage: '5100',
			transmission: 'Automatic',
			seats: '7',
			baggage: '8'
		}
	},
	{
		slug: 'toyota-land-cruiser',
		name: 'Toyota Land Cruiser',
		year: '2024',
		price: '5200',
		image: '/cars/toyota-landcruiser-black.webp',
		description:
			'Legendary reliability and performance for long-distance routes, premium adventures, and rugged terrain.',
		highlights: [
			'Proven durability for demanding itineraries.',
			'Comfort-focused cabin with premium amenities.',
			'Ideal for private tours and intercity travel.'
		],
		idealFor: ['Intercity travel', 'Private tours', 'High-security routes'],
		specs: {
			mileage: '5600',
			transmission: 'Automatic',
			seats: '7',
			baggage: '8'
		}
	},
	{
		slug: 'cadillac-escalade',
		name: 'Cadillac Escalade',
		year: '2024',
		price: '0',
		image: '/cars/camionettes/WhatsApp Image 2026-03-12 at 19.32.17.webp',
		description: 'Signature luxury SUV for VIP arrivals, executive transfers, and premium city mobility.',
		highlights: [
			'Executive-grade comfort and presence.',
			'Ideal for VIP schedules and events.',
			'Available with bilingual chauffeur support.'
		],
		idealFor: ['VIP transport', 'Executive travel', 'Hotel transfers', 'Private chauffeur service'],
		specs: {
			mileage: '—',
			transmission: 'Automatic',
			seats: '7',
			baggage: '8'
		}
	},
	{
		slug: 'nissan-urvan',
		name: 'Nissan Urvan',
		year: '2024',
		price: '0',
		image: '/cars/camionettes/WhatsApp Image 2026-03-12 at 19.49.03 (1).webp',
		description: 'Passenger van for group transfers and private tours with flexible seating and luggage space.',
		highlights: [
			'Great for groups and delegations.',
			'Comfortable seating for longer routes.',
			'Ideal for airport + hotel logistics.'
		],
		idealFor: ['Group travel', 'Airport transfers', 'Corporate transport', 'Tours'],
		specs: {
			mileage: '—',
			transmission: 'Manual/Auto',
			seats: '14',
			baggage: '—'
		}
	}
];

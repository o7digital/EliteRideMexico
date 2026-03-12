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
	}
];

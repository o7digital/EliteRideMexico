export const worldCupKeywordsEn = [
	'Mexico World Cup 2026 transportation',
	'World Cup 2026 Mexico chauffeur',
	'World Cup 2026 airport transfers',
	'Mexico City World Cup private driver',
	'VIP World Cup Mexico transfers',
	'Soccer World Cup 2026 Mexico SUV rental',
	'Premium chauffeur for World Cup Mexico',
	'Executive transport World Cup 2026',
	'Mexico City stadium transfers',
	'Guadalajara World Cup chauffeur',
	'Monterrey World Cup private driver',
	'Cancun World Cup airport pickup',
	'Luxury SUV World Cup Mexico',
	'Armored vehicle World Cup Mexico',
	'World Cup fan travel Mexico',
	'VIP airport transfer Mexico World Cup',
	'Private driver Mexico City 2026',
	'Elite chauffeur service Mexico',
	'Corporate transport World Cup Mexico',
	'Safe airport transfer Mexico 2026'
] as const;

export const worldCupKeywordsEs = [
	'Transporte Mundial 2026 México',
	'Chofer privado Mundial 2026',
	'Traslados aeropuerto Mundial México',
	'Chofer en CDMX Mundial 2026',
	'Transporte VIP Mundial México',
	'Renta SUV Mundial 2026 México',
	'Servicio de chofer Mundial México',
	'Transporte ejecutivo Mundial 2026',
	'Traslados estadio CDMX',
	'Chofer Guadalajara Mundial 2026',
	'Chofer Monterrey Mundial 2026',
	'Traslado aeropuerto Cancún Mundial',
	'SUV de lujo Mundial México',
	'Vehículo blindado Mundial México',
	'Viaje de aficionados Mundial 2026',
	'Traslados VIP aeropuerto México',
	'Chofer privado CDMX 2026',
	'Servicio premium con chofer México',
	'Transporte corporativo Mundial México',
	'Traslados seguros México 2026'
] as const;

export const getWorldCupKeywordLines = (lang: 'en' | 'es') => {
	const keywords = lang === 'es' ? worldCupKeywordsEs : worldCupKeywordsEn;
	return [keywords.slice(0, 7), keywords.slice(7, 14), keywords.slice(14)].map((group) =>
		group.join(' · ')
	);
};

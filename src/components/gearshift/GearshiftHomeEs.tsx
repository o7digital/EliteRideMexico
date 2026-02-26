import { useState } from 'react';

type CarDetail = {
	key: string;
	value: string;
	icon: string;
	alt: string;
};

type Car = {
	name: string;
	href: string;
	image: string;
	year: string;
	price: string;
	details: CarDetail[];
};

type Location = {
	name: string;
	href: string;
	image: string;
};

type Step = {
	title: string;
	description: string;
	icon: string;
	alt: string;
};

const cars: Car[] = [
	{
		name: 'Chevrolet Suburban',
		href: '/cars/chevrolet-suburban-black',
		image: '/cars/chevy-suburban-black.jpeg',
		year: '2025',
		price: '4500',
		details: [
			{
				key: 'mileage',
				value: '5200',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf80e_mileage.svg',
				alt: 'Mileage Icon'
			},
			{
				key: 'transmission',
				value: 'Automatico',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82b_transmission.svg',
				alt: 'Transmission Icon'
			},
			{
				key: 'seats',
				value: '7',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82a_seats.svg',
				alt: 'Seats Icon'
			},
			{
				key: 'baggage',
				value: '8',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf7fd_baggage.svg',
				alt: 'Baggage Icon'
			}
		]
	},
	{
		name: 'Chevrolet Suburban White',
		href: '/cars/chevrolet-suburban-white',
		image: '/cars/chevy-white.jpeg',
		year: '2025',
		price: '4200',
		details: [
			{
				key: 'mileage',
				value: '4800',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf80e_mileage.svg',
				alt: 'Mileage Icon'
			},
			{
				key: 'transmission',
				value: 'Automatico',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82b_transmission.svg',
				alt: 'Transmission Icon'
			},
			{
				key: 'seats',
				value: '7',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82a_seats.svg',
				alt: 'Seats Icon'
			},
			{
				key: 'baggage',
				value: '8',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf7fd_baggage.svg',
				alt: 'Baggage Icon'
			}
		]
	},
	{
		name: 'GMC Yukon Denali',
		href: '/cars/gmc-yukon-denali',
		image: '/cars/gmc-yukon-beige.jpeg',
		year: '2025',
		price: '4800',
		details: [
			{
				key: 'mileage',
				value: '5100',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf80e_mileage.svg',
				alt: 'Mileage Icon'
			},
			{
				key: 'transmission',
				value: 'Automatico',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82b_transmission.svg',
				alt: 'Transmission Icon'
			},
			{
				key: 'seats',
				value: '7',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82a_seats.svg',
				alt: 'Seats Icon'
			},
			{
				key: 'baggage',
				value: '8',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf7fd_baggage.svg',
				alt: 'Baggage Icon'
			}
		]
	},
	{
		name: 'Toyota Land Cruiser',
		href: '/cars/toyota-land-cruiser',
		image: '/cars/toyota-landcruiser-black.jpeg',
		year: '2024',
		price: '5200',
		details: [
			{
				key: 'mileage',
				value: '5600',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf80e_mileage.svg',
				alt: 'Mileage Icon'
			},
			{
				key: 'transmission',
				value: 'Automatico',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82b_transmission.svg',
				alt: 'Transmission Icon'
			},
			{
				key: 'seats',
				value: '7',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82a_seats.svg',
				alt: 'Seats Icon'
			},
			{
				key: 'baggage',
				value: '8',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf7fd_baggage.svg',
				alt: 'Baggage Icon'
			}
		]
	}
];

const locations: Location[] = [
	{
		name: 'Mexico City',
		href: '/locations/mexico-city',
		image:
			'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf80a/6677ef5d2f59c6148debf853_palm-jumeirah.jpg'
	},
	{
		name: 'Puerto Vallarta',
		href: '/locations/puerto-vallarta',
		image: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf80a/6677ef5d2f59c6148debf852_JBR.jpg'
	},
	{
		name: 'Guadalajara',
		href: '/locations/guadalajara',
		image:
			'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf80a/6677ef5c2f59c6148debf851_downtown-dubai.jpg'
	},
	{
		name: 'Ixtapa Zihuatanejo',
		href: '/locations/ixtapa-zihuatanejo',
		image:
			'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf80a/6677ef5c2f59c6148debf850_dubai-marina.jpg'
	},
	{
		name: 'Cancun',
		href: '/locations/cancun',
		image: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf80a/6677ef5d2f59c6148debf852_JBR.jpg'
	},
	{
		name: 'Leon',
		href: '/locations/leon',
		image:
			'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf80a/6677ef5c2f59c6148debf851_downtown-dubai.jpg'
	},
	{
		name: 'Cuernavaca',
		href: '/locations/cuernavaca',
		image:
			'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf80a/6677ef5c2f59c6148debf850_dubai-marina.jpg'
	},
	{
		name: 'Monterrey',
		href: '/locations/monterrey',
		image:
			'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf80a/6677ef5d2f59c6148debf853_palm-jumeirah.jpg'
	}
];

const steps: Step[] = [
	{
		title: 'Explora Nuestra Flota',
		description: 'Descubre nuestros vehiculos premium disponibles en Mexico.',
		icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/667983a3267985f2f6160ffc_search.png',
		alt: 'Search Icon'
	},
	{
		title: 'Selecciona Tu Vehiculo',
		description: 'Elige la opcion que mejor se adapte a tu viaje.',
		icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/66798467e9aadbf3723fcb9c_select-car.png',
		alt: 'Select Car Icon'
	},
	{
		title: 'Envia Tu Solicitud',
		description: 'Comparte tus fechas y preferencias en pocos pasos.',
		icon:
			'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6679829d328059dd49614d20_online-booking.png',
		alt: 'Enquiry Form Icon'
	},
	{
		title: 'Recoge y Conduce',
		description: 'Recibe tu unidad y disfruta una experiencia sin complicaciones.',
		icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/667983913dc4764e171e992b_drive.png',
		alt: 'Drive Icon'
	}
];

const whatsappLink = 'https://wa.me/525574085802';

const socialLinks = [
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
		href: whatsappLink,
		icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf814_whatsapp.png',
		alt: 'WhatsApp Icon'
	}
];

const metrics = [
	{ value: '10', label: 'Años de Experiencia' },
	{ value: '1000', label: 'Clientes Satisfechos' },
	{ value: '200', label: 'Vehiculos' },
	{ value: '10', label: 'Ubicaciones' }
];

export default function GearshiftHomeEs() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLanguageOpen, setIsLanguageOpen] = useState(false);

	const closeMenus = () => {
		setIsMenuOpen(false);
		setIsLanguageOpen(false);
	};

	return (
		<div className="page-wrapper">
			<section>
				<div className="header-section">
					<div className="navbar w-nav">
						<div className="content-wrapper">
								<div className="navbar-wrapper">
										<a href="/es" aria-current="page" className="brand w-nav-brand w--current" onClick={closeMenus}>
											<span className="brand-logo-text">ELITE RIDE MEXICO</span>
										</a>
								<nav role="navigation" className={`nav-menu-wrapper w-nav-menu ${isMenuOpen ? 'w--open' : ''}`}>
									<ul role="list" className="nav-menu w-list-unstyled">
											<li className="nav-list-item">
												<a href="/es" aria-current="page" className="nav-link w--current" onClick={closeMenus}>
													Inicio
												</a>
											</li>
											<li className="nav-list-item">
												<a href="/es/about" className="nav-link" onClick={closeMenus}>
													Nosotros
												</a>
											</li>
											<li className="nav-list-item">
												<a href="/es/our-fleet" className="nav-link" onClick={closeMenus}>
													Nuestra Flota
												</a>
											</li>
											<li className="nav-list-item">
												<a href="/contact" className="nav-link" onClick={closeMenus}>
													Contacto
												</a>
											</li>
												<li className="nav-list-item">
													<div className="cta-button-wrapper">
															<a href="/es/our-fleet" className="cta-button w-button" onClick={closeMenus}>
																Reserva ahora
															</a>
													</div>
												</li>
												<li className="nav-list-item language-switch-item">
													<div className="language-switch">
														<button
															type="button"
															className="language-switch-button"
															onClick={() => setIsLanguageOpen((prev) => !prev)}
															aria-expanded={isLanguageOpen}
															aria-label="Cambiar idioma"
														>
															ES
															<span className={`language-switch-chevron ${isLanguageOpen ? 'open' : ''}`}>v</span>
														</button>
														<div className={`language-switch-list ${isLanguageOpen ? 'open' : ''}`}>
															<a href="/es" className="language-switch-link active" onClick={closeMenus}>
																ES
															</a>
															<a href="/" className="language-switch-link" onClick={closeMenus}>
																EN
															</a>
														</div>
													</div>
												</li>
										</ul>
									</nav>
								<button
									type="button"
									className={`menu-button w-nav-button ${isMenuOpen ? 'w--open' : ''}`}
									onClick={() => setIsMenuOpen((prev) => !prev)}
									aria-label="Toggle menu"
									aria-expanded={isMenuOpen}
								>
									<span className="hamburger-line" />
									<span className="hamburger-line" />
									<span className="hamburger-line" />
								</button>
							</div>
						</div>
					</div>
					<div className="content-wrapper">
						<div className="header-section-wrapper">
							<div className="header-content-wrapper">
									<div className="header-text-wrapper">
											<h1 className="header-text">
													Ofrecemos Vehiculos Blindados en Aeropuertos de Mexico y Traslados a la Ciudad con Chofer de <span className="brand-span">Elite Ride Mexico</span>.
											</h1>
										<div className="primary-text">
													Renta vehiculos premium con servicio profesional, seguridad y atencion personalizada.
										</div>
									<div className="header-button-wrapper">
										<a href="#featured-cars" className="cta-button w-button">
											Ver Nuestra Flota
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section bg-white">
				<div className="content-wrapper">
					<div className="grid-wrapper">
						{metrics.map((metric) => (
							<div key={metric.label} className="grid-item-wrapper">
								<div className="metric-number-wrapper">
									<h2 className="metric-number">{metric.value}</h2>
									<h2 className="metric-plus-sign">+</h2>
								</div>
								<div className="title-small">{metric.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="featured-cars" className="section">
				<div className="content-wrapper">
					<div className="section-heading-wrapper">
								<h2 className="section-heading">Vehiculos DEstacados.</h2>
							<a href="/es/our-fleet" className="cta-button w-button">
								Ver todos
							</a>
					</div>
					<div className="cars-collection-list-wrapper">
						<div className="cars-collection-list">
							{cars.map((car) => (
								<div key={car.name} className="car-collection-item">
									<article className="car-card">
										<a href={car.href} className="car-image-wrapper w-inline-block">
											<img src={car.image} loading="lazy" alt={car.name} className="listing-car-image" />
											<div className="car-listing-year">{car.year}</div>
										</a>
										<div className="car-details-wrapper">
											<h3 className="car-listing-name">{car.name}</h3>
											<div className="listing-price-wrapper">
												<div className="currency-price-term">AED</div>
												<div className="car-listing-price">{car.price}</div>
													<div className="currency-price-term">/ DIA</div>
											</div>
											<div className="car-listing-details-wrapper">
												{car.details.map((detail) => (
													<div key={`${car.name}-${detail.key}`} className="car-listing-detail">
														<img src={detail.icon} alt={detail.alt} className="listing-icon" loading="lazy" />
														<div className="listing-detail">{detail.value}</div>
													</div>
												))}
											</div>
											<a href={car.href} className="details-btn w-button">
												Ver Detalles
											</a>
										</div>
									</article>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="section bg-white">
				<div className="content-wrapper">
					<div className="section-heading-wrapper">
						<h2 className="section-heading">Nuestras Ubicaciones</h2>
					</div>
					<div className="location-collection-list-wrapper">
						<div className="location-collection-list">
							{locations.map((location) => (
								<div key={location.name} className="location-item">
									<a href={location.href} className="location-listing-image-wrapper w-inline-block">
										<img src={location.image} loading="lazy" alt={location.name} className="location-listing-image" />
										<div className="location-name">{location.name}</div>
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="content-wrapper">
					<div className="grid-wrapper">
						{steps.map((step) => (
							<div key={step.title} className="grid-item-wrapper">
								<div className="icon-wrapper">
									<img src={step.icon} loading="lazy" alt={step.alt} />
								</div>
								<div className="title-small">{step.title}</div>
								<div className="primary-text grey-color metric-text">{step.description}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section>
				<div className="footer-section-wrapper">
					<div className="content-wrapper">
						<div className="footer-content-wrapper">
								<div className="footer-top-content">
										<div className="footer-logo-social">
											<a href="/es" aria-current="page" className="brand w-nav-brand w--current">
												<span className="brand-logo-text footer-brand-logo-text">ELITE RIDE MEXICO</span>
											</a>
										<div className="footer-text">
											Servicio premium de renta de vehiculos con chofer en los principales destinos de Mexico.
										</div>
									<div className="social-media-links">
										{socialLinks.map((social) => (
											<a
												key={social.label}
												href={social.href}
												target="_blank"
												rel="noreferrer"
												className="social-media w-inline-block"
												aria-label={social.label}
											>
												<img src={social.icon} loading="lazy" alt={social.alt} className="image" />
											</a>
										))}
									</div>
								</div>
								<div className="footer-newsletter">
										<h3 className="small-heading">Suscribete a nuestro boletin</h3>
									<div className="w-form">
										<form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
											<input
												className="form-field w-input"
												maxLength={256}
												name="Email"
												placeholder="example@gmail.com"
												type="email"
												required
											/>
											<input type="submit" className="cta-button w-button" value="Enviar" />
										</form>
									</div>
								</div>
							</div>
							<div className="divider" />
							<div className="footer-bottom-content">
								<div className="footer-links-wrapper">
										<h2 className="heading">Paginas</h2>
									<a href="/es" className="footer-nav-link w--current">
										Inicio
									</a>
										<a href="/es/about" className="footer-nav-link">
											Nosotros
										</a>
											<a href="/es/our-fleet" className="footer-nav-link">
												Nuestra Flota
											</a>
										<a href="/contact" className="footer-nav-link">
											Contacto
										</a>
								</div>
								<div className="footer-links-wrapper">
									<h2 className="heading">Legal</h2>
									<a href="/privacy-notice" className="footer-nav-link">
										Aviso de Privacidad
									</a>
									<a href="/cancelation" className="footer-nav-link">
											Cancelacion
									</a>
									<a href="/refunds" className="footer-nav-link">
										Reembolsos
									</a>
									<a href="/taxes" className="footer-nav-link">
										Impuestos
									</a>
								</div>
								<div className="footer-links-wrapper">
										<h2 className="heading">Contactanos</h2>
									<a href="tel:+971123456789" className="footer-nav-link">
										+971 12 345 6789
									</a>
										<a href="mailto:info@eliteridemexico.com" className="footer-nav-link">
											info@eliteridemexico.com
										</a>
										<a
											href="https://www.google.com/maps/search/+123+Innovation+Street,+Downtown+Dubai,+Dubai,+UAE/@25.1559625,55.2253142,11.35z?entry=ttu"
											target="_blank"
											rel="noreferrer"
											className="footer-nav-link"
										>
											Goldsmith 250, Lomas de Chapultepec Colonia Miguel Hidaglo 11500 CDMX Mexico
										</a>
								</div>
							</div>
								<div className="divider" />
									<div className="copyright-info-wrapper">
										<a
											href="https://www.o7digital.com/en/index-digital-agency"
											target="_blank"
											rel="noreferrer"
											className="footer-copyright-text"
										>
											Copyright Elite Ride Mexico 2026 - hecho por o7Digital
										</a>
									</div>
						</div>
					</div>
				</div>
			</section>
			<a
				href={whatsappLink}
				target="_blank"
				rel="noreferrer"
				className="whatsapp-footer-button"
				aria-label="WhatsApp"
			>
				<img
					src="https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf814_whatsapp.png"
					loading="lazy"
					alt="WhatsApp Icon"
					className="whatsapp-footer-icon"
				/>
			</a>
		</div>
	);
}

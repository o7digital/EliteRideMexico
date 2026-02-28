import { useState } from 'react';

type FleetCategory = {
	title: string;
	description: string;
};

type FleetVehicle = {
	name: string;
	image: string;
	description: string;
};

const whatsappLink = 'https://wa.me/525644166523';

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

const fleetMetrics = [
	{ value: '300', label: 'Vehiculos Disponibles' },
	{ value: '24/7', label: 'Operacion con Chofer' },
	{ value: '10', label: 'Ciudades Principales' },
	{ value: '100%', label: 'Traslados Privados' }
];

const fleetCategories: FleetCategory[] = [
	{
		title: 'SUVs Premium',
		description:
			'Chevrolet Suburban, GMC Yukon Denali y Toyota Land Cruiser para traslados ejecutivos y viajes de larga distancia.'
	},
	{
		title: 'Camionetas Ejecutivas',
		description:
			'Unidades amplias para familias, grupos y delegaciones que necesitan espacio sin perder nivel de servicio.'
	},
	{
		title: 'Vehiculos Blindados',
		description:
			'Disponibles para clientes con requerimientos de seguridad elevados, operados con protocolos y rutas controladas.'
	},
	{
		title: 'Servicio con Chofer',
		description:
			'Cada traslado puede realizarse con conductores profesionales capacitados en puntualidad, discrecion y seguridad.'
	}
];

const featuredFleet: FleetVehicle[] = [
	{
		name: 'Chevrolet Suburban',
		image: '/cars/chevy-suburban-black.jpeg',
		description: 'Una opcion ideal para aeropuerto, agenda de negocios y movilidad urbana con maximo confort.'
	},
	{
		name: 'GMC Yukon Denali',
		image: '/cars/gmc-yukon-beige.jpeg',
		description: 'SUV premium de gran formato con espacio, estabilidad y comodidad ejecutiva.'
	},
	{
		name: 'Toyota Land Cruiser',
		image: '/cars/toyota-landcruiser-black.jpeg',
		description: 'SUV robusta y confiable para rutas interurbanas e itinerarios exigentes.'
	}
];

export default function GearshiftFleetEs() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLanguageOpen, setIsLanguageOpen] = useState(false);

	const closeMenus = () => {
		setIsMenuOpen(false);
		setIsLanguageOpen(false);
	};

	return (
		<div className="page-wrapper">
			<section>
				<div className="header-section fleet-header-section">
					<div className="navbar w-nav">
						<div className="content-wrapper">
							<div className="navbar-wrapper">
								<a href="/es" className="brand w-nav-brand" onClick={closeMenus}>
									<span className="brand-logo-text">ELITE RIDE MEXICO</span>
								</a>
								<nav role="navigation" className={`nav-menu-wrapper w-nav-menu ${isMenuOpen ? 'w--open' : ''}`}>
									<ul role="list" className="nav-menu w-list-unstyled">
										<li className="nav-list-item">
											<a href="/es" className="nav-link" onClick={closeMenus}>
												Inicio
											</a>
										</li>
										<li className="nav-list-item">
											<a href="/es/about" className="nav-link" onClick={closeMenus}>
												Nosotros
											</a>
										</li>
										<li className="nav-list-item">
											<a href="/es/our-fleet" aria-current="page" className="nav-link w--current" onClick={closeMenus}>
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
												<a href={whatsappLink} className="cta-button w-button" onClick={closeMenus}>
													Reservar con chofer
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
													<a href="/es/our-fleet" className="language-switch-link active" onClick={closeMenus}>
														ES
													</a>
													<a href="/our-fleet" className="language-switch-link" onClick={closeMenus}>
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
									aria-label="Abrir menu"
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
								<div className="header-text-wrapper fleet-header-text-wrapper">
									<h1 className="header-text">Nuestra Flota</h1>
									<div className="primary-text">
										Elite Ride Mexico opera alrededor de 300 vehiculos: autos premium, SUVs grandes, camionetas
										ejecutivas y opciones blindadas, con choferes profesionales disponibles segun tu necesidad.
									</div>
									<div className="header-button-wrapper">
										<a href={whatsappLink} target="_blank" rel="noreferrer" className="cta-button w-button">
											Solicitar disponibilidad
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
						{fleetMetrics.map((metric) => (
							<div key={metric.label} className="grid-item-wrapper">
								<div className="metric-number-wrapper">
									<h2 className="metric-number">{metric.value}</h2>
									{metric.value === '300' && <h2 className="metric-plus-sign">+</h2>}
								</div>
								<div className="title-small">{metric.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="section">
					<div className="content-wrapper">
						<div className="section-heading-wrapper">
							<h2 className="section-heading">Capacidades de la flota para viajeros internacionales</h2>
						</div>
					<div className="fleet-categories-grid">
						{fleetCategories.map((category) => (
							<article key={category.title} className="fleet-category-card">
								<h3 className="title-small">{category.title}</h3>
								<p className="primary-text grey-color metric-text">{category.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="section bg-white">
					<div className="content-wrapper">
						<div className="section-heading-wrapper">
							<h2 className="section-heading">Modelos destacados</h2>
						</div>
					<div className="fleet-models-grid">
						{featuredFleet.map((vehicle) => (
							<article key={vehicle.name} className="fleet-model-card">
								<div className="fleet-model-image-wrapper">
									<img src={vehicle.image} loading="lazy" alt={vehicle.name} className="fleet-model-image" />
								</div>
								<div className="fleet-model-body">
									<h3 className="car-listing-name">{vehicle.name}</h3>
									<p className="primary-text grey-color metric-text">{vehicle.description}</p>
								</div>
							</article>
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
									<a href="/es" className="brand w-nav-brand">
										<span className="brand-logo-text footer-brand-logo-text">ELITE RIDE MEXICO</span>
									</a>
									<div className="footer-text">
										Desde pickups VIP en aeropuerto hasta transporte blindado con chofer, nuestra flota esta pensada
										para viajeros que priorizan seguridad y confiabilidad en Mexico.
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
									<h3 className="small-heading">Suscribete al newsletter</h3>
									<div className="w-form">
										<form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
											<input
												className="form-field w-input"
												maxLength={256}
												name="Email"
												placeholder="ejemplo@gmail.com"
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
									<a href="/es" className="footer-nav-link">
										Inicio
									</a>
									<a href="/es/about" className="footer-nav-link">
										Nosotros
									</a>
									<a href="/es/our-fleet" aria-current="page" className="footer-nav-link w--current">
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
										<h2 className="heading">Contacto</h2>
										<a href="tel:+525644166523" className="footer-nav-link">
											+52 5644166523
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
									Copyright Eite Ride Mexico 2026 - made by o7Digital
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<a href={whatsappLink} target="_blank" rel="noreferrer" className="whatsapp-footer-button" aria-label="WhatsApp">
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

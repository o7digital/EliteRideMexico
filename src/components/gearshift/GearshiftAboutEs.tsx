import { useState } from 'react';

type AboutCard = {
	title: string;
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

const serviceOfferings: AboutCard[] = [
	{
		title: 'Traslados privados al aeropuerto y hotel',
		description:
			'Coordinamos servicio puerta a puerta con seguimiento de vuelo, comunicación clara y recepción puntual desde tu llegada.'
	},
	{
		title: 'Chofer privado por horas o por día',
		description:
			'Reserva movilidad flexible para agendas ejecutivas, reuniones, turismo o recorridos personalizados en la ciudad.'
	},
	{
		title: 'Movilidad para negocios y eventos',
		description:
			'Atendemos reuniones corporativas, roadshows, cenas, bodas y eventos especiales con logística discreta y bien ejecutada.'
	},
	{
		title: 'Viajes interurbanos y rutas especiales',
		description:
			'Operamos trayectos cortos y largos dentro y fuera de la ciudad con SUVs premium, vans ejecutivas y opciones blindadas.'
	}
];

const serviceStandards: AboutCard[] = [
	{
		title: 'Seguridad y discreción',
		description:
			'Trabajamos con choferes profesionales, rutas definidas y procesos claros para que cada traslado se sienta confiable de principio a fin.'
	},
	{
		title: 'Puntualidad y eficiencia',
		description:
			'Confirmamos horarios, monitoreamos llegadas y ajustamos la operación en tiempo real para proteger tu agenda.'
	},
	{
		title: 'Atención personalizada',
		description:
			'Cada reserva se adapta a pasajeros, equipaje, idioma, tipo de viaje y nivel de servicio requerido.'
	},
	{
		title: 'Flota premium y soporte 24/7',
		description:
			'Ponemos a tu disposición SUVs ejecutivas, vans y vehículos blindados con asistencia continua antes, durante y después del servicio.'
	}
];

export default function GearshiftAboutEs() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLanguageOpen, setIsLanguageOpen] = useState(false);

	const closeMenus = () => {
		setIsMenuOpen(false);
		setIsLanguageOpen(false);
	};

	return (
		<div className="page-wrapper">
			<section>
				<div className="header-section about-header-section">
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
											<a href="/es/about" aria-current="page" className="nav-link w--current" onClick={closeMenus}>
												Nosotros
											</a>
										</li>
										<li className="nav-list-item">
											<a href="/es/our-fleet" className="nav-link" onClick={closeMenus}>
												Nuestra Flota
											</a>
										</li>
										<li className="nav-list-item">
											<a href="/es/contact" className="nav-link" onClick={closeMenus}>
												Contacto
											</a>
										</li>
										<li className="nav-list-item">
											<div className="cta-button-wrapper">
												<a href="/es/our-fleet" className="cta-button w-button" onClick={closeMenus}>
													Reservar ahora
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
													<a href="/es/about" className="language-switch-link active" onClick={closeMenus}>
														ES
													</a>
													<a href="/about" className="language-switch-link" onClick={closeMenus}>
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
									aria-label="Abrir menú"
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
								<div className="header-text-wrapper about-header-text-wrapper">
									<h1 className="header-text">Sobre Elite Ride Mexico</h1>
									<div className="primary-text">
										Con base en Ciudad de México, Elite Ride Mexico ofrece transporte privado premium para
										viajeros internacionales, ejecutivos y familias que buscan seguridad, puntualidad y comodidad
										en los principales destinos del país.
									</div>
									<div className="header-button-wrapper">
										<a href={whatsappLink} target="_blank" rel="noreferrer" className="cta-button w-button">
											Hablar con un asesor
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
					<div className="section-heading-wrapper">
						<h2 className="section-heading">Un servicio diseñado para viajar mejor en México</h2>
					</div>
					<div className="about-intro-grid">
						<p className="primary-text grey-color">
							Elite Ride Mexico nació con una idea clara: ofrecer una alternativa más confiable, elegante y bien
							coordinada al transporte improvisado. Diseñamos experiencias puerta a puerta para clientes que valoran
							la discreción, la comodidad y un servicio que realmente responde.
						</p>
						<p className="primary-text grey-color">
							Nuestro compromiso es brindar un traslado personalizado y de alta calidad, ya sea para aeropuerto,
							agenda corporativa, vacaciones o movilidad de alto nivel. Queremos que cada trayecto sea fluido,
							seguro y a la altura de tu viaje.
						</p>
						<p className="primary-text grey-color">
							Si visitas México por negocios, vacaciones o la Copa del Mundo 2026, consulta también nuestra{' '}
							<a href="/es/copa-del-mundo-2026-mexico" className="link-text">
								guía de transporte para la Copa del Mundo FIFA 2026 en México y el Estadio Azteca
							</a>
							.
						</p>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="content-wrapper">
					<div className="section-heading-wrapper">
						<h2 className="section-heading">Servicios que ofrecemos</h2>
					</div>
					<div className="about-pillars-grid">
						{serviceOfferings.map((service) => (
							<article key={service.title} className="about-card">
								<h3 className="title-small">{service.title}</h3>
								<p className="primary-text grey-color metric-text">{service.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="section bg-white">
				<div className="content-wrapper">
					<div className="section-heading-wrapper">
						<h2 className="section-heading">Lo que distingue cada traslado</h2>
					</div>
					<div className="about-steps-grid">
						{serviceStandards.map((standard) => (
							<article key={standard.title} className="about-step-card">
								<h3 className="title-small">{standard.title}</h3>
								<p className="primary-text grey-color metric-text">{standard.description}</p>
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
										Transporte privado premium en México para viajeros internacionales, ejecutivos y familias
										que priorizan seguridad, puntualidad y atención personalizada.
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
									<h3 className="small-heading">Suscríbete al newsletter</h3>
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
									<h2 className="heading">Páginas</h2>
									<a href="/es" className="footer-nav-link">
										Inicio
									</a>
									<a href="/es/about" aria-current="page" className="footer-nav-link w--current">
										Nosotros
									</a>
									<a href="/es/our-fleet" className="footer-nav-link">
										Nuestra Flota
									</a>
									<a href="/es/contact" className="footer-nav-link">
										Contacto
									</a>
								</div>
								<div className="footer-links-wrapper">
									<h2 className="heading">Legal</h2>
									<a href="/privacy-notice" className="footer-nav-link">
										Aviso de Privacidad
									</a>
									<a href="/cancelation" className="footer-nav-link">
										Cancelación
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
										href="https://www.google.com/maps/search/Goldsmith+250,+Lomas+de+Chapultepec,+Miguel+Hidalgo,+11500,+CDMX,+Mexico"
										target="_blank"
										rel="noreferrer"
										className="footer-nav-link"
									>
										Goldsmith 250, Lomas de Chapultepec, Miguel Hidalgo, 11500, CDMX, México
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
									Copyright Elite Ride Mexico 2026 - made by o7Digital
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

import { useState } from 'react';

type SafetyPillar = {
	title: string;
	description: string;
};

type ProtectionStep = {
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

const safetyPillars: SafetyPillar[] = [
	{
		title: 'Conductores Profesionales',
		description:
			'Seleccionamos conductores por su profesionalismo, conocimiento de rutas y manejo discreto para viajeros internacionales.'
	},
	{
		title: 'Vehiculos Premium y Seguros',
		description:
			'Operamos SUVs de alto estandar para traslados de aeropuerto, hotel y viajes interurbanos con enfoque en seguridad.'
	},
	{
		title: 'Planeacion de Rutas',
		description:
			'Te ayudamos a evitar traslados inciertos con rutas planificadas, pickups definidos y coordinacion en tiempo real.'
	},
	{
		title: 'Atencion Bilingue',
		description:
			'Nuestro equipo apoya a visitantes de cualquier pais con comunicacion clara antes, durante y despues del servicio.'
	}
];

const protectionSteps: ProtectionStep[] = [
	{
		title: 'Coordinacion Previa',
		description:
			'Confirmamos itinerario, llegada y canal de contacto antes de tu aterrizaje para que todo quede preparado.'
	},
	{
		title: 'Pickup Verificado',
		description:
			'Recibes instrucciones claras y datos del conductor para reducir confusion en aeropuertos y zonas concurridas.'
	},
	{
		title: 'Monitoreo del Trayecto',
		description:
			'Para traslados sensibles, nuestro equipo acompana la operacion en tiempo real y ajusta puntos si se necesita.'
	},
	{
		title: 'Soporte 24/7',
		description:
			'Estamos disponibles por WhatsApp para cambios de horario, dudas de ruta y asistencia durante tu estancia.'
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
											<a href="/contact" className="nav-link" onClick={closeMenus}>
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
								<div className="header-text-wrapper about-header-text-wrapper">
									<h1 className="header-text">Nosotros</h1>
									<div className="primary-text">
										Somos una empresa mexicana enfocada en transporte seguro y confiable para viajeros
										internacionales, incluidos visitantes que llegan por eventos deportivos y turismo en todo Mexico.
									</div>
									<div className="header-button-wrapper">
										<a href={whatsappLink} target="_blank" rel="noreferrer" className="cta-button w-button">
											Hablar con el equipo
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
						<h2 className="section-heading">Movilidad segura para viajeros en Mexico</h2>
					</div>
					<div className="about-intro-grid">
						<p className="primary-text grey-color">
							Elite Ride Mexico nace para quienes priorizan seguridad, puntualidad y ejecucion local confiable. Desde
							llegadas al aeropuerto hasta traslados privados entre ciudades, reducimos riesgos y friccion operativa.
						</p>
						<p className="primary-text grey-color">
							Si vienes por el Mundial, negocios o vacaciones, nuestra mision es ofrecer un transporte premium,
							predecible y adaptado a visitantes internacionales.
						</p>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="content-wrapper">
					<div className="section-heading-wrapper">
						<h2 className="section-heading">Por que confian en nuestro servicio</h2>
					</div>
					<div className="about-pillars-grid">
						{safetyPillars.map((pillar) => (
							<article key={pillar.title} className="about-card">
								<h3 className="title-small">{pillar.title}</h3>
								<p className="primary-text grey-color metric-text">{pillar.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="section bg-white">
				<div className="content-wrapper">
					<div className="section-heading-wrapper">
						<h2 className="section-heading">Como protegemos cada traslado</h2>
					</div>
					<div className="about-steps-grid">
						{protectionSteps.map((step) => (
							<article key={step.title} className="about-step-card">
								<h3 className="title-small">{step.title}</h3>
								<p className="primary-text grey-color metric-text">{step.description}</p>
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
										Transporte seguro en Mexico para visitantes internacionales que buscan confianza, comodidad y
										soporte local.
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
									<a href="/es/about" aria-current="page" className="footer-nav-link w--current">
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

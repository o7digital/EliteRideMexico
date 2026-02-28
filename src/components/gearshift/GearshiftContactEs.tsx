import { useState } from 'react';

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
		icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf7fa_facebook-app-symbol.png',
		alt: 'Facebook Icon'
	},
	{
		label: 'WhatsApp',
		href: whatsappLink,
		icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf814_whatsapp.png',
		alt: 'WhatsApp Icon'
	}
];

export default function GearshiftContactEs() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenus = () => {
		setIsMenuOpen(false);
	};

	return (
		<div className="page-wrapper">
			<section>
				<div className="header-section contact-header-section">
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
											<a href="/es/our-fleet" className="nav-link" onClick={closeMenus}>
												Nuestra Flota
											</a>
										</li>
										<li className="nav-list-item">
											<a href="/es/contact" aria-current="page" className="nav-link w--current" onClick={closeMenus}>
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
								<div className="header-text-wrapper contact-header-text-wrapper">
									<h1 className="header-text">Contacta a Elite Ride Mexico</h1>
									<div className="primary-text">
										Comparte los detalles de tu viaje y nuestro equipo te responderá rápidamente con opciones
										seguras de transporte en México.
									</div>
									<div className="header-button-wrapper">
										<a href={whatsappLink} target="_blank" rel="noreferrer" className="cta-button w-button">
											Escríbenos por WhatsApp
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
					<div className="contact-layout">
						<div className="contact-form-card">
							<h2 className="section-heading">Envíanos tu solicitud</h2>
							<p className="primary-text grey-color">
								Usa este formulario para solicitar traslado al aeropuerto, viaje interurbano, chofer privado o
								transporte blindado.
							</p>
							<div className="w-form">
								<form
									className="contact-form"
									action="https://formspree.io/f/xqednlel"
									method="POST"
								>
									<div className="contact-field-row">
										<input
											className="form-field w-input"
											name="full_name"
											placeholder="Nombre completo"
											type="text"
											required
										/>
										<input
											className="form-field w-input"
											name="phone"
											placeholder="Teléfono / WhatsApp"
											type="tel"
											required
										/>
									</div>
									<div className="contact-field-row">
										<input
											className="form-field w-input"
											name="email"
											placeholder="Correo electrónico"
											type="email"
											required
										/>
										<input
											className="form-field w-input"
											name="country"
											placeholder="País"
											type="text"
											required
										/>
									</div>
									<div className="contact-field-row">
										<input
											className="form-field w-input"
											name="travel_dates"
											placeholder="Fecha(s) de viaje"
											type="text"
										/>
										<select className="form-field w-input contact-select" name="service_type" required defaultValue="">
											<option value="" disabled>
												Tipo de servicio
											</option>
											<option value="airport-transfer">Traslado al aeropuerto</option>
											<option value="private-driver">Chofer privado</option>
											<option value="armored-vehicle">Vehículo blindado</option>
											<option value="intercity-trip">Viaje interurbano</option>
										</select>
									</div>
									<textarea
										className="form-field w-input contact-textarea"
										name="message"
										placeholder="Cuéntanos tu itinerario, ciudad, punto de recogida y número de pasajeros."
										required
									/>
									<input type="hidden" name="_subject" value="Nueva solicitud de contacto - Elite Ride Mexico" />
									<input type="submit" className="cta-button w-button contact-submit" value="Enviar solicitud" />
								</form>
							</div>
						</div>
						<div className="contact-info-stack">
							<div className="contact-info-card">
								<h3 className="title-small">WhatsApp</h3>
								<a href={whatsappLink} target="_blank" rel="noreferrer" className="footer-nav-link">
									+52 5644166523
								</a>
							</div>
							<div className="contact-info-card">
								<h3 className="title-small">Email</h3>
								<a href="mailto:info@eliteridemexico.com" className="footer-nav-link">
									info@eliteridemexico.com
								</a>
							</div>
							<div className="contact-info-card">
								<h3 className="title-small">Oficina</h3>
								<p className="primary-text grey-color metric-text">
									Goldsmith 250, Lomas de Chapultepec, Miguel Hidalgo, 11500, CDMX, México.
								</p>
							</div>
							<div className="contact-info-card">
								<h3 className="title-small">Tiempo de respuesta</h3>
								<p className="primary-text grey-color metric-text">
									Normalmente respondemos en 15–30 minutos durante horario de operación.
								</p>
							</div>
						</div>
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
										Transporte premium con chofer para viajeros que priorizan seguridad, puntualidad y servicio
										local de confianza.
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
									<h3 className="small-heading">Suscríbete a nuestro boletín</h3>
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
									<h2 className="heading">Páginas</h2>
									<a href="/es" className="footer-nav-link">
										Inicio
									</a>
									<a href="/es/about" className="footer-nav-link">
										Nosotros
									</a>
									<a href="/es/our-fleet" className="footer-nav-link">
										Nuestra Flota
									</a>
									<a href="/es/contact" aria-current="page" className="footer-nav-link w--current">
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
									<h2 className="heading">Contáctanos</h2>
									<a href="tel:+525644166523" className="footer-nav-link">
										+52 5644166523
									</a>
									<a href="mailto:info@eliteridemexico.com" className="footer-nav-link">
										info@eliteridemexico.com
									</a>
									<a
										href="https://www.google.com/maps/search/Goldsmith+250,+Lomas+de+Chapultepec,+Ciudad+de+Mexico"
										target="_blank"
										rel="noreferrer"
										className="footer-nav-link"
									>
										Goldsmith 250, Lomas de Chapultepec, Miguel Hidalgo, 11500, CDMX, México.
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

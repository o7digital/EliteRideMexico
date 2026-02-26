import { useState } from 'react';

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

export default function GearshiftContact() {
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
								<a href="/" className="brand w-nav-brand" onClick={closeMenus}>
									<span className="brand-logo-text">ELITE RIDE MEXICO</span>
								</a>
								<nav role="navigation" className={`nav-menu-wrapper w-nav-menu ${isMenuOpen ? 'w--open' : ''}`}>
									<ul role="list" className="nav-menu w-list-unstyled">
										<li className="nav-list-item">
											<a href="/" className="nav-link" onClick={closeMenus}>
												Home
											</a>
										</li>
										<li className="nav-list-item">
											<a href="/about" className="nav-link" onClick={closeMenus}>
												About
											</a>
										</li>
										<li className="nav-list-item">
											<a href="/our-fleet" className="nav-link" onClick={closeMenus}>
												Our Fleet
											</a>
										</li>
										<li className="nav-list-item">
											<a href="/contact" aria-current="page" className="nav-link w--current" onClick={closeMenus}>
												Contact Us
											</a>
										</li>
										<li className="nav-list-item">
											<div className="cta-button-wrapper">
												<a href="/our-fleet" className="cta-button w-button" onClick={closeMenus}>
													rent now
												</a>
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
								<div className="header-text-wrapper contact-header-text-wrapper">
									<h1 className="header-text">Contact Elite Ride Mexico</h1>
									<div className="primary-text">
										Share your travel details and our team will contact you quickly with secure transport options
										across Mexico.
									</div>
									<div className="header-button-wrapper">
										<a href={whatsappLink} target="_blank" rel="noreferrer" className="cta-button w-button">
											Chat on WhatsApp
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
							<h2 className="section-heading">Send Us Your Request</h2>
							<p className="primary-text grey-color">
								Use this form to request airport pickup, city transfers, private driver support, or armored transport.
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
											placeholder="Full Name"
											type="text"
											required
										/>
										<input
											className="form-field w-input"
											name="phone"
											placeholder="Phone / WhatsApp"
											type="tel"
											required
										/>
									</div>
									<div className="contact-field-row">
										<input
											className="form-field w-input"
											name="email"
											placeholder="Email Address"
											type="email"
											required
										/>
										<input
											className="form-field w-input"
											name="country"
											placeholder="Country"
											type="text"
											required
										/>
									</div>
									<div className="contact-field-row">
										<input
											className="form-field w-input"
											name="travel_dates"
											placeholder="Travel Date(s)"
											type="text"
										/>
										<select className="form-field w-input contact-select" name="service_type" required defaultValue="">
											<option value="" disabled>
												Select Service
											</option>
											<option value="airport-transfer">Airport Transfer</option>
											<option value="private-driver">Private Driver</option>
											<option value="armored-vehicle">Armored Vehicle</option>
											<option value="intercity-trip">Intercity Trip</option>
										</select>
									</div>
									<textarea
										className="form-field w-input contact-textarea"
										name="message"
										placeholder="Tell us your itinerary, city, pickup point, and number of passengers."
										required
									/>
									<input type="hidden" name="_subject" value="New Contact Request - Elite Ride Mexico" />
									<input type="submit" className="cta-button w-button contact-submit" value="Send Request" />
								</form>
							</div>
						</div>
						<div className="contact-info-stack">
							<div className="contact-info-card">
								<h3 className="title-small">WhatsApp</h3>
								<a href={whatsappLink} target="_blank" rel="noreferrer" className="footer-nav-link">
									+52 55 7408 5802
								</a>
							</div>
							<div className="contact-info-card">
								<h3 className="title-small">Email</h3>
								<a href="mailto:info@eliteridemexico.com" className="footer-nav-link">
									info@eliteridemexico.com
								</a>
							</div>
							<div className="contact-info-card">
								<h3 className="title-small">Office</h3>
								<p className="primary-text grey-color metric-text">
									Goldsmith 250, Lomas de Chapultepec, Miguel Hidalgo, 11500, CDMX, Mexico.
								</p>
							</div>
							<div className="contact-info-card">
								<h3 className="title-small">Response Time</h3>
								<p className="primary-text grey-color metric-text">
									We usually reply within 15-30 minutes during operating hours.
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
									<a href="/" className="brand w-nav-brand">
										<span className="brand-logo-text footer-brand-logo-text">ELITE RIDE MEXICO</span>
									</a>
									<div className="footer-text">
										Premium transportation for travelers who prioritize safety, punctuality, and trusted local support.
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
									<h3 className="small-heading">Subscribe to our newsletter</h3>
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
											<input type="submit" className="cta-button w-button" value="Submit" />
										</form>
									</div>
								</div>
							</div>
							<div className="divider" />
							<div className="footer-bottom-content">
								<div className="footer-links-wrapper">
									<h2 className="heading">Pages</h2>
									<a href="/" className="footer-nav-link">
										Home
									</a>
									<a href="/about" className="footer-nav-link">
										About
									</a>
									<a href="/our-fleet" className="footer-nav-link">
										Our Fleet
									</a>
									<a href="/services" className="footer-nav-link">
										Services
									</a>
									<a href="/contact" aria-current="page" className="footer-nav-link w--current">
										Contact Us
									</a>
								</div>
								<div className="footer-links-wrapper">
									<h2 className="heading">Legal</h2>
									<a href="/privacy-notice" className="footer-nav-link">
										Privacy Notice
									</a>
									<a href="/cancelation" className="footer-nav-link">
										Cancelation
									</a>
									<a href="/refunds" className="footer-nav-link">
										Refunds
									</a>
									<a href="/taxes" className="footer-nav-link">
										Taxes
									</a>
								</div>
								<div className="footer-links-wrapper">
									<h2 className="heading">Get In Touch</h2>
									<a href="tel:+525574085802" className="footer-nav-link">
										+52 55 7408 5802
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
										Goldsmith 250, Lomas de Chapultepec, Miguel Hidalgo, CDMX, Mexico
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

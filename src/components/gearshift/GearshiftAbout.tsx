import { useState } from 'react';

type SafetyPillar = {
	title: string;
	description: string;
};

type ProtectionStep = {
	title: string;
	description: string;
};

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

const safetyPillars: SafetyPillar[] = [
	{
		title: 'Professional Drivers',
		description:
			'Our drivers are selected for professionalism, local route knowledge, and a calm approach for international travelers.'
	},
	{
		title: 'Secure, Premium Vehicles',
		description:
			'We provide high-standard SUVs prepared for airport, hotel, and intercity transfers with comfort and security in mind.'
	},
	{
		title: 'Route Planning Support',
		description:
			'We help you avoid uncertain transit options with pre-planned pickups, direct routes, and live coordination.'
	},
	{
		title: 'Bilingual Assistance',
		description:
			'Our team supports visitors from all countries with responsive communication before, during, and after each trip.'
	}
];

const protectionSteps: ProtectionStep[] = [
	{
		title: 'Pre-Arrival Coordination',
		description:
			'We confirm your itinerary, arrival details, and preferred communication channel before your flight lands.'
	},
	{
		title: 'Verified Pickup Process',
		description:
			'You receive clear meeting instructions and driver identification to reduce confusion at airports and busy zones.'
	},
	{
		title: 'Trip Monitoring',
		description:
			'For critical transfers, our team stays available in real time and can adapt pickup and drop-off points when needed.'
	},
	{
		title: '24/7 Support Access',
		description:
			'You can reach our team through WhatsApp for schedule updates, route questions, and assistance during your stay.'
	}
];

export default function GearshiftAbout() {
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
											<a href="/about" aria-current="page" className="nav-link w--current" onClick={closeMenus}>
												About
											</a>
										</li>
										<li className="nav-list-item">
											<a href="/our-fleet" className="nav-link" onClick={closeMenus}>
												Our Fleet
											</a>
										</li>
										<li className="nav-list-item">
											<a href="/contact" className="nav-link" onClick={closeMenus}>
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
										<li className="nav-list-item language-switch-item">
											<div className="language-switch">
												<button
													type="button"
													className="language-switch-button"
													onClick={() => setIsLanguageOpen((prev) => !prev)}
													aria-expanded={isLanguageOpen}
													aria-label="Switch language"
												>
													EN
													<span className={`language-switch-chevron ${isLanguageOpen ? 'open' : ''}`}>v</span>
												</button>
												<div className={`language-switch-list ${isLanguageOpen ? 'open' : ''}`}>
													<a href="/about" className="language-switch-link active" onClick={closeMenus}>
														EN
													</a>
													<a href="/es/about" className="language-switch-link" onClick={closeMenus}>
														ES
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
								<div className="header-text-wrapper about-header-text-wrapper">
									<h1 className="header-text">About Elite Ride Mexico</h1>
									<div className="primary-text">
										We are a Mexico-based company focused on safe, reliable transportation for international
										travelers, including visitors arriving for major sporting events and tourism across the country.
									</div>
									<div className="header-button-wrapper">
										<a href={whatsappLink} target="_blank" rel="noreferrer" className="cta-button w-button">
											Talk to Our Team
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
						<h2 className="section-heading">Safety-First Mobility for Travelers in Mexico</h2>
					</div>
					<div className="about-intro-grid">
						<p className="primary-text grey-color">
							Elite Ride Mexico was created for people who value security, punctuality, and trusted local execution.
							From airport arrivals to hotel transfers and private city-to-city rides, we reduce travel friction so you
							can focus on your trip.
						</p>
						<p className="primary-text grey-color">
							Whether you are visiting for the World Cup, business, or leisure, our mission is simple: give
							international guests a premium and predictable transportation experience in Mexico.
						</p>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="content-wrapper">
					<div className="section-heading-wrapper">
						<h2 className="section-heading">What Makes Our Service Trusted</h2>
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
						<h2 className="section-heading">How We Protect Each Journey</h2>
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
									<a href="/" className="brand w-nav-brand">
										<span className="brand-logo-text footer-brand-logo-text">ELITE RIDE MEXICO</span>
									</a>
									<div className="footer-text">
										Mexico-based secure transportation for international visitors who want confidence, comfort, and
										reliable local support.
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
									<a href="/about" aria-current="page" className="footer-nav-link w--current">
										About
									</a>
									<a href="/our-fleet" className="footer-nav-link">
										Our Fleet
									</a>
									<a href="/contact" className="footer-nav-link">
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

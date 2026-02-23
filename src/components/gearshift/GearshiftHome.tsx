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
		name: 'Porsche Cayenne Coupe',
		href: '/cars/porsche-cayenne-coupe',
		image:
			'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf80a/6677ef5c2f59c6148debf848_porsche-cayenne.jpg',
		year: '2024',
		price: '5000',
		details: [
			{
				key: 'mileage',
				value: '5800',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf80e_mileage.svg',
				alt: 'Mileage Icon'
			},
			{
				key: 'transmission',
				value: 'Automatic',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82b_transmission.svg',
				alt: 'Transmission Icon'
			},
			{
				key: 'seats',
				value: '5',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82a_seats.svg',
				alt: 'Seats Icon'
			},
			{
				key: 'baggage',
				value: '4',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf7fd_baggage.svg',
				alt: 'Baggage Icon'
			}
		]
	},
	{
		name: 'BMW M4 Competition',
		href: '/cars/bmw-m4-competition',
		image: 'https://cdn.prod.website-files.com/666cc5f8d5f2d4084c4b716f/666f8fbd909ca9fc3a1a6f24_bmw-m4.jpg',
		year: '2019',
		price: '1300',
		details: [
			{
				key: 'mileage',
				value: '4700',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf80e_mileage.svg',
				alt: 'Mileage Icon'
			},
			{
				key: 'transmission',
				value: 'Automatic',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82b_transmission.svg',
				alt: 'Transmission Icon'
			},
			{
				key: 'seats',
				value: '5',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82a_seats.svg',
				alt: 'Seats Icon'
			},
			{
				key: 'baggage',
				value: '6',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf7fd_baggage.svg',
				alt: 'Baggage Icon'
			}
		]
	},
	{
		name: 'Ferrari 458',
		href: '/cars/ferrari-458',
		image: 'https://cdn.prod.website-files.com/666cc5f8d5f2d4084c4b716f/666f9021d150b5c5b96e49b6_ferrari-458.jpg',
		year: '2021',
		price: '3900',
		details: [
			{
				key: 'mileage',
				value: '6100',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf80e_mileage.svg',
				alt: 'Mileage Icon'
			},
			{
				key: 'transmission',
				value: 'Manual',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82b_transmission.svg',
				alt: 'Transmission Icon'
			},
			{
				key: 'seats',
				value: '2',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82a_seats.svg',
				alt: 'Seats Icon'
			},
			{
				key: 'baggage',
				value: '2',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf7fd_baggage.svg',
				alt: 'Baggage Icon'
			}
		]
	},
	{
		name: 'Porsche 992',
		href: '/cars/porsche-992',
		image:
			'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf80a/6677ef5c2f59c6148debf849_porsche-992.jpg',
		year: '2024',
		price: '2100',
		details: [
			{
				key: 'mileage',
				value: '5500',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf80e_mileage.svg',
				alt: 'Mileage Icon'
			},
			{
				key: 'transmission',
				value: 'Automatic',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82b_transmission.svg',
				alt: 'Transmission Icon'
			},
			{
				key: 'seats',
				value: '2',
				icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf82a_seats.svg',
				alt: 'Seats Icon'
			},
			{
				key: 'baggage',
				value: '3',
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
		title: 'Browse Our Fleet',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
		icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/667983a3267985f2f6160ffc_search.png',
		alt: 'Search Icon'
	},
	{
		title: 'Select Your Vehicle',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
		icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/66798467e9aadbf3723fcb9c_select-car.png',
		alt: 'Select Car Icon'
	},
	{
		title: 'Submit an Enquiry',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
		icon:
			'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6679829d328059dd49614d20_online-booking.png',
		alt: 'Enquiry Form Icon'
	},
	{
		title: 'Pick Up & Drive',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
		icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/667983913dc4764e171e992b_drive.png',
		alt: 'Drive Icon'
	}
];

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
		href: 'https://www.whatsapp.com/',
		icon: 'https://cdn.prod.website-files.com/6677ef5c2f59c6148debf7e0/6677ef5c2f59c6148debf814_whatsapp.png',
		alt: 'WhatsApp Icon'
	}
];

const metrics = [
	{ value: '10', label: 'Years of Experience' },
	{ value: '1000', label: 'Happy Clients' },
	{ value: '200', label: 'Vehicles' },
	{ value: '10', label: 'Locations' }
];

export default function GearshiftHome() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenus = () => {
		setIsMenuOpen(false);
	};

	return (
		<div className="page-wrapper">
			<section>
				<div className="header-section">
					<div className="navbar w-nav">
						<div className="content-wrapper">
							<div className="navbar-wrapper">
									<a href="/" aria-current="page" className="brand w-nav-brand w--current" onClick={closeMenus}>
										<span className="brand-logo-text">ELITE RIDE MEXICO</span>
									</a>
								<nav role="navigation" className={`nav-menu-wrapper w-nav-menu ${isMenuOpen ? 'w--open' : ''}`}>
									<ul role="list" className="nav-menu w-list-unstyled">
										<li className="nav-list-item">
											<a href="/" aria-current="page" className="nav-link w--current" onClick={closeMenus}>
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
												Our Fllet
											</a>
										</li>
										<li className="nav-list-item">
											<a href="/services" className="nav-link" onClick={closeMenus}>
												Services
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
												We cover Blinded Vehicles Mexico Airports to Town with Drivers <span className="brand-span">Elite Ride Mexico</span> Rentals.
											</h1>
										<div className="primary-text">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam justo nec ligula eleifend
											efficitur.
										</div>
									<div className="header-button-wrapper">
										<a href="/our-fleet" className="cta-button w-button">
											View Our Fleet
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

			<section className="section">
				<div className="content-wrapper">
					<div className="section-heading-wrapper">
						<h2 className="section-heading">Featured Cars</h2>
						<a href="/our-fleet" className="cta-button w-button">
							Show all
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
												<div className="currency-price-term">/ DAY</div>
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
												See Full Details
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
						<h2 className="section-heading">Our Locations</h2>
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
										<a href="/" aria-current="page" className="brand w-nav-brand w--current">
											<span className="brand-logo-text footer-brand-logo-text">ELITE RIDE MEXICO</span>
										</a>
									<div className="footer-text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam justo nec ligula eleifend
										efficitur.
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
									<a href="/" className="footer-nav-link w--current">
										Home
									</a>
									<a href="/about" className="footer-nav-link">
										About
									</a>
									<a href="/our-fleet" className="footer-nav-link">
										Our Fllet
									</a>
									<a href="/services" className="footer-nav-link">
										Services
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
											Goldsmith 250
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
		</div>
	);
}

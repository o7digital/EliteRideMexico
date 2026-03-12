export type LegalSection = {
	title: string;
	paragraphs: string[];
};

export type LegalPageContent = {
	slug: string;
	alternateSlug: string;
	title: string;
	description: string;
	heading: string;
	intro: string;
	sections: LegalSection[];
};

export const legalPagesEn: LegalPageContent[] = [
	{
		slug: 'privacy-notice',
		alternateSlug: 'aviso-de-privacidad',
		title: 'Privacy Notice | Elite Ride Mexico',
		description:
			'Learn how Elite Ride Mexico collects, uses, and protects personal information when you request chauffeur, airport transfer, SUV rental, and corporate transportation services in Mexico.',
		heading: 'Privacy Notice',
		intro:
			'Elite Ride Mexico respects your privacy and handles reservation, contact, and billing information only for legitimate service, operational, and legal purposes.',
		sections: [
			{
				title: 'Information We Collect',
				paragraphs: [
					'We may collect your name, phone number, email, pickup details, flight information, invoicing data, and any security or itinerary notes you choose to share with our team.',
					'When required for secure or executive transportation, we may also process operational details related to passenger count, luggage, destinations, and service preferences.'
				]
			},
			{
				title: 'How We Use Your Information',
				paragraphs: [
					'Your information is used to confirm bookings, coordinate chauffeurs, issue invoices, answer support requests, and improve the reliability of airport transfer and private driver operations in Mexico.',
					'We do not use client information for unrelated purposes and we do not sell customer data to third parties.'
				]
			},
			{
				title: 'Data Access and Contact',
				paragraphs: [
					'If you need to update, correct, or remove information previously shared with Elite Ride Mexico, contact our team directly and we will review the request promptly.',
					'For privacy questions, reservation support, or invoicing clarification, please contact us before or after your trip and we will assist you.'
				]
			}
		]
	},
	{
		slug: 'cancelation',
		alternateSlug: 'cancelacion',
		title: 'Cancellation Policy | Elite Ride Mexico',
		description:
			'Review the Elite Ride Mexico cancellation policy for airport transfers, private chauffeur bookings, executive transportation, armored vehicles, and custom travel itineraries in Mexico.',
		heading: 'Cancellation Policy',
		intro:
			'Cancellation terms may vary depending on vehicle class, city, security requirements, and how close the change is to the scheduled pickup time.',
		sections: [
			{
				title: 'Standard Reservation Changes',
				paragraphs: [
					'Whenever possible, we recommend sending schedule changes in advance so our operations team can reassign drivers and adjust routes without affecting availability.',
					'Reservations involving airport transfers, full-day service, or multi-city routes may require a specific reconfirmation window.'
				]
			},
			{
				title: 'Late Cancellations and No-Shows',
				paragraphs: [
					'Late cancellations or no-shows may generate charges when a vehicle, chauffeur, toll route, airport waiting time, or logistics team has already been assigned to the service.',
					'Peak demand dates such as major events, conventions, and tournament periods may be subject to stricter cancellation terms.'
				]
			},
			{
				title: 'Security and Custom Services',
				paragraphs: [
					'Armored vehicle rentals, executive convoys, and high-security itineraries often involve additional planning and may be non-refundable once confirmed.',
					'If you need to change a sensitive or custom reservation, contact our team immediately so we can evaluate the best available alternative.'
				]
			}
		]
	},
	{
		slug: 'refunds',
		alternateSlug: 'reembolsos',
		title: 'Refund Policy | Elite Ride Mexico',
		description:
			'Understand how refunds are handled for Elite Ride Mexico reservations, including chauffeur bookings, airport transfer services, premium SUVs, and corporate transportation in Mexico.',
		heading: 'Refund Policy',
		intro:
			'Refund eligibility depends on the type of service booked, supplier commitments already made, and whether the reservation was canceled within the approved notice period.',
		sections: [
			{
				title: 'Eligible Refund Requests',
				paragraphs: [
					'When a service qualifies for refund, the amount returned may depend on elapsed preparation costs, third-party expenses, banking fees, and timing of the cancellation notice.',
					'Refund requests should include the reservation name, service date, city, and the reason for the request so our team can review the case correctly.'
				]
			},
			{
				title: 'Non-Refundable Situations',
				paragraphs: [
					'Custom security logistics, armored vehicle assignments, special event schedules, or last-minute operational deployments may be non-refundable after confirmation.',
					'Incomplete information, passenger no-shows, or failure to respect confirmed service windows can also limit refund eligibility.'
				]
			},
			{
				title: 'Processing Times',
				paragraphs: [
					'Approved refunds are processed as quickly as possible, but final timing depends on payment rails, banking institutions, and the original payment method.',
					'If a refund is approved, our team will confirm the status and any applicable deductions in writing.'
				]
			}
		]
	},
	{
		slug: 'taxes',
		alternateSlug: 'impuestos',
		title: 'Taxes and Invoicing | Elite Ride Mexico',
		description:
			'Read how Elite Ride Mexico handles taxes, invoicing, and commercial charges for chauffeur service, airport transfers, corporate transport, and premium SUV rentals in Mexico.',
		heading: 'Taxes and Invoicing',
		intro:
			'Elite Ride Mexico provides transportation services in Mexico and issues quotations or invoices according to the operational and fiscal requirements applicable to each booking.',
		sections: [
			{
				title: 'Quoted Prices',
				paragraphs: [
					'Rates may include vehicle assignment, chauffeur service, airport coordination, standard waiting time, and route planning depending on the service quoted.',
					'Some itineraries may also involve tolls, parking, extra waiting time, security surcharges, or event-related operating costs.'
				]
			},
			{
				title: 'Invoices and Fiscal Data',
				paragraphs: [
					'If you require an invoice, please send complete billing information before or at the time of confirmation so our team can prepare the correct documentation.',
					'Corporate, diplomatic, and international travelers should confirm invoicing requirements in advance when special formats are needed.'
				]
			},
			{
				title: 'Taxes and Additional Charges',
				paragraphs: [
					'Applicable taxes, when required, are reflected according to the nature of the reservation and the fiscal treatment of the service.',
					'For international payments or specialized transportation arrangements, additional transaction or compliance costs may apply.'
				]
			}
		]
	}
];

export const legalPagesEs: LegalPageContent[] = [
	{
		slug: 'aviso-de-privacidad',
		alternateSlug: 'privacy-notice',
		title: 'Aviso de Privacidad | Elite Ride Mexico',
		description:
			'Conoce cómo Elite Ride Mexico recopila, utiliza y protege la información personal cuando solicitas chofer privado, traslados al aeropuerto, renta de SUV y transporte ejecutivo en México.',
		heading: 'Aviso de Privacidad',
		intro:
			'Elite Ride Mexico respeta la privacidad de sus clientes y utiliza la información de contacto, reserva y facturación solo para fines legítimos de servicio, operación y cumplimiento.',
		sections: [
			{
				title: 'Datos que recopilamos',
				paragraphs: [
					'Podemos recopilar nombre, teléfono, correo electrónico, datos de recogida, información de vuelo, datos de facturación y cualquier nota operativa o de seguridad que compartas con nuestro equipo.',
					'Cuando el servicio lo requiera, también podemos procesar información relacionada con número de pasajeros, equipaje, destinos y preferencias del traslado.'
				]
			},
			{
				title: 'Uso de la información',
				paragraphs: [
					'Utilizamos tus datos para confirmar reservas, coordinar choferes, emitir facturas, responder solicitudes y mejorar la operación de traslados al aeropuerto y transporte privado en México.',
					'No utilizamos la información de nuestros clientes para fines ajenos al servicio y no vendemos datos personales a terceros.'
				]
			},
			{
				title: 'Acceso y contacto',
				paragraphs: [
					'Si necesitas actualizar, corregir o eliminar información previamente compartida con Elite Ride Mexico, puedes contactar directamente a nuestro equipo para revisar tu solicitud.',
					'Para dudas de privacidad, reserva o facturación, puedes escribirnos antes o después del servicio y con gusto te apoyaremos.'
				]
			}
		]
	},
	{
		slug: 'cancelacion',
		alternateSlug: 'cancelation',
		title: 'Política de Cancelación | Elite Ride Mexico',
		description:
			'Revisa la política de cancelación de Elite Ride Mexico para traslados al aeropuerto, chofer privado, transporte ejecutivo, vehículos blindados y servicios especiales en México.',
		heading: 'Política de Cancelación',
		intro:
			'Las condiciones de cancelación pueden variar según el tipo de vehículo, ciudad, requerimientos de seguridad y la cercanía con la hora programada del servicio.',
		sections: [
			{
				title: 'Cambios en reservas estándar',
				paragraphs: [
					'Siempre recomendamos enviar cambios con anticipación para que nuestro equipo operativo pueda ajustar choferes, unidades y rutas sin afectar disponibilidad.',
					'Los servicios de aeropuerto, jornadas completas o traslados entre ciudades pueden requerir una ventana específica de reconfirmación.'
				]
			},
			{
				title: 'Cancelaciones tardías y no-shows',
				paragraphs: [
					'Las cancelaciones tardías o ausencias pueden generar cargos cuando ya existe un vehículo asignado, chofer en ruta, tiempo de espera en aeropuerto o coordinación especial activa.',
					'Fechas de alta demanda, eventos masivos y periodos de torneo pueden operar con políticas más estrictas.'
				]
			},
			{
				title: 'Servicios de seguridad y logística especial',
				paragraphs: [
					'Los vehículos blindados, convoyes ejecutivos y servicios de seguridad personalizada suelen requerir preparación adicional y pueden no ser reembolsables una vez confirmados.',
					'Si necesitas modificar una reserva sensible o especial, lo mejor es contactar a nuestro equipo de inmediato para evaluar opciones.'
				]
			}
		]
	},
	{
		slug: 'reembolsos',
		alternateSlug: 'refunds',
		title: 'Política de Reembolsos | Elite Ride Mexico',
		description:
			'Conoce cómo maneja Elite Ride Mexico los reembolsos de servicios de chofer, traslados al aeropuerto, SUVs premium y transporte corporativo en México.',
		heading: 'Política de Reembolsos',
		intro:
			'La elegibilidad de un reembolso depende del tipo de servicio reservado, de los compromisos operativos ya realizados y del momento en que se solicita la cancelación.',
		sections: [
			{
				title: 'Solicitudes elegibles',
				paragraphs: [
					'Cuando un servicio califica para reembolso, el monto final puede depender de costos operativos ya ejecutados, gastos de terceros, comisiones bancarias y del aviso recibido.',
					'La solicitud debe incluir nombre de reserva, fecha del servicio, ciudad y motivo para que el caso pueda revisarse correctamente.'
				]
			},
			{
				title: 'Casos no reembolsables',
				paragraphs: [
					'La logística de seguridad, los vehículos blindados, los servicios especiales por eventos y algunas asignaciones de último minuto pueden ser no reembolsables después de confirmados.',
					'La falta de información completa, la ausencia del pasajero o el incumplimiento de las condiciones del servicio también puede limitar un reembolso.'
				]
			},
			{
				title: 'Tiempos de procesamiento',
				paragraphs: [
					'Los reembolsos aprobados se procesan lo antes posible, aunque el tiempo final depende del método de pago original, la institución bancaria y el canal de cobro utilizado.',
					'Si un reembolso es aprobado, nuestro equipo confirmará por escrito el estatus y cualquier ajuste aplicable.'
				]
			}
		]
	},
	{
		slug: 'impuestos',
		alternateSlug: 'taxes',
		title: 'Impuestos y Facturación | Elite Ride Mexico',
		description:
			'Consulta cómo Elite Ride Mexico maneja impuestos, facturación y cargos comerciales para servicios de chofer, traslados al aeropuerto, transporte corporativo y renta de SUV en México.',
		heading: 'Impuestos y Facturación',
		intro:
			'Elite Ride Mexico presta servicios de transporte en México y emite cotizaciones o facturas conforme a los requisitos operativos y fiscales aplicables a cada reserva.',
		sections: [
			{
				title: 'Tarifas cotizadas',
				paragraphs: [
					'Las tarifas pueden incluir asignación de vehículo, servicio de chofer, coordinación de aeropuerto, tiempo de espera estándar y planeación de ruta según el servicio contratado.',
					'Algunos itinerarios pueden incluir también casetas, estacionamientos, tiempo extra, cargos de seguridad o costos operativos por evento.'
				]
			},
			{
				title: 'Facturas y datos fiscales',
				paragraphs: [
					'Si requieres factura, comparte los datos fiscales completos antes o al momento de confirmar para que el equipo prepare la documentación correcta.',
					'Clientes corporativos, diplomáticos o internacionales deben confirmar con anticipación si necesitan formatos especiales.'
				]
			},
			{
				title: 'Impuestos y cargos adicionales',
				paragraphs: [
					'Los impuestos aplicables, cuando correspondan, se reflejan de acuerdo con la naturaleza de la reserva y el tratamiento fiscal del servicio.',
					'En pagos internacionales o servicios de logística especializada pueden existir cargos adicionales de transacción o cumplimiento.'
				]
			}
		]
	}
];

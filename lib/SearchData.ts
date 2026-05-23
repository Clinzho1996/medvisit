// lib/searchData.ts
export interface SearchResult {
	title: string;
	description: string;
	href: string;
	category: string;
	keywords?: string[];
}

export const searchableContent: SearchResult[] = [
	// Medical Tourism Pages
	{
		title: "Medical Tourism",
		description:
			"World-class medical treatment abroad with comprehensive care packages",
		href: "/medical-tourism",
		category: "Medical Tourism",
		keywords: [
			"surgery",
			"treatment",
			"hospital",
			"abroad",
			"international",
			"healthcare",
		],
	},
	{
		title: "Why Choose Medvisit",
		description: "Benefits of choosing Medvisit for your medical travel needs",
		href: "/medical-tourism/about-us",
		category: "Medical Tourism",
		keywords: ["benefits", "advantages", "why us", "reasons"],
	},
	{
		title: "Treatments & Procedures",
		description:
			"Advanced medical treatments including cardiology, oncology, orthopedics",
		href: "/medical-tourism/process",
		category: "Medical Tourism",
		keywords: ["cardiology", "oncology", "orthopedics", "surgery", "procedure"],
	},

	// Second Opinion Pages
	{
		title: "Second Medical Opinion",
		description: "Get expert second opinion from world's best doctors",
		href: "/second-opinion",
		category: "Second Opinion",
		keywords: [
			"second opinion",
			"doctor consultation",
			"expert advice",
			"medical review",
		],
	},
	{
		title: "Start Consultation",
		description: "Begin your second opinion consultation process",
		href: "/second-opinion/start-consultation",
		category: "Second Opinion",
		keywords: ["consultation", "appointment", "book", "schedule"],
	},
	{
		title: "Patients & Families",
		description:
			"Information for patients and families seeking second opinions",
		href: "/second-opinion/patients-families",
		category: "Second Opinion",
		keywords: ["patients", "families", "caregivers", "support"],
	},
	{
		title: "Referring Physicians",
		description: "Collaborate with our specialists for your patients",
		href: "/second-opinion/referring-physicians",
		category: "Second Opinion",
		keywords: ["physicians", "doctors", "referral", "collaborate"],
	},

	// Global Mobility Pages
	{
		title: "Global Mobility",
		description: "International patient assistance and travel coordination",
		href: "/global-mobility",
		category: "Global Mobility",
		keywords: ["international", "travel", "visa", "accommodation", "flight"],
	},

	// Contact Pages
	{
		title: "Contact Us",
		description: "Get in touch with our team",
		href: "/medical-tourism/contact-us",
		category: "Contact",
		keywords: ["contact", "email", "phone", "address", "location"],
	},

	// Add more pages as you create them
];

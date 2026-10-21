// ===== SITE CONSTANTS =====
export const SITE = {
	title: "First Rule Boxing Club",
	tagline: "Fort Worth's Boxing Gym for Discipline, Strength & Results",
	description:
		"First Rule Boxing Club is a boxing gym in Fort Worth, TX offering group boxing classes, youth boxing, personal training, and self-defense for every age and skill level. Discipline. Strength. Results.",
	url: "https://firstruleboxing.com",
	author: "First Rule Boxing Club",
	locale: "en",
};

// ===== BUSINESS INFO =====
export const BUSINESS = {
	name: "First Rule Boxing Club",
	email: "Ask@firstruleboxing.com",
	phoneForTel: "682-254-1947",
	phoneFormatted: "(682) 254-1947",
	logo: "/assets/favicons/favicon-512x512.png",
	// Square booking — trial/drop-in classes, STRONG by Zumba, 1:1 coaching, and
	// monthly membership all book through this one page. Used behind every
	// "Get Started" / "Join Now" CTA sitewide.
	bookingUrl: "https://book.squareup.com/appointments/ova7ct8xhhmdgd/location/LX8VWDYCKKW07/services",
	address: {
		lineOne: "10027 Harmon Rd Suite 127",
		lineTwo: "",
		city: "Fort Worth",
		state: "TX",
		zip: "76177",
		mapLink: "https://maps.google.com/?q=10027+Harmon+Rd+Suite+127+Fort+Worth+TX+76177",
	},
	hours: {
		display: "Tue–Thu: 5:30 AM · Mon–Thu: 6:00–8:00 PM",
		closedDisplay: "Closed Friday – Sunday",
		// Three training blocks: morning boxing (Tue–Thu), the Tuesday-only
		// Zumba add-on right after it, and evening boxing (Mon–Thu). See
		// openingHoursSpecification in localBusinessSchema.js.
		blocks: [
			{
				days: ["Tuesday", "Wednesday", "Thursday"],
				opens: "05:30",
				closes: "06:30",
			},
			{
				days: ["Tuesday"],
				opens: "06:30",
				closes: "07:30",
			},
			{
				days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
				opens: "18:00",
				closes: "20:00",
			},
		],
	},
	serviceArea: [
		"Fort Worth, TX",
		"Keller, TX",
		"Saginaw, TX",
		"Haslet, TX",
		"Roanoke, TX",
	],
	socials: {
		facebook: "https://www.facebook.com/Firstruleboxingclub/",
		instagram: "",
		googleBusiness: "https://www.google.com/maps/search/?api=1&query=First+Rule+Boxing+Club+Fort+Worth+TX",
	},
};

// ===== SEO DEFAULTS =====
export const SEO = {
	title: SITE.title,
	description: SITE.description,
};

// ===== OPEN GRAPH DEFAULTS =====
export const OG = {
	locale: "en_US",
	image: "/assets/social.jpg",
};

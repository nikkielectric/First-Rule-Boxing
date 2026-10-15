import { SITE, BUSINESS } from "@data/client";

export function getLocalBusinessSchema(origin) {
	const sameAs = [];
	if (BUSINESS.socials?.facebook) sameAs.push(BUSINESS.socials.facebook);
	if (BUSINESS.socials?.instagram) sameAs.push(BUSINESS.socials.instagram);

	const streetAddress = BUSINESS.address.lineTwo
		? `${BUSINESS.address.lineOne}, ${BUSINESS.address.lineTwo}`
		: BUSINESS.address.lineOne;

	const openingHoursSpecification = (BUSINESS.hours?.blocks ?? []).map((block) => ({
		"@type": "OpeningHoursSpecification",
		"dayOfWeek": block.days,
		"opens": block.opens,
		"closes": block.closes,
	}));

	return {
		"@context": "https://schema.org",
		"@type": ["LocalBusiness", "WebSite"],
		"name": BUSINESS.name,
		"url": SITE.url,
		"logo": origin + BUSINESS.logo,
		"image": origin + BUSINESS.logo,
		"email": BUSINESS.email,
		"telephone": BUSINESS.phoneForTel,
		"address": {
			"@type": "PostalAddress",
			"streetAddress": streetAddress,
			"addressLocality": BUSINESS.address.city,
			"addressRegion": BUSINESS.address.state,
			"postalCode": BUSINESS.address.zip,
		},
		"sameAs": sameAs,
		"inLanguage": SITE.locale,
		...(openingHoursSpecification.length ? { openingHoursSpecification } : {}),
	};
}

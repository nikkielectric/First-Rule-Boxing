// Single source of truth for First Rule Boxing Club's 5 programs.
// Used by: home page Services overview, the contact form's service dropdown,
// every dynamic [city].astro location page, and the footer/nav.

import groupBoxingImg from "@assets/images/programs/group-boxing.jpg";
import youthBoxingImg from "@assets/images/programs/youth-boxing.jpg";
import personalTrainingImg from "@assets/images/programs/personal-training.jpg";
import strongByZumbaImg from "@assets/images/programs/zumba-strong.jpg";
import openGymImg from "@assets/images/programs/open-gym.jpg";

export type ServiceSummary = {
	slug: string;
	title: string;
	href: string;
	image: ImageMetadata;
	tagline: string;
	description: string;
};

export const SERVICES: ServiceSummary[] = [
	{
		slug: "group-boxing-classes",
		title: "Group Boxing Classes",
		href: "/services/group-boxing-classes/",
		image: groupBoxingImg,
		tagline: "45 minutes. Pads, bags, and real technique.",
		description:
			"High-intensity group boxing for every level — footwork, combinations, and conditioning led by a coach who corrects your form, not just your effort. No experience required.",
	},
	{
		slug: "youth-boxing",
		title: "Youth Boxing",
		href: "/services/youth-boxing/",
		image: youthBoxingImg,
		tagline: "Discipline and confidence, one round at a time.",
		description:
			"A structured boxing program for kids and teens that builds focus, respect, and work ethic alongside real skill — in a coached, family-oriented gym that knows every name.",
	},
	{
		slug: "personal-training",
		title: "1-on-1 Personal Training",
		href: "/services/personal-training/",
		image: personalTrainingImg,
		tagline: "One coach, one fighter, zero wasted reps.",
		description:
			"Private boxing instruction built around your goals, your pace, and your schedule — the same hands-on coaching style that's kept members training here for years.",
	},
	{
		slug: "strong-by-zumba",
		title: "STRONG by Zumba",
		href: "/services/strong-by-zumba/",
		image: strongByZumbaImg,
		tagline: "Cardio, strength, and music that doesn't quit.",
		description:
			"A high-energy group fitness class that blends boxing-inspired intervals with dance cardio — full-body conditioning that never feels like a treadmill.",
	},
	{
		slug: "open-gym-membership",
		title: "Open Gym Membership",
		href: "/services/open-gym-membership/",
		image: openGymImg,
		tagline: "Bags, space, and time to put in the work.",
		description:
			"Full access to the heavy bags, mitts, and training floor outside of class hours — for members who want to drill on their own schedule.",
	},
];

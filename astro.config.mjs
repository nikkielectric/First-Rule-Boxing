import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
	site: "https://firstruleboxing.com",
	integrations: [
		icon(),
		sitemap({
			filter: (page) => !page.includes("/admin"),
			changefreq: "weekly",
			priority: 0.7,
		}),
	],
	image: {
		layout: "constrained",
	},
});

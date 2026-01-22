import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const url = process.env.NEXT_PUBLIC_FRONTEND_URL;
	return {
		rules: [
			{
				userAgent: "*",
				disallow: ["/dashboard"],
			},
		],
		sitemap: `${url}/sitemap.xml`,
	};
}

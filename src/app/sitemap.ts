import { getFrontendRoutes } from "@/utils/constants/index.constants";
import { MetadataRoute } from "next";
export const revalidate = 0;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const data: MetadataRoute.Sitemap = [];
  const routes = await getFrontendRoutes();
  console.log(routes);

  for (const key in routes) {
    const path = routes[key] === "/home" ? "" : routes[key];
    const obj = {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changefreq: "never",
      priority: 0.6,
    };
    data.push(obj);
  }

  data.push(
    {
      url: `${baseUrl}/clickup-templates/page-sitemap.xml`,
      lastModified: new Date("2026-06-01T02:32:00Z"),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clickup-templates/product-sitemap.xml`,
      lastModified: new Date("2026-06-01T17:27:00Z"),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clickup-templates/product_cat-sitemap.xml`,
      lastModified: new Date("2026-06-01T17:27:00Z"),
      priority: 0.8,
    }
  );

  return data;
}

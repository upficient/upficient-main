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
  return data;
}

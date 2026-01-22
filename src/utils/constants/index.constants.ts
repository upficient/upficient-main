import { getAllPageSlugsForSitemap } from "@/services/pages.service";

// To-Do: Fetch pages from the database and create routes dynamically. This will work at build time only.
export const getFrontendRoutes = async (): Promise<{
  [key: string]: string;
}> => {
  const data = await getAllPageSlugsForSitemap();
  console.log("data=====>" + data);
  // Constructing routes dynamically from the fetched data
  const routes: { [key: string]: string } = {};

  data.forEach((slug: string) => {
    routes[slug.toUpperCase()] = `/${slug}`;
  });
  console.log("route======", routes);
  return routes;
};

export const excludedPaths = ["/pages/", "/blogs/", "/case-studies/"];
export const pathsWhereSetHomeHidden = ["/case-studies/", "/blogs/"];

import { getOnePage } from "@/services/pages.service";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any) {
  const currPath = (await params)?.id;
  const page = await getOnePage(currPath);
  if (!page || page.componentType !== "blog") {
    notFound();
  }
  if (page?.fields) {
    return {
      applicationName: "Upficient",
      title: page.fields?.metaTitle,
      description: page.fields?.metaDescription,
      authors: "Upficient",
      keywords: page.fields?.keywords,
      openGraph: {
        title: "Upficient",
        siteName: "Upficient",
        description:
          "Powerful project management software solutions designed to enhance productivity, streamline workflows, and optimize team collaboration.",
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
        type: "website",
        images: [
          {
            url: `https://www.upficient.com/assets/img/clickuplogo.png`,
            alt: "Upficient Logo",
          },
        ],
      },
      robots: { index: "yes", follow: "yes" },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${page.fields?.slug}`,
      },
      verification: {
        google: "7A3fj-UIPzZxjzvRAJl21qHD81T2RZekt1LgbG8oR9U",
      },
    };
  }
}

const DynamicComponents = async ({ params }: any) => {
  const currPath = (await params)?.id;
  const page = await getOnePage(currPath).catch((err) => {
    notFound();
  });
  if (!page || page.componentType !== "blog") {
    notFound();
  }
  if (!page?.components) {
    return <div>No components found!</div>;
  }

  const components = page.components;

  const sortedComponents = Object.entries(components)
    .map(([key, props]) => ({ id: key, ...props }))
    .sort((a, b) => a.order - b.order);

  const jsonLd = { ...JSON.parse(page.fields?.schema || "{}") };

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {sortedComponents.map(({ id, ...props }) => {
        const componentName = id.split("_")[0];
        const DynamicComponent = dynamic(() =>
          import(
            `@/components/${
              page.componentType === "page" ? "builder" : "builderBlog"
            }/${componentName}/${componentName}`
          ).then((mod) => mod.default)
        );
        return <DynamicComponent key={id} {...{ data: props }} />;
      })}
    </>
  );
};

export default DynamicComponents;

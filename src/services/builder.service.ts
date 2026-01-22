"use server";

import fs from "fs";
import path from "path";

export const fetchComponet = async () => {
  const componentsDir = path.join(process.cwd(), "src/components/builder");
  const files = fs.readdirSync(componentsDir);

  const components = await Promise.all(
    files
      .filter((file) =>
        fs.statSync(path.join(componentsDir, file)).isDirectory()
      )
      .map(async (file) => {
        // Path to the .tsx component file (compiled by Next.js)
        const componentPath = path.join(componentsDir, file, `${file}.tsx`);

        let meta = {};
        try {
          // Dynamically import the component and extract metadata
          const modules = await import(
            `../components/builder/${file}/${file}.tsx`
          );

          // Check if the component has a 'meta' export and use it
          if (modules.meta) {
            meta = modules.meta;
          } else {
            console.warn(`No 'meta' export found for ${file}`);
          }
        } catch (err) {
          console.error(
            `Error loading component or metadata for ${file}:`,
            err
          );
        }
        return {
          name: file,
          Component: file,
          meta,
        };
      })
  );

  return components;
};
export const fetchComponetBlogs = async () => {
  const componentsDir = path.join(process.cwd(), "src/components/builderBlog");
  const files = fs.readdirSync(componentsDir);

  const components = await Promise.all(
    files
      .filter((file) =>
        fs.statSync(path.join(componentsDir, file)).isDirectory()
      )
      .map(async (file) => {
        let meta = {};
        try {
          // Dynamically import the component and extract metadata
          const modules = await import(
            `../components/builderBlog/${file}/${file}.tsx`
          );

          // Check if the component has a 'meta' export and use it
          if (modules.meta) {
            meta = modules.meta;
          } else {
            console.warn(`No 'meta' export found for ${file}`);
          }
        } catch (err) {
          console.error(
            `Error loading component or metadata for ${file}:`,
            err
          );
        }
        return {
          name: file,
          Component: file,
          meta,
        };
      })
  );

  return components;
};

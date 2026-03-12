"use server";

import fs from "fs";
import path from "path";

import { builderMeta } from "./builder-meta-registry";
import { builderBlogMeta } from "./builderBlog-meta-registry";

export const fetchComponet = async () => {
  const componentsDir = path.join(process.cwd(), "src/components/builder");
  const files = fs.readdirSync(componentsDir);

  const components = files
    .filter((file) => fs.statSync(path.join(componentsDir, file)).isDirectory())
    .map((file) => {
      const meta = builderMeta[file] ?? {};
      if (!builderMeta[file]) {
        console.warn(
          `No meta found in registry for builder component: ${file}`,
        );
      }
      return {
        name: file,
        Component: file,
        meta,
      };
    });

  return components;
};

export const fetchComponetBlogs = async () => {
  const componentsDir = path.join(process.cwd(), "src/components/builderBlog");
  const files = fs.readdirSync(componentsDir);

  const components = files
    .filter((file) => fs.statSync(path.join(componentsDir, file)).isDirectory())
    .map((file) => {
      const meta = builderBlogMeta[file] ?? {};
      if (!builderBlogMeta[file]) {
        console.warn(
          `No meta found in registry for builderBlog component: ${file}`,
        );
      }
      return {
        name: file,
        Component: file,
        meta,
      };
    });

  return components;
};

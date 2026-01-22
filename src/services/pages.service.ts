"use server";

import { connectToDatabase } from "@/lib/mongodb";
import Pages, { IPage } from "@/models/Pages";
import fs from "fs";
import path from "path";

export const uploadImage = async (image?: File | null, basePath?: string) => {
  try {
    let fileName = "";

    if (image) {
      const uploadsDir = path.join(
        process.cwd(),
        `public${process.env.NEXT_PUBLIC_DYNAMIC_IMAGES_BASE_PATH}/${basePath}`
      );

      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      const fileExtension = path.extname(image.name);
      const baseName = path
        .basename(image.name, fileExtension)
        .replace(/\s+/g, "_");
      fileName = `${baseName}_${Date.now()}${fileExtension}`;

      const imagePath = path.join(uploadsDir, fileName);

      const fileStream = fs.createWriteStream(imagePath);
      const fileData = await image.arrayBuffer();
      fileStream.write(Buffer.from(fileData));
      fileStream.end();
    }

    return fileName;
  } catch (error) {
    throw new Error("Failed to upload image.");
  }
};

export const addOrUpdatePage = async (pageId: string | null, pageData: any) => {
  try {
    await connectToDatabase();

    const publishDateField = pageData?.fields?.find(
      (field: any) => field.key === "publishDate"
    );

    const publishDate =
      publishDateField && !isNaN(new Date(publishDateField.value).getTime())
        ? new Date(publishDateField.value)
        : new Date(); // fallback to today if invalid

    if (
      pageData?.fields?.some(
        (field: any) => field.key === "makehome" && field.value === true
      )
    ) {
      const pagesWithMakeHomeTrue = await Pages.find({
        "fields.key": "makehome",
        "fields.value": true,
      }).lean();
      for (const page of pagesWithMakeHomeTrue) {
        if (page._id?.toString() !== pageId) {
          const updatedFields = page.fields.map((field: any) =>
            field.key === "makehome" ? { ...field, value: false } : field
          );
          await Pages.findByIdAndUpdate(
            page._id,
            { $set: { fields: updatedFields } },
            { new: true }
          );
        }
      }
    }

    if (pageId) {
      const page = await Pages.findById(pageId);
      if (!page) {
        throw new Error("Page not found.");
      }
      await Pages.findByIdAndUpdate(
        pageId,
        {
          $set: {
            fields: pageData.fields,
            components: pageData.components,
            componentType: pageData.componentType,
            publishDate: publishDate,
          },
        },
        { new: true }
      );

      return { success: true, message: "Page updated successfully." };
    } else {
      await Pages.create({
        fields: pageData?.fields,
        components: pageData.components,
        componentType: pageData.componentType,
        publishDate: publishDate,
      });

      return { success: true, message: "Page created successfully." };
    }
  } catch (error: any) {
    throw new Error(error.message || "Failed to process page.");
  }
};

export const getAllPages = async (
  componentType: string,
  sortByPublishDate: boolean = false
) => {
  try {
    await connectToDatabase();
    const pages = await Pages.find({ componentType })
      .sort({ [sortByPublishDate ? "publishDate" : "createdAt"]: -1 })
      .lean();

    // const pages = await Pages.find().lean();

    const sanitizedPages = pages.map((page: any) => ({
      ...page,
      _id: page._id.toString(),
      createdAt: page.createdAt?.toISOString(),
      updatedAt: page.updatedAt?.toISOString(),
      fields: page.fields.map((field: any) => ({
        ...field,
        _id: field._id.toString(),
      })),
    }));

    return sanitizedPages;
  } catch (error) {
    throw new Error("Failed to fetch pages.");
  }
};

export const getAllPageSlugsForSitemap = async () => {
  try {
    // Connect to the database
    await connectToDatabase();

    // Fetch all pages from the database
    const pages = await Pages.find().lean();

    // Extract and return the slugs from the pages
    const pageSlugs = pages
      .map((page: any) => {
        const slug = page.fields.find(
          (field: any) => field.key === "slug"
        )?.value;

        if (!slug) return null;

        if (page.componentType === "blog") {
          return `clickup-guides/${slug}`;
        }

        return slug;
      })
      .filter((slug: any) => slug);

    return pageSlugs;
  } catch (error) {
    throw new Error("Failed to fetch page slugs.");
  }
};

export const getPageById = async (id: string): Promise<any | null> => {
  try {
    await connectToDatabase();
    const page: any = await Pages.findById(id).lean<IPage>();
    if (!page) {
      throw new Error("Page not found");
    }

    const simpleFields = page?.fields.reduce((acc: any, field: any) => {
      acc[field.key] = field.value;
      return acc;
    }, {});
    return {
      ...page,
      _id: page._id.toString(), // Convert ObjectId to string
      createdAt: page.createdAt?.toISOString(), // Convert Date to string
      updatedAt: page.updatedAt?.toISOString(), // Convert Date to string
      fields: simpleFields,
    };
  } catch (error) {
    throw new Error("Failed to fetch user details.");
  }
};

export const deletePage = async (id: string) => {
  try {
    await connectToDatabase();

    const page = await Pages.findByIdAndDelete(id);
    if (!page) {
      throw new Error("Page not found.");
    }

    return true;
  } catch (error) {
    throw new Error("Error deleting page.");
  }
};

export const getOnePage = async (
  slug: string,
  getHomePage: boolean = false
) => {
  try {
    await connectToDatabase();

    let page;
    if (getHomePage) {
      page = await Pages.findOne({
        fields: {
          $elemMatch: {
            key: "makehome",
            value: "true",
          },
        },
      }).lean<IPage>();
    } else {
      page = await Pages.findOne({
        fields: {
          $elemMatch: {
            key: "slug",
            value: slug,
          },
        },
      }).lean<IPage>();
    }
    if (!page) {
      throw new Error("Page not found");
    }

    const simpleFields = page.fields.reduce((acc: any, field) => {
      acc[field.key] = field.value;
      return acc;
    }, {});

    return {
      ...page,
      fields: simpleFields,
    };
  } catch (error) {
    throw new Error("Failed to fetch current Page.");
  }
};

export const searchInFields = async (keyword: string) => {
  try {
    await connectToDatabase();

    const results = await Pages.find({
      fields: {
        $elemMatch: {
          value: { $regex: keyword, $options: "i" },
        },
      },
    }).lean();
    if (!results || results.length === 0) {
      return [];
    }

    const sanitizedPages = results.map((page: any) => ({
      ...page,
      _id: page._id.toString(),
      createdAt: page.createdAt?.toISOString(),
      updatedAt: page.updatedAt?.toISOString(),
      fields: page.fields.map((field: any) => ({
        ...field,
        _id: field._id.toString(),
      })),
    }));

    return sanitizedPages;
  } catch (error) {
    throw new Error("Failed to search fields.");
  }
};

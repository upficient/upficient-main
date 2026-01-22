"use client";

import { getImagePath } from "@/services/common.service";
import { uploadImage } from "@/services/pages.service";
import { pathsWhereSetHomeHidden } from "@/utils/constants/index.constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type PageSetting = {
  name: string;
  fields: { key: string; value: string }[];
};

type ComponentsListProps = {
  pageSettings: any;
  setPageSettings: React.Dispatch<React.SetStateAction<PageSetting[]>>;
};

const PageSettings: React.FC<ComponentsListProps> = ({
  pageSettings,
  setPageSettings,
}) => {
  const [formData, setFormData] = useState({
    pageTitle: pageSettings.pageTitle ? pageSettings.pageTitle : "",
    slug: pageSettings.slug ? pageSettings.slug : "",
    featureImage: pageSettings.featureImage ? pageSettings.featureImage : "",
    keywords: pageSettings.keywords ? pageSettings.keywords : "",
    metaTitle: pageSettings.metaTitle ? pageSettings.metaTitle : "",
    metaDescription: pageSettings.metaDescription
      ? pageSettings.metaDescription
      : "",
    makehome: pageSettings.makehome ? pageSettings.makehome : false, // default as false
    schema: pageSettings.schema ? pageSettings.schema : "",
    publishDate: pageSettings.publishDate ? pageSettings.publishDate : "",
  });
  const pathname = usePathname();
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    // If the input is a checkbox, update its value as true/false
    const updatedValue = type === "checkbox" ? checked : value;

    const updatedFormData = { ...formData, [name]: updatedValue };
    setFormData(updatedFormData);

    const updatedPageSettings = Object.entries(updatedFormData).map(
      ([key, value]) => ({ key, value })
    );

    setPageSettings([
      {
        name: "Page Settings",
        fields: updatedPageSettings,
      },
    ]);
  };

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageName = await uploadImage(file, "components");
      handleChange({
        target: {
          type: "text",
          name: "featureImage",
          value: imageName,
        },
      });
    }
  };

  return (
    <div className="page-settings">
      <div className="page-setting-form">
        <div className="form-field">
          <label htmlFor="pageTitle">Page Title</label>
          <input
            type="text"
            id="pageTitle"
            name="pageTitle"
            value={formData.pageTitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="slug">Slug</label>
          <input
            type="text"
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
          />
        </div>
        {!pathname?.includes("/pages/") && (
          <>
          <div className="form-field">
            <label htmlFor="makehome">Set Feature Image</label>
            <input
              type="file"
              id="featureImage"
              name="featureImage"
              onChange={(e) => {
                handleImageUpload(e);
              }}
            />
            <Image
              src={getImagePath("default_img.png", formData?.featureImage)}
              alt="Uploaded Preview"
              width={100}
              height={100}
              style={{
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: "50%",
              }}
              loading="lazy"
            />
          </div>
          <div className="form-field">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="publishDate"
              name="publishDate"
              value={formData.publishDate}
              onChange={handleChange}
            />
          </div>
        </>
        )}
        {!pathsWhereSetHomeHidden.some((path) => pathname?.includes(path)) && (
          <div className="form-field">
            <label htmlFor="makehome">Set as Home Page</label>
            <input
              type="checkbox"
              id="makehome"
              name="makehome"
              checked={eval(formData.makehome)}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="form-field">
          <h3 className="seo-setting">SEO Settings</h3>
        </div>
        <div className="form-field">
          <label htmlFor="keywords">Keywords</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="metaTitle">Meta Title</label>
          <input
            type="text"
            id="metaTitle"
            name="metaTitle"
            value={formData.metaTitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="metaDescription">Meta Description</label>
          <input
            type="text"
            id="metaDescription"
            name="metaDescription"
            value={formData.metaDescription}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="schema">Schema</label>
          <textarea
            id="schema"
            name="schema"
            value={formData.schema}
            onChange={handleChange}
            rows={4}
            cols={50}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PageSettings;

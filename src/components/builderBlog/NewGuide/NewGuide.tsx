"use client";

import { useEffect, useState } from "react";
import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import "./NewGuide.scss";
import GuideArrow from "@/components/Icons/GuideArrow";

interface Guides {
  title: string;
  text: string;
  image: string;
}

const NewGuide: React.FC<{ data: any }> = ({ data }) => {
  const { guides = [] } = data;
  const styles = data.styles || {};

  // Filter out guides without title (for TOC)
  const tocGuides = guides.filter((guide: Guides) => guide.title?.trim());

  // Active TOC index
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll(".guidesection");

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (!id) return;

            const index = Number(id.replace("guidesection-", ""));
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="content-sectiontoc d-flex"
      style={{
        padding: styles.padding
          ? `${styles.padding.top || 0}px ${styles.padding.right || 0}px ${
              styles.padding.bottom || 0
            }px ${styles.padding.left || 0}px`
          : undefined,
        margin: styles.margin
          ? `${styles.margin.top || 0}px ${styles.margin.right || 0}px ${
              styles.margin.bottom || 0
            }px ${styles.margin.left || 0}px`
          : undefined,
      }}
    >
      <div className="inr-toc">
        {/* Table of Contents */}
        <aside className="toc sticky-top">
          <h5>Table of Contents</h5>
          <ul>
            {tocGuides.length > 0 ? (
              tocGuides.map((guide: Guides, index: number) => (
                <li
                  key={index}
                  className={activeIndex === index ? "active" : ""}
                >
                  <a href={`#guidesection-${index}`}>
                    <div className="list-icon">
                      <GuideArrow />
                    </div>
                    <div className="list-title">{guide.title}</div>
                  </a>
                </li>
              ))
            ) : (
              <li>No sections available.</li>
            )}
          </ul>
        </aside>

        {/* Main Content */}
        <div className="main-content">
          {guides.length > 0 ? (
            (() => {
              let tocIndex = 0;

              return guides.map((guide: Guides, index: number) => {
                const hasTitle = guide.title?.trim();
                const id = hasTitle ? `guidesection-${tocIndex}` : undefined;

                if (hasTitle) tocIndex++;

                return (
                  <div
                    key={index}
                    {...(id ? { id } : {})}
                    className="guidesection"
                    style={{ scrollMarginTop: "88px" }}
                  >
                    {guide.title && <h2>{guide.title}</h2>}

                    {guide.text && (
                      <div dangerouslySetInnerHTML={{ __html: guide.text }} />
                    )}

                    {guide.image && (
                      <Image
                        src={getImagePath("bgsec1img.webp", guide.image)}
                        alt={guide.title || "Guide section image"}
                        width={1200}
                        height={1200}
                      />
                    )}
                  </div>
                );
              });
            })()
          ) : (
            <p>No content available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export const meta = {
  name: "newGuide",
  fields: [
    {
      key: "guides",
      type: "repeater",
      fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "text", label: "Text", type: "textarea" },
        { key: "image", label: "Image", type: "file" },
      ],
    },
  ],
  style: [
    {
      key: "padding",
      label: "Padding",
      type: "box",
      fields: [
        { key: "top", label: "Top", type: "number" },
        { key: "right", label: "Right", type: "number" },
        { key: "bottom", label: "Bottom", type: "number" },
        { key: "left", label: "Left", type: "number" },
      ],
    },
    {
      key: "margin",
      label: "Margin",
      type: "box",
      fields: [
        { key: "top", label: "Top", type: "number" },
        { key: "right", label: "Right", type: "number" },
        { key: "bottom", label: "Bottom", type: "number" },
        { key: "left", label: "Left", type: "number" },
      ],
    },
  ],
};

export default NewGuide;

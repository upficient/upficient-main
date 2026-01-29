import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import Link from "next/link";

import "./BlogCard.scss";

const BlogCard: React.FC<{ data: any }> = ({ data }) => {
  const {
    imageSrc,
    imageAlt,
    tagText,
    title,
    authorName,
    date,
    readingTime,
    excerpt,
    intalink,
    linkdinlink,
  } = data;

  const styles = data.styles || {}; // Safely default `styles` to an empty object

  return (
    <section
      className="guide-card"
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
      {/* Back link */}
      <Link href="/clickup-guides" className="back-link">
        <i className="fa-solid fa-arrow-left"></i> Back to Guides
      </Link>

      <div className="card-container">
        {/* Image */}
        <div className="card-image">
          <Image
            src={getImagePath("bgsec1img.webp", imageSrc ? imageSrc : "")}
            alt={imageAlt || "Blog image"}
            height={600}
            width={800}
          />
        </div>

        {/* Content */}
        <div className="card-content">
          <span className="badge">{tagText || "Resource"}</span>

          {/* Title */}
          <h1
            dangerouslySetInnerHTML={{
              __html: title || "Untitled Blog",
            }}
          />

          {/* Excerpt */}
          <div
            dangerouslySetInnerHTML={{
              __html: excerpt || "No excerpt provided.",
            }}
          ></div>

          {/* Author details */}
          <div className="author">
            <Image
              src={getImagePath("avtar.png", "")}
              alt="author avatar"
              height={35}
              width={35}
            />
            <span style={{ marginLeft: "10px" }}>
              {authorName || "Unknown Author"}
            </span>
            {date && (
              <>
                <div className="divider"></div>
                <span>{date}</span>
              </>
            )}
            {readingTime && (
              <>
                <div className="divider"></div>
                <span>{readingTime}</span>
              </>
            )}
          </div>

          {/* Socials */}
          <div className="socials">
            {intalink && (
              <Link href={intalink} target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            )}
            {linkdinlink && (
              <Link href={linkdinlink} target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const meta = {
  name: "BlogCard",
  fields: [
    { key: "imageSrc", label: "Image Source", type: "file" },
    { key: "imageAlt", label: "Alt Text", type: "text" },
    { key: "tagText", label: "Tag Text", type: "text" },
    { key: "title", label: "Title", type: "text" },
    { key: "authorName", label: "Author Name", type: "text" },
    { key: "date", label: "Date", type: "text" },
    { key: "readingTime", label: "Reading Time", type: "text" },
    { key: "excerpt", label: "Excerpt", type: "textarea" },
    { key: "intalink", label: "Instagram Link", type: "url" },
    { key: "linkdinlink", label: "LinkedIn Link", type: "url" },
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

export default BlogCard;

import "./ThankYou.scss";
import Image from "next/image";
import { getImagePath } from "@/services/common.service";

interface ThankYouProps {
  data: {
    title?: string;
    subtitle?: string;
    arrowImage?: string;
    backgroundImage?: string;
    styles?: any;
  };
}

const ThankYou: React.FC<ThankYouProps> = ({ data }) => {
  const {
    title = "Thank You!",
    subtitle = "Get ready to make your workflows more efficient. Details are in your inbox.",
    arrowImage,
    backgroundImage,
    styles = {},
  } = data || {};

  return (
    <section
      className="thankyou-wrapper"
      style={{
        backgroundImage: `url(${getImagePath(
          "hero_bg.webp", // fallback (same pattern as contact)
          backgroundImage, // CMS uploaded file
        )})`,
        padding: styles.padding
          ? `${styles.padding.top || 0}px ${styles.padding.right || 0}px ${
              styles.padding.bottom || 0
            }px ${styles.padding.left || 0}px`
          : undefined,
      }}
    >
      <div className="thankyou-container">
        <div className="arrow-box">
          {arrowImage && (
            <Image
              src={getImagePath("hero_front.webp", arrowImage)}
              alt="Arrow"
              width={140}
              height={140}
              className="arrow"
            />
          )}
        </div>

        <div className="content">
          <h1 style={{ color: styles.headingColor }}>
            Call confirmed <br />- thank you!
          </h1>
          <p style={{ color: styles.textColor }}>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

// ==========================
//        META SECTION
// ==========================
export const meta = {
  name: "ThankYou",
  fields: [
    { key: "title", label: "Title", type: "text" },
    { key: "subtitle", label: "Subtitle", type: "textarea" },
    { key: "arrowImage", label: "Arrow Image", type: "file" },
    { key: "backgroundImage", label: "Background Image", type: "file" },
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
    {
      key: "borderRadius",
      label: "Border Radius",
      type: "box",
      fields: [
        { key: "top", label: "Top", type: "number" },
        { key: "right", label: "Right", type: "number" },
        { key: "bottom", label: "Bottom", type: "number" },
        { key: "left", label: "Left", type: "number" },
      ],
    },
    { key: "backgroundColor", label: "Background Color", type: "color" },
    { key: "headingColor", label: "Heading Color", type: "color" },
    { key: "textColor", label: "Text Color", type: "color" },
  ],
};

export default ThankYou;

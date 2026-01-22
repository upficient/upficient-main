import "./SectionWithBg.scss";
import SectionWithBgClient from "./SectionWIthBgClient";

interface SectionWithBgProps {
  data: {
    bgSrc?: string;
    imageSrc?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
  };
}

const SectionWithBg: React.FC<{ data: any }> = ({ data }) => {
  return <SectionWithBgClient data={data} />;
};

export const meta = {
  name: "SectionWithBg",
  fields: [
    { key: "sectionClass", label: "Section Class", type: "text" },
    { key: "bgSrc", label: "Background Image", type: "file" },
    { key: "beforeSrc", label: "Background Before Image", type: "file" },
    { key: "imageSrc", label: "Image Source", type: "file" },
    { key: "title", label: "Title", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonLink", label: "Button Link", type: "url" },
  ],
  style: [
    {
      key: "imageHeight",
      label: "Image Height",
      type: "box",
      fields: [{ key: "height", label: "Height", type: "number" }],
    },
    {
      key: "headingTag",
      label: "Heading Tag",
      type: "radioOptions",
      fields: [
        { key: "h1", label: "H1", type: "radio" },
        { key: "h2", label: "H2", type: "radio" },
      ],
    },
    {
      key: "alignIteam",
      label: "Section Verticle Alignment",
      type: "radioOptions",
      fields: [
        { key: "center", label: "Center", type: "radio" },
        { key: "flex-end", label: "Flex End", type: "radio" },
      ],
    },
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
      key: "btnMargin",
      label: "Button Margin",
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
    {
      key: "alignment",
      label: "Section Alignment",
      type: "radioOptions",
      fields: [
        { key: "right", label: "Right", type: "radio" },
        { key: "left", label: "Left", type: "radio" },
      ],
    },
    {
      key: "imagePosition",
      label: "Image position",
      type: "radioOptions",
      fields: [
        { key: "top", label: "Top", type: "radio" },
        { key: "bottom", label: "Bottom", type: "radio" },
        { key: "center", label: "Center", type: "radio" },
      ],
    },
    {
      key: "backgroundColor",
      label: "Background Color",
      type: "color",
    },
    {
      key: "headingColor",
      label: "Heading Color",
      type: "color",
    },
    {
      key: "textColor",
      label: "Text Color",
      type: "color",
    },
    {
      key: "buttonColor",
      label: "Button Color",
      type: "color",
    },
    {
      key: "buttonTextColor",
      label: "Button Text Color",
      type: "color",
    },
  ],
};

export default SectionWithBg;

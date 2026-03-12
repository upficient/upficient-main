// Plain TS — no "use client" / "use server".
// Safe to import from server actions. Add new builder component metas here.

export const builderMeta: Record<string, any> = {
  CaseStudies: {
    name: "CaseStudies",
    fields: [],
    style: [],
  },

  ClickUpSection: {
    name: "ClickUpSection",
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "buttonText", label: "Button Text", type: "text" },
      { key: "buttonLink", label: "Button Link", type: "text" },
      {
        key: "boxes",
        type: "repeater",
        fields: [
          { key: "imageSrc", label: "Image Source", type: "file" },
          { key: "title", label: "Title", type: "text" },
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
        key: "boxShadow",
        label: "Box Shadow",
        type: "box",
        fields: [
          { key: "top", label: "Top", type: "number" },
          { key: "right", label: "Right", type: "number" },
          { key: "bottom", label: "Bottom", type: "number" },
          { key: "left", label: "Left", type: "number" },
        ],
      },
      { key: "backgroundColor", label: "Background Color", type: "color" },
      {
        key: "boxbackgroundColor",
        label: "Box Background Color",
        type: "color",
      },
      { key: "headingColor", label: "Heading Color", type: "color" },
      { key: "BoxHeadingColor", label: "Box Heading Color", type: "color" },
      { key: "textColor", label: "Text Color", type: "color" },
      { key: "buttonColor", label: "Button Color", type: "color" },
      { key: "buttonTextColor", label: "Button Text Color", type: "color" },
    ],
  },

  Contact: {
    name: "contact",
    fields: [
      { key: "backgroundImage", label: "Background Image URL", type: "file" },
      { key: "image", label: "Image URL", type: "file" },
    ],
  },

  ContentWithVideo: {
    name: "ContentWithVideo",
    fields: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "thumbnail", label: "Thumbnail", type: "file" },
      { key: "videoUrl", label: "Video ID", type: "text" },
      {
        key: "cetagories",
        type: "repeater",
        fields: [
          { key: "link", label: "Link", type: "text" },
          { key: "image", label: "Image", type: "file" },
          { key: "title", label: "Title", type: "text" },
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
        key: "boxShadow",
        label: "Box Shadow",
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
      { key: "buttonColor", label: "Button Color", type: "color" },
      { key: "buttonTextColor", label: "Button Text Color", type: "color" },
    ],
  },

  Expertise: {
    name: "Expertise",
    fields: [
      { key: "mainHeading", label: "Main Heading", type: "text" },
      {
        key: "expertboxes",
        type: "repeater",
        fields: [
          { key: "subTitle", label: "Subtitle", type: "text" },
          { key: "title", label: "Title", type: "text" },
          { key: "titleImage", label: "Title Image", type: "file" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "imageSrc", label: "Image Source", type: "file" },
          { key: "imageAlt", label: "Image Alt Text", type: "text" },
          { key: "sectionid", label: "Section Id", type: "text" },
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
      {
        key: "rowpadding",
        label: "Row Padding",
        type: "box",
        fields: [
          { key: "top", label: "Top", type: "number" },
          { key: "right", label: "Right", type: "number" },
          { key: "bottom", label: "Bottom", type: "number" },
          { key: "left", label: "Left", type: "number" },
        ],
      },
      {
        key: "rowmargin",
        label: "Row Margin",
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
        key: "boxShadow",
        label: "Box Shadow",
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
      { key: "rowheadingColor", label: "Row Heading Color", type: "color" },
      { key: "textColor", label: "Row Text Color", type: "color" },
    ],
  },

  Faq: {
    name: "Faq",
    fields: [],
    style: [],
  },

  Guides: {
    name: "guides",
    fields: [{ key: "type", label: "Type", type: "text" }],
  },

  HeroSection: {
    name: "HeroSection",
    fields: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "BadgeImage", label: "Badge Image", type: "file" },
      { key: "backgroundImage", label: "Background Image URL", type: "file" },
      { key: "image", label: "Hero Image URL", type: "file" },
      { key: "buttonText", label: "Button Text", type: "text" },
      { key: "buttonLink", label: "Button Link", type: "text" },
      { key: "sectionid", label: "Section Id", type: "text" },
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
        key: "bgsize",
        label: "Background Size",
        type: "radioOptions",
        fields: [
          { key: "cover", label: "Cover", type: "radio" },
          { key: "contain", label: "Contain", type: "radio" },
        ],
      },
      {
        key: "bgposition",
        label: "Background Position",
        type: "radioOptions",
        fields: [
          { key: "top", label: "Top", type: "radio" },
          { key: "topright", label: "Top Right", type: "radio" },
          { key: "topcenter", label: "Top Center", type: "radio" },
          { key: "bgcenter", label: "Center", type: "radio" },
          { key: "bottomcenter", label: "Bottom Center", type: "radio" },
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
        key: "boxShadow",
        label: "Box Shadow",
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
      { key: "buttonColor", label: "Button Color", type: "color" },
      { key: "buttonTextColor", label: "Button Text Color", type: "color" },
    ],
  },

  HeroSectionNew: {
    name: "HeroSectionNew",
    fields: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "BadgeImage", label: "Badge Image", type: "file" },
      { key: "image", label: "Hero Image URL", type: "file" },
      { key: "buttonText", label: "Button Text", type: "text" },
      { key: "buttonLink", label: "Button Link", type: "text" },
      { key: "sectionid", label: "Section Id", type: "text" },
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
        key: "boxShadow",
        label: "Box Shadow",
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
      { key: "buttonColor", label: "Button Color", type: "color" },
      { key: "buttonTextColor", label: "Button Text Color", type: "color" },
    ],
  },

  IconBox: {
    name: "SectionWithBg",
    fields: [
      { key: "title", label: "Section Title", type: "text" },
      {
        key: "iconBoxes",
        type: "repeater",
        fields: [
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "imageSrc", label: "Image Source", type: "file" },
          { key: "imageAlt", label: "Image Alt Text", type: "text" },
        ],
      },
    ],
    style: [
      { key: "sectionId", label: "Section Id", type: "text" },
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
      {
        key: "alignment",
        label: "Section Alignment",
        type: "radioOptions",
        fields: [
          { key: "right", label: "Right", type: "radio" },
          { key: "left", label: "Left", type: "radio" },
        ],
      },
      { key: "backgroundColor", label: "Background Color", type: "color" },
      { key: "headingColor", label: "Heading Color", type: "color" },
      { key: "textColor", label: "Text Color", type: "color" },
    ],
  },

  Journey: {
    name: "JourneySection",
    fields: [
      { key: "title", label: "Title", type: "text" },
      {
        key: "phases",
        type: "repeater",
        fields: [
          { key: "phase", label: "Phase", type: "text" },
          { key: "title", label: "Title", type: "text" },
          { key: "icon", label: "Icon", type: "file" },
          { key: "link", label: "Section Link", type: "text" },
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
      { key: "subHeadingColor", label: "Sub Heading Color", type: "color" },
    ],
  },

  LogoSlider: {
    name: "LogoSlider",
    fields: [{ key: "mainHeading", label: "Main Heading", type: "text" }],
  },

  Partner: {
    name: "Partner",
    fields: [
      { key: "mainHeading", label: "Main Heading", type: "text" },
      {
        key: "partnerboxes",
        type: "repeater",
        fields: [
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "imageSrc", label: "Image Source", type: "file" },
          { key: "imageAlt", label: "Image Alt Text", type: "text" },
          { key: "link", label: "Link", type: "url" },
          { key: "linkText", label: "Link Text", type: "text" },
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
        key: "boxShadow",
        label: "Box Shadow",
        type: "box",
        fields: [
          { key: "top", label: "Top", type: "number" },
          { key: "right", label: "Right", type: "number" },
          { key: "bottom", label: "Bottom", type: "number" },
          { key: "left", label: "Left", type: "number" },
        ],
      },
      { key: "backgroundColor", label: "Background Color", type: "color" },
      {
        key: "boxbackgroundColor",
        label: "Box Background Color",
        type: "color",
      },
      { key: "headingColor", label: "Heading Color", type: "color" },
      { key: "textColor", label: "Text Color", type: "color" },
      { key: "buttonColor", label: "Button Color", type: "color" },
      { key: "buttonTextColor", label: "Button Text Color", type: "color" },
    ],
  },

  SectionWithBg: {
    name: "SectionWithBg",
    fields: [
      { key: "bgSrc", label: "Background Image", type: "file" },
      { key: "imageSrc", label: "Image Source", type: "file" },
      { key: "sectionId", label: "Section Id", type: "text" },
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
        label: "Section Vertical Alignment",
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
      { key: "backgroundColor", label: "Background Color", type: "color" },
      { key: "headingColor", label: "Heading Color", type: "color" },
      { key: "textColor", label: "Text Color", type: "color" },
      { key: "buttonColor", label: "Button Color", type: "color" },
      { key: "buttonTextColor", label: "Button Text Color", type: "color" },
    ],
  },

  SectionWithoutBg: {
    name: "SectionWithBg",
    fields: [
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
        label: "Section Vertical Alignment",
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
      { key: "backgroundColor", label: "Background Color", type: "color" },
      { key: "headingColor", label: "Heading Color", type: "color" },
      { key: "textColor", label: "Text Color", type: "color" },
      { key: "buttonColor", label: "Button Color", type: "color" },
      { key: "buttonTextColor", label: "Button Text Color", type: "color" },
    ],
  },

  Service: {
    name: "Service",
    fields: [
      { key: "subTitle", label: "Subtitle", type: "text" },
      { key: "mainHeading", label: "Main Heading", type: "text" },
      {
        key: "servicesboxes",
        type: "repeater",
        fields: [
          { key: "title", label: "Service Title", type: "text" },
          {
            key: "description",
            label: "Service Description",
            type: "textarea",
          },
          { key: "imageSrc", label: "Image Source", type: "file" },
          { key: "imageAlt", label: "Image Alt Text", type: "text" },
          { key: "link", label: "Link", type: "url" },
          { key: "linkText", label: "Link Text", type: "text" },
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
      {
        key: "boxbackgroundColor",
        label: "Box Background Color",
        type: "color",
      },
      { key: "headingColor", label: "Heading Color", type: "color" },
      { key: "boxHeadingColor", label: "Box Heading Color", type: "color" },
      { key: "textColor", label: "Text Color", type: "color" },
      { key: "buttonColor", label: "Button Color", type: "color" },
      { key: "buttonTextColor", label: "Button Text Color", type: "color" },
    ],
  },

  Team: {
    name: "Team",
    fields: [
      { key: "mainHeading", label: "Main Heading", type: "text" },
      {
        key: "members",
        type: "repeater",
        fields: [
          { key: "name", label: "Name", type: "text" },
          { key: "designation", label: "Designation", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "imageSrc", label: "Image Source", type: "file" },
          { key: "imageAlt", label: "Image Alt Text", type: "text" },
        ],
      },
    ],
  },

  Testimonial: {
    name: "TestimonialSection",
    fields: [
      { key: "mainHeading", label: "Main Heading", type: "text" },
      {
        key: "testimonials",
        type: "repeater",
        fields: [
          { key: "text", label: "Name", type: "text" },
          { key: "author", label: "Designation", type: "text" },
          { key: "location", label: "Description", type: "textarea" },
          { key: "image", label: "Image Source", type: "file" },
        ],
      },
    ],
  },

  TestimonialSliderNew: {
    name: "TestimonialSliderNew",
    fields: [],
    style: [],
  },

  TextBlock: {
    name: "textBlock",
    fields: [{ key: "description", label: "Text", type: "textarea" }],
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
    ],
  },

  ThankYou: {
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
  },
};

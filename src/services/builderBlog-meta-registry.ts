// Plain TS — no "use client" / "use server".
// Safe to import from server actions. Add new builderBlog component metas here.

export const builderBlogMeta: Record<string, any> = {
  BlogCard: {
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
  },

  CaseStudyHead: {
    name: "CaseStudyHead",
    fields: [
      { key: "imageSrc", label: "Image Source", type: "file" },
      { key: "imageAlt", label: "Alt Text", type: "text" },
      { key: "title", label: "Title", type: "text" },
      {
        key: "heighlights",
        label: "Highlights",
        type: "repeater",
        fields: [{ key: "highlight", label: "Highlight", type: "text" }],
      },
      { key: "btntext", label: "Button Text", type: "text" },
      { key: "btnurl", label: "Button Url", type: "url" },
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
  },

  CaseStudyInfo: {
    name: "CaseStudyInfo",
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "focus", label: "Focus", type: "text" },
      { key: "delivered", label: "Delivered", type: "text" },
      { key: "complexity", label: "Complexity", type: "text" },
      { key: "hours", label: "Hours", type: "text" },
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
  },

  CaseStudyHero: {
    name: "CaseStudyHero",
    fields: [
      { key: "backLink", label: "Back Link URL", type: "url" },
      { key: "imageSrc", label: "Image Source", type: "file" },
      { key: "imageAlt", label: "Image Alt Text", type: "text" },
      {
        key: "tags",
        label: "Tags",
        type: "repeater",
        fields: [
          { key: "label", label: "Tag Label", type: "text" },
          { key: "filled", label: "Filled (purple bg)", type: "text" },
        ],
      },
      { key: "title", label: "Title", type: "text" },
      { key: "rating", label: "Rating (1–5)", type: "text" },
      { key: "delivered", label: "Delivered Date", type: "text" },
      { key: "country", label: "Country", type: "text" },
      { key: "duration", label: "Duration", type: "text" },
      {
        key: "complexityLevel",
        label: "Complexity Level (beginner / intermediate / advanced)",
        type: "text",
      },
      { key: "btnText", label: "Button Text", type: "text" },
      { key: "btnUrl", label: "Button URL", type: "url" },
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
  },

  CaseStudySlider: {
    name: "CaseStudySlider",
    fields: [
      { key: "heading", label: "Section Heading (optional)", type: "text" },
      {
        key: "images",
        label: "Images",
        type: "repeater",
        fields: [
          { key: "image", label: "Image", type: "file" },
          { key: "alt", label: "Alt Text", type: "text" },
          { key: "caption", label: "Caption (optional overlay)", type: "text" },
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
      { key: "backgroundColor", label: "Background Color", type: "color" },
    ],
  },

  Counter: {
    name: "Counter",
    fields: [],
    style: [],
  },

  CustomHtml: {
    name: "tableSection",
    fields: [
      { key: "tableHeadings", label: "Add Custom Html", type: "codeBlock" },
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
    ],
  },

  Faq: {
    name: "JourneySection",
    fields: [
      { key: "title", label: "Title", type: "text" },
      {
        key: "phases",
        type: "repeater",
        fields: [
          { key: "question", label: "Question", type: "text" },
          { key: "ans", label: "Answer", type: "textarea" },
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
      { key: "backgroundColor", label: "Background Color", type: "color" },
    ],
  },

  ImageSlider: {
    name: "ImageSlider",
    fields: [
      { key: "mainHeading", label: "Main Heading", type: "text" },
      { key: "itemsPerRow", label: "Items Per Row", type: "text" },
      {
        key: "imageSlider",
        type: "repeater",
        fields: [
          { key: "image", label: "Image", type: "file" },
          { key: "alt", label: "Alt Text", type: "text" },
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
      { key: "backgroundColor", label: "Background Color", type: "color" },
    ],
  },

  NewGuide: {
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
  },

  OtherGuides: {
    name: "otherGuides",
    hidden: true,
    fields: [
      { key: "type", label: "Type", type: "text" },
      { key: "excludeSlug", label: "Exclude Slug", type: "text" },
    ],
  },

  ProjectBrief: {
    name: "ProjectBrief",
    fields: [
      { key: "title", label: "Title", type: "text" },
      {
        key: "paragraphs",
        label: "Paragraphs",
        type: "repeater",
        fields: [
          { key: "text", label: "Paragraph (HTML allowed)", type: "textarea" },
        ],
      },
      {
        key: "stats",
        label: "Stats",
        type: "repeater",
        fields: [
          { key: "number", label: "Number", type: "text" },
          { key: "label", label: "Label", type: "text" },
          { key: "icon", label: "Icon Image", type: "file" },
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
      { key: "backgroundColor", label: "Background Color", type: "color" },
    ],
  },

  SectionWithBg: {
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

  TableOfContent: {
    name: "tableOfContent",
    fields: [
      { key: "title", label: "Title", type: "text" },
      {
        key: "phases",
        type: "repeater",
        fields: [
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
    ],
  },

  TableSection: {
    name: "tableSection",
    fields: [
      {
        key: "tableHeadings",
        type: "repeater",
        fields: [{ key: "title", label: "Table Heading", type: "text" }],
      },
      {
        key: "tableRows",
        type: "repeater",
        fields: [
          { key: "description", label: "Table Description", type: "textarea" },
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
    ],
  },

  TextBlock: {
    name: "textBlock",
    fields: [{ key: "description", label: "Text", type: "textarea" }],
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
      { key: "backgroundColor", label: "Background Color", type: "color" },
      { key: "textColor", label: "Text Color", type: "color" },
    ],
  },

  TextWithImage: {
    name: "SectionWithBg",
    fields: [
      { key: "imageSrc", label: "Image Source", type: "file" },
      { key: "imageAlt", label: "Alt Text", type: "text" },
      { key: "title", label: "Title", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
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
      {
        key: "alignAlignment",
        label: "Vertical Alignment",
        type: "radioOptions",
        fields: [
          { key: "sticky", label: "Sticky", type: "radio" },
          { key: "center", label: "Center", type: "radio" },
        ],
      },
      { key: "backgroundColor", label: "Background Color", type: "color" },
      { key: "headingColor", label: "Heading Color", type: "color" },
      { key: "textColor", label: "Text Color", type: "color" },
    ],
  },
};

"use client";
import { Editor } from "@tinymce/tinymce-react";
import * as _ from "lodash";
import React, { useRef, useState } from "react";

interface CustomEditorProps {
  value: string;
  onChange: (content: string) => void;
}

const CustomEditor: React.FC<CustomEditorProps> = ({ value, onChange }) => {
  const [editorContent, setEditorContent] = useState(value);
  const debouncedOnChange = useRef(
    _.debounce((content: string) => {
      onChange(content);
    }, 300),
  ).current;

  const handleEditorChange = (content: string) => {
    setEditorContent(content); // Update local state immediately
    debouncedOnChange(content); // Call debounced onChange
  };

  return (
    <Editor
      apiKey="einpz4pgbjx1yhnarb5zxjo574l9szqjvqp8pad7me2pejfo"
      init={{
        plugins: [
          "anchor",
          "autolink",
          "charmap",
          "codesample",
          "emoticons",
          "image",
          "link",
          "lists",
          "media",
          "searchreplace",
          "table",
          "visualblocks",
          "wordcount",
          "checklist",
          "mediaembed",
          "casechange",
          "export",
          "formatpainter",
          "pageembed",
          "a11ychecker",
          "tinymcespellchecker",
          "permanentpen",
          "powerpaste",
          "advtable",
          "advcode",
          "editimage",
          "advtemplate",
          "ai",
          "mentions",
          "tinycomments",
          "tableofcontents",
          "footnotes",
          "mergetags",
          "autocorrect",
          "typography",
          "inlinecss",
          "markdown",
          "importword",
          "exportword",
          "exportpdf",
        ],
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        tinycomments_mode: "embedded",
        tinycomments_author: "Author name",
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" },
        ],
        ai_request: (request: any, respondWith: any) =>
          respondWith.string(() =>
            Promise.reject("See docs to implement AI Assistant"),
          ),
      }}
      value={editorContent}
      onEditorChange={handleEditorChange}
    />
  );
};

export default CustomEditor;

"use client";
import { getImagePath } from "@/services/common.service";
import { uploadImage } from "@/services/pages.service";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import RefreshOutline from "../Icons/RefreshOutline";
import CustomEditor from "./CustomEditor";
import "./Modal.scss";

interface ModalProps {
  title: string;
  onClose: () => void;
  componentData: { [key: string]: any };
  setComponentData: React.Dispatch<
    React.SetStateAction<{ [key: string]: any }>
  >;
  editingComponent: {
    name: string;
    fields: any;
    index: number | null;
    id: string;
    styles: any;
  };
}

const Modal: React.FC<ModalProps> = ({
  title,
  onClose,
  componentData,
  setComponentData,
  editingComponent,
}) => {
  const [formData, setFormData] = useState<any[]>([]);
  const [styleData, setStyleData] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"content" | "style">("content");

  useEffect(() => {
    if (editingComponent.id) {
      const updatedFormData = editingComponent.fields.map((field: any) => {
        const fieldData = componentData[editingComponent.id]?.[field.key];
        const defaultValue = field.type === "repeater" ? [] : field.value || "";

        return {
          ...field,
          value: fieldData !== undefined ? fieldData : defaultValue,
        };
      });
      setFormData(updatedFormData);

      if (editingComponent?.styles) {
        const updatedStyleData = editingComponent.styles.map(
          (styleField: any) => {
            const fieldData =
              componentData[editingComponent.id]?.styles?.[styleField.key];

            const defaultValue =
              styleField.type === "box"
                ? styleField.fields.reduce(
                    (acc: Record<string, number>, subField: any) => {
                      acc[subField.key] = 0; // Default value for box fields
                      return acc;
                    },
                    {}
                  )
                : "";

            return {
              ...styleField,
              value: fieldData !== undefined ? fieldData : defaultValue,
            };
          }
        );

        setStyleData(updatedStyleData || []);
      }
    }
  }, [componentData, editingComponent]);

  const handleFieldChange = (fieldKey: string, value: any) => {
    setFormData((prev: any) =>
      prev.map((field: any) =>
        field.key === fieldKey ? { ...field, value } : field
      )
    );

    setComponentData((prev: any) => ({
      ...prev,
      [editingComponent.id]: {
        ...prev[editingComponent.id],
        [fieldKey]: value,
      },
    }));
  };

  const handleRepeaterChange = (fieldKey: string, rows: any[]) => {
    handleFieldChange(fieldKey, rows);
  };

  const addRepeaterRow = (fieldKey: string, fields: any[]) => {
    const updatedRows = [
      ...(componentData[editingComponent.id]?.[fieldKey] || []),
      fields.reduce((acc: any, field: any) => {
        acc[field.key] = field.value || "";
        return acc;
      }, {}),
    ];
    handleRepeaterChange(fieldKey, updatedRows);
  };

  const removeRepeaterRow = (fieldKey: string, index: number) => {
    const updatedRows = [
      ...(componentData[editingComponent.id]?.[fieldKey] || []),
    ];
    updatedRows.splice(index, 1);
    handleRepeaterChange(fieldKey, updatedRows);
  };

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldKey: string,
    rowIndex: number | null = null,
    subFieldKey: string | null = null
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageName = await uploadImage(file, "components");
      if (rowIndex === null || subFieldKey === null) {
        handleFieldChange(fieldKey, imageName);
      } else {
        const updatedRows = [...componentData[editingComponent.id][fieldKey]];
        updatedRows[rowIndex][subFieldKey] = imageName;
        handleRepeaterChange(fieldKey, updatedRows);
      }
    }
  };

  const handleStyleFieldChange = (fieldKey: string, value: any) => {
    // Update styleData
    const updatedStyleData = styleData.map((styleField: any) =>
      styleField.key === fieldKey ? { ...styleField, value } : styleField
    );
    setStyleData(updatedStyleData);

    // Update componentData as well
    setComponentData((prev: any) => ({
      ...prev,
      [editingComponent.id]: {
        ...prev[editingComponent.id],
        styles: {
          ...prev[editingComponent.id]?.styles,
          [fieldKey]: value,
        },
      },
    }));
  };

  const handleBoxStyleChange = (
    fieldKey: string,
    subFieldKey: string,
    value: any
  ) => {
    // Update the specific box style field
    const updatedStyleData = [...styleData];
    const index = updatedStyleData.findIndex(
      (styleField: any) => styleField.key === fieldKey
    );
    if (index !== -1) {
      updatedStyleData[index].value[subFieldKey] = value;
      setStyleData(updatedStyleData);
    }

    // Update componentData for the specific box style field
    setComponentData((prev: any) => ({
      ...prev,
      [editingComponent.id]: {
        ...prev[editingComponent.id],
        styles: {
          ...prev[editingComponent.id]?.styles,
          [fieldKey]: updatedStyleData[index].value,
        },
      },
    }));
  };
  const resetColor = (key: any) => {
    // Reset the color for the specific input based on its key
    handleStyleFieldChange(key, ""); // Set value to an empty string
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        backgroundColor: "#fff",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
        width: "26%",
        maxHeight: "100vh",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <h3 className="modaltitle">{title}</h3>
      <div
        className="modalcontenttabs"
        style={{ marginBottom: "15px", display: "flex" }}
      >
        <button onClick={() => setActiveTab("content")}>Content</button>
        {editingComponent.styles && (
          <button onClick={() => setActiveTab("style")}>Style</button>
        )}
      </div>
      {activeTab === "content" && (
        <>
          {formData.map((field: any, index: number) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <CustomEditor
                  value={field.value !== undefined ? field.value : ""}
                  onChange={(newValue) =>
                    handleFieldChange(field.key, newValue)
                  }
                />
              ) : field.type === "codeBlock" ? (
                <textarea
                  value={field.value || ""}
                  onChange={(e) => handleFieldChange(field.key, e.target.value)}
                  style={{
                    width: "100%",
                    height: "200px",
                    fontFamily: "monospace",
                    fontSize: "14px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "10px",
                  }}
                  placeholder="Write your code here..."
                />
              ) : field.fields && Array.isArray(field.value) ? (
                <>
                  {(field.value || []).map((row: any, rowIndex: number) => (
                    <div
                      key={rowIndex}
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        padding: "10px",
                        marginBottom: "10px",
                        position: "relative",
                      }}
                    >
                      {field.fields.map((subField: any, subIndex: number) => (
                        <div key={subIndex} style={{ marginBottom: "10px" }}>
                          <label
                            style={{ display: "block", marginBottom: "5px" }}
                          >
                            {subField.label}
                          </label>
                          {subField.type === "textarea" ? (
                            <CustomEditor
                              value={row[subField.key] || ""}
                              onChange={(newValue) => {
                                const updatedRows = [...field.value];
                                updatedRows[rowIndex][subField.key] = newValue;
                                handleRepeaterChange(field.key, updatedRows);
                              }}
                            />
                          ) : (
                            <input
                              type={subField.type || "text"}
                              value={
                                subField.type === "file"
                                  ? undefined
                                  : row[subField.key] || ""
                              }
                              onChange={(e) => {
                                if (subField.type === "file") {
                                  handleImageUpload(
                                    e,
                                    field.key,
                                    rowIndex,
                                    subField.key
                                  );
                                } else {
                                  const updatedRows = [...field.value];
                                  updatedRows[rowIndex][subField.key] =
                                    e.target.value;
                                  handleRepeaterChange(field.key, updatedRows);
                                }
                              }}
                              style={{
                                width: "100%",
                                padding: subField.type === "file" ? "0" : "8px",
                                border:
                                  subField.type === "file"
                                    ? "none"
                                    : "1px solid #ccc",
                                borderRadius:
                                  subField.type === "file" ? "0" : "4px",
                              }}
                            />
                          )}
                          <div
                            style={{ width: "fit-content", margin: "0 auto" }}
                          >
                            {subField.type === "file" && (
                              <>
                                <Image
                                  src={getImagePath(
                                    "default_img.png",
                                    row[subField.key]
                                  )}
                                  alt="Uploaded Preview"
                                  width={100}
                                  height={100}
                                  style={{
                                    objectFit: "cover",
                                    cursor: "pointer",
                                    borderRadius: "17px",
                                    width: "100%",
                                    height: "150px",
                                    marginTop: "15px",
                                  }}
                                  loading="lazy"
                                />
                                <div className="prevbtn"></div>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={() => removeRepeaterRow(field.key, rowIndex)}
                        style={{
                          position: "absolute",
                          top: "5px",
                          right: "5px",
                          backgroundColor: "#f44336",
                          color: "#fff",
                          border: "none",
                          borderRadius: "50%",
                          width: "24px",
                          height: "24px",
                          cursor: "pointer",
                        }}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => addRepeaterRow(field.key, field.fields)}
                    style={{
                      display: "block",
                      margin: "10px 0",
                      backgroundColor: "#4CAF50",
                      color: "#fff",
                      border: "none",
                      padding: "10px",
                      cursor: "pointer",
                      borderRadius: "4px",
                    }}
                  >
                    Add Row
                  </button>
                </>
              ) : (
                <>
                  <input
                    type={field.type || "text"}
                    value={
                      field.type === "file" ? undefined : field.value || ""
                    }
                    onChange={(e) => {
                      if (field.type === "file") {
                        handleImageUpload(e, field.key, -1, null);
                      } else {
                        handleFieldChange(field.key, e.target.value);
                      }
                    }}
                    style={{
                      width: "100%",
                      padding: field.type === "file" ? "0" : "8px",
                      border: field.type === "file" ? "none" : "1px solid #ccc",
                      borderRadius: field.type === "file" ? "0" : "4px",
                    }}
                  />
                  {field.type === "file" && (
                    <>
                      <Image
                        src={getImagePath("default_img.png", field.value)}
                        alt="Uploaded Preview"
                        width={100}
                        height={100}
                        style={{
                          objectFit: "cover",
                          cursor: "pointer",
                          borderRadius: "17px",
                          width: "100%",
                          height: "150px",
                          marginTop: "15px",
                        }}
                        loading="lazy"
                      />
                      <div className="prevbtn"></div>
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </>
      )}
      {activeTab === "style" && (
        <>
          {styleData.map((styleField: any, index: number) => (
            <div
              key={index}
              style={{ marginBottom: "10px" }}
              className={styleField.type === "color" ? "color-field" : ""}
            >
              <label style={{ display: "block", marginBottom: "5px" }}>
                {styleField.label}
              </label>
              {styleField.type === "box" ? (
                <div style={{ display: "flex", gap: "10px" }}>
                  {styleField.fields.map((subField: any, subIndex: number) => (
                    <div key={subIndex} style={{ flex: "0 1" }}>
                      <label style={{ fontSize: "12px" }}>
                        {subField.label}
                      </label>
                      <input
                        type={subField.type || "text"}
                        value={styleField.value[subField.key] || ""}
                        onChange={(e) => {
                          handleBoxStyleChange(
                            styleField.key,
                            subField.key,
                            e.target.value
                          );
                        }}
                        style={{
                          width: "53px",
                          height: "31px",
                          paddingLeft: "5px",
                        }}
                      />
                    </div>
                  ))}
                </div>
              ) : styleField.type === "radioOptions" ? (
                <div>
                  {styleField.fields.map(
                    (radioField: any, radioIndex: number) => (
                      <div key={radioIndex} style={{ marginBottom: "5px" }}>
                        <label>
                          <input
                            type="radio"
                            name={styleField.key}
                            value={radioField.key}
                            checked={styleField.value === radioField.key}
                            onChange={(e) => {
                              handleStyleFieldChange(
                                styleField.key,
                                e.target.value
                              );
                            }}
                            style={{ marginRight: "6px" }}
                          />
                          {radioField.label}
                        </label>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <>
                  {styleField.type === "color" ? (
                    <div className="color-field-wrapper">
                      <input
                        type="color"
                        value={styleField.value || ""}
                        onChange={(e) => {
                          handleStyleFieldChange(
                            styleField.key,
                            e.target.value
                          );
                        }}
                      />
                      <button
                        onClick={() => resetColor(styleField.key)}
                        className="reset-button-style"
                      >
                        <RefreshOutline />
                      </button>
                    </div>
                  ) : (
                    <input
                      type={styleField.type || "text"}
                      value={styleField.value || ""}
                      onChange={(e) => {
                        handleStyleFieldChange(styleField.key, e.target.value);
                      }}
                    />
                  )}
                </>
              )}
            </div>
          ))}
        </>
      )}
      <button
        onClick={onClose}
        style={{
          marginTop: "20px",
          backgroundColor: "#f44336",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </div>
  );
};

export default Modal;

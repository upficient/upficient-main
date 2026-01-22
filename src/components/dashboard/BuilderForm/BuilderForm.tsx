"use client";

import ComponentsList from "@/components/ui/Builder/ComponentsList";
import DroppableArea from "@/components/ui/Builder/DroppableArea";
import PageSettings from "@/components/ui/Builder/PageSetting";
import Modal from "@/components/ui/Modal";
import { fetchComponet } from "@/services/builder.service";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { addOrUpdatePage, getPageById } from "@/services/pages.service";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import "./BuilderForm.scss";

interface BuilderFormProps {
  pageId: string | null;
}

const Builder = ({ pageId }: BuilderFormProps) => {
  const [droppedComponents, setDroppedComponents] = useState<
    { id: string; name: string; order: number }[]
  >([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dropIndicatorIndex, setDropIndicatorIndex] = useState<number | null>(
    null
  );
  const [draggedComponentName, setDraggedComponentName] = useState<
    string | null
  >(null);
  const [componentsList, setComponentsList] = useState<
    { name: string; fields: any[] }[]
  >([]);
  const [pageSettings, setPageSettings] = useState<
    { name: string; fields: any[] }[]
  >([]);
  const [activeTab, setActiveTab] = useState("components");
  const [editingComponent, setEditingComponent] = useState<{
    name: string;
    fields: any;
    id: string;
    styles: any;
  } | null>(null);
  const [componentData, setComponentData] = useState<{ [key: string]: any }>(
    {}
  );
  const [loading, setLoading] = useState(false);

  const hasDropped = useRef(false);
  const scrollPosition = useRef(0);
  const componentCache = useRef<{
    [key: string]: React.LazyExoticComponent<any>;
  }>({});

  // edit page data
  useEffect(() => {
    const fetchUserData = async () => {
      if (!pageId) return;

      setLoading(true);
      try {
        const page: any = await getPageById(pageId);
        const pageSettings = page.fields;
        const pageCoponent = page.components;
        const result = Object.keys(pageCoponent)
          .map((key) => ({
            id: key,
            name: key.split("_")[0],
            order: pageCoponent[key].order, // Include the order property
          }))
          .sort((a, b) => a.order - b.order);

        setDroppedComponents(result);
        setComponentData(pageCoponent);
        setPageSettings(pageSettings);
      } catch (err) {
        toast.error("Error fetching page details.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [pageId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchComponet();
        setComponentsList(data as any);
      } catch (err) {
        console.error("Error fetching components:", err);
      }
    };
    fetchData();
  }, []);

  const handleDragStartFromSidebar = (
    e: React.DragEvent<HTMLDivElement>,
    componentName: string
  ) => {
    e.dataTransfer.setData("componentName", componentName);
    setDraggedComponentName(componentName);
    setDraggedIndex(null);
    hasDropped.current = false;

    addDragPreview(e, "Dragging New Component...");
  };

  const handleDragStartInDropArea = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.dataTransfer.setData("componentIndex", String(index));
    setDraggedIndex(index);
    setDraggedComponentName(null);
    hasDropped.current = false;

    addDragPreview(e, "Rearranging Component...");
  };

  // const handleDrop = (
  //   e: React.DragEvent<HTMLDivElement>,
  //   targetIndex: number | null = null
  // ) => {
  //   e.preventDefault();
  //   if (hasDropped.current) return;

  //   const componentName = e.dataTransfer.getData("componentName");
  //   const componentIndex = e.dataTransfer.getData("componentIndex");

  //   if (componentName) {
  //     const newIndex = droppedComponents.length;
  //     const uniqueKey = `${componentName}_${newIndex}`;

  //     // Add the new component to the dropped list with a unique id
  //     setDroppedComponents((prev) => {
  //       const updatedComponents = [...prev];
  //       updatedComponents.splice(targetIndex ?? updatedComponents.length, 0, {
  //         id: uniqueKey,
  //         name: componentName,
  //       });
  //       return updatedComponents;
  //     });

  //     // Initialize unique data for the new dropped component instance
  //     setComponentData((prev) => {
  //       const newData = { ...prev };
  //       newData[uniqueKey] = { order: targetIndex ?? Object.keys(prev).length }; // Initialize a new data object for this instance
  //       return newData;
  //     });

  //     setDraggedComponentName(null);
  //   } else if (componentIndex && draggedIndex !== null) {
  //     const index = parseInt(componentIndex, 10);
  //     setDroppedComponents((prev) => {
  //       const updatedComponents = [...prev];
  //       const [removed] = updatedComponents.splice(draggedIndex, 1);
  //       updatedComponents.splice(
  //         targetIndex ?? updatedComponents.length,
  //         0,
  //         removed
  //       );
  //       return updatedComponents;
  //     });
  //   }

  //   hasDropped.current = true;
  //   setDraggedIndex(null);
  //   setDropIndicatorIndex(null);
  // };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    targetIndex: number | null = null
  ) => {
    e.preventDefault();
    if (hasDropped.current) return;

    const componentName = e.dataTransfer.getData("componentName");
    const componentIndex = e.dataTransfer.getData("componentIndex");

    if (componentName) {
      const newIndex = droppedComponents.length;
      const uniqueKey = `${componentName}_${newIndex}`;

      setDroppedComponents((prev) => {
        const updatedComponents = [...prev];
        const newIndex = targetIndex ?? updatedComponents.length;

        updatedComponents.splice(newIndex, 0, {
          id: uniqueKey,
          name: componentName,
          order: newIndex,
        });

        // Recalculate the `order` field for all components
        updatedComponents.forEach((comp, index) => {
          comp.order = index;
        });

        // Sync `componentData` with the updated orders
        setComponentData((prevData) => {
          const updatedData = { ...prevData };
          updatedComponents.forEach((comp) => {
            if (!updatedData[comp.id]) {
              updatedData[comp.id] = { order: comp.order };
            } else {
              updatedData[comp.id].order = comp.order;
            }
          });
          return updatedData;
        });

        return updatedComponents;
      });

      setDraggedComponentName(null);
    } else if (componentIndex && draggedIndex !== null) {
      const index = parseInt(componentIndex, 10);
      setDroppedComponents((prev) => {
        const updatedComponents = [...prev];

        // Move the component to the target position
        const [removed] = updatedComponents.splice(draggedIndex, 1);
        updatedComponents.splice(
          targetIndex ?? updatedComponents.length,
          0,
          removed
        );

        // Recalculate the `order` field for all components
        updatedComponents.forEach((comp, index) => {
          comp.order = index;
        });

        // Sync `componentData` with the updated orders
        setComponentData((prevData) => {
          const updatedData = { ...prevData };
          updatedComponents.forEach((comp) => {
            if (updatedData[comp.id]) {
              updatedData[comp.id].order = comp.order;
            }
          });
          return updatedData;
        });

        return updatedComponents;
      });
    }

    hasDropped.current = true;
    setDraggedIndex(null);
    setDropIndicatorIndex(null);
  };

  const handleDelete = (index: number) => {
    setDroppedComponents((prev) => prev.filter((_, i) => i !== index));
    // Remove data for this component instance as well
    setComponentData((prev) => {
      const newData = { ...prev };
      const { id } = droppedComponents[index];
      delete newData[id]; // Remove data for this component instance
      return newData;
    });
  };

  const handleDragOver = (
    e: React.DragEvent<HTMLDivElement>,
    index: number | null
  ) => {
    e.preventDefault();
    setDropIndicatorIndex(index);
  };

  const getComponent = useCallback((name: string) => {
    if (!componentCache.current[name]) {
      componentCache.current[name] = React.lazy(
        () => import(`../../../components/builder/${name}/${name}`)
      );
    }
    return componentCache.current[name];
  }, []);

  const handleEdit = (index: number) => {
    const { name, id } = droppedComponents[index];
    const componentMeta: any = componentsList.find(
      (comp) => comp.name === name
    );

    if (!componentMeta || !Array.isArray(componentMeta.meta.fields)) {
      return;
    }

    const initialFields = componentMeta.meta.fields.map((field: any) => ({
      ...field,
      value: componentData[id]?.[field.key] || "", // Ensure data per index
    }));
    const initialStyles =
      componentMeta.meta.style && componentMeta.meta.style.length > 0
        ? componentMeta.meta.style.map((field: any) => ({
            ...field,
            value: componentData[id]?.[field.key] || "", // Ensure data per index
          }))
        : []; // If no design meta exists, set styles to an empty array

    setEditingComponent({
      name,
      fields: initialFields,
      id,
      styles: initialStyles, // Only set styles if design meta exists
    });
  };
  const handleSave = async () => {
    await addOrUpdatePage(pageId, {
      ...{ fields: pageSettings[0]?.fields },
      ...{ components: componentData },
      componentType: 'page'
    }).then(() => {
      toast.success("Page saved successfully.");
      redirect("/dashboard/pages");
    });
  };

  useEffect(() => {
    window.scrollTo(0, scrollPosition.current);
  }, [droppedComponents]);

  const addDragPreview = (e: React.DragEvent, text: string) => {
    const dragPreview = document.createElement("div");
    dragPreview.style.position = "absolute";
    dragPreview.style.top = "-9999px";
    dragPreview.style.left = "-9999px";
    dragPreview.style.width = "150px";
    dragPreview.style.padding = "10px";
    dragPreview.style.background = "#1976D2";
    dragPreview.style.color = "#fff";
    dragPreview.style.textAlign = "center";
    dragPreview.style.borderRadius = "5px";
    dragPreview.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    dragPreview.innerText = text;

    document.body.appendChild(dragPreview);
    e.dataTransfer.setDragImage(dragPreview, 75, 20);

    setTimeout(() => {
      document.body.removeChild(dragPreview);
    }, 0);
  };
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div className="sidebar">
        <div className="tab-area">
          <div className="tabs">
            <button
              className={activeTab === "components" ? "active" : ""}
              onClick={() => setActiveTab("components")}
            >
              Components List
            </button>
            <button
              className={activeTab === "settings" ? "active" : ""}
              onClick={() => setActiveTab("settings")}
            >
              Page Settings
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "components" && (
              <ComponentsList
                componentsList={componentsList}
                handleDragStartFromSidebar={handleDragStartFromSidebar}
              />
            )}
            {activeTab === "settings" && (
              <PageSettings
                pageSettings={pageSettings}
                setPageSettings={setPageSettings}
              />
            )}
          </div>
        </div>
        <div className="side-footer">
          <div className="buttons">
            <button>Save as Draft</button>
            <button type="button" onClick={handleSave}>
              Publish
            </button>
          </div>
        </div>
      </div>
      <div className="main-content-form">
        {/* Droppable Area */}
        <DroppableArea
          droppedComponents={droppedComponents}
          scrollPosition={scrollPosition}
          handleDrop={handleDrop}
          handleDragStartInDropArea={handleDragStartInDropArea}
          handleDragOver={handleDragOver}
          dropIndicatorIndex={dropIndicatorIndex}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          getComponent={getComponent}
          componentData={componentData}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />

        {editingComponent && (
          <Modal
            title={`Edit ${editingComponent.name}`}
            componentData={componentData}
            setComponentData={setComponentData}
            editingComponent={editingComponent as any}
            onClose={() => setEditingComponent(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Builder;

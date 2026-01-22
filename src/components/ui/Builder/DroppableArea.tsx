import LoaderComponent from "@/components/miscellaneous/LoaderComponent/LoaderComponent";
import React from "react";

// Update the type of droppedComponents to match the new structure
type DroppableAreaProps = {
  droppedComponents: { id: string; name: string }[]; // Updated type
  dropIndicatorIndex: number | null;
  scrollPosition: React.MutableRefObject<number>;
  componentData: { [key: string]: any };
  hoveredIndex: number | null;
  getComponent: (name: string) => React.LazyExoticComponent<any>;
  handleDrop: (
    e: React.DragEvent<HTMLDivElement>,
    targetIndex?: number | null
  ) => void;
  handleDragStartInDropArea: (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => void;
  handleDragOver: (
    e: React.DragEvent<HTMLDivElement>,
    index: number | null
  ) => void;
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
  setHoveredIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

const DroppableArea: React.FC<DroppableAreaProps> = ({
  droppedComponents,
  dropIndicatorIndex,
  scrollPosition,
  componentData,
  hoveredIndex,
  getComponent,
  handleDrop,
  handleDragStartInDropArea,
  handleDragOver,
  handleEdit,
  handleDelete,
  setHoveredIndex,
}) => {
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        scrollPosition.current = window.scrollY;
        handleDrop(e);
      }}
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        border: "2px dashed #999",
        background: "#fafafa",
        overflow: "auto",
        paddingBottom: "200px",
        height: "100%",
      }}
    >
      {droppedComponents.length === 0 && (
        <h3
          style={{
            textAlign: "center",
            color: "#888",
            fontSize: "20px",
          }}
        >
          Drop Components Here
        </h3>
      )}
      {droppedComponents.map((component, index) => {
        const FoundComponent: any = getComponent(component.name); // Using component.name

        return (
          <div key={component.id} style={{ position: "relative" }}>
            {dropIndicatorIndex === index && (
              <div
                style={{
                  height: "5px",
                  backgroundColor: "blue",
                  margin: "2px 0",
                }}
              ></div>
            )}
            <React.Suspense fallback={<LoaderComponent/>}>
              <div
                draggable
                onDragStart={(e) => handleDragStartInDropArea(e, index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={(e) => {
                  scrollPosition.current = window.scrollY;
                  handleDrop(e, index);
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  margin: "5px 0",
                  padding: "10px",
                  border: "1px solid #ddd",
                  background: "#fff",
                  cursor: "grab",
                }}
              >
                <FoundComponent data={componentData[component.id] || {}} />
                {hoveredIndex === index && (
                  <div
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      display: "flex",
                      gap: "5px",
                    }}
                  >
                    <button
                      onClick={() => handleEdit(index)}
                      style={{
                        backgroundColor: "#2196f3",
                        color: "#fff",
                        border: "none",
                        padding: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      style={{
                        backgroundColor: "#f44336",
                        color: "#fff",
                        border: "none",
                        padding: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </React.Suspense>
          </div>
        );
      })}

      {dropIndicatorIndex === droppedComponents.length && (
        <div
          style={{
            height: "5px",
            backgroundColor: "blue",
            margin: "2px 0",
          }}
        ></div>
      )}
    </div>
  );
};

export default DroppableArea;

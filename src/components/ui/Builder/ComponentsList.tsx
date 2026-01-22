import React from "react";

type ComponentsListProps = {
  componentsList: { name: string }[];
  handleDragStartFromSidebar: (
    e: React.DragEvent<HTMLDivElement>,
    componentName: string
  ) => void;
};

const ComponentsList: React.FC<ComponentsListProps> = ({
  componentsList,
  handleDragStartFromSidebar,
}) => {
  return (
    <div>
      <h3 style={{ fontSize: "23px" }}>Components</h3>
      <div className="listmain">
        {componentsList.map((comp) => (
          <div
            key={comp.name}
            draggable
            onDragStart={(e) => handleDragStartFromSidebar(e, comp.name)}
            style={{
              margin: "10px 0",
              padding: "5px",
              border: "1px solid #aaa",
              cursor: "grab",
              background: "#fff",
              textAlign: "center",
            }}
          >
            {comp.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentsList;

"use client";
import React, { useState } from "react";

interface FaqChildProps {
  index: number;
  question: string;
  ans: string;
}

const FaqChild: React.FC<FaqChildProps> = ({ index, question, ans }) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="accordion-item">
      <button
        id={`accordion-button-${index}`}
        aria-expanded={expandedItem === index ? "true" : "false"}
        onClick={() => toggleAccordion(index)}
      >
        <span className="accordion-title">{question}</span>
      </button>
      {expandedItem === index && (
        <div
          className="accordion-content"
          dangerouslySetInnerHTML={{
            __html: ans?.trim() || "",
          }}
        ></div>
      )}
    </div>
  );
};

export default FaqChild;

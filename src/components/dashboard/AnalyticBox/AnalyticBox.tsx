import React from "react";
import "./AnalyticBox.scss";

interface AnalyticItem {
  icon: React.ReactNode; // Accepts React components as icons
  count: string | number; // Supports numbers or formatted strings
  description: string; // Text for the description
}

interface AnalyticBoxProps {
  analyticData: AnalyticItem[]; // Array of analytic items
}

export default function AnalyticBox({ analyticData }: AnalyticBoxProps) {
  return (
    <>
      {analyticData.map((item, index) => (
        <div key={index} className="ana-box d-flex align-items-center">
          <div className="icon">{item.icon}</div>
          <div className="content">
            <h3>{item.count}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

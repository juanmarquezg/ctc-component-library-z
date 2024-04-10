import React from "react";

import { colors } from "../../commons/colors";
import "./colors.css";

export const ColorDisplay: React.FC = () => {
  const pascalCaseToSpace = (str: string) =>
    str.replace(/([a-z])([A-Z])|(\d+)/g, "$1 $2$3").trim();

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {Object.entries(colors).map(([key, value]) => (
        <div className="color-container" key={key}>
          <div
            style={{
              width: "180px",
              height: "120px",
              backgroundColor: key.startsWith("Opacidad")
                ? "transparent"
                : (value as string),
              opacity: key.startsWith("Opacidad") ? (value as number) : 1,
              border: "1px solid black",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
            }}
          />
          <div>{pascalCaseToSpace(key)}</div>
          <div>{value}</div>
        </div>
      ))}
    </div>
  );
};

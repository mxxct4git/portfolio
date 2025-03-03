import React from "react";

interface CustomBlockquoteProps {
  children?: React.ReactNode;
}

const CustomBlockquote: React.FC<CustomBlockquoteProps> = ({ children }) => {
  return (
    <blockquote style={{ color: "gray", fontStyle: "italic", borderLeft: "4px solid gray", paddingLeft: "10px", margin: "10px 0" }}>
      {children}
    </blockquote>
  );
};

export default CustomBlockquote;
import React from "react";

interface CustomCommentProps {
  children?: React.ReactNode;
}

const CustomComment: React.FC<CustomCommentProps> = ({ children }) => {
  return (
    <div style={{ color: "gray", fontStyle: "italic", borderLeft: "2px solid gray", paddingLeft: "10px", margin: "10px 0" }}>
      {children}
    </div>
  );
};

export default CustomComment;
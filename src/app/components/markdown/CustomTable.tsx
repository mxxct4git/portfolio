import React from "react";

interface CustomTableProps {
  children?: React.ReactNode;
}

const CustomTable: React.FC<CustomTableProps> = ({ children }) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === "thead") {
            return React.cloneElement(child as React.ReactElement<React.HTMLAttributes<HTMLTableSectionElement>>, {
              style: { fontWeight: "bold", textAlign: "center", border: "1px solid #ddd" },
            });
          }
          if (React.isValidElement(child) && child.type === "tbody") {
            return React.cloneElement(child as React.ReactElement<React.HTMLAttributes<HTMLTableSectionElement>>, {
              style: { textAlign: "center", border: "1px solid #ddd" },
            });
          }
          return child;
        })}
      </table>
    </div>
  );
};

export default CustomTable;
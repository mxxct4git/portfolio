import React from "react";
import styles from "@/app/styles/ArticleView.module.css";

interface CustomUnorderedListProps {
  children?: React.ReactNode; // 将 children 设置为可选
}

const CustomUnorderedList: React.FC<CustomUnorderedListProps> = ({
  children,
}) => {
  return <ul className={styles.unorderedList}>{children}</ul>;
};

export default CustomUnorderedList;

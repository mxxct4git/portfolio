import React from "react";
import styles from "@/app/styles/ArticleView.module.css";

interface CustomOrderedListProps {
  children?: React.ReactNode; // 将 children 设置为可选
}
const CustomOrderedList: React.FC<CustomOrderedListProps> = ({ children }) => {
  return <ol className={styles.orderedList}>{children}</ol>;
};

export default CustomOrderedList;

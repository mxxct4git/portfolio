"use client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import constantUtils from "../../utils/constantUtils";

import CustomHeading from "./CustomHeading";
import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";
import CustomCodeBlock from "./CustomCodeBlock";
import CustomInlineCodeBlock from "./CustomInlineCodeBlock";
import CustomUnorderedList from "./CustomUnorderedList";
import CustomOrderedList from "./CustomOrderedList";
import CustomTable from "./CustomTable";
import CustomBlockquote from "./CustomBlockquote";

import "highlight.js/styles/atom-one-dark.css";
// import "github-markdown-css/github-markdown.css";

import styles from "@/app/styles/ArticleView.module.css";

export default function ArticleView({ id }: { id: number }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // 规避 id 为 null 的情况
      const resolvedId = id === null ? 0 : id;
      const response = await fetch(
        constantUtils.projectList[resolvedId].mdFilePath
      );
      const data = await response.text();
      setContent(data);
    };
    fetchData();
  }, [id]);

  return (
    <div className={styles.markdownContainer}>
      <div className={styles.markdownBody}>
        <ReactMarkdown
          remarkPlugins={[gfm]}
          rehypePlugins={[rehypeHighlight]}
          components={{
            // 自定义标题
            h1: ({ children, ...props }) => (
              <CustomHeading level={1} {...props}>
                {children}
              </CustomHeading>
            ),
            h2: ({ children, ...props }) => (
              <CustomHeading level={2} {...props}>
                {children}
              </CustomHeading>
            ),
            h3: ({ children, ...props }) => (
              <CustomHeading level={3} {...props}>
                {children}
              </CustomHeading>
            ),
            h4: ({ children, ...props }) => (
              <CustomHeading level={4} {...props}>
                {children}
              </CustomHeading>
            ),
            h5: ({ children, ...props }) => (
              <CustomHeading level={5} {...props}>
                {children}
              </CustomHeading>
            ),
            // 自定义代码块
            code: ({ className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || "");

              // 判断是否是一行代码
              const isSingleLine =
                typeof children === "string" && !children.includes("\n");

              let childText = "";
              if (isSingleLine) {
                childText = children;
              } else if (Array.isArray(children)) {
                childText = children
                  .map((child) => {
                    if (typeof child === "string") {
                      return child;
                    } else if (React.isValidElement(child)) {
                      const element = child as React.ReactElement<{ children?: React.ReactNode }>; // ✅ 指定泛型，确保 props.children 类型正确
                      return processChildren(element.props.children);
                    } else {
                      return "";
                    }
                  })
                  .join("");
              } else {
                childText = String(children);
              }
              // console.log(">>>>>>>>");
              // console.log(children);
              // console.log(childText);
              if (!match) {
                return (
                  <CustomInlineCodeBlock {...props}>
                    {childText}
                  </CustomInlineCodeBlock>
                );
              }
              return isSingleLine ? (
                <CustomInlineCodeBlock {...props}>
                  {childText}
                </CustomInlineCodeBlock>
              ) : (
                <CustomCodeBlock
                  language={match[1]}
                  value={childText.replace(/\n$/, "")}
                />
              );
            },
            // 自定义链接
            a: CustomLink,
            // 自定义图片
            img: CustomImage,
            // 自定义无序列表
            ul: CustomUnorderedList,
            // 自定义有序列表
            ol: CustomOrderedList,
            // 自定义表格
            table: CustomTable,
            // 自定义引用
            blockquote: CustomBlockquote,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

// 递归处理 children
const processChildren = (children: React.ReactNode): string => {
  if (typeof children === "string" || typeof children === "number") {
    return String(children); // 处理字符串和数字
  } else if (Array.isArray(children)) {
    return children.map(processChildren).join(""); // 递归处理数组
  } else if (React.isValidElement(children)) {
    // **安全地访问 props.children**
    const element = children as React.ReactElement<{ children?: React.ReactNode }>; // 进行类型断言
    return processChildren(element.props.children);
  } else {
    return ""; // 忽略其他情况
  }
};




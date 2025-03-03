import React from "react";
import { slug } from "github-slugger"; // 生成锚点 ID
import Link from "next/link"; // 如果是 Next.js

interface HeadingProps {
  level: number;
  children: React.ReactNode;
}

const CustomHeading: React.FC<HeadingProps> = ({ level, children }) => {
  const text = React.Children.toArray(children).join(""); // 获取纯文本内容
  const id = slug(text);

  return React.createElement(
    `h${level}`,
    {
      id,
      className: "group relative text-2xl font-bold my-4", // 示例样式
    },
    [
      children,
      <Link
        key="anchor"
        href={`#${id}`}
        className="absolute -left-6 opacity-0 group-hover:opacity-100"
        aria-label="Anchor"
      >
        #
      </Link>,
    ]
  );
};

export default CustomHeading;

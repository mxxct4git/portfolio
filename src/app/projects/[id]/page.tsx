"use client";
import { useState, useEffect, use } from "react";
import dynamic from "next/dynamic";
import ArticleView from "@/app/components/markdown/ArticleView";

// 动态导入 CarouselDemo 并设置 ssr: false
const CarouselDemo = dynamic(
  () => import("../../components/(carousel)/CarouselDemo")
);

export default function Project({ params }: { params: { id: string } }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // 使用 React.use() 解包 params
  const resolvedParams = use(params) as { id: string };

  useEffect(() => {
    // 将 id 从字符串转换为数字，同时减 1 得到索引值
    const index = parseInt(resolvedParams.id, 10) - 1;
    setActiveIndex(index);
  }, [resolvedParams.id]);

  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <CarouselDemo id={activeIndex ?? 0} setActiveIndex={setActiveIndex} />
      </div>
      <div>
        <ArticleView id={activeIndex ?? 0} />
      </div>
    </div>
  );
}

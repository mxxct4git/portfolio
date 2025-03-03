"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import ArticleView from "@/app/components/markdown/ArticleView";

// 动态导入 CarouselDemo 并设置 ssr: false
const CarouselDemo = dynamic(
  () => import("../../components/(carousel)/CarouselDemo"),
  { ssr: false }
);

export default function Project() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const id = pathname.split("/")[2];
    // 将 id 从字符串转换为数字，同时减 1 得到索引值
    const index = parseInt(id as string, 10) - 1;
    setActiveIndex(index);
  }, [pathname]);

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

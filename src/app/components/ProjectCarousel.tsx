"use client"; // 确保这个文件是一个客户端组件

import CarouselDemo from "./CarouselDemo";

export default function ProjectCarousel({ id }: { id: number }) {
  return (
    <div>
      <CarouselDemo id={id} />
    </div>
  );
}

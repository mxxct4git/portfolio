"use client"; // 确保这个文件是一个客户端组件

import Carousel from "./Carousel";

export default function CarouselDemo({ id }: { id: number }) {
  return (
    <div>
      <Carousel id={id} />
    </div>
  );
}

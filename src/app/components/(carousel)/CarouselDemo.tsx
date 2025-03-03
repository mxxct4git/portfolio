"use client"; // 确保这个文件是一个客户端组件

import Carousel from "./Carousel";

// import clsx from "clsx";
// import styles from "@/app/styles/Home.module.css";

interface CarouselDemoProps {
  id: number | 0;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const CarouselDemo: React.FC<CarouselDemoProps> = ({ id, setActiveIndex }) => {
  return (
    <div>
      {/* <div
        className={clsx(
          "absolute -left-16 -bottom-16 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-50 animate-pulse",
          styles.bannerCardDotLeft,
          "lg:left-0"
        )}
      />
      <div
        className={clsx(
          "absolute -right-16 top-16 w-32 h-32 bg-orange-500 rounded-full blur-2xl opacity-50 animate-pulse",
          styles.bannerCardDotRight,
          "lg:right-0"
        )}
      /> */}
      <Carousel id={id} setActiveIndex={setActiveIndex} />
    </div>
  );
}

export default CarouselDemo;

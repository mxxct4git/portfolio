import ColorEffect from "../../components/ColorEffect";
import dynamic from "next/dynamic";

// 动态导入 CarouselDemo 并设置 ssr: false
const CarouselDemo = dynamic(
  () => import("../../components/(carousel)/CarouselDemo")
);

export default async function Project({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const activeIndex = parseInt(id, 10) - 1; // 将 id 从字符串转换为数字，同时减 1 得到索引值
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <ColorEffect />
      <CarouselDemo id={activeIndex} />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Carousel } from "@douyinfe/semi-ui";
import constantUtils from "../../utils/constantUtils";

interface CarouselProps {
  id: number | 0;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const CarouselFunc: React.FC<CarouselProps> = ({ id, setActiveIndex }) => {
// function CarouselFunc({ id }: { id: number }) {
  const [activeIndex, setLocalActiveIndex] = useState(id ?? 0);

  const [width, setWidth] = useState(window.innerWidth);

  const [imgList, setImgList] = useState<string[]>([]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    // 提取coverUrl列表
    const extractImgList = constantUtils.projectList.map(
      (item) => item.picUrl
    );
    setImgList(extractImgList);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // 组件刷新时的 id 值: 0, 这里会再次刷新id保证图片展示正确
    setLocalActiveIndex(id);
  }, [id]); 

  const onChange = (index: number) => {
    console.log("onChange", index);
    setLocalActiveIndex(index); // 更新 activeIndex 的状态
    setActiveIndex(index); // 更新 activeIndex 的状态
  };

  return (
    <Carousel
      style={{
        width: "100%",
        height: width < 600 ? "200px" : "400px",
      }}
      activeIndex={activeIndex}
      onChange={onChange}
      indicatorType="line"
      indicatorPosition="center"
      indicatorSize="small"
      theme="primary"
      autoPlay={false}
    >
      {imgList.map((src, index) => {
        return (
          <div
            key={index}
            style={{
              height: width < 600 ? "200px" : "400px", // 如果宽度小于600px，高度设为200px，否则设为400px
              width: "100%", // 设置明确的宽度
              backgroundSize: "contain",
              backgroundImage: `url('${src}')`,
              backgroundPosition: "center", // 确保图片居中
              backgroundRepeat: "no-repeat", // 防止图片重复
            }}
          >
            {/* <Space
              vertical
              align="start"
              spacing="medium"
              style={{
                position: "absolute",
                bottom: "100px",
                left: "100px",
                width: "300px",
              }}
            >
              <Typography.Title heading={2} style={colorStyle}>
                {textList[index][0]}
              </Typography.Title>
              <Space vertical align="start">
                <Typography.Paragraph style={colorStyle}>
                  {textList[index][1]}
                </Typography.Paragraph>
                <Typography.Paragraph style={colorStyle}>
                  {textList[index][2]}
                </Typography.Paragraph>
              </Space>
            </Space> */}
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselFunc;

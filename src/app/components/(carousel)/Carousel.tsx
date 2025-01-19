import React, { useEffect, useState } from 'react';
import { Carousel } from "@douyinfe/semi-ui";

function CarouselFunc({ id }: { id: number }) {
  const [activeIndex, setActiveIndex] = useState(id ?? 0);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onChange = (index: number) => {
    console.log("onChange", index);
    setActiveIndex(index); // 更新 activeIndex 的状态
  };

  const imgList = [
    "https://lf3-starry.byteimg.com/obj/starry/image/xeujaamdeoq_数据资产沉淀.png",
    "https://img.alicdn.com/imgextra/i1/O1CN01lpsDec1Z6v0R2Pi02_!!6000000003146-2-tps-2320-1264.png",
    "https://img.alicdn.com/imgextra/i4/O1CN01A4zJCm1uTSBaxhkZw_!!6000000006038-2-tps-1361-1274.png",
  ];

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
      indicatorSize="medium"
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
    // </div>
  );
}

export default CarouselFunc;

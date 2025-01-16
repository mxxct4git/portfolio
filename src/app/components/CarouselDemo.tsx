import { useState } from "react";
import { Carousel } from "@douyinfe/semi-ui";

function CarouselDemo({ id }: { id: number }) {
  const [activeIndex, setActiveIndex] = useState(id ?? 0);

  const onChange = (index: number) => {
    console.log("onChange", index);
    setActiveIndex(index); // 更新 activeIndex 的状态
  };

  const imgList = [
    "https://lf3-starry.byteimg.com/obj/starry/image/xeujaamdeoq_数据资产沉淀.png",
    "https://img.alicdn.com/imgextra/i1/O1CN01lpsDec1Z6v0R2Pi02_!!6000000003146-2-tps-2320-1264.png",
    "https://img.alicdn.com/imgextra/i4/O1CN01A4zJCm1uTSBaxhkZw_!!6000000006038-2-tps-1361-1274.png",
  ];

  // const textList = [
  //   [
  //     "Semi 设计管理系统",
  //     "从 Semi Design，到 Any Design",
  //     "快速定制你的设计系统，并应用在设计稿和代码中",
  //   ],
  //   [
  //     "Semi 物料市场",
  //     "面向业务场景的定制化组件，支持线上预览和调试",
  //     "内容由 Semi Design 用户共建",
  //   ],
  //   [
  //     "Semi 设计/代码模板",
  //     "高效的 Design2Code 设计稿转代码",
  //     "海量 Figma前端代码一键转",
  //   ],
  // ];

  return (
    // <div
    // className="bg-white py-24 sm:py-32"
    // style={{ paddingTop: "3.5rem", paddingBottom: "1.5rem" }}
    // >
    <Carousel
      style={{
        width: "100%",
        height: "400px",
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
              height: "400px", // 设置明确的高度
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
                <Title heading={2} style={colorStyle}>
                  {textList[index][0]}
                </Title>
                <Space vertical align="start">
                  <Paragraph style={colorStyle}>{textList[index][1]}</Paragraph>
                  <Paragraph style={colorStyle}>{textList[index][2]}</Paragraph>
                </Space>
              </Space> */}
          </div>
        );
      })}
    </Carousel>
    // </div>
  );
}

export default CarouselDemo;

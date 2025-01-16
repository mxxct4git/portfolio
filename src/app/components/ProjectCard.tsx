"use client";
import { Card } from "@douyinfe/semi-ui";
import Link from "next/link";
import Image from "next/image";

type infoParam = {
  id: number;
  title: string;
  description: string;
  coverAlt: string;
  coverUrl: string;
  cardContent: string;
};

export default function ProjectCard({ cardInfo }: { cardInfo: infoParam }) {
  const { Meta } = Card;

  return (
    <Card
      style={{ maxWidth: '24rem', margin: "0.5rem" }}
      title={
        <Meta
          title={cardInfo.title}
          // description={cardInfo.description}
          // avatar={
          //   <Avatar
          //     alt={cardInfo.avatarAlt}
          //     size="default"
          //     src={cardInfo.avatarUrl}
          //   />
          // }
        />
      }
      headerExtraContent={
        <Link
          href={`/projects/${cardInfo.id}`}
          className="text-base font-semibold text-indigo-500"
        >
          More
          {/* <Text link>More</Text> */}
        </Link>
      }
      cover={
        <div style={{ position: "relative", width: "100%", height: "12rem" }}>
          <Image
            alt={cardInfo.coverAlt}
            src={cardInfo.coverUrl}
            fill
            style={{ objectFit: "cover" }} // 确保图片覆盖整个容器
          />
        </div>
      }
      footerLine={true}
      // footerStyle={{ display: "flex", justifyContent: "flex-end" }}
      // footer={
      //   <Space>
      //     <Button theme="borderless" type="primary">
      //       精选案例
      //     </Button>
      //     <Button theme="solid" type="primary">
      //       开始使用
      //     </Button>
      //   </Space>
      // }
    >
      {cardInfo.cardContent}
    </Card>
  );
}

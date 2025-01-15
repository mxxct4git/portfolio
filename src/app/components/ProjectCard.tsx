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
      style={{ maxWidth: 340 }}
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
        <Image
          alt={cardInfo.coverAlt}
          src={cardInfo.coverUrl}
          width={300}
          height={200}
        />
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

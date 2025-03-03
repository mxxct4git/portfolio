"use client";
import { Card } from "@douyinfe/semi-ui";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type infoParam = {
  id: number;
  title: string;
  description: string;
  coverAlt: string;
  coverUrl: string;
  cardContent: string;
};
export default function ProjectCard2({ cardInfo }: { cardInfo: infoParam }) {
  const { Meta } = Card;

  return (
    <Link href={`/projects/${cardInfo.id}`}>
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
      >
        <Card
          style={{ maxWidth: 300 }}
          cover={
            <motion.div
              whileHover={{
                y: -5,
              }}
            >
              <div className="relative w-full h-40">
                <Image
                  alt={cardInfo.coverAlt}
                  src={cardInfo.coverUrl}
                  fill
                  style={{ objectFit: "cover" }} // 确保图片覆盖整个容器
                />
              </div>
            </motion.div>
          }
        >
          <Meta title={cardInfo.title} description={cardInfo.description} />
        </Card>
      </motion.div>
    </Link>
  );
}

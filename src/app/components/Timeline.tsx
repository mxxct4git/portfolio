"use client";
import React from "react";
import { Timeline as SemiTimeline } from "@douyinfe/semi-ui";
import constants from "../utils/constantUtils";

export default function Timeline({ isShowMore }: { isShowMore: boolean }) {
  return (
    <div
      className="relative isolate px-6 pt-14 lg:px-8"
      style={{ paddingTop: "2rem" }}
    >
      <SemiTimeline mode="alternate" border-color="red">
        {constants.timelineItems.map((elem, index) => (
          <SemiTimeline.Item
            key={index}
            time={elem.date}
            extra={elem.title}
            type={elem.type}
          >
            {elem.content}
          </SemiTimeline.Item>
        ))}
      </SemiTimeline>
      {isShowMore && (
        <div className="flex justify-center">
          <a
            href={constants.navigation[3].href}
            className="text-base font-semibold text-indigo-500"
          >
            Know more about me <span aria-hidden="true">&nbsp;&nbsp;→</span>
          </a>
        </div>
      )}
    </div>
  );
}

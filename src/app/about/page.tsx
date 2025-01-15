import React from "react";
import Image from "next/image";
import constants from "../utils/constantUtils";
import Timeline from "../components/Timeline";
import LogoClouds from "../components/LogoClouds";

export default function About() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div
        className="mx-auto max-w-5xl py-8 sm:py-24 lg:py-32"
        style={{ paddingBottom: "2rem" }}
      >
        {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-indigo-600">
              <span aria-hidden="true" className="absolute inset-0" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div> */}
        <div className="flex">
          <div className="flex-1 text-balance text-3xl font-medium tracking-tight text-gray-900 sm:text-5xl">
            <p>
              Hi,&nbsp;
              <span role="img" aria-label="waving hand" className="wave">
                👋
              </span>
              &nbsp;I&#39;m {constants.headerTitle}.
            </p>

            <p className="text-lg sm:text-xl mt-2">
              {constants.about.map((item) => (
                <span key={item.keywords}>
                  <span className="text-gray-500">-&nbsp; {item.prefix}</span>
                  <span className="text-xl sm:text-2xl">
                    &nbsp;{item.keywords}
                  </span>
                  <span className="text-gray-500">&nbsp;{item.suffix}</span>
                  <br />
                </span>
              ))}
            </p>
          </div>
          <p className="flex-none w-1/4 mt-0 flex items-center justify-center">
            <Image alt="" src={constants.companyLogo} width={150} height={150} className="h-auto w-auto" />
          </p>
        </div>
      </div>
      {/* 底部的一个视觉效果 */}
      {/* <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-13rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div> */}
      <Timeline isShowMore={false} />
      <LogoClouds />
    </div>
  );
}

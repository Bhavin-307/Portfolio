import { Meteors } from "@/components/magicui/meteors";
import SkeletonUI from "@/components/SkeletonUI";
import ScrollProgress from "@/components/ui/scroll-progress";
import React from "react";

const Work = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-slate-100 dark:bg-[#020617]  py-20">
        <ScrollProgress className="top-[0px]" />
        <Meteors number={30} />
        <div className="mx-auto max-w-7xl px-2">
          <div className="flex flex-col  pb-10 pt-12 md:pt-24">
            <p className="text-3xl font-bold  md:text-5xl md:leading-10 mb-8 leading-tight sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 from-10% via-cyan-500 via-30% to-sky-500 to-90% lg:z-50">
              Projects & Products
            </p>
            <hr />
            <p className="lg:max-w-4xl text-base  md:text-xl mt-8 mb-2">
            This page is currently under development. We apologize for the inconvenience and appreciate your patience. It will be available soon—stay tuned!
            </p>
          </div>
          <div
              className={`grid gap-6 gap-y-10 py-6 md:grid-cols-2  rounded lg:grid-cols-3 `}
            >
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                <SkeletonUI />
                
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;

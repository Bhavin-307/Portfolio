"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { MagicCard } from "./magicui/magic-card";
import { BorderBeam } from "./magicui/border-beam";

const imageLink = {
  react: (
    <Image
      width={80}
      height={80}
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
      alt="react"
    />
  ),
  next: (
    <Image
      width={80}
      height={80}
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
      alt="next"
    />
  ),

  node: (
    <Image
      width={80}
      height={80}
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
      alt="node"
    />
  ),

  mongodb: (
    <Image
      width={80}
      height={80}
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
      alt="mongodb"
    />
  ),
};

const FeatureFour = () => {
  const { theme, resolvedTheme } = useTheme();

  const effectiveTheme = theme === "system" ? resolvedTheme : theme;
  return (
    <div className="w-full py-20 dark:bg-slate-900/30 bg-gray-100/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  ">
        <div className="mx-auto max-w-xl text-center">
          <h2 className=" text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 from-10% via-violet-500 via-30% to-sky-500 to-90%">
            Skills & Services
          </h2>
          <p className="mt-4 text-base leading-relaxed ">
            These are my working Skills & Services I have done.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-8 lg:px-0 px-6 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <MagicCard
            gradientColor={effectiveTheme === "dark" ? "#334155" : "#e0e7ff"}
          >
            <div className="rounded-lg p-5 w-full">
              <div className="mx-auto flex h-20 w-20 items-center  justify-center rounded-full ">
                {imageLink.react}
              </div>
              <h3 className="mt-8 text-lg font-semibold ">React.js</h3>
              <p className="mt-4 text-sm ">
                React.js for Frontend and User-Interface Development.
              </p>
            </div>
            <BorderBeam
              className="rounded-xl"
              size={120}
              duration={12}
              delay={9}
            />
          </MagicCard>

          <MagicCard
            gradientColor={effectiveTheme === "dark" ? "#334155" : "#e0e7ff"}
          >
            <div className="rounded-lg p-5">
              <div className="mx-auto flex h-20 w-20 items-center  justify-center rounded-full ">
                {imageLink.next}
              </div>
              <h3 className="mt-8 text-lg font-semibold ">Next.js</h3>
              <p className="mt-4 text-sm ">
                Next.js for Frontend and Backend Both Development.
              </p>
            </div>
            <BorderBeam
              className="rounded-xl"
              size={120}
              duration={12}
              delay={9}
            />
          </MagicCard>

          <MagicCard
            gradientColor={effectiveTheme === "dark" ? "#334155" : "#e0e7ff"}
          >
            <div className="rounded-lg p-5">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
                {imageLink.node}
              </div>
              <h3 className="mt-8 text-lg font-semibold">
                Node.JS & Express.js
              </h3>
              <p className="mt-4 text-sm ">
                Node.JS & Express.js for Backend API&apos;s Development.
              </p>
            </div>
            <BorderBeam
              className="rounded-xl"
              size={100}
              duration={12}
              delay={9}
            />
          </MagicCard>

          <MagicCard
            gradientColor={effectiveTheme === "dark" ? "#334155" : "#e0e7ff"}
          >
            <div className="rounded-lg p-5">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
                {imageLink.mongodb}
              </div>
              <h3 className="mt-8 text-lg font-semibold ">MongoDB Database</h3>
              <p className="mt-4 text-sm ">
                MongoDB for Backend API&apos;s Database Management.
              </p>
            </div>
            <BorderBeam
              className="rounded-xl"
              size={120}
              duration={12}
              delay={9}
            />
          </MagicCard>
        </div>
      </div>
    </div>
  );
};

export default FeatureFour;

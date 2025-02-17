import React from "react";
import SplashCursor from "@/components/ui/SplashCursor";
import { Me } from "@/components/Me";

const AboutMe = () => {
  return (
    <>
      <SplashCursor />
      <div>
        <div className="mx-auto max-w-7xl px-4 lg:py-20">
          <Me />
        </div>
      </div>
    </>
  );
};

export default AboutMe;

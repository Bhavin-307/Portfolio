import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import React from "react";

const Contact = () => {
  return (
    <>
    <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-50%] h-[100%] skew-y-12"
        )}
      />
      <div>
        <div className="z-50 py-20 bg-slate-100 dark:bg-[#020617]  antialiased  overflow-hidden ">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
              <div className="mx-auto max-w-max rounded-full border p-1 px-3">
                <p className="text-center text-xs font-semibold leading-normal md:text-sm ">
                  Sorry for the trouble!
                </p>
              </div>
              <p className="text-center text-3xl font-bold  md:text-5xl md:leading-10  text-cyan-500">
                Just around the corner... Coming soon!
              </p>
              <p className="mx-auto max-w-4xl text-center text-base  md:text-xl columns-1">
                We apologize for any inconvenience! Our contact page is
                currently under construction as we&apos;re working hard to make
                it even better. We appreciate your patience and understanding.
                In the meantime, if you need to reach out, please stay tuned –
                we’ll be live soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

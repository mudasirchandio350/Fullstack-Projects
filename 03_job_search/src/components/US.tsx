"use client";
import React from "react";
import { WobbleCard } from "./ui/WobbleCard";

const US = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="font-bold text-4xl lg:text-5xl text-center my-10">
        Why <span className="text-blue-500">TalentLoop</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs relative">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Realtime Listing
            </h2>

            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              TalentLoop makes job hunting easy and stress-free. With real-time
              listings, quick applications, and a clean user experience, you
              spend less time searching — and more time getting hired.
            </p>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="bg-blue-900 col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Quick & Easy Apply
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Apply with just a few clicks using your TalentLoop profile—no long
            forms, no friction. Just your skills and experience front and
            center.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-950 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Realtime Application Status
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Track your job applications as they move through the pipeline—no
              guessing, just progress.
            </p>
          </div>
        </WobbleCard>
      </div>
    </div>
  );
};

export default US;

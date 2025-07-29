"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-2">
      <h1 className="lg:text-7xl md:text-6xl sm:text-5xl font-bold text-center mb-4 text-3xl">
        Find Your Next Big Opportunity with{" "}
        <span className="text-blue-600 text-center">TalentLoop</span>
      </h1>
      <p className="lg:text-lg text-center max-w-2xl mb-8 text-gray-500 dark:text-gray-500">
        Empowering job seekers with smart tools, personalized matches, and real
        career growth—TalentLoop is your gateway to the future of work.
      </p>
      <div>
        <Button
          className="bg-blue-500 text-white hover:bg-blue-700 transition duration-300"
          onClick={() => router.push("/jobs")}
        >
          Explore Jobs
        </Button>
      </div>
    </div>
  );
};

export default Hero;

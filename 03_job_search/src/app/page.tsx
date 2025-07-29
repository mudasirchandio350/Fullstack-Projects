"use client";
import React from "react";
import { Companies, US, Hero } from "@/components";
import Reviews from "@/components/Reviews";

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col lg:p-10 p-5">
      <Hero />
      <Companies />
      <US />
      <Reviews />
    </div>
  );
};

export default Home;

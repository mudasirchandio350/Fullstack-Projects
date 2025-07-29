"use client";
import React from "react";
import { Marquee } from "./magicui/marquee";
import { ComIcons } from "@/constants";
import Image from "next/image";

const Companies = () => {
  return (
    <div className="py-10">
      <div className="flex w-full justify-center">
        <h1 className="font-black text-5xl text-gray-600">Trusted By</h1>
      </div>
      <div>
        <Marquee pauseOnHover className="[--duration:50s]">
          {ComIcons.map((company) => (
            <div
              key={company.id}
              className="flex items-center justify-center w-32 h-32 mx-4 my-6"
            >
              <Image
                width={20}
                height={20}
                src={company.Icon.src}
                alt={`Company ${company.id}`}
                className="w-10 h-10 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Companies;

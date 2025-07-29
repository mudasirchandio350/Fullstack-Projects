"use client";
import React from "react";
import { Reviews as RS } from "@/constants";
import { Card, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Reviews = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen py-20">
      <h1 className="font-bold text-4xl lg:text-5xl text-center my-10">
        What Our Users Say
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RS.map((review) => (
          <Card className="bg-gradient-to-bl from-sky-900 to-blue-700 text-white">
            <CardHeader>
              <blockquote className="text-lg italic mb-2">
                `&quot;{review.quote}&quot;`
              </blockquote>
              <p className="font-semibold">{review.name}</p>
            </CardHeader>
            <CardFooter>{review.title}</CardFooter>
          </Card>
        ))}
      </div>
      <div className="py-10 flex justify-center items-center">
        <Button
          className="bg-blue-600 text-white hover:bg-blue-800 transition-all duration-300 "
          onClick={() => router.push("/signup")}
        >
          Join TalentLoop
        </Button>
      </div>
    </div>
  );
};

export default Reviews;

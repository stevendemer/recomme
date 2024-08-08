"use client";
import ParentContainer from "@/components/parent-container";
import SubmitButton from "@/components/submit-button";
import SwipingCard from "@/components/swiping-card";
import PageTransition from "@/components/page-transition";
import { useState } from "react";
import { cn } from "@/lib/utils";
import MultipleCard from "@/components/multiple-card";

export default function Home() {
  const [currIndex, setCurrIndex] = useState(0);

  const handleSwipe = (direction: "left" | "right") => {
    console.log(`Swiped ${direction}`);
    setCurrIndex((prevIndex) => (prevIndex + 1) % 100);
  };

  return (
    <main className="flex justify-center items-center h-screen bg-gradient-to-tr from-green-100 to-blue-300">
      <ParentContainer>
        <div className="items-center h-full flex justify-center w-full max-w-7xl flex-col">
          {/* form stuff */}
          <h1 className="text-center lg:text-6xl text-lg tracking-wide font-semibold text-black max-w-full overflow-hidden break-words text-ellipsis mt-2">
            Main Title
          </h1>
          {/* <SwipingCard onSwipe={handleSwipe} /> */}
          <MultipleCard />
          <SubmitButton />
        </div>
      </ParentContainer>
    </main>
  );
}

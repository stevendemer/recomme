import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

export default function MultipleCard() {
  const [isSelected, setSelected] = useState<number[]>([]);

  const handleClick = (index: number) => {
    setSelected((prevSelectedCards) => {
      if (prevSelectedCards.includes(index)) {
        // If the card is already selected, remove it from the list
        return prevSelectedCards.filter((cardIndex) => cardIndex !== index);
      } else {
        // If the card is not selected, add it to the list
        return [...prevSelectedCards, index];
      }
    });
  };

  return (
    <section className="container mx-auto py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "bg-background rounded-lg overflow-hidden shadow-xl p-2 cursor-pointer font-bold",
              isSelected.includes(index) && "bg-teal-200 text-slate-100"
            )}
            onClick={() => handleClick(index)}
          >
            <img
              src="/assets/hacker.png"
              alt="hacker icon"
              width={300}
              height={200}
              className="w-full h-48 object-cover object-center rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">First box</h3>
              <p className="">This is the paragraph</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

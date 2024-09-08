import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  value: number[];
  onChange: (value: number[]) => void;
};

export default function MultipleCard({ value, onChange }: Props) {
  return (
    <div className="grid grid-cols-4 gap-8 px-14 mb-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-6">
          <div
            onClick={() => {
              if (value.includes(index)) {
                // remove the select if already selected
                onChange(value.filter((v) => v !== index));
              } else {
                onChange([...value, index]);
              }
              console.log("total values are ", value);
            }}
            key={index}
            className={cn(
              "bg-background rounded-2xl overflow-hidden shadow-xl p-4 cursor-pointer font-bold transition-all duration-200",
              value.includes(index) && "bg-teal-300"
            )}
          >
            <Image
              src="/assets/hacker.png"
              alt="card image"
              className=" shadow-xl px-2 rounded-2xl"
              width={400}
              height={300}
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

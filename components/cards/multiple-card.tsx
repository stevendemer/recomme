import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

type Props = {
  value: number[];
  onChange: (value: number[]) => void;
};

export default function MultipleCard({ value, onChange }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-primary p-4">
        How relatable is this situation?
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 sm:gap-6 place-items-center w-full max-h-full">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            onClick={() => {
              if (value.includes(index)) {
                onChange(value.filter((v) => v !== index));
              } else {
                onChange([...value, index]);
              }
            }}
            className={cn(
              "gap-3 rounded-2xl shadow-lg p-2 cursor-pointer transition-colors duration-300 flex flex-col items-center justify-center border-border border",
              value.includes(index) && "bg-[#65D9BD] text-slate-100"
            )}
          >
            <div className="relative ">
              <Image
                className="object-contain rounded-2xl"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                alt=""
                src="/assets/hacker.png"
                width={120}
                height={120}
              />
            </div>
            <div className="w-full">
              <p
                className={cn(
                  "text-xs sm:text-lg text-primary line-clamp-2 text-center font-rubik font-semibold max-w-sm",
                  value.includes(index) && "text-slate-50"
                )}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

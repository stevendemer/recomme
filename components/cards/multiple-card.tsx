import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  value: number[];
  onChange: (value: number[]) => void;
};

export default function MultipleCard({ value, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 p-4 my-8 w-full h-full">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="w-full max-w-lg mx-2 h-full">
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
              "flex flex-col bg-background rounded-[40px]  shadow-xl p-4 cursor-pointer font-bold transition-colors duration-300 h-auto w-full max-h-[200px] lg:max-h-[200px]",
              value.includes(index) && "bg-[#65d9bd] text-slate-100"
            )}
          >
            {/* image div */}
            <Image
              className="object-contain object-center rounded-3xl"
              width={250}
              height={120}
              alt=""
              src={"/assets/hacker.png"}
            />

            <div className="p-4 flex-shrink hidden sm:block">
              <span className="font-bold text-md sm:text-lg text-primary tracking-wider overflow-hidden text-ellipsis line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                repudiandae vel, a officia inventore optio pariatur deserunt
                aliquam iure quaerat numquam maiores minima quos alias harum!
                Corrupti ipsa amet tenetur?
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

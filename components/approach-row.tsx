"use client";

import { FaHeart, FaTimes } from "react-icons/fa";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function ApproachRow({
  label,
  sub,
  onAnswer,
  answer,
}: {
  label: string;
  sub: string;
  onAnswer: (answer: boolean) => void;
  answer: boolean | null;
}) {
  return (
    <div className="flex items-center rounded-[40px] justify-between w-full h-full bg-white p-2 m-6 relative">
      <div className="flex flex-col items-center p-4 gap-y-2">
        <h2 className="font-rubik font-semibold text-xl sm:text-2xl text-black tracking-wide">
          {label}
        </h2>
        <p className="font-normal text-black font-rubik text-sm sm:text-md tracking-wide">
          {sub}
        </p>
      </div>
      <div className="flex items-center gap-x-4 p-4">
        <Button
          onClick={() => onAnswer(true)}
          className={cn(
            "border-green-500 border text-[#65D9BD] hover:text-green-300 m-2",
            answer ? "bg-[#65D9BD] text-white" : ""
          )}
          variant="ghost"
          size="icon"
        >
          <FaHeart size={26} />
        </Button>
        <Button
          className={cn(
            "border-red-500 border text-red-500 hover:text-red-300 m-2",
            answer === false ? "bg-red-500 text-white" : ""
          )}
          variant="ghost"
          size="icon"
          onClick={() => onAnswer(false)}
        >
          <FaTimes size={26} />
        </Button>
      </div>
    </div>
  );
}

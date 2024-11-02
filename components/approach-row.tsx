"use client";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { IconHeart, IconHeartFilled, IconX } from "@tabler/icons-react";

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
    <div className="flex items-center rounded-sm justify-between w-full bg-white font-inter p-2">
      <div className="flex flex-col items-center p-2 gap-y-2">
        <h2 className="font-semibold text-xl sm:text-2xl text-black tracking-wide">
          {label}
        </h2>
        <p className="font-normal text-black  text-sm sm:text-md tracking-wide">
          {sub}
        </p>
      </div>
      <div className="flex items-center gap-x-4 p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onAnswer(true)}
          className={cn(
            "text-[#65D9BD] hover:text-[#65D9BD] stroke-[#65D9BD] rounded-full border-[#65D9BD] border",
            answer ? "bg-[#65D9BD] text-white" : ""
          )}
        >
          {answer ? <IconHeart size={32} /> : <IconHeartFilled size={32} />}
        </Button>
        <Button
          className={cn(
            "border-red-500 border text-red-500 hover:text-red-300",
            answer === false ? "bg-red-500 text-white" : ""
          )}
          variant="ghost"
          size="icon"
          onClick={() => onAnswer(false)}
        >
          <IconX size={32} />
        </Button>
      </div>
    </div>
  );
}

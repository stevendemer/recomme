import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ToolTipMessage({
  text,
  icon,
}: {
  text: string;
  icon?: string;
}) {
  return (
    <div className="leading-tight max-w-md w-full flex items-center h-full flex-col">
      <div className="relative mt-4 max-w-full w-full flex items-center gap-6">
        <Image
          src={icon || "/assets/flower.svg"}
          alt=""
          className="object-contain mb-8"
          width={60}
          height={40}
        />
        <p className="leading-tight tracking-wide mb-2">{text}</p>
      </div>
      <Button className="max-w-lg px-8 py-6 rounded-3xl">Continue</Button>
    </div>
  );
}

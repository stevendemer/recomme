import React, { PropsWithChildren } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import flower from "@/public/assets/flower.svg";

export default function ToolTipMessage({ children }: PropsWithChildren) {
  return (
    <div className="leading-tight max-w-md w-full flex items-center h-full flex-col">
      <div className="relative mt-4 max-w-full w-full flex items-center gap-6">
        <Image
          src={flower}
          alt=""
          className="object-contain mb-8"
          width={60}
          height={40}
          priority
        />
        <p className="leading-tight tracking-wide mb-2 font-body">{children}</p>
      </div>
      <Button className="max-w-lg px-8 py-6 rounded-3xl font-bold font-mulish">
        Continue
      </Button>
    </div>
  );
}

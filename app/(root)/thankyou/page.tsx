"use client";
import SubmitButton from "@/components/submit-button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import flower from "@/public/assets/flower.svg";
import bigCloud from "@/public/assets/big-cloud.svg";
import { useSessionStorage } from "usehooks-ts";

export default function ThankYou() {
  const [name] = useSessionStorage("ec-name", "Alec");

  return (
    <div className="grid w-full h-full grid-rows-[1fr,auto] gap-4 place-items-center">
      {/* Main Content */}
      <div className="w-full grid grid-areas-[stack] place-items-center">
        {/* Cloud Background */}
        <div className="[grid-area:stack] w-full flex justify-center">
          <Image
            className="object-contain object-center w-full h-full"
            src={bigCloud}
            alt="cloud background"
          />
        </div>

        {/* Message Box */}
        <div className="[grid-area:stack] z-10 w-full max-w-screen-md px-4">
          <div className="bg-white/40 backdrop-blur-sm lg:p-12 p-6 rounded-sm w-full">
            <div className="flex gap-x-4 items-start">
              <div className="relative aspect-video flex-shrink-0">
                <Image
                  className="object-contain object-center w-full h-full"
                  priority
                  src={flower}
                  alt="flower"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-black text-md sm:text-xl font-body leading-tight whitespace-normal">
                Great! Now, I&apos;m all set to help you achieve your goals.
                Let&apos;s start by evaluating {name ?? "Alec"}. Answer every
                aspect to continue, we need to evaluate your EC maturity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="max-w-md px-4">
        <Link href="/profiling">
          <SubmitButton className="w-full">Continue</SubmitButton>
        </Link>
      </div>
    </div>
  );
}

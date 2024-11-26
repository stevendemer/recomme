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
    <div className="flex items-center justify-evenly flex-col w-full h-full">
      <div className="relative">
        <Image
          className={"object-contain object-center w-full h-full"}
          src={bigCloud}
          alt="cloud background"
        />
      </div>
      <div className="absolute z-30 bg-white/40 backdrop-blur-sm lg:p-8 p-2 rounded-sm flex flex-col items-center sm:flex-row max-w-screen-md">
        {/* container */}
        <div className="flex gap-x-4 items-start justify-center w-full">
          <div className="relative aspect-video flex-shrink-0">
            <Image
              className="object-contain object-center w-full h-full"
              priority
              src={flower}
              alt="flower"
            />
          </div>
          {/* <p className="text-black text-lg sm:text-xl font-rubik leading-tight text-center sm:text-left"> */}
          <p className="text-black text-md sm:text-xl font-body leading-tight text-center sm:text-left">
            Great! Now, I&apos;m all set to help you achieve your goals.
            Let&apos; start by evaluating {name ?? "Alec"} . Answer every aspect
            to continue, we need to evaluate your EC maturity.
          </p>
        </div>
      </div>
      <Link passHref href="/profiling">
        <SubmitButton>Continue</SubmitButton>
      </Link>
    </div>
  );
}

import SubmitButton from "@/components/submit-button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import flower from "@/public/assets/flower.svg";
import bigCloud from "@/public/assets/big-cloud.svg";

export default function ThankYou() {
  return (
    <div className="relative flex items-center justify-around flex-col w-full h-full">
      <div className="flex flex-col items-center justify-around relative">
        <div className="flex items-center justify-center relative flex-grow w-full">
          <Image src={bigCloud} alt="cloud background" />
          <div className="absolute z-50 bg-white/50 backdrop-blur-lg p-8 rounded-3xl flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row">
            <div className="flex gap-x-4 items-start justify-center w-full">
              <Image priority src={flower} alt="flower" className="px-2" />
              {/* <p className="text-black text-lg sm:text-xl font-rubik leading-tight text-center sm:text-left"> */}
              <p className="text-black text-lg sm:text-2xl font-normal font-body leading-tight text-center sm:text-left">
                Great! <br /> Now, I&apos;m all set to help you achieve your
                goals. Let&apos; start by <br /> evaluating ALEC. <br /> Answer
                every aspect to continue, we need to evaluate your EC
                <br /> maturity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link href="/profiling">
        <SubmitButton>Continue</SubmitButton>
      </Link>
    </div>
  );
}

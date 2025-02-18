import SubmitButton from "@/components/submit-button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import flower from "@/public/assets/flower.svg";
import bigCloud from "@/public/assets/big-cloud.svg";

export default function BenefitsPage() {
  return (
    <div className="grid w-full h-full grid-rows-[auto, 1fr] gap-4 place-items-center ">
      {/* Main Content */}
      <div className="w-full grid grid-areas-[stack] place-items-center">
        {/* Cloud Background */}
        <div className="[grid-area:stack] w-full flex justify-end h-full">
          <Image
            className="object-contain object-center w-full h-full"
            src={bigCloud}
            alt="cloud background"
          />
        </div>

        {/* Message Box */}
        <div className="[grid-area:stack] z-10 w-full max-w-screen-md px-4">
          <div className="bg-white/50 backdrop-blur-sm lg:p-12 p-6 rounded-sm w-full">
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
              <div className="text-black text-md sm:text-xl font-body leading-tight whitespace-normal">
                <p className="mb-6">
                  Great! It seems like your community is on the right track to
                  shaping a more sustainable energy future.
                </p>
                <p>
                  In the next step, we&apos;ll dive a bit deeper to refine the
                  profile of your energy community. This will help us better
                  understand your needs and create tailored solutions to
                  maximize efficiency, independence, and environmental benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="max-w-md px-4">
        <Link href="/profiling?type=card">
          <SubmitButton className="w-full">Continue</SubmitButton>
        </Link>
      </div>
    </div>
  );
}

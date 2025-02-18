import React from "react";
import Image from "next/image";
import alec from "@/public/assets/alec.svg";
import flower from "@/public/assets/flower.svg";
import bigCloud from "@/public/assets/big-cloud.svg";
import SubmitButton from "@/components/submit-button";
import Link from "next/link";
import rect from "@/public/assets/rect.png";

export default function ConfirmationPage() {
  return (
    <div className="grid w-full h-full grid-rows-[1fr,auto] gap-4">
      {/*parent container*/}
      <div className="w-full grid place-items-center">
        {/* Stack elements using grid areas  */}
        <div className="relative w-full h-full grid grid-areas-[stack] place-items-center">
          {/* Background Image */}
          <div className="[grid-area:stack] w-full h-full flex items-center justify-center">
            <Image
              className="object-contain object-center w-full h-full"
              src={bigCloud}
              alt="big cloud"
            />
          </div>
          {/* Content Container */}
          <div className="sm:flex-row flex-col flex items-center justify-center bg-white/50 rounded-sm lg:p-10 p-2 backdrop-blur-sm [grid-area:stack] z-30 max-w-screen-md w-full mx-auto">
            <div className="flex flex-col items-start justify-center w-full">
              {/* Text and Flower Section */}
              <div className="flex flex-row items-start space-x-2">
                <div className="relative aspect-video flex-shrink-0">
                  <Image
                    src={flower}
                    alt="flower"
                    className="object-contain object-center w-full h-full"
                  />
                </div>
                <p className="text-black text-lg sm:text-xl font-normal font-body leading-tight text-center sm:text-left line-clamp-5 text-ellipsis overflow-hidden whitespace-normal">
                  First, let&apos;s get introduced ! I have a feeling you might
                  be an
                  <b> ALEC community manager </b>
                  looking for some digital magic. Am I on the right track?
                </p>
              </div>
              {/* Alec Image */}
              <div className="aspect-video m-auto relative">
                <Image
                  className="object-contain object-center w-full h-full"
                  src={alec}
                  alt="ALEC community manager illustration"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="w-full flex justify-center px-4">
        <div className="flex items-center justify-center gap-4 max-w-md">
          <Link href="/registration" className="w-full">
            <SubmitButton className="bg-red-400 hover:bg-red-400 w-full">
              No, modify
            </SubmitButton>
          </Link>
          <Link href="/thankyou" className="w-full">
            <SubmitButton className="w-full">Yep, it&apos;s me</SubmitButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

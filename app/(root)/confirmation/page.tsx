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
    <div className="flex flex-col items-center justify-evenly w-full h-full scrollbar-hide relative">
      {/*parent container*/}
      <div className="w-full flex items-center justify-center">
        {/* Background Image */}
        <div className="relative m-auto">
          <Image
            className={"object-cover object-center"}
            src={bigCloud}
            alt={"big cloud"}
          />
        </div>

        {/* Content Container */}
        <div className="sm:flex-row flex-col flex items-center justify-center bg-white/40 rounded-sm lg:p-10 p-2 backdrop-blur-sm absolute z-30 max-w-screen-md w-full">
          <div className="flex flex-col items-start justify-center w-full h-full relative">
            {/* Text and Flower Section */}
            <div className="flex flex-col sm:flex-row items-start space-x-2">
              <div className="relative aspect-video flex-shrink-0">
                <Image
                  src={flower}
                  alt="flower"
                  className={"object-contain object-center w-full h-full"}
                />
              </div>
              <p className="text-black text-lg  sm:text-xl font-normal font-body leading-tight text-center sm:text-left line-clamp-5 text-ellipsis overflow-hidden">
                First, let&apos;s get introduced I have a feeling you might be
                an
                <b> ALEC community manager </b>
                looking for some digital magic. Am I on the right track?
              </p>
            </div>

            {/* Alec Image */}
            <div className="relative mx-auto px-4">
              <Image
                className="object-cover object-center h-auto w-full"
                src={alec}
                alt="ALEC community manager illustration"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full max-w-md justify-center flex items-center gap-4">
        <Link href="/registration">
          <SubmitButton className=" bg-red-400 hover:bg-red-400">
            No, modify
          </SubmitButton>
        </Link>
        <Link href="/thankyou">
          <SubmitButton>Yep, it&apos;s me</SubmitButton>
        </Link>
      </div>
    </div>
  );
}

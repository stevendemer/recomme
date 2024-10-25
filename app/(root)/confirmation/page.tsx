import React from "react";
import Image from "next/image";
import MessageContainer from "@/components/message-container";
import alec from "@/public/assets/alec.svg";
import flower from "@/public/assets/flower.svg";
import bigCloud from "@/public/assets/big-cloud.svg";

export default function ConfirmationPage() {
  return (
    <MessageContainer href="/thankyou" hasLogo={false} buttonLength={2}>
      <div className="relative w-full min-h-[500px] flex flex-col items-center">
        {/* Background cloud - positioned absolutely */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bigCloud}
            alt="cloud background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content container - using relative positioning to stack on top */}
        <div className="relative z-10 w-full flex flex-col items-center mt-8">
          {/* White backdrop with blur */}
          <div className="bg-white/60 backdrop-blur-lg mx-10 sm:mx-20 w-fit rounded-3xl p-4">
            <div className="flex flex-col items-center">
              {/* Top section with flower and text */}
              <div className="flex gap-x-4 items-start">
                <Image
                  width={60}
                  height={60}
                  src={flower}
                  alt="flower"
                  className="px-2"
                />
                <p className="text-black text-lg sm:text-2xl font-normal font-rubik leading-tight text-center sm:text-left">
                  First, let&apos;s get introduced <br /> I have a feeling you
                  might be an
                  <b> ALEC community manager</b> <br /> looking for some digital
                  magic. Am I on the right track?
                </p>
              </div>

              {/* Alec image container */}
              <div className="w-full max-w-md aspect-video relative mt-4">
                <Image
                  src={alec}
                  alt="Alec"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* The submit button will automatically be positioned at the bottom by MessageContainer */}
      </div>
    </MessageContainer>
  );
}

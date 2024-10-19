import SubmitButton from "@/components/submit-button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import cloud from "@/public/assets/cloud.svg";
import MessageContainer from "@/components/message-container";
import alec from "@/public/assets/alec.svg";
import glass from "@/public/assets/glass.svg";
import flower from "@/public/assets/flower.svg";
import logo from "@/public/assets/logo.svg";
import bigCloud from "@/public/assets/big-cloud.svg";

export default function ThankYou() {
  return (
    <MessageContainer buttonLabel="Continue" buttonLength={1} hasLogo={false}>
      <div className="relative flex items-start flex-col w-full h-full">
        <div className="flex items-center relative w-full">
          <Image
            src={bigCloud}
            alt="cloud background"
            className="object-cover object-top"
            width={1200}
            height={400}
          />
          <div className="absolute z-50 bg-white/60 backdrop-blur-lg h-auto w-full p-0 sm:p-10 rounded-3xl flex flex-col items-center space-y-6 sm:space-y-0 sm:flex-row sm:space-x-4">
            <div className="flex flex-col items-center gap-y-6 p-8">
              <div className="flex gap-x-4 items-start">
                <Image
                  width={60}
                  height={60}
                  priority
                  src={flower}
                  alt="flower"
                  className="px-2"
                />
                <p className="text-black text-2xl font-rubik leading-tight text-center sm:text-left">
                  Great! <br /> Now, I'm all set to help you achieve your goals.
                  Let’s start by <br /> evaluating ALEC. <br /> Answer every
                  aspect to continue, we need to evaluate your EC maturity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MessageContainer>
  );
}

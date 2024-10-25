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
    <MessageContainer
      href="/profiling"
      buttonLabel="Continue"
      buttonLength={1}
      hasLogo={false}
    >
      <div className="relative flex items-center flex-col w-full h-auto">
        <div className="flex items-center justify-center relative m-auto">
          <Image
            src={bigCloud}
            alt="cloud background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute z-50 bg-white/60 backdrop-blur-lg h-auto w-fit p-12 rounded-3xl flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row">
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
                Great! <br /> Now, I&apos;m all set to help you achieve your
                goals. Let&apos; start by <br /> evaluating ALEC. <br /> Answer
                every aspect to continue, we need to evaluate your EC
                <br /> maturity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MessageContainer>
  );
}

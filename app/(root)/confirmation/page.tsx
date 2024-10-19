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

export default function ConfirmationPage() {
  return (
    <MessageContainer href="/thankyou" hasLogo={false} buttonLength={2}>
      <div className="relative flex items-center flex-col w-full h-auto pt-20">
        <Image
          src={bigCloud}
          alt="cloud background"
          className="bg-cover  bg-no-repeat w-full absolute z-30"
        />
        {/* foreground content */}
        <div className="bg-white/80 mx-10 sm:mx-20 h-auto w-fit sm:p-20 rounded-3xl flex flex-col items-center space-y-6 sm:space-y-0 sm:flex-row sm:space-x-4">
          <div className="flex flex-col items-center gap-y-6">
            <div className="flex gap-x-4 items-start">
              <Image
                width={60}
                height={60}
                priority
                src={flower}
                alt="flower"
                className="px-2"
              />
              <p className="text-black text-lg sm:text-2xl font-normal font-rubik leading-tight text-center sm:text-left">
                First, let's get introduced <br /> I have a feeling you might be
                an
                <b> ALEC community manager</b> <br /> looking for some digital
                magic. Am I on the right track?
              </p>
            </div>
            <Image width={500} height={200} src={alec} alt="" />
          </div>
        </div>
      </div>
    </MessageContainer>
  );
}

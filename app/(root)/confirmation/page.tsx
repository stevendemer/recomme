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
    <MessageContainer hasLogo={false} buttonLength={2}>
      <div className="relative flex items-center justify-center flex-col w-full h-full">
        <div className="flex items-center justify-center relative">
          <Image
            src={cloud}
            alt="cloud background"
            className="object-cover object-center"
            width={600}
            height={400}
          />
          <div className="absolute z-50 bg-white/50 backdrop-blur-lg h-auto w-fit p-0 sm:p-10 rounded-3xl flex flex-col items-center space-y-6 sm:space-y-0 sm:flex-row sm:space-x-4">
            <div className="flex flex-col items-center gap-y-6">
              <div className="flex gap-x-4 items-start">
                <Image
                  width={120}
                  height={90}
                  priority
                  src={flower}
                  alt="flower"
                  className="px-2"
                />
                <p className="text-black text-2xl font-normal font-rubik leading-tight text-center sm:text-left">
                  Hello there! I&apos;m here to assist you. It looks like you
                  were about to say &apos;Recommend me&apos;
                </p>
              </div>
              <Image width={500} height={200} src={alec} alt="" />
            </div>
          </div>
        </div>
      </div>
    </MessageContainer>
  );
}

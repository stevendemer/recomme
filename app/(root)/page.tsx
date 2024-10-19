import ParentContainer from "@/components/parent-container";
import SubmitButton from "@/components/submit-button";
import Link from "next/link";
import MessageContainer from "@/components/message-container";

import Image from "next/image";
import cloud from "@/public/assets/cloud.svg";
import glass from "@/public/assets/glass.svg";
import flower from "@/public/assets/flower.svg";
import logo from "@/public/assets/logo.svg";
import bg from "@/public/assets/bg.svg";

export default function Home() {
  return (
    <MessageContainer buttonLength={1}>
      <div className="relative flex items-center justify-center flex-col w-full h-full">
        <div className="flex items-center justify-center relative m-auto">
          <Image
            src={cloud}
            alt="cloud background"
            className="w-full h-full object-cover"
          />
          <div className="absolute z-50 bg-white/60 backdrop-blur-lg h-auto w-fit p-6 rounded-3xl flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row">
            <div className="flex gap-x-4 items-start">
              <Image
                width={120}
                height={90}
                priority
                src={flower}
                alt="flower"
                className="px-2"
              />
              <p className="text-black text-lg sm:text-xl font-rubik leading-tight text-center sm:text-left">
                Hello there! I&apos;m here to assist you. It looks like you were
                about to say &apos;Recommend me&apos;
              </p>
            </div>
          </div>
        </div>
      </div>
    </MessageContainer>
  );
}

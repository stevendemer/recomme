import ParentContainer from "@/components/parent-container";
import SubmitButton from "@/components/submit-button";
import Link from "next/link";
import MessageContainer from "@/components/message-container";

import Image from "next/image";
import cloud from "@/public/assets/cloud.svg";
import flower from "@/public/assets/flower.svg";
import logo from "@/public/assets/logo.svg";

export default function Home() {
  return (
    <div className="relative flex items-center justify-around flex-col w-full h-full">
      <div className="flex flex-col items-center justify-center relative">
        <div className="w-32 h-32 sm:w-52 sm:h-12">
          <Image
            src={logo}
            priority
            alt=""
            className="object-cover object-center"
          />
        </div>
        <div className="flex items-center justify-center relative flex-shrink-0">
          <Image priority src={cloud} alt="cloud background" />
          <div className="absolute z-50 bg-white/60 backdrop-blur-lg w-fit p-6 rounded-3xl flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row">
            <div className="flex gap-x-4 items-start">
              <Image src={flower} alt="flower" className="px-2" />
              {/* <p className="text-black text-lg sm:text-xl font-rubik leading-tight text-center sm:text-left"> */}
              <p className="text-black text-lg sm:text-2xl font-normal font-body leading-tight text-center sm:text-left">
                Hello there! I&apos;m here to assist you. It looks like you were
                about to say &apos;Recommend me&apos;
              </p>
            </div>
          </div>
        </div>
        <Link href="/confirmation">
          <SubmitButton>Continue</SubmitButton>
        </Link>
      </div>
    </div>
  );
}

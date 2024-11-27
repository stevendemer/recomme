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
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="relative">
        <Image
          src={logo}
          priority
          alt=""
          className="object-contain object-center"
        />
      </div>
      <div className="flex items-center justify-center relative">
        <Image
          className={"object-cover"}
          priority
          src={cloud}
          alt="cloud background"
        />
        <div className="absolute z-50 bg-white/40 backdrop-blur-sm w-fit p-6 rounded-3xl flex flex-col items-center sm:space-y-0 sm:flex-row">
          <div className="flex gap-x-4 items-start">
            <Image
              width={40}
              height={40}
              src={flower}
              alt="flower"
              className="px-2 object-contain"
            />
            {/* <p className="text-black text-lg sm:text-xl font-rubik leading-tight text-center sm:text-left"> */}
            <p className="text-black text-md lg:text-xl font-normal font-body leading-tight text-center sm:text-left">
              Hello there! I&apos;m here to assist you. It looks like you were
              about to say &apos;Recommend me&apos;
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full max-w-md">
        <Link href="/confirmation">
          <SubmitButton>Continue</SubmitButton>
        </Link>
      </div>
    </div>
  );
}

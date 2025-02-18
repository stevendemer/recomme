import ParentContainer from "@/components/parent-container";
import SubmitButton from "@/components/submit-button";
import Link from "next/link";
import MessageContainer from "@/components/message-container";

import Image from "next/image";
import cloud from "@/public/assets/cloud.svg";
import flower from "@/public/assets/flower.svg";
import logo from "@/public/assets/logo.svg";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="grid w-full h-full grid-rows-[1fr,auto] gap-4 place-items-center relative z-10">
      {/* Logo */}
      <div className="w-full flex justify-center">
        <Image
          src={logo}
          priority
          alt="logo"
          className="object-cover object-center"
        />
      </div>

      {/* Main Content */}
      <div className="w-full grid grid-areas-[stack] place-items-center rounded-lg">
        {/* Cloud Background */}
        <div className="[grid-area:stack] w-full">
          <Image
            className="object-fill object-center"
            priority
            src={cloud}
            alt="cloud background"
          />
        </div>

        {/* Message Box */}
        <div className="[grid-area:stack] w-full px-4">
          <div className="bg-white/50 backdrop-blur-sm p-10 rounded-2xl w-full max-w-screen-sm">
            <div className="flex gap-x-4 items-start">
              <Image
                src={flower}
                alt="flower"
                className="px-2 object-contain object-center flex-shrink-0"
              />
              <p className="text-black text-md lg:text-xl font-normal font-body leading-tight sm:text-left whitespace-normal">
                Hello there {session?.user.name} ! I&apos;m here to assist you.
                It looks like you were about to say &apos;Recommend me&apos;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className=" max-w-md px-4">
        <Link href="/confirmation">
          <SubmitButton className="w-full">Continue</SubmitButton>
        </Link>
      </div>
    </div>
  );
}

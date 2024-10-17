import ParentContainer from "@/components/parent-container";
import SubmitButton from "@/components/submit-button";
import Link from "next/link";
import MessageContainer from "@/components/message-container";

import Image from "next/image";
import cloud from "@/public/assets/cloud.svg";
import glass from "@/public/assets/glass.svg";
import flower from "@/public/assets/flower.svg";
import logo from "@/public/assets/logo.svg";

export default function Home() {
  return (
    <ParentContainer>
      <MessageContainer buttonLength={1}>
        <div className="relative m-auto flex items-center justify-between flex-col sm:gap-y-28 max-w-full">
          <div className="relative w-full h-auto max-w-full">
            <Image src={cloud} alt="" />
            <div className="absolute inset-0 flex justify-center items-center w-full h-full max-w-full">
              {/* background glass  */}
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={glass}
                alt=""
              />
              <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center w-full h-full space-y-4">
                <div className="relative h-20 w-20 sm:h-40 sm:w-40 max-w-full z-10">
                  <Image
                    fill
                    priority
                    className="px-2 sm:mb-8 pb-10"
                    src={flower}
                    alt=""
                  />
                </div>
                <p className="text-black p-4 text-2xl font-normal font-rubik leading-tight">
                  Hello there! I&apos;m here to assist you. It looks like you
                  were about to say &apos;Recommend me&apos;
                </p>
              </div>
            </div>
          </div>
        </div>
      </MessageContainer>
    </ParentContainer>
  );
}

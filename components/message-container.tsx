"use client";
import { ReactNode, useRef } from "react";
import Image from "next/image";
import cloud from "@/public/assets/cloud.svg";
import glass from "@/public/assets/glass.svg";
import flower from "@/public/assets/flower.svg";
import logo from "@/public/assets/logo.svg";
import { Button } from "./ui/button";
import Link from "next/link";
import SubmitButton from "./submit-button";

function MessageContainer({
  children,
  buttonLength,
  hasLogo = true,
}: {
  children: ReactNode;
  image?: any;
  buttonLength?: number;
  hasLogo?: boolean;
}) {
  return (
    <div className="mx-auto bg-white/30 text-neutral-500 w-[60vw] h-[90vh] backdrop-blur-lg rounded-3xl flex flex-col justify-center items-center pt-2 mt-4">
      <div className="bg-white/80 h-[86vh] w-[56vw] my-2 rounded-3xl shadow-xl z-10 mb-2 relative">
        <div className="flex flex-col items-center w-full h-full relative">
          {/* main body */}
          <div className="relative m-auto flex items-center justify-between flex-col sm:gap-y-28 max-w-full">
            {hasLogo ? (
              <div className="relative w-32 h-12 sm:w-60 sm:h-20">
                <Image
                  priority
                  src={logo}
                  alt=""
                  className="object-cover object-center"
                />
              </div>
            ) : null}
            <div className="relative w-full h-auto max-w-full flex flex-col items-center">
              {children}
            </div>

            {!buttonLength ? null : buttonLength > 1 ? (
              <div className="fixed bottom-52 justify-center flex items-center gap-x-6  w-full">
                <Link href="/registration">
                  <SubmitButton className="bg-red-400">No, modify</SubmitButton>
                </Link>

                <Link href="/confirmation">
                  <SubmitButton>Let's begin</SubmitButton>
                </Link>
              </div>
            ) : (
              <div className="fixed bottom-52 justify-center flex items-center gap-x-6  w-full">
                <Link href="/confirmation">
                  <SubmitButton>Let's begin</SubmitButton>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageContainer;

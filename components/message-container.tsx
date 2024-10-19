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
    <div className="gradient-bg backdrop-blur-lg h-screen flex justify-center flex-shrink-0 items-center overflow-hidden">
      <div className="mx-auto bg-white/30 text-neutral-500 w-[92vw] sm:w-[60vw] h-[90vh] backdrop-blur-lg rounded-3xl flex flex-col items-center p-4">
        <div className="bg-white/70 h-[86vh] sm:w-[56vw] w-[88vw] my-2 rounded-3xl shadow-lg  mb-2">
          <div className="flex flex-col items-center h-full w-full">
            {/* main body */}
            <div className="flex items-center flex-col sm:gap-y-0 relative h-full w-full">
              {hasLogo ? (
                <div className="w-32 h-12 sm:w-52 sm:h-12 pt-10 sm:pt-24">
                  <Image
                    priority
                    src={logo}
                    alt=""
                    className="object-contain object-top"
                  />
                </div>
              ) : null}
              <div className="flex justify-center h-auto m-auto relative">
                {children}
              </div>

              <div className="flex items-center justify-center absolute bottom-20 space-x-2 sm:space-x-6">
                {!buttonLength ? null : buttonLength > 1 ? (
                  <>
                    <Link href="/registration">
                      <SubmitButton className="bg-red-400 hover:bg-red-400/80">
                        No, modify
                      </SubmitButton>
                    </Link>

                    <Link href="/confirmation">
                      <SubmitButton>Let's begin</SubmitButton>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/confirmation">
                      <SubmitButton>Let's begin</SubmitButton>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageContainer;

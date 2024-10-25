import Image from "next/image";
import React, { PropsWithChildren, ReactNode } from "react";
import cloud from "@/public/assets/cloud.svg";
import logo from "@/public/assets/logo.svg";
import { cn } from "@/lib/utils";

export default function MainLayout({
  children,
  hasLogo = true,
  buttons,
  containerWidth = "max-w-lg",
  expand,
}: PropsWithChildren & {
  hasLogo?: boolean;
  buttons: ReactNode;
  containerWidth?: string;
  expand?: boolean;
}) {
  return (
    <div className="bg-white/40 backdrop-blur-lg absolute inset-0 rounded-[40px]">
      <div className="bg-white/70 absolute inset-6 sm:inset-12 rounded-lg z-30">
        <div className="flex items-center flex-col justify-evenly h-full w-full mb-6 sm:gap-y-12">
          {hasLogo ? (
            <div className="w-32 h-12 sm:w-52 sm:h-12 pt-10 sm:pt-24 sm:py-6">
              <Image
                priority
                src={logo}
                alt=""
                className="object-contain object-top"
              />
            </div>
          ) : null}
          <div className="h-full my-4 justify-center lg:pb-12 flex flex-col items-center w-full max-w-5xl">
            <div
              className={cn(
                "relative z-30 w-full h-auto bg-white/90 p-6 rounded-3xl flex flex-col items-center justify-center space-y-4 sm:flex-row",
                expand ? "max-w-5xl" : containerWidth
              )}
            >
              <div className="absolute inset-0 -z-50 flex justify-center items-center w-full h-full">
                <Image
                  className="object-cover w-full h-auto max-w-[90%] sm:max-w-[90%] opacity-90"
                  src={cloud}
                  alt="cloud background"
                />
              </div>

              <div className="flex gap-4 sm:items-start sm:flex-row flex-col items-center">
                {/* text with flower logo */}
                {children}
              </div>
            </div>
          </div>
          <footer className="sticky bottom-0 inset-x-0 sm:pb-16 pb-8">
            {buttons}
          </footer>
        </div>

        {/* submit / redirect buttons */}
      </div>
    </div>
  );
}

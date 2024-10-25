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
import { cn } from "@/lib/utils";

function MessageContainer({
  children,
  buttonLength,
  hasLogo = true,
  buttonLabel,
  href,
  onClick,
  isValid = true,
  className,
}: {
  children: ReactNode;
  image?: any;
  buttonLength?: number;
  buttonLabel?: string;
  hasLogo?: boolean;
  href?: string;
  onClick?: () => void;
  isValid?: boolean;
  className?: string;
}) {
  const renderButtons = () => {
    if (!buttonLength) return null;

    const buttons = [
      {
        href,
        label: buttonLabel ?? "Let's begin",
      },
      {
        href: "/registration",
        label: "No, modify",
        className: "bg-red-400 hover:bg-red-400/80",
      },
    ];

    return buttons
      .slice(0, buttonLength)
      .reverse()
      .map((button, index) =>
        isValid ? (
          <Link key={index} href={button.href ?? "/confirmation"}>
            <SubmitButton
              onClick={onClick}
              className={cn(
                button.className,
                !isValid
                  ? "bg-gray-300 text-gray-100 cursor-not-allowed hover:bg-gray-300"
                  : ""
              )}
            >
              {button.label}
            </SubmitButton>
          </Link>
        ) : (
          <div key={index}>
            <SubmitButton
              className={cn(
                button.className,
                "bg-gray-300 text-gray-100 cursor-not-allowed hover:bg-gray-300"
              )}
            >
              {button.label}
            </SubmitButton>
          </div>
        )
      );
  };

  return (
    <div
      className={cn(
        "backdrop-blur-lg min-h-screen h-full grid place-items-center gradient-bg",
        className
      )}
    >
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-[60vw] max-h-[80vh] h-full bg-white/30 text-neutral-500 backdrop-blur-lg rounded-3xl flex flex-col items-center p-4 overflow-hidden">
          <div className="bg-white/70 w-full flex flex-col p-4 my-2 rounded-3xl shadow-lg h-full overflow-hidden">
            {/* Main Body */}
            <div className="flex flex-col items-center h-full w-full overflow-auto">
              {hasLogo && (
                <div className="w-32 h-12 sm:w-52 sm:h-12">
                  <Image priority src={logo} alt="" className="object-cover" />
                </div>
              )}
              <div className="flex-grow flex items-center justify-center w-full h-full">
                {children}
              </div>

              {/* Buttons aligned at the bottom */}
              <div className="flex items-center justify-center mt-auto space-x-2 sm:space-x-6 py-6 flex-shrink-0">
                {renderButtons()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageContainer;

"use client";
import Image from "next/image";
import flowerIcon from "@/public/assets/flower.svg";
import bigCloud from "@/public/assets/big-cloud.svg";
import profile from "@/public/assets/profile.svg";
import user from "@/public/assets/user.svg";
import userArrow from "@/public/assets/user-arrow.svg";
import userCircle from "@/public/assets/user-circle.svg";
import third from "@/public/assets/third.svg";
import { use, useState } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import userWhite from "@/public/assets/user-white.svg";
import arrowWhite from "@/public/assets/arrow-white.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SubmitButton from "@/components/submit-button";

const cards = [
  {
    id: 1,
    title: "Convince someone to join",
    icon: userArrow,
    selectedIcon: userWhite,
    href: "/pre",
  },
  {
    id: 2,
    title: "Improve participation",
    icon: user,
    selectedIcon: userCircle,
    href: "#",
  },
  {
    id: 3,
    title: "Organise a meeting",
    icon: third,
    selectedIcon: arrowWhite,
    href: "#",
  },
];

const content = [
  {
    id: 1,
    text: "Thanks so much! Now, I’m fully equipped and ready to help you turn your vision into reality. Let’s work together to achieve your goals, step by step, and create impactful, sustainable results.",
    hasButton: true,
  },
  {
    id: 2,
    text: "So, let me see, you are mainly here because you'd like to:",
    hasCards: true,
  },
  {
    id: 3,
    text: `Perfect! You've come to the right place. I have some great strategies and tips to help you boost your community engagement and  attract new members.
    Shall we explore some effective methods to make your community irresistible to potential members?`,
    hasCards: true,
  },
];

export default function ConvinceToJoinPage() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page") || "1", 10);

  return (
    <div className="w-full h-full grid grid-rows-[1fr,auto] gap-4 font-inter">
      {/* Main Content */}
      <div className="w-full grid place-items-start h-full">
        <div className="w-full h-full grid grid-areas-[stack]">
          <div className="[grid-area:stack]">
            <Image src={bigCloud} alt="" fill priority />
          </div>
          {/* Content Layer */}
          <div className="[grid-area:stack] z-10 w-full max-w-screen-lg px-4 grid gap-14 place-items-center">
            {/* Message Box */}
            <div className="bg-white/50 backdrop-blur-lg shadow-lg rounded-sm p-6 sm:p-12 w-full gap-8">
              <div className="flex flex-col items-start justify-center w-full">
                <div className="flex flex-row gap-4 items-start">
                  <div className="relative aspect-video flex-shrink-0">
                    <Image
                      alt=""
                      src={flowerIcon}
                      className="object-contain object-center w-full h-full"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="flex flex-col items-start space-y-2">
                    <div className="sm:text-lg text-sm text-black whitespace-normal text-pretty leading-tight font-body">
                      {content[page - 1].text}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {content[page - 1].hasCards && (
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 font-body justify-center  mx-auto">
                {cards.map((card, index) => (
                  <Link
                    key={card.id}
                    href={card.href}
                    passHref
                    onClick={() => setSelectedIndex(index)}
                    className={cn(
                      "bg-white/80 shadow-md rounded-sm p-8 lg:p-16 flex flex-col items-center cursor-pointer transition-colors duration-300",
                      selectedIndex === index ? "bg-[#65D9BD] text-white" : ""
                    )}
                  >
                    <div className="flex flex-col shrink-0 items-center h-full">
                      <Image
                        src={
                          selectedIndex === index
                            ? card.selectedIcon
                            : card.icon
                        }
                        alt=""
                        className="object-contain object-center h-full w-20"
                      />
                      <h3
                        className={cn(
                          "mt-4 font-bold text-gray-700 sm:text-lg text-center font-body text-sm",
                          selectedIndex === index ? "text-white" : ""
                        )}
                      >
                        {card.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {content[page - 1].hasButton && (
              <div className="max-w-md px-4">
                <Link href="/convince-to-join?page=2">
                  <SubmitButton className="w-full">Continue</SubmitButton>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

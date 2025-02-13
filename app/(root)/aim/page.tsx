"use client";
import Image from "next/image";
import user from "@/public/assets/user-arrow.png";
import { Button } from "@/components/ui/button";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/submit-button";
import { useState } from "react";
import Link from "next/link";
import house from "@/public/assets/house.svg";
import userHome from "@/public/assets/user-home.svg";
import userHomeQuestion from "@/public/assets/user-home-question.svg";
import userHomeX from "@/public/assets/user-home-x.svg";
import userWhite from "@/public/assets/user-white.svg";
import arrowWhite from "@/public/assets/arrow-white.svg";
import { cn } from "@/lib/utils";
import userHomex from "@/public/assets/user-home-x.svg";

import userHouseToggle from "@/public/assets/user-house-toggle.svg";
import userQuestionToggle from "@/public/assets/user-question-toggle.svg";
import userTogglex from "@/public/assets/user-toggle-x.svg";
import BackButton from "@/components/back-button";

export default function AimPage() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const cards = [
    {
      id: 1,
      title: "Cutting down on energy bills",
      body: "While staying eco-friendly. Who doesn’t love saving money and the planet at the same time?",
      href: "#",
      icon: userHome,
      iconSelected: userHouseToggle,
    },
    {
      id: 2,
      title: `He knows change is contagious!`,
      body: `Inspiring others to join you on this journey toward sustainability.`,
      href: "#",
      icon: userHomeQuestion,
      iconSelected: userQuestionToggle,
    },
    {
      id: 3,
      title: `Sharing knowledge is part of the mission`,
      body: `And of course, he's always ready to lend a hand when someone needs help understanding the tech side of things.`,
      href: "#",
      icon: userHomeX,
      iconSelected: userTogglex,
    },
  ];

  return (
    <div className="w-full h-full grid grid-rows-[1fr,auto] gap-4 place-content-center">
      {/* Main Content */}
      <div className="w-full grid grid-areas-[stack] place-items-center">
        {/* Content Layer */}
        <div className="[grid-area:stack] z-10 w-full max-w-screen-lg px-4 grid gap-8">
          {/* Header Section with Back Button and Image */}
          <div className="grid grid-cols-[auto,1fr] items-center gap-4">
            <BackButton />
            <div className="relative h-full m-auto">
              <Image
                className="object-contain object-center"
                alt=""
                src={user}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Title */}
          <h2 className="font-sans whitespace-break-spaces text-black text-xl lg:text-3xl text-center">
            What He&apos;s really aiming for:
          </h2>

          {/* Cards Grid */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-fr"> */}

          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-6 font-body place-items-center auto-rows-fr">
            {cards.map((card, index) => (
              <Link
                href={card.href}
                className={cn(
                  "shadow-lg rounded-lg p-4 flex flex-col  cursor-pointer text-center font-body transition-colors duration-200 h-full w-full",
                  selectedIndex === index
                    ? "bg-[#65D9BD] text-white"
                    : "bg-white text-gray-700"
                )}
                key={card.id}
                onClick={() => setSelectedIndex(index)}
              >
                {/* image container */}
                <div className="flex items-center justify-center h-40">
                  <Image
                    className="object-contain w-auto h-full"
                    alt=""
                    src={
                      selectedIndex === index ? card.iconSelected : card.icon
                    }
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    width={300}
                    height={300}
                    priority
                  />
                </div>
                <div className="gap-2 flex flex-col  justify-center h-auto">
                  <h2
                    className={cn(
                      "text-md lg:text-xl font-bold text-pretty",
                      selectedIndex === index ? "text-white" : "text-gray-700"
                    )}
                  >
                    {card.title}
                  </h2>
                  <p
                    className={cn(
                      "text-md tracking-wide",
                      selectedIndex === index ? "text-white" : "text-gray-700"
                    )}
                  >
                    {card.body}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="max-w-screen-lg mx-auto px-4">
        <Link passHref href="/approach">
          <SubmitButton>Continue</SubmitButton>
        </Link>
      </div>
    </div>
  );
}

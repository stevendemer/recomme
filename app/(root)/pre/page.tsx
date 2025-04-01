"use client";
import Image from "next/image";
import { IconArrowLeft } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import user from "@/public/assets/user.svg";
import userArrow from "@/public/assets/user-arrow.svg";
import userCircle from "@/public/assets/user-circle.svg";
import third from "@/public/assets/third.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import userWhite from "@/public/assets/user-white.svg";
import arrowWhite from "@/public/assets/arrow-white.svg";
import { cn } from "@/lib/utils";
import userHomex from "@/public/assets/user-home-x.svg";
import userHome from "@/public/assets/user-home.svg";
import userHomeQuestion from "@/public/assets/user-home-question.svg";
import Link from "next/link";
import userHouseToggle from "@/public/assets/user-house-toggle.svg";
import userQuestionToggle from "@/public/assets/user-question-toggle.svg";
import userTogglex from "@/public/assets/user-toggle-x.svg";
import BackButton from "@/components/back-button";

import userHomeX from "@/public/assets/user-home-x.svg";

const cards = [
  {
    id: 1,
    title: "This person showed high interest but still not convinced",
    icon: userHome,
    selectedIcon: userHouseToggle,
    p: "They need more information and reassurance to make a final decision.",
    href: "/profiling?type=range",
  },
  {
    id: 2,
    title: "This person showed hesitancy and a bit of interest",
    icon: userHomeQuestion,
    selectedIcon: userQuestionToggle,
    p: "While they are intrigued by the concept, they have expressed reservations and may have concerns that need addressing.",
    href: "#",
  },
  {
    id: 3,
    title: "This person showed resistance",
    icon: userHomex,
    selectedIcon: userTogglex,
    p: "They have significant concerns or doubts about the benefits and feasibility of participating.",
    href: "#",
  },
];

const tabs = [
  {
    icon: userCircle,
    color: "amber-400",
    text: "Enrolment",
  },
  {
    icon: userCircle,
    color: "amber-400",
    text: "Onboarding",
  },
  {
    icon: userCircle,
    color: "gray-400",
    text: "Engagement",
  },
  {
    icon: userCircle,
    color: "gray-400",
    text: "Consolidation",
  },
  {
    icon: userCircle,
    color: "gray-400",
    text: "Proactivity",
  },
  {
    icon: userCircle,
    color: "gray-400",
    text: "Mentoring",
  },
];

const PrePage = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="w-full h-full grid grid-rows-[auto_1fr_auto] gap-4">
      {/* Main Content */}
      <div className="w-full grid grid-areas-[stack] place-items-center">
        {/* Back Button - Always on top */}
        <div className="[grid-area:stack] w-full h-full relative p-4">
          <BackButton />
        </div>

        {/* Content Layer */}
        <div className="[grid-area:stack] z-10 w-full max-w-screen-lg sm:p-3 grid">
          {/* Header Section */}
          <div className="flex items-center flex-col justify-center font-body gap-2 sm:p-0 p-4">
            <Image
              src={userArrow}
              alt="User Icon"
              width={60}
              height={60}
              className="mx-auto mb-4"
            />
            <h1 className="lg:text-2xl text-lg font-bold text-gray-800">
              Convince someone to join
            </h1>
            <p className="text-gray-600 mt-2 text-ellipsis mx-auto text-pretty">
              Perfect! You&apos;ve come to the right place. I have some great
              strategies and tips to help you boost your community engagement
              and attract new members. Shall we explore some effective methods
              to make your community irresistible to potential members?
            </p>
          </div>

          {/* Tabs Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-x-4 font-body m-2 min-w-max flex-wrap sm:flex-nowrap">
            {tabs.map((t, index) => (
              <div
                key={index}
                className="text-black rounded-full gap-3 flex flex-col items-center p-3"
              >
                <div
                  className={cn(
                    "rounded-full flex items-center justify-center w-8 h-8",
                    "bg-" + t.color
                  )}
                >
                  <Image
                    width={20}
                    height={20}
                    className="object-cover object-center"
                    alt=""
                    src={t.icon}
                  />
                </div>
                <p className="font-bold">{t.text}</p>
              </div>
            ))}
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:gap-3 gap-6 auto-rows-fr h-full place-items-center mx-2 sm:mx-0">
            {cards.map((card, index) => (
              <Link
                onClick={() => setSelectedIndex(index)}
                href={card.href}
                key={card.id}
                passHref
                className={cn(
                  "bg-white shadow-md rounded-lg p-3 lg:p-8 flex flex-col text-center transition-all duration-300 font-body sm:max-w-md w-full h-full relative hover:shadow-lg",
                  selectedIndex === index
                    ? "bg-[#65D9BD] text-white"
                    : "bg-white text-gray-700"
                )}
              >
                {/* image container */}
                <div className="flex items-center justify-center sm:justify-between space-x-4 h-40 w-full relative">
                  <div className="relative w-full h-full flex items-center  justify-center">
                    <Image
                      alt=""
                      src={card.selectedIcon}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className={cn(
                        "object-contain max-h-36 max-w-36",
                        selectedIndex !== index && "hidden"
                      )}
                      width={200}
                      height={150}
                    />
                    <Image
                      alt=""
                      src={card.icon}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className={cn(
                        "object-scale-down",
                        selectedIndex === index && "hidden"
                      )}
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
                <div className="gap-2 flex flex-col justify-start h-auto mt-2">
                  <h2
                    className={cn(
                      "text-sm lg:text-lg font-bold",
                      selectedIndex === index ? "text-white" : "text-gray-700"
                    )}
                  >
                    {card.title}
                  </h2>
                  <p
                    className={cn(
                      "mt-2 text-sm tracking-wide",
                      selectedIndex === index
                        ? "text-white"
                        : "text-gray-600/70"
                      // selectedIndex === index && "text-white"
                    )}
                  >
                    {card.p}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrePage;

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

const cards = [
  {
    id: 1,
    title: "This person showed high interest but still not convinced",
    icon: userHome,
    selectedIcon: userHouseToggle,
    p: "They need more information and reassurance to make a final decision.",
    href: "/profiling",
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

const PrePage = () => {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="w-full h-full grid grid-rows-[auto,1fr,auto] gap-4">
      {/* Main Content */}
      <div className="w-full grid grid-areas-[stack] place-items-center">
        {/* Back Button - Always on top */}
        <div className="[grid-area:stack] w-full h-full relative m-3">
          <button
            onClick={() => router.back()}
            className="bg-white shadow-lg text-[#65D9BD] hover:shadow-xl transition-shadow duration-200 rounded-full p-2"
          >
            <IconArrowLeft className="sm:size-8 size-4" />
          </button>
        </div>

        {/* Content Layer */}
        <div className="[grid-area:stack] z-10 w-full max-w-screen-lg xl:p-6 grid xl:gap-3">
          {/* Header Section */}
          <div className="flex items-center flex-col justify-center font-body">
            <Image
              src={userArrow}
              alt="User Icon"
              width={60}
              height={60}
              className="mx-auto mb-4"
            />
            <h1 className="lg:text-xl text-lg font-bold text-gray-800">
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
          <div className="grid grid-cols-2 gap-5 font-body m-2">
            <div className="bg-white text-black rounded-full shadow-md gap-x-2 flex items-center justify-center p-2 border-border border">
              <div className="bg-amber-200 rounded-full flex items-center justify-center w-8 h-8">
                <Image
                  width={20}
                  height={20}
                  className="object-cover object-center"
                  alt=""
                  src={userCircle}
                />
              </div>
              <p className="font-bold">Enrolment</p>
            </div>

            <div className="bg-white flex items-center justify-center text-black rounded-full shadow-md gap-x-2 p-2 border-border border">
              <div className="bg-amber-200 rounded-full flex items-center justify-center w-8 h-8">
                <Image
                  width={20}
                  height={20}
                  className="object-contain object-center"
                  alt=""
                  src={userCircle}
                />
              </div>
              <p className="font-bold">Onboarding</p>
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr h-full place-items-center">
            {cards.map((card, index) => (
              <Link
                onClick={() => setSelectedIndex(index)}
                href={card.href}
                key={card.id}
                passHref
                className={cn(
                  "bg-white shadow-lg rounded-lg p-2 lg:p-6 grid place-content-center text-center transition-colors duration-200 font-body sm:max-w-md w-full h-full",
                  selectedIndex === index && "bg-[#65D9BD] text-white"
                )}
              >
                <div className="relative m-auto">
                  <Image
                    src={
                      selectedIndex === index ? card.selectedIcon : card.icon
                    }
                    alt=""
                    className="object-scale-down object-center w-auto h-full max-h-[300px]"
                  />
                </div>
                <h3
                  className={cn(
                    "mt-4 text-sm lg:text-lg font-bold text-gray-700",
                    selectedIndex === index && "text-white"
                  )}
                >
                  {card.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-gray-500 text-sm",
                    selectedIndex === index && "text-white"
                  )}
                >
                  {card.p}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrePage;

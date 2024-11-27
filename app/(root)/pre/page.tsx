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

const cards = [
  {
    id: 1,
    title: "This person showed high interest but still not convinced",
    icon: userHome,
    selectedIcon: userWhite,
    p: "They need more information and reassurance to make a final decision.",
    href: "/profiling",
  },
  {
    id: 2,
    title: "This person showed hesitancy and a bit of interest",
    icon: userHomeQuestion,
    selectedIcon: userCircle,
    p: "While they are intrigued by the concept, they have expressed reservations and may have concerns that need addressing.",
    href: "#",
  },
  {
    id: 3,
    title: "This person showed resistance",
    icon: userHomex,
    selectedIcon: arrowWhite,
    p: "They have significant concerns or doubts about the benefits and feasibility of participating.",
    href: "#",
  },
];

const PrePage = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center font-body relative">
      {/* Back Button */}
      <div className="flex items-center w-full h-full justify-center flex-col ">
        <button
          onClick={() => router.back()}
          className="bg-white shadow-lg text-[#65D9BD] p-1 sm:p-3 rounded-sm text-center hover:shadow-xl transition-shadow duration-200 absolute top-10 left-4"
        >
          <IconArrowLeft size={37} />
        </button>

        {/* Header Section */}
        <div className="flex items-center flex-col justify-center text-center">
          <Image
            src={user}
            alt="User Icon"
            width={40}
            height={40}
            className="mx-auto mb-4"
          />
          <h1 className="lg:text-2xl text-lg font-bold text-gray-800">
            Convince someone to join
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Perfect! You&apos;ve come to the right place. I have some great
            strategies and tips to help you boost your community engagement and
            attract new members. Shall we explore some effective methods to make
            your community irresistible to potential members?
          </p>
        </div>

        {/* Tabs Section */}
        <div className="mt-3 gap-2 flex items-center">
          <div className="relative flex items-center w-full">
            <Button className="bg-white hover:bg-slate-100 text-black rounded-full shadow-sm gap-x-2 ">
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
            </Button>
          </div>

          <div className="flex items-center w-full relative">
            <Button className="bg-white hover:bg-slate-100 text-black rounded-full shadow-sm gap-x-2">
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
            </Button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 relative lg:grid-cols-3 gap-6 px-4 max-w-screen-lg md:mt-2 lg:mt-10">
          {cards.map((card, index) => (
            <Link
              href={card.href}
              key={card.id}
              passHref
              className="bg-white shadow-lg rounded-lg p-2 lg:p-6 grid items-center justify-center text-center"
            >
              <div className="relative aspect-video">
                <Image
                  src={card.icon}
                  alt=""
                  fill
                  className="object-scale-down h-auto w-full object-center"
                />
              </div>
              <h3 className="mt-4 text-sm lg:text-lg font-bold text-gray-700">
                {card.title}
              </h3>
              <p className="mt-2 text-gray-500 text-sm">{card.p}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrePage;

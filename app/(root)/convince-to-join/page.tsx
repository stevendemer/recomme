"use client";
import Image from "next/image";
import flowerIcon from "@/public/assets/flower.svg";
import bigCloud from "@/public/assets/big-cloud.svg";
import profile from "@/public/assets/profile.svg";
import user from "@/public/assets/user.svg";
import userArrow from "@/public/assets/user-arrow.svg";
import userCircle from "@/public/assets/user-circle.svg";
import third from "@/public/assets/third.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import userWhite from "@/public/assets/user-white.svg";
import arrowWhite from "@/public/assets/arrow-white.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";

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

export default function ConvinceToJoinPage() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div className="w-full h-full grid grid-rows-[1fr,auto] gap-8 font-inter">
      {/* Main Content */}
      <div className="w-full grid grid-areas-[stack] place-items-center">
        {/* Cloud Background */}
        <div className="[grid-area:stack] w-full h-full">
          <Image
            src={bigCloud}
            alt=""
            fill
            className="object-contain object-top"
            priority
          />
        </div>

        {/* Content Layer */}
        <div className="[grid-area:stack] z-10 w-full max-w-screen-lg px-4 grid gap-20 place-items-center">
          {/* Message Box */}
          <div className="bg-white/40 backdrop-blur-lg shadow-lg rounded-sm p-6 lg:p-12 w-full gap-8">
            <div className="flex gap-4  items-start">
              <Image
                alt=""
                src={flowerIcon}
                className="object-contain object-top flex-shrink-0"
                width={32}
                height={32}
              />
              <div className="flex flex-col items-start space-y-2">
                <div className="lg:text-lg text-sm text-gray-800 whitespace-normal">
                  Thanks! Now, I&apos;m all set to help you achieve your goals.
                </div>
                <div className="text-sm lg:text-lg text-gray-800 whitespace-normal">
                  So, let me see, you are mainly here because you&apos;d like
                  to:
                </div>
              </div>
            </div>
          </div>

          {/* Cards Section */}
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
                      selectedIndex === index ? card.selectedIcon : card.icon
                    }
                    alt=""
                    className="object-contain object-center h-full w-20"
                  />
                  <h3
                    className={cn(
                      "mt-4 font-bold text-gray-700 text-lg text-center",
                      selectedIndex === index ? "text-white" : ""
                    )}
                  >
                    {card.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

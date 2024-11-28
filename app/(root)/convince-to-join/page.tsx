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
    <div className="w-full h-full grid place-items-center gap-8 max-w-screen-lg relative">
      <Image
        src={bigCloud}
        alt=""
        fill
        className="object-contain inset-0 absolute w-full object-top"
        priority
      />
      <div className="bg-white/40 z-20 relative inset-0 backdrop-blur-lg shadow-lg font-body text-center p-4 lg:p-6 rounded-sm  flex  items-center justify-center gap-4 w-full h-full max-h-[50%]">
        <div className="flex justify-start items-start mb-4">
          <Image
            alt=""
            src={flowerIcon}
            className="object-contain object-top"
            width={32}
            height={32}
          />
        </div>

        <div className="flex flex-col items-start space-y-2">
          <div className="lg:text-lg text-sm text-gray-800 whitespace-normal text-start">
            Thanks! Now, I&apos;m all set to help you achieve your goals.
          </div>
          <div className="text-sm lg:text-lg text-gray-800 whitespace-normal">
            So, let me see, you are mainly here because you&apos;d like to:
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 font-body relative">
        {cards.map((card, index) => (
          <Link
            key={card.id}
            href={card.href}
            passHref
            onClick={() => setSelectedIndex(index)}
            className={cn(
              "bg-white/80 shadow-md rounded-sm  p-8 lg:p-28 flex flex-col items-center cursor-pointer transition-colors duration-300",
              selectedIndex === index ? "bg-[#65D9BD] text-white" : ""
            )}
          >
            <Image
              src={selectedIndex === index ? card.selectedIcon : card.icon}
              width={60}
              height={60}
              alt=""
              className="object-contain object-center"
            />
            <h3
              className={cn(
                "mt-4 font-bold text-gray-700 text-lg text-center",
                selectedIndex === index ? "text-white" : ""
              )}
            >
              {card.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

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

export default function AimPage() {
  const router = useRouter();

  const cards = [
    {
      id: 1,
      title: "Cutting down on energy bills",
      body: "While staying eco-friendly. Who doesn’t love saving money and the planet at the same time?",
      href: "#",
      icon: userHome,
      iconSelected: userWhite,
    },
    {
      id: 2,
      title: `He knows change is contagious!`,
      body: `Inspiring others to join you on this journey toward sustainability.`,
      href: "#",
      icon: userHomeQuestion,
    },
    {
      id: 3,
      title: `Sharing knowledge is part of the mission`,
      body: `And of course, he's always ready to lend a hand when someone needs help understanding the tech side of things.`,
      href: "#",
      icon: userHomeX,
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col items-center justify-around w-full max-w-5xl h-full">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex justify-around items-center w-full">
          <button
            onClick={() => router.back()}
            className="bg-white shadow-lg text-[#65D9BD] p-1 sm:p-3  rounded-sm text-center hover:shadow-xl transition-shadow duration-200 "
          >
            <IconArrowLeft size={37} />
          </button>

          <div className="flex justify-center items-center relative w-full h-full">
            <Image
              className="object-contain object-center"
              alt=""
              src={user}
              fill
            />
          </div>
        </div>
        <h2 className="font-sans whitespace-break-spaces p-4 text-black text-md lg:text-3xl">
          What He&apos;s really aiming for:
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col sm:flex-row justify-center items-center h-full">
          <div className="grid sm:grid-cols-3 grid-cols-1 w-full gap-x-2 flex-shrink-0">
            {cards.map((card, index) => (
              <Link
                href={card.href}
                className="bg-white shadow-lg rounded-lg p-3 grid text-center font-body"
                key={card.id}
              >
                <div className="relative aspect-video">
                  <Image
                    className="object-scale-down object-center w-full h-full"
                    alt=""
                    src={card.icon}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h2 className="text-md lg:text-xl text-ellipsis text-center font-inter text-black font-bold">
                  {card.title}
                </h2>

                <p className="mt-2 text-gray-700 font-body text-md tracking-wide p-1">
                  {card.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Link passHref href="/approach">
        <SubmitButton>Continue</SubmitButton>
      </Link>
    </div>
  );
}

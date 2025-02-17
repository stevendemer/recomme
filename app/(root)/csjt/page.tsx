import Image from "next/image";
import user from "@/public/assets/user.svg";
import leaf from "@/public/assets/leaf.svg";
import CSJTCard from "@/components/cards/csjt-card";
import SubmitButton from "@/components/submit-button";
import lamp from "@/public/assets/lamp.png";
import hands from "@/public/assets/hands.png";
import sunroof from "@/public/assets/sunroof.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import userWhite from "@/public/assets/user-white.svg";
import arrowWhite from "@/public/assets/arrow-white.svg";
import { cn } from "@/lib/utils";
import userHomex from "@/public/assets/user-home-x.svg";
import userHome from "@/public/assets/user-home.svg";
import userHomeQuestion from "@/public/assets/user-home-question.svg";

const cards = [
  {
    id: 1,
    title: "This person showed high interest but still not convinced",
    icon: lamp,
    p: "He's focused on minimising the impact of energy production and consumption.",
    href: "#",
  },
  {
    id: 2,
    title: "This person showed hesitancy and a bit of interest",
    icon: sunroof,
    p: "While they are intrigued by the concept, they have expressed reservations and may have concerns that need addressing.",
    href: "#",
  },
  {
    id: 3,
    title: "This person showed resistance",
    icon: hands,
    p: "They have significant concerns or doubts about the benefits and feasibility of participating.",
    href: "#",
  },
];

export default function ConvinceJoinPage() {
  return (
    <div className="flex flex-col items-center justify-evenly w-full h-full m-auto relative">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="relative w-20 h-20">
          <Image
            className="object-cover object-center w-full h-auto"
            src={user}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust image size for responsive
          />
        </div>

        <p className="font-mulish whitespace-normal text-sm italic font-bold p-4 text-black">
          {" "}
          Your user looks like an{" "}
        </p>
        <div className="flex justify-center items-center w-full shrink-0 space-x-4 relative">
          <Image
            className="object-contain object-center transform scale-x-[-1]"
            alt=""
            width={30}
            height={20}
            src={leaf}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust image size for responsive
          />
          <h2 className="font-semibold font-mulish lg:text-xl text-lg text-black tracking-wide text-center">
            Environmental Tech Enthusiast
          </h2>
          <Image
            className="object-contain object-center"
            alt=""
            width={30}
            height={20}
            src={leaf}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust image size for responsive
          />
        </div>
      </div>
      <div className="flex items-center w-full p-4 max-w-screen-md">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 w-full h-full shrink-0 auto-rows-fr place-items-center">
          {cards.map((card, index) => (
            <Link
              className="shadow-sm rounded-lg border-border border p-2 flex flex-col text-center font-body h-full w-full cursor-default bg-white"
              key={card.id}
              href={card.href}
            >
              <div className="flex items-center justify-center h-48 relative aspect-video">
                <Image
                  src={card.icon}
                  alt=""
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center h-auto">
                <p className="mt-2 text-gray-700 font-body text-sm">{card.p}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Link passHref href="/aim">
        <SubmitButton>Continue</SubmitButton>
      </Link>
    </div>
  );
}

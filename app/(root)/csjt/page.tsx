import Image from "next/image";
import user from "@/public/assets/user.svg";
import leaf from "@/public/assets/leaf.svg";
import CSJTCard from "@/components/cards/csjt-card";
import SubmitButton from "@/components/submit-button";
import lamp from "@/public/assets/lamp.png";
import Link from "next/link";

export default function ConvinceJoinPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-w-3xl gap-4 relative flex-shrink overflow-hidden">
      <div className="flex flex-col items-center gap-4 max-h-[17rem] h-full w-full">
        <div className="relative w-full lg:max-w-lg mx-auto h-full">
          <Image
            className="object-contain object-center"
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
      </div>
      <div className="flex justify-center items-center w-full flex-shrink space-x-4 relative">
        <Image
          className="object-contain object-center transform scale-x-[-1]"
          alt=""
          width={50}
          height={20}
          src={leaf}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust image size for responsive
        />
        <h2 className="font-semibold font-sans text-3xl text-black tracking-wide">
          Environmental Tech Enthusiast
        </h2>
        <Image
          className="object-cover object-center"
          alt=""
          width={50}
          height={20}
          src={leaf}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust image size for responsive
        />
      </div>
      <div className="flex items-center  w-full p-6 flex-shrink-0">
        <div className="grid gap-4 md:grid-cols-3 w-full">
          {/* 3 cards go here */}
          <CSJTCard src={lamp}>
            He&apos;s focused on minimising the impact of energy production and
            consumption.
          </CSJTCard>
          <CSJTCard src={lamp}>
            He&apos;s focused on minimising the impact of energy production and
            consumption.
          </CSJTCard>
          <CSJTCard src={lamp}>
            He&apos;s focused on minimising the impact of energy production and
            consumption.
          </CSJTCard>
        </div>
      </div>
      <Link passHref href="/aim">
        <SubmitButton>Continue</SubmitButton>
      </Link>
    </div>
  );
}

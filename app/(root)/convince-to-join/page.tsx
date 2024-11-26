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

export default function ConvinceToJoinPage() {
  const [index, setIndex] = useState(-1);
  const { push } = useRouter();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8 max-w-screen-lg">
      <Image src={bigCloud} alt="" fill className="object-contain object-top" />
      <div className="bg-white/40 z-10  backdrop-blur-lg shadow-lg font-body text-center p-4 lg:p-8 rounded-sm  flex  items-start justify-center gap-4">
        <div className="flex justify-center mb-4">
          <Image
            alt=""
            src={flowerIcon}
            className="object-contain object-top"
            width={32}
            height={32}
          />
        </div>

        <div className="flex flex-col items-center">
          <p className="lg:text-lg text-sm text-gray-800 whitespace-normal text-start ">
            Thanks! Now, I&apos;m all set to help you achieve your goals.
            <p className="text-sm lg:text-lg text-gray-800 whitespace-normal ">
              So, let me see, you are mainly here because you&apos;d like to:
            </p>
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-body relative ">
        {/* Card 1 */}
        <div
          //   onClick={() => setIndex(1)}
          className="bg-white/40 shadow-md rounded-sm p-8 lg:p-32 flex flex-col items-center cursor-pointer"
          onClick={() => push("/pre")}
        >
          <Image
            className="object-contain object-center"
            src={userArrow}
            width={60}
            height={60}
            alt=""
          />
          <h3 className="mt-4 font-bold text-gray-700 text-lg text-center">
            Convince someone to join
          </h3>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => setIndex(2)}
          className="bg-white/40 shadow-md rounded-sm p-8 lg:p-32 flex flex-col items-center font-body cursor-pointer"
        >
          <Image
            className="object-contain object-center"
            src={user}
            alt=""
            width={60}
            height={60}
          />
          <h3 className="mt-4 font-bold text-gray-700 text-lg text-center">
            Improve participation
          </h3>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => setIndex(3)}
          className="bg-white/40 shadow-md rounded-sm p-8 lg:p-32 flex flex-col items-center cursor-pointer"
        >
          <Image
            className="object-contain object-center"
            src={third}
            alt=""
            width={60}
            height={60}
          />
          <h3 className="mt-4 font-bold text-gray-700 text-lg text-center">
            Organise a meeting
          </h3>
        </div>
      </div>
    </div>
  );
}

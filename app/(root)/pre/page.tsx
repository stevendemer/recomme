"use client";
import Image from "next/image";
import userCircle from "@/public/assets/user-circle.svg";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import user from "@/public/assets/user.svg";
import { Button } from "@/components/ui/button";

const PrePage = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center font-body relative">
      {/* Back Button */}
      <div className="flex items-center w-full justify-center m-auto">
        <button
          onClick={() => router.back()}
          className="bg-white shadow-lg text-[#65D9BD] p-1 sm:p-3 rounded-sm text-center hover:shadow-xl transition-shadow duration-200 absolute top-10 left-4"
        >
          <IconArrowLeft size={37} />
        </button>

        {/* Header Section */}
        <div className="mt-10 text-center">
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
      </div>

      {/* Tabs Section */}
      <div className="mt-6 flex gap-2 items-center relative">
        <div className="relative flex items-center w-full">
          <Button className="bg-white hover:bg-slate-100 text-black rounded-full shadow-sm gap-x-2 ">
            <div className="bg-amber-200 rounded-full p-1">
              <Image
                width={32}
                height={32}
                className="object-contain object-center"
                alt=""
                src={userCircle}
              />
            </div>
            <p className="font-bold">Enrolment</p>
          </Button>
        </div>

        <div className="flex items-center w-full relative">
          <Button className="bg-white hover:bg-slate-100 text-black rounded-full shadow-sm gap-x-2">
            <div className="bg-amber-200 rounded-full p-1">
              <Image
                width={32}
                height={32}
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
      <div className="grid grid-cols-1 relative lg:grid-cols-3 gap-6 px-4 max-w-screen-lg mt-2 xl:mt-10">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-2 lg:p-6 flex flex-col items-center text-center ">
          <Image src={user} alt="User Check" width={50} height={50} />
          <h3 className="mt-4 text-sm lg:text-lg font-bold text-gray-700">
            This person showed high interest but still not convinced
          </h3>
          <p className="mt-2 text-gray-500 text-sm">
            They need more information and reassurance to make a final decision.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-2 lg:p-6 flex flex-col items-center text-center">
          <Image src={user} alt="User Question" width={50} height={50} />
          <h3 className="mt-4 lg:text-lg text-sm font-bold text-gray-700">
            This person showed hesitancy and a bit of interest
          </h3>
          <p className="mt-2 text-gray-500 text-sm">
            While they are intrigued by the concept, they have expressed
            reservations and may have concerns that need addressing.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-2 lg:p-6 flex flex-col items-center text-center">
          <Image src={user} alt="User Cross" width={50} height={50} />
          <h3 className="mt-4 lg:text-lg text-sm font-bold text-gray-700">
            This person showed resistance
          </h3>
          <p className="mt-2 text-gray-500 text-sm">
            They have significant concerns or doubts about the benefits and
            feasibility of participating.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrePage;

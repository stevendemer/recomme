import React from "react";
import Image from "next/image";
import MessageContainer from "@/components/message-container";
import alec from "@/public/assets/alec.svg";
import flower from "@/public/assets/flower.svg";
import bigCloud from "@/public/assets/big-cloud.svg";
import SubmitButton from "@/components/submit-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ConfirmationPage() {
  return (
    <div className="relative flex items-center justify-around flex-col w-full h-full">
      <div className="flex flex-col items-center justify-center relative">
        <div className="flex items-center justify-center relative flex-grow">
          <div className="relative h-full w-full">
            <Image
              className="object-cover h-full"
              src={bigCloud}
              alt="cloud background"
            />
          </div>
          <div className="absolute z-50 bg-white/60 backdrop-blur-lg w-fit h-full mb-8 p-6 rounded-3xl flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row overflow-hidden">
            <div className="flex flex-col items-center space-y-6">
              <div className="flex gap-x-4 items-start justify-center w-full">
                <Image priority src={flower} alt="flower" className="px-2" />
                <p className="text-black text-lg sm:text-2xl font-normal font-body leading-tight text-center sm:text-left">
                  First, let&apos;s get introduced <br /> I have a feeling you
                  might be an
                  <b> ALEC community manager</b> <br /> looking for some digital
                  magic. Am I on the right track?
                </p>
              </div>
              <Image
                className="object-contain max-w-full max-h-full"
                src={alec}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 flex-shrink-0">
          <Link href="/registration">
            <SubmitButton className="bg-red-400 hover:bg-red-400 px-10 py-8 rounded-full">
              No, modify
            </SubmitButton>
          </Link>
          <Link href="/thankyou">
            <SubmitButton>Yep, it&apos;s me</SubmitButton>
          </Link>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="relative flex items-center justify-around flex-col w-full h-full">
  //     <div className="flex flex-col items-center justify-center">
  //       <div className="flex items-center justify-center">
  //         <Image src={bigCloud} alt="cloud background" />

  //         {/* Content container - using relative positioning to stack on top */}
  //         {/* White backdrop with blur */}
  //         <div className="bg-white/60 backdrop-blur-lg mx-10 sm:mx-20 absolute z-50 rounded-3xl p-4 w-fit flex flex-col items-center sm:flex-row">
  //           <div className="flex items-center flex-col gap-y-3">
  //             <div className="flex gap-x-4">
  //               <Image
  //                 width={60}
  //                 height={60}
  //                 src={flower}
  //                 alt="flower"
  //                 className="px-2"
  //               />
  //             </div>

  //             <Image
  //               className="object-cover w-full h-full"
  //               src={alec}
  //               alt="Alec"
  //             />
  //             {/* Alec image container */}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="flex items-center space-x-4">
  //       <Link href="/registration">
  //         <SubmitButton className="bg-red-400 hover:bg-red-400">
  //           No, modify
  //         </SubmitButton>
  //       </Link>
  //       <Link href="/thankyou">
  //         <SubmitButton>Yep, it&apos;s me</SubmitButton>
  //       </Link>
  //     </div>
  //   </div>
  // );
}

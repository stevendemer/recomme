"use client";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ChatBubble from "./chat-bubble";
import { useState } from "react";
import { Label } from "./ui/label";
import SubmitButton from "./submit-button";

export default function ImageSlider({
  onChange,
}: {
  onChange: (v: number[]) => void;
}) {
  const [value, setValue] = useState([2]);

  // return (
  //   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full place-items-center">
  //     <div className="rounded-lg relative h-auto aspect-square">
  //       <Image
  //         src="/assets/boat.png"
  //         alt="Question image"
  //         className="rounded-xl object-cover object-center"
  //         fill
  //         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  //       />
  //     </div>
  //     <div className="w-full h-full flex flex-col items-center">
  //       <div className="flex flex-col items-center gap-8">
  //       </div>
  //     </div>

  //     <div className="w-full items-start gap-4 md:gap-6 flex flex-col justify-between mb-10 sm:mb-0 bg-white rounded-[40px] p-2 sm:p-8">
  //       <Slider color="red" onValueChange={onChange} />
  //       <div className="flex justify-between w-full h-full">
  //         <div className="text-md font-rubik font-normal text-black">
  //           Not really me
  //         </div>
  //         <div className="text-md font-rubik font-normal text-black">
  //           Pretty much like me
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="flex justify-center items-center w-full h-full max-w-5xl">
      <div className="w-full p-6 space-y-6 h-full">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-primary">
          How relatable is this situation?
        </h1>

        <div className="flex flex-col items-center gap-4 space-y-12 w-full h-full">
          <div className="flex items-center gap-x-6">
            <div className="w-full md:w-1/2 relative aspect-video">
              <Image
                src="/assets/hacker.png"
                alt="A relatable situation"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 text-foreground space-y-4">
              <p className="md:text-xl text-lg font-normal font-rubik tracking-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit, explicabo molestias ipsa magni
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-full p-4">
            <Slider
              id="relatability-slider"
              min={1}
              max={5}
              step={1}
              value={value}
              onValueChange={setValue}
              className="w-full "
            />
            <div className="flex justify-between text-sm text-muted-foreground p-2 font-rubik">
              <span>Not relatable at all</span>
              <span>Extremely relatable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

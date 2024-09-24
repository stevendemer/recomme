import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ChatBubble from "./chat-bubble";

export default function ImageSlider({
  onValueChange,
}: {
  onValueChange: (v: number[]) => void;
}) {
  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-content-center">
        <div className="overflow-hidden rounded h-fit col-span-1">
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="rounded-xl object-cover w-full h-full aspect-auto"
          />
        </div>
        <div className="w-full space-y-2 flex flex-col items-center h-full col-span-1 md:col-span-2 mx-4">
          <ChatBubble
            title="Random title"
            text="This is a chat bubble with a rounded peak on the left side"
          />

          <ChatBubble
            title="Random title"
            text="This is a chat bubble with a rounded peak on the left side"
          />

          <ChatBubble
            title="Random title"
            text="This is a chat bubble with a rounded peak on the left side"
          />
        </div>

        <div className="w-full items-start h-full gap-6 flex flex-col mb-10 sm:mb-0 bg-white rounded-lg p-2 sm:p-6 col-span-1 sm:col-span-2">
          <Slider
            onValueChange={onValueChange}
            min={1}
            max={5}
            step={1}
            color="#65D9BD"
          />
          <div className="flex justify-between w-full h-full">
            <div className="text-md font-bold text-[#79747E]">
              Not really me
            </div>
            <div className="text-md font-bold text-[#79747E]">
              Pretty much like me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-full">
      <div className="rounded-lg relative mx-4 max-w-md md:max-w-full">
        <Image
          src="/assets/boat.png"
          alt="Question image"
          className="rounded-xl object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-full h-full flex flex-col items-center col-span-1">
        <div className="flex flex-col items-center gap-8">
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
      </div>

      <div className="w-full items-start h-full gap-4 md:gap-8 flex flex-col justify-between mb-10 sm:mb-0 bg-white rounded-lg p-2 sm:p-8 col-span-1 sm:col-span-2">
        <Slider
          onValueChange={onValueChange}
          min={1}
          max={5}
          step={1}
          color="#65D9BD"
        />
        <div className="flex justify-between w-full h-full">
          <div className="text-md font-bold text-[#79747E]">Not really me</div>
          <div className="text-md font-bold text-[#79747E]">
            Pretty much like me
          </div>
        </div>
      </div>
    </div>
  );
}

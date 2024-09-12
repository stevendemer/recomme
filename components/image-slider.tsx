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
    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto max-w-7xl py-12 px-4 gap-6 w-full h-full">
      <div className="overflow-hidden rounded-3xl mr-12 col-span-2">
        <img
          src="https://placehold.co/600x400"
          alt=""
          className="rounded-2xl object-cover w-full h-full"
          style={{ aspectRatio: "800/600", objectFit: "cover" }}
        />
      </div>
      <div className="w-full mx-auto gap-4 flex flex-col items-center h-full justify-center">
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

      <div className="h-1/2 w-[30vw] gap-4 flex flex-col justify-center items-center bg-white rounded-2xl p-6">
        <Slider
          onValueChange={onValueChange}
          min={1}
          max={5}
          step={1}
          color="#65D9BD"
        />
        <div className="flex justify-between w-full">
          <div className="text-md font-bold text-[#79747E]">Not really me</div>
          <div className="text-md font-bold text-[#79747E]">
            Pretty much like me
          </div>
        </div>
      </div>
    </div>
  );
}

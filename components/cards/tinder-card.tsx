import { useState } from "react";
import {
  motion,
  PanInfo,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FaHeart, FaTimes } from "react-icons/fa";
import { Button } from "../ui/button";
import Image from "next/image";
import SubmitButton from "../submit-button";

export default function TinderCard({
  onChange,
  value,
  frontCard = false,
  setBackground,
  setIndex,
  index,
  drag,
}: {
  onChange: () => void;
  value: "right" | "left" | null;
  frontCard?: boolean;
  index?: number;
  setIndex?: (x: number) => void;
  setBackground?: (x: string) => void;
  drag?: any;
}) {
  const [exitX, setExitX] = useState(0);
  const [showCard, setShowCard] = useState(true);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });

  const variantsFrontCard = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom: any) => ({
      x: custom,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.3 },
    }),
  };

  const variantsBackCard = {
    initial: { scale: 0, y: 105, opacity: 0 },
    animate: { scale: 0.75, y: 30, opacity: 0.5 },
  };

  function handleDragEnd(_: any, info: PanInfo) {
    if (info.offset.x < -100) {
      setExitX(-250);
    }
    if (info.offset.x > 100) {
      setExitX(250);
    }
  }

  const swipe = async (direction: "left" | "right") => {
    const x = direction === "right" ? 300 : -300;
    await controls.start({ x, opacity: 0, transition: { duration: 0.5 } });
    setShowCard(false); // Hide card after swipe

    if (setBackground) {
      setBackground(direction === "right" ? "black" : "red");
    }
  };

  return (
    <div className="relative rounded-2xl h-full mt-4 flex flex-col justify-center items-center mx-auto container">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-primary p-4">
        How relatable is this situation?
      </h1>

      {showCard && (
        <div className="relative w-1/2 aspect-square">
          <Image
            alt=""
            fill
            src="/assets/hacker.png"
            className="object-cover object-center rounded-2xl"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      )}

      {/* Buttons for like and dislike */}
      {showCard && (
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-full flex justify-between items-center">
          {/* Dislike Button */}
          <Button
            className="border-red-500 border rounded-full text-red-500 w-20 h-20 hover:text-red-400"
            onClick={() => swipe("left")}
            variant="ghost"
            size="icon"
          >
            <FaTimes size={24} />
          </Button>

          {/* Like Button */}
          <Button
            className="border-green-500 border rounded-full text-green-500 w-20 h-20 hover:text-green-400"
            onClick={() => swipe("right")}
            variant="ghost"
            size="icon"
          >
            <FaHeart size={24} />
          </Button>
        </div>
      )}

      {!showCard && (
        <div className="text-center">
          <p className="text-2xl">No more cards</p>
          <button
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg"
            onClick={() => setShowCard(true)}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

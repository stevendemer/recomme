"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  frame,
  PanInfo,
} from "framer-motion";
import { useEffect, useState } from "react";
import { useToast } from "./ui/use-toast";
import { IoMdClose } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Button } from "./ui/button";
import { cubicBezier, circOut } from "framer-motion";
import SubmitButton from "./submit-button";

export default function SwipingCard() {
  const [exit, setExit] = useState(0);
  const [hasBeenSwiped, setHasBeenSwiped] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const animControls = useAnimation();
  const rotateValue = useTransform(x, [-400, 0, 400], [-25, 0, 25]);
  const rotateValueY = useTransform(y, [-400, 0, 400], [-25, 0, 25]);

  const leftButtonScale = useTransform(x, [-200, 0], [1.4, 1]);
  const rightButtonScale = useTransform(x, [0, 200], [1, 1.4]);
  const leftButtonOpacity = useTransform(x, [-200, 0], [1, 0.5]);
  const rightButtonOpacity = useTransform(x, [0, 200], [0.5, 1]);

  const background = useTransform(
    x,
    [-200, 0, 200],
    ["#dc2626", "rgba(0,0,0,0)", "#4ade80"]
  );
  const { toast } = useToast();

  const opacity = useTransform(
    x,
    [-160, -150, -140, -130, -120, -100, 0, 100, 120, 130, 140, 150, 160],
    [0, 0.4, 0.5, 0.6, 0.7, 0.8, 1, 0.8, 0.7, 0.6, 0.5, 0.4, 0]
  );

  useEffect(() => {
    if (hasBeenSwiped) {
      const timer = setTimeout(() => {
        setHasBeenSwiped(false);
        setIsLocked(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [hasBeenSwiped]);

  const handleSwipe = (direction: "left" | "right") => {
    const xDirection = direction === "left" ? -1500 : 1500;
    if (!isLocked) {
      setIsLocked(true);
      setHasBeenSwiped(true);
      animControls
        .start({ x: xDirection, y: xDirection, opacity: 0 })
        .then(() => {
          setExit(xDirection);
          toast({
            description: `Swiped ${direction}`,
          });
        });
    }
  };

  const handleSwipeLeft = () => handleSwipe("left");
  const handleSwipeRight = () => handleSwipe("right");

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 300;

    if (info.offset.x > threshold) {
      handleSwipe("right");
    } else if (info.offset.x < -threshold) {
      handleSwipe("left");
    } else {
      animControls.start({ x: 0, y: 0 });
    }
  };

  return (
    <motion.div
      style={{ background: hasBeenSwiped ? background : "rgba(0,0,0,0)" }}
      className={cn("mt-4 mx-auto rounded-3xl w-full h-full")}
    >
      <div className="flex justify-center items-center my-4 relative h-full py-4">
        {/* left button */}
        <motion.div>
          <button
            onClick={handleSwipeLeft}
            disabled={!!isLocked}
            className="border-1 border-red-400 border-2 text-white rounded-full p-2 hover:scale-110 transition-all duration-200 sm:block hidden"
          >
            <IoMdClose className="sm:w-8 sm:h-8 " fill="red" />
          </button>
        </motion.div>
        {/* main card image */}
        <div className="flex flex-col items-center justify-center h-96 w-[70vw] sm:h-[50vh] sm:w-[15vw] mb-6 rounded-3xl mx-16">
          <motion.img
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 300,
              ease: "easeInOut",
            }}
            dragElastic={0.7}
            style={{
              x,
              opacity,
              rotate: rotateValue,
              rotateY: rotateValueY,
              y,
            }}
            dragConstraints={{ left: 0, right: 0 }}
            drag="x"
            _dragX={x}
            _dragY={y}
            src={"/assets/hacker.png"}
            alt="card image"
            // className="object-cover object-center rounded-[60px] h-[60vh] w-[60vw] sm:w-[20vw] mb-4 max-h-[70vh] mx-auto"
            className="object-cover object-center border-black border h-full rounded-3xl w-full"
            animate={animControls}
            dragDirectionLock
            onDragEnd={handleDragEnd}
            whileTap={{
              scale: 0.9,
            }}
            whileDrag={{
              cursor: "grab",
            }}
            whileHover={{
              cursor: "grab",
            }}
          />
          <div className="flex items-center justify-center sm:hidden space-x-6 p-4">
            <button
              onClick={handleSwipeLeft}
              className="border-1 border-red-400 border-2 text-white rounded-full p-2 hover:scale-110 transition-all duration-200"
              disabled={!!isLocked}
            >
              <IoMdClose className="sm:w-8 sm:h-8 " fill="red" />
            </button>

            <button
              onClick={handleSwipeRight}
              className="border-1 border-teal-300 border-2 text-white rounded-full p-2 hover:scale-110 transition-all duration-200"
              disabled={!!isLocked}
            >
              <FaHeart className="text-teal-300 sm:w-8 sm:h-8" />
            </button>
          </div>
        </div>
        <motion.div>
          <button
            onClick={handleSwipeRight}
            className="border-1 border-teal-300 border-2 text-white rounded-full p-2 hover:scale-110 transition-all duration-200 sm:block hidden"
            disabled={!!isLocked}
          >
            <FaHeart className="text-teal-300 sm:w-8 sm:h-8" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  frame,
  PanInfo,
  AnimatePresence,
  useAnimate,
} from "framer-motion";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { useToast } from "../ui/use-toast";

export default function SwipingCard({
  onSwipe,
}: {
  onSwipe: (direction: string) => void;
}) {
  const [showButton, setShowButton] = useState(true);
  const [hasBeenSwiped, setHasBeenSwiped] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const animControls = useAnimation();
  const bgAnimControls = useAnimation();
  const rotateValue = useTransform(x, [-400, 0, 400], [-25, 0, 25]);
  const rotateValueY = useTransform(y, [-400, 0, 400], [-25, 0, 25]);

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

  const handleSwipe = async (direction: "left" | "right") => {
    if (hasBeenSwiped) return;

    setHasBeenSwiped(true);
    setDirection(direction);
    setShowButton(false);

    const xDirection = direction === "left" ? -1500 : 1500;

    toast({
      description: `Swiped ${direction}`,
    });

    onSwipe(direction);

    // Start both animations simultaneously
    await Promise.all([
      animControls.start({
        x: xDirection,
        opacity: 0,
        transition: { duration: 0.7, bounceStiffness: 300, ease: "easeIn" },
      }),
      bgAnimControls.start({
        background: direction === "left" ? "#dc2626" : "#4ade80",
        transition: { duration: 0.7, ease: "easeIn", bounceDamping: 300 },
      }),
    ]);
  };

  const handleSwipeLeft = () => handleSwipe("left");
  const handleSwipeRight = () => handleSwipe("right");

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 300;

    //TODO TEMP SOLUTION FOR HANDLING FORM CHANGE
    if (info.offset.x > threshold) {
      // store the card's id to send later
      handleSwipeRight();

      setDirection("right");

      onSwipe("right");
    } else if (info.offset.x < -threshold) {
      handleSwipeLeft();

      setDirection("left");

      onSwipe("left");
    } else {
      animControls.start({ x: 0, y: 0 });
    }
  };

  // Use useEffect to ensure animations are only started after component mount
  // useEffect(() => {
  //   animControls.start({ opacity: 1 });
  //   bgAnimControls.start({ opacity: 1 });
  // }, [animControls, bgAnimControls]);

  useEffect(() => {
    if (hasBeenSwiped) {
      setTimeout(async () => {
        bgAnimControls.start({
          background: "#ffff",
        });

        // delete here to manage multiple cards
        setHasBeenSwiped(false);
        setDirection(null);
        animControls.set({ x: 0, opacity: 1 });
        setShowButton(true);
      }, 800);
    }
  }, [hasBeenSwiped, animControls, bgAnimControls]);

  return (
    <AnimatePresence>
      <motion.div
        style={{ background: hasBeenSwiped ? background : "rgba(0,0,0,0)" }}
        className={cn(
          "mt-4 mx-auto rounded-3xl w-full h-fit overflow-hidden relative"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background,
          }}
          initial={{ opacity: 0 }}
          animate={bgAnimControls}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <div className="flex justify-center items-center relative h-full py-4">
          {/* left button */}
          <AnimatePresence>
            <motion.div>
              <button
                onClick={handleSwipeLeft}
                className={cn(
                  "border-1 border-red-400 border-2 text-white rounded-full p-2 hover:scale-110 transition-all duration-200 sm:block hidden",
                  hasBeenSwiped && "sm:hidden"
                )}
              >
                <IoMdClose className="sm:w-8 sm:h-8 " fill="red" />
              </button>
            </motion.div>
          </AnimatePresence>
          {/* main card image */}
          <div className="flex flex-col items-center justify-center h-96 w-[70vw] sm:h-[50vh] sm:w-[15vw] mb-6 rounded-3xl mx-16">
            <motion.img
              transition={{
                duration: 0.9,
                type: "spring",
                stiffness: 300,
                ease: "easeIn",
              }}
              dragElastic={0.9}
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
              src={"/assets/flower.svg"}
              alt="card image"
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
              <AnimatePresence>
                {showButton && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <button
                      onClick={handleSwipeLeft}
                      className={cn(
                        "border-1 border-red-400 border-2 text-white rounded-full p-2 hover:scale-110 transition-all duration-200 mx-4",
                        hasBeenSwiped && "sm:hidden"
                      )}
                    >
                      <IoMdClose className="sm:w-8 sm:h-8 " fill="red" />
                    </button>

                    <button
                      onClick={handleSwipeRight}
                      className={cn(
                        "border-1 border-teal-300 border-2 text-white rounded-full p-2 hover:scale-110 transition-all duration-200 mx-4",
                        hasBeenSwiped && "sm:hidden"
                      )}
                    >
                      <FaHeart className="text-teal-300 sm:w-8 sm:h-8" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          {showButton && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={handleSwipeRight}
                className={cn(
                  "border-1 border-teal-300 border-2 text-white rounded-full p-2 hover:scale-110 transition-all duration-200 sm:block hidden",
                  hasBeenSwiped && "sm:hidden"
                )}
              >
                <FaHeart className="text-teal-300 sm:w-8 sm:h-8" />
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

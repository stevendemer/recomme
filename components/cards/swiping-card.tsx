"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { use, useEffect, useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import { FaHeart } from "react-icons/fa";
import { X, HeartIcon } from "lucide-react";

export default function SwipingCard({
  value,
  onChange,
}: {
  value?: number[];
  onChange?: (value: number[]) => void;
}) {
  const [showButton, setShowButton] = useState(true);
  const [hasBeenSwiped, setHasBeenSwiped] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 0, 150], [-18, 0, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const background = useTransform(
    x,
    [-150, 0, 150],
    ["#dc2626", "rgba(0,0,0,0)", "#4ade80"]
  );

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (Math.abs(x.get()) > 100) {
      if (x.get() > 0) {
        console.log("swiped right");
      } else {
        console.log("swiped left");
      }
    }
  };

  return (
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
        animate={{
          transition: { duration: 0.5, type: "spring" },
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <div className="flex justify-center items-center relative h-full py-4">
        {/* left button */}
        <motion.div>
          <button
            className={cn(
              "border-1 border-red-400 border-2 text-white rounded-full p-2 hover:scale-110 transition-all duration-200 sm:block hidden",
              hasBeenSwiped && "sm:hidden"
            )}
          >
            <X className="sm:w-8 sm:h-8 " fill="red" />
          </button>
        </motion.div>
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
              rotate,
            }}
            dragConstraints={{ left: 0, right: 0 }}
            drag="x"
            src={"/assets/flower.svg"}
            alt="card image"
            className="object-cover object-center h-full rounded-3xl w-full"
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
            {showButton && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <button
                  className={cn(
                    "border-1 border-red-400 border-2 text-white rounded-full p-2 hover:scale-110 transition-all duration-200 mx-4",
                    hasBeenSwiped && "sm:hidden"
                  )}
                >
                  <X className="size-6" fill="red" />
                </button>

                <button
                  className={cn(
                    "border-1 border-teal-300 border-2 text-white rounded-full p-2 hover:scale-110 transition-all duration-200 mx-4",
                    hasBeenSwiped && "sm:hidden"
                  )}
                >
                  <HeartIcon className="text-teal-300 size-6" />
                </button>
              </motion.div>
            )}
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
              className={cn(
                "border-1 border-teal-300 border-2 text-white rounded-full p-2 hover:scale-110 transition-all duration-200 sm:block hidden",
                hasBeenSwiped && "sm:hidden"
              )}
            >
              <HeartIcon className="text-teal-300 size-6" />
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

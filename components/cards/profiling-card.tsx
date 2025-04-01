"use client";

import {
  useState,
  useCallback,
  useRef,
  PropsWithChildren,
  useEffect,
} from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  animate,
  PanInfo,
  AnimatePresence,
  useDragControls,
} from "motion/react";
import Image from "next/image";
import { Heart, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { formAnswersAtom } from "@/app/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export interface ICard {
  text: string;
  src: string;
}

export default function ProfilingCard({
  onVote,
  data,
  currentIndex,
  totalCards,
}: any) {
  const [exitPosition, setExitPosition] = useState<"left" | "right" | "">("");
  const [isLast, setIsLast] = useState(false);
  const [needsReset, setNeedsReset] = useState(false);
  const [exitX, setExitX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const controls = useDragControls();
  const cardElem = useRef(null);
  const { push } = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const [answers, setAnswers] = useAtom(formAnswersAtom);

  const rotate = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const offsetBoundary = 200;

  useEffect(() => {
    if (needsReset) {
      const resetTimer = setTimeout(() => {
        x.set(0);
        setExitPosition("");
        // controls.set({
        //   x: 0,
        //   rotate: 0,
        //   opacity: 1,
        // });
        setNeedsReset(false);
      }, 200);

      return () => clearTimeout(resetTimer);
    }
  }, [needsReset, controls, x]);

  const handleSwipe = async (direction: "left" | "right") => {
    setExitPosition(direction);

    // await controls.start({
    //   x: direction === "left" ? -offsetBoundary : offsetBoundary,
    //   // rotate: direction === "left" ? -18 : 18,
    //   opacity: 0,
    //   transition: {
    //     duration: 0.3,
    //     type: "tween",
    //     stiffness: 200,
    //     damping: 30,
    //   },
    // });

    onVote();

    // reset after the card is no longer available
    setNeedsReset(true);
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (velocity <= -1 && offset <= offsetBoundary * -1) {
      handleSwipe("left");
    } else if (velocity >= 1 && offset >= offsetBoundary) {
      handleSwipe("right");
      // console.log("swiped right");
    } else {
      // If not strong enough, animate back to center
      animate(x, 0, {
        type: "spring",
        stiffness: 300,
        damping: 20,
      });
    }
  };

  return (
    <motion.div
      layout
      ref={containerRef}
      className="flex flex-col items-center flex-1 w-full h-full"
      initial={{
        scale: 0.9,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0.9,
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      {/* Text Section */}
      <h2 className="text-xl sm:text-4xl text-center font-sans text-black px-2 whitespace-normal text-pretty">
        {data.text}
      </h2>

      {/* Main Card Container */}
      <div className="w-full max-w-[70vw] sm:max-w-[50vw] px-4 sm:px-12 relative h-full flex justify-center items-center flex-1">
        {/* Action Buttons */}
        <div className="absolute sm:block hidden left-0 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={() => handleSwipe("left")}
            className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:bg-red-50 transition-colors duration-200 group"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:scale-110 transition-transform duration-200" />
          </button>
        </div>

        <div className="absolute sm:block hidden right-0 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={() => handleSwipe("right")}
            className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:bg-green-50 transition-colors duration-200 group"
          >
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 group-hover:scale-110 transition-transform duration-200" />
          </button>
        </div>

        <AnimatePresence>
          {/* Card Content */}
          <motion.div
            key={currentIndex}
            className="inset-0 touch-none absolute w-full max-w-md m-auto h-full max-h-[80%]"
            dragElastic={0.9}
            ref={cardElem}
            drag="x"
            dragSnapToOrigin
            // animate={controls}
            dragControls={controls}
            // dragConstraints={{
            //   left: 0,
            //   right: 0,
            //   top: 0,
            //   bottom: 0,
            // }}
            initial={{
              opacity: 0,
            }}
            transition={{
              duration: 0.7,
              type: "tween",
              stiffness: 200,
              damping: 30,
            }}
            dragConstraints={containerRef}
            whileDrag={{
              scale: 0.8,
              cursor: "grabbing",
            }}
            whileTap={{
              scale: 0.8,
            }}
            style={{
              x,
              opacity,
              rotate,
            }}
            onDragEnd={handleDragEnd}
            animate={{
              x: exitX,
            }}
          >
            <div className="pointer-events-none relative w-full h-full overflow-hidden">
              <Image
                alt={data.text ?? "alt"}
                className="object-cover object-center w-full h-full rounded-[25px]"
                src={`${process.env.NEXT_PUBLIC_API_URL}${data.src}`}
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                style={{
                  gridColumn: 1,
                  gridRow: 1,
                }}
                width={360}
                height={470}
              />
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-0 group">
          <div className="w-full sm:hidden flex justify-center gap-6 mt-6">
            <button
              onClick={() => handleSwipe("left")}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-red-50 transition-colors duration-200 group"
            >
              <X className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-200" />
            </button>
            <button
              onClick={() => handleSwipe("right")}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-green-50 transition-colors duration-200 group"
            >
              <Heart className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

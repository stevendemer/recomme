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
} from "framer-motion";
import { FaHeart, FaTimes } from "react-icons/fa";
import { Button } from "../ui/button";
import Image from "next/image";
import { useGetElements } from "@/hooks/use-get-elemenets";
import Spinner from "../spinner";
import { Heart, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { formAnswersAtom } from "@/app/store";
import { parseVersionInfo } from "next/dist/server/dev/parse-version-info";
import { useRouter } from "next/navigation";

export interface ICard {
  text: string;
  src: string;
}

export function CardsContainer({ onVote }: { onVote: () => void }) {
  const { data, status, error } = useGetElements("webform_image_select");
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["rgb(242, 46, 82)", "rgba(0, 0, 0, 0)", "#65D8BC"]
  );
  const rotate = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const [velocity, setVelocity] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | undefined>();

  const getDirection = () => {
    return velocity >= 1 ? "right" : velocity <= -1 ? "left" : undefined;
  };

  const getTrajectory = () => {
    setVelocity(x.getVelocity());
    setDirection(getDirection());
  };

  if (status === "pending") {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  }

  if (status === "error") {
    console.error("Error fetching cards ", error);
  }

  if (data) {
    return (
      <div className="grid place-items-center h-screen">
        {/* {data[0]?.images.map((_, index) => { */}
        <motion.div
          style={{
            backgroundColor: background,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
          }}
          transition={{
            duration: 0.8,
            ease: "easeIn",
            type: "spring",
            stiffness: 200,
          }}
        >
          <div className="relative flex justify-center items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-red-500 rounded-md border-red-500 border-2"
            >
              <X size={32} />
            </Button>

            {/* Image */}
            <motion.img
              // src="https://52b0-2a02-85f-e4e7-463e-645-77b6-73b9-ed67.ngrok-free.app/sites/default/files/images/recomme_icons/Component%2016%20(1).png"
              src="/assets/boat.png"
              style={{
                border: "1px solid black",
                x,
                rotate,
                opacity,
                cursor: "grab",
              }}
              className="w-[320px] h-[500px] rounded-sm object-center mx-6"
              onDrag={getTrajectory}
              drag="x"
              dragElastic={0.6}
              dragConstraints={{
                right: 0,
                left: 0,
              }}
              whileTap={{
                cursor: "grabbing",
              }}
              onDragEnd={() => {
                if (Math.abs(x.get()) > 100) {
                  if (x.get() > 0) {
                    onVote();
                  } else {
                    console.log("swiped left");
                    animate(x, 0, { type: "spring", stiffness: 300 });
                  }
                }
              }}
            />

            <Button
              size="icon"
              variant="ghost"
              className="text-[#65D8BC] border-[#65D8BC] border-2 rounded-md"
            >
              <Heart size={32} />
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }
}

export default function ProfilingCard({ onVote, data }: any) {
  const x = useMotionValue(0);
  const cardElem = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitPosition, setExitPosition] = useState<"left" | "right" | "">("");
  const [isLast, setIsLast] = useState(false);
  const router = useRouter();

  const [answers, setAnswers] = useAtom(formAnswersAtom);

  // const [answers, setAnswers] = useState<number[]>([]);
  const [cards, setCards] = useState(data[0].images);

  // useEffect(() => {
  //   if (["left", "right"].includes(exitPosition)) {
  //     // remove the card and store the answer
  //     if (exitPosition === "right") {
  //       console.log("swiped to the right");
  //       setAnswers((pv) => [...pv, currentIndex]);
  //     }
  //     if (exitPosition === "left") {
  //       console.log("swiped to the left");
  //     }

  //     setCurrentIndex((pv) => (pv + 1) % images.length);
  //   }

  //   setExitPosition("");
  // }, [exitPosition]);

  // const cardVariants = {
  //   current: {
  //     opacity: 1,
  //     y: 0,
  //     scale: 1,
  //     transition: { duration: 0.3, ease: "easeIn" },
  //   },
  //   upcoming: {
  //     opacity: 0.5,
  //     y: 67,
  //     scale: 0.9,
  //     transition: { duration: 0.3, ease: "easeIn", delay: 0 },
  //   },
  //   remainings: {
  //     opacity: 0,
  //     y: 20,
  //     scale: 0.9,
  //   },
  //   exit: {
  //     opacity: 0,
  //     x: exitPosition === "left" ? -300 : 300,
  //     y: 40,
  //     rotate: exitPosition === "left" ? -18 : 18,
  //     transition: { duration: 0.3, ease: "easeIn" },
  //   },
  // };

  const rotate = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  // const [direction, setDirection] = useState<"left" | "right" | undefined>();

  const offsetBoundary = 200;

  console.log("atom is ", answers);

  useEffect(() => {
    if (isLast) {
      router.replace("/profiling/range");
    }
  }, [isLast]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const velocity = x.getVelocity();
    const offset = info.offset.x;

    if (Math.abs(offset) > offsetBoundary) {
      if (offset < 0 && offset < offsetBoundary * -1 && velocity <= -1) {
        console.log("swiped left");
        setExitPosition("left");
      } else if (offset > 0 && offset > offsetBoundary && velocity >= 1) {
        console.log("swiped right");
        setExitPosition("right");
        // setAnswers((pv) => [...pv, currentIndex]);
      }

      setTimeout(() => {
        setCurrentIndex((pv) => {
          const newIndex = pv + 1;
          if (newIndex >= cards.length) {
            setIsLast(true);
          }
          return newIndex;
        });
        setExitPosition("");
      }, 200);
    } else {
      animate(x, 0, { type: "spring", stiffness: 300, damping: 20 });
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center h-full w-full gap-y-6 select-none"
      )}
    >
      <AnimatePresence>
        {cards.map((image: any, index: number) => {
          const isActive = index === currentIndex;
          const isExiting = exitPosition && index === currentIndex;
          const isLast = index === cards.length - 1;
          const isUpcoming = index === cards.length - 2;
          const isFinished = index === cards.length;

          return (
            <div
              className={cn(
                "flex-col justify-center items-center w-full h-full space-y-6",
                isActive ? "flex" : "hidden"
              )}
              key={image.text}
            >
              <h2 className="sm:text-3xl text-xl whitespace-normal leading-tight p-2 font-sans text-black max-w-2xl pb-4">
                {isLast ? "Last image" : image.text}
              </h2>
              <div className="relative w-[20rem] sm:w-96 h-[32rem]">
                <motion.div
                  className="absolute top-0 left-0 w-full h-full"
                  dragElastic={0.9}
                  ref={cardElem}
                  drag="x"
                  dragSnapToOrigin
                  dragMomentum={false}
                  dragConstraints={{
                    left: 0,
                    right: 0,
                  }}
                  whileTap={{
                    scale: 0.8,
                    cursor: "grabbing",
                  }}
                  transition={{
                    duration: 0.2,
                    stiffness: 300,
                    damping: 20,
                    type: "spring",
                  }}
                  style={{
                    x,
                    opacity,
                    rotate,
                    zIndex: cards.length - index,
                  }}
                  whileDrag={{
                    cursor: "drag",
                  }}
                  onDragEnd={isActive ? handleDragEnd : undefined}
                >
                  <div className="pointer-events-none">
                    <Image
                      priority
                      fill
                      alt={image.text ?? "alt"}
                      style={{
                        gridRow: 1,
                        gridColumn: 1,
                      }}
                      className="object-cover object-center rounded-sm"
                      src={process.env.NEXT_PUBLIC_API_URL + image.src}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

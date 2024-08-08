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

export default function SwipingCard({
  onSwipe,
}: {
  onSwipe: (direction: "left" | "right") => void;
}) {
  const [exit, setExit] = useState(0);
  const x = useMotionValue(0);
  const animControls = useAnimation();
  const rotateValue = useTransform(x, [-150, 150], [-25, 25]);
  const { toast } = useToast();

  const opacity = useTransform(
    x,
    [-160, -150, -140, -130, -120, -100, 0, 100, 120, 130, 140, 150, 160],
    [0, 0.4, 0.5, 0.6, 0.7, 0.8, 1, 0.8, 0.7, 0.6, 0.5, 0.4, 0]
  );
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 100;

    if (info.offset.x > threshold) {
      animControls.start({ x: 1500 }).then(() => {
        setExit(1000);
        toast({
          description: "Swipped right",
        });
      });
      onSwipe("right");
    } else if (info.offset.x < -threshold) {
      animControls.start({ x: -1500 }).then(() => {
        setExit(-1000);
        toast({
          description: "Swipped left",
        });
        onSwipe("left");
      });
    } else {
      animControls.start({ x: 0 });
    }
  };

  return (
    <div className={cn("w-[60vw] h-[60vh] rounded-lg mt-4")}>
      <div className="flex flex-col items-center my-4 relative mx-auto h-full py-4">
        {/* main card image */}
        <motion.img
          transition={{
            duration: 0.3,
            type: "tween",
            stiffness: 100,
            ease: "easeInOut",
          }}
          dragElastic={0.3}
          style={{ x, opacity, rotate: rotateValue }}
          dragConstraints={{ left: 0, right: 0 }}
          drag="x"
          src={"/assets/hacker.png"}
          alt="card image"
          className="object-cover object-center mx-auto h-full rounded-3xl cursor-grab"
          animate={animControls}
          dragDirectionLock
          onDragEnd={handleDragEnd}
          whileTap={{
            scale: 0.9,
          }}
        />
      </div>
    </div>
  );
}

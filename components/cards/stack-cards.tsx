"use client";

import { motion } from "framer-motion";
import { AnimatePresence, useAnimation } from "framer-motion";
import { useState } from "react";
import SwipingCard from "./swiping-card";

type Props = {
  cards: { title: string; image: string }[];
  onComplete: () => void;
  onSwipe: (x: string) => void;
};

export default function CardsStack({ cards, onComplete, onSwipe }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const controls = useAnimation();

  const handleSwipe = async (direction: string) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    if (direction === "left") onSwipe("left");
    if (direction === "right") onSwipe("right");

    await controls.start({
      x: direction === "left" ? -1500 : 1500,
      opacity: 0,
    });

    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      onComplete();
    }

    controls.set({ x: 0, opacity: 1 });
    setIsTransitioning(false);
  };

  return (
    <div className="relative w-full h-full z-20">
      <AnimatePresence>
        {cards.slice(currentIndex).map((card, index) => (
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0"
            key={card.title}
            initial={{
              scale: 1 - index * 0.05,
              y: index * 20,
              zIndex: cards.length - index,
            }}
            animate={{
              scale: 1 - index * 0.05,
              y: index * 20,
              zIndex: cards.length - index,
            }}
            exit={{ x: 1500, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* <SwipingCard onSwipe={handleSwipe} /> */}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

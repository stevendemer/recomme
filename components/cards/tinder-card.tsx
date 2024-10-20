import { useState } from "react";
import {
  motion,
  PanInfo,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FaHeart, FaTimes } from "react-icons/fa";

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
    <motion.div className="relative rounded-2xl overflow-hidden mt-4 p-4 flex justify-center items-center">
      {showCard && (
        <motion.div
          onDragEnd={handleDragEnd}
          dragConstraints={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          drag={drag}
          animate="animate"
          exit="exit"
          custom={exitX}
          transition={frontCard ? variantsFrontCard : variantsBackCard}
          style={{
            cursor: "grab",
          }}
          className="relative w-[42vw] sm:h-[50vh] sm:w-[20vw] h-96  rounded-3xl flex flex-col items-center justify-center p-4 mx-20 z-20"
        >
          <motion.img
            dragConstraints={{ left: 0, right: 0 }}
            initial={{ scale: 1 }}
            style={{
              x,
            }}
            transition={{ duration: 1.2 }}
            dragElastic={0.9}
            dragDirectionLock
            whileTap={{
              cursor: "grabbing",
            }}
            src="/assets/hacker.png"
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>
      )}

      {/* Buttons for like and dislike */}
      {showCard && (
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-full flex justify-between items-center">
          {/* Dislike Button */}
          <button
            className="border-red-500 border p-4 rounded-full text-red-500"
            onClick={() => swipe("left")}
          >
            <FaTimes size={24} />
          </button>

          {/* Like Button */}
          <button
            className="border-green-500 border p-4 rounded-full text-green-500"
            onClick={() => swipe("right")}
          >
            <FaHeart size={24} />
          </button>
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
    </motion.div>
  );
}

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaHeart, FaTimes } from "react-icons/fa";

export default function TinderCard() {
  const [showCard, setShowCard] = useState(true);
  const controls = useAnimation();

  const swipe = async (direction: "left" | "right") => {
    const x = direction === "right" ? 300 : -300;
    await controls.start({ x, opacity: 0, transition: { duration: 0.5 } });
    setShowCard(false); // Hide card after swipe
  };

  return (
    <div className="h-fit rounded-2xl overflow-hidden relative mt-4 p-4 flex justify-center items-center">
      {showCard && (
        <motion.div
          className="relative w-[40vw] sm:h-[50vh] sm:w-[15vw] h-96 bg-white rounded-xl flex flex-col items-center justify-center p-4 mx-20"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(event, info) => {
            if (info.offset.x > 100) swipe("right");
            else if (info.offset.x < -100) swipe("left");
          }}
          initial={{ scale: 1 }}
          animate={controls}
          transition={{ duration: 1.2 }}
        >
          <motion.img
            src="https://placekitten.com/300/300"
            alt="Random cat"
            className="w-full h-64 object-cover rounded-t-xl"
            transition={{
              duration: 0.9,
              type: "spring",
              stiffness: 300,
              ease: "easeIn",
            }}
            dragElastic={0.9}
            dragConstraints={{ left: 0, right: 0 }}
            drag="x"
            whileTap={{ scale: 0.9 }}
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
    </div>
  );
}

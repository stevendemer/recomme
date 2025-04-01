"use client";
import { motion } from "motion/react";

export default function Swipe({
  src,
  title,
  sub,
}: {
  src: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full p-6 shadow-lg rounded-2xl">
        <div className="flex items-center justify-center mb-6 flex-col w-full max-w-7xl h-fit">
          <div className="flex items-center justify-center mb-6">
            <div className="relative sm:w-[15vw] w-[70vw] h-[40vh] bg-gray-200 rounded-2xl shadow-lg">
              {/* image section */}
              <div className="relative flex-grow h-full w-full flex justify-center">
                <motion.img
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    stiffness: 300,
                  }}
                  dragElastic={0.4}
                  dragConstraints={{ left: 0, right: 0 }}
                  alt="card image"
                  dragDirectionLock
                  src={src}
                />
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-gray-500">{sub}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-16">
            <button className="flex items-center justify-center w-12 h-12 text-red-500 border-2 border-red-500 rounded-full">
              X
            </button>
            <button className="flex items-center justify-center w-12 h-12 text-green-500 border-2 border-green-500 rounded-full">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

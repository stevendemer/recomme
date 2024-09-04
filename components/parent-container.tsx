"use client";
import { ReactNode, useRef } from "react";
import Steps from "./steps";

function ParentContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto bg-white/30 text-neutral-500 sm:w-[80vw] w-[90vw] h-[90vh] backdrop-blur-lg rounded-3xl flex flex-col justify-center items-center pt-8 mt-4">
      <div className="bg-white/80 w-[80vw] h-[80vh] sm:w-[75vw] my-5 rounded-3xl shadow-xl z-10 mb-10 relative">
        {children}
      </div>
    </div>
  );
}

export default ParentContainer;

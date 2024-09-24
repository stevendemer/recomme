"use client";
import { ReactNode, useRef } from "react";
import Steps from "./steps";
import SubmitButton from "./submit-button";

function ParentContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto bg-white/30 text-neutral-500 sm:w-[65vw] w-[90vw] h-[90vh] backdrop-blur-lg rounded-3xl flex flex-col justify-center items-center pt-6 mt-4">
      <div className="bg-white/80 w-[80vw] h-[60vh] sm:w-[60vw] my-6 rounded-3xl shadow-xl z-10 mb-2 relative flex-1">
        {children}
      </div>
    </div>
  );
}

export default ParentContainer;

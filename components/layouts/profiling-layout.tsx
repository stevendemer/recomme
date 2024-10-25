import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { Button } from "../ui/button";
import SubmitButton from "../submit-button";

// Profiling layout for the profiling page (cards, sliders, etc.)
export default function ProfilingLayout({ children }: PropsWithChildren) {
  return (
    <section
      className={cn(
        "min-h-screen grid place-items-center gradient-bg backdrop-blur-lg p-2 sm:p-4 lg:p-6"
      )}
    >
      <div className="w-full flex items-center justify-center max-w-[70vw] max-h-[70vh]">
        <div className="bg-white/30 h-full text-neutral-500 backdrop-blur-lg rounded-3xl w-full flex flex-col p-2 sm:p-4">
          <div className="bg-white/70 w-full rounded-2xl shadow-lg flex flex-col p-4 h-full">
            {/* Main content area with flex-grow */}
            <div className="flex-grow flex justify-center items-center min-h-[300px] md:min-h-[500px]">
              {children}
            </div>
            {/* Submit Button container */}
          </div>
        </div>
      </div>
    </section>
  );
}

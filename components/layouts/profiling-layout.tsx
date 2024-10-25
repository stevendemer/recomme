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
      <div className="w-full max-w-[70vw] max-h-[70vh] flex items-center justify-center h-full">
        <div className="bg-white/30 text-neutral-500 backdrop-blur-lg rounded-3xl w-full flex flex-col p-2 sm:p-4">
          <div className="bg-white/70 w-full rounded-2xl shadow-lg flex flex-col p-4">
            {/* Main content area with flex-grow */}
            <div className="h-full w-full flex justify-center flex-grow min-h-[300px] md:min-h-[800px]">
              {children}
            </div>
            {/* Submit Button container */}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";

interface StepsProps {
  steps: { category: string; count: number }[];
  currentStep: number;
  totalGroups?: number;
  currentGroup?: any;
}

export default function Steps({
  currentStep,
  steps,
  totalGroups,
  currentGroup,
}: StepsProps) {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || steps[0]?.category;
  const currentPage = Number(searchParams.get("page") || 0);

  const getRangeStepsCount = () => {
    console.log("current group", currentGroup);
    if (currentGroup) {
      return currentGroup.items.length;
    }
  };

  const getStepsToShow = () => {
    if (type === "range") {
      return getRangeStepsCount();
    } else {
      // For other types, use the category count
      const currentCategory = steps.find((s) => s.category === type);
      return currentCategory?.count || 0;
    }
  };

  const stepsCount = getStepsToShow();

  return (
    <nav className="w-full flex shrink-0 flex-col justify-center items-center p-4 mb-3 absolute -top-2 left-0 right-0">
      <ol className="flex flex-row mt-2 flex-nowrap sm:gap-0 sm:gap-x-3 justify-center w-full overflow-x-auto ">
        {Array.from({ length: stepsCount }).map((_, index) => {
          const isActive = index === currentStep;
          const isNext = index === currentStep;
          const isCompleted = index < currentStep;
          const isLast = index === stepsCount - 1;

          return (
            <div
              className="flex items-center justify-center font-mulish"
              key={index}
            >
              <motion.div
                initial={{
                  backgroundColor: "#D1D5DB",
                }}
                animate={{
                  backgroundColor:
                    isActive || isNext
                      ? "#65D9BD"
                      : isCompleted
                      ? "#2A898F"
                      : "#D1D5DB",
                }}
                className={cn(
                  "flex items-center justify-center sm:w-8 sm:h-8 w-6 h-6 rounded-xl font-bold text-gray-400",
                  isActive || isNext || isCompleted ? "text-slate-100" : ""
                )}
              >
                {index + 1}
              </motion.div>
              {!isLast && (
                <div
                  className={cn(
                    "sm:w-8 w-2 border-t-2 border-teal-400 mx-2 rounded-full"
                  )}
                />
              )}
            </div>
          );
        })}
      </ol>
    </nav>
  );
}

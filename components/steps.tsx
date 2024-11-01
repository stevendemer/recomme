"use client";

import { cn } from "@/lib/utils";
import { Dispatch, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useGetElements } from "@/hooks/use-get-elemenets";
import Spinner from "./spinner";
import { useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { ROUTES } from "@/constants/routes";

/**
 * Renders a step navigation component.
 *
 * This component displays a series of steps for navigation, with the current
 * step, next step, and completed steps visually distinguished. It utilizes
 * the Link component for each step to allow users to navigate to a specific
 * step.
 *
 * Props:
 * - category: The category of the steps.
 * - questions: An array of questions related to the steps.
 * - currentQuestion: The currently active question.
 */
export default function Steps({
  currentStep,
  setCurrentStep,
  steps,
}: {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
  steps?: any[];
}) {
  console.log("total steps are ", steps);
  const pathname = usePathname();
  const router = useRouter();
  const [categories, setCategories] = useState([
    "select",
    "webform_image_select",
    "range",
  ]);
  const segments = pathname.split("/");
  const type = segments[segments.length - 1];

  const [currentIndex, setCurrentIndex] = useState(
    type ? categories.indexOf(type) : 0
  );

  useEffect(() => {
    if (steps && currentStep >= steps?.length) {
      const nextIndex = currentIndex + 1;
      if (nextIndex < categories.length) {
        const nextCategory = categories[nextIndex];
        router.replace(`${pathname.replace(type, nextCategory)}`);

        setCurrentStep(0); // Reset step count when changing types
        setCurrentIndex(nextIndex);
      }
    }
  }, [currentStep, steps, currentIndex]);

  return (
    <div className="flex justify-center p-4 mb-3 fixed -top-2 left-0 right-0">
      <div className="flex items-center mt-2">
        {steps?.map((_, index) => {
          const isActive = index + 1 === currentStep;
          const isNext = index + 1 === currentStep + 1;
          const isLast = index === steps.length - 1;

          return (
            <div
              className="flex items-center justify-center font-mulish"
              key={index}
            >
              <div
                className={cn(
                  "flex items-center justify-center sm:w-8 sm:h-8 w-6 h-6 rounded-xl bg-gray-300 text-gray-400/80 font-bold",
                  isActive && "bg-[#2A898F] text-slate-100",
                  isNext && "bg-[#65D9BD] text-slate-100",
                  index + 1 < currentStep && "bg-[#2A898F] text-slate-100"
                )}
              >
                {index + 1}
              </div>
              <div
                className={cn(
                  "w-8 border-t-2 border-teal-400 mx-2 rounded-full",
                  isLast && "hidden"
                )}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

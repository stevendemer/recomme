"use client";
import { useSteps } from "@/app/store";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { act, Dispatch, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import { useGetElements } from "@/hooks/use-get-elemenets";
import Spinner from "./spinner";

interface IProps {
  category: string;
  questions: string[];
  currentQuestion: number;
}

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
}: {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
}) {
  const params = useSearchParams();
  const pathname = usePathname();
  const type = params.get("type");
  const router = useRouter();

  const { data: steps, error, status } = useGetElements(type);
  const [categories, setCategories] = useState([
    "select",
    "webform_image_select",
    "range",
  ]);

  const currentCategoryIndex = categories.indexOf(type) || 0;

  // const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // push updated URL based on category type
    router.push(pathname + `?type=${categories[currentCategoryIndex]}`);
  }, [type]);

  useEffect(() => {
    if (steps) {
      if (currentStep >= steps?.length) {
        if (currentCategoryIndex < categories.length - 1) {
          // move to next category and reset counter
          setCurrentStep(0);
          router.push(
            `${pathname}?type=${categories[currentCategoryIndex + 1]}`
          );
        }
      }
    }
  }, [currentStep, steps, currentCategoryIndex, pathname]);
  if (status === "pending") {
    return (
      <div className="w-full flex justify-center">
        <Spinner />
      </div>
    );
  }

  if (status === "error") {
    console.error(error);
    throw new Error("Error fetching the questions");
  }

  return (
    <div className="flex justify-center p-4 mb-3 fixed -top-2 left-0 right-0">
      <div className="flex items-center mt-2">
        {steps.map((_, index) => {
          const isActive = index + 1 === currentStep;
          const isNext = index + 1 === currentStep + 1;
          const isLast = index === steps.length - 1;

          return (
            <div
              className="flex items-center justify-center font-mulish"
              key={index}
            >
              <Link
                href="#"
                className={cn(
                  "flex items-center justify-center sm:w-8 sm:h-8 w-6 h-6 rounded-xl bg-gray-300 text-gray-400/80 font-bold",
                  isActive && "bg-[#2A898F] text-slate-100",
                  isNext && "bg-[#65D9BD] text-slate-100",
                  index + 1 < currentStep && "bg-[#2A898F] text-slate-100"
                )}
                onClick={() => setCurrentStep(index)}
              >
                {index + 1}
              </Link>
              <div
                className={cn(
                  "w-8 border-t-2 border-teal-400 mx-2 rounded-full",
                  isLast && "hidden"
                )}
              ></div>
            </div>
          );
        })}
        {/* {Array.from({ length: totalSteps ?? 3 }).map((_, index) => {
          const isActive = index + 1 === currentStep;
          const isNext = index + 1 === currentStep + 1;
          const isLast = index === totalSteps - 1;
          return (
            <div
              className="flex items-center justify-center font-mulish"
              key={index}
            >
              <Link
                href="#"
                className={cn(
                  "flex items-center justify-center sm:w-8 sm:h-8 w-6 h-6 rounded-xl bg-gray-300 text-gray-400/80 font-bold",
                  isActive && "bg-[#2A898F] text-slate-100",
                  isNext && "bg-[#65D9BD] text-slate-100",
                  index + 1 < currentStep && "bg-[#2A898F] text-slate-100"
                )}
                onClick={() => setStep(index + 1)}
              >
                {index + 1}
              </Link>
              <div
                className={cn(
                  "w-8 border-t-2 border-teal-400 mx-2 rounded-full",
                  isLast && "hidden"
                )}
              ></div>
            </div>
          );
        })} */}
        {/* {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center justify-center font-mulish"
          >
            <Link
              href="#"
              className={cn(
                "flex items-center justify-center sm:w-8 sm:h-8 w-6 h-6 rounded-xl bg-gray-300 text-gray-400/80 font-bold",
                step.active && "bg-[#2A898F] text-slate-100"
              )}
            >
              {step.label}
            </Link>
          </div> */}
        {/* ))} */}
      </div>
      {/* <Button onClick={handleNextStep}>Next</Button> */}
    </div>
  );
}

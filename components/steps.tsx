"use client";
import { useSteps } from "@/app/store";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { act, useEffect, useState } from "react";
import { Textarea } from "./ui/textarea";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";

export default function Steps({
  currentStep,
  totalSteps,
  setStep,
}: {
  currentStep: number;
  totalSteps: number;
  setStep: (x: number) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pathname = usePathname();
  const [steps, setSteps] = useState([]);

  console.log("current step is ", currentStep);

  const navigationLinks = [
    {
      url: "/first",
      name: 1,
    },
    {
      url: "/second",
      name: 2,
    },
    {
      url: "/third",
      name: 3,
    },
  ];

  return (
    <div className="flex items-center justify-center p-4">
      <div className="flex items-center">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isActive = index + 1 === currentStep;
          const isNext = index + 1 === currentStep + 1;
          const isLast = index === totalSteps - 1;
          return (
            <div className="flex items-center justify-center" key={index}>
              <Link
                href="#"
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-xl bg-gray-300 text-gray-400/80 font-bold",
                  isActive && "bg-[#2A898F] text-slate-100",
                  isNext && "bg-teal-200 text-slate-100",
                  index + 1 < currentStep && "bg-[#2A898F] text-slate-100"
                )}
                onClick={() => setStep(index + 1)}
              >
                {/* {index < currentStep ? <Check size={20} /> : index + 1} */}
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
      </div>
    </div>
  );
}

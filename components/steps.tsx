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
import { useState } from "react";
import { Textarea } from "./ui/textarea";

export default function Steps() {
  const { active, increase, setStep } = useSteps();

  return (
    <div className="absolute top-10 w-full flex justify-center">
      <Pagination>
        <PaginationContent className="space-x-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <PaginationLink
              key={index}
              href="#"
              className={cn(
                active === index
                  ? "bg-teal-400 text-slate-50"
                  : "bg-teal-200 text-slate-50",
                "cursor-pointer  border-0"
              )}
              isActive={active === index}
              onClick={() => {
                setStep(index);
              }}
            >
              {index + 1}
            </PaginationLink>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  );
}

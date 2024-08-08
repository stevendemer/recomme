"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Steps() {
  const [step, setStep] = useState(0);

  //   return (
  //     <div className="absolute -top-[50px] w-full flex justify-center items-center">
  //       <div className="flex justify-center items-center">
  //         <Pagination>
  //           <PaginationContent className="space-x-6">
  //             {Array.from({ length: steps }).map((_, index) => (
  //               <PaginationItem
  //                 className={cn(
  //                   active === index
  //                     ? "bg-teal-300 text-slate-100"
  //                     : "bg-muted text-muted-foreground",
  //                   "rounded-lg"
  //                 )}
  //                 key={index}
  //               >
  //                 <PaginationLink
  //                   className={cn(
  //                     active === index && "bg-teal-200 text-foreground",
  //                     "cursor-pointer bg-white/20"
  //                   )}
  //                   isActive={active === index}
  //                 >
  //                   {index}
  //                 </PaginationLink>
  //               </PaginationItem>
  //             ))}
  //           </PaginationContent>
  //         </Pagination>
  //       </div>
  //     </div>
  //   );

  return (
    <div className="absolute top-10 w-full flex justify-center">
      <Pagination>
        <PaginationContent className="space-x-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <PaginationItem
              className={cn(
                step === index
                  ? "bg-teal-300 text-slate-100"
                  : "bg-muted text-muted-foreground",
                "rounded-lg"
              )}
              key={index}
              onClick={() => setStep(index)}
            >
              <PaginationLink
                className={cn(
                  step === index && "bg-teal-200 text-foreground",
                  "cursor-pointer bg-white/10 border-0"
                )}
                isActive={step === index}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  );
}

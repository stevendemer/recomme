import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

export default function MultipleCard() {
  const [isSelected, setSelected] = useState<number[]>([]);

  const handleClick = (index: number) => {
    setSelected((prevSelectedCards) => {
      if (prevSelectedCards.includes(index)) {
        // If the card is already selected, remove it from the list
        return prevSelectedCards.filter((cardIndex) => cardIndex !== index);
      } else {
        // If the card is not selected, add it to the list
        return [...prevSelectedCards, index];
      }
    });
  };

  return (
    <div className="grid grid-cols-4 gap-8 px-14 mb-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-6">
          <div
            onClick={() => handleClick(index)}
            key={index}
            className={cn(
              "bg-background rounded-2xl overflow-hidden shadow-xl p-4 cursor-pointer font-bold transition-all duration-200",
              isSelected.includes(index) && "bg-teal-300"
            )}
          >
            <Image
              src="/assets/hacker.png"
              alt="card image"
              className=" shadow-xl px-2 rounded-2xl"
              width={400}
              height={300}
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  // return (
  //   <section>
  //     <div className="grid md:grid-cols-4 gap-4 lg:gap-10 sm:grid-cols-3 grid-cols-1 w-full h-full">
  //       {Array.from({ length: 8 }).map((_, index) => (
  //         <div
  //           key={index}
  //           className={cn(
  //             "bg-background rounded-[31px] overflow-hidden shadow-xl shadow-black/20 px-2 py-4 cursor-pointer font-bold transition-all duration-200",
  //             isSelected.includes(index) && "bg-teal-200"
  //           )}
  //           onClick={() => handleClick(index)}
  //         >
  //           <Image
  //             src="/assets/hacker.png"
  //             alt="hacker icon"
  //             className="h-full w-full object-cover object-center rounded-2xl mx-auto shadow-xl"
  //             sizes="(max-width: 80vw)"
  //             width={900}
  //             height={200}
  //           />
  //           <div className="p-4">
  //             {/* <h3 className="text-lg font-medium mb-2">First box</h3> */}
  //             <p
  //               className={cn(
  //                 isSelected.includes(index) ? "text-white" : "text-slate-600"
  //               )}
  //             >
  //               This is the paragraph
  //             </p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </section>
  // );
}

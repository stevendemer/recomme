import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Button } from "../ui/button";

export default function MemberCards({
  text,
  icon,
  className,
  members,
}: {
  text: string;
  icon: ReactNode;
  className: string;
  members: number;
}) {
  return (
    <div className="flex items-center  text-slate-700 w-full h-full min-w-xl p-4">
      <div
        className={cn(
          "flex flex-col items-center bg-white rounded-3xl shadow-xl h-full w-full space-y-1 p-2"
        )}
      >
        <div
          className={cn(
            "rounded-full w-fit mx-2 bg-purple-500 h-full flex justify-center p-4 mt-2",
            className
          )}
        >
          {icon}
        </div>

        <h1 className="text-xl font-bold font-rubik">{text}</h1>
        <div className="flex items-center justify-center w-full h-full">
          <button
            className={cn(
              "rounded-full mx-2 text-white font-rubik font-bold p-2 w-1/2 max-w-lg my-4",
              className
            )}
          >
            {members}
          </button>
        </div>
      </div>
    </div>
  );
}

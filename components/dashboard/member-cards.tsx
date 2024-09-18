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
    <div className="flex items-center justify-center text-slate-700 w-full p-6">
      <div
        className={cn(
          "flex flex-col items-center bg-white rounded-[35px] shadow-xl w-full p-4"
        )}
      >
        <div
          className={cn(
            "rounded-full w-fit mx-4 bg-purple-500 h-full flex justify-center p-4 mt-2",
            className
          )}
        >
          {icon}
        </div>

        <h1 className="text-xl font-bold font-rubik">{text}</h1>
        <div className="flex items-center justify-center w-full h-full">
          <button
            className={cn(
              "rounded-full text-white font-rubik font-bold w-full !px-4 !py-2",
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

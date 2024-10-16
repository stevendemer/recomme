import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function MemberCards({
  text,
  icon,
  className,
  members,
}: {
  text: string;
  icon: any;
  className: string;
  members: number;
}) {
  return (
    <div className="flex items-center justify-center py-2 w-60 max-w-80 text-slate-600 bg-white rounded-[40px] font-bold font-rubik">
      <div className="flex flex-col items-center rounded-3xl w-full gap-4">
        <div className={cn("bg-white")}>
          <div
            className={cn(
              "max-w-full flex justify-center mt-2 rounded-full",
              className
            )}
          >
            <div className="relative p-4">
              <Image
                alt="avatar icon"
                src={icon}
                className="object-contain object-center"
                width={40}
                height={20}
              />
            </div>
          </div>
        </div>

        <h1 className="sm:text-xl text-md font-bold font-rubik truncate">
          {text}
        </h1>
        <Button
          className={cn(
            "rounded-full text-white font-rubik font-bold w-20 sm:w-28 px-4 py-2",
            className
          )}
        >
          {members}
        </Button>
      </div>
    </div>
  );
}

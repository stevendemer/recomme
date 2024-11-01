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
    <div className="flex items-center justify-center sm:w-52 p-4 m-2 max-w-60 h-auto text-slate-600 bg-white rounded-lg font-bold font-inter">
      <div className="flex flex-col items-center rounded-sm gap-2">
        <div className={cn("bg-white")}>
          <div
            className={cn(
              "max-w-full flex justify-center mt-2 rounded-sm",
              className
            )}
          >
            <Image
              width={48}
              height={48}
              className="object-cover object-center p-2"
              alt="avatar icon"
              src={icon}
            />
          </div>
        </div>

        <h1 className="sm:text-xl text-md font-bold font-rubik truncate">
          {text}
        </h1>
        <Button
          className={cn(
            "rounded-sm text-white font-rubik font-bold w-20 sm:w-28 py-1 hover:opacity-80",
            className
          )}
        >
          {members}
        </Button>
      </div>
    </div>
  );
}

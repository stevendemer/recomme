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
    <div className="flex items-center justify-center text-slate-600 w-full bg-white rounded-[40px] p-2">
      <div className="flex flex-col items-center rounded-3xl w-full gap-4">
        <div className={cn(" p-2 bg-white")}>
          <div
            className={cn(
              "max-w-full h-auto flex justify-center mt-2 rounded-full",
              className
            )}
          >
            <div className="p-4">{icon}</div>
          </div>
        </div>

        <h1 className="text-xl font-bold font-rubik">{text}</h1>
        <Button
          size="sm"
          className={cn(
            "rounded-full text-white font-rubik font-bold w-28 px-4 py-2",
            className
          )}
        >
          {members}
        </Button>
      </div>
    </div>
  );
}

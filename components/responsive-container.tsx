import { AnimatePresence } from "motion/react";
import { PropsWithChildren, ReactNode } from "react";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function ResponsiveContainer({
  children,
  ...rest
}: ContainerProps) {
  return (
    <AnimatePresence mode="wait">
      <div
        {...rest}
        className="bg-white/50 backdrop-blur-sm rounded-sm p-4 lg:p-6 w-full max-w-screen-xl h-[80vh]"
      >
        <div className=" bg-white/60 backdrop-blur-sm backdrop-filter w-full rounded-sm shadow-lg p-1 h-full grid place-items-center">
          <div className="w-full h-full overflow-y-auto grid place-items-center scrollbar-hide">
            <div className="w-full font-body">{children}</div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

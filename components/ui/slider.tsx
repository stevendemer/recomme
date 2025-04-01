"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const gradientColor = () => {
    if (!props.value || !props.value[0]) return "from-amber-200 to-amber-400";

    // Calculate intensity based on first value
    const intensity = (props.value[0] / (props.max || 100)) * 100;

    // Return dynamic gradient classes
    return cn(
      "bg-gradient-to-r",
      intensity <= 25 && "bg-khaki",
      intensity > 25 && intensity <= 50 && "from-amber-200 to-amber-300",
      intensity > 50 && intensity <= 75 && "from-amber-400 to-amber-500",
      intensity > 75 && "bg-goldenrod"
    );
  };

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn("relative w-4 h-4 grow overflow-hidden rounded-full")}
      >
        <SliderPrimitive.Range
          className={cn("absolute h-full", gradientColor())}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-[3rem] w-[3rem] rounded-full  border border-border bg-white shadow-xl shadow-gray-400 ring-offset-background transition-colors cursor-grabbing focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

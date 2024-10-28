"use client";
import Joyride, { TooltipRenderProps } from "react-joyride";
import { Button } from "./ui/button";

export default function CustomTooltip(props: TooltipRenderProps) {
  const {
    backProps,
    closeProps,
    continuous,
    index,
    primaryProps,
    skipProps,
    step,
    tooltipProps,
  } = props;

  return (
    <div
      className="p-4 bg-white text-black rounded-3xl max-w-lg font-body"
      {...tooltipProps}
    >
      {step.title && <h4>{step.title}</h4>}
      <div className="font-rubik leading-tight whitespace-wrap my-6">
        {step.content}
      </div>
      <div className="flex items-center justify-center">
        {continuous && (
          <Button className="w-[12rem]" {...primaryProps}>
            {primaryProps.title}
          </Button>
        )}
      </div>
    </div>
  );
}

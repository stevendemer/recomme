"use client";
import Joyride, { Step } from "react-joyride";

import React from "react";
import { TooltipProvider } from "./ui/tooltip";
import CustomTooltip from "./tooltip";
import Image from "next/image";
import flower from "@/public/assets/flower.svg";

const TOUR_STEPS = [
  {
    target: ".sidebar",
    content: (
      <div className="flex items-center gap-x-3">
        <Image className="relative" src={flower} alt="" />
        <p>Sidebar Navigation</p>
      </div>
    ),
    placement: "right",
    disableBeacon: true,
  },
  {
    target: ".actions",
    content: (
      <div className="flex items-center gap-x-3">
        <Image className="relative mr-2" src={flower} alt="" />
        <p>Actions section</p>
      </div>
    ),

    placement: "bottom",
    disableBeacon: true,
  },
  {
    target: ".members",
    content: (
      <div className="flex items-center gap-x-3">
        <Image className="relative mr-2" src={flower} alt="" />
        <p>Members section</p>
      </div>
    ),

    placement: "bottom",
    disableBeacon: true,
  },
  {
    target: ".graph",
    content: (
      <div className="flex items-center gap-x-3">
        <Image className="relative  mr-2" src={flower} alt="" />
        <p>Graph summary</p>
      </div>
    ),

    placement: "top",
    disableBeacon: true,
  },
  {
    target: ".recom",
    content: (
      <div className="flex items-center gap-x-3">
        <Image className="relative mr-2" src={flower} alt="" />
        <p>Recommendations section</p>
      </div>
    ),

    placement: "left",
    disableBeacon: true,
  },
] as Step[];

export default function Tour() {
  return (
    <TooltipProvider>
      <Joyride
        steps={TOUR_STEPS}
        continuous={true}
        showProgress={false}
        tooltipComponent={CustomTooltip}
        run
      />
    </TooltipProvider>
  );
}

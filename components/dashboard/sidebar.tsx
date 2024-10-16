import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SubmitButton from "../submit-button";
import Image from "next/image";
import { Button } from "../ui/button";
import ToolTipMessage from "../tooltip-message";

export default function DashboardSidebar() {
  return (
    <TooltipProvider>
      <aside className="h-screen sm:w-96 rounded-[43px] bg-white/30 p-8 mx-auto">
        <div className="bg-white h-full shadow-xl text-black sm:w-72 rounded-[50px] p-4 mx-4 my-2">
          <div className="flex flex-col h-full p-4">
            <div className="relative">
              <Image
                alt="alec logo"
                src={"/assets/alec.svg"}
                className="object-cover object-center"
                width={320}
                height={200}
              />
            </div>
            <div className="flex flex-col pt-16 space-y-4">
              <Tooltip>
                <div className="text-lg font-light text-slate-500 mb-2">
                  Menu
                </div>
                <TooltipTrigger asChild>
                  <button className="flex items-center text-slate-400">
                    <Image
                      alt=""
                      src="/assets/home.svg"
                      width={23}
                      height={23}
                    />
                    <span className="mx-2 font-light transition-all duration-200 hover:opacity-60">
                      Home
                    </span>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <ToolTipMessage
                    text={
                      "lorem ipsume lorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsume"
                    }
                  />
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="flex items-center text-slate-400">
                    <Image
                      width={23}
                      height={23}
                      src="/assets/members.svg"
                      alt=""
                    />
                    <span className="mx-2 font-light transition-all duration-200 hover:opacity-60">
                      Members
                    </span>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <ToolTipMessage
                    text={
                      "lorem ipsume lorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsume"
                    }
                  />
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="flex items-center  text-slate-400">
                    <Image
                      alt=""
                      width={23}
                      height={23}
                      src="/assets/recommendation.svg"
                    />

                    <span className="mx-2 font-light hover:opacity-60 transition-all duration-200">
                      Recommendation
                    </span>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <ToolTipMessage
                    text={
                      "lorem ipsume lorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsume"
                    }
                  />
                </TooltipContent>
              </Tooltip>
              <span className="pt-8 font-light text-slate-500">Settings</span>
              <button className="flex items-center  text-slate-400">
                <Image
                  alt=""
                  src="/assets/profile.svg"
                  width={20}
                  height={20}
                />
                <span className="mx-2 font-light transition-all duration-200 hover:opacity-60">
                  Profile
                </span>
              </button>
              <button className="flex items-center  text-slate-400">
                <Image alt="" src="/assets/faq.svg" width={23} height={23} />
                <span className="mx-2 font-light transition-all duration-200 hover:opacity-60">
                  FAQ&apos;s
                </span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </TooltipProvider>
  );
}

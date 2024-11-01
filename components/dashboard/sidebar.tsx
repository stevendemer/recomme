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
import alec from "@/public/assets/alec.svg";
import home from "@/public/assets/home.svg";
import members from "@/public/assets/members.svg";
import recommendation from "@/public/assets/recommendation.svg";
import profile from "@/public/assets/profile.svg";
import faq from "@/public/assets/faq.svg";

/**
 * The main sidebar component for the dashboard.
 *
 * This component contains the main menu items as well as the logo and some
 * other visual elements.
 *
 * @returns The main sidebar component.
 */
export default function DashboardSidebar() {
  return (
    <TooltipProvider>
      {/* <aside className="transition-transform rounded-sm bg-white/30 p-6 sm:w-96 h-full flex flex-col flex-shrink-0 font-mulish"> */}
      <aside className="transition-transform rounded-sm bg-white/30 p-6 sm:w-96 h-full flex flex-col font-mulish flex-shrink-0">
        <div className="bg-white shadow-xl text-black sm:w-80 rounded-[50px] mx-auto w-full flex flex-col h-full">
          <div className="flex flex-col h-full p-6">
            <div className="relative">
              <Image
                alt="alec logo"
                src={alec}
                className="object-cover object-center"
                width={320}
                height={200}
                priority
              />
            </div>
            <div className="flex flex-col pt-16 p-4 space-y-4 flex-grow">
              <Tooltip>
                <div className="text-lg font-light text-slate-500 mb-2">
                  Menu
                </div>
                <TooltipTrigger asChild>
                  <button className="flex items-center text-slate-400">
                    <Image alt="" width={23} height={23} src={home} />
                    <span className="mx-2 font-light transition-all duration-200 hover:opacity-60">
                      Home
                    </span>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <ToolTipMessage>
                    Lorem ipsume lorem ipsumelorem ipsumelorem ipsumelorem
                    ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem
                    ipsumelorem ipsumelorem ipsume
                  </ToolTipMessage>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="flex items-center text-slate-400">
                    <Image width={23} height={23} src={members} alt="" />
                    <span className="mx-2 font-light transition-all duration-200 hover:opacity-60">
                      Members
                    </span>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <ToolTipMessage>
                    Lorem ipsume lorem ipsumelorem ipsumelorem ipsumelorem
                    ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem
                    ipsumelorem ipsumelorem ipsume
                  </ToolTipMessage>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="flex items-center  text-slate-400">
                    <Image alt="" width={23} height={23} src={recommendation} />

                    <span className="mx-2 font-light hover:opacity-60 transition-all duration-200">
                      Recommendation
                    </span>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <ToolTipMessage>
                    Lorem ipsume lorem ipsumelorem ipsumelorem ipsumelorem
                    ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem
                    ipsumelorem ipsumelorem ipsume
                  </ToolTipMessage>
                </TooltipContent>
              </Tooltip>
              <span className="pt-8 font-light text-slate-500">Settings</span>
              <button className="flex items-center  text-slate-400">
                <Image alt="" width={20} height={20} src={profile} />
                <span className="mx-2 font-light transition-all duration-200 hover:opacity-60">
                  Profile
                </span>
              </button>
              <button className="flex items-center  text-slate-400">
                <Image alt="" src={faq} width={23} height={23} />
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

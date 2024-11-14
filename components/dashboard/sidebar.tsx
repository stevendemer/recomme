import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import SubmitButton from "../submit-button";
import Image from "next/image";
import {Button} from "../ui/button";
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
            <aside className="h-full">
                <div className="bg-white/30 rounded-lg p-3 h-full">
                    <div className="bg-white/60 shadow-xl rounded-lg h-full w-[280px] flex flex-col">
                        {/* Content Container */}
                        <div className="flex flex-col h-full p-4">
                            {/* Logo Section - Fixed Height */}
                            <div className="relative w-full h-32 flex-shrink-0">
                                <Image
                                    alt="alec logo"
                                    src={alec}
                                    className="object-contain"
                                    fill
                                    priority
                                />
                            </div>

                            {/* Menu Section - Scrollable */}
                            <div className="flex flex-col flex-1 mt-8 space-y-4 font-mulish overflow-y-auto">
                                {/* Menu Items */}
                                <div className="space-y-4 px-2">
                                    <div className="text-lg font-light text-slate-500">
                                        Menu
                                    </div>

                                    <div className="space-y-2">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <button
                                                    className="flex items-center text-slate-400 w-full hover:bg-white/50 p-2 rounded-lg transition-colors">
                                                    <Image alt="" width={20} height={20} src={home}/>
                                                    <span className="ml-3 font-light">
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
                                                <button
                                                    className="flex items-center text-slate-400 w-full hover:bg-white/50 p-2 rounded-lg transition-colors">
                                                    <Image width={20} height={20} src={members} alt=""/>
                                                    <span className="ml-3 font-light">
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
                                                <button
                                                    className="flex items-center text-slate-400 w-full hover:bg-white/50 p-2 rounded-lg transition-colors">
                                                    <Image alt="" width={20} height={20} src={recommendation}/>
                                                    <span className="ml-3 font-light">
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
                                    </div>

                                    {/* Settings Section */}
                                    <div className="space-y-2 pt-4">
                                        <div className="text-lg font-light text-slate-500">
                                            Settings
                                        </div>

                                        <button
                                            className="flex items-center text-slate-400 w-full hover:bg-white/50 p-2 rounded-lg transition-colors">
                                            <Image alt="" width={20} height={20} src={profile}/>
                                            <span className="ml-3 font-light">
                                                Profile
                                            </span>
                                        </button>

                                        <button
                                            className="flex items-center text-slate-400 w-full hover:bg-white/50 p-2 rounded-lg transition-colors">
                                            <Image alt="" src={faq} width={20} height={20}/>
                                            <span className="ml-3 font-light">
                                                FAQ&apos;s
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </TooltipProvider>
    );
}
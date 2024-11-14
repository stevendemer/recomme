import DashboardSidebar from "@/components/dashboard/sidebar";
import {Metadata} from "next";
import React, {PropsWithChildren} from "react";
import "../globals.css";
import {cn} from "@/lib/utils";
import dynamic from "next/dynamic";

import {Inter, Ramaraja, Mulish, Rubik} from "next/font/google";

const Tour = dynamic(() => import("../../components/tour"), {ssr: false});

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["400", "600"],
    variable: "--font-body",
});

const inter = Inter({subsets: ["latin"], variable: "--font-inter"});

const ram = Ramaraja({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-sans",
});

const mulish = Mulish({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-mulish",
});

export const metadata: Metadata = {
    title: "Recomme | Dashboard",
    icons: {
        icon: "/assets/flower.svg",
    },
};


export default function DashboardLayout({children}: PropsWithChildren) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={cn(
                "antialiased bg-gray-200",
                rubik.variable,
                ram.variable,
                inter.variable,
                mulish.variable
            )}
        >
        <div className="gradient-bg font-rubik h-screen w-full overflow-hidden">
            <div className="h-full w-full mx-auto p-2 sm:p-3 md:p-4">
                <div className="flex h-full gap-2 sm:gap-3 md:gap-4">
                    {/* Tour Component */}
                    <Tour/>

                    {/* Sidebar - Hidden on mobile */}
                    <div className="hidden sm:block flex-shrink rounded-sm">
                        <DashboardSidebar/>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 min-w-0 font-body relative">
                        <div className="absolute inset-0 bg-white/10 rounded-lg p-2 sm:p-3 md:p-4">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}
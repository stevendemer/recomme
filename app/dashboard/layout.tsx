import DashboardSidebar from "@/components/dashboard/sidebar";
import { Metadata } from "next";
import React, { PropsWithChildren } from "react";
import "../globals.css";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

import { Inter, Ramaraja, Mulish, Rubik } from "next/font/google";

const Tour = dynamic(() => import("../../components/tour"), { ssr: false });

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased bg-gray-200 overflow-hidden h-full w-full",
          rubik.variable,
          ram.variable,
          inter.variable,
          mulish.variable
        )}
      >
        <div className="gradient-bg font-rubik w-full justify-center  h-svh min-h-svh flex-col items-center flex sm:p-4 ">
          <div className="flex gap-4 items-center w-full justify-center">
            <Tour />
            <div className="hidden sm:flex h-full">
              <DashboardSidebar />
            </div>
            <div className="h-full mr-4 font-body flex-grow">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}

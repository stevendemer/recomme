import DashboardSidebar from "@/components/dashboard/sidebar";
import { Metadata } from "next";
import React, { PropsWithChildren } from "react";
import "../globals.css";
import { Rubik } from "next/font/google";
import { cn } from "@/lib/utils";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Recomme | Dashboard",
};

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/flower.svg" sizes="any" />
      </head>
      <body
        className={cn(
          "antialiased bg-gray-200 overflow-hidden h-screen p-2",
          rubik.variable
        )}
      >
        <div className="gradient-bg font-rubik w-full h-svh max-h-svh flex md:p-8">
          <div className="w-full mx-auto flex gap-8">
            <div className="hidden sm:flex h-full ">
              <DashboardSidebar />
            </div>
            <div className="p-2 h-full flex-1 mr-4 mt-2">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}

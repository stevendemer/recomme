import { Metadata } from "next";
import React, { PropsWithChildren } from "react";
import "../globals.css";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

import { Inter, Ramaraja, Mulish, Rubik } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";

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
          "antialiased bg-gray-200 min-h-screen",
          rubik.variable,
          ram.variable,
          inter.variable,
          mulish.variable
        )}
      >
        <div className="flex h-screen overflow-y-auto gradient-bg font-body justify-center">
          <main className="flex-1 p-4">
            <Tour />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

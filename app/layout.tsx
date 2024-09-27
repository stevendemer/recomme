import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Inter, Ramaraja, Mulish, Rubik } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

const ram = Ramaraja({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ram",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-mulish",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Recomme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" href="/assets/flower.svg" sizes="any" />
      </head>
      <body
        className={cn(
          "bg-slate-200 antiliased min-h-screen",
          mulish.variable,
          ram.variable,
          inter.variable,
          rubik.variable
        )}
      >
        {/* <Script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA1TOwkhouIi0rVLuXqNHUcgz0hgZFWM1M&libraries=places&callback=placesCallback`}
          defer
        /> */}
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

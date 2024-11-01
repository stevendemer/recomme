import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import "../globals.css";

import { Inter, Ramaraja, Mulish, Rubik } from "next/font/google";
import { Providers } from "@/components/providers";
import { Metadata } from "next";

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

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Recomme | Profiling",
  icons: {
    icon: "/assets/flower.svg",
  },

  openGraph: {
    images: [
      {
        url: "/assets/flower.svg",
        width: 1200,
        height: 630,
        alt: "Recomme",
      },
    ],
  },
};

/**
 * ProfilingLayout is a React functional component that serves as a layout
 * wrapper for the profiling page. It provides a structured HTML document
 * with a head section containing a link to an icon and a body with multiple
 * styling classes applied. The layout includes a Providers component for
 * context management and a main content area where children components
 * can be rendered. The layout is designed with a gradient background,
 * backdrop blur, and responsive flexbox styling to center the content
 * both vertically and horizontally on the screen.
 *
 * @param {PropsWithChildren} props - The component's children elements
 *                                    to be rendered within the layout.
 */
export default function ProfilingLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body
        className={cn(
          "bg-gray-200 antiliased",
          rubik.variable,
          ram.variable,
          inter.variable,
          mulish.variable
        )}
      >
        <Providers>
          <div className="min-h-screen grid place-items-center gradient-bg backdrop-blur-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <div className="bg-white/30 h-full text-neutral-500 backdrop-blur-lg rounded-3xl w-full flex flex-col sm:pt-16 pt-12 pb-4 px-4 max-w-[90vw] sm:max-w-[60vw] max-h-[90vh]">
                <div className="bg-white/70 w-full rounded-2xl shadow-lg flex flex-col p-2 h-full">
                  <div className="flex items-center h-full justify-between overflow-hidden">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

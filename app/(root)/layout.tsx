import type { Metadata } from "next";
import "../globals.css";
import { cn } from "@/lib/utils";

import { Inter, Ramaraja, Mulish, Rubik } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers";

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
  title: {
    template: "Recomme | %s",
    default: "Recomme",
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn(
          "bg-gray-200 antialiased",
          mulish.variable,
          ram.variable,
          inter.variable,
          rubik.variable
        )}
      >
        <Providers>
          <main className="gradient-bg backdrop-blur-lg  p-2 flex justify-center items-center h-full relative">
            <div className="bg-white/30 backdrop-blur-lg rounded-sm p-4 lg:p-6 h-full w-full max-w-screen-xl max-h-[80%]">
              <div className=" bg-white/70 w-full rounded-sm shadow-lg p-1 h-full flex flex-col items-center">
                <div className="m-auto flex flex-col items-center justify-center w-full">
                  {children}
                </div>
              </div>
            </div>
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

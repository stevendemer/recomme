import type { Metadata } from "next";
import "../globals.css";
import { cn } from "@/lib/utils";

import { Inter, Ramaraja, Mulish, Rubik } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import BackButton from "@/components/back-button";
import ResponsiveContainer from "@/components/responsive-container";

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

export default async function RootLayout({
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
          <div className="absolute inset-0 -z-0 pointer-events-none h-full">
            <div className="absolute top-1/2 left-1/2  w-[200px] h-[700px] rounded-full rotate-12 bg-yellow-400 blur-xl opacity-60 transform -translate-x-1/2 -translate-y-1/2" />

            <div className="absolute top-1/4 left-1/2 w-[200px] h-[550px] rounded-full rotate-45 bg-cyan-400 blur-xl opacity-50 transform -translate-x-1/2 -translate-y-1/2" />

            <div className="absolute bottom-0 top-1/2 rotate-[40deg] right-1/3 w-[300px] h-[550px] rounded-full bg-green-500 blur-xl opacity-50 transform translate-x-1/2 -translate-y-1/2" />
          </div>
          <main className="backdrop-blur-sm p-2 grid place-items-center h-full relative min-h-screen">
            <ResponsiveContainer>{children}</ResponsiveContainer>
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

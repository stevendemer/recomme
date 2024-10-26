import type { Metadata } from "next";
import "../globals.css";
import { cn } from "@/lib/utils";

import { Inter, Ramaraja, Mulish, Rubik } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

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
  title: {
    template: "Recomme | %s",
    default: "Recomme",
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
      <head>
        <link rel="icon" href="/assets/flower.svg" sizes="any" />
      </head>
      <body
        className={cn(
          "bg-gray-200 antiliased",
          mulish.variable,
          ram.variable,
          inter.variable,
          rubik.variable
        )}
      >
        <ThemeProvider>
          <div className="grid min-h-screen place-items-center gradient-bg h-full backdrop-blur-lg">
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <div className="w-full max-w-[60vw] max-h-[90vh] h-full bg-white/30 text-neutral-600 flex flex-col items-center overflow-hidden rounded-3xl p-4 px-4">
                <div className="bg-white/70 w-full flex flex-col p-4 my-2 rounded-3xl shadow-lg h-full overflow-hidden">
                  {/* Main Body */}

                  <div className="flex flex-col items-center h-full w-full overflow-hidden">
                    <div className="flex-grow flex items-center justify-center w-full h-full">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

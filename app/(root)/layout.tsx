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
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type {Metadata} from "next";
import "../globals.css";
import {cn} from "@/lib/utils";

import {Inter, Ramaraja, Mulish, Rubik} from "next/font/google";
import {Toaster} from "@/components/ui/toaster";
import {Providers} from "@/components/providers";

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
                "bg-gray-200 antiliased min-h-screen",
                mulish.variable,
                ram.variable,
                inter.variable,
                rubik.variable,
            )}
        >
        <Providers>
            <main className="h-screen w-full gradient-bg backdrop-blur-lg">
                <div className="h-screen w-full flex items-center justify-center p-8">
                    <div className="w-full h-full max-w-4xl bg-white/30 rounded-3xl p-3 sm:p-6">
                        <div
                            className="bg-white/70 w-full h-full rounded-3xl shadow-lg flex items-center justify-center">
                            <div className="w-full flex flex-col items-center justify-center p-6">
                                <div className="w-[85%] sm:w-[80%] flex items-center">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Toaster/>
        </Providers>
        </body>
        </html>
    );
}
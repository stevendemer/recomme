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
                "bg-gray-200 antiliased scrollbar-hide",
                mulish.variable,
                ram.variable,
                inter.variable,
                rubik.variable,
            )}
        >
        <Providers>
            <main className="min-h-screen grid place-items-center h-full w-full gradient-bg backdrop-blur-lg  scrollbar-hide">
                <div
                    className="h-screen w-full flex items-center justify-center p-8 sm:max-w-screen-xl container mx-auto scrollbar-hide">
                    <div
                        className="bg-white/30 h-full sm:max-h-[90svh] text-neutral-500 backdrop-blur-lg rounded-3xl w-full flex flex-col  pt-12 sm:p-6 sm:m-4 px-4 max-w-[90vw] sm:max-w-[60vw] scrollbar-hide">
                        <div
                            className="bg-white/70 w-full h-[calc(100vh-5rem)] overflow-y-auto scrollbar-hide rounded-3xl shadow-lg flex items-center justify-center">
                            <div className="w-[85%] sm:w-[80%] h-[70%] flex items-center scrollbar-hide">
                                {children}
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
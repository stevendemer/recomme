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
        <html suppressHydrationWarning lang="en" className="h-full">
        <body className={cn(
            "h-full bg-gray-200 antialiased",
            mulish.variable,
            ram.variable,
            inter.variable,
            rubik.variable,
        )}>
        <Providers>
            <div className="h-full min-h-screen w-full gradient-bg backdrop-blur-lg p-4 md:p-8">
                <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-6rem)] mx-auto max-w-screen-xl">
                    <div className="h-full bg-white/30 backdrop-blur-lg rounded-sm p-4 md:p-6">
                        <div className="h-full bg-white/70 w-full rounded-sm shadow-lg">
                            <div className="h-full w-full p-4 md:p-6 overflow-auto">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster/>
        </Providers>
        </body>
        </html>
    );
}
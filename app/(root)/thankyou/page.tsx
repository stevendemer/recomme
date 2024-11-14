import SubmitButton from "@/components/submit-button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import flower from "@/public/assets/flower.svg";
import bigCloud from "@/public/assets/big-cloud.svg";

export default function ThankYou() {
    return (
        <div className="relative flex items-center justify-around flex-col w-full h-full flex-1">
            <div className="flex flex-col items-center justify-around h-full w-full gap-4">
                <div className="flex items-center justify-center relative flex-grow w-full">
                    <div className="relative aspect-video w-full h-full">
                        <Image className={'w-full h-full object-contain object-center'} src={bigCloud}
                               alt="cloud background"/>
                    </div>
                    <div
                        className="absolute z-50 bg-white/30 backdrop-blur-sm p-8 rounded-3xl flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row">
                        <div className="flex gap-x-4 items-start justify-center w-full">
                            <Image priority src={flower} alt="flower" className="px-2"/>
                            {/* <p className="text-black text-lg sm:text-xl font-rubik leading-tight text-center sm:text-left"> */}
                            <p className="text-black text-md sm:text-xl font-body leading-tight text-center sm:text-left">
                                Great! Now, I&apos;m all set to help you achieve your
                                goals. Let&apos; start by evaluating ALEC. Answer
                                every aspect to continue, we need to evaluate your EC
                                maturity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Link href="/profiling">
                <SubmitButton>Continue</SubmitButton>
            </Link>
        </div>
    );
}

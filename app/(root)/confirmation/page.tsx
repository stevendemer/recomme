import React from "react";
import Image from "next/image";
import alec from "@/public/assets/alec.svg";
import flower from "@/public/assets/flower.svg";
import bigCloud from "@/public/assets/big-cloud.svg";
import SubmitButton from "@/components/submit-button";
import Link from "next/link";
import rect from '@/public/assets/rect.png'

export default function ConfirmationPage() {
    return (
        <div className="flex flex-col items-center justify-around h-full w-full scrollbar-hide p-2">
            {/*parent container*/}
            <div className="w-full flex flex-col items-center justify-center flex-1">
                <div className="w-full flex items-center justify-around relative">
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full ">
                        <Image
                            className="object-contain object-center w-full h-full rounded-sm"
                            src={bigCloud}
                            alt="cloud background"
                            priority
                            fill
                        />
                    </div>

                    {/* Content Container */}
                    <div className="w-full flex justify-around relative items-center p-4 md:p-8">
                        <div
                            className="absolute inset-0 w-full h-full flex items-center justify-center -z-10 flex-grow">
                            <Image
                                fill
                                className='object-center object-cover w-full h-full rounded-sm' src={rect}
                                alt={'rect'}/>
                        </div>
                        <div className="flex flex-col items-start justify-around w-full h-full space-y-6 sm:space-y-8">
                            {/* Text and Flower Section */}
                            <div className="flex flex-col sm:flex-row items-start justify-center gap-4 sm:gap-6">
                                <div className="relative aspect-video h-full">
                                    <Image
                                        src={flower}
                                        alt="flower"
                                        className='object-contain object-center'
                                    />
                                </div>
                                <p className="text-black text-lg  sm:text-xl font-normal font-body leading-tight text-center sm:text-left line-clamp-5 text-ellipsis overflow-hidden">
                                    First, let&apos;s get introduced
                                    I have a feeling you might be an
                                    <b> ALEC community manager </b>
                                    looking for some digital magic. Am I on the right track?
                                </p>
                            </div>

                            {/* Alec Image */}
                            <div className="relative mx-auto px-4">
                                <Image
                                    className="object-cover object-center h-auto w-full"
                                    src={alec}
                                    alt="ALEC community manager illustration"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="w-full max-w-md pb-8 mx-auto justify-center flex items-center gap-4">
                <Link href="/registration">
                    <SubmitButton className=" bg-red-400 hover:bg-red-400">
                        No, modify
                    </SubmitButton>
                </Link>
                <Link href="/thankyou">
                    <SubmitButton>
                        Yep, it&apos;s me
                    </SubmitButton>
                </Link>
            </div>
        </div>
    );
}
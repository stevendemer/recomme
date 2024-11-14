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
        <div className="flex flex-col items-center justify-around w-full h-full min-h-[80vh] p-4">
            <div className="flex-1 w-full flex flex-col items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            className="object-contain object-center w-full h-full"
                            src={bigCloud}
                            alt="cloud background"
                            priority
                            fill
                        />
                    </div>

                    {/* Content Container */}
                    <div className="w-full h-full flex items-center p-4 md:p-8">
                        <div className=" absolute inset-0 w-full h-full flex items-center justify-center -z-10">
                            <Image className='object-center object-cover w-full h-full' src={rect} alt={'rect'}/>
                        </div>
                        <div className="flex flex-col items-start justify-center w-full h-full space-y-6 sm:space-y-8">
                            {/* Text and Flower Section */}
                            <div className="flex flex-col sm:flex-row items-start  gap-4 sm:gap-6">
                                <div className="relative aspect-square flex-shrink-0">
                                    <Image
                                        priority
                                        src={flower}
                                        alt="flower"
                                        className="object-cover object-center w-full h-full"
                                    />
                                </div>
                                <p className="text-black text-lg  md:text-xl font-normal font-body leading-tight text-center sm:text-left line-clamp-5 text-ellipsis overflow-hidden">
                                    First, let&apos;s get introduced <br className="hidden sm:block"/>
                                    I have a feeling you might be an
                                    <b> ALEC community manager</b> <br className="hidden sm:block"/>
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
            <div className="w-full max-w-md mx-auto mt-6 flex items-center justify-center gap-4">
                <Link href="/registration">
                    <SubmitButton className="w-full bg-red-400 hover:bg-red-400">
                        No, modify
                    </SubmitButton>
                </Link>
                <Link href="/thankyou">
                    <SubmitButton className="w-full">
                        Yep, it&apos;s me
                    </SubmitButton>
                </Link>
            </div>
        </div>
    );
}
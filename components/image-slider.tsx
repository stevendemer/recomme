"use client";

import React, {useState, useEffect, useMemo} from "react";
import {useSearchParams, usePathname, useRouter} from "next/navigation";
import {useForm, Controller} from "react-hook-form";
import {Slider} from "@/components/ui/slider";
import Image from "next/image";
import SubmitButton from "@/components/submit-button";
import blue from "@/public/assets/blue-globe.png";
import lime from "@/public/assets/lime-globe.png";
import cyan from "@/public/assets/cyan-globe.png";
import orange from "@/public/assets/orange-globe.png";
import {cn, paginate} from "@/lib/utils";

type Inputs = {
    value: number[];
};

export default function ImageSlider({
                                        onVote,
                                        data,
                                    }: {
    onVote: () => void;
    data: any;
}) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [defaultValue, setDefaultValue] = useState(1);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace, push} = useRouter();

    const page = useMemo(() => searchParams.get('page'), [searchParams])

    const form = useForm<Inputs>({
        mode: "onChange",
    });

    useEffect(() => {
        if (!searchParams.get('page')) {
            const params = new URLSearchParams(searchParams);
            params.set('page', '0');
            replace(`${pathname}?${params.toString()}`);
        }
    }, []);

    useEffect(() => {
        const currentQuestion = currentGroup?.items[currentQuestionIndex];
        if (currentQuestion) {
            // const defaultValue = Math.floor((currentQuestion.min + currentQuestion.max));
            form.reset({value: [1]})
        }
    }, [currentQuestionIndex, page]);


    const currentPage = Number(searchParams.get('page')) || 0 as number;
    const currentGroup = data[currentPage];

    const isLastQuestion = () => {
        return currentQuestionIndex === currentGroup?.items.length - 1;
    }

    const isLastGroup = () => {
        return currentPage === data.length - 1;
    }


    const isFinalQuestion = () => {
        return isLastGroup() && isLastQuestion();
    }


    const onSubmit = (data: any) => {

        if (currentQuestionIndex < currentGroup?.items.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            const nextPage = currentPage + 1;
            const params = new URLSearchParams(searchParams);
            params.set('page', nextPage.toString());
            replace(`${pathname}?${params.toString()}`);
            setCurrentQuestionIndex(0);
        }
        onVote();
    };

    const getImage = () => {
        // Create a mapping of images
        const images = {
            0: blue,
            1: orange,
            2: lime,
            3: cyan
        } as any;

        const selectedImage = images[currentPage];

        if (!selectedImage) {
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
                    <span className="text-lg font-bold text-gray-500">No image</span>
                </div>
            );
        }

        return (
            <Image
                src={selectedImage}
                alt={`Question ${currentQuestionIndex} image`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center rounded-2xl"
                quality={75}
            />
        );
    };


    if (!currentGroup) return null;

    return (
        <div className="flex justify-center items-center w-full h-full max-w-5xl">
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid place-items-center gap-8 w-full h-full p-12"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-center text-[#2A898F] font-ram">
                    {currentGroup.title}
                </h1>

                {currentGroup.items.length > 0 ? (
                    <div className="flex flex-col items-stretch justify-evenly gap-4 space-y-12 w-full h-full">
                        <div className="flex items-center gap-x-6 flex-col sm:flex-row gap-8">
                            <div className="w-full md:w-1/2 h-auto relative aspect-video">
                                {getImage()}
                            </div>
                            <div className="w-full md:w-1/2 text-foreground space-y-4">
                                <p className="md:text-3xl text-xl font-light font-mulish">
                                    {currentGroup.items[currentQuestionIndex]?.title}
                                </p>
                            </div>
                        </div>
                        <div className="w-full bg-white rounded-[32rem] p-4 sm:p-6">
                            <Controller
                                name={"value"}
                                control={form.control}
                                rules={{required: true}}
                                render={({field}) => {
                                    return (
                                        <>
                                            <Slider
                                                id="relatability-slider"
                                                min={currentGroup.items[currentQuestionIndex]?.min || 0}
                                                max={currentGroup.items[currentQuestionIndex]?.max || 5}
                                                step={1}
                                                defaultValue={[defaultValue]}
                                                value={field.value}
                                                onValueChange={(value) => {
                                                    console.log(value);
                                                    field.onChange(value);
                                                }}
                                                className={cn("w-full transition-colors duration-200 rounded-xl bg-[#D4D9DF]")}
                                            />
                                        </>
                                    );
                                }}
                            />
                            <div
                                className="flex justify-between text-sm  sm:text-lg text-muted-foreground p-2 font-rubik">
                                <span>Very Unlikely</span>
                                <span>Very Likely</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-2xl text-center w-full">No ranges found.</div>
                )}
                <SubmitButton type="submit">
                    {isLastQuestion() ? "Finish" : "Continue"}
                </SubmitButton>
            </form>
        </div>
    );
}

"use client";
import ProfilingCard from "@/components/cards/profiling-card";
import RadioSelect from "@/components/forms/radio-select";
import ImageSlider from "@/components/image-slider";
import Spinner from "@/components/spinner";
import Steps from "@/components/steps";
import {useGetElements} from "@/hooks/use-get-elemenets";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import React, {useCallback, useEffect, useMemo, useState} from "react";


interface GroupProgress {
    groupIndex: number;
    questionIndex: number;
    totalGroups: number;
    totalQuestionsInGroup: number;
}

export default function Profiling() {
    const [currentStep, setCurrentStep] = useState(0);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace, push} = useRouter();

    const currentType = useMemo(() => searchParams.get("type") ?? "select", [searchParams]);


    // Track group progress for range type
    const [groupProgress, setGroupProgress] = useState<GroupProgress>({
        groupIndex: 0,
        questionIndex: 0,
        totalGroups: 0,
        totalQuestionsInGroup: 0,
    });

    const {data, status, error} = useGetElements();

    useEffect(() => {
        if (currentType === "range" && data?.ranges) {
            setGroupProgress({
                groupIndex: 0,
                questionIndex: 0,
                totalGroups: data.ranges.length,
                totalQuestionsInGroup: data.ranges[Number(searchParams.get('page'))]?.items.length,
            });
        }
    }, [searchParams, data, currentType]);


    useEffect(() => {
        const page = searchParams.get('page');
        if (page && parseInt(page) === 4) {
            push('/csjt');
        }
    }, [pathname, searchParams]);


    if (status === "pending") {
        return (
            <div className="h-screen w-full flex items-center justify-center relative z-30">
                <Spinner size="xl"/>
            </div>
        );
    }

    if (status === "error") {
        console.error(error);
        return (
            <div className="h-screen">
                <div className="flex justify-center items-center">
                    <p className="text-lg text-center font-body">
                        Something went wrong ! Try again later
                    </p>
                </div>
            </div>
        );
    }


    const handleNextStep = () => {
        switch (currentType) {
            case "select":
                if (currentStep + 1 < data.selects.length) {
                    setCurrentStep(currentStep + 1);
                } else {
                    moveToNextType("card");
                }
                break;

            case "card":
                if (currentStep + 1 < data.cards[0].images.length) {
                    setCurrentStep(currentStep + 1);
                } else {
                    moveToNextType("range");
                }
                break;

            case "range":
                handleRangeNavigation();
                break;
        }
    };


    const handleRangeNavigation = () => {
        const {groupIndex, questionIndex, totalGroups, totalQuestionsInGroup} = groupProgress;

        if (questionIndex + 1 < totalQuestionsInGroup) {
            // Move to next question in current group
            setGroupProgress(prev => ({
                ...prev,
                questionIndex: prev.questionIndex + 1
            }));
            setCurrentStep(questionIndex + 1);
        } else if (groupIndex + 1 < totalGroups) {
            // Move to next group
            const nextGroupQuestions = data.ranges[groupIndex + 1]?.items.length || 0;
            setGroupProgress({
                groupIndex: groupIndex + 1,
                questionIndex: 0,
                totalGroups,
                totalQuestionsInGroup: nextGroupQuestions
            });
            setCurrentStep(0);
        }
    };


    const moveToNextType = (nextType: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("type", nextType);
        replace(`${pathname}?${params.toString()}`, {scroll: false});

        setCurrentStep(0);
    };

    const renderStep = (data: any) => {
        switch (currentType) {
            case "select":
                return (
                    <RadioSelect
                        onVote={handleNextStep}
                        data={data?.selects[currentStep]}
                    />
                );
            case "card":
                return (
                    <ProfilingCard
                        data={data?.cards[0].images[currentStep]}
                        onVote={handleNextStep}
                    />
                );
            case "range":
                return (
                    <ImageSlider
                        data={data.ranges}
                        onVote={handleNextStep}
                    />
                );
            default:
                return (
                    <div className="text-2xl text-center w-full">No type found !</div>
                );
        }
    };

    return (
        <div className="w-full flex flex-col justify-between items-center h-full">
            <Steps
                totalGroups={currentType === "range" ? data.ranges.length : undefined}
                currentGroup={data?.ranges[Number(searchParams.get('page'))]}
                steps={data.steps} currentStep={currentStep}/>
            <div
                className="flex flex-col justify-around items-center space-y-4 w-full h-[calc(100vh-120px)] p-6 font-body">
                {renderStep(data)}
            </div>
        </div>
    );
}

"use client";

import {cn} from "@/lib/utils";
import {useSearchParams} from "next/navigation";

interface StepsProps {
    steps: { category: string; count: number }[];
    currentStep: number;
    totalGroups?: number;
    currentGroup?: any;
}

export default function Steps({
                                  currentStep,
                                  steps,
                                  totalGroups,
                                  currentGroup,
                              }: StepsProps) {
    const searchParams = useSearchParams();
    const type = searchParams.get("type") || steps[0]?.category;
    const currentPage = Number(searchParams.get("page") || 0);

    const getRangeStepsCount = () => {
        console.log('current group', currentGroup)
        if (currentGroup) {
            return currentGroup.items.length;
        }
    };

    const getStepsToShow = () => {
        if (type === "range") {
            return getRangeStepsCount();
        } else {
            // For other types, use the category count
            const currentCategory = steps.find((s) => s.category === type);
            return currentCategory?.count || 0;
        }
    };

    const stepsCount = getStepsToShow();

    return (
        <div className="flex flex-col gap-4 justify-center p-4 mb-3 fixed -top-2 left-0 right-0">
            <div className="flex justify-center">
                <div className="flex items-center mt-2">
                    {Array.from({length: stepsCount}).map((_, index) => {
                        const isActive = index === currentStep;
                        const isNext = index === currentStep + 1;
                        const isCompleted = index < currentStep;
                        const isLast = index === stepsCount - 1;

                        return (
                            <div
                                className="flex items-center justify-center font-mulish"
                                key={index}
                            >
                                <div
                                    className={cn(
                                        "flex items-center justify-center sm:w-8 sm:h-8 w-6 h-6 rounded-xl bg-gray-300 text-gray-400/80 font-bold",
                                        isActive && "bg-[#2A898F] text-slate-100",
                                        isNext && "bg-[#65D9BD] text-slate-100",
                                        isCompleted && "bg-[#2A898F] text-slate-100"
                                    )}
                                >
                                    {index + 1}
                                </div>
                                {!isLast && (
                                    <div
                                        className={cn(
                                            "w-8 border-t-2 border-teal-400 mx-2 rounded-full"
                                        )}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
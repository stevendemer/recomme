"use client";

import {Button} from "./ui/button";
import {cn} from "@/lib/utils";
import {IconHeart, IconHeartFilled, IconX} from "@tabler/icons-react";

export default function ApproachRow({
                                        label,
                                        sub,
                                        onAnswer,
                                        answer,
                                    }: {
    label: string;
    sub: string;
    onAnswer: (answer: boolean) => void;
    answer: boolean | null;
}) {
    return (
        <div className="flex items-center rounded-sm justify-between w-full bg-white font-inter shadow-lg">
            <div className="flex flex-col w-full max-w-xl p-1 sm:p-3">
                <h2 className="font-bold text-xl  text-black tracking-wide text-start">
                    {label}
                </h2>
                <p className="font-normal text-black text-sm sm:text-md tracking-wide truncate w-full line-clamp-3 whitespace-break-spaces">
                    {sub}
                </p>
            </div>
            <div className="flex items-center p-2 space-x-2">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onAnswer(true)}
                    className={cn(
                        "text-[#65D9BD] hover:text-[#65D9BD] stroke-[#65D9BD] rounded-full border-[#65D9BD] border",
                        answer ? "bg-[#65D9BD] text-white" : ""
                    )}
                >
                    {answer ? <IconHeart/> : <IconHeartFilled/>}
                </Button>
                <Button
                    className={cn(
                        "border-red-500 border text-red-500 hover:text-red-300",
                        answer === false ? "bg-red-500 text-white" : ""
                    )}
                    variant="ghost"
                    size="icon"
                    onClick={() => onAnswer(false)}
                >
                    <IconX/>
                </Button>
            </div>
        </div>
    );
}

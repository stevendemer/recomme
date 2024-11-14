"use client";
import {useEffect} from "react";
import ApproachRow from "@/components/approach-row";
import MessageContainer from "@/components/message-container";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import SubmitButton from "@/components/submit-button";
import Link from "next/link";


export default function ApproachPage() {
    const [isValid, setValid] = useState(false);

    const options = [{
        title: "Acknowledge His Expertise",
        body: `Compliment his knowledge and ask for his opinion on green tech`
    }, {
        title: "Focus on Practical Solutions",
        body: `Engage him in discussions about real-world sustainability actions`
    },
        {
            title: "Invite Collaboration",
            body: `Offer opportunities for him to share insights or get involved in eco-projects`
        },
        {
            title: "Avoid Excessive Scepticism",
            body: `Engage him in discussions about real-world sustainability actions`
        },
        {
            title: "Discuss Energy Bill Savings",
            body: `Provide him with tips on reducing energy bills with efficient technologies or renewable energy sources`
        },
    ];


    // fetch and count the length
    const [answers, setAnswers] = useState<{ [key: number]: boolean | null }>({
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
    });

    useEffect(() => {
        // Check if all rows have been answered
        const allAnswered = Object.values(answers).every(
            (answer) => answer !== null
        );
        setValid(allAnswered);
    }, [answers]);

    const handleAnswer = (index: number, answer: boolean) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [index]: answer,
        }));
    };

    return (
        <div className="flex flex-col items-center justify-around relative flex-shrink h-full w-full gap-y-4">
            <h2 className="sm:text-xl text-md font-sans text-black tracking-wide">
                Recommended Approach
            </h2>

            <div className="flex flex-col items-center justify-center space-y-3">
                {options.map((value, index) => (
                    <ApproachRow key={value.title} label={value.title} sub={value.body}
                                 onAnswer={(answer) => handleAnswer(index, answer)} answer={answers[index]}/>
                ))}
            </div>
            <div>
                <Link href="/dashboard" passHref>
                    <SubmitButton
                        disabled={!isValid}
                        // className="rounded-full sm:px-12 sm:py-8 px-6 py-4 max-w-lg text-sm sm:text-md  disabled:bg-gray-600 disabled:text-gray-200"
                        onClick={() => {
                            console.log("all answers are ", answers);
                        }}
                    >
                        Continue
                    </SubmitButton>
                </Link>
            </div>
        </div>
    );
}

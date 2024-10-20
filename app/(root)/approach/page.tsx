"use client";
import { useEffect } from "react";
import ApproachRow from "@/components/approach-row";
import MessageContainer from "@/components/message-container";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ApproachPage() {
  const [isValid, setValid] = useState(false);

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
    <MessageContainer hasLogo={false}>
      <h2 className="text-2xl sm:text-5xl p-6 font-bold font-sans text-black">
        Recommended Approach
      </h2>

      <div className="flex flex-col items-center justify-center container mx-auto h-full m-4">
        {[...Array(5)].map((_, index) => (
          <ApproachRow
            key={index}
            label={`Testing some things ${index + 1}`}
            sub="Hello world and welcome to react"
            onAnswer={(answer) => handleAnswer(index, answer)}
            answer={answers[index]}
          />
        ))}
      </div>
      <Button
        disabled={!isValid}
        className="rounded-full sm:px-14 sm:py-8 px-6 py-4 max-w-lg text-sm sm:text-md font-bold font-rubik disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-200"
        onClick={() => {
          console.log("all answers are ", answers);
        }}
      >
        Continue
      </Button>
    </MessageContainer>
  );
}

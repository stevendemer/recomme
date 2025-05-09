"use client";
import { useEffect } from "react";
import ApproachRow from "@/components/approach-row";
import MessageContainer from "@/components/message-container";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SubmitButton from "@/components/submit-button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ApproachPage() {
  const [isValid, setValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const options = [
    {
      title: "Acknowledge His Expertise",
      body: `Compliment his knowledge and ask for his opinion on green tech`,
    },
    {
      title: "Focus on Practical Solutions",
      body: `Engage him in discussions about real-world sustainability actions`,
    },
    {
      title: "Invite Collaboration",
      body: `Offer opportunities for him to share insights or get involved in eco-projects`,
    },
    {
      title: "Avoid Excessive Scepticism",
      body: `Engage him in discussions about real-world sustainability actions`,
    },
    {
      title: "Discuss Energy Bill Savings",
      body: `Provide him with tips on reducing energy bills with efficient technologies or renewable energy sources`,
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

  const handleSubmit = async () => {
    if (!isValid) return;

    try {
      setIsSubmitting(true);

      // Here you can add your API call to save the answers
      // console.log("all answers are ", answers);

      // Navigate only after successful submission
      router.push("/dashboard");
    } catch (error) {
      console.error("Error submitting answers:", error);
      // Handle error (maybe show a toast notification)
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAnswer = (index: number, answer: boolean) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [index]: answer,
    }));
  };

  return (
    <div className="w-full h-full grid grid-rows-[auto,1fr,auto] gap-2">
      {/* Header */}
      <div className="w-full px-4 py-2">
        <h2 className="sm:text-3xl text-lg font-sans text-black tracking-wide text-center">
          Recommended Approach
        </h2>
      </div>

      {/* Scrollable Content */}
      <div className="w-full">
        <div className="max-w-screen-lg mx-auto grid gap-2">
          {options.map((value, index) => (
            <ApproachRow
              key={value.title}
              label={value.title}
              sub={value.body}
              onAnswer={(answer) => handleAnswer(index, answer)}
              answer={answers[index]}
            />
          ))}
        </div>
      </div>

      {/* Footer Button */}
      <div className="max-w-screen-lg mx-auto px-4 py-2">
        {isValid && !isSubmitting ? (
          <Link href="/dashboard" passHref>
            <SubmitButton onClick={() => {}} className="w-full">
              Continue
            </SubmitButton>
          </Link>
        ) : (
          <SubmitButton className="cursor-not-allowed bg-gray-400 text-gray-200">
            Continue
          </SubmitButton>
        )}
      </div>
    </div>
  );
}

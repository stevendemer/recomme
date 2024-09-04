"use client";
import ParentContainer from "@/components/parent-container";
import SubmitButton from "@/components/submit-button";
import SwipingCard from "@/components/swiping-card";
import PageTransition from "@/components/page-transition";
import { useState } from "react";
import { cn } from "@/lib/utils";
import MultipleCard from "@/components/multiple-card";
import { AnimatePresence } from "framer-motion";
import ImageSlider from "@/components/image-slider";
import { Images } from "lucide-react";
import Swipe from "@/components/forms/swipe";
import MultiStepForm from "@/components/forms/multistep-form";
import Steps from "@/components/steps";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const cards = [
  {
    image: "https://img.icons8.com/color/452/GeeksforGeeks.png",
    color: "#55ccff",
  },
  {
    image: "https://img.icons8.com/color/452/GeeksforGeeks.png",
    color: "#e8e8e8",
  },
  {
    image: "https://img.icons8.com/color/452/GeeksforGeeks.png",
    color: "#0a043c",
  },
  {
    image: "https://img.icons8.com/color/452/GeeksforGeeks.png",
    color: "black",
  },
  {
    image: "https://img.icons8.com/color/452/GeeksforGeeks.png",
    color: "#55ccff",
  },
  {
    image: "https://img.icons8.com/color/452/GeeksforGeeks.png",
    color: "#e8e8e8",
  },
  {
    image: "https://img.icons8.com/color/452/GeeksforGeeks.png",
    color: "#0a043c",
  },
  {
    image: "https://img.icons8.com/color/452/GeeksforGeeks.png",
    color: "black",
  },
];

export default function Home() {
  const [step, setStep] = useState(1);
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <AnimatePresence initial={false}>
      <main className="flex justify-center items-center gradient-bg overflow-x-hidden">
        <ParentContainer>
          <Steps setStep={setStep} currentStep={step} totalSteps={3} />
          <div className="flex items-center flex-col h-full w-full relative mx-auto">
            <h1 className="text-3xl font-bold text-slate-800 text-center max-w-5xl font-sans">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            {/* <form onSubmit={onSubmit}> */}
            {step === 1 && <ImageSlider />}

            {step === 2 && <SwipingCard />}

            {step === 3 && <MultipleCard />}
            <SubmitButton
              type={step < 3 ? "button" : "submit"}
              onClick={() => handleNext()}
            >
              {step < 3 ? "Continue" : "Submit"}
            </SubmitButton>
          </div>
        </ParentContainer>
      </main>
    </AnimatePresence>
  );
}

"use client";
import React from "react";
import ParentContainer from "@/components/parent-container";
import SubmitButton from "@/components/submit-button";
import SwipingCard from "@/components/cards/swiping-card";
import PageTransition from "@/components/page-transition";
import { useState } from "react";
import { cn } from "@/lib/utils";
import MultipleCard from "@/components/cards/multiple-card";
import { AnimatePresence } from "framer-motion";
import ImageSlider from "@/components/image-slider";
import { Images } from "lucide-react";
import Swipe from "@/components/forms/swipe";
import MultiStepForm from "@/components/forms/multistep-form";
import Steps from "@/components/steps";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import CardsStack from "@/components/cards/stack-cards";

type FormInputs = {
  sliderValue: number;
  swipeDirection: string | null;
  selects: number[];
};

export default function FormPage() {
  const [step, setStep] = useState(1);
  const { control, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      sliderValue: 0,
      swipeDirection: null,
      selects: [],
    },
  });

  const onSubmit = (data: any) => {
    console.log("data from form is ", data);

    // handle form submission
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center flex-col h-full w-full relative mx-auto"
          >
            <h1 className="text-3xl font-semibold leading-tight text-slate-800 text-center max-w-5xl font-rubik">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            {/* <form onSubmit={onSubmit}> */}
            {step === 1 && (
              <Controller
                name="sliderValue"
                control={control}
                render={({ field }) => (
                  <ImageSlider
                    onValueChange={(value) => {
                      console.log("slider value is ", value);
                      field.onChange(value[0]);
                    }}
                  />
                )}
              ></Controller>
            )}

            {step === 2 && (
              <Controller
                name="swipeDirection"
                control={control}
                render={({ field }) => (
                  <SwipingCard
                    onSwipe={(direction) => {
                      console.log("swiped at direction ", direction);

                      field.onChange(direction);
                    }}
                  />
                )}
              ></Controller>
            )}

            {step === 3 && (
              <Controller
                control={control}
                name="selects"
                render={({ field }) => (
                  <MultipleCard value={field.value} onChange={field.onChange} />
                )}
              ></Controller>
            )}
            <SubmitButton
              className="absolute bottom-20"
              type={step < 3 ? "button" : "submit"}
              onClick={() => handleNext()}
            >
              {step < 3 ? "Continue" : "Submit"}
            </SubmitButton>
          </form>
        </ParentContainer>
      </main>
    </AnimatePresence>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Steps from "../steps";
import ImageSlider from "../image-slider";
import SwipingCard from "../cards/swiping-card";
import MultipleCard from "../cards/multiple-card";
import SubmitButton from "../submit-button";
import { useToast } from "../ui/use-toast";
import { api } from "@/lib/axios";
import { ROUTES } from "@/constants/routes";
import BackgroundImage from "../message-container";
import MessageContainer from "../message-container";
import { cn } from "@/lib/utils";
import TinderCard from "../cards/tinder-card";
import ProfilingLayout from "../layouts/profiling-layout";
import { Autocomplete } from "@react-google-maps/api";
import { Button } from "../ui/button";

type FormInputs = {
  slider: number;
  swipe: "right" | "left" | null;
  multiple: number[];
};

export default function ProfilingPage() {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const [index, setIndex] = useState(0);

  const {
    control,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isDirty, isLoading, isValid, dirtyFields },
  } = useForm<FormInputs>({
    defaultValues: {
      slider: 0,
      swipe: null,
      multiple: [],
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Data from form is ", data.swipe, data.slider, data.multiple);

    api
      .post(ROUTES.postInteraction, {
        webform_id: "mp_recomme_macrointeractions",
        card_sorting_test: data.slider,
        mp_slider_test: data.slider,
        mp_multiple_answers_test: data.multiple,
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => console.log(error));
    toast({
      description: "Data submitted ! Thanks for your time",
    });
  };
  const handleNext = async () => {
    const isStepValid = await trigger();
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const isFormComplete = Object.keys(dirtyFields).length === 3;

  return (
    <AnimatePresence initial={false}>
      <ProfilingLayout>
        <div className="w-full h-full flex flex-col justify-center">
          <Steps setStep={setStep} currentStep={step} totalSteps={3} />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center space-y-2 w-full  h-[calc(100%-120px)] flex-grow"
          >
            {/* Step content */}
            {step === 1 && (
              <Controller
                control={control}
                name="multiple"
                rules={{
                  required: true,
                  minLength: { value: 3, message: "Pick at least 3 options" },
                }}
                render={({ field }) => (
                  <MultipleCard value={field.value} onChange={field.onChange} />
                )}
              ></Controller>
            )}

            {step === 2 && (
              <Controller
                name="swipe"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TinderCard
                    frontCard={true}
                    drag="x"
                    setIndex={setIndex}
                    onChange={field.onChange}
                    value={field.value}
                  />
                )}
              ></Controller>
            )}

            {step === 3 && (
              <Controller
                name="slider"
                control={control}
                rules={{ required: true, minLength: 1 }}
                render={({ field }) => (
                  <ImageSlider
                    onChange={(value) => {
                      field.onChange(value[0]);
                    }}
                  />
                )}
              ></Controller>
            )}
            {/* <div
              className={cn(
                "w-full flex justify-center mt-4",
                step === 2 ? "hidden" : ""
              )}
            >
              <SubmitButton>Submit</SubmitButton>
            </div> */}
            <div
              className={cn(
                "py-4 lg:pb-10 justify-center mt-auto hidden",
                step === 2 ? "hidden" : "sm:flex"
              )}
            >
              <SubmitButton onClick={handleNext}>Continue</SubmitButton>
            </div>
          </form>
        </div>
      </ProfilingLayout>
    </AnimatePresence>
  );
}

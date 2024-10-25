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

type FormInputs = {
  slider: number;
  swipe: "right" | "left" | null;
  multiple: number[];
};

export default function FormContainer() {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const [index, setIndex] = useState(0);
  // const [background, setBackground] = useState("#fff");

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
      <MessageContainer buttonLength={1} hasLogo={false}>
        <Steps setStep={setStep} currentStep={step} totalSteps={3} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-between items-center h-auto w-full mx-auto space-y-2"
        >
          <h1 className="text-xl sm:text-3xl font-bold text-[#2A898F] text-center m-2">
            Lorem ipsum dolor sit
          </h1>

          {/* Step content */}
          <div className="flex-grow">
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
                  <div className="w-full flex items-center justify-center">
                    <ImageSlider
                      onChange={(value) => {
                        field.onChange(value[0]);
                      }}
                    />
                  </div>
                )}
              ></Controller>
            )}
          </div>

          {/* Submit Button - Positioned at the bottom */}
        </form>
        {/* <div className="flex items-center justify-center space-x-2 sm:space-x-6 m-auto relative">
          <SubmitButton
            className={cn("pt-6", step === 2 && "hidden")}
            type={step < 3 ? "button" : "submit"}
            onClick={() => handleNext()}
            disabled={step === 3 && !isFormComplete}
          >
            {step < 3 ? "Continue" : "Submit"}
          </SubmitButton>
        </div> */}
      </MessageContainer>
    </AnimatePresence>
  );
}

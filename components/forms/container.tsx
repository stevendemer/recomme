"use client";

import { AnimatePresence } from "framer-motion";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ParentContainer from "../parent-container";
import Steps from "../steps";
import ImageSlider from "../image-slider";
import SwipingCard from "../cards/swiping-card";
import MultipleCard from "../cards/multiple-card";
import SubmitButton from "../submit-button";
import { useToast } from "../ui/use-toast";
import { api } from "@/lib/axios";
import { ROUTES } from "@/constants/routes";

type FormInputs = {
  slideValue: number;
  swipeDirection: number[] | null;
  selectedCards: number[];
};

const initialMessage = {
  message: "",
};

export default function FormContainer() {
  const [step, setStep] = useState(1);
  //   const [state, formAction] = useFormState(action, initialMessage);
  const { toast } = useToast();

  const {
    control,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isDirty, isLoading, isValid, dirtyFields },
  } = useForm<FormInputs>({
    defaultValues: {
      slideValue: 0,
      swipeDirection: null,
      selectedCards: [],
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(
      "Data from form is ",
      data.swipeDirection,
      data.slideValue,
      data.selectedCards
    );

    api
      .post(ROUTES.postInteraction, {
        webform_id: "mp_recomme_macrointeractions",
        card_sorting_test: data.swipeDirection,
        mp_slider_test: data.slideValue,
        mp_multiple_answers_test: data.selectedCards,
      })
      .then((resp) => console.log(resp.data))
      .catch((error) => console.log(error));

    // if (
    //   getValues().selectedCards.length < 3 ||
    //   getValues().swipeDirection === null
    // ) {
    //   alert("You missed some fields");
    // }
  };

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      if (step < 3) {
        setStep(step + 1);
      }
    }
  };

  const isFormComplete = Object.keys(dirtyFields).length === 3;

  return (
    <AnimatePresence>
      <main className="flex justify-center items-center gradient-bg overflow-x-hidden h-full">
        <ParentContainer>
          <Steps setStep={setStep} currentStep={step} totalSteps={3} />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center flex-col h-full w-full relative mx-auto space-y-4"
          >
            <h1 className="text-3xl font-bold text-slate-600 text-center max-w-5xl mt-4">
              Lorem ipsum dolor sit
            </h1>
            {/* <form onSubmit={onSubmit}> */}
            {step === 1 && (
              <Controller
                name="slideValue"
                control={control}
                rules={{ required: true, minLength: 1 }}
                render={({ field }) => (
                  <>
                    <ImageSlider
                      onValueChange={(value) => {
                        console.log("slider value is ", value);
                        field.onChange(value[0]);
                      }}
                    />
                  </>
                )}
              ></Controller>
            )}

            {step === 2 && (
              <Controller
                name="swipeDirection"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <SwipingCard
                      onSwipe={(direction) => {
                        if (direction === "right") {
                          field.onChange([1, 2]);
                        }
                        // field.onChange(direction);
                      }}
                    />
                  </>
                )}
              ></Controller>
            )}

            {step === 3 && (
              <Controller
                control={control}
                name="selectedCards"
                rules={{
                  required: true,
                  minLength: { value: 3, message: "Pick at least 3 options" },
                }}
                render={({ field }) => (
                  <>
                    <MultipleCard
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </>
                )}
              ></Controller>
            )}
            <SubmitButton
              className="m-0 "
              type={step < 3 ? "button" : "submit"}
              onClick={() => handleNext()}
              disabled={step === 3 && !isFormComplete}
            >
              {step < 3 ? "Continue" : "Submit"}
            </SubmitButton>
          </form>
        </ParentContainer>
      </main>
    </AnimatePresence>
  );
}

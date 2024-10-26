"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { PropsWithChildren, useEffect, useState } from "react";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
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
import { Autocomplete } from "@react-google-maps/api";
import { Button } from "../ui/button";
import { useGetElements } from "@/hooks/use-get-elemenets";
import Spinner from "../spinner";
import MultipleCards from "../cards/multiple-card";

type FormInputs = {
  slider: number;
  swipe: "right" | "left" | null;
  multiple: number[];
};

function MultiSelect({ options, question }: any) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-xl text-center font-bold">{question}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 sm:gap-6 place-items-center w-full max-h-full">
        {options?.map((e: any, index: number) => (
          <div key={index}>
            <h2 className="text-xl text-center font-bold text-slate-700">
              {e}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProfilingPage() {
  const [steps, setSteps] = useState<any[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  const { toast } = useToast();
  const { data: selects, error, isLoading, isError } = useGetElements("select");
  const {
    data: cards,
    isLoading: imagesLoading,
    isError: imagesError,
  } = useGetElements("webform_image_select");
  const {
    data: sliders,
    isLoading: rangeLoading,
    isError: rangeError,
  } = useGetElements("range");

  useEffect(() => {
    if (selects && cards && sliders) {
      const sortedSteps = [...selects, ...cards, ...sliders];
      console.log("sorted steps are ", sortedSteps);
      setSteps(sortedSteps);
    }
  }, [selects, cards, sliders]);

  const methods = useForm<FormInputs>({
    defaultValues: {
      slider: 0,
      swipe: null,
      multiple: [],
    },
    mode: "onChange",
  });

  const renderStep = (step?: any) => {
    console.log("step is ", step);
    if (!step) return <h2>No step to show</h2>;
    switch (step.type) {
      case "select":
        return <MultiSelect options={step.options} question={step.title} />;
      case "webform_image_select":
        return <h2>Swiping card</h2>;
      case "range":
        return <div>Image slider</div>;
      default:
        return <h2>Nothing to show</h2>;
    }
  };

  console.log("data is ", selects);

  if (isLoading || imagesLoading || rangeLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner size="xl" />
      </div>
    );
  }
  if (isError) {
    console.log("Error is ", error);
  }
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
    // const isStepValid = await trigger();
    // if (step < 3) {
    //   setStep(step + 1);
    // }
  };

  console.log("selects are ", selects);
  console.log("cards are ", cards);
  console.log("sliders are ", sliders);

  const totalSteps =
    (selects?.length ?? 0) + (cards?.length ?? 0) + (sliders?.length ?? 0);

  return (
    <FormProvider {...methods}>
      <div className="w-full flex flex-col justify-between items-center h-full">
        <Steps
          setStep={setCurrentStep}
          currentStep={currentStep}
          totalSteps={totalSteps}
        />
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col justify-around items-center space-y-4 w-full h-[calc(100%-90px)]"
        >
          {renderStep(steps[currentStep])}

          <SubmitButton onClick={handleNext}>Continue</SubmitButton>
        </form>
      </div>
    </FormProvider>
  );
}

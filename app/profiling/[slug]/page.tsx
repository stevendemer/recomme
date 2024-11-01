"use client";
import ProfilingCard from "@/components/cards/profiling-card";
import RadioSelect from "@/components/forms/radio-select";
import ImageSlider from "@/components/image-slider";
import Spinner from "@/components/spinner";
import Steps from "@/components/steps";
import { useGetElements } from "@/hooks/use-get-elemenets";
import React, { useEffect, useState } from "react";

export default function Profiling({ params }: { params: { slug: string } }) {
  const [currentStep, setCurrentStep] = useState(0);

  const [hideButton, setHideButton] = useState(false);

  const { data, status, error, isFetching } = useGetElements(params.slug);

  console.log("data from api is ", data);

  useEffect(() => {
    if (params.slug === "webform_image_select") {
      setHideButton(true);
    } else {
      setHideButton(false);
    }
  }, [params]);

  if (status === "pending" || isFetching) {
    return (
      <div className="h-screen w-full flex items-center justify-center relative z-30">
        <Spinner size="xl" />
      </div>
    );
  }

  if (status === "error") {
    console.error(error);
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center">
          <p className="text-lg text-center font-body">
            Something went wrong ! Try again later
          </p>
        </div>
      </div>
    );
  }

  const handleNextStep = () => {
    setCurrentStep((prevStep) =>
      prevStep < data.length ? prevStep + 1 : data.length
    );
  };

  const renderStep = (step?: any) => {
    if (!step)
      return (
        <h2 className="text-center text-xl font-body">Category not found !</h2>
      );
    switch (step.type) {
      case "select":
        return (
          <RadioSelect
            name={step.name}
            options={step.options}
            title={step.title}
            onVote={handleNextStep}
          />
        );
      case "webform_image_select":
        return (
          <ProfilingCard data={data} onVote={() => handleNextStep()}>
            {/* Hello world and welcome to profiling card component Hello world and */}
          </ProfilingCard>
        );
      case "range":
        return <ImageSlider onChange={() => console.log("nothing")} />;
      default:
        return <ImageSlider onChange={() => console.log("nothing")} />;
      // return <h2 className="text-xl text-center">Nothing to show !</h2>;
    }
  };

  return (
    <div className="w-full flex flex-col justify-between items-center h-full">
      <Steps
        steps={data}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <div className="flex flex-col justify-around items-center space-y-4 w-full h-[calc(100%-60px)] font-body">
        {renderStep(data[currentStep])}
        {/* <SubmitButton
          className={cn(hideButton ? "hidden" : "")}
          onClick={handleNextStep}
        >
          Continue
        </SubmitButton> */}
      </div>
    </div>
  );
}

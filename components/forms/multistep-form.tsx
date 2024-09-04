"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ParentContainer from "../parent-container";
import SubmitButton from "../submit-button";
import Steps from "../steps";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <main className="flex justify-center items-center h-screen gradient-bg">
      <ParentContainer>
        <Steps currentStep={step} totalSteps={3} />
        <SubmitButton actionType="next" />
      </ParentContainer>
    </main>
  );
}

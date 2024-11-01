"use client";

import React, {
  Dispatch,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from "react-hook-form";
import Steps from "../steps";
import SubmitButton from "../submit-button";
import { useToast } from "../ui/use-toast";
import { api } from "@/lib/axios";
import { ROUTES } from "@/constants/routes";
import MessageContainer from "../message-container";
import { Button } from "../ui/button";
import { useGetElements } from "@/hooks/use-get-elemenets";
import Spinner from "../spinner";
import MultipleCards from "../cards/multiple-card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { FormField } from "../ui/form";

import {
  useAnimation,
  useMotionValue,
  motion,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import RadioSelect from "./radio-select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CardsStack from "../cards/stack-cards";
import { CardsContainer } from "../cards/profiling-card";

type FormInputs = {
  slider: number;
  swipe: "right" | "left" | null;
  radio_select: string;
  multiple_select: number[];
};

function TinderCard({ src, id, title, onVote }: any) {
  const cardElem = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  const [constrained, setConstrained] = useState(true);
  const [direction, setDirection] = useState<"left" | "right" | undefined>();
  const [velocity, setVelocity] = useState(0);
  const rotate = useTransform(x, [-150, 0, 150], [-18, 0, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const getVote = () => {
    if (Math.abs(x.get()) > 100 && (velocity > 1 || velocity < -1)) {
      if (x.get() > 0) {
        console.log("swiped right");
        onVote();
      } else {
        console.log("swiped left");
      }
    }
  };

  const getDirection = () => {
    return velocity >= 1 ? "right" : velocity <= -1 ? "left" : undefined;
  };

  const getTrajectory = () => {
    setVelocity(x.getVelocity());
    setDirection(getDirection());
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl text-center text-black">{title}</h2>
      <div className="relative h-full grid place-items-center">
        <motion.img
          src="https://52b0-2a02-85f-e4e7-463e-645-77b6-73b9-ed67.ngrok-free.app/sites/default/files/images/recomme_icons/Component%2016%20(1).png"
          style={{
            border: "1px solid black",
            x,
            rotate,
            opacity,
            cursor: "grab",
          }}
          className="w-[320px] h-[500px] rounded-sm object-center mx-6"
          onDrag={getTrajectory}
          drag="x"
          dragElastic={0.6}
          dragConstraints={{
            right: 0,
            left: 0,
          }}
          whileTap={{
            cursor: "grabbing",
          }}
          onDragEnd={() => {
            if (Math.abs(x.get()) > 100) {
              if (x.get() > 0) {
                getVote();
              } else {
                console.log("swiped left");
              }
            }
          }}
        />
      </div>
    </div>
  );
}

// function CardStack({
//   cards,
//   setCards,
// }: {
//   cards: ICard[];
//   setCards: Dispatch<ICard>;
// }) {
//   console.log("cards are ", cards);

//   const x = useMotionValue(0);
//   const rotate = useTransform(x, [-150, 150], [-18, 18]);
//   const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

//   return (
//     <div className="grid h-full place-items-center">
//       {cards.map((card) => (
//         <motion.img
//           src={process.env.NEXT_PUBLIC_API_URL + card.src}
//           alt={card.text}
//           className="h-96 w-72 origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing"
//           drag="x"
//           style={{
//             gridRow: 1,
//             gridColumn: 1,
//             x,
//             opacity,
//             rotate,
//             transition: "0.2s transform",
//           }}
//           whileTap={{
//             scale: 1.1,
//           }}
//           dragConstraints={{
//             left: 0,
//             right: 0,
//             top: 0,
//             bottom: 0,
//           }}
//           onDragEnd={(_, info) => {
//             if (Math.abs(x.get()) > 100) {
//               setCards((cards) => cards.slice(1));
//             }
//           }}
//         />
//       ))}
//     </div>
//   );
// }

/**
 * ProfilingPage is a React functional component that renders a series of steps
 * for user profiling. The component displays a step navigation component at the
 * top of the page and a main content area in the middle. The main content area
 * renders a form with a different question type based on the current step.
 * Questions are fetched from the API server and the component also handles
 * form submission and displays a toast notification with the submitted values.
 * @returns A JSX element representing the ProfilingPage component
 */
export default function ProfilingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const { toast } = useToast();

  const pathname = usePathname();
  // const type = params.get("type");

  const segments = pathname.split("/");
  const type = segments[segments.length - 1];

  const { data: steps, error, status } = useGetElements(type);

  // useEffect(() => {
  //   if (type === "webform_image_select") {
  //     setHideButton(true);
  //   } else {
  //     setHideButton(false);
  //   }
  // }, [type]);

  // useEffect(() => {
  //   if (steps) {
  //     if (currentStep >= steps.length) {
  //       if (currentIndex < categories.length - 1) {
  //         // move to next category and reset counter
  //         setCurrentStep(0);
  //         router.push(`${pathname}?type=${categories[currentIndex + 1]}`);
  //       }
  //     }
  //   }
  // }, [currentStep, steps, currentIndex, pathname]);

  const handleNextStep = () => {
    if (steps) {
      setCurrentStep((prevStep) =>
        prevStep < steps.length ? prevStep + 1 : steps.length
      );
    }
  };

  const methods = useForm<FormInputs>({
    defaultValues: {
      slider: 0,
      swipe: null,
      radio_select: "",
      multiple_select: [],
    },
    mode: "onChange",
  });

  const renderStep = (step?: any) => {
    console.log("step is ", step);
    if (!step) return <h2>No step to show</h2>;
    switch (step.type) {
      case "select":
        // return <RadioSelect options={step.options} question={step.title} />;
        return (
          <RadioSelect
            onVote={handleNextStep}
            name={step.name}
            options={step.options}
            title={step.title}
          />
        );
      case "webform_image_select":
        // return <CardsContainer onVote={handleNextStep} />;
        return (
          <TinderCard
            src={step.src}
            title={step.text}
            onVote={handleNextStep}
          />
        );
      case "range":
        return <div>Image slider</div>;
      default:
        return <h2>Nothing to show</h2>;
    }
  };

  if (status === "pending") {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner size="xl" />
      </div>
    );
  }
  if (status === "error") {
    console.log("Error is ", error);
  }
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(
      "Data from form is ",
      data.swipe,
      data.slider,
      data.radio_select
    );

    api
      .post(ROUTES.postInteraction, {
        webform_id: "mp_recomme_macrointeractions",
        card_sorting_test: data.slider,
        mp_slider_test: data.slider,
        mp_multiple_answers_test: data.radio_select,
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => console.log(error));
    toast({
      title: "You submitted the following values: ",
      description: (
        <pre className="rounded-lg w-[300px] p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <FormProvider {...methods}>
      <div className="w-full flex flex-col justify-between items-center h-full">
        <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} />
        <div
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col justify-around items-center space-y-4 w-full h-[calc(100%-90px)] font-body"
        >
          {steps && renderStep(steps[currentStep])}
          <SubmitButton onClick={handleNextStep}>Continue</SubmitButton>
        </div>
      </div>
    </FormProvider>
  );
}

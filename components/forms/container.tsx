"use client";

import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
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

type FormInputs = {
  slider: number;
  swipe: "right" | "left" | null;
  radio_select: string;
  multiple_select: number[];
};

// function RadioSelect({ options, question }: any) {
//   console.log("options are ", options);
//   const [selectedValue, setSelectedValue] = useState<string>("");
//   const [isActive, setIsActive] = useState(false);

//   const {
//     formState: { errors, isDirty },
//     control,
//   } = useFormContext<FormInputs>();

//   const handleRadioChange = (value: string) => {
//     console.log("value is ", value);
//     setSelectedValue(value);
//     setIsActive(!isActive);
//   };

//   const gridLayout =
//     options.length === 5
//       ? "grid-cols-3"
//       : options.length === 4
//       ? "grid-cols-2"
//       : "grid-cols-1";

//   return (
//     <form className="flex flex-col items-center justify-evenly h-full w-full flex-grow mx-auto container transition-colors duration-200">
//       <h2 className="sm:text-3xl text-xl text-center text-black font-sans">
//         {question}
//       </h2>
//       <div
//         className={cn(
//           "grid gap-2 w-full max-w-3xl place-items-center grid-flow-row",
//           gridLayout
//         )}
//       >
//         <Controller
//           name="radio_select" // Unique name for this field
//           control={control}
//           rules={{ required: "This f  ield is required" }}
//           render={({ field }) => (
//             <>
//               {options?.map((e: any) => (
//                 <RadioGroup
//                   key={e}
//                   value={field.value}
//                   onValueChange={(value) => field.onChange(value)}
//                   className={cn(
//                     "bg-white p-8 rounded-sm shadow-lg border w-full h-full justify-center transition-colors duration-200 text-black",
//                     field.value === e && "bg-[#65D8BC] text-white"
//                   )}
//                 >
//                   <Label
//                     className="flex flex-col items-center justify-center gap-6 w-full h-full cursor-pointer"
//                     htmlFor={e}
//                   >
//                     <RadioGroupItem
//                       id={e}
//                       value={e}
//                       className={cn(
//                         "focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-2",
//                         field.value === e ? "border-white" : ""
//                       )}
//                     />
//                     <div className="font-bold text-sm sm:text-xl font-inter text-center">
//                       {e}
//                     </div>
//                   </Label>
//                 </RadioGroup>
//               ))}
//               {errors.radio_select && (
//                 <p className="text-red-500 text-sm mt-2">
//                   {errors.radio_select.message}
//                 </p>
//               )}
//             </>
//           )}
//         />
//       </div>
//     </form>
//   );
// }

function TinderCard({ src, id, title }: any) {
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
      // remove the card
      // setCards((pv) => pv.filter((v) => v.id !== id));

      if (x.get() > 0) {
        console.log("swiped right");
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
      <motion.img
        animate={controls}
        dragConstraints={
          constrained && { left: 0, right: 0, top: 0, bottom: 0 }
        }
        dragElastic={1}
        style={{
          x,
          opacity,
          rotate,
          transition: "0.2s transform",
        }}
        ref={cardElem}
        whileTap={{ scale: 1.1 }}
        onDrag={getTrajectory}
        onDragEnd={getVote}
        src={process.env.NEXT_PUBLIC_API_URL + src}
        alt=""
      ></motion.img>
    </div>
  );
}

function TinderCards({ cards }: any) {
  console.log("cards are ", cards);
  return (
    <div className="grid place-items-center">
      {cards.map((card, index) => (
        <motion.div
          initial="initial"
          exit="exit"
          className="absolute"
          style={{
            zIndex: cards.length - index,
          }}
        >
          <TinderCard title={card.text} src={card.src} />
        </motion.div>
      ))}
    </div>
  );
}

export default function ProfilingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const { toast } = useToast();

  const params = useSearchParams();
  const pathname = usePathname();
  const type = params.get("type");
  const router = useRouter();
  const [categories, setCategories] = useState([
    "select",
    "webform_image_select",
    "range",
  ]);

  const { data: steps, error, status } = useGetElements(type);

  // useEffect(() => {
  //   if (selects && cards && sliders) {
  //     const sortedSteps = [...selects, ...cards, ...sliders];
  //     setSteps(sortedSteps);
  //   }
  // }, [selects, cards, sliders]);
  const currentCategoryIndex = categories.indexOf(type) || 0;

  useEffect(() => {
    // push updated URL based on category type
    router.push(pathname + `?type=${categories[currentCategoryIndex]}`);
  }, [type]);

  useEffect(() => {
    if (steps) {
      if (currentStep >= steps.length) {
        if (currentCategoryIndex < categories.length - 1) {
          // move to next category and reset counter
          setCurrentStep(0);
          router.push(
            `${pathname}?type=${categories[currentCategoryIndex + 1]}`
          );
        }
      }
    }
  }, [currentStep, steps, currentCategoryIndex, pathname]);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      // Move to the next question in the same category
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      // All questions in this category are answered
      setCurrentStep(steps?.length);
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
            name={step.name}
            options={step.options}
            title={step.title}
          />
        );
      case "webform_image_select":
        return <TinderCards cards={step.images} />;
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
        <Steps
          // steps={steps?.length}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        {/* <Steps
          setStep={setCurrentStep}
          currentStep={currentStep}
          totalSteps={totalSteps!}
        /> */}
        <div
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col justify-around items-center space-y-4 w-full h-[calc(100%-90px)] font-body"
        >
          {renderStep(steps[currentStep])}
        </div>
      </div>
      <Button onClick={handleNextStep}>Go next step</Button>
    </FormProvider>
  );
}

"use client";
import Spinner from "@/components/spinner";
import Steps from "@/components/steps";
import { useGetElements } from "@/hooks/use-get-elemenets";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveLeftIcon } from "lucide-react";

const ProfilingCard = dynamic(
  () => import("@/components/cards/profiling-card"),
  {
    ssr: false,
  }
);
const RadioSelect = dynamic(() => import("@/components/forms/radio-select"), {
  ssr: false,
});
const ImageSlider = dynamic(() => import("@/components/image-slider"), {
  ssr: false,
});

interface GroupProgress {
  groupIndex: number;
  questionIndex: number;
  totalGroups: number;
  totalQuestionsInGroup: number;
}

export default function Profiling() {
  const [currentStep, setCurrentStep] = useState(0);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push, back } = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentComponent, setCurrentComponent] = useState<string>("");

  const currentType = useMemo(
    () => searchParams.get("type") ?? "select",
    [searchParams]
  );

  // Track group progress for range type
  const [groupProgress, setGroupProgress] = useState<GroupProgress>({
    groupIndex: 0,
    questionIndex: 0,
    totalGroups: 0,
    totalQuestionsInGroup: 0,
  });

  const { data, status, error } = useGetElements();

  useEffect(() => {
    setCurrentComponent(currentType);
  });

  useEffect(() => {
    if (currentType === "range" && data?.ranges) {
      setGroupProgress({
        groupIndex: 0,
        questionIndex: 0,
        totalGroups: data.ranges.length,
        totalQuestionsInGroup:
          data.ranges[Number(searchParams.get("page"))]?.items.length,
      });
    }
  }, [searchParams, data, currentType]);

  useEffect(() => {
    const page = searchParams.get("page");
    if (page && parseInt(page) === 4) {
      setIsTransitioning(true);
      setTimeout(() => {
        push("/csjt");
      });
    }
  }, [pathname, searchParams]);

  if (status === "pending" || isTransitioning) {
    return (
      <div className="h-screen w-full flex items-center justify-center relative z-30">
        <Spinner size="xl" />
      </div>
    );
  }

  if (status === "error") {
    console.error(error);
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <p className="text-lg text-center font-body font-bold">
          Something went wrong ! Try again later
        </p>
        <Button
          variant="link"
          className="relative space-x-2 rounded-lg"
          onClick={() => back()}
        >
          <MoveLeftIcon size={20} />
          <span>Go back</span>
        </Button>
      </div>
    );
  }

  const handleNextStep = () => {
    switch (currentType) {
      case "select":
        if (currentStep + 1 < data.selects.length) {
          setCurrentStep(currentStep + 1);
        } else {
          // moveToNextType("card");
          // move to the prepare page
          push("/benefits");
        }
        break;

      case "card":
        if (currentStep + 1 < data.cards[0].images.length) {
          setCurrentStep(currentStep + 1);
        } else {
          // moveToNextType("range");
          push("/convince-to-join?page=1");
        }
        break;

      case "range":
        handleRangeNavigation();
        break;
    }
  };

  const handleRangeNavigation = () => {
    const { groupIndex, questionIndex, totalGroups, totalQuestionsInGroup } =
      groupProgress;

    if (questionIndex + 1 < totalQuestionsInGroup) {
      // Move to next question in current group
      setGroupProgress((prev) => ({
        ...prev,
        questionIndex: prev.questionIndex + 1,
      }));
      setCurrentStep(questionIndex + 1);
    } else if (groupIndex + 1 < totalGroups) {
      // Move to next group
      const nextGroupQuestions = data.ranges[groupIndex + 1]?.items.length || 0;
      setGroupProgress({
        groupIndex: groupIndex + 1,
        questionIndex: 0,
        totalGroups,
        totalQuestionsInGroup: nextGroupQuestions,
      });
      setCurrentStep(0);
    }
  };

  const moveToNextType = (nextType: string) => {
    setIsTransitioning(true);
    setCurrentComponent(nextType);

    setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      params.set("type", nextType);
      push(`${pathname}?${params.toString()}`, { scroll: false });
      setCurrentStep(0);
      setIsTransitioning(false);
    });
  };

  const renderStep = (data: any) => {
    const componentProps = {
      onVote: handleNextStep,
      currentIndex: currentStep,
      totalCards: data?.cards[0].images.length,
    };

    const components = {
      select: (
        <RadioSelect {...componentProps} data={data?.selects[currentStep]} />
      ),
      card: (
        <ProfilingCard
          {...componentProps}
          data={data?.cards[0].images[currentStep]}
        />
      ),
      range: <ImageSlider {...componentProps} data={data?.ranges} />,
    };

    return (
      <AnimatePresence mode={"wait"}>
        <motion.div
          key={currentComponent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className={"w-full h-full"}
        >
          {components[currentType as keyof typeof components] || (
            <div className={"text-xl text-center w-full"}>
              Invalid profiling type entered
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="w-full flex flex-col justify-between items-center h-full flex-nowrap">
      <Steps
        totalGroups={currentType === "range" ? data.ranges.length : undefined}
        currentGroup={data?.ranges[Number(searchParams.get("page"))]}
        steps={data.steps}
        currentStep={currentStep}
      />
      <div className="flex flex-col justify-around items-center space-y-4 w-full h-[calc(100vh-2rem)] p-6 font-body">
        {!isTransitioning && renderStep(data)}
      </div>
    </div>
  );
}

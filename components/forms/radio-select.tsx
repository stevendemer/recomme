"use client";

import { cn } from "@/lib/utils";
import { Controller, useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import SubmitButton from "../submit-button";
import { Form } from "../ui/form";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IProp {
  step: {
    options: string[];
    title: string;
    name: string;
  };
  onVote: () => void;
}

interface IFormInputs {
  [key: string]: string; // input name is dynamic
}

export default function RadioSelect({ data, onVote, ...props }: any) {
  const params = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  console.log("select data  is ", data);

  const form = useForm<IFormInputs>({
    mode: "onChange",
  });

  useEffect(() => {
    if (params.get("type") === "card") {
      replace(`${pathname}?${params.toString()}`);
    }
  }, [params]);

  if (data.options.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <h2 className="text-xl text-center font-body">No questions found !</h2>
      </div>
    );
  }

  const renderGrid = (optionsLength: number) => {
    if (optionsLength === 5) {
      return "grid-cols-3"; // 3 items in the first row, 2 in the second, centered
    } else {
      return "grid-cols-2"; // 2 items in each row, centered
    }
  };

  // const gridLayout =
  //   options.length === 5
  //     ? "grid-cols-3"
  //     : options.length === 4
  //     ? "grid-cols-2"
  //     : "grid-cols-1";

  function onSubmit(data: any) {
    console.log(data);
    onVote();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-evenly h-full w-full flex-grow mx-auto container transition-colors duration-200 max-w-xl sm:max-w-7xl"
      >
        <h2 className="sm:text-3xl text-xl text-center text-black font-sans">
          {data?.title}
        </h2>
        <Controller
          name={data?.title}
          control={form.control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <RadioGroup
              onValueChange={(value) => {
                field.onChange(value);
                console.log(value);
              }}
              className={cn(
                "p-4 transition-colors duration-200 text-black grid w-full h-auto lg:max-w-5xl",
                renderGrid((data?.options).length)
                // field.value === value && "bg-[#65D8BC] text-white"
              )}
            >
              {data?.options.map((value: string, index: number) => {
                return (
                  <div
                    key={index}
                    className={cn(
                      "p-8 rounded-sm shadow-lg border w-full h-full transition-colors duration-200 text-black",
                      field.value === value && "bg-[#65D8BC] text-white"
                    )}
                  >
                    <Label
                      className="flex flex-col items-center justify-center gap-6 w-full h-full cursor-pointer"
                      htmlFor={value}
                    >
                      <RadioGroupItem
                        id={value}
                        value={value}
                        className={cn(
                          "focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-2",
                          field.value === value ? "border-white" : ""
                        )}
                      />
                      <div className="font-bold text-sm sm:text-xl font-inter text-center">
                        {value}
                      </div>
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          )}
        />
        <SubmitButton disabled={!form.formState.isValid} type="submit">
          Continue
        </SubmitButton>
      </form>
    </Form>
  );
}

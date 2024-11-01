"use client";

import { cn } from "@/lib/utils";
import { Controller, useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import SubmitButton from "../submit-button";
import { Form } from "../ui/form";
import { useState } from "react";
import Image from "next/image";

interface IProp {
  options: string[];
  title: string;
  name: string;
  onVote: () => void;
}

interface IFormInputs {
  [key: string]: string; // input name is dynamic
}

export default function RadioSelect({ options, title, name, ...props }: IProp) {
  console.log("name is ", name);

  const form = useForm<IFormInputs>({
    mode: "onChange",
  });

  const gridLayout =
    options.length === 5
      ? "grid-cols-3"
      : options.length === 4
      ? "grid-cols-2"
      : "grid-cols-1";

  function onSubmit(data: any) {
    console.log(data);
    props.onVote();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-evenly h-full w-full flex-grow mx-auto container transition-colors duration-200 max-w-xl sm:max-w-7xl"
      >
        <h2 className="sm:text-3xl text-xl text-center text-black font-sans">
          {title}
        </h2>
        <div
          className={cn(
            "grid gap-2 w-full sm:max-w-7xl place-items-center grid-flow-row justify-self-center",
            gridLayout
          )}
        >
          <Controller
            name={name}
            control={form.control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <>
                {options?.map((e: any) => (
                  <RadioGroup
                    {...form.register(name)}
                    key={e}
                    value={field.value}
                    onValueChange={(value) => {
                      console.log("value from radio is ", value);
                      field.onChange(value);
                    }}
                    className={cn(
                      "bg-white p-8 rounded-sm shadow-lg border w-full h-full justify-center transition-colors duration-200 text-black",
                      field.value === e && "bg-[#65D8BC] text-white"
                    )}
                  >
                    <Label
                      className="flex flex-col items-center justify-center gap-6 w-full h-full cursor-pointer"
                      htmlFor={e}
                    >
                      <RadioGroupItem
                        id={e}
                        value={e}
                        className={cn(
                          "focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-2",
                          field.value === e ? "border-white" : ""
                        )}
                      />
                      <div className="font-bold text-sm sm:text-xl font-inter text-center">
                        {e}
                      </div>
                    </Label>
                  </RadioGroup>
                ))}
              </>
            )}
          />
        </div>
        <SubmitButton disabled={!form.formState.isValid} type="submit">
          Continue
        </SubmitButton>
      </form>
    </Form>
  );
}

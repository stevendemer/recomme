"use client";

import { cn } from "@/lib/utils";
import { Controller, useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import SubmitButton from "../submit-button";
import { Form, FormField, FormItem } from "../ui/form";

interface IProp {
  options: string[];
  title: string;
  name: string;
}

interface IFormInputs {
  radio_select: string;
}

export default function RadioSelect({ options, title, name }: IProp) {
  console.log("name is ", name);

  const form = useForm();

  const gridLayout =
    options.length === 5
      ? "grid-cols-3"
      : options.length === 4
      ? "grid-cols-2"
      : "grid-cols-1";

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-evenly h-full w-full flex-grow mx-auto container transition-colors duration-200"
      >
        <h2 className="sm:text-3xl text-xl text-center text-black font-sans">
          {title}
        </h2>
        <div
          className={cn(
            "grid gap-2 w-full max-w-3xl place-items-center grid-flow-row",
            gridLayout
          )}
        >
          <Controller
            name="radio_select" // Unique name for this field
            control={form.control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <>
                {options?.map((e: any) => (
                  <RadioGroup
                    key={e}
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
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
        <SubmitButton type="submit" disabled={!form.formState.isValid}>
          Continue
        </SubmitButton>
      </form>
    </Form>
  );
}

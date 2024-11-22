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
import house from "@/public/assets/house.svg";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface IProp {
  step: {
    options: string[];
    title: string;
    name: string;
  };
  onVote: () => void;
}

interface Question {
  title: string;
  options: string[];
}

interface MultiRadioSelectProps {
  questions: Question[];
  onSubmit: (data: Record<string, string>) => void;
}

interface IFormInputs {
  [key: string]: string; // input name is dynamic
}

export default function RadioSelect({ data, onVote, ...props }: any) {
  const params = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const form = useForm<IFormInputs>({
    mode: "onChange",
  });

  useEffect(() => {
    if (params.get("type") === "card") {
      replace(`${pathname}?${params.toString()}`);
    }
  }, [params, pathname]);

  useEffect(() => {
    form.reset();
    setSelectedItems([]);
  }, [data, form]);

  const handleSelection = (
    value: string,
    onChange: (value: string[]) => void
  ) => {
    let newSelected: string[];

    if (selectedItems.includes(value)) {
      // Remove item if already selected
      newSelected = selectedItems.filter((item) => item !== value);
    } else {
      // Add item if not selected
      newSelected = [...selectedItems, value];
    }

    setSelectedItems(newSelected);
    onChange(newSelected); // Update form value
  };

  if (data.options.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <h2 className="text-xl text-center font-body">No questions found !</h2>
      </div>
    );
  }

  const isFormValid =
    data?.images?.length > 0
      ? selectedItems.length > 0
      : !!form.watch(data?.title);

  function onSubmit(data: any) {
    console.log(data);
    onVote();
  }

  const hasImages = data?.images?.length > 0;

  return (
    <Form {...form}>
      <h2 className="sm:text-2xl text-xl text-center text-black font-sans">
        {data?.title}
      </h2>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="transition-colors duration-200 max-w-xl sm:max-w-7xl gap-4 flex flex-col items-center justify-center h-full"
      >
        <div className="flex flex-col items-center justify-center w-full">
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
                  "transition-colors duration-200 text-black flex flex-wrap justify-center items-center lg:max-w-5xl w-full",
                  !hasImages && "sm:grid-cols-2 grid"
                  // data?.options.length > 4 ? "sm:grid-cols-3" : "sm:grid-cols-2"
                  // data?.options.length > 4 ? "sm:grid-cols-3" : "sm:grid-cols-2"
                )}
              >
                {hasImages
                  ? data.images.map((value: any, index: number) => {
                      const baseUrl =
                        process.env.NEXT_PUBLIC_API_URL + value.src;
                      const isSelected = selectedItems.includes(value.text);

                      console.log("image url is ", baseUrl);

                      return (
                        <div
                          className={cn(
                            "flex justify-center items-center flex-[0_0_calc(30%-20px)] w-full h-auto cursor-pointer"
                          )}
                        >
                          <Card
                            onClick={() =>
                              handleSelection(value.text, field.onChange)
                            }
                            key={index}
                            className={cn(
                              "flex flex-col items-center justify-center w-full rounded-sm transition-colors duration-200 shadow-lg",
                              isSelected
                                ? "bg-[#65D9BD] text-white"
                                : "bg-white text-black"
                            )}
                          >
                            <CardContent className="rounded-sm pointer-events-none relative aspect-video w-full h-full">
                              <Image
                                src={baseUrl}
                                alt={value.text ?? "alt"}
                                fill
                                className="object-scale-down"
                              />
                            </CardContent>
                            <CardFooter>
                              <p className="text-center whitespace-normal font-bold font-rubik sm:text-xl text-lg p-2">
                                {value.text}
                              </p>
                            </CardFooter>
                          </Card>
                        </div>
                      );
                    })
                  : data.options.map((value: any, index: number) => (
                      <div
                        key={index}
                        className={cn(
                          "p-6 rounded-sm border shadow-lg flex min-h-[200px] h-full w-full flex-col items-center justify-center transition-colors duration-200 text-black",
                          field.value === value && "bg-[#65D9BD] text-white"
                        )}
                        onClick={() => handleSelection(value, field.onChange)}
                      >
                        <Label
                          className="flex flex-col items-center justify-center w-full cursor-pointer"
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
                    ))}
              </RadioGroup>
            )}
          />
        </div>

        <SubmitButton disabled={!isFormValid} type="submit">
          Continue
        </SubmitButton>
      </form>
    </Form>
  );
}

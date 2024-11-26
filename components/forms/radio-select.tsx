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
  const { push } = useRouter();

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const form = useForm<IFormInputs>({
    mode: "onChange",
  });

  useEffect(() => {
    if (params.get("type") === "card") {
      push(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [pathname]);

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
      <div className="h-full flex flex-col items-center">
        <h2 className="text-md lg:text-2xl text-center text-black font-sans">
          {data?.title}
        </h2>

        <div className="transition-colors duration-200 sm:max-w-screen-md flex flex-col justify-center items-center w-full h-full">
          {/* main container */}
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
                  "lg:max-w-5xl w-full h-full",
                  hasImages
                    ? "transition-colors duration-200 text-black flex flex-wrap lg:h-[80%] justify-center "
                    : "sm:grid-cols-2 grid place-items-center gap-4 lg:max-h-[80%]"
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
                        <Card
                          onClick={() =>
                            handleSelection(value.text, field.onChange)
                          }
                          key={index}
                          className={cn(
                            "flex flex-col justify-center duration-200 transition-all items-center flex-[0_0_calc(30%-15px)] cursor-pointer",
                            isSelected
                              ? "bg-[#65D9BD] text-white"
                              : "bg-white text-black"
                          )}
                        >
                          <CardContent className="pointer-events-none hidden md:flex relative aspect-square">
                            <Image
                              src={baseUrl}
                              alt={value.text ?? "alt"}
                              fill
                              className="object-contain object-center"
                            />
                          </CardContent>
                          <CardFooter>
                            <p className="text-center whitespace-normal font-bold font-rubik md:text-lg text-md">
                              {value.text}
                            </p>
                          </CardFooter>
                        </Card>
                        // </div>
                      );
                    })
                  : data.options.map((value: any, index: number) => (
                      <div
                        key={index}
                        className={cn(
                          "p-6 rounded-sm border shadow-lg flex flex-grow w-full h-full flex-col items-center justify-center transition-colors duration-200 text-black",
                          field.value === value
                            ? "bg-[#65D9BD] text-white"
                            : "bg-white text-black"
                        )}
                        // onClick={() => handleSelection(value, field.onChange)}
                        onClick={() => field.onChange(value)} // click updates the radio button
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
                          <div className="font-bold text-sm sm:text-xl font-inter text-center p-1">
                            {value}
                          </div>
                        </Label>
                      </div>
                    ))}
              </RadioGroup>
            )}
          />
        </div>
        <SubmitButton
          // onClick={() => form.handleSubmit(onSubmit)}
          onClick={form.handleSubmit(onSubmit)}
          disabled={!isFormValid}
          // type="submit"
        >
          Continue
        </SubmitButton>
      </div>
    </Form>
  );
}

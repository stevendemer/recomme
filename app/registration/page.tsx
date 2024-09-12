"use client";
import ParentContainer from "@/components/parent-container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/submit-button";
import { ChangeEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

type Inputs = {
  location: string;
  ecName: string;
  role: string;
};

export default function RegistrationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Form submitted ", data);
  };

  return (
    <div className="gradient-bg flex justify-center items-center overflow-x-hidden font-rubik">
      <ParentContainer>
        <div className="flex flex-col items-center w-full h-full relative m-auto justify-center max-w-lg space-y-4">
          <h1 className="text-5xl font-sans leading-tight text-black">
            Registration
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center w-full h-1/3 max-w-sm space-y-2 p-6"
          >
            <Input
              className="rounded-full shadow-xl py-6"
              placeholder="Location"
              {...register("location", {
                required: "Location is required",
                minLength: { message: "Minimum length is 4", value: 4 },
              })}
            />
            {errors.location && (
              <p className="mt-1 text-sm text-red-600">
                {errors.location.message}
              </p>
            )}
            <Input
              className="rounded-full shadow-xl py-6"
              placeholder="Ec Name"
              {...register("ecName", {
                required: "EC Name is required",
                minLength: { message: "Minimum length is 3", value: 3 },
              })}
            />
            {errors.ecName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.ecName.message}
              </p>
            )}

            <Input
              {...register("role", {
                required: "Role is required",
                minLength: { message: "Minimum length is 3", value: 3 },
              })}
              className="rounded-full shadow-xl py-6"
              placeholder="Role"
            />
            {errors.role && (
              <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
            )}
          </form>
          <SubmitButton
            type="submit"
            disabled={!isValid}
            className={cn(
              isValid
                ? "bg-blue-500 text-white hover:bg-blue-400"
                : "bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-200"
            )}
          >
            Confirm
          </SubmitButton>
        </div>
      </ParentContainer>
    </div>
  );
}

"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/submit-button";
import { SubmitHandler, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import usePlacesAutoComplete from "use-places-autocomplete";
import { useMemo, useState, useEffect, useRef, RefObject } from "react";
import { useOnClickOutside } from "usehooks-ts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import ParentContainer from "@/components/parent-container";
import Spinner from "@/components/spinner";
import MessageContainer from "@/components/message-container";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Inputs = {
  location: string;
  ecName: string;
  role: ["EC Manager", "EC Member", "Other"];
};

const schema = z.object({
  location: z
    .string({
      required_error: "Location is required",
    })
    .trim(),
  ecName: z
    .string({
      required_error: "Please enter your EC name",
    })
    .trim(),
  role: z.enum(["EC Manager", "EC Member", "Other"], {
    required_error: "Please select a role",
  }),
});

export default function RegistrationPage() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const router = useRouter();

  const { toast } = useToast();

  const ref = useRef(null);

  const locationRef = useRef<any>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (locationRef.current) {
      locationRef?.current.focus();
    }
  }, []);

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = (data) => {
    console.log("Form submitted ", data);

    if (form.formState.submitCount > 4) {
      toast({
        description: "You have reached the maximum number of submissions",
      });
    } else {
      toast({
        description: "Form submitted ! Thanks for your time ",
      });
    }
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA1TOwkhouIi0rVLuXqNHUcgz0hgZFWM1M",
    libraries: ["places"],
  });

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutoComplete({
    debounce: 300,
  });

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextRef: RefObject<HTMLInputElement | HTMLButtonElement> | null
  ) => {
    // prevent the form from submitting when pressing enter
    if (e.key === "Enter") {
      e.preventDefault();
      if (nextRef?.current) {
        nextRef.current.focus();
        if (nextRef.current.tagName === "BUTTON") {
          nextRef.current.click();
        }
      }
    }
  };

  useOnClickOutside(ref, () => clearSuggestions());

  if (!isLoaded)
    return (
      <div className="flex justify-center h-screen items-center">
        <Spinner size="xl" />
      </div>
    );

  const watchFields = form.watch(["location", "ecName", "role"]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-around relative">
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
        className=" max-w-sm sm:w-full space-y-4 flex flex-col items-center justify-center"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl sm:text-5xl font-sans leading-tight text-black">
          Registration
        </h1>

        <Autocomplete
          className="w-full"
          onLoad={(auto) => {
            auto.addListener("place_changed", () => {
              const place = auto.getPlace();
              if (place) {
                // setPlace(place.formatted_address || "");
                form.setValue("location", place.formatted_address || "");
                form.trigger("location");
              }
            });
          }}
        >
          <Input
            placeholder="Location"
            className="w-full rounded-full py-5 shadow-xl mt-2 pl-6"
            onKeyDown={(e) => handleKeyDown(e, nameRef)}
            {...form.register("location", { required: true })}
          />
        </Autocomplete>
        <Input
          className="rounded-full shadow-xl py-5 w-full pl-6"
          placeholder="EC Name"
          onKeyDown={(e) => handleKeyDown(e, roleRef)}
          {...form.register("ecName", { required: true })}
        />

        <Select
          name="role"
          onValueChange={(value: any) => {
            form.setValue("role", value);
            form.trigger("role"); // trigger validation
          }}
          defaultValue={"EC Manager"}
        >
          <SelectTrigger ref={roleRef}>
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent className="py-5 w-full">
            <SelectItem value="EC Manager">EC Manager</SelectItem>
            <SelectItem value="EC Member">EC Member</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>

        {/* <div className="fixed bottom-20 flex-shrink-0 flex justify-center items-center">
            <SubmitButton
              type="submit"
              disabled={!form.formState.isValid}
              className={cn(
                "flex justify-center items-center",
                form.formState.isValid
                  ? "bg-black text-white hover:bg-black/80"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-200"
              )}
            >
              Confirm
            </SubmitButton>
          </div> */}
      </form>
      <Link href="/thankyou">
        <SubmitButton type="submit" disabled={!form.formState.isValid}>
          Confirm
        </SubmitButton>
      </Link>
    </div>
  );
}

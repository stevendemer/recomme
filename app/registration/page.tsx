"use client";
import BackgroundImage from "@/components/background-image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/submit-button";
import { SubmitHandler, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  Autocomplete,
  GoogleMap,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useMemo, useState, useEffect, useRef, RefObject } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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
    mode: "all",
  });

  const { toast } = useToast();

  const ref = useRef(null);

  const locationRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLButtonElement>(null);

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
      <div className="text-green-400 text-lg text-center font-body tracking-wide">
        Loading locations...
      </div>
    );

  return (
    <ParentContainer>
      <BackgroundImage>
        <div className="flex flex-col items-center w-full h-full  relative mx-auto justify-center max-w-lg space-y-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col items-center justify-center w-full h-full max-w-full space-y-4 p-6 m-auto"
            >
              <h1 className="text-5xl font-sans leading-tight text-black">
                Registration
              </h1>

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Autocomplete
                        onLoad={(auto) => {
                          auto.addListener("place_changed", () => {
                            const place = auto.getPlace();
                            if (place) {
                              // setPlace(place.formatted_address || "");
                              form.setValue(
                                "location",
                                place.formatted_address || ""
                              );
                              // form.trigger("location");
                            }
                          });
                        }}
                      >
                        <Input
                          {...field}
                          placeholder="Enter a location"
                          className="w-full rounded-full py-5 shadow-xl mt-2"
                          onKeyDown={(e) => handleKeyDown(e, nameRef)}
                          ref={locationRef}
                        />
                      </Autocomplete>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <PlacesAutoComplete /> */}
              <FormField
                control={form.control}
                name="ecName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        className="rounded-full shadow-xl py-5 w-full"
                        placeholder="EC Name"
                        {...field}
                        onKeyDown={(e) => handleKeyDown(e, roleRef)}
                        ref={nameRef}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="w-full mb-4">
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        // form.trigger("role"); // trigger validation
                      }}
                      defaultValue={"EC Manager"}
                    >
                      <FormControl>
                        <SelectTrigger ref={roleRef}>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="py-5 w-full">
                        <SelectItem value="EC Manager">EC Manager</SelectItem>
                        <SelectItem value="EC Member">EC Member</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="fixed bottom-20 flex-shrink-0 max-w-lg">
                <SubmitButton
                  type="submit"
                  disabled={!form.formState.isValid || !form.formState.isDirty}
                  className={cn(
                    "flex justify-center items-center",
                    form.formState.isValid
                      ? "bg-black text-white hover:bg-black/80"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-200"
                  )}
                >
                  Confirm
                </SubmitButton>
              </div>
            </form>
          </Form>
        </div>
      </BackgroundImage>
    </ParentContainer>
  );
}

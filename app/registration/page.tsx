"use client";
import ParentContainer from "@/components/parent-container";
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
import { useMemo, useState, useEffect, useRef } from "react";
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
    mode: "onSubmit",
  });

  const { toast } = useToast();

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = (data) => {
    console.log("Form submitted ", data);

    toast({
      description: "Form submitted ! Thanks for your time ",
    });
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

  const ref = useRef(null);

  useOnClickOutside(ref, () => clearSuggestions());

  if (!isLoaded)
    return (
      <div className="text-green-400 text-lg text-center font-body tracking-wide">
        Loading locations...
      </div>
    );

  return (
    <div className="gradient-bg flex justify-center items-center overflow-x-hidden font-rubik">
      <ParentContainer>
        <div className="flex flex-col items-center w-full h-full relative mx-auto justify-center max-w-xl space-y-4">
          <h1 className="text-5xl font-sans leading-tight text-black">
            Registration
          </h1>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col items-center w-full h-1/3 max-w-sm space-y-4 p-6"
            >
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
                              form.trigger("location");
                            }
                          });
                        }}
                      >
                        <Input
                          {...field}
                          placeholder="Enter a location"
                          className="w-full rounded-full py-6 shadow-xl mt-2"
                          // value={place}
                          // onChange={(e) => setPlace(e.currentTarget.value)}
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
                        className="rounded-full shadow-xl py-6 w-full"
                        placeholder="EC Name"
                        {...field}
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
                        form.trigger("role"); // trigger validation
                      }}
                      defaultValue={"EC Manager"}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="py-6 w-full">
                        <SelectItem value="EC Manager">EC Manager</SelectItem>
                        <SelectItem value="EC Member">EC Member</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SubmitButton
                type="submit"
                disabled={!form.formState.isValid}
                className={cn(
                  form.formState.isValid
                    ? "bg-black text-white hover:bg-black/80"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-200"
                )}
              >
                Confirm
              </SubmitButton>
            </form>
          </Form>
        </div>
      </ParentContainer>
    </div>
  );
}

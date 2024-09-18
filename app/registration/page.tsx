"use client";
import ParentContainer from "@/components/parent-container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/submit-button";
import { SubmitHandler, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Wrapper } from "@googlemaps/react-wrapper";
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
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { CommandEmpty, CommandList } from "cmdk";
import { useOnClickOutside } from "usehooks-ts";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Check,
  ChevronDownCircleIcon,
  ChevronUpCircleIcon,
} from "lucide-react";
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

type Inputs = {
  location: string;
  ecName: string;
  role: ["EC Manager", "EC Member", "Other"];
};

// function PlacesAutoComplete() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyA1TOwkhouIi0rVLuXqNHUcgz0hgZFWM1M",
//     libraries: ["places"],
//   });

//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutoComplete({
//     debounce: 300,
//   });

//   const [open, setOpen] = useState(false);
//   const [cities, setCities] = useState<{ name: string; id: string }[]>([]);
//   const [place, setPlace] = useState("");

//   const ref = useRef(null);

//   useOnClickOutside(ref, () => clearSuggestions());

//   if (!isLoaded)
//     return <div className="text-red-400 text-xl text-center">Loading...</div>;

//   const handleSelect = async (city: { name: string; id: string }) => {
//     setValue(city.name);
//     clearSuggestions();
//     setOpen(false);
//   };

//   return (
//     <div className="max-w-xl w-full">
//       <Label className="py-6">EC Location</Label>
//       <Autocomplete
//         onLoad={(auto) => {
//           auto.addListener("place_changed", () => {
//             const place = auto.getPlace();
//             if (place) {
//               setPlace(place.formatted_address || "");
//             }
//           });
//         }}
//       >
//         <Input
//           type="text"
//           placeholder="Enter a location"
//           className="w-full rounded-full py-6 shadow-xl mt-2"
//           value={place}
//           onChange={(e) => setPlace(e.currentTarget.value)}
//         />
//       </Autocomplete>
//     </div>
//   );
// }

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
  const onSubmit: SubmitHandler<z.infer<typeof schema>> = (data) => {
    console.log("Form submitted ", data);
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
                    <FormLabel>Location</FormLabel>
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
                    <FormLabel>EC Name</FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-full shadow-xl py-6 w-full"
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
                    <FormLabel>EC Role</FormLabel>
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
                      <SelectContent className="py-6">
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

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

type Inputs = {
  location: string;
  ecName: string;
  role: string;
};

// function Places() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!,
//     libraries: ["places"],
//   });

//   if (isLoaded)
//     return (
//       <div className="text-xl text-indigo-400 font-semibold">Loading...</div>
//     );

//   return <Map />;
// }

// function Map() {
//   const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
//   const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(
//     null
//   );

//   return (
//     <>
//       <PlacesAutoComplete />
//       {/* <GoogleMap
//         zoom={10}
//         center={center}
//         mapContainerClassName="map-container"
//       >
//         {selected && <Marker position={selected} />}
//       </GoogleMap> */}
//     </>
//   );
// }

function PlacesAutoComplete() {
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

  const [open, setOpen] = useState(false);
  const [cities, setCities] = useState<{ name: string; id: string }[]>([]);
  const [place, setPlace] = useState("");

  const ref = useRef(null);

  useOnClickOutside(ref, () => clearSuggestions());

  if (!isLoaded)
    return <div className="text-red-400 text-xl text-center">Loading...</div>;

  const handleSelect = async (city: { name: string; id: string }) => {
    setValue(city.name);
    clearSuggestions();
    setOpen(false);
  };

  return (
    <div className="w-full">
      <Autocomplete
        onLoad={(auto) => {
          auto.addListener("place_changed", () => {
            const place = auto.getPlace();
            if (place) {
              setPlace(place.formatted_address || "");
            }
          });
        }}
      >
        <Input
          type="text"
          placeholder="Enter a location"
          className="w-full rounded-full py-6 shadow-xl"
          value={place}
          onChange={(e) => setPlace(e.currentTarget.value)}
        />
      </Autocomplete>
    </div>
  );
}

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
            <PlacesAutoComplete />
            {/* <Input
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
              )} */}
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
                ? "bg-black text-white hover:bg-black/80"
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

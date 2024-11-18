"use client";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import SubmitButton from "@/components/submit-button";
import {SubmitHandler, useForm} from "react-hook-form";
import {cn} from "@/lib/utils";
import {Autocomplete, useLoadScript} from "@react-google-maps/api";
import usePlacesAutoComplete from "use-places-autocomplete";
import {useMemo, useState, useEffect, useRef, RefObject} from "react";
import {useOnClickOutside, useSessionStorage} from "usehooks-ts";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useToast} from "@/components/ui/use-toast";
import ParentContainer from "@/components/parent-container";
import Spinner from "@/components/spinner";
import MessageContainer from "@/components/message-container";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {Separator} from "@radix-ui/react-select";

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
    role: z.enum(["EC Manager", "EC Member", "Other"]).optional()
});

export default function RegistrationPage() {

    const [name, setName] = useSessionStorage('ec-name', 'Alec');

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        mode: "onChange",
        defaultValues: {
            location: '',
            ecName: '',
            role: 'EC Manager'

        }
    });

    const router = useRouter();

    const {toast} = useToast();

    const ref = useRef(null);

    const locationRef = useRef<any>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const roleRef = useRef<HTMLButtonElement>(null);

    const location = form.watch('location');
    const ecName = form.watch('ecName');

    const isFormValid = () => {
        return Boolean(location?.trim() && ecName?.trim())
    }

    useEffect(() => {
        if (locationRef.current) {
            locationRef?.current.focus();
        }
    }, []);

    const onSubmit: SubmitHandler<z.infer<typeof schema>> = (data) => {
        console.log("Form submitted ", data);

        if (!isFormValid()) {
            return;
        }

        if (form.formState.submitCount > 8) {
            toast({
                description: "You have reached the maximum number of submissions",
            });
            return;
        }

        if (data.role === 'EC Manager') {
            setName(data.ecName)
        }

        if (data.role === 'EC Member') {
            router.push('/members')
        } else {
            router.push('/thankyou')
        }
    };

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyA1TOwkhouIi0rVLuXqNHUcgz0hgZFWM1M",
        libraries: ["places"],
    });

    const {
        ready,
        value,
        setValue,
        suggestions: {status, data},
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
            <div className="flex w-full justify-center h-screen items-center">
                <Spinner size="xl"/>
            </div>
        );


    return (
        <section className="w-full flex-shrink-0  flex flex-col items-center justify-around relative space-y-4">
            <form
                // onSubmit={form.handleSubmit(onSubmit)}
                className="max-w-sm relative sm:w-full space-y-6 justify-around flex flex-col items-center font-body text-foreground"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <h1 className="text-xl sm:text-3xl font-sans leading-tight text-black">
                    Registration
                </h1>

                <Autocomplete
                    className="w-full"
                    onLoad={(auto) => {
                        auto.addListener("place_changed", () => {
                            const place = auto.getPlace();
                            if (place) {
                                form.setValue("location", place.formatted_address || "", {
                                    shouldValidate: true
                                });
                            }
                        });
                    }}
                >
                    <Input
                        placeholder="Location"
                        className={cn("w-full rounded-full py-5 shadow-xl mt-2 pl-6", form.formState.errors.location && "border-red-500")}
                        {...form.register('location', {required: true})}

                        onKeyDown={(e) => handleKeyDown(e, nameRef)}
                    />
                </Autocomplete>
                {form.formState.errors.location && (
                    <p className="text-red-500 text-sm ml-4">
                        {form.formState.errors.location.message}
                    </p>
                )}
                <Input
                    className={cn("rounded-full shadow-xl py-5 w-full pl-6", form.formState.errors.ecName && "border-red-500")}
                    placeholder="EC Name"
                    onKeyDown={(e) => handleKeyDown(e, roleRef)}
                    {...form.register("ecName", {required: true, onChange: () => form.trigger('ecName')})}
                />
                {form.formState.errors.ecName && (
                    <p className="text-red-500 text-sm ml-4">
                        {form.formState.errors.ecName.message}
                    </p>
                )}

                <Select
                    name="role"
                    onValueChange={(value: any) => {
                        form.setValue("role", value, {
                            shouldValidate: true,
                        });
                    }}
                    defaultValue={"EC Manager"}
                >
                    <SelectTrigger ref={roleRef}>
                        <SelectValue placeholder="Select a role"/>
                    </SelectTrigger>
                    <SelectContent className="py-5 w-full">
                        <SelectItem value="EC Manager">EC Manager</SelectItem>
                        <SelectItem value="EC Member">EC Member</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                </Select>
                <SubmitButton
                    className={cn(isFormValid() ? "bg-black text-white hover:bg-black/80" : "bg-gray-300 text-muted-foreground cursor-not-allowed")}>
                    Continue
                </SubmitButton>
            </form>
        </section>
    );
}

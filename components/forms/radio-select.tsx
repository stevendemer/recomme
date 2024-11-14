"use client";

import {cn} from "@/lib/utils";
import {Controller, useForm} from "react-hook-form";
import {RadioGroup, RadioGroupItem} from "../ui/radio-group";
import {Label} from "../ui/label";
import SubmitButton from "../submit-button";
import {Form} from "../ui/form";
import {useEffect, useState} from "react";
import Image from "next/image";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import house from '@/public/assets/house.svg'
import {Card, CardContent, CardFooter} from "@/components/ui/card";

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
    options: string[]
}

interface MultiRadioSelectProps {
    questions: Question[];
    onSubmit: (data: Record<string, string>) => void;
}

interface IFormInputs {
    [key: string]: string; // input name is dynamic
}

export default function RadioSelect({data, onVote, ...props}: any) {
    const params = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const [selectedItems, setSelectedItems] = useState<string[]>([])


    const form = useForm<IFormInputs>({
        mode: "onChange",
    });

    useEffect(() => {
        if (params.get("type") === "card") {
            replace(`${pathname}?${params.toString()}`);
        }
    }, [params, pathname]);


    useEffect(() => {

        form.reset()
        setSelectedItems([]);
    }, [data, form]);

    const handleSelection = (value: string, onChange: (value: string[]) => void) => {
        let newSelected: string[];

        if (selectedItems.includes(value)) {
            // Remove item if already selected
            newSelected = selectedItems.filter(item => item !== value);
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


    function onSubmit(data: any) {
        console.log(data);
        onVote();
    }


    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col items-center justify-around h-full w-full flex-grow mx-auto container transition-colors duration-200 max-w-xl sm:max-w-7xl gap-8"
            >
                <h2 className="sm:text-2xl text-xl text-center text-black font-sans">
                    {data?.title}
                </h2>
                <Controller
                    name={data?.title}
                    control={form.control}
                    rules={{required: "This field is required"}}
                    render={({field}) => (
                        <RadioGroup
                            onValueChange={(value) => {
                                field.onChange(value);
                                console.log(value);
                            }}
                            className={cn(
                                "gap-4 transition-colors duration-200 text-black grid w-full h-full lg:max-w-5xl grid-cols-2 ", data?.options.length > 4 ? "sm:grid-cols-3" : "sm:grid-cols-2",
                            )}
                        >
                            {data?.images?.length > 0 ? (
                                // Images view
                                data.images.map((value: any, index: number) => {
                                    const baseUrl = process.env.NEXT_PUBLIC_API_URL + value.src;
                                    const isSelected = selectedItems.includes(value.text);

                                    console.log('image url is ', baseUrl);

                                    return (
                                        <Card
                                            onClick={() => handleSelection(value.text, field.onChange)}
                                            key={index}
                                            className={cn(
                                                'flex flex-col items-center justify-center h-full w-full rounded-sm transition-colors duration-200 shadow-lg',
                                                isSelected ? 'bg-[#65D9BD] text-white' : 'bg-white text-black'
                                            )}
                                        >
                                            <CardContent
                                                className="rounded-sm pointer-events-none relative h-full">
                                                <Image
                                                    src={baseUrl}
                                                    alt={value.text ?? 'alt'}
                                                    fill
                                                    className='object-contain object-center w-full h-full'
                                                />
                                            </CardContent>
                                            <CardFooter>
                                                <p className='text-center whitespace-normal font-bold font-rubik sm:text-xl text-lg p-2'>{value.text}</p>
                                            </CardFooter>
                                        </Card>
                                    );
                                })
                            ) : (
                                data.options.map((value: any, index: number) => (
                                    <div
                                        key={index}
                                        className={cn(
                                            "p-8 rounded-sm border shadow-lg w-full h-full transition-colors duration-200 text-black flex justify-center",
                                            field.value === value && "bg-[#65D9BD] text-white"
                                        )}
                                    >
                                        <Label
                                            className="flex flex-col items-center justify-center gap-6 w-full h-full cursor-pointer"
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
                                ))
                            )}
                        </RadioGroup>
                    )}
                />

                <SubmitButton disabled={!(selectedItems.length > 0)} type="submit">
                    Continue
                </SubmitButton>
            </form>
        </Form>
    );
}

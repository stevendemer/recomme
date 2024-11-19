"use client";
import Image from "next/image";
import user from "@/public/assets/user-arrow.png";
import {Button} from "@/components/ui/button";
import {IconArrowLeft} from "@tabler/icons-react";
import {useRouter} from "next/navigation";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import SubmitButton from "@/components/submit-button";
import {useState} from "react";
import Link from "next/link";
import house from '@/public/assets/house.svg'

export default function AimPage() {
    const router = useRouter();

    const text = [{
        title: `Cutting down on energy bills`,
        body: `while staying eco-friendly. Who doesn’t love saving money and the planet at the same time?`

    },
        {
            title: `He knows change is contagious!`,
            body: `Inspiring others to join you on this journey toward sustainability.`
        },
        {
            title: `Sharing knowledge is part of the mission`,
            body: `And of course, he's always ready to lend a hand when someone needs help understanding the tech side of things.`
        }
    ]

    const [selected, setSelected] = useState(0);

    return (
        <div className="flex flex-col items-center h-full w-full p-2">
            <div
                className="flex flex-col items-center justify-center w-full h-full max-w-5xl">
                <div className="flex items-center w-full justify-between">
                    <button
                        onClick={() => router.back()}
                        className="bg-white shadow-lg text-[#65D9BD] p-1 sm:p-3  rounded-sm text-center hover:shadow-xl transition-shadow duration-200 "
                    >
                        <IconArrowLeft size={37}/>
                    </button>

                    <div className="flex justify-center items-center relative w-full h-full">
                        <Image
                            className="object-contain object-center"
                            alt=""
                            src={user}
                            fill
                        />
                    </div>
                </div>
                <h2 className="font-sans whitespace-break-spaces p-4 text-black text-2xl">
                    What He&apos;s really aiming for:
                </h2>
            </div>
            <div className="flex flex-col items-center justify-center h-full gap-4">
                <div className="flex flex-col sm:flex-row justify-center items-center w-full h-full">
                    <div className="grid sm:grid-cols-3 grid-cols-1 w-full max-w-screen-md gap-x-2">
                        {text.map((value, index) => (
                            <Card className='pointer-events-none flex flex-col h-full shadow-md'
                                  key={value.title}>
                                <CardHeader className='flex-shrink-0'>
                                    <div className="relative aspect-video">
                                        <Image
                                            className="object-contain object-center w-full"
                                            alt=""
                                            src={house}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <h2 className="text-lg sm:text-xl text-ellipsis line-clamp-4 text-center font-inter">
                                        {value.title}
                                    </h2>
                                </CardHeader>
                                <CardContent className='flex items-start font-inter flex-1'>
                                    <p className="text-muted-foreground text-center text-ellipsis text-md whitespace-break-spaces">
                                        {value.body}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div>
                    <Link passHref href="/approach">
                        <SubmitButton>Continue</SubmitButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}

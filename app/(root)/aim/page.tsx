"use client";
import Image from "next/image";
import user from "@/public/assets/user-arrow.png";
import {Button} from "@/components/ui/button";
import {IconArrowLeft} from "@tabler/icons-react";
import {useRouter} from "next/navigation";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import SubmitButton from "@/components/submit-button";
import {useState} from "react";
import Link from "next/link";
import house from '@/public/assets/house.svg'

export default function AimPage() {
    const router = useRouter();

    const [selected, setSelected] = useState(0);

    return (
        <div className="grid place-items-center w-full h-full max-w-5xl">
            <div
                className="flex flex-col items-center justify-center w-full h-full max-w-3xl gap-8 relative flex-grow pt-12">
                <div className="flex items-center w-full justify-between">
                    <button
                        onClick={() => router.back()}
                        className="bg-white shadow-lg text-[#65D9BD] sm:px-6 sm:py-4 px-4 py-2 rounded-sm"
                    >
                        <IconArrowLeft size={37}/>
                    </button>

                    <div className="relative flex justify-center w-full items-center h-full">
                        <Image
                            className="object-contain object-center w-full h-full"
                            alt=""
                            src={user}
                            fill
                        />
                    </div>
                </div>
                <h2 className="font-sans whitespace-normal p-4 text-black text-2xl sm:text-5xl">
                    What He&apos;s really aiming for:
                </h2>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center w-full h-full">
                <div className="grid sm:grid-cols-3 grid-cols-1 w-full gap-x-4 h-auto">
                    <Card className='pointer-events-none'>
                        <CardHeader>
                            <div className="relative aspect-video">
                                <Image
                                    className="object-contain object-center"
                                    alt=""
                                    src={house}
                                    fill
                                />
                            </div>
                        </CardHeader>
                        <CardContent
                            className="w-full flex flex-col items-center  font-inter gap-y-2">
                            <h2 className="text-lg font-bold sm:text-2xl whitespace-normal text-center">Cutting down on
                                energy
                                bills</h2>
                            <p className="overflow-hidden text-ellipsis whitespace-normal max-h-36 text-muted-foreground text-center">
                                while staying eco-friendly. Who doesn’t love saving money and the planet at the same
                                time?
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="relative aspect-video">
                                <Image
                                    className="object-contain object-center "
                                    alt=""
                                    src={house}
                                    fill
                                />
                            </div>
                        </CardHeader>
                        <CardContent className="w-full flex items-center flex-col font-inter gap-y-2">
                            <h2 className="sm:text-2xl font-bold text-lg text-center">He knows change is
                                contagious!</h2>
                            <p className="overflow-hidden text-ellipsis whitespace-normal max-h-36 text-muted-foreground text-center">
                                Inspiring others to join you on this journey toward sustainability.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>

                            <div className="relative aspect-video">
                                <Image
                                    className="object-contain object-center"
                                    alt=""
                                    src={house}
                                    fill
                                />
                            </div>
                        </CardHeader>

                        <CardContent className="w-full  flex items-center flex-col font-inter gap-y-2">

                            <h2 className="sm:text-2xl text-lg font-bold text-center">Sharing knowledge is part of the
                                mission</h2>
                            <p className="overflow-hidden text-ellipsis whitespace-normal max-h-36 text-muted-foreground text-center">
                                And of course, he&apos;s always ready to lend a hand when someone needs help
                                understanding
                                the tech side of things.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Link passHref href="/approach">
                <SubmitButton>Continue</SubmitButton>
            </Link>
        </div>
    );
}

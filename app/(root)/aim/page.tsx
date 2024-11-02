"use client";
import Image from "next/image";
import user from "@/public/assets/user-arrow.png";
import { Button } from "@/components/ui/button";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SubmitButton from "@/components/submit-button";
import { useState } from "react";
import Link from "next/link";

export default function AimPage() {
  const router = useRouter();

  const [selected, setSelected] = useState(0);

  return (
    <div className="grid place-items-center w-full h-full max-w-5xl">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-3xl gap-8 relative flex-grow pt-12">
        <div className="flex items-center w-full justify-between">
          <button
            onClick={() => router.back()}
            className="bg-white shadow-lg text-[#65D9BD] sm:px-6 sm:py-4 px-4 py-2 rounded-sm"
          >
            <IconArrowLeft size={37} />
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
      <div className="flex flex-col sm:flex-row justify-center items-center w-full p-6 gap-4 flex-grow">
        <div className="grid sm:grid-cols-3 auto-rows-auto gap-8 h-full w-full">
          <Card>
            <CardHeader>
              <div className="relative aspect-auto">
                <Image
                  className="object-contain m-auto object-center"
                  alt=""
                  src={user}
                  width={70}
                  height={40}
                />
              </div>
            </CardHeader>
            <CardContent className="w-full flex items-center flex-col font-inter flex-grow">
              <h2 className="text-lg font-bold sm:text-2xl">Main title</h2>
              <p className="overflow-hidden text-ellipsis whitespace-normal max-h-36 text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci, minus necessitatibus. Illo voluptatem incidunt magni,
                ratione maiores facere eaque eos quam quas, deserunt, unde id
                consequuntur accusamus. Necessitatibus, dicta consequuntur.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="relative aspect-auto">
                <Image
                  className="object-contain m-auto object-center "
                  alt=""
                  src={user}
                  width={90}
                  height={30}
                />
              </div>
            </CardHeader>
            <CardContent className="w-full flex items-center flex-col font-inter">
              <h2 className="sm:text-2xl font-bold text-lg">Main title</h2>
              <p className="overflow-hidden text-ellipsis whitespace-normal max-h-36 text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci, minus necessitatibus. Illo voluptatem incidunt magni,
                ratione maiores facere eaque eos quam quas, deserunt, unde id
                consequuntur accusamus. Necessitatibus, dicta consequuntur.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="relative aspect-auto">
                <Image
                  className="object-contain m-auto object-center "
                  alt=""
                  src={user}
                  width={90}
                  height={30}
                />
              </div>
            </CardHeader>
            <CardContent className="w-full flex items-center flex-col font-inter">
              <h2 className="sm:text-2xl text-lg font-bold">Main title</h2>
              <p className="overflow-hidden text-ellipsis whitespace-normal max-h-36 text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci, minus necessitatibus. Illo voluptatem incidunt magni,
                ratione maiores facere eaque eos quam quas, deserunt, unde id
                consequuntur accusamus. Necessitatibus, dicta consequuntur.
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

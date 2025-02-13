import Image from "next/image";
import cloud from "@/public/assets/cloud.svg";
import flower from "@/public/assets/flower.svg";
import logo from "@/public/assets/logo.svg";
import Link from "next/link";
import SubmitButton from "@/components/submit-button";

export default function PrepPage() {
  return (
    <div className="flex flex-col w-full items-center gap-4 ">
      <div className="w-full grid grid-areas-[stack] place-items-center rounded-lg">
        {/* Cloud Background */}
        <div className="[grid-area:stack] w-full h-full absolute inset-0 z-0">
          <Image
            priority
            src={cloud}
            alt="cloud background"
            className="object-contain object-top"
            quality={100}
            fill
          />
        </div>

        {/*  Main content */}
        <div className="[grid-area:stack] w-full px-4 relative z-10">
          <div className="bg-white/40 backdrop-blur-sm p-16 rounded-xl w-full max-w-screen-lg">
            <div className="flex gap-x-4 items-start">
              <Image
                src={flower}
                alt="flower"
                className="px-2 object-contain object-center shrink-0"
              />
              <div className="text-black text-lg lg:text-xl font-normal font-body leading-tight sm:text-left whitespace-normal text-pretty">
                Great! It seems like your community is on the right track to
                shaping a more sustainable energy future.
                <div className="mb-6"></div>
                In the next step, we&apos;ll dive a bit deeper to refine the
                profile of your energy community. This will help us better
                understand your needs and create tailored solutions to maximize
                efficiency, independence, and environmental benefits.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="relative z-10 max-w-md px-4">
        <Link prefetch href="/confirmation">
          <SubmitButton className="w-full">Continue</SubmitButton>
        </Link>
      </div>
    </div>
  );
}

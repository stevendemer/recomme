import Image from "next/image";
import user from "@/public/assets/user.svg";
import leaf from "@/public/assets/leaf.svg";
import CSJTCard from "@/components/cards/csjt-card";
import SubmitButton from "@/components/submit-button";
import lamp from "@/public/assets/lamp.png";
import hands from '@/public/assets/hands.png'
import sunroof from "@/public/assets/sunroof.png"
import Link from "next/link";

export default function ConvinceJoinPage() {
    return (
        <div
            className="flex flex-col items-center justify-around w-full h-full max-w-5xl flex-1 relative">
            <div className="flex flex-col justify-around items-center gap-4 h-full w-full">
                <div className="relative w-16 h-16">
                    <Image
                        className="object-contain w-full h-full object-center"
                        src={user}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust image size for responsive
                    />
                </div>

                <p className="font-mulish whitespace-normal text-sm italic font-bold p-4 text-black">
                    {" "}
                    Your user looks like an{" "}
                </p>
            </div>
            <div className="flex justify-center items-center w-full flex-shrink space-x-4 relative">
                <Image
                    className="object-contain object-center transform scale-x-[-1]"
                    alt=""
                    width={30}
                    height={20}
                    src={leaf}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust image size for responsive
                />
                <h2 className="font-semibold font-sans text-lg text-black tracking-wide">
                    Environmental Tech Enthusiast
                </h2>
                <Image
                    className="object-contain object-center"
                    alt=""
                    width={30}
                    height={20}
                    src={leaf}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust image size for responsive
                />
            </div>
            <div className="flex items-center w-full p-6 flex-shrink">
                <div className="grid gap-4 md:grid-cols-3 w-full h-auto">
                    {/* 3 cards go here */}
                    <CSJTCard src={lamp}>
                        He&apos;s focused on minimising the impact of energy production and
                        consumption.
                    </CSJTCard>
                    <CSJTCard src={sunroof}>
                        He&apos;s all about sustainable living and clean energy
                    </CSJTCard>
                    <CSJTCard src={hands}>
                        Always on the lookout for ways to shrink his ecological footprint
                    </CSJTCard>
                </div>
            </div>
            <Link passHref href="/aim">
                <SubmitButton>Continue</SubmitButton>
            </Link>
        </div>
    );
}

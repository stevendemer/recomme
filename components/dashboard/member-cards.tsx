import {cn} from "@/lib/utils";
import {ReactNode} from "react";
import {Button} from "../ui/button";
import Image from "next/image";

export default function MemberCards({
                                        text,
                                        icon,
                                        className,
                                        members,
                                    }: {
    text: string;
    icon: any;
    className: string;
    members: number;
}) {
    return (
        <div className="bg-white rounded-sm p-4 w-full flex-shrink">
            <div className="flex flex-col items-center gap-3">
                {/* Icon Container */}
                <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center",
                    className
                )}>
                    <Image
                        width={32}
                        height={32}
                        className="object-contain"
                        alt="avatar icon"
                        src={icon}
                    />
                </div>

                {/* Text */}
                <h1 className="text-sm sm:text-base font-bold font-rubik text-slate-600 text-center">
                    {text}
                </h1>

                {/* Members Button */}
                <Button
                    className={cn(
                        "w-full min-w-[80px] max-w-[120px] py-1.5 text-white font-rubik font-bold hover:opacity-90 transition-opacity",
                        className
                    )}
                >
                    {members}
                </Button>
            </div>
        </div>
    );
}
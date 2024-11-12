"use client";

import {
    useState,
    useCallback,
    useRef,
    PropsWithChildren,
    useEffect,
} from "react";
import {
    motion,
    useAnimation,
    useMotionValue,
    useTransform,
    animate,
    PanInfo,
    AnimatePresence,
} from "framer-motion";
import {FaHeart, FaTimes} from "react-icons/fa";
import {Button} from "../ui/button";
import Image from "next/image";
import {useGetElements} from "@/hooks/use-get-elemenets";
import Spinner from "../spinner";
import {Heart, X} from "lucide-react";
import {cn} from "@/lib/utils";
import {useAtom} from "jotai";
import {cardAtoms, formAnswersAtom} from "@/app/store";
import {parseVersionInfo} from "next/dist/server/dev/parse-version-info";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export interface ICard {
    text: string;
    src: string;
}

export default function ProfilingCard({onVote, data, currentIndex}: any) {
    const x = useMotionValue(0);
    const controls = useAnimation();
    const cardElem = useRef(null);
    // const [currentIndex, setCurrentIndex] = useState(0);
    const [exitPosition, setExitPosition] = useState<"left" | "right" | "">("");
    const [isLast, setIsLast] = useState(false);
    const {replace} = useRouter();
    const params = useSearchParams();
    const pathname = usePathname();

    console.log("data is ", data);

    const [answers, setAnswers] = useAtom(formAnswersAtom);

    const rotate = useTransform(x, [-150, 150], [-18, 18]);
    const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

    const offsetBoundary = 200;

    useEffect(() => {
        if (params.get("type") === "range") {
            replace(`${pathname}?${params.toString()}`);
        }
    }, [params, pathname]);

    const handleSwipe = async (direction: "left" | "right") => {
        setExitPosition(direction);

        await controls.start({
            x: direction === "left" ? -offsetBoundary * 2 : offsetBoundary * 2,
            rotate: direction === "left" ? -18 : 18,
            opacity: 0,
            transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 20,
            },
        });

        // Reset card position
        x.set(0);
        setExitPosition("");
        onVote();

        // Reset controls
        await controls.start({
            x: 0,
            rotate: 0,
            opacity: 1,
            transition: {
                duration: 0,
            },
        });
    };

    const handleDragEnd = (event: any, info: PanInfo) => {
        const velocity = info.velocity.x;
        const offset = info.offset.x;

        // Check if the swipe was strong enough
        if (Math.abs(velocity) >= 300 || Math.abs(offset) > offsetBoundary) {
            if (offset < 0) {
                handleSwipe("left");
            } else {
                handleSwipe("right");
            }
        } else {
            // If not strong enough, animate back to center
            animate(x, 0, {
                type: "spring",
                stiffness: 300,
                damping: 20,
            });
        }
    };

    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center h-full w-full gap-y-6 select-none"
            )}
        >
            <div
                className={cn(
                    "flex-col justify-center items-center w-full h-full gap-6 flex"
                )}
                key={data.text}
            >
                <h2 className="sm:text-3xl text-xl text-center whitespace-normal p-6 font-sans text-black">
                    {data.text}
                </h2>
                <div className="relative max-w-[20rem] sm:max-w-[24rem] h-[32rem] aspect-[3/4] w-full grid">
                    {/* Action buttons container */}
                    <div className="absolute inset-y-0 -left-16 sm:-left-24 right-auto flex items-center z-10">
                        <button
                            onClick={() => handleSwipe("left")}
                            className="p-3 sm:p-4 rounded-full bg-white shadow-lg hover:bg-red-50 transition-colors duration-200 group"
                        >
                            <X className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 group-hover:scale-110 transition-transform duration-200"/>
                        </button>
                    </div>

                    <div className="absolute inset-y-0 -right-16 sm:-right-24 left-auto flex items-center z-10">
                        <button
                            onClick={() => handleSwipe("right")}
                            className="p-3 sm:p-4 rounded-full bg-white shadow-lg hover:bg-green-50 transition-colors duration-200 group"
                        >
                            <Heart
                                className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 group-hover:scale-110 transition-transform duration-200"/>
                        </button>
                    </div>
                    <motion.div
                        className="absolute inset-0 touch-none"
                        dragElastic={0.9}
                        ref={cardElem}
                        drag="x"
                        dragSnapToOrigin
                        dragMomentum={false}
                        animate={controls}
                        dragConstraints={{
                            left: 0,
                            right: 0,
                        }}
                        whileTap={{
                            scale: 0.8,
                            cursor: "grabbing",
                        }}
                        transition={{
                            duration: 0.2,
                            stiffness: 300,
                            damping: 20,
                            type: "spring",
                        }}
                        style={{
                            x,
                            opacity,
                            rotate,
                        }}
                        whileDrag={{
                            cursor: "drag",
                        }}
                        onDragEnd={handleDragEnd}
                    >
                        <div className="pointer-events-none aspect-square">
                            <Image
                                loading="eager"
                                quality={75}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority
                                fill
                                alt={data.text ?? "alt"}
                                style={{
                                    gridRow: 1,
                                    gridColumn: 1,
                                }}
                                className="object-cover object-center rounded-sm"
                                src={process.env.NEXT_PUBLIC_API_URL + data.src}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

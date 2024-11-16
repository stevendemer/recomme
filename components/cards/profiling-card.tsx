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
    const [exitPosition, setExitPosition] = useState<"left" | "right" | "">("");
    const [isLast, setIsLast] = useState(false);
    const {replace} = useRouter();
    const params = useSearchParams();
    const pathname = usePathname();

    console.log("data is ", data);

    const [answers, setAnswers] = useAtom(formAnswersAtom);

    const rotate = useTransform(x, [-150, 150], [-18, 18]);
    const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

    const offsetBoundary = 300;

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


        if (velocity < -1 && offset <= (offsetBoundary * -1)) {
            handleSwipe('left')
        } else if (velocity > 1 && offset >= offsetBoundary) {
            handleSwipe('right')
            console.log('swiped right')
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
        <div className="flex flex-col items-center justify-around w-full h-full">
            {/* Text Section */}
            <h2 className="text-lg sm:text-xl text-center font-sans text-black px-6">
                {data.text}
            </h2>

            {/* Main Card Container */}
            <div className="w-full max-w-lg px-4 sm:px-12 relative h-full">
                {/* Action Buttons */}
                <div className="absolute sm:block hidden left-0 top-1/2 -translate-y-1/2 z-20">
                    <button
                        onClick={() => handleSwipe("left")}
                        className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:bg-red-50 transition-colors duration-200 group"
                    >
                        <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:scale-110 transition-transform duration-200"/>
                    </button>
                </div>

                <div className="absolute sm:block hidden right-0 top-1/2 -translate-y-1/2 z-20">
                    <button
                        onClick={() => handleSwipe("right")}
                        className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:bg-green-50 transition-colors duration-200 group"
                    >
                        <Heart
                            className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 group-hover:scale-110 transition-transform duration-200"/>
                    </button>
                </div>

                {/* Card Content */}
                <motion.div
                    className="inset-0 touch-none absolute grid place-items-center w-full max-w-sm mx-auto h-full max-h-[80%]"
                    dragElastic={0.8}
                    ref={cardElem}
                    drag="x"
                    dragSnapToOrigin
                    animate={controls}
                    dragConstraints={{
                        left: 0,
                        right: 0,
                    }}
                    whileTap={{
                        scale: 0.95,
                        cursor: "grabbing",
                    }}
                    style={{
                        x,
                        opacity,
                        rotate,
                    }}
                    onDragEnd={handleDragEnd}
                >
                    <div
                        className="pointer-events-none aspect-video rounded-sm overflow-hidden">
                        <Image
                            fill
                            alt={data.text ?? "alt"}
                            className="object-cover object-center w-full h-full rounded-sm"
                            src={`${process.env.NEXT_PUBLIC_API_URL}${data.src}`}
                            priority
                            sizes="(max-width: 768px) 100vw, 600px"
                            style={{
                                gridColumn: 1,
                                gridRow: 1,
                            }}
                        />
                    </div>
                </motion.div>
                <div className="w-full sm:hidden flex justify-center gap-6 mt-6">
                    <button
                        onClick={() => handleSwipe("left")}
                        className="p-3 rounded-full bg-white shadow-lg hover:bg-red-50 transition-colors duration-200 group"
                    >
                        <X className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-200"/>
                    </button>
                    <button
                        onClick={() => handleSwipe("right")}
                        className="p-3 rounded-full bg-white shadow-lg hover:bg-green-50 transition-colors duration-200 group"
                    >
                        <Heart
                            className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform duration-200"/>
                    </button>
                </div>
            </div>
        </div>
    );

}

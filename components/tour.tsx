"use client";
import Joyride, {Step} from "react-joyride";

import React from "react";
import {TooltipProvider} from "./ui/tooltip";
import CustomTooltip from "./tooltip";
import Image from "next/image";
import flower from "@/public/assets/flower.svg";

const TOUR_STEPS = [
    {
        target: ".sidebar",
        content: (
            <div className="flex items-center gap-x-2">
                <Image className="relative bottom-5 mr-2" src={flower} alt=""/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium a
                    commodi mollitia rerum doloribus, expedita autem vero incidunt fugiat
                    iste nostrum. Illum voluptatem exercitationem ipsum animi expedita
                    quas enim facere.
                </p>
            </div>
        ),
        placement: "right",
        disableBeacon: true,
    },
    {
        target: ".actions",
        content: (
            <div className="flex items-center gap-x-2">
                <Image className="relative bottom-5 mr-2" src={flower} alt=""/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium a
                    commodi mollitia rerum doloribus, expedita autem vero incidunt fugiat
                    iste nostrum. Illum voluptatem exercitationem ipsum animi expedita
                    quas enim facere.
                </p>
            </div>
        ),

        placement: "bottom",
        disableBeacon: true,
    },
    {
        target: ".members",
        content: (
            <div className="flex items-center gap-x-2">
                <Image className="relative bottom-5 mr-2" src={flower} alt=""/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium a
                    commodi mollitia rerum doloribus, expedita autem vero incidunt fugiat
                    iste nostrum. Illum voluptatem exercitationem ipsum animi expedita
                    quas enim facere.
                </p>
            </div>
        ),

        placement: "bottom",
        disableBeacon: true,
    },
    {
        target: ".graph",
        content: (
            <div className="flex items-center gap-x-2">
                <Image className="relative bottom-5 mr-2" src={flower} alt=""/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium a
                    commodi mollitia rerum doloribus, expedita autem vero incidunt fugiat
                    iste nostrum. Illum voluptatem exercitationem ipsum animi expedita
                    quas enim facere.
                </p>
            </div>
        ),

        placement: "top",
        disableBeacon: true,
    },
    {
        target: ".recom",
        content: (
            <div className="flex items-center gap-x-2">
                <Image className="relative bottom-5 mr-2" src={flower} alt=""/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium a
                    commodi mollitia rerum doloribus, expedita autem vero incidunt fugiat
                    iste nostrum. Illum voluptatem exercitationem ipsum animi expedita
                    quas enim facere.
                </p>
            </div>
        ),

        placement: "left",
        disableBeacon: true,
    },
] as Step[];

export default function Tour() {
    return (
        <TooltipProvider>
            <Joyride
                steps={TOUR_STEPS}
                continuous={true}
                showProgress={true}
                tooltipComponent={CustomTooltip}
                run

            />
        </TooltipProvider>
    );
}

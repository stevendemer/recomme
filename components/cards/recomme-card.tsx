import React, {ReactNode} from "react";

export default function RecommendationCard({
                                               children,
                                           }: {
    children: ReactNode;
}) {
    return (
        <div className="grid w-full grid-cols-2 h-auto place-items-center gap-6 bg-slate-50 rounded-sm p-6 ">
            {children}
        </div>
    );
}

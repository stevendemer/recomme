import React, { ReactNode } from "react";

export default function RecommendationCard({
  label,
  text,
  image,
  children,
}: {
  label: string;
  text: string;
  image?: any;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-2 place-items-center w-full gap-2 bg-white rounded-3xl p-6">
      <div className="flex flex-col items-center gap-y-2">
        <h2 className="font-bold font-rubik">{label}</h2>
        <p className="font-rubik whitespace-wrap overflow-hidden">{text}</p>
      </div>
      <div className="w-fit">{children}</div>
    </div>
  );
}

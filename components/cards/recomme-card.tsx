import React, { ReactNode } from "react";

export default function RecommendationCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex items-center shrink aspect-video h-auto gap-6 bg-slate-50 rounded-sm p-2 whitespace-normal">
      {children}
    </div>
  );
}

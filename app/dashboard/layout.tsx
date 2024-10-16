import DashboardSidebar from "@/components/dashboard/sidebar";
import ParentContainer from "@/components/parent-container";
import React, { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="gradient-bg relative font-rubik min-h-screen w-full p-2">
      <div className="grid grid-cols-[320px_1fr] gap-0">
        <DashboardSidebar />
        <div className="px-10 py-2 ml-8">{children}</div>
      </div>
    </div>
  );
}

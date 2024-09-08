import DashboardSidebar from "@/components/dashboard/sidebar";
import ParentContainer from "@/components/parent-container";
import React, { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="gradient-bg flex justify-center items-center overflow-x-hidden font-rubik">
      <main className="h-full w-full">
        <DashboardSidebar />
        <div className="flex justify-center w-full h-full">{children}</div>
      </main>
    </div>
  );
}

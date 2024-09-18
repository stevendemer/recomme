import DashboardSidebar from "@/components/dashboard/sidebar";
import ParentContainer from "@/components/parent-container";
import React, { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="gradient-bg relative !overflow-hidden font-rubik min-h-screen">
      <main className="h-full w-full space-x-2">
        <DashboardSidebar />
        <div className="p-4 w-full container mx-auto overflow-hidden">
          {children}
        </div>
      </main>
    </div>
  );
}

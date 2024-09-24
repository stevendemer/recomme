import DashboardSidebar from "@/components/dashboard/sidebar";
import ParentContainer from "@/components/parent-container";
import React, { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="gradient-bg relative overflow-hidden font-rubik min-h-screen">
      <div className="flex h-screen">
        <DashboardSidebar />
        <main className="p-4 flex-1 flex justify-center gap-4 h-full overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

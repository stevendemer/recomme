import DashboardSidebar from "@/components/dashboard/sidebar";
import ParentContainer from "@/components/parent-container";
import React, { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="gradient-bg relative font-rubik min-h-screen w-full flex flex-col">
      <div className="flex-grow flex overflow-hidden">
        <div className="w-full max-w-screen-2xl relative mx-auto flex  gap-12">
          {/* <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full max-w-full place-content-center h-full"> */}
          <div className="flex-shrink w-full max-w-xs my-4">
            <DashboardSidebar />
          </div>
          <div className="p-6">
            {/* <main className=" max-w-full gap-4 col-span-2">{children}</main> */}
            {children}
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

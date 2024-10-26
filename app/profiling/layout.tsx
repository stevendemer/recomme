import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import "../globals.css";

export default function ProfilingLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body className={cn("bg-gray-200 antiliased")}>
        <div className="min-h-screen grid place-items-center gradient-bg backdrop-blur-lg">
          <div className="w-full flex items-center justify-center max-w-[60vw] max-h-[80vh]">
            <div className="bg-white/30 h-full text-neutral-500 backdrop-blur-lg rounded-3xl w-full flex flex-col pt-16 pb-4 px-4">
              <div className="bg-white/70 w-full rounded-2xl shadow-lg flex flex-col p-2 h-full">
                <div className="flex justify-center items-center min-h-[300px] md:min-h-[500px] lg:min-h-[700px]">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

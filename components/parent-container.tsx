import { ReactNode } from "react";
import Steps from "./steps";

function ParentContainer({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-white/10 text-slate-600 sm:w-[70vw] w-[90vw] h-[90vh] backdrop-blur-lg shadow-xl rounded-lg flex justify-center items-center pt-32">
      {/* White box */}
      <div className="relative bg-white  sm:w-[65vw] w-full h-full m-5 rounded-lg shadow-lg z-10 mb-20">
        <div className="flex items-center justify-center flex-col h-full">
          {children}
        </div>
      </div>
      {/* Steps positioned outside the white box */}
      <Steps />
    </div>
  );
}

export default ParentContainer;

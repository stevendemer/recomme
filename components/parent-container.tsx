import { ReactNode } from "react";
import Steps from "./steps";

function ParentContainer({ children }: { children: ReactNode }) {
  //   return (
  //     <div className="bg-white/10 text-slate-600 sm:w-[70vw] backdrop-blur-lg shadow-xl sm:h-[80vh] h-[90vh] w-[90vw] rounded-lg flex justify-center items-center pt-32 relative">
  //       <div className="bg-white sm:h-[77vh] sm:w-[68vw] m-5 rounded-lg shadow-lg h-full w-full relative p-2">
  //         <Steps steps={3} active={1} />
  //         <div className="flex items-center justify-center flex-col">
  //           {children}
  //         </div>
  //       </div>
  //     </div>
  //   );
  return (
    <div className="relative bg-white/10 text-slate-600 sm:w-[70vw] w-[90vw] sm:h-[80vh] h-[90vh] backdrop-blur-lg shadow-xl rounded-lg flex justify-center items-center pt-32">
      {/* White box */}
      <div className="relative bg-white  sm:w-[65vw] w-full h-full m-5 rounded-lg shadow-lg z-10 mb-20">
        <div className="flex items-center justify-center flex-col h-full">
          {children}
        </div>
      </div>

      {/* Steps positioned outside the white box */}
      <Steps steps={3} active={1} />
    </div>
  );
}

export default ParentContainer;

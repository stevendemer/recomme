import { ReactNode } from "react";
import SubmitButton from "./submit-button";

export default function ParentContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center overflow-x-hidden font-rubik min-h-screen gradient-bg">
      <div className="flex flex-col items-center max-w-xl min-h-screen p-4 mx-auto relative justify-center">
        <div className="space-y-4 flex flex-col flex-shrink-0">{children}</div>
      </div>
    </div>
  );
}

"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className={cn(
        "bg-black text-slate-100 rounded-full p-2 tracking-widest shadow-lg"
      )}
      disabled={pending}
    >
      Continue
    </Button>
  );
}

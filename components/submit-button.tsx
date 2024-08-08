"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useSteps } from "@/app/store";
import { useState } from "react";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  const { active, increase } = useSteps();

  return (
    <Button
      className={cn(
        "bg-black text-slate-100 rounded-full sm:p-8 tracking-widest shadow-lg my-4"
      )}
      disabled={pending}
      onClick={() => {
        increase();
      }}
    >
      Continue to {active}
    </Button>
  );
}

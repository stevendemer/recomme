"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export default function SubmitButton({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { pending } = useFormStatus();

  return (
    <Button
      onClick={props.onClick}
      className={cn(
        "rounded-full sm:px-14 sm:py-8 px-6 py-4 max-w-lg text-sm sm:text-base",
        className
      )}
      disabled={pending}
      type="submit"
    >
      {children}
    </Button>
  );
}

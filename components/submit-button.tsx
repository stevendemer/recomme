"use client";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export default function SubmitButton({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      onClick={props.onClick}
      className={cn(
        "rounded-full sm:px-14 sm:py-8 px-8 py-6 max-w-lg text-sm sm:text-md font-bold font-mulish disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-200 hover:opacity-75",
        className
      )}
      type="submit"
      {...props}
    >
      {children}
    </Button>
  );
}

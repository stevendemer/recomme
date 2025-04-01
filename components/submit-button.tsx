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
        "rounded-[50px] sm:px-10 sm:py-6 px-6 py-5 max-w-lg text-xs sm:text-md font-semibold font-mulish disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-200 hover:opacity-75",
        className
      )}
      type="submit"
      {...props}
    >
      {children}
    </Button>
  );
}

"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  ButtonHTMLAttributes,
  forwardRef,
  PropsWithChildren,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSteps } from "@/app/store";

export default function SubmitButton({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { pending } = useFormStatus();
  const pathname = usePathname();
  const router = useRouter();

  if (pathname.includes("2")) {
    return null;
  }

  return (
    <Button
      onClick={props.onClick}
      className={cn("rounded-full px-16 py-8", className)}
      disabled={pending}
      type="submit"
    >
      {children}
    </Button>
  );
}

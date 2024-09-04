"use client";

import { ActionFunction } from "@/types";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useFormState } from "react-dom";
import { useToast } from "./ui/use-toast";

const initialState = {
  message: "",
};

export default function FormContainer({
  children,
  onSubmit,
  action,
  ...props
}: {
  children: ReactNode;
  onSubmit: () => void;
  action: ActionFunction;
}) {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        description: state.message,
      });
    }
  }, [state]);

  return (
    <form action={formAction} noValidate>
      {children}
    </form>
  );
}

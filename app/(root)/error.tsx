"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // some logging service
    console.error(error);
  }, [error]);

  return (
    <main className="flex justify-center items-center flex-col gap-8 h-screen w-full">
      <h2 className="text-xl md:text-2xl font-semibold font-body text-red-500">
        Something went wrong !
      </h2>
      <p className="text-lg font-body">{error.message}</p>
      <Button
        onClick={() => reset()}
        className="inline-flex items-center p-4 text-md"
        variant={"destructive"}
      >
        Try again
      </Button>
    </main>
  );
}

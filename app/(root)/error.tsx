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
    <main className="flex justify-center items-center flex-col gap-8 h-screen">
      <h2 className="text-xl md:text-2xl font-semibold font-rubik text-red-600">
        Something went wrong !
      </h2>
      <p className="text-lg">{error.message}</p>
      <Button
        onClick={() => reset()}
        className="inline-flex items-center p-6 text-lg"
      >
        Try again !
      </Button>
    </main>
  );
}

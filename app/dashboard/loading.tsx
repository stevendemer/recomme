"use client";
import Spinner from "@/components/spinner";
import React from "react";

export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Spinner size="xl" />
    </div>
  );
}

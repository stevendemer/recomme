"use client";
import Spinner from "@/components/spinner";
import React from "react";

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <Spinner size="xl" />
    </div>
  );
}

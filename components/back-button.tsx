"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="bg-white shadow-lg text-[#65D9BD] hover:shadow-xl transition-shadow duration-200 rounded-xl p-3"
    >
      <IconArrowLeft className="sm:size-8 size-4" />
    </button>
  );
}

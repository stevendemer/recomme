"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="bg-white shadow-xl text-[#65D9BD] hover:shadow-2xl transition-shadow duration-200 rounded-[21px] p-4"
    >
      <IconArrowLeft className="sm:size-8 size-5" />
    </button>
  );
}

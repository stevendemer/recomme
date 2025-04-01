import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";

interface ICard {
  options: string[];
  title: string;
  webform_id: string;
}

type Props = {
  value?: number[];
  onChange?: (value: number[]) => void;
  cards?: any[];
};

export default function MultipleCards({ value, onChange, cards }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 sm:gap-6 place-items-center w-full max-h-full">
        {cards?.map((e, index) => (
          <OptionCard key={index} card={e} />
        ))}
      </div>
    </div>
  );
}

function OptionCard({ card }: { card: ICard }) {
  return <h1 className="text-xl text-center">{card.title}</h1>;
}

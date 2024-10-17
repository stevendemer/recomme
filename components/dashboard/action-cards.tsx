import Image from "next/image";
import React from "react";

export default function ActionCards({
  title,
  image,
}: {
  title: string;
  image: any;
}) {
  return (
    <div className="flex px-4 py-4 ml-4 w-full relative items-center bg-white rounded-[32px] cursor-pointer h-full">
      <Image
        alt=""
        src={image}
        className="object-contain object-center"
        width={60}
        height={50}
      />
      <h1 className="max-sm:text-sm  md:text-lg lg:text-xl font-rubik font-bold text-center w-full truncate">
        {title}
      </h1>
    </div>
  );
}

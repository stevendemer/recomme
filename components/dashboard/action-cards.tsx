import React from "react";
import Image from "next/image";

export default function ActionCards({
  title,
  image,
}: {
  title: string;
  image: any;
}) {
  return (
    <div className="flex p-6 h-full w-full relative items-center bg-white rounded-sm cursor-pointer font-inter justify-center space-x-8">
      <Image
        width={52}
        height={52}
        className="object-cover object-center"
        alt=""
        src={image}
      />
      <h1 className="max-sm:text-sm  md:text-lg lg:text-xl font-rubik font-bold truncate text-center">
        {title}
      </h1>
    </div>
  );
}

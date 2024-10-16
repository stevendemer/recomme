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
    <div className="flex px-2 py-4 ml-4 w-full max-w-full mx-auto relative items-center bg-white rounded-[32px] cursor-pointer">
      <Image
        alt=""
        src={image}
        className="object-contain object-center"
        width={60}
        height={50}
      />
      {/* <img src={image} alt="" className="object-contain object-center" /> */}
      <h1 className=" text-sm sm:text-lg font-rubik font-bold text-center w-full truncate">
        {title}
      </h1>
    </div>
  );
}

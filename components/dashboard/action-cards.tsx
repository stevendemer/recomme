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
    <div className="flex p-4 w-full max-w-full mx-auto relative items-center bg-white rounded-3xl cursor-pointer">
      <div className="relative">
        <div className="flex items-center max-w-full h-auto">
          <div className="mx-2 relative">
            <Image
              alt=""
              src={image}
              className="object-contain object-center"
              width={60}
              height={50}
            />
          </div>
          {/* <img src={image} alt="" className="object-contain object-center" /> */}
          <h1 className="text-lg font-rubik font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
}

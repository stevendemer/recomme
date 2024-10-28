import React from "react";

export default function ActionCards({
  title,
  image,
}: {
  title: string;
  image: any;
}) {
  return (
    <div className="flex p-6 m-4 h-full w-full relative items-center bg-white rounded-sm cursor-pointer font-inter justify-around">
      <div>
        <img alt="" src={image} />
      </div>
      <h1 className="max-sm:text-sm  md:text-lg lg:text-xl font-rubik font-bold truncate">
        {title}
      </h1>
    </div>
  );
}

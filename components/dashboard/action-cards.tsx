import React from "react";

export default function ActionCards({
  title,
  image,
}: {
  title: string;
  image: any;
}) {
  return (
    <div className="flex flex-1 h-full relative justify-center items-center">
      <svg
        width="452"
        height="177"
        viewBox="0 0 452 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_354_7842)">
          <rect x="47" y="43" width="358" height="83" rx="31" fill="white" />
        </g>
        <defs>
          <filter
            id="filter0_d_354_7842"
            x="0.599998"
            y="0.599998"
            width="450.8"
            height="175.8"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="23.2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_354_7842"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_354_7842"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <div className="absolute inset-0 w-[100%] h-[100%] flex justify-center items-center space-x-4 cursor-pointer">
        {image}
        <h1 className="text-lg font-sans font-bold font-rubik">{title}</h1>
      </div>
    </div>
  );
}

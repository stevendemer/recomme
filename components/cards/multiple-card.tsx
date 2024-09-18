import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  value: number[];
  onChange: (value: number[]) => void;
};

export default function MultipleCard({ value, onChange }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center h-fit mx-auto gap-4 max-w-7xl p-4 mb-10 pb-24">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="w-full">
          <motion.div
            onClick={() => {
              if (value.includes(index)) {
                // remove the select if already selected
                onChange(value.filter((v) => v !== index));
              } else {
                onChange([...value, index]);
              }
              console.log("total values are ", value);
            }}
            key={index}
            className={cn(
              "flex flex-col bg-background rounded-[35px] overflow-hidden shadow-xl p-4 cursor-pointer font-bold transition-all duration-300 h-full",
              value.includes(index) && "bg-[#65d9bd] text-slate-100"
            )}
          >
            {/* image div */}
            <svg
              className="w-full h-auto object-cover"
              viewBox="0 0 105 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4968 25.7798H63.3172L69.149 35.036L0 37.6692L12.4968 25.7798Z"
                fill="url(#paint0_linear_34_2484)"
              />
              <path
                d="M29.1982 42.8384L90.0017 41.6328V75.4702L29.1982 80.1319V42.8384Z"
                fill="url(#paint1_linear_34_2484)"
              />
              <path
                d="M39.3403 49.4085L50.6665 48.9932V61.3638L39.3403 62.0149V49.4085Z"
                fill="#146657"
              />
              <path
                d="M67.9526 48.2757L79.2788 47.8604V60.231L67.9526 60.8821V48.2757Z"
                fill="#146657"
              />
              <path
                d="M39.3403 49.3723L49.4742 48.9932V60.2881L39.3403 60.8826V49.3723Z"
                fill="#218976"
              />
              <path
                d="M67.9526 48.2395L78.6827 47.8604V59.1553L67.9526 59.7498V48.2395Z"
                fill="#218976"
              />
              <path
                d="M12.5244 25.7798H63.7766L94.1918 43.2271L32.1011 45.5955L12.5244 25.7798Z"
                fill="#65D9BD"
              />
              <path
                d="M16.0879 24.082H66.966L97.1592 41.5293L35.5216 43.8977L16.0879 24.082Z"
                fill="url(#paint2_linear_34_2484)"
              />
              <path
                d="M17.2881 21.8174H68.5403L98.9555 39.2647L36.8647 41.6331L17.2881 21.8174Z"
                fill="url(#paint3_linear_34_2484)"
              />
              <path
                d="M49.886 29.5577L83.762 0.269984L104.684 1.88926L55.712 31.7801L49.886 29.5577Z"
                fill="url(#paint4_linear_34_2484)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_34_2484"
                  x1="34.5745"
                  y1="25.7798"
                  x2="34.5745"
                  y2="37.6692"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="1" stop-color="#317565" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_34_2484"
                  x1="59.6"
                  y1="40.9094"
                  x2="59.6"
                  y2="80.1319"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#17342F" />
                  <stop offset="1" stop-color="white" stop-opacity="0.03" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_34_2484"
                  x1="56.6235"
                  y1="24.082"
                  x2="56.6235"
                  y2="43.8977"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#76B3FB" />
                  <stop
                    offset="0.333333"
                    stop-color="#719FD4"
                    stop-opacity="0.744792"
                  />
                  <stop
                    offset="0.9999"
                    stop-color="#6D8DB1"
                    stop-opacity="0.515016"
                  />
                  <stop offset="1" stop-color="#636464" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_34_2484"
                  x1="58.1218"
                  y1="21.8174"
                  x2="58.1218"
                  y2="41.6331"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E1E1E1" />
                  <stop
                    offset="0.333333"
                    stop-color="white"
                    stop-opacity="0.744792"
                  />
                  <stop
                    offset="0.9999"
                    stop-color="#6D8DB1"
                    stop-opacity="0.515016"
                  />
                  <stop offset="1" stop-color="#636464" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_34_2484"
                  x1="77.22"
                  y1="0.218036"
                  x2="76.968"
                  y2="31.9489"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FBED76" />
                  <stop offset="1" stop-color="#FBED76" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="p-4 flex-grow">
              <span className="font-bold font-rubik text-lg tracking-wider overflow-hidden whitespace-nowrap">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                repudiandae vel, a officia inventore optio pariatur deserunt
                aliquam iure quaerat numquam maiores minima quos alias harum!
                Corrupti ipsa amet tenetur?
              </span>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

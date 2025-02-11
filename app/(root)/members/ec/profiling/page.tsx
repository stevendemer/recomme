"use client";

import { useGetProfiling } from "@/hooks/use-get-profiling";
import Spinner from "@/components/spinner";
import Image from "next/image";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const data = {
  LLM_profiling:
    "Now that I've received the data, I can start analyzing your energy consumption. \n\nLet's start with the basics: your baseline energy consumption, which is your typical energy usage when you're not using any specific appliances or devices. From the data, it appears that your baseline energy consumption is relatively low, around 0.02-0.04 kW.\n\nHowever, there are some patterns in your energy usage that stand out. Your highest energy usage tends to occur on weekdays, especially during the peak hours of 7-10 pm. On Mondays, you tend to use the least amount of energy.\n\nIt also appears that your energy consumption is affected by the weather. When it's colder outside (e.g., in January), your energy usage tends to be higher compared to warmer months (e.g., June).\n\nRegarding specific devices or appliances, it's difficult to determine without more information about your household. However, based on the patterns I've observed, it's likely that you have at least one electric water heater, as your energy consumption tends to spike on weekends, which suggests that the water heater is running continuously.\n\nYour energy usage during the week seems to follow a consistent pattern: you tend to use more energy in the late afternoon and evening, which suggests that you're running appliances or devices during these times.\n\nYour energy consumption on weekends is generally similar to your daily average, but it's slightly higher on Sundays. This may indicate that you're running more appliances or devices on Sundays, possibly due to laundry, cleaning, or other household activities.\n\nIn terms of seasonal variations, your energy consumption tends to be higher during the winter months (December to March) and lower during the summer months (June to September). This is likely due to the cold temperatures during winter, which requires more heating, and the warmer temperatures during summer, which reduces the need for heating.\n\nLastly, it's worth noting that there are some anomalies in the data, such as the spikes in energy consumption on certain days. While these can be attributed to various factors, such as appliance usage or changes in household activities, they do provide valuable insights into your energy usage patterns.\n\nOverall, your energy usage is relatively consistent, with some minor variations throughout the week. However, there are signs of increased energy consumption on weekends, which may indicate that you're running more appliances or devices during these times.",
  image_path: "/sites/default/files/images/llm/kwh_by_hour.jpg",
};

const ECProfiling = () => {
  const { data: profiling, status } = useGetProfiling();
  const router = useRouter();

  if (status === "pending") {
    return (
      <div className={"w-full flex justify-center items-center h-full"}>
        <Spinner size={"xl"} />
      </div>
    );
  }

  const displayData =
    status === "error" || profiling?.status === 500 ? data : profiling?.data;

  // return (
  //   <div className={"container mx-auto relative h-full overflow-y-auto"}>
  //     <button
  //       onClick={() => router.back()}
  //       className="bg-white shadow-lg text-[#65D9BD] hover:shadow-xl transition-shadow duration-200 rounded-full p-2"
  //     >
  //       <IconArrowLeft className="sm:size-8 size-4" />
  //     </button>

  //     <div
  //       className={"flex flex-col items-center w-full max-w-5xl scrollbar-hide"}
  //     >
  //       <h2 className="text-center font-semibold font-body text-lg sm:text-xl text-black">
  //         Energy Profiling for EC Members
  //       </h2>
  //       <article className={"scrollbar-hide p-1"}>
  //         <p className="font-body w-full whitespace-pre-line max-w-2xl text-base leading-relaxed tracking-wide">
  //           {displayData?.LLM_profiling}
  //         </p>
  //       </article>
  //       <div className="w-full mt-8">
  //         <div className="aspect-video relative max-w-4xl w-full mx-auto">
  //           <Image
  //             fill
  //             src={process.env.NEXT_PUBLIC_API_URL + displayData?.image_path}
  //             alt={"profiling graph"}
  //             className={"object-contain object-center"}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex justify-center h-full w-full">
        <p className="text-center text-black font-body text-md sm:text-2xl">
          Page under construction 🛠️.
          <br />
          Will be back soon.
        </p>
      </div>
      <Button
        variant={"link"}
        className={"px-8 py-3 flex items-center flex-shrink-0 gap-2"}
      >
        <ArrowLeft />
        <Link prefetch href={"/members"}>
          Go back
        </Link>
      </Button>
    </div>
  );
};

export default ECProfiling;

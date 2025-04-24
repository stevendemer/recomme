import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Banner({
  title,
  image,
}: {
  title: string;
  image: any;
}) {
  return (
    <div
      className={cn(
        "flex justify-center items-center space-x-4 p-8 rounded-[30px] shrink bg-white/80"
      )}
    >
      <Image
        className="object-scale-down"
        src={image}
        alt=""
        height={50}
        width={50}
      />
      <h2 className="text-sm font-bold sm:text-lg">{title}</h2>
    </div>
  );
}

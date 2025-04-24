import { cn } from "@/lib/utils";
import Image from "next/image";
import userCircle from "@/public/assets/user-circle.svg";

export default function InfoCard({
  title,
  color,
  members,
}: {
  title: string;
  color: string;
  members: number;
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center rounded-[30px] relative bg-white/80 sm:h-[160px] sm:w-44 w-full h-[175px] gap-2 p-2"
      )}
    >
      <div
        className={cn(`rounded-sm flex justify-center items-center p-2`, color)}
      >
        <Image
          className="object-contain"
          src={userCircle}
          alt=""
          width={32}
          height={32}
        />
      </div>
      <h2 className="text-sm text-gray-600 font-bold">{title}</h2>
      <div
        className={cn(
          `rounded-lg px-8 py-1 text-white text-sm font-bold mix-blend-normal`,
          color
        )}
      >
        {members}
      </div>
    </div>
  );
}

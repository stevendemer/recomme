import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import { cn } from "@/lib/utils";

interface Props {
  value: {
    src: string;
    text: string;
  };
  isSelected: boolean;
  onSelect: (x: string) => void;
}

export default function ImageSelectionCard({
  value,
  isSelected,
  onSelect,
}: Props) {
  const [src, extension] = value.src.split(".");

  const baseUrl = process.env.NEXT_PUBLIC_API_URL!;

  const normalImage = baseUrl + `${src}.${extension}`;
  const selectedImage = baseUrl + `${src}_checked.${extension}`;

  return (
    <>
      <Card
        onClick={() => onSelect(value.text)}
        className={cn(
          "flex flex-col justify-center duration-300 w-[120px] sm:w-[300px]  items-center flex-1 sm:flex-[0_1_calc(30%-20px)] cursor-pointer transition-all shadow-sm hover:shadow-lg rounded-[30px]",
          isSelected ? "bg-limegreen text-white" : "bg-white text-black"
        )}
      >
        <CardContent className="pointer-events-none flex flex-nowrap flex-1 relative sm:h-40">
          {/* <Image
            src={normalImage}
            alt={value.text || ""}
            width={100}
            height={80}
            className={cn(
              "object-scale-down object-center transition-opacity duration-300 shrink-0",
              isSelected ? "opacity-0" : "opacity-100"
            )}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Image
            src={selectedImage}
            alt={value.text || ""}
            width={100}
            height={80}
            priority
            className={cn(
              "object-scale-down object-center transition-opacity duration-300 shrink-0",
              isSelected ? "opacity-100" : "opacity-0"
            )}
          /> */}
          <Image
            src={isSelected ? selectedImage : normalImage}
            alt={value.text || ""}
            fill
            className="object-scale-down object-center transition-opacity duration-300 shrink-0 max-w-full"
          />
        </CardContent>
        <CardFooter>
          <p className="text-center flex-wrap  whitespace-normal font-bold font-rubik md:text-lg text-sm">
            {value.text}
          </p>
        </CardFooter>
      </Card>
    </>
  );
}

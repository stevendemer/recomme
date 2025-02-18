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
  baseUrl: string;
}

export default function ImageSelectionCard({
  value,
  isSelected,
  onSelect,
  baseUrl,
}: Props) {
  const [src, extension] = value.src.split(".");

  const normalImage = baseUrl + `${src}.${extension}`;
  const selectedImage = baseUrl + `${src}_checked.${extension}`;

  return (
    <>
      <Card
        onClick={() => onSelect(value.text)}
        className={cn(
          "flex flex-col justify-center duration-300  w-full items-center sm:flex-[0_0_calc(30%-15px)] cursor-pointer transition-all hover:shadow-lg rounded-3xl",
          isSelected ? "bg-[#65D9BD] text-white" : "bg-white text-black"
        )}
      >
        <CardContent className="pointer-events-none hidden md:flex flex-wrap relative aspect-square">
          <Image
            src={normalImage}
            alt={value.text || ""}
            fill
            className={cn(
              "object-scale-down object-center transition-opacity duration-300",
              isSelected ? "opacity-0" : "opacity-100"
            )}
            priority
          />
          <Image
            src={selectedImage}
            alt={value.text || ""}
            fill
            priority
            className={cn(
              "object-scale-down object-center transition-opacity duration-300",
              isSelected ? "opacity-100" : "opacity-0"
            )}
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

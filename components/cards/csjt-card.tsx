import Image, { StaticImageData } from "next/image";
import { PropsWithChildren, ReactNode } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function CSJTCard({
  children,
  src,
}: {
  children: ReactNode;
  src: StaticImageData;
}) {
  //   return (
  //     <div className="rounded-sm bg-white shadow-lg flex flex-col items-center justify-center space-y-4 w-full">
  //       <div className="relative rounded-sm w-full h-full aspect-[3/2]">
  //         <Image
  //           className="rounded-sm object-cover object-center w-full h-full p-2"
  //           src={src}
  //           alt=""
  //           fill
  //           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust image size for responsive
  //         />
  //       </div>
  //       <div className="max-w-lg whitespace-normal text-sm sm:text-lg font-mulish font-semibold p-4 text-black">
  //         {children}
  //       </div>
  //     </div>
  //   );
  return (
    <Card className="max-w-xl w-full shadow-lg">
      <CardHeader>
        <div className="relative rounded w-full h-full">
          <Image
            className="rounded object-cover object-center"
            src={src}
            alt=""
          />
        </div>
      </CardHeader>
      <CardContent className="max-h-full">
        <p className="font-mulish text-black whitespace-normal max-w-lg truncate w-full overflow-hidden">
          {children}
        </p>
      </CardContent>
    </Card>
  );
}

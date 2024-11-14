import Image, {StaticImageData} from "next/image";
import {PropsWithChildren, ReactNode} from "react";
import {Card, CardContent, CardHeader} from "../ui/card";

export default function CSJTCard({
                                     children,
                                     src,
                                 }: {
    children: ReactNode;
    src: StaticImageData;
}) {
    return (
        <Card className="max-w-4xl w-full h-full rounded-sm shadow-lg">
            <CardContent className="flex flex-col items-center gap-6 p-6">
                <div className="relative rounded w-full h-full aspect-video">
                    <Image
                        className="rounded object-cover w-full h-full object-center"
                        src={src}
                        alt=""
                    />
                </div>
                <p className="font-mulish text-black whitespace-normal max-w-lg truncate w-full  text-ellipsis">
                    {children}
                </p>
            </CardContent>
        </Card>
    );
}

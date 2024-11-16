import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowLeft} from "lucide-react";

const ECRegister = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className="flex justify-center h-full w-full">
                <p className="text-center text-black font-body text-md sm:text-2xl">
                    Page under construction 🛠️.
                    <br/>
                    Will be back soon.
                </p>
            </div>
            <Button variant={'link'} className={'px-8 py-3 flex items-center flex-shrink-0 gap-2'}>
                <ArrowLeft/>
                <Link href={'/members'}>
                    Go back
                </Link>
            </Button>
        </div>
    );
};

export default ECRegister;
import React from 'react';
import SubmitButton from "@/components/submit-button";
import masterpiece from '@/public/assets/masterpiece.svg'
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import logo from '@/public/assets/logo.svg'

function MembersPage() {
    return (
        <section className='w-full h-full flex-shrink-0 flex flex-col items-center justify-around'>
            <div className="flex flex-col items-center">
                <div className="relative sm:w-80 sm:h-40 w-60 h-60">
                    <Image fill src={masterpiece} alt={'masterpiece'}
                           className='object-contain w-full h-full object-center'/>
                </div>
                <p className="text-center text-sm sm:text-lg font-semibold font-inter">
                    As an EC member, select which tool you want to use
                </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href={'/members/ec/register'}>

                    <Button variant='outline'
                            className={'px-8 py-6 flex items-center bg-slate-100  hover:bg-slate-200'}>
                        <Image width={80} height={40} src={logo} alt={''} className={'object-contain object-center'}/>
                    </Button>
                </Link>
                <Link href={'members/ec/profiling'}>
                    <Button variant={'outline'}
                            className={'px-8 py-6 flex items-center font-inter flex-shrink-0 bg-slate-100 hover:bg-slate-200 sm:text-md text-sm'}>
                        Energy Profiling
                    </Button>
                </Link>
            </div>
        </section>
    );
}

export default MembersPage;
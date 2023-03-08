import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';


type Props = {
    pageInfo: PageInfo;
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div

initial={{
    opacity:0
}}
whileInView={{
    opacity:1
}}
transition={{
    duration:1.5
}}

     className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>

        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
        <motion.div
        className='mt-24 -mb-20 sm:mb-0 flex-shrink-0 '
          
          initial={{
            x:-200,
            opacity:0

        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        transition={{
            duration:1.5,
        }}
        viewport={{
            once: true
        }}><motion.img

        src={urlFor(pageInfo?.profilePicture).url()}

     alt='another picture of me'
        className="rounded-full md:rounded-lg object-cover w-36 h-36 sm:w-44 sm:h-44 md:w-64 md:h-96 
        xl:w-[256px] xl:h-[384px]"

         />
         </motion.div>
         <div className="px-0 space-y-10 md:px-10">
            <h4 className="text-4xl md:text-3xl mt-5 font-semibold" >A little <span className='text-[#39FF14]'>intro</span></h4>
           <p className='sm:text-md md:text-lg text-xs scrollbar-thumb-[#39FF14]/80 w-fit h-auto overflow-y-auto'>{pageInfo?.backgroundInformation}</p>
            
         </div>
         </motion.div>
    
  )
}


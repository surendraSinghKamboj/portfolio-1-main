import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import { Skill as SkillType } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    directionLeft?: boolean;
    skill : SkillType;
}

export default function Skill({directionLeft, skill}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.div
        initial={{
            opacity:0,
            x: directionLeft ? -100 : 100,
        }}
        transition={{
            duration:1.5,
        }}
        whileInView={{
            opacity:1,
            x:0,
        }}
        className='relative  '>
<motion.img

alt='skill'
src={urlFor(skill?.image).url()}
className='rounded-full w-24 h-24 
xl:w-24 xl:h-24 border border-gray-500 object-contain
transition duration-300 ease-in-out'
/>
</motion.div>
<div className='absolute hidden sm:block opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#343434] 
h-24 w-24 xl:w-24 xl:h-24 rounded-full'>
    <div className='flex items-center justify-center h-full'>
        <p className='text-3xl font-bold text-[#39FF14] opacity-100'>{skill.progress}</p>
    </div>
</div>
    </div>
  )
}


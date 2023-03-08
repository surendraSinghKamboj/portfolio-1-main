import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo: PageInfo;
}

export default function Hero({pageInfo}: Props) {
    const [text,count] = useTypewriter({
        words:[
            `Hey there, ${pageInfo?.name} here!`,
            "I dream of working in metaverse",
        ],
        loop: true,
        delaySpeed: 2000,
    });
   
  

  return (
    <div id='hero' className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        
<motion.div
initial={{
  opacity:0,

}}
whileInView={{
  opacity:1
}}
transition={{
  duration:1.2
}}
whileHover={{
  scale:1.25
}}

className='relative  mx-auto'>
        <motion.img className='rounded-full h-32 w-32 object-cover transition ease-in-out'
        src={urlFor(pageInfo?.heroImage).url()}
        
        alt="my image"
       />
       </motion.div>
        <div className='z-50'>
         <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
         <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
         <span className='mr-3'>{text}</span><Cursor cursorColor='#39FF14'/>
         </h1>
         <div className='pt-5'>
   <Link href="#about">        
<button className='heroButton'>About</button>
</Link> 
<Link href="#experience">
<button className='heroButton'>Experience</button>
</Link>
<Link href="#skills">
<button className='heroButton'>Skills</button>
</Link>
<Link href="#projects">
<button className='heroButton'>Projects</button>
</Link>


         </div>


</div>

</div>
   
  )
}


import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import { Project } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    projects: Project[];
}

export default function Projects({ projects }: Props) {
    
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
    
    
    className='h-screen relative flex overflow-hidden flex-col
    text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
    
<div className='relative w-full flex scrollbar-track-gray-400/20 scrollbar-thumb-[#39FF14]/80 scrollbar-thin overflow-x-scroll overflow-y-hidden snap-x
snap-mandatory z-20'>
 
{projects?.map((project,i)=>(

<motion.div
// initial={{
//     opacity:0,
    
// }}
// transition={{
//     duration:1,
// }}
// whileInView={{
//     opacity:1,
    
// }}

 key={project._id} className='flex-shrink-0 snap-center flex flex-col space-y-5 items-center
justify-center p-20 md:p-44 w-screen h-screen'>

<motion.div
 className='relative mt-7'
>
<motion.img
initial={{y: -200,opacity:0}}
whileInView={{y:0,opacity:1}}
transition={{duration:1.2}}
viewport={{once:true}}
whileHover={{
    scale:1.5
}}

src={urlFor(project?.image).url()} className='object-cover h-24 w-24 sm:h-36 sm:w-36 md:w-[600px] xl:w-[900px]' alt='image'/>
</motion.div>

<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
<h4 className='text-4xl font-semibold text-center'>
    
        Case Study {i + 1} of {projects.length}
    {' '}
    <span className='text-[#39FF14]/50 uppercase'> {project.title}</span>
</h4>
<div className='flex items-center space-x-2 justify-center'>
{project.technologies.map((technology)=>(

  <motion.img
  key={technology._id}
  src={urlFor(technology?.image).url()}
  alt=""
  className='h-7 w-7'/>

))}
</div>
<motion.p className='text-center text-sm sm:text-lg md:text-left w-full transition duration-300 ease-in-out scrollbar-track-gray-400/20 scrollbar-thumb-[#39FF14]/80 scrollbar-thin overflow-x-clip overflow-y-scroll max-h-28 sm:h-auto'>
{project.summary}

</motion.p>

</div>


</motion.div>


))}



  

</div>

    <div className='w-full absolute top-[30%] bg-[#39FF14]/10 
    left-0 h-[500px] -skew-y-12'></div>
    
    </motion.div>
  )
}


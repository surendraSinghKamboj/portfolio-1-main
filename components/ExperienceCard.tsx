import React from 'react';
import {motion} from 'framer-motion';
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full snap-center bg-[#292929] p-10
    hover:opacity-100 opacity-40 cursor-pointer  transition-opacity duration-200 overflow-x-hidden overflow-y-auto scrollbar-track-gray-400/20 scrollbar-thumb-[#39FF14]/80 scrollbar-thin'>
      <motion.img
      initial={{
        y:-100,
        opacity:0,
      }}
      transition={{duration:1.2}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className='w-24 h-24 rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center'
      
      src={urlFor(experience?.companyImage).url()}
      
      />
<div className='px-0 md:px-10 relative'>
  <div className='backdrop-blur sticky top-0'>
  <h4 className='xl:text-4xl sm:text-2xl md:text-3xl text-[#39FF14] font-bold '>{experience?.jobTitle}</h4>
  <p className='font-bold xl:text-lg md:text-sm sm:text-xs  mt-1'>{experience.company}</p>
  </div> 
  <div className='flex space-x-2 my-2'>
{experience.technologies.map((technology)=>(
  <motion.img 
   src={urlFor(technology.image).url()}
     key={technology._id}
     className='h-10 w-10 rounded-full overflow-scroll scrollbar-track-gray-400/20 scrollbar-thumb-[#39FF14]/80 scrollbar-thin' />
))}
  </div>
  <p className='space-y-4 ml-5  text-gray-300'>
    {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new 
    Date(experience.dateEnded).toDateString()}
  </p>

  <ul className='list-disc space-y-4 ml-5 text-md sm:text-lg'>
   {  
   
   experience.points.map((point, i)=>(

   <li key={i} >{point}</li>
   ))}
  </ul>
</div>



    </article>
  )
}


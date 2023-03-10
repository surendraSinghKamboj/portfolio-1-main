import React from 'react';
import {motion} from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/typings';

type Props = {
  experiences: Experience[];
}

export default function WorkExperience({ experiences }: Props) {
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
    className='h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10
    justify-evenly mx-auto items-center'>
      <h3 className="absolute top-24 uppercase tracking-[15px] sm:tracking-[20px] text-gray-500 text-2xl">Experience</h3>


      <div className='w-screen mt-16 h-[72%] flex space-x-5 scrollbar-track-gray-400/20 scrollbar-thumb-[#39FF14]/80 scrollbar-thin overflow-x-auto p-10 snap-x snap-mandatory'>

{experiences?.map((experience)=>(
    <ExperienceCard key={experience._id} experience={experience}/>
))}

      </div>




    </motion.div>
  )
}
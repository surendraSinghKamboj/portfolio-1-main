import React from 'react';
import {motion} from "framer-motion";

type Props = {}

export default function BackgroundSquares({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0,

    }}
    animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius: ["20%","20%","50%","80%","20%"],
    }}
    transition={{
        duration: 2.5,
    }}
    
    className='relative flex justify-center items-center'>
        
        <div className='absolute border border-[#333333]  rounded-full h-[150px] w-[150px] mt-[340px] animate-ping '></div>
        <div className='absolute border border-[#333333]  rounded-full h-[250px] w-[250px] mt-[340px] '></div>
        <div className='absolute border border-[#333333]  rounded-full h-[450px] w-[450px] mt-[340px] '></div>
        <div className='absolute border border-[#27ee0d] rounded-full opacity-20 h-[600px] w-[600px] mt-[340px] animate-pulse '></div>
        <div className='absolute border border-[#333333] rounded-full opacity-20 h-[750px] w-[750px] mt-[340px] animate-pulse '></div>
    </motion.div>
  )
}


import React from 'react';
import {motion} from 'framer-motion';
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';
import { useForm, Resolver, SubmitHandler } from 'react-hook-form';


type FormValues = {
    name: string;
    email:string;
    subject: string;
    message:string;
  };

type Props = {}

export default function ContactMe({}: Props) {
    const { register, handleSubmit} = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = ((formData) => window.location.href=`mailto:sathwic97@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}.
    My message : ${formData.message} \n (${formData.email})`);
  return (
    <motion.div 
    initial={{opacity:0}}
    transition={{duration:1.2}}
    whileInView={{opacity:1}}

     className='h-screen flex relative flex-col text-center
     md:text-left md:flex-rowmax-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>

<div className='flex flex-col space-y-10 max-h-72 mb-20 w-screen items-center'>
    <h4 className='text-4xl font-semibold -mb-5 text-center'>Lets {" "}
    <span className='text-[#39FF14]/50'>talk</span></h4>

<div>
    <div className='flex items-center p-1 space-x-5 justify-center'>
    <PhoneIcon className='text-[#39FF14] h-7 w-7 animate-pulse'/>
    <p className='text-sm sm:text-lg'>+91-7780745188</p>
    </div>
    <div className='flex items-center p-1 space-x-5 justify-center'>
    <MapPinIcon className='text-[#39FF14] h-7 w-7 animate-pulse'/>
    <p className='text-sm sm:text-lg '>Proddatur,Andhra Pradesh - 516360.</p>
    </div>
    <div className='flex items-center p-1 space-x-5 justify-center'>
    <EnvelopeIcon className='text-[#39FF14] h-7 w-7 animate-pulse'/>
    <p className='text-sm sm:text-lg'>sathwic97@gmail.com</p>
    </div>
</div>

<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 flex-shrink w-fit p-4 mx-auto'>
    <div className='flex flex-col sm:flex-row sm:space-x-2 space-y-2 items-baseline'>
        <input {...register('name')} type='text' placeholder='Name' className='contactInput h-9'/>
        <input {...register('email')} type='email' placeholder='Email' className='contactInput h-9'/>
    </div>
    <input {...register('subject')} type='text' placeholder='Subject' className='contactInput h-9'/>
    <textarea {...register('message')} placeholder='Message' className='contactInput scrollbar-track-gray-400/20 scrollbar-thumb-[#39FF14]/80 scrollbar-thin overflow-y-auto max-h-24'/>
    <button className='bg-[#39FF14] py-3 px-6 rounded-md text-[#242424] font-bold text-lg' type='submit'>Submit</button>
</form>

</div>

    </motion.div>
  )
}


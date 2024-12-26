import React from 'react'
import Image from 'next/image'
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Benefits from '@/components/Benefits'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';


function page() {
  return (
    <>
    <div>
<div>
        <Image src='/images/Rectangle 1.png' alt='banner' height={100} width={100} className='relative w-screen mb-20' unoptimized placeholder='empty' quality={100}></Image>
        
        <div className='absolute lg:top-28 sm:top-20 top-[72px] left-1/2 xl:left-1/3 xl:ml-44 -ml-4'>
        <Image src='/images/logo.png' alt='banner' height={100} width={100} className='h-8 w-8 sm:h-20 sm:w-20 xl:h-30 xl:w-30'
        unoptimized placeholder='empty' quality={100}></Image>
        <h1 className='font-bold sm:text-2xl md:text-4xl -ml-3 md:-ml-8 -mt-2 sm:-mt-3'>Contact</h1>
        <div className='flex md:mt-2 -ml-9 -mt-1'>
        <Link href='/'>
        <p className='font-semibold sm:ml-2'>Home</p>
        </Link>
        <IoIosArrowForward className='mt-1 font-semibold'/>
        <p className='sm:ml-2'>contact</p>
        </div>
        </div>
    </div>

        <div className='text-center mt-20'>
            <h1 className='font-bold text-2xl '>Get In Touch With Us</h1>
            <p className='text-gray-400'>for more information about our product & services please feel free to drop us</p>
            <p className='text-gray-400'>an email our staff always be there to help you out. do not hasitant!</p>
        </div>
    
    </div>

    <div className='mt-20 grid sm:grid-cols-2 grid-cols-1'>
        <div className='xl:ml-48 ml-10'>

        <div className='mt-10'>
        <div className='flex gap-4'>
        <FaLocationDot className='-ml-8'/>
        <p className='text-xl font-bold'>Address</p>
        </div>
        <p>236 5th se Avenue, new york </p>
        <p>NY0000 united states</p>
        </div>

        <div className='mt-10'>
            <div className='flex gap-4'>
        <FaPhoneAlt  className='-ml-8'/>
            <p className='text-xl font-bold'>Phone</p>
            </div>
            <p>mobile +(84)546-6789</p>
            <p>hotline +(84)456-6789</p>
        </div>

        
        <div className='mt-10'>
        <div className='flex gap-4'>
        <FaClock className='-ml-8'/>
            <p className='text-xl font-bold'>Working Time</p>
            </div>
            <p>Monday-Friday 9:00</p>
            <p>22:00</p>
            <p>Saturday-Sunday 9:00</p>
            <p>21:00</p>
        </div>
        </div>

<div className='ml-10'>
        <div className='mt-10'>
            <label className='text-md font-semibold block'>Your name</label>
            <input type='text' placeholder='Abc' className='border-2 border-gray-400 h-14 p-3 lg:w-[500px] rounded-sm mt-2'></input>
        </div>

        <div className='mt-10'>
            <label className='text-md font-semibold block'>Email Address</label>
            <input type='email' placeholder='Abc@gmail' className='border-2 border-gray-400 h-14 p-3 lg:w-[500px] rounded-sm mt-2'></input>
        </div>

        <div className='mt-10'>
            <label className='text-md font-semibold block'>Subject</label>
            <input type='text' placeholder='This is an optional' className='border-2 border-gray-400 h-14 p-3 lg:w-[500px] rounded-sm mt-2'></input>
        </div>

        <div className='mt-10'>
            <label className='text-md font-semibold block'>message</label>
            <input type='text' placeholder='Hi i would like to ask about' className='border-2 border-gray-400 h-14 p-3 lg:w-[500px] rounded-sm mt-2'></input>
        </div>
        
        <button className='bg-yellow-700 p-16 text-white py-3 mt-10 '>submit</button>
</div>
    </div>

<Benefits/>
    </>
  )
}

export default page
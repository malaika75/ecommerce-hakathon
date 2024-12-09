import React from 'react'
import Image from 'next/image'
import { HiOutlineTrophy } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import { PiHandHeartBold } from "react-icons/pi";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";

function page() {
  return (
    <>
    <div>
        <Image src='/images/Group 78 (3).png' alt='banner' height={100} width={100} className='w-screen' unoptimized placeholder='empty' quality={100}></Image>

        <div className='text-center mt-20'>
            <h1 className='font-bold text-2xl '>Get In Touch With Us</h1>
            <p className='text-gray-400'>for more information about our product & services please feel free to drop us</p>
            <p className='text-gray-400'>an email our staff always be there to help you out. do not hasitant!</p>
        </div>
    
    </div>

    <div className='mt-20 grid sm:grid-cols-2 grid-cols-1'>
        <div className='xl:ml-48 ml-10'>

        <div className='mt-10'>
        <p className='text-xl font-bold'>Address</p>
        <p>236 5th se Avenue, new york </p>
        <p>NY0000 united states</p>
        </div>

        <div className='mt-10'>
            <p className='text-xl font-bold'>Phone</p>
            <p>mobile +(84)546-6789</p>
            <p>hotline +(84)456-6789</p>
        </div>

        
        <div className='mt-10'>
            <p className='text-xl font-bold'>Working Time</p>
            <p>Monday-Friday 9:00</p>
            <p>22:00</p>
            <p>Saturday-Sunday 9:00</p>
            <p>21:00</p>
        </div>
        </div>

<div className='ml-10'>
        <div className='mt-10'>
            <p className='text-md font-semibold'>Your name</p>
            <input type='text' placeholder='Abc' className='border-2 border-gray-400 h-14 p-3 lg:w-[500px] rounded-sm mt-2'></input>
        </div>

        <div className='mt-10'>
            <p className='text-md font-semibold'>Email Address</p>
            <input type='email' placeholder='Abc@gmail' className='border-2 border-gray-400 h-14 p-3 lg:w-[500px] rounded-sm mt-2'></input>
        </div>

        <div className='mt-10'>
            <p className='text-md font-semibold'>Subject</p>
            <input type='text' placeholder='This is an optional' className='border-2 border-gray-400 h-14 p-3 lg:w-[500px] rounded-sm mt-2'></input>
        </div>

        <div className='mt-10'>
            <p className='text-md font-semibold'>message</p>
            <input type='text' placeholder='Hi i would like to ask about' className='border-2 border-gray-400 h-14 p-3 lg:w-[500px] rounded-sm mt-2'></input>
        </div>
        
        <button className='bg-yellow-700 p-16 text-white py-3 mt-10 '>submit</button>
</div>
    </div>

    <div className='sm:flex justify-between mt-20 bg-amber-100 p-10'>
<div>
<HiOutlineTrophy className='text-2xl'/>
  <h1>High Quality</h1>
  <p>Creafted from top material</p>
</div>

<div className='mt-4 sm:mt-0'>
<AiTwotoneSafetyCertificate className='text-2xl'/>
<h1>Warranty Protection</h1>
<p>Over 2 years</p>
</div>

<div className='mt-4 sm:mt-0'>
<PiHandHeartBold className='text-2xl'/>
<h1>Free Shipping</h1>
<p>Order over 150$</p>
</div>

<div className='mt-4 sm:mt-0'>
<BiSupport className='text-2xl' />
<h1>24/7 Support</h1>
<p>Dedicated Support</p>
</div>
</div>
    </>
  )
}

export default page
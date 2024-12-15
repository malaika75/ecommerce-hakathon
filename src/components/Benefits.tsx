import React from 'react'
import { HiOutlineTrophy } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import { PiHandHeartBold } from "react-icons/pi";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";

function Benefits() {
  return (
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
  )
}

export default Benefits
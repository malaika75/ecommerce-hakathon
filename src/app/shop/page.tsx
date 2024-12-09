import React from 'react'
import Image from 'next/image'
import { LiaSlidersHSolid } from "react-icons/lia";
import { BsFillGridFill } from "react-icons/bs";
import { LuGalleryVertical } from "react-icons/lu";
import { HiOutlineTrophy } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import { PiHandHeartBold } from "react-icons/pi";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";


function page() {
  return (
    <>
    <div>
        <Image src="/images/Group 78 (1).png" alt='banner' className='w-screen' unoptimized placeholder='empty' height={100} width={100}></Image>
</div>

<div className='bg-amber-100 grid md:grid-cols-2 grid-cols-1'>
<div className='flex sm:p-12 p-4'>
<LiaSlidersHSolid className='md:text-2xl sm:ml-20 mt-2 sm:text-xl' />
<p className='md:text-2xl text-xl ml-2'>Filter</p>
<BsFillGridFill className='md:text-2x sm:ml-14 ml-4 mt-2 sm:text-xl ' />
<LuGalleryVertical  className='md:text-2xl ml-4 mt-2 sm:text-xl'/>
<div className='md:p-1'>
<h1 className='border-l border-black p-2 font-semibold'>showing 1-16 of 32 results</h1>
</div>
</div>

<div className='flex gap-6 md:p-12 ml-10 lg:ml-20 mb-4'>
  <h1 className='sm:font-semibold mt-2'>show</h1>
  <p className='bg-white w-10 p-2 h-10'>16</p>
  <p className='sm:font-semibold mt-2'>sort by</p>
  <p className='bg-white w-20 text-center p-2 h-10'>default</p>
</div>
</div>

<div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mt-20 mb-10 mx-auto">
  {[
    { src: '/images/product-4.png', label: 'Syltherine', desc: 'style cafe chair', price: 'Rp 2500,000', oldPrice: 'Rp 3500,000' },
    { src: '/images/product-5.png', label: 'Leviosa', desc: 'style cafe chair', price: 'Rp 2500,000', oldPrice: 'Rp 3500,000' },
    { src: '/images/product-6.png', label: 'Lolito', desc: 'luxury sofa set', price: 'Rp 700,000', oldPrice: 'Rp 1400,000' },
    { src: '/images/product-7.jpeg', label: 'Respira', desc: 'Outdoor bar table and stool', price: 'Rp 500,000' },
    { src: '/images/product-8.png', label: 'Grifo', desc: 'night lamp', price: 'Rp 1,500,000' },
    { src: '/images/product-9.png', label: 'Muggo', desc: 'small mug', price: 'Rp 150,000' },
    { src: '/images/product-10.jpeg', label: 'Pingky', desc: 'cute bed set', price: 'Rp 700,000', oldPrice: 'Rp 14,000,000' },
    { src: '/images/product-11.jpeg', label: 'Potty', desc: 'minimalist flower pot', price: 'Rp 5000,000' },
  ].map((item, index) => (
    <div key={index} className="bg-slate-100 p-4 text-center">
      <Image src={item.src} alt="product-img" height={400} width={400} className="h-60 mx-auto"></Image>
      <p className="mt-4 font-semibold">{item.label}</p>
      <p className="text-gray-400">{item.desc}</p>
      <div className="flex justify-center gap-2 mt-2">
        <p className="font-semibold">{item.price}</p>
        {item.oldPrice && <p className="text-gray-400 line-through">{item.oldPrice}</p>}
      </div>
    </div>
  ))}
  </div>

<div className='mt-28 flex justify-center gap-10 items-center'>
  <p className='bg-yellow-600 h-10 w-10 p-3 rounded text-white'>1</p>
  <p className='bg-amber-100 h-10 w-10 p-3 rounded'>2</p>
  <p className='bg-amber-100 h-10 w-10 p-3 rounded'>3</p>
  <button className='bg-amber-100 h-10 w-16 p-3 rounded'>Next</button>
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
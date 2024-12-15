import React from 'react'
import Image from 'next/image'
import { LiaSlidersHSolid } from "react-icons/lia";
import { BsFillGridFill } from "react-icons/bs";
import { LuGalleryVertical } from "react-icons/lu";
import Benefits from '@/components/Benefits';
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

function page() {
  return (
    <>

    <div>
                <Image src='/images/Rectangle 1.png' alt='banner' height={100} width={100} className='relative w-screen mb-20' unoptimized placeholder='empty' quality={100}></Image>
                
                <div className='absolute lg:top-28 sm:top-20 top-[80px] left-1/2 xl:left-1/3 xl:ml-44 -ml-4'>
                <Image src='/images/logo.png' alt='banner' height={100} width={100} className='h-10 w-10 sm:h-20 sm:w-20 xl:h-30 xl:w-30'
                unoptimized placeholder='empty' quality={100}></Image>
                <h1 className='font-bold sm:text-2xl md:text-4xl -mt-2 sm:-mt-3 sm:ml-2 md:ml-0'>Shop</h1>
                <div className='flex md:mt-2 -ml-4 -mt-1'>
                <Link href='/'>
                <p className='font-semibold sm:ml-2'>Home</p>
                </Link>
                <IoIosArrowForward className='mt-1 font-semibold'/>
                <p className='sm:ml-2'>shop</p>
                </div>
                </div>
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

<Benefits/>
</>
  )
}

export default page
import React from 'react'
import Image from 'next/image'
import { LiaSlidersHSolid } from "react-icons/lia";
import { BsFillGridFill } from "react-icons/bs";
import { LuGalleryVertical } from "react-icons/lu";


function page() {
  return (
    <>
    <div>
        <Image src="/images/Group 78 (1).png" alt='banner' className='w-screen' unoptimized placeholder='empty' height={100} width={100}></Image>
</div>

<div className='bg-amber-100 grid sm:grid-cols-2 grid-cols-1'>
<div className='flex sm:p-12 p-4'>
<LiaSlidersHSolid className='md:text-2xl sm:ml-20 mt-2 sm:text-xl' />
<p className='md:text-2xl text-xl ml-2'>Filter</p>
<BsFillGridFill className='md:text-2x sm:ml-14 ml-4 mt-2 sm:text-xl ' />
<LuGalleryVertical  className='md:text-2xl ml-4 mt-2 sm:text-xl'/>
<div className='md:p-1'>
<h1 className='border-l border-black p-2 font-semibold'>showing 1-16 of 32 results</h1>
</div>
</div>

<div className='flex gap-6 md:p-12 md:ml-20 mb-4'>
  <h1 className='sm:font-semibold mt-2'>show</h1>
  <p className='bg-white w-10 p-2 h-10'>16</p>
  <p className='sm:font-semibold mt-2'>sort by</p>
  <p className='bg-white w-20 text-center p-2 h-10'>default</p>
</div>
</div>

<div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 mt-20  h-80">
 
<div className="h-82 w-52 bg-slate-100 md:ml-10 flex flex-col items-center justify-between mt-6">
<Image src="/images/product-4.png" alt="product-img" height={400} width={400} className="h-60"></Image>
  <p className="mt-4 font-semibold">Syltherine</p>
  <p className="text-gray-400">style cafe chair</p>
  <div className="flex gap-2 mb-4">
  <p>Rp 2500,000</p>
  <p className="text-gray-400 font-semibold">Rp 3500,000</p>
  </div>
  </div>

  <div className="h-80 w-52 bg-slate-100 ml-10 flex flex-col items-center justify-between mt-6">
<Image src="/images/product-5.png" alt="product-img" height={400} width={400} className="h-60"></Image>
  <p className="mt-4 font-semibold">Leviosa</p>
  <p className="text-gray-400">style cafe chair</p>
  <div className="flex gap-2 mb-4">
  <p>Rp 2500,000</p>
  <p className="text-gray-400 font-semibold">Rp 3500,000</p>
  </div>
  </div>

  <div className="h-80 w-52 bg-slate-100 md:ml-10 flex flex-col items-center justify-between mt-12">
<Image src="/images/product-6.png" alt="product-img" height={400} width={400} className="h-60"></Image>
  <p className="mt-4 font-semibold">Lolito</p>
  <p className="text-gray-400">luxurey sofa set</p>
  <div className="flex gap-2 mb-4">
  <p>Rp 700,000</p>
  <p className="text-gray-400 font-semibold">Rp 1400,000</p>
  </div>
  </div>

  <div className="h-80 w-52 bg-slate-100 ml-10 flex flex-col items-center justify-between mt-12">
<Image src="/images/product-7.jpeg" alt="product-img" height={400} width={400} className="h-60"></Image>
  <p className="mt-4 font-semibold">Respira</p>
  <p className="text-gray-400">Outdoor bar table and stool</p>
  <div className="flex gap-2 mb-4 font-semibold">
  <p>Rp 500,000</p>
  </div>
  </div>

</div>

<div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3">

<div className="h-80 w-52 bg-slate-100 md:ml-10 flex flex-col items-center justify-between mt-20 lg:mt-12">
<Image src="/images/product-8.png" alt="product-img" height={400} width={400} className="h-60"></Image>
  <p className="mt-4 font-semibold">Grifo</p>
  <p className="text-gray-400">night lamp</p>
  <div className="flex gap-2 mb-4 font-semibold">
  <p>Rp 1,500,000</p>
  </div>
  </div>

  <div className="h-80 w-52 bg-slate-100 ml-10 flex flex-col items-center justify-between mt-20 lg:mt-12">
<Image src="/images/product-9.png" alt="product-img" height={400} width={400} className="h-60"></Image>
  <p className="mt-4 font-semibold">Muggo</p>
  <p className="text-gray-400">small mug</p>
  <div className="flex gap-2 mb-4 font-semibold">
  <p>Rp 150,000</p>
  </div>
  </div>

  <div className="h-80 w-52 bg-slate-100 md:ml-10 flex flex-col items-center justify-between mt-10">
<Image src="/images/product-10.jpeg" alt="product-img" height={400} width={400} className="h-60"></Image>
  <p className="mt-4 font-semibold">Pingky</p>
  <p className="text-gray-400">cute bed set</p>
  <div className="flex gap-2 mb-4">
  <p className="font-semibold">Rp 700,000</p>
  <p className="text-gray-400">Rp 14,000,000</p>
  </div>
  </div>

  <div className="h-80 w-52 bg-slate-100 ml-10 flex flex-col items-center justify-between mt-10">
<Image src="/images/product-11.jpeg" alt="product-img" height={400} width={400} className="h-60"></Image>
  <p className="mt-4  font-semibold">Potty</p>
  <p className="text-gray-400">minimalist flower pot</p>
  <div className="flex gap-2 mb-4">
  <p className="font-semibold">Rp 5000,000</p>
  </div>
  </div>
</div>

<div className='mt-28 flex justify-center gap-10 items-center'>
  <p className='bg-yellow-600 h-10 w-10 p-3 rounded text-white'>1</p>
  <p className='bg-amber-50 h-10 w-10 p-3 rounded'>2</p>
  <p className='bg-amber-50 h-10 w-10 p-3 rounded'>3</p>
  <button className='bg-amber-50 h-10 w-16 p-3 rounded'>Next</button>
</div>
</>
  )
}

export default page
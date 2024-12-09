import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";


function page() {
  return (
    <>
    <div className='flex bg-amber-50 p-10'>
      <div className='ml-10 flex p-2'>
    <h1 className='mt-1'>Home</h1>
    <MdKeyboardArrowRight className='ml-4 mt-2'/>
    <h1 className='ml-6 mt-1'>Shop</h1>
    <MdKeyboardArrowRight className='ml-4 mt-2'/>
    </div>
    <h1 className='border-l border-black p-2 ml-20 font-bold'>Assgaard sofa</h1>
   </div>

   <div className='grid lg:grid-cols-2 grid-cols-1 mt-20'>

    <div className='flex'>
    <div className='xl:ml-28'>
    <div className=''>
      <Image src='/images/blue-sofa-img1.png' alt='product' height={100} width={100} className='h-30 w-20 bg-amber-50' ></Image>
    </div>

    <div className='mt-2'>
      <Image src='/images/blue-sofa-img2.png' alt='product' height={100} width={100} className='h-20 w-40 bg-amber-50' ></Image>
    </div>

    <div className='mt-2'>
      <Image src='/images/blue-sofa-img3.png' alt='product' height={100} width={200} className='h-30 w-20 bg-amber-50' ></Image>
    </div>

    <div className='mb-20'>
      <Image src='/images/sofa.png' alt='product' height={100} width={200} className='h-30 w-20 bg-amber-50' ></Image>
    </div>
    </div>
    

    <div className=' ml-3'>
      <Image src='/images/blue-sofa-img.png' alt='product' height={100} width={900} className='ml-6 bg-amber-50'></Image>
    </div>
    </div>


    <div className='lg:ml-32 ml-10 mt-4'>
      <h1 className='text-2xl font-semibold'>Asgaard Sofa</h1>
      <p className='ml-2'>Rs: 250,000.00</p>
      <div className='flex mt-4 m-2'>
      <FaStar className='text-yellow-400 text-xl' />
      <FaStar className='text-yellow-400 text-xl' />
      <FaStar className='text-yellow-400 text-xl' />
      <FaStar className='text-yellow-400 text-xl' />
      <FaStar className='text-yellow-400 text-xl' />
      <p className='border-l border-black ml-4'></p>
      <h1 className='ml-2'>5 costumer review</h1>
</div>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quo officia adipisci, distinctio deserunt similique modi dolorum sapiente ea ratione autem quidem quia consequuntur explicabo harum nihil quasi, odit non!
</p>
<h1 className='mt-8'>size</h1>

<div className='flex gap-4 mt-2'>
  <p className='bg-yellow-600 h-10 w-10 p-3 rounded text-white'>L</p>
  <p className='bg-amber-100 h-10 w-10 p-3 rounded'>XL</p>
  <p className='bg-amber-100 h-10 w-10 p-3 rounded'>XS</p>
</div>

<h1 className='mt-4'>color</h1>
<div className='flex'>
<p className='bg-blue-800 h-6 w-6 rounded-full mt-2 ml-2'></p>
<p className='bg-black h-6 w-6 rounded-full mt-2 ml-2'></p>
<p className='bg-yellow-600 h-6 w-6 rounded-full mt-2 ml-2'></p>
</div>

<div className='flex gap-4'>
  <div className='flex justify-between border-black border-2 w-40 mt-6 p-4' >
  <button>-</button>
  1
  <button>+</button>
</div>

<div className='border-black border-2 w-40 mt-6 p-4 text-center'>
  Add to cart
</div>

<div className='border-black border-2 w-40 mt-6 p-4 text-center'>
  + Campare
</div>
</div>

<div className='mt-20 border-t'>
  <p className='mt-10'>SKU : 55001</p>
  <p className='mt-2'>Category : safas</p>
  <p className='mt-2'>Tags : sofa, chair, home , shop</p>
  <p className='flex mt-2'>share : <FaFacebook className='ml-2'/> <FaLinkedin className='ml-2' /> <FaTwitterSquare className='ml-2' /> </p>
</div>
</div>
</div>


<div className='mt-20 border-t'>

<div className='flex justify-center text-center mt-10 gap-6'>
<h1 className='font-semibold ml-6'>Depscreption</h1>
<p className='ml-10 text-gray-400'>Additional Information</p>
<p className='text-gray-400'>Reviews [5]</p>
</div>

<div className='textcenter flex flex-col justify-center items-center'>
<p className='mt-10 text-gray-400 w-9/12'>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis distinctio velit laborum deserunt sapiente sit ea ullam quia consequatur sequi hic, blanditiis, suscipit atque, maiores iste possimus illo exercitationem odio!
</p>
  <p className='text-gray-400 mt-10 w-9/12'>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos temporibus tenetur eius et veritatis, repellat commodi adipisci quo sequi ad! Dolores quaerat itaque sequi totam consectetur sint, voluptatibus corporis iure?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae suscipit illum ea ipsum culpa necessitatibus ducimus. Ipsum, hic aliquam. Omnis natus porro tenetur obcaecati alias unde quas reiciendis aspernatur.
</p>
</div>


<div className='flex justify-center gap-4'>
<div className='mt-4'>
      <Image src='/images/sofa-img.png' alt='product' height={100} width={600} className='bg-amber-50' ></Image>
    </div>
    <div className=''>
      <Image src='/images/sofa-img2.png' alt='product' height={100} width={600} className='bg-amber-50'></Image>
    </div>
</div>
<div>
</div>
</div> 

<div className='border-t mt-10 '>
  <h1 className='mt-10 text-center font-bold text-2xl mb-6'>Related Products</h1>
</div>

<div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mt-20 mb-10 mx-auto">
  {[
    { src: '/images/product-7.jpeg', label: 'Respira', desc: 'Outdoor bar table and stool', price: 'Rp 500,000' },
    { src: '/images/product-4.png', label: 'Syltherine', desc: 'style cafe chair', price: 'Rp 2500,000', oldPrice: 'Rp 3500,000' },
    { src: '/images/product-5.png', label: 'Leviosa', desc: 'style cafe chair', price: 'Rp 2500,000', oldPrice: 'Rp 3500,000' },
    { src: '/images/product-6.png', label: 'Lolito', desc: 'luxury sofa set', price: 'Rp 700,000', oldPrice: 'Rp 1400,000' },
  ].map((item, index) => (
    <div key={index} className="bg-slate-100 p-4 text-center">
      <Image src={item.src} alt="product-img" height={400} width={400} className="h-60 mx-auto ml-4"></Image>
      <p className="mt-4 font-semibold">{item.label}</p>
      <p className="text-gray-400">{item.desc}</p>
      <div className="flex justify-center gap-2 mt-2">
        <p className="font-semibold">{item.price}</p>
        {item.oldPrice && <p className="text-gray-400 line-through">{item.oldPrice}</p>}
      </div>
    </div>
  ))}
  </div>

  <div className="text-center mt-20 mb-10 ml-10">
<button className="border-2 border-yellow-600 px-20 p-3 text-yellow-600">Show More</button>
</div>
    </>
  )
}

export default page
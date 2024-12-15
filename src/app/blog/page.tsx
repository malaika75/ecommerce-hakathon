import React from 'react'
import Image from 'next/image';
import { IoMdPerson } from "react-icons/io";
import { FaTag } from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
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
            <h1 className='font-bold sm:text-2xl md:text-4xl -mt-2 sm:-mt-3 sm:ml-2 md:ml-0'>Blog</h1>
            <div className='flex md:mt-2 -ml-6 -mt-1'>
            <Link href='/'>
            <p className='font-semibold sm:ml-2'>Home</p>
            </Link>
            <IoIosArrowForward className='mt-1 font-semibold'/>
            <p className='sm:ml-2'>blog</p>
            </div>
            </div>
        </div>
    

<div className='grid lg:grid-cols-2 grid-cols-1'>
<div className=''>
    <div>
    <Image src='/images/computer-img.jpeg' alt='computer-img' height={100} width={600} className='mt-20 xl:mx-20 rounded-md sm:mx-10' unoptimized placeholder='empty' quality={100}></Image>

    <div className='flex mt-6 sm:mx-20 text-gray-400 mx-3'>
    <IoMdPerson className='sm:text-xl'/>
    <p className='ml-2'>Admin</p>
    <FaBoxArchive className='sm:ml-10 ml-4 sm:text-xl'/>
    <p className='ml-2'>14 Oct 2022</p>
    <FaTag className='sm:ml-10 sm:text-xl ml-4'/>
    <p className='ml-2'>Wood</p>
    </div>

    <h1 className='font-bold text-2xl mt-4 sm:mx-20 mx-2'>Going All-in With minllenial design</h1>
    <p className='mt-6 sm:mx-20 mx-4 text-gray-400 w-11/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis sunt suscipit sequi commodi, et ullam adipisci quam debitis ad? Animi nulla neque eos molestias libero veritatis sapiente, corrupti eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores est officia, eaque obcaecati alias excepturi nulla voluptas, tenetur laudantium dolor asperiores? Doloribus aspernatur ea possimus modi labore? Unde, provident nobis!</p>
    <p className='mt-6 sm:mx-20 mx-6 font-semibold border-b-2 border-black w-fit'>Read more</p>
    </div>

    <div>
    <Image src='/images/blog-img.jpeg' alt='computer-img' height={100} width={600} className='mt-20 xl:mx-20 rounded-md sm:mx-10' unoptimized placeholder='empty' quality={100}></Image>

    <div className='flex mt-6 sm:mx-20 text-gray-400 mx-3'>
    <IoMdPerson className='sm:text-xl'/>
    <p className='ml-2'>Admin</p>
    <FaBoxArchive className='sm:ml-10 sm:text-xl ml-4'/>
    <p className='ml-2'>14 Oct 2022</p>
    <FaTag className='sm:ml-10 sm:text-xl ml-4'/>
    <p className='ml-2'>Wood</p>
    </div>

    <h1 className='font-bold text-2xl mt-4 sm:mx-20 mx-2'>Exploring new ways of Decorating</h1>
    <p className='mt-6 sm:mx-20 text-gray-400 w-11/12 mx-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis sunt suscipit sequi commodi, et ullam adipisci quam debitis ad? Animi nulla neque eos molestias libero veritatis sapiente, corrupti eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores est officia, eaque obcaecati alias excepturi nulla voluptas, tenetur laudantium dolor asperiores? Doloribus aspernatur ea possimus modi labore? Unde, provident nobis!</p>
    <p className='mt-6 sm:mx-20 mx-6 font-semibold border-b-2 border-black w-fit'>Read more</p>
    </div>

    <div>
    <Image src='/images/blog-img1.jpeg' alt='computer-img' height={100} width={600} className='mt-20 xl:mx-20 rounded-md sm:mx-10' unoptimized placeholder='empty' quality={100}></Image>

    <div className='flex mt-6 sm:mx-20 text-gray-400 mx-3'>
    <IoMdPerson className='sm:text-xl'/>
    <p className='ml-2'>Admin</p>
    <FaBoxArchive className='sm:ml-10 sm:text-xl ml-4'/>
    <p className='ml-2'>14 Oct 2022</p>
    <FaTag className='sm:ml-10 sm:text-xl ml-4'/>
    <p className='ml-2'>Wood</p>
    </div>

    <h1 className='font-bold text-2xl mt-4 sm:mx-20 mx-2'>Handmade pieces that took time to make</h1>
    <p className='mt-6 sm:mx-20 text-gray-400 w-11/12 mx-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis sunt suscipit sequi commodi, et ullam adipisci quam debitis ad? Animi nulla neque eos molestias libero veritatis sapiente, corrupti eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores est officia, eaque obcaecati alias excepturi nulla voluptas, tenetur laudantium dolor asperiores? Doloribus aspernatur ea possimus modi labore? Unde, provident nobis!</p>
    <p className='mt-6 sm:mx-20 mx-6 font-semibold border-b-2 border-black w-fit'>Read more</p>
    </div>
</div>

<div>
    <div className='flex mt-20 lg:mx-60 mx-10 border-2 border-gray-400 h-12 w-64  p-3 rounded-md'>
        <input type='text outline-none'></input>
        <IoSearch className='text-xl'/>
</div>

    <div className='mt-20 lg:mx-60 mx-10 space-y-10'>
    <h1 className='text-xl font-semibold'>Categories</h1>
    <div className='flex text-gray-400 gap-48'>
    <p className=''>Craft</p>
    <p>2</p>
    </div>

    <div className='flex text-gray-400 gap-44 spacex-10'>
    <p className=''>Design</p>
    <p>8</p>
    </div>

    <div className='flex text-gray-400 gap-36'>
    <p className=''>Handmade</p>
    <p className=''>7</p>
    </div>

    <div className='flex text-gray-400 gap-44'>
    <p className=''>interior</p>
    <p>6</p>
</div>

<div className='flex text-gray-400 sm:space-x-48 space-x-44'>
    <p className=''>Wood</p>
    <p>1</p>
    </div>
</div>

<div className='mt-40 lg:mx-60 sm:mx-10 mx-4'>
<h1 className='font-bold text-2xl'>Resent Posts</h1>

<div>
    <div className='flex mt-10 space-x-4'>
    <Image src='/images/blog-img2.jpeg' alt='blog-img2' height={100} width={100} className='rounded-lg'></Image>
    <div>
    <h1 className='w-40'>Going all-in with millenial design</h1>
    <p className='text-gray-400'>03 Aug 2023</p>
    </div>
    </div>

    <div className='flex mt-10 space-x-4'>
    <Image src='/images/blog-img3.jpeg' alt='blog-img3' height={100} width={100} className='rounded-lg'></Image>
    <div>
    <h1 className='w-40'>Exploring new ways of decorating</h1>
    <p className='text-gray-400'>03 Aug 2023</p>
    </div>
    </div>

    <div className='flex mt-10 space-x-4'>
    <Image src='/images/blog-img4.jpeg' alt='blog-img4' height={100} width={100} className='rounded-lg'></Image>
    <div>
    <h1 className='w-40'>Handmade pieces that took time to make</h1>
    <p className='text-gray-400'>03 Aug 2023</p>
    </div>
    </div>

    <div className='flex mt-10 space-x-4'>
    <Image src='/images/blog-img5.jpeg' alt='blog-img5' height={100} width={100} className='rounded-lg'></Image>
    <div>
    <h1 className='w-40'>Modern home in milan</h1> 
    <p className='text-gray-400'>03 Aug 2023</p>
    </div>
    </div>

    <div className='flex space-x-4 mt-10'>
    <Image src='/images/blog-img6.jpeg' alt='blog-img6' height={100} width={100} className='rounded-lg'></Image>
    <div>
    <h1 className='w-40'>Colorfull office redesign</h1>
    <p className='text-gray-400'>03 Aug 2023</p>
    </div>
    </div>
</div>
</div>
</div>
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
import React from 'react';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Benefits from '@/components/Benefits';
import { RiDeleteBinFill } from "react-icons/ri";
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
      <h1 className='font-bold sm:text-2xl md:text-4xl -mt-2 sm:-mt-3 sm:ml-2 md:ml-0'>Cart</h1>
    <div className='flex md:mt-2 -ml-4 -mt-1'>
    <Link href='/'>
    <p className='font-semibold sm:ml-2'>Home</p>
    </Link>
    <IoIosArrowForward className='mt-1 font-semibold'/>
    <p className='sm:ml-2'>cart</p>
    </div>
  </div>
</div>
            

<div className='grid lg:grid-cols-2 grid-cols-1'>
    <div className='mt-14 sm:mx-10 mx-2 ml-6'>
    <Table>
  <TableCaption></TableCaption>
  <TableHeader className='bg-amber-100'>
    <TableRow className='bg-amber-100'>
      <TableHead className="w-[250px]">Product</TableHead>
      <TableHead className='sm:ml-10'>Price</TableHead>
      <TableHead className='sm:ml-14 ml-20'>Quantity</TableHead>
      <TableHead className="text-right">Sabtotal</TableHead>
      
    </TableRow>
  </TableHeader>
  <TableBody className=''>
    <TableRow className='mt-10'>
      <TableCell className="font-medium flex"><Image src='/images/blue-sofa-img.png' alt='product-img' height={100} width={100} className='bg-amber-100 mt-6'></Image>
      <p className='mt-10 ml-4 text-gray-400'>Assgard sofa</p>
      </TableCell>
      <TableCell>25,000,00</TableCell>
      <TableCell className=''>1</TableCell>
      <TableCell className="text-right">25,000,00</TableCell>
      <RiDeleteBinFill className='text-yellow-700 text-xl mb-10 mx-2 cursor-pointer'/>
    </TableRow>
  </TableBody>
</Table>
</div>

<div className='bg-amber-100 mt-10 w9/12 w-64 p-6 text-center sm:ml-20 lg:ml-40 ml-10'>
  <h1 className='text-xl font-semibold'>Cart Totals</h1>
  <div className='flex gap-10 mt-6 text-center'>
  <p className='font-semibold'>SubTotal</p>
  <p className='text-gray-400'>250,000,00</p>
  </div>
  <div className='flex gap-10 mt-6'>
  <p className='font-semibold'>Total</p>
  <p className='text-yellow-700'>250,000,00</p>
  </div>

<Link href='/checkout'>
  <button className='border-2 border-black p-2 px-8 rounded-xl mt-8 font-semibold mb-14'>Check out</button>
</Link>
</div>
</div>

<Benefits/>

    </>
  )
}

export default page
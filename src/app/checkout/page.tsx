import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import Benefits from '@/components/Benefits';

function page() {
  return (
    <>
    <div>
        <Image src='/images/Rectangle 1.png' alt='banner' height={200} width={100} className='relative w-screen mb-20' unoptimized placeholder='empty' quality={100}></Image>
        
        <div className='absolute lg:top-28 sm:top-20 top-[72px] left-1/2 xl:left-1/3 xl:ml-44 -ml-4'>
        <Image src='/images/logo.png' alt='banner' height={100} width={100} className='h-8 w-8 sm:h-20 sm:w-20 xl:h-30 xl:w-30'
        unoptimized placeholder='empty' quality={100}></Image>
        <h1 className='font-bold sm:text-2xl md:text-4xl -ml-5 md:-ml-10 -mt-2 sm:-mt-3'>Checkout</h1>
        <div className='flex md:mt-2 -ml-9 -mt-1'>
        <Link href='/'>
        <p className='font-semibold sm:ml-2'>Home</p>
        </Link>
        <IoIosArrowForward className='mt-1 font-semibold'/>
        <p className='sm:ml-2'>checkout</p>
        </div>
        </div>
    </div>

    <div className='grid xl:grid-cols-2 grid-cols-1'>
        <div>
            <h1 className='lg:mx-20 mx-6 text-2xl font-bold'>Billing Details</h1>
            <div className='mt-10 grid md:flex lg:mx-20 mx-4 gap-8'>

            <div className=''>
            <label className='text-md font-semibold block'>First name</label>
            <input type='text' className='border-2 border-gray-400 h-14 p-3 lg:w[500px] rounded-sm mt-2' required></input>
            </div>

            <div className=''>
            <label className='text-md font-semibold block'>Last name</label>
            <input type='text' className='border-2 border-gray-400 h-14 p-3 lg:w[500px] rounded-sm mt-2' required></input>
        </div>
        </div>

<div className='lg:mx-20 mx-4'>
        <label className='text-md font-semibold block mt-6 '>company name(optional)</label>
        <input type='text' className='border-2 border-gray-400 h-14 p-3 lg:w-[500px] rounded-sm mt-2'></input>

        <label className='text-md font-semibold block mt-6 '>Country/region</label>
        <select name="countries" className='border-2 border-gray-400 font-semibold h-14 p-3 mt-2'>
          <option className='font-semibold'>pakistan</option>
          <option>saudia arabia</option>
          <option>Australia</option>
          <option>Srilanka</option>
          <option>Dubai</option>
        </select>
        

        <label className='text-md font-semibold block mt-6 '>Street Address</label>
        <input type='text' className='border-2 border-gray-400 h-14 p-3 lg:w-[500px] rounded-sm mt-2' required></input>

        <label className='text-md font-semibold block mt-6 '>Town/City</label>
        <input type='text' className='border-2 border-gray-400 h-14 p-3 lg:w-[500px] rounded-sm mt-2' required></input>

        <label className='text-md font-semibold block mt-6 '>Province</label>
        <input type='text' className='border-2 border-gray-400 h-14 p-3 lg:w-[500px] rounded-sm mt-2' required></input>

        <label className='text-md font-semibold block mt-6 '>Zip Code</label>
        <input type='text' className='border-2 border-gray-400 h-14 p-3 lg:w-[500px] rounded-sm mt-2' required></input>

        <label className='text-md font-semibold block mt-6 '>Phone</label>
        <input type='text' className='border-2 border-gray-400 h-14 p-3 lg:w-[500px] rounded-sm mt-2' required></input>

        <label className='text-md font-semibold block mt-6 '>Email Address</label>
        <input type='text' className='border-2 border-gray-400 h-14 p-3 lg:w-[500px] rounded-sm mt-2' required></input>

        <label className='text-md font-semibold block mt-6 '>Additional information</label>
        <input type='text' className='border-2 border-gray-400 h-14 p-3 lg:w-[500px] rounded-sm mt-2'></input>
    </div>
    </div>

    <div className='xl:mx-32 mx-4 mt-20'>
      <div className='flex sm:gap-32 gap-12'>
      <div>
      <h1 className='text-xl font-semibold'>Product</h1>
      <p className='mt-2'>Asgaard sofa x 1</p>
      <p className='font-semibold mt-2'>Subtotal</p>
      <p className='font-semibold mt-2'>Total</p>
      </div>

<div>
  <h1 className='text-xl font-semibold'>Subtotal</h1>
  <p className='mt-2'>Rs. 250,000,00</p>
  <p className='mt-2'>Rs. 250,000,00</p>
  <p className='mt-2 font-semibold text-yellow-600 text-xl -ml-6'>Rs. 250,000,00</p>
</div>
</div>

<div className='border-t mt-10 p-6 w-11/12'>
<p className='font-semibold'> Direct bank transfer</p>
<p className='text-gray-400 mt-4'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

  <div className='text-gray-400 mt-6 space-y-2'>
    <div className='space-x-4 flex'>
      <input type='radio' name='option' value='option1' className=''></input>
    <label>Direct bank transfer</label>
  </div>

<div className='gap-4 flex'>
  <input type='radio' name='option' value='option2' className=''></input>
  <label className='block'>cash on delivery</label>
</div>

</div>
  <p className='mt-4 w-11/12'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our<span className='font-semibold'> privacy policy.</span></p>

  <button className='text-center border-2 border-black mt-12 p-2 px-10 rounded-md'>Place order</button>
</div>

    </div>
    </div>

    <Benefits/>
    </>
  )
}

export default page
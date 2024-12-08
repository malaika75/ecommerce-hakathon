import React from 'react'

function Footer() {
  return (
    <>
    <div className='mt-40 grid  lg:grid-cols-4  md:grid-cols-3  border-t p-4 sm:p-10'>
        <div className='sm:ml-10'>
        <h1 className='text-2xl font-bold'>Furniro.</h1>
        <p className='text-gray-400 mt-6'>400 universities Drives 200 coral</p>
        <p className='text-gray-400'>Gobies</p>
        <p className='text-gray-400'>FL 33134 USA</p>
</div>

<div className='grid grid-cols-2'>
<div>
    <ul className='md:ml-10 lg:ml-40 mt-12'>
        <li className='text-gray-500 sm:mt-6'>Links</li>
        <li className='sm:mt-14 mt-4'>Home</li>
        <li className='sm:mt-8 mt-2 '>Shop</li>
        <li className='sm:mt-8 mt-2 '>About</li>
        <li className='sm:mt-8 mt-2'>Contact</li>
    </ul>
</div>
<div>
    <ul className='md:ml-6 lg:ml-40 mt-12'>
    <li className='text-gray-500 mt-6'>Help</li>
    <li className='sm:mt-10 mt-2'>payment method</li>
    <li className='sm:mt-10 mt-2'>returns</li>
    <li className='sm:mt-10 mt-2 mr-2'>privacy policy</li>
    </ul>
</div>
</div>

<div className='lg:ml-60'>
    <p className='text-gray-500 sm:mt-4 mt-8'>Newsletters</p>
    <div className='flex sm:mt-10 mt-2'>
    <input type='email' placeholder='Enter your email address' className='underline'></input>
    <p className='underline'>Subscribe</p>
    </div>
</div>
    </div>
    <div className='border-t p-8 pb-6 sm:mx-20'>
        <p className='font-semibold'>2023 furino. All rights reserved</p>
    </div>
    </>
  )
}

export default Footer 
import React from 'react'
import Image from 'next/image'
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoMenu } from "react-icons/io5";


function Navbar() {
  return (
<>
<div className='flex justify-between p-6'>
    <div className='flex'>
    <div className='flex lg:hidden'>
    <DropdownMenu>
  <DropdownMenuTrigger><IoMenu className='text-xl'/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel></DropdownMenuLabel>
    <DropdownMenuSeparator />
    <Link href='/'>
    <DropdownMenuItem>Home</DropdownMenuItem>
    </Link>

    <Link href='/shop'>
    <DropdownMenuItem>Shop</DropdownMenuItem>
    </Link>

<Link href='/blog'>
    <DropdownMenuItem>Blog</DropdownMenuItem>
</Link>

    <Link href='/contact'>
    <DropdownMenuItem>Contact</DropdownMenuItem>
    </Link>
  </DropdownMenuContent>
</DropdownMenu>
</div>

<div className=''>
    <Image src="/images/Frame 168.png" alt='logo' height={100} width={100} className='lg:ml-4'></Image>
    </div>
    </div>
    
<div>
        <ul className='hidden lg:flex gap-4 lg:gap-10 xl:font-semibold'>
<Link href="/">
            <li className='cursor-pointer'>Home</li>
</Link>

<Link href="/shop">
            <li className='cursor-pointer'>Shop</li>
</Link>

<Link href='/blog'>
            <li className='cursor-pointer'>Blog</li>
</Link>

<Link href='/contact'>
            <li className='cursor-pointer'>Contact</li>
</Link>

        </ul>
    </div>
    <div className='flex md:mr-20 gap-4 md:gap-10'>
    
    <FaRegUser className='text-xl'/>
    <IoSearch className='text-xl'/>
    <FaRegHeart className='text-xl'/>
    <div>
<Link href='/cart'>
    <BsCart3 className='cursor-pointer relative text-xl'/>
</Link>
<span className='absolute top-9  bg-red-400 h-5 w-5 text-center rounded-full ml-3'>0</span>
</div>
    </div>
</div>
    </>
  )
}

export default Navbar
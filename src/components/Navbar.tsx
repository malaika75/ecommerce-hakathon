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
    <DropdownMenuItem>Home</DropdownMenuItem>
    <DropdownMenuItem>Shop</DropdownMenuItem>
    <DropdownMenuItem>Blog</DropdownMenuItem>
    <DropdownMenuItem>Contact</DropdownMenuItem>
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
            <li className='cursor-pointer'>Blog</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
    </div>
    <div className='flex md:mr-20 gap-4 md:gap-10'>
    
    <FaRegUser />
    <IoSearch />
    <FaRegHeart />
    <BsCart3 />

    </div>
</div>
    </>
  )
}

export default Navbar
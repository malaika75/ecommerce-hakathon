"use client"
import React from 'react';
import Image from 'next/image';
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link';
import { BsCart3 } from "react-icons/bs";
import SearchButton from '@/components/SearchButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMenu } from "react-icons/io5";
import { useCart } from '@/app/context/CartContext';
import { useUser, useClerk } from "@clerk/nextjs"; 

function Navbar() {
  const { cartItems } = useCart();
  const { user } = useUser(); // Clerk user
  const { signOut } = useClerk(); // Clerk signOut function

  // Get first letter of email if available
  const userInitial = user?.emailAddresses?.[0]?.emailAddress?.[0]?.toUpperCase();
  const userEmail = user?.emailAddresses?.[0]?.emailAddress; // User's email

  return (
    <div className="flex justify-between p-6">
      {/* Left Section */}
      <div className="flex items-center">
        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <IoMenu className="text-xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href="/"><DropdownMenuItem>Home</DropdownMenuItem></Link>
              <Link href="/shop"><DropdownMenuItem>Shop</DropdownMenuItem></Link>
              <Link href="/blog"><DropdownMenuItem>Blog</DropdownMenuItem></Link>
              <Link href="/contact"><DropdownMenuItem>Contact</DropdownMenuItem></Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Logo */}
        <div className="">
          <Image src="/images/Frame 168.png" alt="logo" height={100} width={100} className='lg:ml-4' />
        </div>
      </div>

      {/* Center Section */}
      <div>
        <ul className="hidden lg:flex gap-4 lg:gap-10 xl:font-semibold">
          <Link href="/"><li className="cursor-pointer">Home</li></Link>
          <Link href="/shop"><li className="cursor-pointer">Shop</li></Link>
          <Link href="/blog"><li className="cursor-pointer">Blog</li></Link>
          <Link href="/contact"><li className="cursor-pointer">Contact</li></Link>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex md:mr-20 gap-4 md:gap-10 items-center">
        {user ? (
          // If user is signed in, show a dropdown menu with user options
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="w-8 h-8 md:w-8 md:h-8 rounded-full bg-green-700 flex items-center justify-center text-white text-sm md:text-base font-bold cursor-pointer">
                {userInitial}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex flex-col">
                  <span className="font-semibold">{userEmail}</span>
                  <span className="text-sm text-gray-500">Signed in</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/orders">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/wishlist">Wishlist</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          // Otherwise, show the signup icon
          <Link href='/auth/signup'>
            <FaRegUser className="text-xl" />
          </Link>
        )}

        <SearchButton onSearch={(results) => console.log(results)} />

        <Link href='/wishlist'>
          <FaRegHeart className="text-xl cursor-pointer hover:text-red-700" />
        </Link>

        <div>
          <Link href="/cart">
            <BsCart3 className='cursor-pointer relative text-xl'/>
            {cartItems.length > 0 && (
              <span className="absolute top-9 h-4 w-4 bg-red-500 text-center text-white rounded-full text-xs ml-3">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
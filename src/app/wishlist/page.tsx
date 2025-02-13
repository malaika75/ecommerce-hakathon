"use client";
import React from "react";
import { useCart } from "@/app/context/CartContext";
import {urlFor} from '@/sanity/lib/image'
import Image from "next/image";

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-yellow-700">Your Wishlist is Empty 💔</h1>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center text-yellow-700">Your Wishlist 💖</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item._id}
            className="border border-yellow-700 p-4 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 bg-white"
          >
            <Image
              src={urlFor(item.productImage).url()}
              alt={item.title}
              className="w-32 h-32 sm:w-40 sm:h-40 object-cover mb-4 rounded-md"
              width={100} height={100}></Image>

            <h2 className="text-lg font-bold text-center text-yellow-700">{item.title}</h2>
            <p className="text-gray-500">${item.price.toFixed(2)}</p>
            <button
              onClick={() => removeFromWishlist(item._id)}
              className="bg-amber-500 hover:bg-yellow-700 text-white font-bold py-1 px-4 rounded mt-4"
            >
              Remove from Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;

"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';

const ShowMore = () => {
  const extraProducts = [
    { src: '/images/product-4.png', label: 'Syltherine', desc: 'style cafe chair', price: 'Rp 2500,000', oldPrice: 'Rp 3500,000' },
    { src: '/images/product-5.png', label: 'Leviosa', desc: 'style cafe chair', price: 'Rp 2500,000', oldPrice: 'Rp 3500,000' },
    { src: '/images/product-6.png', label: 'Lolito', desc: 'luxury sofa set', price: 'Rp 700,000', oldPrice: 'Rp 1400,000' },
    { src: '/images/product-7.jpeg', label: 'Respira', desc: 'Outdoor bar table and stool', price: 'Rp 500,000' },
    { src: '/images/product-8.png', label: 'Grifo', desc: 'night lamp', price: 'Rp 1,500,000' },
    { src: '/images/product-9.png', label: 'Muggo', desc: 'small mug', price: 'Rp 150,000' },
    { src: '/images/product-10.jpeg', label: 'Pingky', desc: 'cute bed set', price: 'Rp 700,000', oldPrice: 'Rp 14,000,000' },
    { src: '/images/product-11.jpeg', label: 'Potty', desc: 'minimalist flower pot', price: 'Rp 5000,000' },
  ];

  const [showMore, setShowMore] = useState(false); // Controls whether to show extra products

  const handleShowMore = () => {
    setShowMore(!showMore); // Toggle the showMore state
  };

  return (
    <div>
      {/* Default Products (initially hidden) */}
      {showMore && (
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mt-20 mb-10 mx-6">
          {extraProducts.map((item, index) => (
            <div key={index} className="group relative bg-slate-100 p-4 text-center">
              <Image src={item.src} alt="product-img" height={400} width={400} className="h-60 mx-auto" />
              <p className="mt-4 font-semibold">{item.label}</p>
              <p className="text-gray-400">{item.desc}</p>
              <div className="flex justify-center gap-2 mt-2">
                <p className="font-semibold">{item.price}</p>
                {item.oldPrice && <p className="text-gray-400 line-through">{item.oldPrice}</p>}
              </div>
              <div className="absolute group-hover:opacity-60 object-cover inset-0 opacity-0 bg-black h-60 w-72 mx-auto transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-10 text-center mt-4">
                <div className="bg-white text-yellow-700 border-2 w-40 mt-14 p-4 text-center font-semibold ml-14 cursor-pointer">
                  Add to cart
                </div>
                <div className="flex p-6 gap-4 justify-center text-xl">
                  <button className="text-white hover:scale-125">+checkout</button>
                  <FaRegHeart className="text-white cursor-pointer hover:text-red-500 hover:scale-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show More Button */}
      {!showMore && (
        <div className='text-center mt-20 mb-20'>
        <button
          onClick={handleShowMore}
          className="border-2 border-yellow-600 px-20 p-3 text-yellow-600"
        >
          Show More
        </button>
        </div>
      )}
    </div>
  );
};

export default ShowMore;

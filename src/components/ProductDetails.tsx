'use client';

import React, { useState, useEffect } from 'react';
import { FaStar, FaTwitterSquare } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import CartButton from "@/components/CartButton";

interface Product {
  _id: string;
  title: string;
  price: number;
  productImage: string;
  description: string;
  discountPercentage: number;
  tags: string;
  slug: string;
  sku: number;
  category: string;
  color: string;
  quantity: number;
}

const ProductDetails = ({ product }: { product: Product }) => {
  const [userRating, setUserRating] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);

  // Handle rating change
  const handleRatingChange = (rating: number) => {
    setUserRating(rating);
  };

  // Handle quantity change
  const handleQuantityChange = (operation: 'increase' | 'decrease') => {
    if (operation === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (operation === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Handle storing the rating in localStorage
  useEffect(() => {
    if (userRating !== null) {
      localStorage.setItem('userRating', userRating.toString());
    }
  }, [userRating]);

  // Load saved rating from localStorage
  useEffect(() => {
    const savedRating = localStorage.getItem('userRating');
    if (savedRating) {
      setUserRating(parseInt(savedRating, 10));
    }
  }, []);

  // Render the stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= rating ? "text-yellow-400 text-xl" : "text-gray-400 text-xl"}
          onClick={() => handleRatingChange(i)} // Set rating when clicked
        />
      );
    }
    return stars;
  };

  return (
    <>
      <div className="flex mt-4 m-2">
        {renderStars(userRating ?? 5)} {/* Render user rating */}
        <p className="border-l border-black ml-4"></p>
        <h1 className="ml-2">{userRating} star rating</h1>
      </div>
      <p className="line-clamp-4">{product.description}</p>

      {/* Size options */}
      <h1 className="mt-8">Size</h1>
      <div className="flex gap-4 mt-2">
        <p className="bg-yellow-600 h-10 w-10 p-3 rounded text-white">L</p>
        <p className="bg-amber-100 h-10 w-10 p-3 rounded">XL</p>
        <p className="bg-amber-100 h-10 w-10 p-3 rounded">XS</p>
      </div>

      {/* Color options */}
      <h1 className="mt-4">{product.color}</h1>
      <div className="flex">
        <p className="bg-blue-800 h-6 w-6 rounded-full mt-2 ml-2"></p>
        <p className="bg-black h-6 w-6 rounded-full mt-2 ml-2"></p>
        <p className="bg-yellow-600 h-6 w-6 rounded-full mt-2 ml-2"></p>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="flex gap-4">
        <div className="flex justify-between border-black border-2 w-40 h-16 mt-10 p-4 textcenter">
          <button onClick={() => handleQuantityChange('decrease')}>-</button>
          <p>{quantity}</p>
          <button onClick={() => handleQuantityChange('increase')}>+</button>
        </div>

        
          <CartButton product={product} />
        

        <Link href='/checkout'>
          <div className="border-black border-2 w-40 mt-10 p-4 text-center">
            + Checkout
          </div>
        </Link>
      </div>

      <div className="mt-20 border-t">
        <p className="mt-10">SKU: {product.sku}</p>
        <p className="mt-2">Category: {product.category}</p>
        <p className="mt-2">Tags: {product.tags}</p>
        <p className="flex mt-2">Share: <FaFacebook className="ml-2" /> <FaLinkedin className="ml-2" /> <FaTwitterSquare className="ml-2" /></p>
      </div>
    </>
  );
};

export default ProductDetails;


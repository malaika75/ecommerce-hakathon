"use client";
import React from "react";
import { useCart } from "@/app/context/CartContext";
import { FaRegHeart } from "react-icons/fa"; 

interface CartItem {
    _id: string;
    productImage: string;
    title: string;
    price: number;
    quantity: number;
  }
interface AddToWishlistButtonProps {
  product: CartItem;
}

const AddToWishlistButton: React.FC<AddToWishlistButtonProps> = ({ product }) => {
  const { addToWishlist } = useCart();

  return (
    <button
      onClick={() => addToWishlist(product)}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
    >
      <FaRegHeart className="text-xl" />
    </button>
  );
};

export default AddToWishlistButton;

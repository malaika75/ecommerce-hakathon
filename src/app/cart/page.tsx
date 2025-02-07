"use client";
import React from "react";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import { useCart } from "@/app/context/CartContext";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Benefits from "@/components/Benefits";
import { IoIosArrowForward } from "react-icons/io";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div>
        <Image
          src="/images/Rectangle 1.png"
          alt="banner"
          height={100}
          width={100}
          className="relative w-screen mb-20"
          unoptimized
          placeholder="empty"
          quality={100}
        />

        <div className="absolute lg:top-28 sm:top-20 top-[72px] left-1/2 xl:left-1/3 xl:ml-44 -ml-4">
          <Image
            src="/images/logo.png"
            alt="banner"
            height={100}
            width={100}
            className="h-8 w-8 sm:h-20 sm:w-20 xl:h-30 xl:w-30"
            unoptimized
            placeholder="empty"
            quality={100}
          />
          <h1 className="font-bold sm:text-2xl md:text-4xl -mt-2 sm:-mt-3 sm:ml-2 md:ml-0">
            Cart
          </h1>
          <div className="flex md:mt-2 -ml-6 sm:-ml-4 -mt-1">
            <Link href="/">
              <p className="font-semibold sm:ml-2">Home</p>
            </Link>
            <IoIosArrowForward className="mt-1 font-semibold" />
            <p className="sm:ml-2">cart</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 p-4">
        {/* Cart Items Section */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <h2 className="text-lg font-semibold mb-4">Your Shopping Cart</h2>
          <div>
            {cartItems.length === 0 ? (
              <p className="text-center py-6">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 py-4"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={urlFor(item.productImage).url()}
                      alt={item.title}
                      height={80}
                      width={80}
                      className="rounded-lg shadow-sm"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-700">{item.title}</h3>
                      <p className="text-gray-500">Price: ${item.price.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end sm:items-center sm:flex-row gap-4 mt-4 sm:mt-0">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decrementQuantity(item._id)}
                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => incrementQuantity(item._id)}
                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-gray-700 font-medium">
                      Subtotal: ${(item.price * item.quantity).toLocaleString()}
                    </p>
                    <FaTrashAlt
                      className="text-red-600 cursor-pointer hover:text-red-800"
                      onClick={() => removeFromCart(item._id)}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-4 sm:p-6">
          <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="font-medium">Subtotal</span>
            <span className="text-gray-700">
              ${calculateTotal().toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium">Total</span>
            <span className="text-green-600 font-semibold">
              ${calculateTotal().toLocaleString()}
            </span>
          </div>
          <Link href="/checkout">
            <button className="mt-6 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
      <Benefits />
    </>
  );
};

export default CartPage;
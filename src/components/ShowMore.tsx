"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import CartButton from "@/components/CartButton";
import WishButton from "@/components/WishButton";



interface Product {
  _id:string,
  productImage: string;
  title: string;
  price: number;
  image:string,
  description:string,
  discountPercentage:number,
  quantity:number,
  slug:string
}

interface ShowMoreProps {
  products: Product[];
}

const ShowMore: React.FC<ShowMoreProps> = ({ products }) => {
  
  const [showMore, setShowMore] = useState(false); // Controls whether to show extra products

  const handleShowMore = () => {
    setShowMore(!showMore); // Toggle the showMore state
  };

  return (
    <div>
      {/* Products Grid */}
      {showMore && (
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mt-20 mb-10 mx-6">
          {products.map((product: Product, index) => (
            <div key={index} className="group relative bg-slate-100 p-4 text-center">

<Link href={`/products/${product.slug}`}>
              <div className="relative">
                <Image 
                  src={urlFor(product.productImage).url()} 
                  alt="product-img" 
                  height={400} 
                  width={400} 
                  className="h-60 mx-auto"
                />
                {product.discountPercentage ?(
                  <div className="absolute top-2 right-2 bg-green-700 text-white rounded-full text-sm h-8 w-8 flex items-center justify-center shadow-lg">
                    {product.discountPercentage}%
                  </div>
                ): null}
              </div>
              <p className="mt-4 font-semibold">{product.title}</p>
              <p className="text-gray-400 line-clamp-2">{product.description}</p>
              <div className="flex justify-center gap-2 mt-2">
                <p className="font-semibold">${product.price}</p>
              </div>
              <div className="absolute group-hover:opacity-70 object-cover inset-0 opacity-0 bg-black h-60 w-72 mx-auto transform translate-y-5xl group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-10 text-center mt-4">
              <CartButton product={product} />
                <div className="flex p-6 gap-4 justify-center text-xl">
                  <button className="text-white hover:scale-125">
                    +checkout
                  </button>
                  <WishButton product={product}/>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Show More Button */}
      {!showMore && (
        <div className="text-center mt-20 mb-20">
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

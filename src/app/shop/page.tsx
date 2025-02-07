// import React from "react";
// import Image from "next/image";
// import Benefits from "@/components/Benefits";
// import { IoIosArrowForward } from "react-icons/io";
// import Link from "next/link";
// import {client} from '@/sanity/lib/client'
// import Activebutton from '@/components/Activebutton'



// interface Product{
//   _id:string,
//   title:string,
//   price:number,
//   productImage:string,
//   description:string,
//   discountPercentage:number,
//   quantity:number,
//   slug:string
//  }

// async function page() {

//   const query = `*[_type == 'product']{
//     _id,
//     title,
//     price,
//     productImage,
//     description,
//   discountPercentage
//   }`
  
//   const product:Product[] = await client.fetch(query)
  

//   return (
//     <>
//       <div>
//         <Image
//           src="/images/Rectangle 1.png"
//           alt="banner"
//           height={100}
//           width={100}
//           className="relative w-screen mb-20"
//           unoptimized
//           placeholder="empty"
//           quality={100}
//         ></Image>

//         <div className="absolute lg:top-28 sm:top-20 top-[72px] left-1/2 xl:left-1/3 xl:ml-44 -ml-4">
//           <Image
//             src="/images/logo.png"
//             alt="banner"
//             height={100}
//             width={100}
//             className="h-8 w-8 sm:h-20 sm:w-20 xl:h-30 xl:w-30"
//             unoptimized
//             placeholder="empty"
//             quality={100}
//           ></Image>
//           <h1 className="font-bold sm:text-2xl md:text-4xl -mt-2 sm:-mt-3 sm:ml-2 md:ml-0">
//             Shop
//           </h1>
//           <div className="flex md:mt-2 md:-ml-4 -ml-6 -mt-1">
//             <Link href="/">
//               <p className="font-semibold sm:ml-2">Home</p>
//             </Link>
//             <IoIosArrowForward className="mt-1 font-semibold" />
//             <p className="sm:ml-2">shop</p>
//           </div>
//         </div>
//       </div>

// <Activebutton product={product}/>

//       <Benefits />
//     </>
//   );
// }

// export default page

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { client } from "@/sanity/lib/client";
import Activebutton from "@/components/Activebutton";
import Benefits from "@/components/Benefits";
import { useSearchParams } from "next/navigation"; // Import useSearchParams

interface Product {
  _id: string;
  title: string;
  price: number;
  productImage: string;
  description: string;
  discountPercentage: number;
  category: string;
  quantity: number;
  slug: string;
}

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [defaultProducts, setDefaultProducts] = useState<Product[]>([]);
  const searchParams = useSearchParams(); // Get query from URL

  // Fetch products initially
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == 'product']{
        _id,
        title,
        price,
        productImage,
        description,
        discountPercentage,
        category,
        "slug": slug.current
      }`;

      const result: Product[] = await client.fetch(query);
      setDefaultProducts(result);
      setProducts(result); // Initially show all products
    };

    fetchProducts();
  }, []);

  // Filter products based on search query
  useEffect(() => {
    const query = searchParams.get("query")?.toLowerCase(); // Get query from URL
    if (query) {
      const filteredProducts = defaultProducts.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
      setProducts(filteredProducts); // Update displayed products
    } else {
      setProducts(defaultProducts); // Show all if no query
    }
  }, [searchParams, defaultProducts]);

  return (
    <div>
      <div>
        {/* Banner Section */}
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
            Shop
          </h1>
          <div className="flex md:mt-2 md:-ml-4 -ml-6 -mt-1">
            <Link href="/">
              <p className="font-semibold sm:ml-2">Home</p>
            </Link>
            <IoIosArrowForward className="mt-1 font-semibold" />
            <p className="sm:ml-2">Shop</p>
          </div>
        </div>
      </div>

      {/* Activebutton Component to display products */}
      <Activebutton product={products} />

      {/* Benefits Section */}
      <Benefits />
    </div>
  );
};

export default ShopPage;

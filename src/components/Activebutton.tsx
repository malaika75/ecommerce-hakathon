// "use client";
// import { useState } from "react";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import Link from "next/link";
// import CartButton from "@/components/CartButton";
// import WishButton from "@/components/WishButton";
// import { LiaSlidersHSolid } from "react-icons/lia";
// import { BsFillGridFill } from "react-icons/bs";
// import { LuGalleryVertical } from "react-icons/lu";

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   productImage: string;
//   description: string;
//   discountPercentage: number;
//   quantity: number;
//   slug: string;
// }

// const ShopPage = ({ product }: { product: Product[] }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage, setProductsPerPage] = useState(8);
//   const [sortBy, setSortBy] = useState<string>("default");
//   const [filterPrice, setFilterPrice] = useState<number | null>(null);
//   const [filterDiscount, setFilterDiscount] = useState<number | null>(null);
//   const [viewStyle, setViewStyle] = useState<"grid" | "list">("grid");

//   let filteredProducts = product.filter((p) => {
//     if (filterPrice && p.price > filterPrice) return false;
//     if (filterDiscount && p.discountPercentage < filterDiscount) return false;
//     return true;
//   });

//   if (sortBy === "price") {
//     filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);  // low to high
//   } else if (sortBy === "discount") {
//     filteredProducts = filteredProducts.sort(
//       (a, b) => b.discountPercentage - a.discountPercentage
//     );
//   }

//   // Pagination calculation
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
//   const indexOfFirstProduct = (currentPage - 1) * productsPerPage;
//   const indexOfLastProduct = indexOfFirstProduct + productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//   const handlePageClick = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       <div className="bg-amber-100 grid md:grid-cols-2 grid-cols-1">
//         <div className="flex sm:p-12 p-4">
//           <LiaSlidersHSolid className="md:text-2xl sm:ml-20 mt-2 sm:text-xl" />
//           <p className="md:text-2xl text-xl ml-2">Filter</p>
//           <BsFillGridFill className="md:text-2x sm:ml-14 ml-4 mt-2 sm:text-xl " />
//           <LuGalleryVertical className="md:text-2xl ml-4 mt-2 sm:text-xl" />
//           <div className="md:p-1">
//             <h1 className="border-l border-black p-2 font-semibold">
//               Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} results
//             </h1>
//           </div>
//         </div>

//         <div className="flex gap-6 md:p-12 ml-10 lg:ml-20 mb-4">
//           <h1 className="sm:font-semibold mt-2">Show</h1>
//           <select
//             value={productsPerPage}
//             onChange={(e) => setProductsPerPage(Number(e.target.value))}
//             className="bg-white w-20 p-2 h-10"
//           >
//             <option value={8}>8</option>
//             <option value={16}>16</option>
//             <option value={24}>24</option>
//           </select>

//           <h1 className="sm:font-semibold mt-2">Sort by</h1>
//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="bg-white w-20 text-center p-2 h-10"
//           >
//             <option value="default">Default</option>
//             <option value="price">Price</option>
//             <option value="discount">Discount</option>
//           </select>
//         </div>
//       </div>

//       <div className={`grid ${viewStyle === "grid" ? "xl:grid-cols-4 md:grid-cols-3 grid-cols-1" : ""} gap-6 mt-20 mb-10 mx-6`}>
//         {currentProducts.map((product: Product, index) => (
//           <div key={index} className="group relative bg-slate-100 p-4 text-center">
//             <Link href={`/products/${product.slug}`}>
//               <div className="relative">
//                 <Image
//                   src={urlFor(product.productImage).url()}
//                   alt="product-img"
//                   height={400}
//                   width={400}
//                   className="h-60 mx-auto"
//                 />
//                 {product.discountPercentage ? (
//                   <div className="absolute top-2 right-2 bg-green-700 text-white rounded-full text-sm h-8 w-8 flex items-center justify-center shadow-lg">
//                     {product.discountPercentage}%
//                   </div>
//                 ) : null}
//               </div>
//               <p className="mt-4 font-semibold">{product.title}</p>
//               <p className="text-gray-400 line-clamp-2">{product.description}</p>
//               <div className="flex justify-center gap-2 mt-2">
//                 <p className="font-semibold">${product.price}</p>
//               </div>
//               <div className="absolute group-hover:opacity-70 object-cover inset-0 opacity-0 bg-black h-60 w-72 mx-auto transform translate-y-5xl group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-10 text-center mt-4">

// <CartButton product={product} />

// <div className="flex p-6 gap-4 justify-center text-xl">
//   <Link href='/checkout'>
//       <button className="text-white hover:scale-125">+checkout</button>
//       </Link>
// <WishButton product={product}/>
//       </div>
// </div>
// </Link>
//     </div>
//         ))}
//       </div>

//       {/* Pagination Buttons */}
//       <div className="mt-28 flex justify-center gap-10 items-center">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <p
//             key={index}
//             onClick={() => handlePageClick(index + 1)}
//             className={`${
//               currentPage === index + 1 ? "bg-yellow-600" : "bg-amber-100"
//             } hover:bg-yellow-600 h-10 w-10 p-3 rounded cursor-pointer`}
//           >
//             {index + 1}
//           </p>
//         ))}
//         <button
//           onClick={() => currentPage < totalPages && handlePageClick(currentPage + 1)}
//           className="hover:bg-yellow-600 bg-amber-100 h-10 w-16 p-3 rounded"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ShopPage;


"use client";
import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import CartButton from "@/components/CartButton";
import WishButton from "@/components/WishButton";
import { LiaSlidersHSolid } from "react-icons/lia";
import { BsFillGridFill } from "react-icons/bs";
import { LuGalleryVertical } from "react-icons/lu";

interface Product {
  _id: string;
  title: string;
  price: number;
  productImage: string;
  description: string;
  discountPercentage: number;
  quantity: number;
  slug: string;
}

const ShopPage = ({ product }: { product: Product[] }) => {
  // State variables
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [sortBy, setSortBy] = useState<string>("default");
  const [filterPrice, setFilterPrice] = useState<number | null>(null);
  const [filterDiscount, setFilterDiscount] = useState<number | null>(null);
  const [viewStyle, setViewStyle] = useState<"grid" | "list">("grid");

  // Filtering products based on price and discount
  let filteredProducts = product.filter((p) => {
    if (filterPrice && p.price > filterPrice) return false;
    if (filterDiscount && p.discountPercentage < filterDiscount) return false;
    return true;
  });

  // Sorting products
  if (sortBy === "price") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price); // low to high
  } else if (sortBy === "discount") {
    filteredProducts = filteredProducts.sort(
      (a, b) => b.discountPercentage - a.discountPercentage
    );
  }

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfFirstProduct = (currentPage - 1) * productsPerPage;
  const indexOfLastProduct = indexOfFirstProduct + productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Top Section */}
      <div className="bg-amber-100 grid md:grid-cols-2 grid-cols-1">
        {/* Left: Filter Icons, Text & Filter Dropdowns */}
        <div className="flex flex-col sm:p-12 p-4">
          <div className="flex items-center">
            <LiaSlidersHSolid className="md:text-2xl sm:ml-20 mt-2 sm:text-xl" />
            <p className="md:text-2xl text-xl ml-2">Filter</p>
            {/* <BsFillGridFill className="md:text-2xl sm:ml-14 ml-4 mt-2 sm:text-xl" />
            <LuGalleryVertical className="md:text-2xl ml-4 mt-2 sm:text-xl" /> */}
            
          <div className="flex gap-2">
            <button
              onClick={() => setViewStyle("grid")}
              className={`p-2 ${viewStyle === "grid" ? "hover:bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              <BsFillGridFill />
            </button>
            <button
              onClick={() => setViewStyle("list")}
              className={`p-2 ${viewStyle === "list" ? "hover:bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              <LuGalleryVertical />
            </button>
          </div>
          </div>
          <div className="flex gap-4 mt-4 ml-20">
            <div>
              <label className="font-semibold text-sm">Max Price:</label>
              <select
                value={filterPrice || ""}
                onChange={(e) => {
                  setFilterPrice(e.target.value ? Number(e.target.value) : null);
                  setCurrentPage(1);
                }}
                className="border p-1 text-sm"
              >
                <option value="">No Limit</option>
                <option value="100">$100</option>
                <option value="150">$150</option>
                <option value="200">$200</option>
                <option value="500">$500</option>
              </select>
            </div>
            <div>
              <label className="font-semibold text-sm">Min Discount %:</label>
              <select
                value={filterDiscount || ""}
                onChange={(e) => {
                  setFilterDiscount(e.target.value ? Number(e.target.value) : null);
                  setCurrentPage(1);
                }}
                className="border p-1 text-sm"
              >
                <option value="">No Minimum</option>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="30">30%</option>
                <option value="50">50%</option>
              </select>
            </div>
          </div>
          <div className="md:p-1 mt-4">
            <h1 className="border-l border-black p-2 font-semibold">
              Showing {indexOfFirstProduct + 1}-
              {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} results
            </h1>
          </div>
        </div>

        {/* Right: Show, Sort & View Toggle */}
        <div className="flex gap-6 md:p-12 ml-10 lg:ml-20 mb-4 items-center">
          <h1 className="sm:font-semibold mt-2">Show</h1>
          <select
            value={productsPerPage}
            onChange={(e) => {
              setProductsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="bg-white w-20 p-2 h-10"
          >
            <option value={8}>8</option>
            <option value={16}>16</option>
            <option value={24}>24</option>
          </select>

          <h1 className="sm:font-semibold mt-2">Sort by</h1>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white w-20 text-center p-2 h-10"
          >
            <option value="default">Default</option>
            <option value="price">Price</option>
            <option value="discount">Discount</option>
          </select>

          {/* View Style Toggle */}
          {/* <div className="flex gap-2">
            <button
              onClick={() => setViewStyle("grid")}
              className={`p-2 ${viewStyle === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              <BsFillGridFill />
            </button>
            <button
              onClick={() => setViewStyle("list")}
              className={`p-2 ${viewStyle === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              <LuGalleryVertical />
            </button>
          </div> */}
        </div>
      </div>

      {/* Products Section */}
      {viewStyle === "grid" ? (
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mt-20 mb-10 mx-6">
          {currentProducts.map((product: Product, index) => (
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
                  {product.discountPercentage ? (
                    <div className="absolute top-2 right-2 bg-green-700 text-white rounded-full text-sm h-8 w-8 flex items-center justify-center shadow-lg">
                      {product.discountPercentage}%
                    </div>
                  ) : null}
                </div>
                <p className="mt-4 font-semibold">{product.title}</p>
                <p className="text-gray-400 line-clamp-2">{product.description}</p>
                <div className="flex justify-center gap-2 mt-2">
                  <p className="font-semibold">${product.price}</p>
                </div>
              </Link>
              {/* Hover Overlay */}
              <div className="absolute group-hover:opacity-70 inset-0 opacity-0 bg-black h-60 w-72 mx-auto transform translate-y-5xl group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-10 text-center mt-4">
                <CartButton product={product} />
                <div className="flex p-6 gap-4 justify-center text-xl">
                  <Link href="/checkout">
                    <button className="text-white hover:scale-125">+checkout</button>
                  </Link>
                  <WishButton product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // List View: Preserve original feel (one product per row)
        <div className="flex flex-col gap-6 mt-20 mb-10 mx-6">
          {currentProducts.map((product: Product, index) => (
            <div key={index} className="flex bg-slate-100 p-4">
              <div className="relative w-1/3">
                <Image
                  src={urlFor(product.productImage).url()}
                  alt="product-img"
                  height={200}
                  width={200}
                  className="object-cover"
                />
                {product.discountPercentage ? (
                  <div className="absolute top-2 right-2 bg-green-700 text-white rounded-full text-sm h-8 w-8 flex items-center justify-center shadow-lg">
                    {product.discountPercentage}%
                  </div>
                ) : null}
              </div>
              <div className="w-2/3 p-4">
                <Link href={`/products/${product.slug}`}>
                  <p className="font-semibold text-xl">{product.title}</p>
                </Link>
                <p className="text-gray-400 mt-2">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold text-lg">${product.price}</p>
                  <div className="flex gap-4">
                    <CartButton product={product} />
                    <Link href="/checkout">
                      <button className="text-white bg-blue-500 px-4 py-2 rounded hover:scale-105">
                        +checkout
                      </button>
                    </Link>
                    <WishButton product={product} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-28 flex justify-center gap-10 items-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <p
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`${
                currentPage === index + 1 ? "bg-yellow-600" : "bg-amber-100"
              } hover:bg-yellow-600 h-10 w-10 p-3 rounded cursor-pointer`}
            >
              {index + 1}
            </p>
          ))}
          <button
            onClick={() => currentPage < totalPages && handlePageClick(currentPage + 1)}
            className="hover:bg-yellow-600 bg-amber-100 h-10 w-16 p-3 rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopPage;

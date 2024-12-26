import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import ShowMore from "@/components/ShowMore";

export default function Home() {
  return (
    <>
    <div className="">
      <Image src="/images/landing-img.jpeg" alt="home-img" height={100} width={100} unoptimized placeholder="empty" quality={100} className="relative w-screen h-[716px] object-fit"></Image>
      <div className="absolute sm:top-60 md:top-80 top-52 -left-72 sm:left-30 md:left-40 xl:left-80">
        <div className="ml-80 bg-color w10/12 sm:w-5/12 w-72 bg-amber-100 p-6">
        <p className="font-semibold">New Arrivals</p>
        <h1 className="text-2xl w-6/12 text-yellow-700 font-bold ">Discover Our New Collection</h1>
        <p className="w-9/12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nihil dolorum itaque dolor. Incidunt, similique veritatis non quos ratione assumenda.</p>
        <Link href='/product-details'>
        <button className="p-4 bg-yellow-700 text-white px-8 cursor-pointer mt-2">Buy Now</button>
        </Link>
        </div>
      </div>
    </div>

  <div className="text-center mt-20">
  <p className="font-bold">Browse The Range</p>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
</div>

<div className="mt-10 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  mx-6">
  {[
    { src: '/images/product-1.png', label: 'Dinning' },
    { src: '/images/product-2.png', label: 'Living' },
    { src: '/images/product-3.png', label: 'Bedroom' },
  ].map((item, index) => (
    <div key={index} className="text-center">
      <Image src={item.src} alt={`${item.label}-img`} height={400} width={400}></Image>
      <p className="mt-4 font-semibold">{item.label}</p>
    </div>
  ))}
</div>

<div className="text-center text-2xl font-bold mt-20">Our Product</div>

<div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mt-20 mb-10 mx-6">
  {[
    { src: '/images/product-4.png', label: 'Syltherine', desc: 'style cafe chair', price: 'Rp 2500,000', oldPrice: 'Rp 3500,000' },
    { src: '/images/product-5.png', label: 'Leviosa', desc: 'style cafe chair', price: 'Rp 2500,000', oldPrice: 'Rp 3500,000' },
    { src: '/images/product-6.png', label: 'Lolito', desc: 'luxury sofa set', price: 'Rp 700,000', oldPrice: 'Rp 1400,000' },
    { src: '/images/product-7.jpeg', label: 'Respira', desc: 'Outdoor bar table and stool', price: 'Rp 500,000' },
    { src: '/images/product-8.png', label: 'Grifo', desc: 'night lamp', price: 'Rp 1,500,000' },
    { src: '/images/product-9.png', label: 'Muggo', desc: 'small mug', price: 'Rp 150,000' },
    { src: '/images/product-10.jpeg', label: 'Pingky', desc: 'cute bed set', price: 'Rp 700,000', oldPrice: 'Rp 14,000,000' },
    { src: '/images/product-11.jpeg', label: 'Potty', desc: 'minimalist flower pot', price: 'Rp 5000,000' },
  ].map((item, index) => (
    <div key={index} className="group relative bg-slate-100 p-4 text-center">
      <Image src={item.src} alt="product-img" height={400} width={400} className="h-60 mx-auto"></Image>
      <p className="mt-4 font-semibold">{item.label}</p>
      <p className="text-gray-400">{item.desc}</p>
      <div className="flex justify-center gap-2 mt-2">
        <p className="font-semibold">{item.price}</p>
        {item.oldPrice && <p className="text-gray-400 line-through">{item.oldPrice}</p>}
      </div>

      <div className="absolute group-hover:opacity-60 object-cover inset-0 opacity-0 bg-black h-60 w-72 mx-auto transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-10 text-center mt-4">
      <div className='bg-white text-yellow-700 border-2 w-40 mt-14 p-4 text-center font-semibold ml-14 cursor-pointer'>
       Add to cart
      </div>
<div className="flex p-6 gap-4 justify-center text-xl">
      <button className="text-white hover:scale-125">+checkout</button>
      <FaRegHeart className="text-white cursor-pointer hover:text-red-500 hover:scale-100"/>
      </div>
</div>
    </div>
  ))}
</div>

<ShowMore/>

<div className="h-[500px] bg-amber-50 mt-10 flex">
  <div className="md:p-20 p-4">
    <h1 className="md:text-5xl text-2xl font-bold">50+ Beautyful rooms</h1>
    <span className="md:text-5xl text-2xl font-bold">inspiration</span>
<p className="w-8/12 mt-2">Our designers already made alot of beautyfull prototipe of rooms that inspire you</p>
    <button className="px-6 py-4 bg-yellow-600 text-white mt-6">Explore more</button>
    </div>
    
    <div>
      <Image src='/images/product-12.png' alt="interior" className="mt-6 lg:-ml-8" height={200} width={400}></Image>
    </div>

    <div>
      <Image src='/images/product-13.png' alt="interior" className="mt-10 -ml-4 ml3" height={200} width={300}></Image>
    </div>
    
  </div>


<div className="mt-28 text-center">
<p>Share your setup with</p>
<p className="text-2xl font-bold">#FurniroFurniture</p>
</div>

<div className="mt-14 flex mx-4">
<div>
<Image src='/images/product-14.png' alt='product' className='w-20 xl:w-40 xl:h-60 h-40' height={400} width={100}></Image>
</div>

<div>
<Image src='/images/product-16.png' alt='product' className='ml-2 sm:mt-4 h-40 w-40 sm:w-80 mt-7' height={100} width={200}></Image>
</div>

<div>
<Image src='/images/product-17.png' alt='product' className='mx-4 h-50 sm:h-40 xl:h-80 w40 sm:w-60 xl:mx-6' height={100} width={100}></Image>
</div>

<div>
<Image src='/images/product-18.png' alt='product' className='hidden sm:flex sm:mt-10 xl:ml10 h-40 xl:h-40 mb-8 xl:w-80 xl:mx-4' height={100} width={200}></Image>
</div>

<div>
<Image src='/images/product-19.png' alt='product' className='hidden lg:flex mt-5 w-20 lg:w-40 xl:w-60 h-50 xl:h-80 ml-4' height={100} width={200}></Image>
</div>
</div>

<div className="flex px-6 mb-20">
<div>
<Image src='/images/product-20.png' alt='product' className='w-40' height={100} width={200}></Image>
</div>

<div>
<Image src='/images/product-21.png' alt='product' className='mt-2 ml-2' height={100} width={400}></Image>
</div>

<div>
<Image src='/images/product-22.png' alt='product' className='sm:mt-8 ml-4 h-40 mt-6 w-60' height={100} width={200}></Image>
</div>

<div>
<Image src='/images/product-23.png' alt='product' className='hidden sm:flex sm:ml-6 mt-2 lg:w-40 xl:w-60' height={100} width={100}></Image>
</div>
</div>




</>
)}
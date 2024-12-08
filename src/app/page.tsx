import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="">
      <Image src="/images/landing-img.jpeg" alt="home-img" height={100} width={100} unoptimized placeholder="empty" quality={100} className="relative w-screen h-[716px] object-fit"></Image>
      <div className="absolute top-60 md:top-80 right60 -left-60 sm:left-30 md:left-40 xl:left-80">
        <div className="ml-80 bg-color w10/12 sm:w-5/12 w-72 bg-amber-100 p-6">
        <p className="font-semibold">New Arrivals</p>
        <h1 className="text-2xl w-6/12 text-yellow-700 font-bold ">Discover Our New Collection</h1>
        <p className="w-9/12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nihil dolorum itaque dolor. Incidunt, similique veritatis non quos ratione assumenda.</p>
        <button className="p-4 bg-yellow-700 text-white px-8">Buy Now</button>
        </div>
      </div>
    </div>

    <div className='text-center mt-20'>
      <p className="font-bold">Browse The Range</p>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="mt-10 grid lg:grid-cols-3 grid-cols-2 mx-auto gap-6">
<div className="text-center ml-4">
<Image src='/images/product-1.png' alt='dinning-img' height={600} width={400}></Image>
<p className="mt-4 font-semibold">Dinning</p>
</div>

<div className="text-center">
<Image src='/images/product-2.png' alt='dinning-img' height={400} width={400}></Image>
<p className="mt-4 font-semibold">Living</p>
</div>

<div className="text-center">
<Image src='/images/product-3.png' alt='dinning-img' height={400} width={400}></Image>
<p className="mt-4 font-semibold">Bedroom</p>
</div>
</div>

<div className="text-center text-2xl font-bold mt-20">Our Product</div>

<div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 mt-20 mb-10 h-80">
 
<div className="h-82 w-52 bg-slate-100 md:ml-10 flex flex-col items-center justify-between mt-6">
<Image src="/images/product-4.png" alt="product-img" height={400} width={400} className="h-60"></Image>
  <p className="mt-4 font-semibold">Syltherine</p>
  <p className="text-gray-400">style cafe chair</p>
  <div className="flex gap-2 mb-4">
  <p>Rp 2500,000</p>
  <p className="text-gray-400 font-semibold">Rp 3500,000</p>
  </div>
  </div>

  <div className="h-80 w-52 bg-slate-100 ml-10 flex flex-col items-center justify-between mt-6">
<Image src="/images/product-5.png" alt="product-img" height={400} width={400} className="h-60"></Image>
  <p className="mt-4 font-semibold">Leviosa</p>
  <p className="text-gray-400">style cafe chair</p>
  <div className="flex gap-2 mb-4">
  <p>Rp 2500,000</p>
  <p className="text-gray-400 font-semibold">Rp 3500,000</p>
  </div>
  </div>

  <div className="h-80 w-52 bg-slate-100 md:ml-10 flex flex-col items-center justify-between mt-4">
<Image src="/images/product-6.png" alt="product-img" height={400} width={400} className="h-60"></Image>
  <p className="mt-4 font-semibold">Lolito</p>
  <p className="text-gray-400">luxurey sofa set</p>
  <div className="flex gap-2 mb-4">
  <p>Rp 700,000</p>
  <p className="text-gray-400 font-semibold">Rp 1400,000</p>
  </div>
  </div>

  <div className="h-80 w-52 bg-slate-100 ml-10 flex flex-col items-center justify-between mt-6">
<Image src="/images/product-7.jpeg" alt="product-img" height={400} width={400} className="h-60"></Image>
  <p className="mt-4 font-semibold">Respira</p>
  <p className="text-gray-400">Outdoor bar table and stool</p>
  <div className="flex gap-2 mb-4 font-semibold">
  <p>Rp 500,000</p>
  </div>
  </div>

</div>

<div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3">

<div className="h-80 w-52 bg-slate-100 md:ml-10 flex flex-col items-center justify-between mt-6 lg:mt-12">
<Image src="/images/product-8.png" alt="product-img" height={400} width={400} className="h-60"></Image>
  <p className="mt-4 font-semibold">Grifo</p>
  <p className="text-gray-400">night lamp</p>
  <div className="flex gap-2 mb-4 font-semibold">
  <p>Rp 1,500,000</p>
  </div>
  </div>

  <div className="h-80 w-52 bg-slate-100 ml-10 flex flex-col items-center justify-between mt-6 lg:mt-12">
<Image src="/images/product-9.png" alt="product-img" height={400} width={400} className="h-60"></Image>
  <p className="mt-4 font-semibold">Muggo</p>
  <p className="text-gray-400">small mug</p>
  <div className="flex gap-2 mb-4 font-semibold">
  <p>Rp 150,000</p>
  </div>
  </div>

  <div className="h-80 w-52 bg-slate-100 md:ml-10 flex flex-col items-center justify-between mt-10">
<Image src="/images/product-10.jpeg" alt="product-img" height={400} width={400} className="h-60"></Image>
  <p className="mt-4 font-semibold">Pingky</p>
  <p className="text-gray-400">cute bed set</p>
  <div className="flex gap-2 mb-4">
  <p className="font-semibold">Rp 700,000</p>
  <p className="text-gray-400">Rp 14,000,000</p>
  </div>
  </div>

  <div className="h-80 w-52 bg-slate-100 ml-10 flex flex-col items-center justify-between mt-10">
<Image src="/images/product-11.jpeg" alt="product-img" height={400} width={400} className="h-60"></Image>
  <p className="mt-4  font-semibold">Potty</p>
  <p className="text-gray-400">minimalist flower pot</p>
  <div className="flex gap-2 mb-4">
  <p className="font-semibold">Rp 5000,000</p>
  </div>
  </div>
</div>

<div className="text-center mt-20">
<button className="border-2 border-yellow-600 px-20 p-3 text-yellow-600">Show More</button>
</div>

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
      <Image src='/images/product-13.png' alt="interior" className="mt-6" height={200} width={300}></Image>
    </div>
    
  </div>


  <div className="mt-28 text-center">
    <p>Share your setup with</p>
    <p className="text-2xl font-bold">#FuniroFurniture</p>
  </div>

  <div className="mt-14 flex">
    <div>
    <Image src='/images/product-14.png' alt='product' className='w-20 h-80' height={400} width={400}></Image>
</div>

<div>
    <Image src='/images/product-16.png' alt='product' className='ml-4 sm:mt-4 h-40 w-80 mt-7' height={100} width={300}></Image>
</div>

<div>
    <Image src='/images/product-17.png' alt='product' className='mt-20 ml-7 h-60 w-60' height={100} width={100}></Image>
</div>

<div>
    <Image src='/images/product-18.png' alt='product' className='ml-4 sm:mt-10 w-80' height={100} width={400}></Image>
</div>

<div>
<Image src='/images/product-19.png' alt='product' className='sm:mt-5 ml-8 h-60' height={100} width={200}></Image>
</div>
</div>

<div className="flex">
<div>
    <Image src='/images/product-20.png' alt='product' className='' height={100} width={200}></Image>
</div>

<div>
    <Image src='/images/product-21.png' alt='product' className='mt-4 ml-4' height={100} width={400}></Image>
</div>

<div>
    <Image src='/images/product-22.png' alt='product' className='sm:mt-8 ml-6 h-60 mt-10' height={100} width={200}></Image>
</div>

<div>
    <Image src='/images/product-23.png' alt='product' className='ml-6' height={100} width={300}></Image>
</div>
</div>

  
</>
)}
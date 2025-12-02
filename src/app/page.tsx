import Image from "next/image";
import Link from "next/link";
import ShowMore from "@/components/ShowMore";
import {client} from '@/sanity/lib/client'
import {urlFor} from '@/sanity/lib/image'
import CartButton from "@/components/CartButton";
import WishButton from "@/components/WishButton";


interface Product{
  _id:string,
  title:string,
  price:number,
  productImage:string,
  description:string,
  discountPercentage:number,
  slug:string,
  quantity:number
 } 

export default async function Home() {
    
  const query = `*[_type == 'product'][0..7]{
  _id,
  title,
  price,
  productImage,
  description,
  discountPercentage,
  "slug": slug.current
}`

const product:Product[] = await client.fetch(query)

const showmoreQuery = `*[_type == 'product'][9..16]{
  _id,
  title,
  price,
  productImage,
  description,
  discountPercentage,
  "slug": slug.current

}`;

const products = await client.fetch(showmoreQuery);

  return (
    <>
    <div className="">
      <Image src="/images/landing-img.jpeg" alt="home-img" height={100} width={100} unoptimized placeholder="empty" quality={100} className="relative w-screen h-[716px] object-fit"></Image>
      <div className="absolute sm:top-60 md:top-80 top-52 -left-72 sm:left-30 md:left-40 xl:left-80">
        <div className="ml-80 bg-color w10/12 sm:w-5/12 w-72 bg-amber-100 p-6">
        <p className="font-semibold">New Arrivals</p>
        <h1 className="text-2xl w-6/12 text-yellow-700 font-bold ">Discover Our New Collection</h1>
        <p className="w-9/12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nihil dolorum itaque dolor. Incidunt, similique veritatis non quos ratione assumenda.</p>
        <Link href='/shop'>
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
  {product.map((product: Product, index) => (
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
        ):null}
      </div>
      <p className="mt-4 font-semibold">{product.title}</p>
      <p className="text-gray-400 line-clamp-2">{product.description}</p>
      <div className="flex justify-center gap-2 mt-2">
        <p className="font-semibold">${product.price}</p>
      </div>
      
<div className="absolute group-hover:opacity-70 object-cover inset-0 opacity-0 bg-black h-60 w-72 mx-auto transform translate-y-5xl group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-10 text-center mt-4">

<CartButton product={product} />

<div className="flex p-6 gap-4 justify-center text-xl">
  <Link href='/checkout'>
      <button className="text-white hover:scale-125">+checkout</button>
      </Link>
<WishButton product={product}/>
      </div>
</div>
</Link>
    </div>
  ))}
</div>

<ShowMore products={products}/>

<div className="h-[600px] bg-amber-50 mt-10 flex">
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


<div className="mt-28 text-center mb-10">
<p>Share your setup with</p>
<p className="text-2xl font-bold">#FurniroFurniture</p>
</div>
</>
)}
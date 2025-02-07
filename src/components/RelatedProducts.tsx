import React from 'react'
import Image from 'next/image';
import ShowMore from '@/components/ShowMore';
import Link from 'next/link';
import {client} from '@/sanity/lib/client'
import {urlFor} from '@/sanity/lib/image'
import CartButton from '@/components/CartButton'
import WishButton from '@/components/WishButton'

interface Product{
    _id:string,
    title:string,
    price:number,
    productImage:string,
    description:string,
    discountPercentage:number,
    quantity:number,
    slug:string
   }

   async function RelatedProducts() {
const query = `*[_type == 'product'][9..16]{
  _id,
    title,
    price,
    productImage,
    description,
  discountPercentage
  }`
  
  const product:Product[] = await client.fetch(query)
  
  const showmoreQuery = `*[_type == 'product'][17..24]{
  _id,
    title,
    price,
    productImage,
    description,
  discountPercentage
  }`;
  
  const products = await client.fetch(showmoreQuery);
return(
<>
    <div className='border-t mt-10 '>
  <h1 className='mt-10 text-center font-bold text-2xl mb-6'>Related Products</h1>
</div> 

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
        {product.discountPercentage ?(
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

      <CartButton product={product} />
<div className="flex p-6 gap-4 justify-center text-xl">
  <Link href='/checkout'>
      <button className="text-white hover:scale-125">+checkout</button>
      </Link>
      <WishButton product={product}/>
      </div>
      </Link>
</div>

    ))}
</div>

<ShowMore products={products}/>
</>
  )
}

export default RelatedProducts
    
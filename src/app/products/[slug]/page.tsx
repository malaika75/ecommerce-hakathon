import React from 'react'
import { client } from '@/sanity/lib/client'
import { MdKeyboardArrowRight } from "react-icons/md"
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image' 
import ProductDetails from '@/components/ProductDetails'

interface Product {
  _id:string,
  title: string,
  price: number,
  productImage: string,
  description: string,
  discountPercentage: number,
  tags:string,
  slug:string,
  sku:number,
  category:string,
  color:string,
  quantity:number
}

async function page({ params }: { params: { slug: string } }) {
  const { slug } = params

  console.log("Slug from router.query:", slug)

  const query = `*[_type == 'product' && slug.current == $slug][0]{
    "slug": slug.current,
    title,
    price,
    productImage,
    description,
    discountPercentage,
    tags,
    sku,
    color,
    category
  }`

  const product:Product = await client.fetch(query, { slug })

 if(!product) {
    return <h1>product not found</h1>
 }
 
  return (
    <>
      <div className="flex bg-amber-50 p-10">
        <div className="sm:ml-10 flex p-2">
          <h1 className="mt-1">Home</h1>
          <Link href="/">
            <MdKeyboardArrowRight className="mt-2" />
          </Link>

          <h1 className="ml-6 mt-1">Shop</h1>
          <Link href="/shop">
            <MdKeyboardArrowRight className="mt-2" />
          </Link>
        </div>
        <h1 className="border-l border-black p-2 sm:ml-20 ml-6 font-bold">{product.title}</h1>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-20">
        <div className="flex">
          <div className="xl:ml-28">
            <div className="mt-2">
              <Image
                src={urlFor(product.productImage).url()}
                alt="product"
                height={100}
                width={100}
                className="h-30 w-20 bg-amber-50"
              />
            </div>

            <div className="mt-2">
              <Image
                src={urlFor(product.productImage).url()}
                alt="product"
                height={100}
                width={100}
                className="h-20 w-40 bg-amber-50"
                unoptimized
              />
            </div>

            <div className="mt-2">
              <Image
                src={urlFor(product.productImage).url()}
                alt="product"
                height={100}
                width={200}
                className="h-30 w-20 bg-amber-50"
              />
            </div>

            <div className="mb-20 mt-2">
              <Image
                src={urlFor(product.productImage).url()}
                alt="product"
                height={100}
                width={200}
                className="h-30 w-20 bg-amber-50"
              />
            </div>
          </div>

          <div className="sm:ml-3">
            <Image
              src={urlFor(product.productImage).url()}
              alt="product"
              height={100}
              width={900}
              className="sm:ml-6 bg-amber-50"
            />
          </div>
        </div>

        <div className="lg:ml-32 sm:ml-10 ml-2 mt-4">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="ml-2">${product.price}</p>
          
<ProductDetails product={product}/>
</div>
</div>
      <div className="mt-20 border-t">
        <div className="flex justify-center text-center mt-10 sm:gap-6 gap-2">
          <h1 className="font-semibold ml-6">Description</h1>
          <p className="sm:ml-10 ml-4 text-gray-400">Additional Information</p>
          <p className="text-gray-400 -ml-2">Reviews [5]</p>
        </div>

        <div className="text-center flex flex-col justify-center items-center">
          <p className="mt-10 text-gray-400 w-9/12">
            {product.description}
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-8 mb-20">
          <div className="">
            <Image src={urlFor(product.productImage).url()} alt="product" height={100} width={600} className="bg-amber-50" />
          </div>
          <div className=''>
            <Image src={urlFor(product.productImage).url()} alt="product" height={100} width={600} className="bg-amber-50" />
          </div>
        </div>
      </div>
      
    </>
  )
}

export default page




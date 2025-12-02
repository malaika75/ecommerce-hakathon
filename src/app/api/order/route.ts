// import { NextResponse } from "next/server";
// import {client} from '@/sanity/lib/client'

// export async function POST(req: Request) {
//   const body = await req.json();

//   const newOrder = {
//     _type: "order",
//     orderId: `ORD-${Date.now()}`,
//     customer: body.customer,
//     items: body.items,
//     totalAmount: body.totalAmount,
//     paymentStatus: body.paymentStatus || "pending",
//     deliveryStatus: "pending",
//     createdAt: new Date().toISOString()
//   };

//   const res = await client.create(newOrder);
//   return NextResponse.json(res);
// }

// export async function GET() {
//   const query = `*[_type == "order"] | order(createdAt desc)`;
//   const orders = await client.fetch(query);
//   return NextResponse.json(orders);
// }


import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { nanoid } from "nanoid"; // add this

export async function POST(req: Request) {
  const body = await req.json();

  const newOrder = {
    _type: "order",
    orderId: `ORD-${Date.now()}`,
    customer: body.customer,
    items: body.items.map((item: any) => ({
   _key: nanoid(),
    productName: item.title || item.productName,  // in case frontend sends title instead of productName
    image: item.image || "",                      // image URL
    quantity: item.quantity,
    price: item.price,
})),
    totalAmount: body.totalAmount,
    paymentStatus: body.paymentStatus || "pending",
    deliveryStatus: "pending",
    createdAt: new Date().toISOString(),
  };

  const res = await client.create(newOrder);
  return NextResponse.json(res);
}

export async function GET() {
  const query = `*[_type == "order"] | order(createdAt desc)`;
  const orders = await client.fetch(query);
  return NextResponse.json(orders);
}

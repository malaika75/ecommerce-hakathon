import { NextResponse } from "next/server";
import Stripe from "stripe";
import { client } from "@/sanity/lib/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature")!;
  
  let event;
  try {
    const rawBody = await req.text();
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    return NextResponse.json({ error: "Webhook signature verification failed." }, { status: 400 });
  }

  // 🔍 Payment success event check
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;
    const orderId = session.metadata.order_id;

    // ✅ Sanity me order ka status update karo
    await client
      .patch(orderId) // Sanity document ko update karne ka method
      .set({ status: "Paid" }) // New status set karna
      .commit();

    console.log(`✅ Order ${orderId} marked as Paid in Sanity`);
  }

  return NextResponse.json({ received: true });
}

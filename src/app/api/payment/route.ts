import Stripe from "stripe";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import {client} from '@/sanity/lib/client'


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface CartItem {
  image: string;
  price: number;
  title: string;
  quantity: number;
}

interface BodyType {
  paymentMethod: string;
  cartItems: CartItem[];
  origin: string;
  recipient: {
    name: string;
    street1: string;
    city: string;
    country: string;
    zip: string;
  };
}

export async function POST(req: Request) {
  try {
    const body: BodyType = await req.json();
    const orderId = uuidv4(); // Generate Order ID
    let trackingId = uuidv4(); // Default Tracking ID
    let deliveryCharges = 500; // Default Delivery Charges ($5)

    // 📦 1️⃣ SHIPO API se Tracking ID aur Delivery Charges lein
    try {
      const shippingResponse = await fetch("https://api.goshippo.com/shipments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `ShippoToken ${process.env.SHIPO_API_KEY}`,
        },
        body: JSON.stringify({
          address_from: {
            name: "Your Business",
            street1: "123 Business Street",
            city: "New York",
            country: "US",
            zip: "10001",
          },
          address_to: body.recipient, // 👈 Recipient ka address
          parcels: [
            {
              length: "10",
              width: "10",
              height: "10",
              weight: "1",
            },
          ],
          async: false,
        }),
      });

      if (!shippingResponse.ok) {
        throw new Error("Shipo API failed");
      }

      const shippingData = await shippingResponse.json();
      trackingId = shippingData.tracking_number;
      deliveryCharges = parseFloat(shippingData.rate.amount) * 100; // Convert to cents
    } catch (error) {
      console.log("Shipo API Error:", error);
    }

    // 🏷️ 2️⃣ Cash on Delivery (COD) ya Bank Transfer ke liye
    if (body.paymentMethod === "cod" || body.paymentMethod === "bank_transfer") {
      return NextResponse.json({
        success: true,
        message: `Order placed successfully with ${body.paymentMethod === "cod" ? "Cash on Delivery" : "Bank Transfer"}! Your Order ID: ${orderId}`,
        clearPage: true,
        orderDetails: {
          orderId,
          cartItems: body.cartItems,
          totalAmount:
            body.cartItems.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            ) + deliveryCharges,
          trackingId,
          deliveryCharges,
        },
      });
    }

    // 💳 3️⃣ Stripe Payment Session Create karo
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        ...body.cartItems.map((item: CartItem) => ({
          price_data: {
            currency: "usd",
            product_data: { name: item.title, images: [item.image] },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        })),
        {
          // 📦 Delivery Charges as a separate item
          price_data: {
            currency: "usd",
            product_data: { name: "Delivery Charges" },
            unit_amount: deliveryCharges,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${body.origin}/checkout?success=true&order_id=${orderId}&tracking_id=${trackingId}`,
      cancel_url: `${body.origin}/checkout?canceled=true`,
      metadata: {
        order_id: orderId,
        tracking_id: trackingId,
        shipping_cost: deliveryCharges / 100, // Convert cents to dollars
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}

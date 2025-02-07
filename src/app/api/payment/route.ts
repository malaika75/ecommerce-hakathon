import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid'; // For generating tracking ID

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Delivery charges logic (for now, a fixed amount)
    const deliveryCharges = 500; // Replace with ShipEngine logic later

    if (body.paymentMethod === 'cod') {
      // Generate a fake tracking ID
      const trackingId = uuidv4();
      
      return NextResponse.json({
        success: true,
        message: 'Order placed successfully with Cash on Delivery.',
        clearPage: true, // You might use this to trigger front-end action
        orderDetails: {
          orderId: uuidv4(),
          cartItems: body.cartItems,
          totalAmount: body.cartItems.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0) + deliveryCharges,
          trackingId,
          deliveryCharges,
        },
      });
    }

    // If payment method is Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: body.cartItems.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
            images: [item.image],
          },
          unit_amount: item.price * 100, // Stripe requires the amount in cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${body.origin}/checkout?success=true`,
      cancel_url: `${body.origin}/checkout?canceled=true`,
    });

    // Return the URL for redirecting to Stripe's checkout
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}



import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

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
}

// export async function POST(req: Request) {
//   try {
//     const body: BodyType = await req.json();

//     // Delivery charges logic (for now, a fixed amount)
//     const deliveryCharges = 500; // Replace with ShipEngine logic later

//     if (body.paymentMethod === 'cod') {
//       // Generate a fake tracking ID
//       const trackingId = uuidv4();

//       return NextResponse.json({
//         success: true,
//         message: 'Order placed successfully with Cash on Delivery.',
//         clearPage: true, // You might use this to trigger front-end action
//         orderDetails: {
//           orderId: uuidv4(),
//           cartItems: body.cartItems,
//           totalAmount: body.cartItems.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0) + deliveryCharges,
//           trackingId,
//           deliveryCharges,
//         },
//       });
//     }

//     // If payment method is Stripe
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: body.cartItems.map((item: CartItem) => ({
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: item.title,
//             images: [item.image],
//           },
//           unit_amount: item.price * 100, // Stripe requires the amount in cents
//         },
//         quantity: item.quantity,
//       })),
//       mode: 'payment',
//       success_url: `${body.origin}/checkout?success=true&order_id=${uuidv4()}`,
//       cancel_url: `${body.origin}/checkout?canceled=true`,
//     });

//     // Return the URL for redirecting to Stripe's checkout
//     return NextResponse.json({ url: session.url });
//   } catch (err: unknown) { // Changed from err: any to err: unknown
//     let message: string;

//     if (err instanceof Error) {
//       message = err.message;
//     } else {
//       message = String(err); // Fallback in case it's not an Error object
//     }

//     return NextResponse.json({ error: message }, { status: 500 });
//   }
// }

export async function POST(req: Request) {
  try {
    const body: BodyType = await req.json();
    const orderId = uuidv4(); // Generate Order ID
    const deliveryCharges = 500;

    if (body.paymentMethod === 'cod') {
      const trackingId = uuidv4();

      return NextResponse.json({
        success: true,
        message: `Order placed successfully with Cash on Delivery! Your Order ID: ${orderId}`,
        clearPage: true,
        orderDetails: {
          orderId,
          cartItems: body.cartItems,
          totalAmount: body.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + deliveryCharges,
          trackingId,
          deliveryCharges,
        },
      });
    }

    // Stripe Payment
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: body.cartItems.map((item: CartItem) => ({
        price_data: {
          currency: 'usd',
          product_data: { name: item.title, images: [item.image] },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      // success_url: `${body.origin}/checkout?success=true&order_id=${orderId}&message=Order+Placed+Successfully!+Your+Order+ID:+${orderId}`,
      success_url: `${body.origin}/checkout?success=true&order_id=12345`,
      cancel_url: `${body.origin}/checkout?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : String(err) }, { status: 500 });
  }
}

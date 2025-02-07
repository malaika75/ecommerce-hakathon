"use client";
import React, { useState , useEffect } from "react";
import { useCart } from "@/app/context/CartContext";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Benefits from "@/components/Benefits";
import { urlFor } from "@/sanity/lib/image";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);


const CheckoutPage: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const { user } = useUser();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false); // for success message
const [orderId, setOrderId] = useState<string | null>(null);
  
  const searchParams = useSearchParams();

  useEffect(() => {
    const success = searchParams.get('success');
    const orderId = searchParams.get('order_id');

    if (success === 'true' && orderId) {
      setOrderSuccess(true);
      setOrderId(orderId);
      clearCart();
    }
  }, [searchParams, clearCart]);


  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleCheckout = async () => {
    if (!cartItems.length) {
      setError("Your cart is empty!");
      return;
    }

    if (!paymentMethod) {
      setError("Please select a payment method!");
      return;
    }

    if (!fullName || !email || !phone || !address || !city || !postalCode || !country) {
      setError("Please fill in all the billing details.");
      return;
    }

    setIsProcessing(true);
    try {
      if (paymentMethod === "bankTransfer") {
        // Handle Bank Transfer
        const stripe = await stripePromise;
        const res = await fetch('/api/payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            cartItems,
            paymentMethod,
            origin: window.location.origin,
          }),
        });
        
        const data = await res.json();
        
        if (data.url) {
          // Redirect to Stripe Checkout if URL is returned
          window.location.href = data.url;
        } else if (data.success) {
          // Handle Cash on Delivery success
          setOrderSuccess(true);
        clearCart();  // Cart clear kar dena
        }
        
      } else if (paymentMethod === "cod") {
        // Handle COD (Cash on Delivery)
        const orderDetails = {
          cartItems,
          fullName,
          email,
          phone,
          address,
          city,
          postalCode,
          country,
          paymentMethod,
        };

        // Show success message and order details
        console.log("Order Details for COD: ", orderDetails);
        setOrderSuccess(true);
        clearCart(); 
      }
    } catch (err) {
      setError("An error occurred during checkout.");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <div>
        <Image
          src="/images/Rectangle 1.png"
          alt="banner"
          height={200}
          width={100}
          className="relative w-screen mb-20"
          unoptimized
          placeholder="empty"
          quality={100}
        />
        <div className="absolute lg:top-28 sm:top-20 top-[72px] left-1/2 xl:left-1/3 xl:ml-44 -ml-4">
          <Image
            src="/images/logo.png"
            alt="banner"
            height={100}
            width={100}
            className="h-8 w-8 sm:h-20 sm:w-20 xl:h-30 xl:w-30"
            unoptimized
            placeholder="empty"
            quality={100}
          />
          <h1 className="font-bold sm:text-2xl md:text-4xl -ml-5 md:-ml-10 -mt-2 sm:-mt-3">
            Checkout
          </h1>
          <div className="flex md:mt-2 -ml-9 -mt-1">
            <Link href="/">
              <p className="font-semibold sm:ml-2">Home</p>
            </Link>
            <IoIosArrowForward className="mt-1 font-semibold" />
            <p className="sm:ml-2">checkout</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-4 sm:px-10 lg:px-20">
        {/* Billing Details Section */}
        <div>
          <h2 className="text-2xl font-bold">Billing Details</h2>
          <form className="mt-10 space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            {/* Shipping Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-semibold">
                Shipping Address
              </label>
              <input
                id="address"
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your shipping address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-semibold">
                City
              </label>
              <input
                id="city"
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            {/* Postal Code */}
            <div>
              <label htmlFor="postalCode" className="block text-sm font-semibold">
                Postal Code
              </label>
              <input
                id="postalCode"
                type="number"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your postal code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-semibold">
                Country
              </label>
              <input
                id="country"
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>
          </form>
        </div>

        {/* Cart and Payment Section */}
        <div>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Product</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty. Add items to your cart before proceeding.</p>
            ) : (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li key={item._id} className="flex items-center space-x-4 border-b pb-4">
                    <Image
                      src={urlFor(item.productImage).url()}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-600">Quantity: {item.quantity} x {item.price}</p>
                      <p className="text-gray-600">Total: ${item.price * item.quantity}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Subtotal</h2>
            <p>$ {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
          </div>

          {/* Payment Options */}
          {/* <div className="mt-6">
            <h2 className="text-xl font-semibold">Payment Method</h2> */}
            {/* <div>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bankTransfer"
                  onChange={handlePaymentMethodChange}
                  checked={paymentMethod === "bankTransfer"}
                />
                Bank Transfer
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  onChange={handlePaymentMethodChange}
                  checked={paymentMethod === "cod"}
                />
                Cash on Delivery
              </label>
            </div> */}

<div className='border-t mt-10 p-6 w-11/12'>
<p className='font-semibold'> Direct bank transfer</p>
<p className='text-gray-400 mt-4'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

  <div className='text-gray-400 mt-6 space-y-2'>
    <div className='space-x-4 flex'>
      <input type="radio" name="paymentMethod" value="bankTransfer" onChange={handlePaymentMethodChange} checked={paymentMethod === "bankTransfer"}></input>
    <label>Direct bank transfer</label>
  </div>

<div className='gap-4 flex'>
  <input type="radio" name="paymentMethod" value="cod" onChange={handlePaymentMethodChange} checked={paymentMethod === "cod"}></input>
  <label className='block'>cash on delivery</label>
</div>

</div>
  <p className='mt-4 w-11/12'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our<span className='font-semibold'> privacy policy.</span></p>

          </div>

          <div className="mt-6">
            <button
              onClick={handleCheckout}
              className="w-full py-3 bg-blue-500 text-white font-bold rounded-md"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Complete Order"}
            </button>
          </div>

          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>

      {orderSuccess && (
        <div className="fixed top-0 left-0 right-0 bg-green-500 text-white py-4">
          <h2 className="text-center">Your Order is Confirmed!</h2>
          <p className="text-center">Thank you for shopping with us. Your order will be processed shortly.</p>
          {orderId && <p className="text-center">Order ID: {orderId}</p>}
        </div>
      )}

<Benefits/>
    </>
  );
};

export default CheckoutPage;




"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs"; // ✅ Clerk Authentication
import { client } from "@/sanity/lib/client";

interface Order {
  orderId: string;
  trackingId?: string;
  totalAmount: number;
  status: string;
  cartItems: { title: string; quantity: number }[];
}

const OrdersPage = () => {
  const { user } = useUser(); // ✅ Clerk se user ka data lena
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userEmail = user?.primaryEmailAddress?.emailAddress;
    if (!userEmail) return; // ✅ Null check

    const fetchOrders = async () => {
      try {
        const query = `*[_type == "order" && recipient.email == $email] | order(_createdAt desc)`;
        const fetchedOrders = await client.fetch(query, { email: userEmail });
        setOrders(fetchedOrders);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.orderId} className="border p-4 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">Order ID: {order.orderId}</p>
              <p className="font-semibold">Total: ${order.totalAmount}</p>
              <p className={`font-semibold ${order.status === "Pending" ? "text-orange-500" : order.status === "Paid" ? "text-green-500" : "text-blue-500"}`}>
                Status: {order.status}
              </p>
              <ul className="mt-2">
                {order.cartItems.map((item, index) => (
                  <li key={index} className="text-sm">
                    {item.quantity}x {item.title}
                  </li>
                ))}
              </ul>
              {order.trackingId && (
                <a href={`https://tracking-service.com/${order.trackingId}`} target="_blank" className="text-blue-500 underline mt-2 inline-block">
                  Track Order
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;

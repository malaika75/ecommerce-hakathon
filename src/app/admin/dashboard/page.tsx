"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Customer {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

interface Item {
  productName: string;
  quantity: number;
  price: number;
  imageUrl?: string;
}

interface Order {
  orderId: string;
  totalAmount: number;
  paymentStatus: string;
  deliveryStatus: string;
  createdAt: string;
  customer: Customer;
  items: Item[];
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) router.push("/admin/login");
  }, [router]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await fetch("/api/orders");
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <div className="grid gap-6">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="bg-white shadow rounded-lg p-5 border border-gray-200"
            >
              <div className="flex justify-between mb-3">
                <p className="font-semibold">Order ID: {order.orderId}</p>
                <p className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-3">
                <div>
                  <h3 className="font-semibold mb-1">Customer Info</h3>
                  <p>{order.customer.name}</p>
                  <p>{order.customer.email}</p>
                  <p>{order.customer.phone}</p>
                  <p>
                    {order.customer.address}, {order.customer.city},{" "}
                    {order.customer.country} ({order.customer.postalCode})
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">Order Status</h3>
                  <p>Payment: {order.paymentStatus}</p>
                  <p>Delivery: {order.deliveryStatus}</p>
                  <p>Total: ${order.totalAmount.toFixed(2)}</p>
                </div>
              </div>

              <h3 className="font-semibold mb-2">Items:</h3>
              <div className="space-y-2">
                {order.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border-t pt-2"
                  >
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.productName}
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                    <div>
                      <p className="font-medium">{item.productName}</p>
                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity} | Price: ${item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

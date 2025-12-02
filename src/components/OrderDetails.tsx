import { useEffect, useState } from "react";

const OrderSuccess: React.FC = () => {
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    // Retrieve order details from localStorage or sessionStorage
    const order = sessionStorage.getItem("orderDetails");
    if (order) {
      setOrderDetails(JSON.parse(order));
    }
  }, []);

  return (
    <div>
      {orderDetails ? (
        <div>
          <h1>Order Success</h1>
          <p>Thank you for your order, {orderDetails.fullName}!</p>
          <h2>Order Details:</h2>
          <p>Order ID: {orderDetails.orderId}</p>
          <p>Shipping Address: {orderDetails.address}</p>
          <p>Items:</p>
          <ul>
            {orderDetails.cartItems.map((item: any, index: number) => (
              <li key={index}>
                {item.title} - {item.quantity} x ${item.price}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
};

export default OrderSuccess;

// sanity/schemas/order.ts

// sanity/schemas/order.ts

const orders = {
  name: 'order',
  title: 'Orders',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
    },
    {
      name: 'customer',
      title: 'Customer Details',
      type: 'object',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'address', title: 'Address', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'country', title: 'Country', type: 'string' },
        { name: 'postalCode', title: 'Postal Code', type: 'string' },
      ],
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
      fields: [
        { name: 'productName', type: 'string', title: 'Product Name' },
        { name: 'image', type: 'url', title: 'Product Image' },
        { name: 'quantity', type: 'number', title: 'Quantity' },
        { name: 'price', type: 'number', title: 'Price (USD)' },
          ],
        },
      ],
    },
    {
      name: 'totalAmount',
      title: 'Total Amount (USD)',
      type: 'number',
    },
    {
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: ['pending', 'paid', 'failed'],
      },
      initialValue: 'pending',
    },
    {
      name: 'deliveryStatus',
      title: 'Delivery Status',
      type: 'string',
      options: {
        list: ['pending', 'shipped', 'delivered', 'cancelled'],
      },
      initialValue: 'pending',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    },
  ],
}

export default orders

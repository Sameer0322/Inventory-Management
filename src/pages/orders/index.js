import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ordersData from '../../data/data.json'; 

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(ordersData.orders);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Orders</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {orders.map((order) => (
          <li key={order.id} className="p-6 bg-white shadow-lg rounded-lg">
            <Link href={`/orders/${order.id}`}>
              <a className="block mb-2 text-xl font-bold text-blue-500 hover:underline">{order.customer}</a>
            </Link>
            <p className="text-gray-600 mb-4">Status: {order.status}</p>
            <p className="text-gray-600 mb-4">Items: {order.items.length}</p>
            <Link href={`/orders/${order.id}`}>
              <a className="text-blue-500 hover:underline">View Details</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;

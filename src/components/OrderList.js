import React from 'react';
import Link from 'next/link';
import { orders as initialOrders } from '../data/data.json'; 

const OrderList = () => {
  return (
    <div className="bg-gray-500 min-h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold mt-4 mb-4 ">Orders</h1>
        <ul>
          {initialOrders.map((order) => (
            <li key={order.id} className="mb-4">
              <Link href={`/orders/${order.id}`}>
                <a className="text-blue-500 hover:underline">{order.customer}</a>
              </Link>
              <p>Status: {order.status}</p>
              <p>Items: {order.items.length}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderList;

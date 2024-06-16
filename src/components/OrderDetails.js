import React, { useState } from 'react';

const OrderDetails = ({ order }) => {
  const [status, setStatus] = useState(order.status);

  const handleStatusChange = () => {
    const newStatus = status === 'Pending' ? 'Completed' : 'Pending';
    setStatus(newStatus);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500">
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-black">Order Details</h1>
        <p className="text-black"><span className="font-semibold">Customer:</span> {order.customer}</p>
        <p className="text-black"><span className="font-semibold">Status:</span> {status}</p>
        <button
          onClick={handleStatusChange}
          className={`bg-${status === 'Pending' ? 'green' : 'yellow'}-500 text-white px-4 py-2 rounded mt-2`}
        >
          {status === 'Pending' ? 'Mark as Completed' : 'Mark as Pending'}
        </button>
        <h2 className="text-lg font-bold mt-4 mb-2 text-black">Items</h2>
        <ul>
          {order.items.map((item) => (
            <li key={item.id} className="mb-2 text-black">{item.name} - Quantity: {item.quantity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderDetails;

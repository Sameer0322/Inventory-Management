import React, { useState } from 'react';

const Inventory = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', stock: 10 },
    { id: 2, name: 'Item 2', stock: 15 },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemStock, setItemStock] = useState('');
  const [error, setError] = useState('');

  const toggleForm = () => {
    setShowForm(!showForm);
    setItemName('');
    setItemStock('');
    setError('');
  };

  const addItem = () => {
    if (!itemName.trim() || !itemStock.trim()) {
      setError('Please enter both item name and stock.');
      return;
    }

    const newItem = {
      id: items.length + 1,
      name: itemName,
      stock: parseInt(itemStock),
    };
    setItems([...items, newItem]);
    toggleForm();
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="bg-gray-700 min-h-screen">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4 text-white">Inventory Management</h2>
        <ul>
          {items.map((item, index) => (
            <li
              key={item.id}
              className={`flex items-center justify-between mb-2 ${
                index % 2 === 0 ? 'bg-blue-200' : 'bg-blue-400'
              }`}
            >
              <span className="text-white pl-5">{item.name} - Stock: {item.stock}</span>
              <button
                onClick={() => deleteItem(item.id)}
                className="bg-red-500 text-white px-3 py-2 rounded mr-2"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        {!showForm ? (
          <button
            onClick={toggleForm}
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
          >
            Add Item
          </button>
        ) : (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Item Name"
              className="p-2 mr-2"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Stock"
              className="p-2 mr-2"
              value={itemStock}
              onChange={(e) => setItemStock(e.target.value)}
            />
            <button
              onClick={addItem}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              onClick={toggleForm}
              className="bg-red-500 text-white px-4 py-2 ml-2 rounded"
            >
              Cancel
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;

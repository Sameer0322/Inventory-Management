import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <div className="p-4 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Welcome to Inventory Management</h1>
        <p>
          <Link href="/inventory">
            <a className="bg-blue-500 text-white px-4 py-2 rounded ml-10">Manage Inventory</a>
          </Link>
          <Link href="/orders">
            <a className="bg-green-500 text-white px-4 py-2 rounded ml-10">View Orders</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomePage;

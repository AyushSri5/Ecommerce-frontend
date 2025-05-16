// app/products/page.js or pages/products.js (based on your setup)
'use client';

import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState<{ id: string; name: string; description: string; price: number; image_url?: string }[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`https://ecommerce-backend-rxue.onrender.com/products/search?query=${query}`);
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <h1 className="text-3xl font-bold text-center mb-6">My Products</h1>

      <div className="max-w-md mx-auto mb-8 relative">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-3 pl-10 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M15.5 10.5a5 5 0 11-10 0 5 5 0 0110 0z"
          />
        </svg>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
          >
            {product.image_url && (
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-3"
              />
            )}
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="text-blue-600 font-bold mt-2">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

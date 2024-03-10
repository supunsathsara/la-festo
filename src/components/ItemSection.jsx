'use client';

import React, { useState, useEffect } from 'react';

export default function ItemSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product details from the correct API route
    fetch('/api/auth/itemSection', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        // Map the keys from server response to client-side keys
        const formattedProducts = data.map(product => ({
          id: product.PRODUCT_ID,
          name: product.PRODUCT_NAME,
          description: product.PRODUCT_DESCRIPTION,
          price: product.PRODUCT_PRICE,
          image: product.PRODUCT_IMG
        }));
        setProducts(formattedProducts);
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, []);

  return (
    <div className='m-6 mt-32 transition duration-500'>
      <div className="mb-12 space-y-5 md:mb-16 md:text-center">
        <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
          Make Your Choice
        </div>
        <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
          Be Happy Always With Us...😊
        </h1>
        <p className="text-xl text-gray-100 md:text-center md:text-2xl">
          Order and get fast your bottles here!😉
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map(product => (
          <div key={product.id} className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#000315] via-[#001515] to-black rounded-lg shadow-md flex flex-col justify-center items-center">
            <img src={product.image} alt={product.name} className="w-60 object-cover rounded-t-lg" />
            <div className="p-6 text-center">
              <h3 className="text-xl text-green-200 font-semibold mb-2">{product.name}</h3>
              <p className="text-green-400 mb-4">{product.description}</p>
              <p className="text-green-800 font-semibold">${product.price}</p>
              <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

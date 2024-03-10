import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

export default function ProductListing({ products }) {
  return (
    <div>
      <NavBar />
      <div className="container py-12 ">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {products.map(product => (
            <div key={product.id} className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#000315] via-[#001515] to-black rounded-lg shadow-md flex flex-col justify-center items-center">
              <img src={product.image} alt={product.name} className="w-60 object-cover rounded-t-lg" />
              <div className="p-6 text-center">
                <h3 className="text-xl text-green-200 font-semibold mb-2">{product.name}</h3>
                {/* Uncomment the following line if you have description */}
                {/* <p className="text-green-400 mb-4">{product.description}</p> */}
                <p className="text-green-800 font-semibold">${product.price}</p>
                <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

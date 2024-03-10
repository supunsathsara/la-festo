'use client';
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useRouter } from "next/navigation";
export default function ProductListing() {
    const router = useRouter();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch program list
  useEffect(() => {
    fetch('/api/auth/Shop')
      .then((response) => {
        if (!response.ok) {
          throw new Error('failed to fetch programs');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (!data) {
          //toast.error('Check your connection !');
          return;
        }
        // const newProgramList = data.map((Program) => ({
        //   value: Program.web_value,
        //   label: Program.name,
        // }));
        setProducts(data[0]);
        
      });
  }, []);
   

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
            <Footer />
        </div>
    );
}

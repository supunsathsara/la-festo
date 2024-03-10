import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { getServerSession } from 'next-auth';
import Logout from './logout';

export default async function NavBar() {
  const session = await getServerSession();
  return (
    <header className="px-5 py-1 text-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-6">
        {/* Logo */}
        <a href="/" className="text-3xl font-bold">
          <span className="text-green-400">La</span>-<span className="text-green-200">Festo</span>
        </a>

        {/* Search */}
        <div className="relative">
          <input 
            type="text" 
            className="py-2 px-4 bg-gray-800 rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400" 
            placeholder="Search..." 
          />
          <button className="absolute inset-y-0 right-0 flex items-center px-4 bg-green-400 rounded-r-lg">
            <svg className="w-5 h-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M13.5 11a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0zM18 17a1 1 0 0 1-1 1h-3.1a8 8 0 1 1-1.19-1.19V14a1 1 0 0 1 2 0v2.1c.36.1.69.29 1 .52V14a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v2.53A9.98 9.98 0 0 1 9.47 13H5a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v2h10V9a1 1 0 0 1 2 0v7z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-8">
          <li>
            <Link href="#" className="hover:text-green-400">Home</Link>
          </li>
          <li>
            <Link href="/Shop" className="hover:text-green-400">Shop</Link>
          </li>
          <li>
            <Link href="/#serviceSection" className="hover:text-green-400">Services</Link>
          </li>
          <li>
            <Link href="/#reviewSection" className="hover:text-green-400">Reviews</Link>
          </li>
        </ul>
        
        {/* Login/Logout button */}
        <div>   
          {session ? (
            <>
              <div className='flex gap-3'>
                
                <Link href='/account' className='hover:underline-offset-2 hover:underline my-auto'>
                  <span className='my-auto'>
                    <UserCircleIcon className='h-7 my-auto' />
                  </span>
                </Link> 
                <Link href='/product'>
                  <ShoppingCartIcon className='h-7 my-auto mt-2' />
                </Link>
                 
                <button className='bg-green-400 py-2 px-6 rounded-lg mr-4 hover:bg-green-500 shadow-lg hover:shadow-green-500'><Logout/></button>
              </div>
              
            </> 
          ) : (
            <>
            <div className='flex gap-4'>
              
              <Link href="/Login" className="bg-green-400 py-2 px-6 rounded-lg mr-4 hover:bg-green-500 shadow-lg hover:shadow-green-500">Login</Link>
              
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};



// In your page component where NavBar is used, you can pass session as a prop

// export async function getServerSideProps(context) {
//   const session = await getServerSession(context);
//   return {
//     props: {
//       session,
//     },
//   };
// }

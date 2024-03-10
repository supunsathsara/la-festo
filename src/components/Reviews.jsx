import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



export const ReviewSection = () => {
    return (
        <section id="reviewSection" className="py-20 ">
            <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">


                <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                    <div className="mb-12 space-y-5 md:mb-16 md:text-center">
                        <div
                            className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                            Words from Others
                        </div>
                        <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                            It's not just us.
                        </h1>
                        <p className="text-xl text-gray-100 md:text-center md:text-2xl">
                            Here's what others have to say about us.
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div>
                        <a href="https://twitter.com/kanyewest" className="cursor-pointer">
                            <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Kanye West</h3>
                                        <p className="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Find God.</p>
                            </div>
                        </a>
                    </div>

                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/dan_schulman" className="cursor-pointer">
                            <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Dan Schulman</h3>
                                        <p className="text-gray-500 text-md">CEO of PayPal</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                                    et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                            </div>
                        </a>
                    </div>

                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/dan_schulman" className="cursor-pointer">
                            <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Dan Schulman</h3>
                                        <p className="text-gray-500 text-md">CEO of PayPal</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                                    et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                            </div>
                        </a>
                    </div>

                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/dan_schulman" className="cursor-pointer">
                            <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Dan Schulman</h3>
                                        <p className="text-gray-500 text-md">CEO of PayPal</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                                    et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                            </div>
                        </a>
                    </div>

                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/dan_schulman" className="cursor-pointer">
                            <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Dan Schulman</h3>
                                        <p className="text-gray-500 text-md">CEO of PayPal</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                                    et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className='mt-12'>
                    <h3 className='flex justify-center text-xl'>Add your mind about us...😊</h3>
                </div>

                <div className='flex justify-center mt-8'>
                    <form className="relative flex justify-center">
                        <div className="mr-2">
                        <label htmlFor="comment" className="sr-only">Add your comment</label>
                        <textarea 
                            id="comment"
                            name="comment"
                            rows="1" 
                            cols="50"
                            className="py-4 px-4 bg-gray-800 rounded-l-lg placeholder-gray-400 text-md:outline-none focus:ring-2 focus:ring-green-400" 
                            placeholder="Add your comment..." 
                        />
                        </div>
                        <button type="submit" className="px-4 py-1.5 bg-green-400 rounded-r-lg">
                        Submit
                        </button>
                    </form>
                </div>

                <div  className="flex justify-center py-6 mt-14">
                    <Link href={'/Review'}>
                        <button type="button" className=" flex  justify-center rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold leading-6 text-white hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 shadow-lg hover:shadow-green-500">
                                View More Reviews...
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
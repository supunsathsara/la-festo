import React from 'react';
import Image from 'next/image';



export const HeroSection = () => {

  return (

    <section className=' mx-auto container'>
      <div className="bg-[url('/img/heroImg1.png')] bg-cover pt-6">
        {/* <NavBar /> */}
        {/*
        <hr className='mx-5 md:mx-8 h-3 mt-4' /> */}
        <div className='grid grid-cols-2 mt-12'>
          <div
            className='mx-auto bg-[url("/img/a1.jpg")] bg-cover  rounded-full items-center mt-1 mb-8 transform-cpu transition-colors place-self-center space-x-3'>
            <div className='bg-[#000000b8] rounded-full p-10'>
              <div
                className=' p-5 rounded-xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 via-purple-700 to-red-500'>
                <h3 className='text-4xl text-center my-4 '>Your one-stop </h3>
                <h3 className='text-2xl text-center my-4'> for all things destination</h3>
                <h3 className='text-3xl text-center my-4'>spirits! Explore,</h3>
                <h3 className='text-3xl text-center my-4'> click,</h3>
                <h3 className='text-2xl text-center my-4'>sip – it's that easy.</h3>
                <h3 className='text-4xl text-center my-4'>Cheers to convenience, </h3>
                <h3 className='text-3xl text-center my-4'>delivered straight to your </h3>
                <h3 className='text-5xl text-center my-4'>doorstep.</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=''>

        </div>
      </div>
    </section>
  )
}
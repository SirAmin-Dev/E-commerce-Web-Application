import React from 'react'
import Image from 'next/image'
import Navbar from './components/Navbar';

export default function page() {
    const pageTitle = 'Welcome to Weth Gadget Central!';
  const welcomeMessage = `Discover the future with the new Apple Vision Pro. 
  Experience unparalleled display quality, innovative design, and cutting-edge technology.`;

  return (
    <>
    <Navbar />
  <main className=' flex flex-col justify-center text-2xl'>
    <div className='font-bold flex-col'> 
        <h1 className='flex justify-center'>{pageTitle}</h1>
        <h2 className='flex justify-center py-50'>{welcomeMessage}</h2>
    </div>
    <section>
    <div className='flex justify-center py-20 px-15 w-[100%]'>
        <Image src='/visionpromark.jpg' alt="vision pro physical building" width='500' height='800' className='w-[30%]'/>
        <Image src='/visionprofront.jpg' alt="vision pro front view" width='500' height='800' className='w-[30%]'/>
        <Image src='/visionprologo.jpg' alt="vision pro logo" width='500' height='800' className='w-[30%]'/>
    </div>   
    </section>
  </main>
    </>
  )
}

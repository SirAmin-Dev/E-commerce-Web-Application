import React from 'react'
import Link from 'next/link'
import { IoIosMail } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";



export default function page() {
  return (
    <div>
        <article className='h-100'>
        <nav className='h-60 bg-gray-200 flex justify-center'>
       <ul>
        <h1 className='font-bold text-6xl py-6 mx-5'>Contact US</h1>
        <aside className='flex justify-between px-20 py-4'>
        <li className='text-stone-400'><Link href="/">Home</Link></li>
        <li><Link href="/contact">Contacts</Link></li>
        </aside>
       </ul>
        </nav>
        </article>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 px-8'>
    <section className='px-5 py-20'>
        <h1 className='font-bold text-2xl'>Contact US</h1>
        <article>
        <aside className='text-stone-400'>
        1 Hajiya Mariam .S. Close, Kebe Bus Stop Off Amikanle Road, A.I.T, Kola Bus Stop Alagbado, Lagos. <br />
        <br />
        </aside>
        <Link href="tel:+2349065946565" className='text-black font-bold text-xl'>+234 906 594 6565</Link> <br />
        <br />
        
        <aside className='flex items-center gap-1'>
        <span className='text-red-400'> <IoIosMail /></span><a href="sadiqalamin15727@gmail.com" className='text-stone-400 hover:text-black'>sadiqalamin15727@gmail.com</a> 
        <br />
        </aside>
        <div className='flex gap-3 text-stone-400 py-4 text-2xl'>
        <span className=' bg-stone-200 rounded-full'><ImFacebook/></span>
        <span className=' bg-stone-200 rounded-full'><IoLogoTwitter/></span>
        <span className=' bg-stone-200 rounded-full'><FaInstagram/></span>
        <span className=' bg-stone-200 rounded-full'><FaPinterestP/></span>
        </div>
        </article>
    </section>

    <section className=' py-20 mr-10'>
    

        <h1 className='font-bold text-2xl' >Drop Us a Message</h1>
        <p className='py-5'>Have a question or feedback? Fill out the form below to get in touch with us.</p>
        
        <form className='flex flex-col gap-3 w-[100]'>
       <span className='flex gap-4'>
       <input className='border-2 rounded-lg border-stone-400 py-4 placeholder:p-4 placeholder:mx-4 text-stone-400 w-1/2' type="text" id="name" name="name"  placeholder='Your Name'required />
        
        <input className='border-2 rounded-lg border-stone-400 placeholder:p-4 text-stone-400 w-1/2' type="email" id="email" name="email"  placeholder='Your Email'required /></span> 
        
        
        <textarea className=' border-2 rounded-lg border-stone-400 py-20 placeholder:px-10 placeholder:py-[-20]  text-stone-400' id="message" name="message" placeholder='Example Text' required></textarea>
        
        <button className='border rounded-xl bg-black text-white my-5 py-4 w-2/5' type="submit">Submit</button>
        </form>
    </section>
        </div>
    </div>
  )   
}

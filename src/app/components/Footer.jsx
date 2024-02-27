import Link from 'next/link'
import React from 'react'
import { LuSendHorizonal } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoSkype } from "react-icons/io";
// import styles from "./Footer.module.css"



export default function Footer() {
  return (
    <footer className='min-h-full'>
        <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-8 px-8 bg-gray-400 py-20'>
        <section className=''>
          <h2>Weth Gadgets</h2>
          <article className='w-[25ch]'>Copyright &copy; {new Date().getFullYear()} designed and developed by Al-amin. Powered by Univel.</article>
        <aside>
        <article className='w-[25ch]'>No. 651 - London Oxford Street, 819 United Kingdom. <br/>
        <a href="mailto:sadiqalamin15727@gmail.com" className=' text-stone-600'>sadiqalamin15727@gmail.com</a> <br/>
        <a href="tel:+2349065946565" className=' text-stone-600'>+2349065946565</a>
        </article>
        </aside>
        </section>
     


      
      <section className=''>
      <h2>GET 32% OFF</h2>
      <div>By subscribe to our newsletter</div>
      <div className=' flex py-5'> <input className=' border border-black rounded-full px-3' type="email" name="" id="" placeholder='Enter your email'/><span className='z-50 ml-[-20px] py-2'><LuSendHorizonal /></span></div>
      </section>
      <section>
      <aside>
       <h2>FOLLOW US ON</h2>
      <span className='flex gap-4'>
      <FaFacebookF/>
      <FaInstagram/>
      <IoLogoTwitter/>
      <IoLogoSkype/>
      </span>
      </aside>
      </section>
      </div>
    </footer>
  )
}


"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { PiShoppingCartThin } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
    const [cart, setCart] = useState(0)
    const [open, setOpen] = useState(true)

    function controlNav(){
        setOpen(!open)
    }
    // function addOne(){
    //     setOpen(!open)
    // }
  return (

    <nav className='flex items-start justify-between px-[2rem] py-8'>
        <ul className='flex items-center gap-4'> 
            <li>
                <Link href="/">
                <Image src="/wethlogo.png" alt="logo" width="32" height="32"/>
                </Link>
            </li>
            <li>
                <Link href="/" className='flex flex-col'>
                <span>Weth Gadgets</span>
                </Link>
                
            </li>
        </ul>

        <div className='flex flex-col'>
        <li>
                <Link href="/cart" className='flex items-center gap-2'>
                <PiShoppingCartThin />
                <span>{cart}</span>
                </Link>
            </li>

        <ul className={`md:hidden ${open ? 'flex' : 'hidden'} cursor-pointer`}>
            <li onClick={controlNav}>
            <RxHamburgerMenu />
            </li>
        </ul>
        <ul className={`md:hidden ${open ? 'hidden' : 'flex'} cursor-pointer`}>
            <li onClick={controlNav}>
            <RxCross2 />
            </li>
        </ul>
        <ul className={`md:flex ${open ? 'hidden' : 'flex flex-col'} justify-center gap-6`}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/shop">Shop</Link>
            </li>
            <li>
                <Link href="/pages">Pages</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
            
        </ul>

       
        </div>
    </nav>
  )
}

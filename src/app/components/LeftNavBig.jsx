import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SearchBar from './SearchBar'

export default function LeftNavBig({open, sort,search}) {
  return (
    <ul className={open ? 'md:flex hidden items-center w-full bg-gray-200 h-[100px] justify-center gap-6' : 'hidden'}>
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
    <li>
        <Link href="/products">Products</Link>
    </li> 

    <li>
    <SearchBar sort={sort} search={search}/>
    </li>
</ul>
  )
}

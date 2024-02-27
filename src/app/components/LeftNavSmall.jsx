import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SearchBar from './SearchBar'

export default function LeftNavSmall({sort,search}) {
  return (
    <div className=' relative w-[100%] h-screen z-50'>

    <ul className='flex  flex-col w-fit bg-rose-200 shadow-xl h-screen justify-start p-6 gap-6'>
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
    <SearchBar sort={sort} search={search}/>
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

</ul>
    </div>
  )
}

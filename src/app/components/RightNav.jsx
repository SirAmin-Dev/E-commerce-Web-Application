import React from 'react'
import Link from 'next/link'
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx'
import { PiShoppingCartThin } from 'react-icons/pi'
import { GoPerson } from 'react-icons/go'

export default function RightNav({open,controlNav,cart}) {
  return (
      <div className='flex gap-6  justify-end items-center md:w-full w-full bg-indigo-700'>
        <div className='flex gap-4'>
            <Link href="/login" className='text-xl'> 
            <GoPerson />
            </Link>

            <Link href="/cart" className='flex text-xl'>
            <PiShoppingCartThin />
            <span className='bg-gray-400 rounded-md'>{cart}</span>
             </Link>
        </div>
        <ul className={`md:hidden ${open ? 'flex' : 'hidden'} cursor-pointer`}>
            <li onClick={controlNav} className='text-xl'>
            <RxHamburgerMenu />
            </li>
        </ul>
        <ul className={`md:hidden ${open ? 'hidden' : 'flex'} cursor-pointer`}>
            <li onClick={controlNav} className='text-xl'>
            <RxCross2 />
            </li>
        </ul>  
    </div>
  )
}

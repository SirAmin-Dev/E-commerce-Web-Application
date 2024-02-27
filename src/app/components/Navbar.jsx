"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { PiShoppingCartThin } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import {CiSearch} from "react-icons/ci"
import SearchBar from './SearchBar';
import RightNav from './RightNav';
import LeftNavBig from './LeftNavBig';
import LeftNavSmall from './LeftNavSmall';


export default function Navbar({sort,search}) {
    const [cart, setCart] = useState(0)
    const [open, setOpen] = useState(true)

    function controlNav(){
        setOpen(!open)
    }
    // const [sort, setSort]= useState('')
   
  function searchTopic(e){
    setSort(e.target.value)
  }
    // function addOne(){
    //     setOpen(!open)
    // }
  return (
    <nav className='w-full flex items-start  justify-between shadow-xl bg-gray-200'>
        {open ?
   <LeftNavBig open={open} sort={sort} search={search} />
   :
   <LeftNavSmall sort={sort} search={search}/>


        }

   <RightNav open={open} controlNav={controlNav} cart={cart}/>
   </nav>
  )
}

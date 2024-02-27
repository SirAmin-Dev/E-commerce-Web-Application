"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';

export default function MainProducts() {
  // const [sort, setSort]= useState('')
  const [sort, setSort]= useState('')
   
  function searchTopic(e){
    setSort(e.target.value)
  }
   
 
  
  
  export const mainProducts = [
    {
      id: 1,
      title: 'Apple iPhone 15 Pro',
      category: 'Smartphone',
      price: 799,
      description: `The iPhone 15 Pro redefines smartphone technology with its groundbreaking features and stunning design. Equipped with Apple's latest A16 Bionic chip, the iPhone 15 Pro delivers unparalleled performance and efficiency. Whether you're multitasking, gaming, or editing photos and videos, the A16 chip ensures smooth and lag-free performance. The iPhone 15 Pro also boasts a beautiful 6.7-inch Super Retina XDR display with ProMotion technology, offering a seamless and immersive viewing experience."
      
      "Capture every moment in stunning detail with the iPhone 15 Pro's advanced camera system. Featuring a triple-lens setup with improved low-light performance and enhanced computational photography capabilities, the iPhone 15 Pro lets you take professional-quality photos and videos with ease. The device also introduces new photography modes and features, such as enhanced Night mode, ProRAW+, and AI-powered editing tools, allowing you to unleash your creativity like never before."
      
      "Experience the future of connectivity with the iPhone 15 Pro's 5G capabilities. With support for ultra-fast 5G networks, you can download and stream content, play online games, and video call with crystal-clear quality and minimal lag. The iPhone 15 Pro also features improved battery life, wireless charging, and a range of new accessories, making it the ultimate companion for your everyday life. Whether you're a professional or a tech enthusiast, the iPhone 15 Pro sets a new standard for smartphones.`,
      tags: ['apple', 'iphone', 'smartphone']
      
    },
    {
      id: 2,
      title: 'Apple Watch Series 7',
      category: 'Smartwatch',
      price: 399,
      description: `Stay connected and healthy with the Apple Watch Series 7. Featuring a larger, always-on Retina display, this smartwatch lets you track your workouts, monitor your health, and stay in touch with the people and information you care about.`,
      tags: ['apple', 'watch', 'smartwatch']
    },
    {
      id: 3,
      title: 'Sony PlayStation 5',
      category: 'Gaming Console',
      price: 499,
      description: `Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D audio, and an all-new generation of incredible PlayStation games.`,
      tags: ['sony', 'playstation', 'gaming', 'console']
    },
    {
      id: 4,
      title: 'Apple AirPods Pro',
      category: 'Headphones',
      price: 249,
      description: `Immerse yourself in your music, podcasts, and calls with the Apple AirPods Pro. These wireless earbuds feature active noise cancellation, transparency mode, and a customizable fit for all-day comfort.`,
      tags: ['apple', 'airpods', 'headphones']
    },
    {
      id: 5,
      title: 'Sony WH-1000XM4',
      category: 'Headphones',
      price: 349,
      description: `Enjoy industry-leading noise cancellation and exceptional sound quality with the Sony WH-1000XM4 headphones. With up to 30 hours of battery life and touch sensor controls, you can listen all day in comfort and style.`,
      tags: ['sony', 'headphones']
    },
    {
      id: 6,
      title: 'Apple iPad Pro',
      category: 'Tablet',
      price: 799,
      description: `The Apple iPad Pro is the ultimate tablet for work and play. With the powerful M1 chip, stunning Liquid Retina display, and support for the Apple Pencil and Magic Keyboard, you can do more than ever before.`,
      tags: ['apple', 'ipad', 'tablet']
    },
    {
      id: 7,
      title: 'Sony WH-CH710N',
      category: 'Headphones',
      price: 199,
      description: `Enjoy your favorite music and podcasts with the Sony WH-CH710N headphones. With noise cancellation and long battery life, these headphones are perfect for commuting, traveling, or just relaxing at home.`,
      tags: ['sony', 'headphones']
    },
    {
      id: 8,
      title: 'Apple MacBook Pro',
      category: 'Laptop',
      price: 1299,
      description: `The Apple MacBook Pro is the ultimate laptop for professionals and creatives. With the powerful M1 Pro or M1 Max chip, stunning Retina display, and up to 21 hours of battery life, you can work and create all day.`,
      tags: ['apple', 'macbook', 'laptop']
    },
    {
      id: 9,
      title: 'Sony WF-1000XM4',
      category: 'Earbuds',
      price: 279,
      description: `Experience true wireless freedom with the Sony WF-1000XM4 earbuds. With industry-leading noise cancellation, exceptional sound quality, and a comfortable fit, you can enjoy your music and calls without distraction.`,
      tags: ['sony', 'earbuds']
    },
    {
      id: 10,
      title: 'Apple HomePod mini',
      category: 'Smart Speaker',
      price: 99,
      description: `Elevate your home audio experience with the Apple HomePod mini. With Siri intelligence, high-fidelity audio, and seamless integration with your Apple devices, it's the perfect companion for your home.`,
      tags: ['apple', 'homepod', 'speaker']
    },
    {
      id: 11,
      title: 'Sony Xperia 1 III',
      category: 'Smartphone',
      price: 1299,
      description: `Experience the ultimate in smartphone technology with the Sony Xperia 1 III. Featuring a stunning 6.5-inch 4K OLED display, pro-grade cameras, and 5G connectivity, it's the perfect device for work and play.`,
      tags: ['sony', 'xperia', 'smartphone']
    },
    {
      id: 12,
      title: 'Apple Magic Keyboard',
      category: 'Keyboard',
      price: 299,
      description: `Enhance your typing experience with the Apple Magic Keyboard. With a sleek design, responsive keys, and a built-in trackpad, it's the perfect companion for your Mac or iPad.`,
      tags: ['apple', 'keyboard']
    },
    {
      id: 13,
      title: 'Sony A7 III',
      category: 'Mirrorless Camera',
      price: 1999,
      description: `Capture stunning photos and videos with the Sony A7 III mirrorless camera. Featuring a 24.2MP full-frame sensor, fast hybrid autofocus, and 4K video recording, it's the perfect camera for photographers and videographers alike.`,
      tags: ['sony', 'camera']
    },
    {
      id: 14,
      title: 'Apple TV 4K',
      category: 'Streaming Device',
      price: 179,
      description: `Transform your TV experience with the Apple TV 4K. With support for 4K HDR and Dolby Atmos sound, access to your favorite apps and content, and the Apple TV app, it's the ultimate streaming device for your home.`,
      tags: ['apple', 'tv', 'streaming']
    },
    {
      id: 15,
      title: 'Sony WH-XB910N',
      category: 'Headphones',
      price: 249,
      description: `Experience deep, punchy bass with the Sony WH-XB910N headphones. With Extra Bass, noise cancellation, and long battery life, these headphones are perfect for music lovers on the go.`,
      tags: ['sony', 'headphones']
    }
  ]
  const filteredList = mainProducts.filter(product => product.title.toLowerCase().includes(sort.toLowerCase()) || product.category.toLowerCase().includes(sort.toLowerCase()))
  
  const productCart = filteredList.length == 0 ? <h2>no item found</h2> :
  
  filteredList.map(cart =>(
    <section key={cart.id}>
      <Link href={`/category/${cart.title.split(' ').join('_')}`}>
     <Image src={`https://robohash.org/${cart.title}`} alt={cart.title} width={'400'} height={'400'}/>
     <h2>{cart.title}</h2>
     <p>&#8358; <span>{cart.price}</span></p>
      </Link>
    </section>


  ))


  return (
    <>
    {/* sort hook and search topic function are passed as props to the navbar */}
    <Navbar sort={sort} search={searchTopic}/>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-400 md:justify-center'>

    {productCart}

    </div>
    </>
  )
}

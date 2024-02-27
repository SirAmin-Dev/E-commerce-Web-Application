import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";


export default function search() {
    const [sort, setSort]= useState('')
    
    function searchTopic(e){
        setSort(e.target.value)
      }
  return (
    <div className='flex items-center border-4 border-gray-600 rounded-full m-auto w-1/2 p-4'>
      <input type="text" name="text" id="text" placeholder='search for topic or category' className='outline-none border-none pl-8 w-5/6' defaultValue={sort} onChange={searchTopic}/>
      <CiSearch />
    </div>
  )
}

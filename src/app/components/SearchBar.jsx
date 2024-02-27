import React from 'react'
import { CiSearch } from 'react-icons/ci'

export default function SearchBar({sort,search}) {
  return (
    <div className='flex flex-row items-start gap-6'>
    <div className={`flex items-center border-2 border-gray-600 rounded-full m-auto w-3/4 p-2`}> 
    <input type="text" name="text" id="text" placeholder='search for topic or category' className='outline-none border-none pl-8 w-5/6 bg-transparent' defaultValue={sort} onChange={search}/>
<CiSearch />
</div>
</div>
  )
}

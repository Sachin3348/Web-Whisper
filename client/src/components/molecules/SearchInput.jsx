import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className="rounded-full input input-bordered" />
        <button className='btn btn-circle text-white bg-sky-500'> <IoSearchSharp className='w-6 h-6 outline-none'/></button>
        
    </div>
  )
}

export default SearchInput
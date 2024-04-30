import React from 'react'
import SearchInput from '../molecules/SearchInput'
import Conversations from '../organisms/Conversations'
import Logout from '../molecules/Logout'


const Sidebar = () => {
  return (
    <div className=' border-r border-slate-500 p-4 flex flex-col flex-1'>
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
        <Logout />
    </div>
  )
}

export default Sidebar
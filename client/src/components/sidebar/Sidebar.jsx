import React from 'react'
import SearchInput from '../molecules/SearchInput'
import Conversations from '../organisms/Conversations'


const Sidebar = () => {
  return (
    <div>
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
    </div>
  )
}

export default Sidebar
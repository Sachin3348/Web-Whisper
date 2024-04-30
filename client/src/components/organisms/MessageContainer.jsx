import React from 'react'
import Messages from '../molecules/Messages'
import MessageInput from '../atoms/MessageInput'

const MessageContainer = () => {
  return (
    <div className=' md:min-w-[450px] flex flex-col'>
        <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className=" label-text">To:</span>
            <span className=" font-bold text-gray-900"> Sachin Mahto</span>
        </div>

        <Messages />
        <MessageInput />
    </div>
  )
}

export default MessageContainer
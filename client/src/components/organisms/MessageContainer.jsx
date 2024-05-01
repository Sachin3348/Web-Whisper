import React from 'react'
import Messages from '../molecules/Messages'
import MessageInput from '../atoms/MessageInput'
import { TiMessages } from 'react-icons/ti'

const MessageContainer = () => {
  const isChatSelected = true
  return (
    <div className=' md:min-w-[450px] flex flex-col'>
       {isChatSelected ?  (
          <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
              <span className=" label-text">To:</span>
              <span className=" font-bold text-gray-900"> Sachin Mahto</span>
          </div>

          <Messages />
          <MessageInput />
          </> 
        )
       :
        <NoChatSelected /> }
    </div>
  )
}

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className=" text-center px-4 sm:text-lg md:text-xl text-gray-200 font-semibold flex 
        flex-col items-center gap-2"
      >
        <p className="">Welcome 👋🏻 Sachin Mahto 🌸</p>
        <p className="">Select a chat to start messaging</p>
        <TiMessages className='text-center text-3xl md:text-6xl'/>
      </div>
    </div>
  );
};
export default MessageContainer
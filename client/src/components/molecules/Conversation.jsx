import React from 'react'

const Conversation = () => {
  return (
    <>
        <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
          <div className=" avatar online">
            <div className=" w-12 rounded-full">
              <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' alt='user avatar' />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-between gap-3">
              <p className="font-bold text-gray-200">Sachin Mahto</p>
              <span className="text-xl">🍻</span>
            </div>
          </div>
        </div>
        <div className="divider my-0 py-0 h-1"></div>
    </>
  )
}

export default Conversation
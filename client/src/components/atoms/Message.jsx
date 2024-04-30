import React from "react";

const Message = () => {
  return (
    <div className="chat chat-start">
      <div className="avatar chat-image">
        <div className="w-10 rounded-full">
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="user avatar"
          />
        </div>
      </div>
      <div class="chat-bubble">You were the Chosen One!</div>
      <div class="chat-footer text-gray-600 opacity-100 text-xs items-center flex gap-1">04:06 PM</div>
    </div>
  );
};

export default Message;

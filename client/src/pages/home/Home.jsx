import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/organisms/MessageContainer";


const Home = () => {
  return (
    <div
      className="flex sm:h-[450px] md:h-[550px] rounded-lg bg-opacity-0 backdrop-filter backdrop-blur-lg bg-clip-padding
     bg-gray-400 overflow-hidden"
    >
      <Sidebar />
      <MessageContainer />
    </div>
      // <div className=" divider px-3"></div>
  );
};

export default Home;

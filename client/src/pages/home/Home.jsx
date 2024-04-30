import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";


const Home = () => {
  return (
    <div
      className="flex flex-col sm:h-[450px] md:h-[550px] rounded-lg bg-opacity-0 backdrop-filter backdrop-blur-lg bg-clip-padding
     bg-gray-400 overflow-hidden"
    >
      <Sidebar />
      <div className=" divider px-3"></div>
    </div>
  );
};

export default Home;

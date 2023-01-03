import React from "react";
import { Outlet } from "react-router-dom";
import Player from "../component/Player";
import Sidebarleft from "../component/Sidebarleft";
import Sidebarright from "../component/Sidebarright";
import Header from "../component/Header";
import { useParams } from "react-router-dom";
const Mainlayout: React.FC = () => {
  const { title, id } = useParams();
  return (
    <div className="w-full relative h-screen flex flex-col bg-main-300">
      <div className="w-full h-full flex flex-auto">
        <div className="w-[240px] h-full flex-none border border-blue-500">
          <Sidebarleft />
        </div>
        <div className="flex-auto border border-red-500">
        <div className=" h-[70px]  px-[59px] flex items-center mb-5 ">
      <Header/>
    </div>
          <Outlet />
        </div>
        {/* {title ? "" : <div className="w-[329px] hidden 1024:flex  flex-none border border-red-500 animate-slide-left">
          <Sidebarright />
        </div>} */}
      </div>
      <div className="fixed bottom-0 left-0 border borderborder border-red-500 right-0 h-[90px] z-50">
        <Player />
      </div>
    </div>
  );
};

export default Mainlayout;

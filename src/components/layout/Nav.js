import React, { useState } from "react";
import cine from "../../assets/cine.svg";
import { NavLink } from "react-router-dom";
import hamburger from "../../assets/hamburger.svg";
import SideBar from "./SideBar";

function Nav() {
  const [showSidebar, setSidebarStatus] = useState(false);
  function toggleSidebar() {
    setSidebarStatus((status) => !status);
  }
  
  return (
    <>
      <nav className="bg-[#02233f] p-4 sticky top-0 z-30 flex text-white font-gotham  ">
        <ul className="w-[100%] md:mx-[2%]   text-white flex  ">
          <li className="text-2xl  md:text-4xl">
            <span className="xsm:visible sm1:hidden ">
              <img
                className=" h-8 w-8 inline mr-4"
                onClick={toggleSidebar}
                src={hamburger}
              ></img>
            </span>
            <span>
              <img
                className="h-9 w-8  pb-2 text-white inline "
                src={cine}
              ></img>
            </span>
            <p className="inline  ml-1  cursor-pointer">Cineflicks</p>
          </li>

          <ul
            className="xsm:hidden sm:visible ml-32 md:ml-20 flex justify-between w-60 md:w-80 items-center
      text-lg"
          >
            <NavLink
              to="/trending"
              className={({ isActive }) => (isActive ? "text-gray-400" : "")}
            >
              <li className="cursor-pointer">Trending</li>
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) => (isActive ? "text-gray-400" : "")}
            >
              <li className="cursor-pointer">Movies</li>
            </NavLink>
            <NavLink
              to="/series"
              className={({ isActive }) => (isActive ? "text-gray-400" : "")}
            >
              <li className="cursor-pointer">TV Shows</li>
            </NavLink>
          </ul>
        </ul>
      </nav>
      <SideBar toggleSidebar={toggleSidebar} showSidebar={showSidebar}></SideBar>

      
    </>
  );
}

export default Nav;

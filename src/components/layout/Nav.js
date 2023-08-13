import React, { useState } from "react";
import cine from "../../assets/cine.svg";
import { NavLink } from "react-router-dom";
import hamburger from "../../assets/hamburger.svg";
import SideBar from "./SideBar";
import { Form } from "react-router-dom";
import search from "../../assets/search.svg";

import search2 from "../../assets/search.svg";
import MobileSearchBar from "./MobileSearchBar";

function Nav() {
  const [showSidebar, setSidebarStatus] = useState(false);
  const [showSearchbar, setSearchbarStatus] = useState(false);

  function toggleSidebar() {
    setSidebarStatus((status) => !status);
  }

  function toggleSearchbar() {
    setSearchbarStatus((status) => !status);
  }

  return (
    <>
      <MobileSearchBar
        onSearchToggle={toggleSearchbar}
        showSearchbar={showSearchbar}
      ></MobileSearchBar>
      <nav className="bg-[#0a1929] xsm:p-2 p-4 sticky top-0 z-30 flex text-white font-gotham  ">
        <ul className="w-[100%] mx-[2%]   text-white flex  ">
          <li className="text-2xl  md:text-4xl flex w-[90%] lg:w-[70%]">
            <span className="visible  lg:hidden ">
              <img
                className=" h-8 w-16 inline mr-"
                onClick={toggleSidebar}
                src={hamburger}
              ></img>
            </span>
            <span>
              <img
                className="h-9 w-12  pb-2 text-white inline "
                src={cine}
              ></img>
            </span>
            <p className="inline  ml-1  cursor-pointer">Cineflicks</p>
            <Form className="ml-8 w-[100%] xsm:hidden sm1:visible">
              <span className="flex w-[100%] ">
                <input
                  className="h-9 text-[1.4rem] p-2 rounded-l-[0.3rem] w-[100%]  focus:outline-none
                  
                   text-black"
                  type="text"
                ></input>
                <img
                  src={search}
                  className="h-9 p-1 w-8 bg-white rounded-r-[0.3rem] "
                ></img>
              </span>
            </Form>
          </li>

          <li className="flex items-center ">
            <ul
              className="hidden  lg:visible ml-32 md:ml-20 lg:flex justify-between w-60 md:w-80 items-center
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
          </li>

          <li className="flex items-center xsm:visible sm1:hidden">
            <span onClick={toggleSearchbar}>
              <img
                src={search2}
                className="h-9 p-1 w-8  rounded-r-[0.3rem] "
              ></img>
            </span>
          </li>
        </ul>
      </nav>
      <SideBar
        toggleSidebar={toggleSidebar}
        showSidebar={showSidebar}
      ></SideBar>
    </>
  );
}

export default Nav;

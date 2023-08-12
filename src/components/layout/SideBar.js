import React from "react";
import cross from "../../assets/cross.svg";
import series from "../../assets/series.svg";
import trending from "../../assets/trending.svg";
import movies from "../../assets/movies.svg";
import { NavLink } from "react-router-dom";

function SideBar({toggleSidebar,showSidebar}) {
  return (
    <>
      <ul
        className={`p-4 xsm:visible sm1:hidden flex flex-col gap-6 bg-[#02233f] text-white w-[50%] h-[100%] fixed z-10 m
        ease-in-out duration-700 ${
          showSidebar ? "translate-x-0 " : "-translate-x-80"
        }   `}
      >
        <span className="flex justify-end">
          <img className="w-5 h-5 " onClick={toggleSidebar} src={cross}></img>
        </span>
        <li className="cursor-pointer">
          <span className=" mr-2">
            <img className="w-6 h-6 inline " src={trending}></img>
          </span>
          <span>
          
            <NavLink
              to="/trending"
              className={({ isActive }) => (isActive ? "text-gray-400" : "")}
            >
              Trending
            </NavLink>
          </span>
        </li>
        <li className="cursor-pointer">
          <span className=" mr-2 inline">
            <img className="w-6 h-6 inline" src={movies}></img>
          </span>
          <span>
            <NavLink
              to="/movies"
              className={({ isActive }) => (isActive ? "text-gray-400" : "")}
            >
              Movies
            </NavLink>
          </span>
        </li>
        <li className="cursor-pointer">
          <span className=" mr-2">
            <img className="w-6 h-6 inline" src={series}></img>
          </span>
          <span>
            <NavLink
              to="/series"
              className={({ isActive }) => (isActive ? "text-gray-400" : "")}
            >
              TV shows
            </NavLink>
          </span>
        </li>
      </ul>
    </>
  );
}

export default SideBar;

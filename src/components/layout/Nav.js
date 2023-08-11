import React from "react";
import cine from "../../assets/cine.svg";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-[#23222a] p-4 sticky top-0 z-30 flex text-white font-gotham  ">
      <ul className="w-[100%] md:mx-[6%]   text-white flex  ">
        <li className="text-2xl  md:text-4xl">
          <span>
            <img className="h-9 w-8  pb-2 text-white inline " src={cine}></img>
          </span>
          <p className="inline  ml-1  cursor-pointer">Cineflicks</p>
        </li>

        <ul className="xsm:hidden visible ml-32 md:ml-20 flex justify-between w-60 md:w-80 items-center
      text-lg">
        <NavLink to='/trending' className={({isActive})=> (isActive ? 'text-gray-400' : '') } ><li className="cursor-pointer">Trending</li></NavLink>
        <NavLink to='/movies' className={({isActive})=> (isActive ? 'text-gray-400' : '') } > <li className="cursor-pointer">Movies</li></NavLink>
        <NavLink  to='/series' className={({isActive})=> (isActive ? 'text-gray-400' : '') } >  <li className="cursor-pointer">TV Shows</li></NavLink>
      
      
      </ul>
      </ul>

  
    </nav>
  );
}

export default Nav;

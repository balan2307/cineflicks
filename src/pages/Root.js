import React from "react";
import "../assets/cine.svg";
import cine from "../assets/cine.svg";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <nav className="bg-[#23222a] p-4 sticky top-0 z-30">
        <ul className="text-white flex justify-center">
          <li className="  text-4xl">
            <span>
              <img
                className="h-9 w-8  pb-2 text-white inline "
                src={cine}
              ></img>
            </span>
            <p className="inline  ml-1 font-gotham">Cineflicks</p>
          </li>
        </ul>
      </nav>

      <div className="mt-5 mb-5 mx-[10%] ">
        <Outlet></Outlet>
     
      </div>
    </>
  );
}

export default RootLayout;

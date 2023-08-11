import React from "react";
import Nav from "../components/layout/Nav";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Nav></Nav>
      <div className="mt-5 mb-5 mx-[7%] ">
        <div className="mb-20">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default RootLayout;

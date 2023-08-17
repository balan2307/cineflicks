import React from "react";
import Nav from "../components/layout/Nav";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Nav></Nav>
      <div className="mt-5 mb-5  ">
        <div className="mb-20">

           {/* <h5 className="mb-9">Header</h5> */}
          <main>
          <Outlet></Outlet>
          </main>
        </div>
      </div>
    </>
  );
}

export default RootLayout;

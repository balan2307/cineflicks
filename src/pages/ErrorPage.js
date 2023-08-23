import React from "react";
import { useRouteError } from "react-router-dom";
import Nav from "../components/layout/Nav";

function ErrorPage() {
  const error = useRouteError();
  console.log("error page")

  let title = "An error occurred";
  let message = "Something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status == 404) {
    title = "Not found";
    message = "Could not find the resource or page";
  }
  return (
    <>
    <Nav></Nav>
    <div className="flex justify-center h-[100vh] bg-gray-400 text-white font-rajdhani">
      <div className="mt-11">
        <h5 className="text-5xl text-center mb-5 font-bold">{title}</h5>
        <p className="text-2xl text-center">{message}</p>
      </div>
    </div>
    </>

  );
}

export default ErrorPage;

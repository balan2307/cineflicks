import React from "react";
import star from "../assets/star.svg";

function MovieItem() {
  return (
    <div className="w-56 p-1 shadow-2xl flex justify-center rounded-md bg-[#3e4141] ">
      <div className="w-[99%] ">
        <div>
          <img
            className="h-80 rounded-md"
            src="https://image.tmdb.org/t/p/w300/uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg"
          ></img>
        </div>
        <div className="text-[#d7d7d7] font-oxygen p-1">
          <p className="text-lg">Insidious: The Red Door</p>
          <div className="flex justify-between mt-1">
            <div>
            <span className="mr-2">2022</span>
            <span>
              7.5 <img className="w-4 inline pb-1" src={star}></img>
            </span>
            </div>
       
            <p className="font-extralight inline border border-spacing-0 px-1 border-dashed">
              Movie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;

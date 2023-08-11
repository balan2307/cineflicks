import React from "react";
import star from "../assets/star.svg";

function MovieItem({ movie, itemtype }) {
  let vote_color =
    movie.vote_average >= 8.5
      ? "border-red-600"
      : movie.vote_average >= 7
      ? "border-green-700"
      : "border-yellow-300";

  let textColour = itemtype == "scroller" ? "black" : "#d7d7d7";
  let itemColor = itemtype == "scroller" ? "white" : "#3e4141";

  let date =
    movie.media_type == "tv"
      ? movie.first_air_date.slice(0, 4)
      : movie.release_date.slice(0, 4);
  let media_type = movie.media_type == "tv" ? "TV series" : "Movie";

  return (
    // bg- #3e4141
    <div
      className={`  w-56  p-1  flex justify-center rounded-md bg-[${itemColor}] gap-x-28`}
    >
      <div className="w-[99%] ">
        <div>
          <img
            className="xsm:max-h-[250px] w-full rounded-md max-h-[300px]"
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          ></img>
        </div>
        <div className="relative top-6 left-3">
          <span
            className={`text-white border-[2.5px] w-10 h-10 
            flex justify-center items-center 
             ${vote_color} rounded-[100%] bg-[black] p-1  font-bold text-lg absolute bottom-0 `}
          >
            {Number.isInteger(movie.vote_average)
              ? movie.vote_average
              : movie.vote_average.toFixed(1)}
          </span>
        </div>
        {/* min-h-[80px] flex flex-col justify-between */}
        {/*text col [#d7d7d7]  */}
        <div className={`text-[${textColour}] font-oxygen p-1 mt-5  `}>
          <p className="text-lg ">{movie.title ? movie.title : movie.name}</p>
          <div className="flex flex-wrap justify-between mt-1">
            <div>
              <span className="mr-2">{date}</span>
              {/* <span>
              {movie.vote_average} <img className="w-4 h-8 inline pb-1" src={star}></img>
            </span> */}
            </div>

            <p className="font-extralight inline border border-spacing-0 px-1 border-dashed">
              {media_type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;

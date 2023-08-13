import React from "react";
import { useEffect } from "react";

//item type prop to dynamically change the color for scroller and non scroller movie item

function MovieItem({ movie, itemtype = "movie" }) {



  let vote_color =
    movie.vote_average >= 8.5
      ? "border-red-600"
      : movie.vote_average >= 7
      ? "border-green-700"
      : "border-yellow-300";

  let textColour = itemtype == "scroller" ? "text-black" : "text-[#d7d7d7]";
  let itemColor = itemtype == "scroller" ? "bg-none" : "bg-[#3e4141]";

  let poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://www.movienewz.com/img/films/poster-holder.jpg";

  let date =
    movie.media_type == "tv" || itemtype == "series"
      ? movie.first_air_date.slice(0, 4)
      : movie.release_date && movie.release_date != ""
      ? movie.release_date.slice(0, 4)
      : "";

  let media_type = movie.media_type == "tv" ? "TV series" : "Movie";

  return (
    <div
      className={`${
        itemtype == "scroller" ? "w-40" : "w-[46%]"
      } mbl:w-52 xl:w-60  p-[0.3rem]  flex justify-center rounded-md ${itemColor} `}
    >
      <div className="w-[99%] ">
        <div>
          <img
            className="xsm:max-h-[250px] w-full rounded-md max-h-[300px]"
            src={poster}
          ></img>
        </div>
        { movie.vote_average>=0 && 
          <div className="relative top-6 left-3 ">
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
        }


        <div className={`${textColour} font-oxygen p-1 mt-5  `}>
          <p className="xsm:text-md sm1:text-lg font-bold">
            {movie.title ? movie.title : movie.name}
          </p>
          <div className="flex flex-wrap justify-between mt-1">
            <div>
              <span className="mr-2">{date}</span>
            </div>

            <p className="font-semibold inline border border-spacing-0 px-1 border-dashed">
              {media_type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;

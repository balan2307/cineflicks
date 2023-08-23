import React from "react";

//item type prop to dynamically change the color for scroller and non scroller movie item
import { useContext } from "react";
import watchListContext from "../../store/watchlist-context";
import { useNavigate } from "react-router-dom";
import WatchlistBtn from "../utils/WatchlistBtn";
import ItemVote from "./ItemVote";

function MovieItem({ movie, itemtype = "movie" }) {

 
  const navigate=useNavigate();



  // console.log("item render")
  const ctx = useContext(watchListContext);

  const itemPresent = ctx.list.find((item) => item.id == movie.id);
  const marked = itemPresent ? true : false;


  let textColour = itemtype == "scroller" ? "text-black" : "text-[#d7d7d7]";
  let itemColor = itemtype == "scroller" ? "bg-none" : "bg-[#3e4141]";
  

  let poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://www.movienewz.com/img/films/poster-holder.jpg";

  let date =
    movie.media_type == "tv" || itemtype == "series"
      ? ((movie.first_air_date && movie.first_air_date!="") ? movie.first_air_date.slice(0, 4) : "")
      : ((movie.release_date && movie.release_date != "")
      ? movie.release_date.slice(0, 4)
      : "");



  let media_type = (movie.media_type == "tv" || itemtype=="series" )? "TV series" : "Movie";


  function navToDetailPage()
  {
    if(media_type=="Movie")
    {
      navigate(`/movies/${movie.id}`)

    }
    else  navigate(`/tvshows/${movie.id}`)
  }

  return (
    <div
      className={`${
        itemtype == "scroller" ? "w-40" : "w-[46%]"
      } mbl:w-52 xl:w-56  p-[0.3rem]  flex justify-center rounded-md ${itemColor} `}
      onClick={navToDetailPage}
    >
      <div className="w-[99%] ">
        <div>
          <img
            className="xsm:max-h-[250px] w-full rounded-md max-h-[260px]"
            src={poster}
          ></img>
        </div>
        {movie.vote_average >= 0 && <ItemVote vote={movie.vote_average} pagetype="regular" />}

        <div className=" flex flex-col items-end ">
          {!marked && <WatchlistBtn itemtype={itemtype} movie={movie} btnStatus={false} />}
          {marked && <WatchlistBtn itemtype={itemtype} movie={movie} btnStatus={true}/>}
        </div>

        

        <div className={`${textColour} font-oxygen p-1 mt-5 `}>
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

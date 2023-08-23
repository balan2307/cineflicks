import React from 'react'
import watch from "../../assets/watch.svg";
import watchns from "../../assets/watch-ns.svg"
import watched from "../../assets/watched.svg";
import watched2 from "../../assets/watched-scroller.svg";
import { useContext } from 'react';
import watchListContext from "../../store/watchlist-context";


function WatchlistBtn({itemtype,btnStatus,movie}) {

  const ctx = useContext(watchListContext);
  console.log("moviee ",movie)
  
  function RemoveFromWatchlist(e)
  {
    console.log("clicked remeove")
    e.stopPropagation()
    ctx.removeItem(movie)
  }

  function addToWatchList(e)
  {
    console.log("clicked add")
    e.stopPropagation()
    ctx.addItem(movie)
  }

    if(!btnStatus)
    {
        return ( <button className="text-white" onClick={(e)=>addToWatchList(e)}>
        <img src={`${itemtype == "scroller" ? watch : watchns}`} className="w-8 h-8"></img>
      </button>)
    }
    else
    {
      return(  <button
        className="text-white"
        onClick={(e)=>RemoveFromWatchlist(e)}
      >
        <img
          src={`${itemtype == "scroller" ? watched2 : watched}`}
          className="w-[1.9rem] h-8"
        ></img>
      </button>)
      
    }



}

export default WatchlistBtn

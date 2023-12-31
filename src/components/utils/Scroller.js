import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import { useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import { useState } from "react";
import LoaderIcon from './LoaderIcon'


const API_KEY = process.env.REACT_APP_API_KEY;


function Sroller({ header, toprated, url }) {

  const [loading,setLoading]=useState(false)
  
  function setScrollerData(movies) {
    console.log("called");
    setMovies(movies);
    setLoading(false)
  }



  const [movies, setMovies] = useState([]);

  const { sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    setLoading(true)
    const response = fetchTasks(
      `https://api.themoviedb.org/3/movie/top_rated?&api_key=${API_KEY}&page=1`,
      setScrollerData
    );
  }, [fetchTasks]);

  return (
    
    <>
    
     {/* {loading && <LoaderIcon></LoaderIcon>} */}
     { <>
     <h1 className="xsm:text-2xl text-3xl mt-10 ml-[3%] mb-6 font-gotham font-medium text-black">
        Top rated
      </h1>
      <div
        className={` bg-scroller bg-cover bg-no-repeat bg-bottom px-[3%] toprated grid grid-flow-col gap-2 grid-auto-columns: minmax(0, 1fr) overflow-x-auto`}
      >
        {toprated.map((movie) => {
          return (
            <MovieItem
              className=" "
              itemtype={"scroller"}
              movie={movie}
              key={movie.id}
            ></MovieItem>
          );
        })}
      </div>
     </>}
    </>
  );
}

export default Sroller;

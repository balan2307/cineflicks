import React from "react";
import MovieItem from "../components/MovieItem";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";


function Trending() {
  
  const {results:movies} = useLoaderData();

 

  return (
    <div className="flex gap-6 flex-wrap justify-around">
      {movies.map((movie)=>{
        return <MovieItem movie={movie} key={movie.id}></MovieItem>
      })}
 
    </div>
  );
}

export const loader = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json"
    },
  };

  const res = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?&api_key=7058204019b40bcb9d3f847e9171e702&page=1"
  ,options);
  const response = await res.json();
  return response;
};

export default Trending;

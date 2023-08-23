import React from "react";
import MovieItem from "../MovieItem/MovieItem";

function ListMovies({movies,pagetype}) {
  return (
    <div className="xsm:justify-center sm1:justify-around flex gap-x-1 gap-y-4 flex-wrap mb-10">
      {movies.map((movie) => {
        return (
          <MovieItem
            movie={movie}
            key={movie.id}
            itemtype={pagetype}
          ></MovieItem>
        );
      })}
    </div>
  );
}

export default ListMovies;

import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import Genre from "./Genre";
import { json } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";

import { useThrowAsyncError } from "../services/asyncErrorHandler";


const intialState = {
  genresId: [],
};

function genreReducer(state, action) {

 

  if (action.type == "ADD_ID") {
    return { genresId: [action.payload, ...state.genresId] };
  }
  if (action.type == "REMOVE_ID") {
    const newGenres = state.genresId.filter((id) => id != action.payload);
    return { genresId: newGenres };
  }
}

function GenreFilter({
  setmovies,
  setpages,
  page,
  genreUrl,
  genreItemsUrl,
  setloading,
}) {
  const [genres, setGenres] = useState([]);
  const throwAsyncError=useThrowAsyncError();

  const [state, dispatch] = useReducer(genreReducer, intialState);

  function addId(id) {
    dispatch({ type: "ADD_ID", payload: id });
  }

  function removeId(id) {
    dispatch({ type: "REMOVE_ID", payload: id });
  }

  async function getGenres() {
    try {
      setloading(true)
      const response = await fetch(genreUrl);

      if (!response.ok) {
        // console.log("resok ",response)
        throw json({ message: "Could not fetch movies" }, { status: 500 });
      }

      const data = await response.json();
      

        setGenres(data.genres);

      
     
    } catch (e) {

      throwAsyncError(e);
      console.log("error info",e)
      return <ErrorPage />
   
    }
  }

  useEffect(() => {
      getGenres();
   
  }, []);

  useEffect(() => {
    
    async function filterMovie() {
      const response = await fetch(
        `${genreItemsUrl}&with_genres=${state.genresId.toString()}`
      );

      if (!response.ok) {
        console.log("response ok ", response.ok);
        throw json({ message: "Could not fetch movies" }, { status: 500 });
      } else {
        const data = await response.json();
        setmovies(data.results);
        setpages(data.total_pages);
   
          setloading(false)

        // setMovies(data.results)
   
      }
    }

    filterMovie();
  }, [state.genresId, page]);
  return (
    <div className=" xsm:mx-[3%] mx-[3%] flex flex-wrap gap-2 rounded-md">
      {genres.map((genre) => (
        <Genre
          key={genre.id}
          genre={genre}
          addId={addId}
          removeId={removeId}
        ></Genre>
      ))}
    </div>
  );
}

export default GenreFilter;

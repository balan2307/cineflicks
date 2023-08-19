import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import Genre from "./Genre";

const API_KEY = process.env.REACT_APP_API_KEY;

const intialState = {
  genresId: [],
};

function genreReducer(state, action) {

  if ((action.type == "ADD_ID")) {
    return { genresId: [action.payload, ...state.genresId] };
  }
  if ((action.type == "REMOVE_ID")) {
    const newGenres=state.genresId.filter((id) => id != action.payload)
    return { genresId:newGenres };
  }
}

function GenreFilter({setmovies,setpages,page,genreUrl,genreItemsUrl}) {

  console.log("Page ",page)
  const [genres, setGenres] = useState([]);

  const [state, dispatch] = useReducer(genreReducer, intialState);

  function addId(id) {
    dispatch({type:"ADD_ID", payload:id});
   
  }

  function removeId(id) {
    dispatch({type:"REMOVE_ID",payload:id});

  }

  async function getGenres() {
    const response = await fetch(genreUrl);
    const data = await response.json();
    console.log("Res ", data.genres);
    setGenres(data.genres);
  }

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    async function filterMovie() {
      const response = await fetch(
        `${genreItemsUrl}&with_genres=${state.genresId.toString()}`
      );
      const data = await response.json();
      setmovies(data.results);
      setpages(data.total_pages)
      // setMovies(data.results)
      console.log("filter ", data);
    }

    filterMovie();
  }, [state.genresId,page]);
  return (
    <div className=" xsm:mx-[3%] mx-[3%] flex flex-wrap gap-2 rounded-md">
      {genres.map((genre) => (
        <Genre key={genre.id} genre={genre} addId={addId} removeId={removeId}></Genre>
      ))}
    </div>
  );
}

export default GenreFilter;

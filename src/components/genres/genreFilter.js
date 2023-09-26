import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import Genre from "./Genre";
import useHttp from "../../hooks/useHttp";
import GenreFilterSkeleton from "./genreFilterSkeleton";

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
  const { sendRequest: getGenres ,loading:loadingGenre} = useHttp();

  const { sendRequest: getFilteredMovies ,loading:loadingMovies } = useHttp();
  const [delay,setDelay]=useState(300);


 
  // useEffect(()=>{
  

  //     setloading(loadingMovies)
  

  // },[loadingMovies])

  const [state, dispatch] = useReducer(genreReducer, intialState);

  function addId(id) {
    dispatch({ type: "ADD_ID", payload: id });
  }

  function removeId(id) {
    dispatch({ type: "REMOVE_ID", payload: id });
  }

  function setGenresList(response) {
    setloading(true)
    // setTimeout(()=>{
      setGenres(response.genres);

    // },400)
  }

  function setFilteredList(response) {

     setTimeout(()=>{

      setmovies(response.results);

     },250)

    setpages(response.total_pages);

    // setTimeout(()=>{
      setloading(false)

    // },500)
    // setloading(loadingMovies)
  }

  
  useEffect(() => {
    getGenres(genreUrl, setGenresList);
  }, [getGenres]);

  useEffect(() => {
    // setloading(loadingMovies)
    getFilteredMovies(
      `${genreItemsUrl}&with_genres=${state.genresId.toString()}`,
      setFilteredList
    );

    
  }, [state.genresId, page,getFilteredMovies]);


  const filterList= <div className=" xsm:mx-[3%] mx-[3%] flex flex-wrap gap-3 rounded-md">
  {genres.map((genre) => (
    <Genre
      key={genre.id}
      genre={genre}
      addId={addId}
      removeId={removeId}
    ></Genre>
  ))}
</div>


  return (
    
   <>
    { !genres.length ? <GenreFilterSkeleton></GenreFilterSkeleton> : filterList }
    {/* <GenreFilterSkeleton></GenreFilterSkeleton> */}
   </>
   
  );

}

export default GenreFilter;

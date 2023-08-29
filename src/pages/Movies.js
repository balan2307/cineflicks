import React from "react";
import ListMovies from "../components/listmovies/ListMovies";
import Paginate from "../components/utils/Paginate";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GenreFilter from "../components/genres/genreFilter";
import LoaderIcon from "../components/utils/LoaderIcon";
import SkeleteonItem from "../components/MovieItem/SkeleteonItem";

const API_KEY = process.env.REACT_APP_API_KEY;


function Movies({ nav: pagetype }) {
  // const { movies, pages } = useLoaderData();
 
  const [movies, setmovies] = useState([]);
  const [pages, setpages] = useState([]);
  const [loading, setloading] = useState(false);

  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const movieGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  const movieList = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;

  useEffect(() => {
    if (!status) {
      setStatus(true);
      return;
    }
    navigate(`/movies?page=${page}`);

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

  return (
    <>
      <GenreFilter
        setmovies={setmovies}
        setpages={setpages}
        page={page}
        genreUrl={movieGenre}
        genreItemsUrl={movieList}
        setloading={setloading}
      ></GenreFilter>

      <div className="xsm:mx-[1%] mx-[3%]">
        <h1 className="xsm:text-2xl text-3xl mt-10 ml-[0.75rem] mb-6 font-gotham font-medium text-black">
          Movie
        </h1>
        {!movies.length ?  <SkeleteonItem></SkeleteonItem>
        :<ListMovies movies={movies} pagetype={pagetype} ></ListMovies>   }


        {/* <SkeleteonItem></SkeleteonItem> */}
        

        
       
       
          
     

        {!loading && <Paginate
          onPageChange={(e) => setPage(e)}
          pageCount={parseInt(pages) > 500 ? 200 : parseInt(pages)}
        ></Paginate>}
      </div>
    </>
  );
}

export default Movies;

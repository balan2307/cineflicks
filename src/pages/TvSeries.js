import React from "react";
import ListMovies from "../components/listmovies/ListMovies";
import Paginate from "../components/utils/Paginate";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GenreFilter from "../components/genres/genreFilter";
const API_KEY = process.env.REACT_APP_API_KEY;
function TvSeries({ nav: pagetype }) {

  // const { series, pages } = useLoaderData();
  const [movies, setmovies] = useState([]);
  const [pages, setpages] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const seriesGenre= `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`
  const seriesList= `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`

  useEffect(() => {
    if (!status) {
      setStatus(true);
      return;
    }
    navigate(`/tvshows?page=${page}`);

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

  return (
    <>
      <GenreFilter
        setmovies={setmovies}
        setpages={setpages}
        page={page}
        genreUrl={seriesGenre}
        genreItemsUrl={seriesList}

      ></GenreFilter>
      <div className="xsm:mx-[1%] mx-[3%]">
        <h1 className="xsm:text-2xl text-3xl mt-10 ml-[0.75rem] mb-6 font-gotham font-medium text-black">
          Series
        </h1>
        <ListMovies movies={movies} pagetype={pagetype}></ListMovies>

        <Paginate
          onPageChange={(e) => setPage(e)}
          pageCount={parseInt(pages) > 500 ? 200 : parseInt(pages)}
        ></Paginate>
      </div>
    </>
  );
}

export default TvSeries;

import React from "react";
import MovieItem from "../components/MovieItem";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import Paginate from "../components/utils/Paginate";
import { useNavigate, createSearchParams } from "react-router-dom";



function DisplayMovies(props) {
  const navigate = useNavigate();
  const pagetype=props.nav; 

  const { movies, toprated } = useLoaderData();

  const [page, setPage] = useState(0);
  const pageHeader=pagetype[0].toUpperCase() + pagetype.slice(1)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

  function pageClicked(pg) {
    const params = {
      page: pg,
    };
    const options = {
      pathname: `/${pagetype}`,
      search: `?${createSearchParams(params)}`,
    };
    navigate(options, { replace: true });

    setPage(pg);
  }



  return (
    <>
     
      { pagetype=='movies' &&
        <>
         
         <h1 className="text-3xl mt-10 ml-12 mb-6 font-gotham font-bold text-black">
         Top rated
       </h1>
        <div className={` bg-scroller bg-cover bg-no-repeat bg-bottom px-[3%] toprated grid grid-flow-col gap-2 grid-auto-columns: minmax(0, 1fr) overflow-x-auto`}>
          {toprated.map((movie) => {
            return (
              <MovieItem className=" " itemtype={'scroller'} movie={movie} key={movie.id}></MovieItem>
            );
          })}
        </div>
        </>
      }

      <div className="mx-[3%]">
      <h1 className="text-3xl mt-10 ml-5 mb-6 font-gotham font-bold text-black">
       {pageHeader}
      </h1>
      <div className="flex gap-6 flex-wrap justify-around mb-10">
        {movies.map((movie) => {
          return <MovieItem movie={movie} key={movie.id} itemtype={pagetype}></MovieItem>;
        })}
      </div>

      <Paginate onPageChange={pageClicked} pageCount={200}></Paginate>
      </div>
    </>
  );
}

export const loader = async ({ request, params }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;

  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?&api_key=7058204019b40bcb9d3f847e9171e702&page=${page}`,
    options
  );
  const response = await res.json();
  return response;
};

export default DisplayMovies;
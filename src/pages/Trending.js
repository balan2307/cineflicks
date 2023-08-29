import React from "react";
import { useAsyncError, useLoaderData } from "react-router-dom";
import Paginate from "../components/utils/Paginate";
import ListMovies from "../components/listmovies/ListMovies";
import Scroller from '../components/utils/Scroller'
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useThrowAsyncError } from "../components/services/asyncErrorHandler";

function Trending({nav:pagetype}) {


  const throwAsyncError=useThrowAsyncError();


  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(false);
  const navigate=useNavigate();

  const { movies, toprated, pages } = useLoaderData();

  useEffect(() => {
    if (!status) {
      setStatus(true);
      return;
    }
    navigate(`/trending?page=${page}`);

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

    //  throw new Error("SMGW")
    // throwAsyncError("error")
  
  return (
    <>
      <Scroller header="Top rated" toprated={toprated}></Scroller>

      <div className="xsm:mx-[1%] mx-[3%]">
        <h1 className="xsm:text-2xl text-3xl mt-10 ml-[0.75rem] mb-6 font-gotham font-medium text-black">
          Trending
        </h1>
        <ListMovies movies={movies } pagetype={pagetype}></ListMovies>

        <Paginate
          onPageChange={(e)=>setPage(e)}
          pageCount={parseInt(pages) > 500 ? 200 : parseInt(pages)}
        ></Paginate>
      </div>
    </>
  );
}

export default Trending;

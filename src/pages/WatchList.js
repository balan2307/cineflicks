import React from "react";
import { useContext } from "react";
import watchlistcontext from "../store/watchlist-context";
import { useLocation,useNavigate  } from "react-router-dom";
import Paginate from "../components/utils/Paginate";
import ListMovies from "../components/listmovies/ListMovies";

function WatchList({ nav }) {
  const pagetype = nav;
  const navigate = useNavigate();
  const ctx = useContext(watchlistcontext);
  const search = useLocation().search;
  const path = useLocation().pathname;

  const page = new URLSearchParams(search).get("page") || 1;
  const limit = 5;

  const total = ctx.list.length;
  const pages = Math.ceil(total / limit);

  let start = limit * page - limit;

  const movies = ctx.list;
  const content = movies.slice(start, start + limit);

  function pageClicked(pg) {
    console.log("page ", pg);
    navigate(`${path}?page=${pg}`);
  }

  return (
    <>
      <div className="xsm:mx-[1%] mx-[3%]">
        <h1 className="xsm:text-2xl text-3xl mt-10 ml-[0.75rem] mb-6 font-gotham font-medium text-black">
          watchlist
        </h1>
        <ListMovies movies={content} pagetype={pagetype}></ListMovies>
      </div>

      <Paginate
        onPageChange={pageClicked}
        pageCount={parseInt(pages)}
      ></Paginate>
    </>
  );
}

export default WatchList;

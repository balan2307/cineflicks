import React from "react";
import {
  useLoaderData,
  Await,
  useLocation,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { useState, useEffect} from "react";
import Paginate from "../components/utils/Paginate";
import ListMovies from "../components/listmovies/ListMovies";

function DisplayMovies(props) {
  const navigate = useNavigate();
  const pagetype = props.nav;

  const location = useLocation();

  const { movies, pages } = useLoaderData();

  const [page, setPage] = useState(1);


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

  const queryParams = new URLSearchParams(window.location.search);

  function pageClicked(pg) {
    let params = {
      q: queryParams.get("q"),
      page: pg,
    };

    let options = {
      pathname: `${location.pathname}`,
      search: `?${createSearchParams(params)}`,
    };

    navigate(options, { replace: true });

    setPage(pg);
  }

  return (
    <>
      <div className="xsm:mx-[1%] mx-[3%]">
        <h1 className="xsm:text-2xl text-3xl mt-10 ml-[0.75rem] mb-6 font-gotham font-medium text-black">
          Search
        </h1>
        <ListMovies movies={movies} pagetype={pagetype}></ListMovies>

        <Paginate
          onPageChange={pageClicked}
          pageCount={parseInt(pages) > 500 ? 200 : parseInt(pages)}
        ></Paginate>
      </div>
    </>
  );
}

export default DisplayMovies;

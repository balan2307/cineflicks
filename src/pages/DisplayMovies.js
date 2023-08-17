import React from "react";
import {
  useLoaderData,
  Await,
  useLocation,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import Paginate from "../components/utils/Paginate";
import Scroller from "../components/utils/Sroller";
import ListMovies from "../components/listmovies/ListMovies";

function DisplayMovies(props) {
  const navigate = useNavigate();
  const pagetype = props.nav;
  const location = useLocation();

  const { results, toprated, pages } = useLoaderData();

  const [page, setPage] = useState(0);
  const pageHeader = pagetype[0].toUpperCase() + pagetype.slice(1);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

  const queryParams = new URLSearchParams(window.location.search);

  function pageClicked(pg) {
   
    let params1 = {
      page: pg,
    };

    let params2 = {
      q: queryParams.get("q"),
      page: pg,
    };

    let options = {
      pathname: `${location.pathname}`,
      search: `?${
        queryParams.get("q")
          ? createSearchParams(params2)
          : createSearchParams(params1)
      }`,
    };

    navigate(options, { replace: true });

    setPage(pg);
  }

  return (
    <Suspense
      fallback={
        <div className="w-[60%]  mb-48 flex justify-center ">
          <p className="align-middle ">Loading</p>
        </div>
      }
    >
      <Await resolve={results}>
        {({ movies, pages, toprated }) => {
          return (
            <>
              {pagetype === "movies" && (
                <>
                  {toprated && (
                    <Scroller header="Top rated" toprated={toprated}></Scroller>
                  )}
                </>
              )}

              <div className="xsm:mx-[1%] mx-[3%]">
                <h1 className="xsm:text-2xl text-3xl mt-10 ml-[0.75rem] mb-6 font-gotham font-medium text-black">
                  {pageHeader}
                </h1>
                <ListMovies movies={movies} pagetype={pagetype}></ListMovies>

                <Paginate
                  onPageChange={pageClicked}
                  pageCount={parseInt(pages) || 200}
                ></Paginate>
              </div>
            </>
          );
        }}
      </Await>
    </Suspense>
  );
}

export default DisplayMovies;



import { defer } from "react-router-dom";

const API_KEY=process.env.REACT_APP_API_KEY

 const loadMovies = async (request) => {
  
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
  
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || 1;
  
  
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?&api_key=${API_KEY}&page=${page}`,
      options
    );

    const top=await fetch(`https://api.themoviedb.org/3/movie/top_rated?&api_key=${API_KEY}&page=1`,options);

    const response = await res.json();
    const topresponse=await top.json();
    console.log("res",response.results,topresponse)
    return {movies:response.results,toprated:topresponse.results};
  };



  export const Moviesloader = async ({ request, params }) => {

    return defer({
      results:await loadMovies(request)
    })
  
 
  };


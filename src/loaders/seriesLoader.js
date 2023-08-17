
import { defer } from "react-router-dom";
const API_KEY=process.env.REACT_APP_API_KEY

const loadSeries = async (request) => {
  
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
  
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || 1;
  
  
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/popular?&api_key=7058204019b40bcb9d3f847e9171e702&page=${page}`,
      options
    );

    // const top=await fetch('https://api.themoviedb.org/3/movie/top_rated?&api_key=7058204019b40bcb9d3f847e9171e702&page=1',options);

    const response = await res.json();
    // const topresponse=await top.json();
    console.log("res",response.results)
    return {movies:response.results};
  };






  export const seriesLoader = async ({ request, params }) => {

    return defer({
      results:await loadSeries(request)

    })

  };


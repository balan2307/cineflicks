import { json } from "react-router-dom";
import { defer } from "react-router-dom";
const API_KEY = process.env.REACT_APP_API_KEY;

export const Trendingloader = async ({ request, params }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;

  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?&api_key=${API_KEY}&page=${page}`,
    options
  );

  const top = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?&api_key=${API_KEY}&page=1`,
    options
  );

  const response = await res.json();
  const topresponse = await top.json();
  if((response.ok!=undefined && !response.ok) || (topresponse.ok!=undefined && !topresponse.ok))
  {
     console.log(response ,topresponse.ok)
     throw json({message:"Could not fetch movies"},{status:500})
  }
  else
  {
  const pages = response.total_pages;
  return { movies: response.results , toprated: topresponse.results ,pages:pages };
  }

};

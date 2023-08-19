import { defer } from "react-router-dom";
const API_KEY = process.env.REACT_APP_API_KEY;

export const seriesLoader = async ({ request, params }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;

  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?&api_key=${API_KEY}&page=${page}`,
    options
  );

  const response = await res.json();
  const pages =response.total_pages;

  return { series: response.results ,pages:pages};
};

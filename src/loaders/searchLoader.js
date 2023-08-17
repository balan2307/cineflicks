


import { defer } from "react-router-dom";

const API_KEY=process.env.REACT_APP_API_KEY
 const loadSearch=async(request)=>{

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || 1;
    const search = url.searchParams.get("q");
  
  
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${search}&api_key=${API_KEY}&page=${page}`,
      options
    );
    const response = await res.json();
    
    const filtered=response.results.filter((res)=>res.media_type!="person")
    const pages=response.total_pages
    console.log(response.results,filtered)

    return {movies:filtered,pages:pages};
}


export const Searchloader =async({request,params}) => {

  return defer({
    results:await loadSearch(request)

  })

  };



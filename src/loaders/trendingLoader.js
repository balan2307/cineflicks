
import { json } from "react-router-dom";
import { defer } from "react-router-dom";
const API_KEY=process.env.REACT_APP_API_KEY

 const loadTrending = async (request) => {

  console.log("trending loader")

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
      const response = await res.json();
      return {movies:response.results};


  // const response = await fetch("http://localhost:8080/events");

  // if (!response.ok) {
  //   // setError('Fetching events failed.')
  //   // throw new Response(JSON.stringify({message:"Page not found"}),{status:500})
  //   throw json({ message: "Page not found" }, { status: 500 });
  // } else {
  //   const resData = await response.json();
  //   console.log("res",resData)
  //   return resData.events;
  // }
    };








export const Trendingloader = ({request}) => {

    return defer({
      results:loadTrending(request)

    })


  };

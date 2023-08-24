import React, { useEffect, useState } from "react";
import LoaderIcon from "../components/utils/LoaderIcon";
import { useLocation, useParams } from "react-router-dom";
import WatchlistBtn from "../components/utils/WatchlistBtn";
import watchListContext from "../store/watchlist-context";
import { useContext } from "react";
import ItemVote from "../components/MovieItem/ItemVote";

const API_KEY = process.env.REACT_APP_API_KEY;

function DetailPage() {
  const ctx = useContext(watchListContext);

  let { id } = useParams();
  console.log("ID ", id);
  const [loading, setLoading] = useState(false);

  const path = useLocation().pathname;
  const type = path.includes("movies") ? "movie" : "tv";

  const [movie, setMovie] = useState([]);
  const [newmovie, setNewMovie] = useState([]);
  const [genres, setgenres] = useState([]);

  const itemPresent = ctx.list.find((item) => item.id == movie.id);
  const marked = itemPresent ? true : false;

  console.log("backdrop ", movie.backdrop_path);
  useEffect(() => {
    let mounted = true;
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setLoading(true);

    const fetchDetail = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`
      );
      const data = await response.json();

      let addmovie = {
        title: data.title,
        id: data.id,
        poster_path: data.poster_path,
        vote_average: data.vote_average,
        release_date: data.release_date,
        genres: data.genres,
      };

      data.genres.forEach((gen) => {
        if (mounted) setgenres((genre) => [...genre, gen.name]);
      });
      setNewMovie(addmovie);

      setMovie(data);
      setLoading(false);
    };

    fetchDetail();

    return () => {
      mounted = false; // ✅ unset flag when component unmounts
    };
  }, []);

  let poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://www.movienewz.com/img/films/poster-holder.jpg";

  let bgimage = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path} `
    : "";

  const title = type == "movie" ? movie.title : movie.name;

  const runTimeCalc =
    type == "tv"
      ? movie.episode_run_time && movie.episode_run_time.length != 0
        ? movie.episode_run_time
        : 0
      : movie.runtime;

  const calcReleaseDate =
    type == "tv" ? movie.first_air_date : movie.release_date;

  function setRunTime(runtime) {
    if (!runtime) return;

    if (runtime < 60) {
      return `${runtime} m`;
    } else {
      const hours = Math.floor(runtime / 60);
      const minutes = runtime % 60;

      const h = hours > 0 ? `${hours?.toFixed()}h` : "";
      const m = minutes > 0 ? ` ${minutes?.toFixed()}m` : "";

      return `${h} ${m}`;
    }
  }

  function setDate(date) {
    if (date == undefined) return;
    const release_date = date.split("-");
    return `${release_date[2]}/${release_date[1]}/${release_date[0]}`;
  }

  return (
    <>
      {console.log("image ", bgimage)}
      {loading && <LoaderIcon></LoaderIcon>}
      {!loading && (
        //  style={{ backgroundImage: `url(${bgimage})`}}
        <div className={`flex flex-col md:flex-row mx-5 bg-right bg-cover   `}>
          {/* <div className="w-full h-full flex  justify-center items-center backdrop-brightness-[0.5]"> */}
          <div className="poster md:w-[20%] flex justify-center  ">
            <img className="" src={poster}></img>
          </div>

          <div className="details md:w-[80%] p-4 font-rem ">
            <div className="mt-10">
              <p className="font-semibold text-2xl md:text-3xl mb-1">{title}</p>
              <div className="flex flex-wrap ">
                {/* <span className="border border-gray-500 p-[0.2rem] text-sm ">
                PG-18
              </span> */}
                <span className="ml-2">{setDate(calcReleaseDate)}</span>
                <p className="ml-2 break-all">{genres.toString()}</p>
                <span className="ml-2">{setRunTime(runTimeCalc)}</span>
              </div>
            </div>

            <div className="mt-2 flex gap-3">
              {newmovie.vote_average >= 0 && (
                <ItemVote vote={newmovie.vote_average} size={"lg"} />
              )}
              <span className="flex items-center font-semibold">
                User Score
              </span>
              {!marked && (
                <WatchlistBtn
                  itemtype="scroller"
                  btnStatus={false}
                  movie={newmovie}
                />
              )}
              {marked && (
                <WatchlistBtn
                  itemtype="scroller"
                  btnStatus={true}
                  movie={newmovie}
                />
              )}
            </div>
            <div className="mt-4">
              <p className="italic mb-1">{movie.tagline}</p>
              <h2 className="font-semibold">Overview</h2>
              <p className=""> {movie.overview}</p>
            </div>
          </div>
        </div>

        // </div>
      )}
    </>
  );
}

export default DetailPage;

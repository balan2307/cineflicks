import React from "react";


const API_KEY=process.env.REACT_APP_API_KEY

function genreFilter() {
  const [genres, setGenres] = useState([]);
  const [genresId, setGenresId] = useState([]);

  async function getGenres() {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    console.log("Res ", data.genres);
    setGenres(data.genres);
  }

  useEffect(() => {
    getGenres();
  }, []);

  function filterMovies(id) {
    setGenresId(() => [...genresId, id]);
  }

  useEffect(() => {
    console.log("new id", genresId);

    async function filterMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genresId.toString()}`
      );
      const data = await response.json();
      // setMovies(data.results)
      console.log("filter ", data);
    }

    filterMovie();
  }, [genresId]);
  return (
    
      <div className=" xsm:mx-[1%] mx-[10%] flex flex-wrap gap-2 rounded-md">
        {genres.map((genre) => (
          <span
            key={genre.id}
            className="cursor-pointer p-2 bg-blue-500 rounded-md text-white "
            onClick={() => filterMovies(genre.id)}
          >
            {genre.name}
          </span>
        ))}
      </div>
    
  );
}

export default genreFilter;

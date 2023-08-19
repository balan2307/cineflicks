import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import DisplayMovies from "./pages/DisplayMovies";


import { Trendingloader } from "./loaders/trendingLoader";
// import { Moviesloader } from "./loaders/moviesLoader";
// import { seriesLoader } from "./loaders/seriesLoader";
// import { Searchloader } from "./loaders/searchLoader";

import TvSeries from "./pages/TvSeries";
import Trending from "./pages/Trending";
import { Suspense } from "react";
import WatchList from "./pages/WatchList";
import Movies from "./pages/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/trending",
        element: <Trending nav={'trending'}></Trending>,
     
        loader: Trendingloader
      },
      {
        path: "/movies",
        element: <Movies nav={'movies'}></Movies>,
        // loader: (meta)=> import('./loaders/moviesLoader').then((module) => module.Moviesloader(meta)),
      },
      {
        path: "/tvshows",
        element: <TvSeries nav={'series'}></TvSeries>,
        loader:(meta)=> import('./loaders/seriesLoader').then((module) => module.seriesLoader(meta))
      },
      {
        path: "/search",
        element: <DisplayMovies nav={'search results'}></DisplayMovies>,
        loader:(meta)=> import('./loaders/searchLoader').then((module) => module.Searchloader(meta))
      },
      {
        path: "/watchlist",
        element: <WatchList nav={"WatchList"}></WatchList>,
      
      },
      {
        index:true,
        element: <Navigate to="/trending" />
       
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

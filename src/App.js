import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import DisplayMovies from "./pages/DisplayMovies";
import { Suspense } from "react";
import { Trendingloader } from "./loaders/trendingLoader";
// import { Moviesloader } from "./loaders/moviesLoader";
// import { seriesLoader } from "./loaders/seriesLoader";
// import { Searchloader } from "./loaders/searchLoader";

import TvSeries from "./pages/TvSeries";
import Trending from "./pages/Trending";
// import { Suspense } from "react";
import WatchList from "./pages/WatchList";
import Movies from "./pages/Movies";
import ErrorPage from "./pages/ErrorPage";
import DetailPage from "./pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/trending",
        element: <Trending nav={"trending"}></Trending>,

        loader: Trendingloader,
      },
      {
        path:"/movies",
        // element: <Movies nav={"movies"}></Movies>,
        children: [
          {
            index:true,
            element:<Movies nav={"movies"}></Movies>

          },
          {
            path:":id",
            element: <DetailPage></DetailPage>,
          },
          // loader: (meta)=> import('./loaders/moviesLoader').then((module) => module.Moviesloader(meta)),
        ],
      },

      {
        path: "/tvshows",
      
        children:[

          {
            index:true,
            element: <TvSeries nav={"series"}></TvSeries>,
          },
          {
            path:":id",
            element: <DetailPage></DetailPage>,
          },

        ]
        // loader:(meta)=> import('./loaders/seriesLoader').then((module) => module.seriesLoader(meta))
      },
      {
        path: "/search",
        element:<Suspense fallback={<p>Loading....</p>}> <DisplayMovies nav={"search results"}></DisplayMovies></Suspense>,
        loader: (meta) =>
          import("./loaders/searchLoader").then((module) =>
            module.Searchloader(meta)
          ),
      },
      {
        path: "/watchlist",
        element: <WatchList nav={"WatchList"}></WatchList>,
      },
      {
        index: true,
        element: <Navigate to="/trending" />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

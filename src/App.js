import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import DisplayMovies from "./pages/DisplayMovies";
// import { loader as loadPopular } from "./pages/DisplayMovies";
import { Trendingloader ,Moviesloader ,seriesLoader ,Searchloader} from "./loaders";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/trending",
        element: <DisplayMovies nav={'trending'}></DisplayMovies>,
        loader: Trendingloader,
      },
      {
        path: "/movies",
        element: <DisplayMovies nav={'movies'}></DisplayMovies>,
        loader: Moviesloader,
      },
      {
        path: "/tvshows",
        element: <DisplayMovies nav={'series'}></DisplayMovies>,
        loader:seriesLoader
      },
      {
        path: "/search",
        element: <DisplayMovies nav={'search results'}></DisplayMovies>,
        loader:Searchloader
      },
      {
        path: "",
        element: <Navigate to="/trending" />
       
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;


import './App.css';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import Trending from './pages/Trending';
import {loader as loadPopular} from './pages/Trending'

const router=createBrowserRouter([{
  path:'/',
  element:<RootLayout></RootLayout>,
  children:[
    {
      path:'/',
      element:<Trending></Trending>,
      loader:loadPopular

   }
  ]
  
}])

function App() {
  return (<RouterProvider router={router}></RouterProvider>);
}

export default App;

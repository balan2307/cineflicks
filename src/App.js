
import './App.css';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import Trending from './pages/Trending';

const router=createBrowserRouter([{
  path:'/',
  element:<RootLayout></RootLayout>,
  children:[
    {
      path:'/',
      element:<Trending></Trending>

   }
  ]
  
}])

function App() {
  return (<RouterProvider router={router}></RouterProvider>);
}

export default App;

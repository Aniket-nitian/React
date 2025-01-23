import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import { ProductCard } from './components/Productcard';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Kid from './components/Kid';
import Men from './components/Men';

const App = ()=>{
  return (
<div>
<Navbar/>
<Outlet/>
</div>
  )
}


const appRouter = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children:[
    {
      path:"/",
      element:<ProductCard/>
    },
    {
      path:"/Kid",
      element:<Kid/>
    },
    {
      path:"/Men",
      element:<Men/>
    }
  ],
  errorElement:<Error/>,
},

])



const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter}/>);
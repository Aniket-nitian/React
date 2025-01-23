import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import { ProductCard } from './components/Productcard';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Kid from './components/Kid';
import Men from './components/Men';
import ProductDetail from './components/ProductDetail';

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
    },
    {
      path:"/Product/:productId",
      element:<ProductDetail/>
    }
  ],
  errorElement:<Error/>,
},

])



const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter}/>);
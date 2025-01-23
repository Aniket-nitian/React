import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import ProductCard from './components/Productcard';
//NavBar
//Logo
//Menu Items

const App = ()=>{
  return (
<div>
<Navbar/>
<ProductCard/>
</div>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>);
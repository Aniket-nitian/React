import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{
  let theme = "Light"; //normal js variable
  const [btnName,setbtnName] = useState(theme); //react hook
  useEffect(()=>{
    
  },[])
  return <div className='navbar'>
    <h1>AJIO</h1>
    <ul className='menu-items'>
      <li><Link to="/Men">Men</Link></li>
      <li><Link to="/Women">Women</Link></li>
      <li><Link to="/Kid">Kids</Link></li>
      <li>card</li>
      <button onClick={()=>{
        setbtnName(btnName === "Light" ? "Dark" : "Light"); //btnName(now its a new variable, so we can modify const variable)
      }}>{btnName}</button>
    </ul>
  </div>
}


//default export
export default Navbar;
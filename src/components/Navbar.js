import { useState, useEffect } from "react";

const Navbar = ()=>{
  let theme = "Light"; //normal js variable
  const [btnName,setbtnName] = useState(theme); //react hook
  useEffect(()=>{
    
  },[])
  return <div className='navbar'>
    <h1>LOGO</h1>
    <ul className='menu-items'>
      <li>Men</li>
      <li>Women</li>
      <li>Kids</li>
      <li>card</li>
      <button onClick={()=>{
        setbtnName(btnName === "Light" ? "Dark" : "Light"); //btnName(now its a new variable, so we can modify const variable)
      }}>{btnName}</button>
    </ul>
  </div>
}


//default export
export default Navbar
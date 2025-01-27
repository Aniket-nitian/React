import { useState } from "react";

const Profile = (props)=>{
  const {name, address,email} = props;
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(0);
  return( 
    <div style={{
      "border": "1px solid black",
    }}>
      <h1>Functional component</h1>
      <h3>Name:{name} </h3>
      <h3>Address: {address}</h3>
      <h3>Email: {email}</h3>
      <h1>Count: {count}</h1>
      <button onClick={()=>{
        setcount(count+1);
      }}>Increment</button>
    </div>
  )
}

export default Profile;
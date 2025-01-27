//Class based components are used when we want to use state in our component.
//It has two methods: constructor and render.
//after making object of the class we can access the props using this.props.
//constructor is called first and then render method is called.

import React from "react";  
import { Skeleton } from "./Skeleton";

class ProfileClass extends React.Component {
  constructor(){
    super();   //props recived from parent component and accessed bt this.props keyword.
    
    // this.state = {   //useState variable in class based component
    //  count:0,
    //  count2:0,
    // }

    this.state = {
      userDetails:null
    }
  }

 async componentDidMount(){  //fxn run when component is loadong, rendering or running
    const data = await fetch("https://api.github.com/users/Aniket-nitian")
    const result = await data.json();
    this.setState({
      userDetails:result
    });
  }
  //we use componentDidMount() method to call APIs and fetch data from the server.
  //CDM is called at last but before CDU and CWNM.

  componentDidUpdate(){
    console.log("Component did update");
  }

  componentWillUnmount(){
    console.log("Component will unmount");
    //when u leave the page the this life cycle method is called.
  }

  render(){
      if(this.state.userDetails == null){
      return <Skeleton/>;
    }

    const {login, avatar_url} = this.state.userDetails;

    return(
      <div style={{
        "border": "1px solid black",
        "margin-top": "10px",
      }}>
      <h1>Profile Class based component</h1>
      <h3>Name: {login}</h3>
      <img src={avatar_url} alt="image" />
      {/* <h1>Count: {this.state.count}</h1>
      <button onClick={()=>{
        //you can't update state variable directly.
        this.setState({
          count: this.state.count + 1
        })
      }}>Increment</button> */}
    </div>
  )
    
  }
}

export default ProfileClass;


//In class based component we can't use hooks like useState, useEffect etc.
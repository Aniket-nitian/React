import { Component } from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

// const About = ()=>{
//   return (
//     <div>
//       <Profile name="Aniket chauhan" address="Bihar" email= "aniketchauhan@gmail.com"/>
//       <ProfileClass name="Dhoni" address="Ranchi" email= "Mahi@gmail.com"/>
//     </div>
//   )
// }

// export default About;

class About extends Component {
  constructor(){
    super();
  }

  componentDidMount(){
    console.log("Parent comoponentDidMount called");
  }

  render(){
    return(
      <div>
      <ProfileClass name="Dhoni" address="Ranchi" email= "Mahi@gmail.com"/>
      {/* <ProfileClass name="Dhoni" address="Ranchi" email= "Mahi@gmail.com"/> */}
    </div>
    )
  }
}

export default About;

/**
 * parent constructor called
 * parent render called
 * child constructor called
 * child render called
 * child constructor called
 * child render called
 * 
 * child componentDidMount called
 * child comoponentDidMount called
 * 
 * parent comoponentDidMount called
 */


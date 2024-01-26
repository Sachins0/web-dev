import User from "./User";

import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props)
        //console.log("parent constructor");

    }

 componentDidMount(){
    //console.log("parent mount");
  }

    render(){
        //console.log("parent render");
        return (
            <div>
                <h1>About Us</h1>
                <h2>This is react course</h2>
                {/* <User name={"Sachin Singh (functional)"}/> */}
                {/* <UserClass name={"First Child (class based)"} location={"Dehradun (class)"}/> */}
                <UserClass name={"Second"} location={"Noida (class)"}/>
            </div>
        )
    }
}

// const About=()=>{
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2>This is react course</h2>
//             <User name={"Sachin Singh (functional)"}/>

//             <UserClass name={"Sachin Singh (class based)"} location={"Dehradun (class)"}/>
//         </div>
//     )
// };

export default About
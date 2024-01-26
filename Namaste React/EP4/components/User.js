import { useState } from "react"

// const User=(props)=>{
 const User=({name})=>{
    const [count]=useState(0);
    const [count2]=useState(1);
    return <div className="user-card">
        {/* <h2>Name:{props.name}</h2> */}
        <h2>Count: {count}</h2>
        <h2>Count2: {count2}</h2>
        <h2>Name:{name}</h2>
        <h3>Location: Dehradun</h3>
        <h4>Contact: @sachins0</h4>
    </div>
}
export default User
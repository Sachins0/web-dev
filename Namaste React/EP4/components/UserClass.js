import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // this.state={
        //     count: 0,
        //     count2: 1
        // };
        // console.log(this.props.name+"child constructor");

        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default"
            }
        }
    }

    async componentDidMount(){
        console.log(this.props.name+"child mount");
        //API CALL

        const data=await fetch("https://api.github.com/users/sachinsingh0");
        const json=await data.json();
        this.setState({
            userInfo:json
        })
    }

    // componentDidUpdate(){
    //     console.log("component did update");
    // }

    // componentWillUnmount(){
    //     console.log("component will unmount");
    // }

    render(){
        // console.log(this.props.name+"child constructor");
        // const {name,location} =this.props;
        // const {count,count2}=this.state;

        const {login,avatar_url,location}=this.state.userInfo
        return <div className="user-card">
            {/* <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                    count2:this.state.count2+2,
                })
            }}>
                Count increases
            </button> */}
            {/* <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2> */}
            <img src={avatar_url}/>
            <h2>Username:{login}</h2>
            <h3>Location: {location==null?"India":location}</h3>
            <h4>Contact: @sachins0</h4>
        </div>
    }
}

export default UserClass;
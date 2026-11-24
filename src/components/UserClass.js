import React from "react";
import Shimmer from "./Shimmer"

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            user :null

        }

        console.log("This is Child constructor")
    }

    async componentDidMount(){

        //APi Calls
        const data = await fetch("https://api.github.com/users/Sayan2000-biki")
        const jsonData = await data.json();
        console.log(jsonData)

        this.setState ({
            user:jsonData
        })



        console.log("This is Child component did mount");
        // console.log(this.state.user.name)

          this.timer =  setInterval(() => {
            console.log("Hello wprld !")
        }, 2000)

    }

    componentDidUpdate(){
        console.log("component did update called")
    }

    componentWillUnmount(){
        console.log("clear interval called")
        clearInterval(this.timer);
    }

    render(){

        const{addr} = this.props;
  

        console.log("This is Child render");

    
        if(this.state.user == null) return <Shimmer />

        const{name} = this.state.user;

        return(
            <div>
                <h1>Name:- {name}</h1>
                <h1>This is user class{addr}</h1>
            </div>
        )
    }

}


/****
 * 1/ Constructor
 * 2/ Render
 * 3/ Loading DOM Element
 * 4/ Component did Mount 
 *      setState
 * 5/ Render the dom element again
 * 6/Component did update
 * 7/Component will unmount
 * 
 * 
 */

export default UserClass;
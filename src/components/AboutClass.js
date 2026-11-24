import React from "react";
import UserClass from "../components/UserClass";
import User from "./User";

class AboutClass extends React.Component {

    constructor(props) {
        super(props);

       

        console.log("This is Parent constructor")
    }

    componentDidMount() {

       

        console.log("This is Parent component did mount");

    }

    render() {

        console.log("this isParent render")

        


        return (
            <div>

                <h1>About Class Based Component</h1>
                {/* <UserClass addr = {"mechogram"} /> */}
                <User />
                

            </div>
        )

    }

}

export default AboutClass;


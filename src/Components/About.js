import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
class About extends Component{
    constructor(props)
    {
        super(props);
        console.log("parent constructor");
    }
    componentDidMount()
    {
        console.log("parent class mounted :");
    }
    render()
    {
        console.log("parent render");
        return(<div className="about">
            {/* <User name="DHiyanesh"/> */}
            <UserClass name={"Dhiyanesh K"} location={"Erode"} contact={"dhiyanesh177@gmail.com"}/>
        </div>)
    }
}
export default About;


// let About=()=>{
//     return(<div>
//         <p>About</p>
//         <User name={"Dhiyanesh-Fun"}/>
//         <UserClass name={"Dhiyanesh K"} location={"Erode"} contact={"dhiyanesh177@gmail.com"}/>
//     </div>);
// }
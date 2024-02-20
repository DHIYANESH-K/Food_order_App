import React from "react";
import User from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
          this.state={
            userInfo:null,
            count:0
        }
        this.a=this.props;
        console.log("child constructor");
    }
    componentWillUnmount()
    {
        console.log("component will unmount :");
    }
    componentDidUpdate()
    {
        console.log("component did update :")
    }
    componentDidMount()
    {
        console.log("child did mount :");
        let data=()=>
        {
            return new Promise((res)=>
            setTimeout(()=>
            res({name:"Dhiyanesh",location:"Erode",contact:"dhiyanesh177@gmail.com"}),5000
            ))
        }
        let getdata=()=>
        {
            data()
            .then((val)=>{
            this.setState({
                userInfo:val
            })
            }
            )
        }
        getdata();
    }
    render(){
        console.log("child render");
        if (this.state.userInfo==null)return (<div className="user-card">
        <h2>Name:</h2>
        <h3>Location:</h3>
        <h4>Contact:</h4>
        <div>
            LoggedIn user :
            {/* we can use multiple times also */}
            <User.Consumer>   
                {
                    (data)=>{console.log(data);
                    return <h1>{data.logged}</h1>
                    }
                }
            </User.Consumer>
        </div>
        <p>Class Based component</p>
        </div>)

        let {name,location,contact}=this.state.userInfo;
        
    return (<div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
        <div>
            LoggedIn user :
            <User.Consumer>
                {
                    (data)=>{console.log(data);
                    return <h1>{data.logged}</h1>
                    }
                }
            </User.Consumer>
        </div>
        <p>Class Based component</p>
    </div>);
    }
}
// class UserClass extends React.Component{
//     constructor(props)
//     {
//         super(props);
//           this.state={
//             count:0,
//             count2:1
//         }
//         this. a=this.props;
//         console.log("child constructor");
//     }
//     componentDidMount()
//     {
//         console.log("Child class mounted :");
//     }
//     render(){
//         console.log("child render");
//         let {name,location,contact}=this.a;
//         let {count,count2}=this.state;
//         return(<div className="user-card">
//         <h2>Name: {name}</h2>
//         <h3>Location: {location}</h3>
//         <h4>Contact: {contact}</h4>
//         <p>count : {count}</p>
//         <p>count2 : {count2}</p>
//         <button onClick={()=>{
//             this.setState({
//                 count :this.state.count+1,
//                 count2:this.state.count2+2
//             });
//         }}>click</button>
//         <p>Class Based component</p>
//     </div>);
//     }
// }

export default UserClass;
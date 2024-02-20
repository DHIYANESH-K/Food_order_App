import React ,{lazy,Suspense, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { useState,useEffect,useContext} from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import User from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";

const About=lazy(()=>import('./Components/About'));

let AppLayout = () => {
  let data=useContext(User)
  const [userInfo,setUserInfo]=useState(data.logged);
  useEffect(()=>{
    const data={name:"Dhiyan"}
    setUserInfo(data.name);
  },[])
  return (
    // Override the default value
    // here we are tide the usecontext with state variable
    // we can access setUserInfo anywhere

    <Provider store={appStore}>
    <User.Provider value={{logged:userInfo,setUserInfo}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </User.Provider> 
    </Provider>    
  );
};
let appRouter = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      {

        path: "",
        element: <Body />,
      },
      {
        path: "/about",
        element:<Suspense fallback={<h2>Loading.....</h2>}><About name={"Dhiyan"}/></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
    errorElement: <Error />,
  },
]);

let b = ReactDOM.createRoot(document.getElementById("root"));
b.render(<RouterProvider router={appRouter} />);

import RestaurantCard,{RestaurantCardOffer}  from "./RestaurantCard";
import { useEffect, useState,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import User from "../utils/UserContext";


let Body = () => {
  const [list, setlist] = useState([]);
  const [search_list, setsearch_list] = useState([]);
  let [search_text,setsearch_text]=useState("");
  useEffect(() => {fetchData();}, []);

  let {logged,setUserInfo}=useContext(User);

  function apiCall(){
    return fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0796991&lng=76.9997393&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  }
  function fetchData()
  {
    apiCall()
    .then((data)=>{
      return data.json();
    })
    .then((json)=>
    {
      console.log(json);
      let val = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setlist(val);
      setsearch_list(val);
    })
  }

  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false)
  {
    return <h1>offline</h1>;
  }

  return list.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="m-5 space-x-8">
        <input
          id="search"
          placeholder="search"
          className="border border-solid border-black rounded px-3"
          onChange={() => {
            const filtered_list = list.filter((val) =>
              val.info.name
                .toLowerCase()
                .includes(document.getElementById("search").value.toLowerCase())
            );
            setsearch_list(filtered_list);
          }}
          // onChange={(x)=>{console.log(search_text)
          //     setsearch_text(x.target.value)}}
        ></input>
        <button
          className="bg-violet-300 p-1 rounded-full px-3"
          onClick={() => {
            const filtered_list = list.filter((val) =>
              val.info.name
                .toLowerCase()
                .includes(document.getElementById("search").value.toLowerCase())
            );
            setsearch_list(filtered_list);
          }}>
          search
        </button>

        <button
          onClick={() => {
            const filtered_list = list.filter(
              (val) => val.info.avgRating >= 4.5
            );
            setsearch_list(filtered_list);
          }}
          className="bg-violet-300 p-1 rounded-full px-3"
        >
          Top Rated Restaurant
        </button>
        <label>UserName</label>
        <input className="border border-black pl-2" placeholder="Username" onChange={(e)=>{
          console.log(e);
          setUserInfo(e.target.value)}}></input>
      </div>
      <div className="flex flex-wrap justify-around">
        {search_list.map((restaurant, index, x) => {
          return (
            <Link key={index} to={"/restaurants/" + restaurant.info.id}>
              {
                (restaurant.info.aggregatedDiscountInfoV3!=undefined)?
                  (restaurant.info.aggregatedDiscountInfoV3.header!=undefined)?
                  <RestaurantCardOffer resData={restaurant.info}/>
                  // <WithOfferCard resData={restaurant.info}/>
                  :
                  <RestaurantCard resData={restaurant.info} />:
                  <RestaurantCard resData={restaurant.info} />
              }
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

  // fetchData();
  // let fetchData = async () => {
  //   let data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0796991&lng=76.9997393&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   let json = await data.json();
  //   let val =
  //     json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  //   setlist(val);
  //   setsearch_list(val);
  // };

// let fetchData=()=>
// {
//     let a=fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//     a.then((x)=>x.json())
//     a.then((y)=>{
//     let val=y.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
//     setlist(val)
//     })
// }

// if(list.length===0)
// {
//     return <h1>Loading...</h1>
// }

// arr=[10,20,30,40,50,60]

// let b=arr.filter((x,y,z)=>{
//     let a=document.getElementById("input").value;
//     return x>a;
// })
// arr=b;

// Conditional rendering
// if(list.length===0)
// {
//     return <Shimmer/>;
// }

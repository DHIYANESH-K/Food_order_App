import { useState, useEffect } from "react";

const useRestaurantMenu=(resId)=>{

    let [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData= async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0796991&lng=76.9997393&restaurantId="+resId)
        const json=await data.json();
        setResInfo(json.data)
    }
    return resInfo;
}
export default useRestaurantMenu;
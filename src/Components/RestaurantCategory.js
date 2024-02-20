import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ItemList from "./ItemList";
 
const RestaurantCategory=(props)=>{
    // console.log(props);
    // let [showItems,setShowItems]=useState(false);
    const handleCLick=()=>{
        // setShowItems(!showItems );
        setsShow();
    }
    let {data,showItems,setsShow}=props;
    // let {data}=props;

// lifting the state up
    return (
        <div className="flex justify-center">
            <div className="w-7/12 mt-10 p-5 bg-gray-50 shadow-lg "onClick={handleCLick}>
                <div className="flex justify-between" >
                    <div className="font-bold text-lg ">{data.title} ({data.itemCards.length})</div>
                    <div className="arrow"><FontAwesomeIcon icon={faArrowDown} /></div>
                </div>
                {showItems&&<ItemList items={data.itemCards}/>}
            </div>
        </div>)
}
export default RestaurantCategory;
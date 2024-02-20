import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

let RestaurantMenu = () => {
  let {resId}=useParams();
  let resInfo=useRestaurantMenu(resId);
  const [showIndex, setShowIndex]=useState(null);
  if (resInfo === null) return <Shimmer />;
  console.log(resInfo);
  let { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  let category=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((x)=>
  x.card.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  return (
  <div className="text-center">
      <h1 className="font-bold text-2xl mt-8 mb-2">{name}</h1>
      <p className="text-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {
        // controlled component 
        category.map((x,y)=>{return (<RestaurantCategory 
          key={y} data={x.card.card} showItems={y==showIndex && true} 
          setsShow={()=>setShowIndex(y)}/>)})
      }
    </div>
  );
};

export default RestaurantMenu;



// let RestaurantMenu=()=>{
//   let [resMenu,setResMenu]=useState(null);
//   useEffect(()=>fetchData(),[]);
//   let fetchData=async()=>{
//     let data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.01420&lng=76.99410&restaurantId=385409&catalog_qa=undefined&submitAction=ENTER");
//     let json=await data.json();
//     setResMenu(json);
//   }

//   return resMenu==null?<Shimmer/>: (
//     <div className="resMenu">
      
//       <h3 className="resName">{resMenu.data.cards[0].card.card.info.name}</h3>
//       <h4 className="Rating">{resMenu.data.cards[0].card.card.info.avgRating}</h4>
//       {
//         console.log(resMenu.data.cards[0].groupedCards.cardGroupMap.REGULAR.cards[0])
//       }
//       <ul className="menu">
//         <li>abc</li>
//         <li>xyz</li>
//       </ul>
//     </div>
//   )

// }



// var flag = 0;
  // if (
  //   resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
  //     .itemCards == undefined
  // ) {
  //   var { carousel } =
  //     resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  //     console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
  //   var flag = 1;
  // } else {
  //   var { itemCards } =
  //     resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  //     console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
  // }

      // <div className="menu">
    //   <h1>Restraunt Name :{name}</h1>
    //   <h3>{cuisines.join(",")}</h3>
    //   <h4>{costForTwoMessage}</h4>
    //   <h2>Menu</h2>
    //   <ul>
    //     {flag == 1
    //       ? carousel.map((item) => (
    //           <li key={item.dish.info.id}>{item.dish.info.name}</li>
    //         ))
    //       : itemCards.map((item) => (
    //           <li key={item.card.info.id}>{item.card.info.name}</li>
    //         ))}
    //   </ul>
    // </div>
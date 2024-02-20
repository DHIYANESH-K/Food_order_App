import { link } from "../utils/image_link";

let RestaurantCard = (props) => {
  // let s={backgroundColor:"#B1F5B0"};
  const { resData } = props;
  // console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating } = resData;
  return (
    // <div className="res_card" style={s}>
    <div className="m-5 bg-gray-100 w-[250] p-4 hover:bg-pink-200">
      <img className="rounded-lg" src={link + cloudinaryImageId}></img>
      <h2 className="font-bold font-['Consolas'] py-4 text-lg">{name}</h2>
      <h5 className="food_name">{cuisines.join(", ")}</h5>
      <h4 className="bg-green-600 w-fit rounded-sm px-2">{avgRating} stars</h4>
    </div>
  );
};

const WithOfferCard=(Restaurant)=>
{ 
  return((props)=>{
    return (
      <div>
        <h4 className="absolute bg-black text-white rounded-md">{props.resData.aggregatedDiscountInfoV3.header}</h4>
        <Restaurant resData={props.resData}/>
      </div>
    )
  })
}
export const RestaurantCardOffer=WithOfferCard(RestaurantCard);

export default RestaurantCard;

// export const WithOfferCard=(props)=>
// {
//     return(
//       <div >
//         <h4 className="absolute bg-black text-white rounded-md">{props.resData.aggregatedDiscountInfoV3.header}</h4>
//         <RestaurantCard resData={props.resData}/>
//       </div>
//     );
// }
import {link} from "../utils/image_link";
import { addItems} from "../utils/cardSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faIndianRupeeSign} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
const ItemList=({items})=>{

    let dispatch=useDispatch();
    let handleAddItem=(item)=>{
    dispatch(addItems(item))
    // {
    //     payload:"pizza";
    // }
    }
return (
    <div className="">
        {
            items.map((item)=>{
                console.log(items);
                return (
                    <div key={item.card.info.id} className="p-4 border-b-2 border-gray-300">
                        <div className="flex gap-4 justify-between py-4">
                            <div className="w-9/12">
                                <div className="flex py-2">
                                    <div className="font-medium">{item.card.info.name}  </div>
                                    <div className="font-bold">-  <FontAwesomeIcon icon={faIndianRupeeSign} /> {(item.card.info.price)==undefined?(item.card.info.defaultPrice)/100:(item.card.info.price)/100}</div>
                                </div>
                                <p className="text-xs text-left">{item.card.info.description}</p>
                            </div>
                            <div className="w-3/12 flex justify-center items-end">
                                <div className="absolute">
                                <button className="text-white bg-black px-3 py-1 rounded-lg"
                                onClick={()=>handleAddItem(item)}>Add +</button>
                                </div>
                                <img src={link+(item.card.info.imageId)} className="rounded-lg"></img>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
)
}
export default ItemList;
import {useSelector } from "react-redux";
import ItemList from "./ItemList";

let Cart=()=>{
    let itemCart=useSelector((a)=>a.cart.items);
return (
    <div className="text-center m-10">
        <div className="font-bold text-2xl">Cart</div>
        <div className="w-7/12 m-auto">
            <ItemList items={itemCart}/>
        </div>
    </div>
)
}
export default Cart;
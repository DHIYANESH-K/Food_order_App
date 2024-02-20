import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItems: (state,action)=>{
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem :(state)=>{
            state.items.pop();
        },
        clearCart :(state)=>{
            state.items.length=0;
        }
    }
})

// {
//     action:{
//         additems,

//     },
//     reducer:
// }
export const {addItems,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;
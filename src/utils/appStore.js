import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cardSlice";
let appStore = configureStore({
    reducer : {
        cart: cartReducer,
    }
}
);
export default appStore;
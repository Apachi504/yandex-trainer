import {cartReducer} from "./cart.js";
import {combineReducers} from "redux";

export const rootReducer = combineReducers  ({
    cart: cartReducer
});
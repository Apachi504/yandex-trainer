import {cartReducer} from "./cart.js";
import {combineReducers} from "redux";
import {PREVIOUS_STEP, NEXT_STEP} from "../actions/index.js";

const stepReducer = (state = 'cart', action) => {
    switch (action.type) {
        case NEXT_STEP: {
            return state === 'cart'
                ? 'delivery'
                : state === 'delivery'
                ? 'checkout'
                : state === 'checkout'
                ? 'checkout'
                : 'checkout';
        }
        case PREVIOUS_STEP: {
            return state ==='cart'
            ? 'cart'
            : state === 'delivery'
            ?'cart'
            :state ==='checkout'
            ?'delivery'
            :'cart';
        }
        default: {
            return state;
        }
    }
}
export const rootReducer = combineReducers({
    cart: cartReducer,
    step: stepReducer,
});
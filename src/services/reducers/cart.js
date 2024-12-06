import {INCREASE_ITEM, DECREASE_ITEM, DELETE_ITEM, CANCEL_PROMO, TAB_SWITCH} from '../actions/cart.js';
import {items, recommendedItems} from '../initialData.js';

const initialState = {
    items,
    recommendedItems,
    promo: '',
    promoDiscount: null,
    currentTab: 'items'
};
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TAB_SWITCH:
            return {
                ...state,
                currentTab: state.currentTab === 'items' ? 'postponed' : 'items'
            };
        case INCREASE_ITEM:
            return {
                ...state,
                items: items.map(item => {
                    if (item.id === action.id) {
                        item.qty += 1;
                    }
                    return item;
                })
            };
        case DECREASE_ITEM:
            return {
                ...state,
                items: items.map(item => {
                    if (item.id === action.id) {
                        item.qty -= 1;
                    }
                    return item;
                })
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: items.filter(item => item.id !== action.id)
            };
        case CANCEL_PROMO:
            return {
                ...state,
                promoCode: '',
                promoDiscount: null
            }
        default:
            return state;
    }
}

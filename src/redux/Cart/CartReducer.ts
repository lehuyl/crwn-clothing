import { Product } from '../../common/types';
import { CartTypes } from './CartAction';

export interface CartState {
    isVisible: boolean;
    cartItems: { [id: string]: Product };
}

const INITIAL_CART_STATE: CartState = {
    isVisible: false,
    cartItems: {},
};

export const cartReducer = (state = INITIAL_CART_STATE, action: any) => {
    switch (action.type) {
        case CartTypes.TOGGLE_CART_VISIBILITY:
            return {
                ...state,
                isVisible: !state.isVisible,
            };
        case CartTypes.ADD_ITEM:
            const cartItems = {...state.cartItems};
            const item = action.payload;

            cartItems[item.id] = cartItems[item.id]
                ? { item, quantity: cartItems[item.id].quantity + 1 }
                : { item, quantity: 1 };
                
            return {...state, cartItems};
        default:
            return state;
    }
};

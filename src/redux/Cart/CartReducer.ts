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
        case CartTypes.ADD_ITEM: {
            const cartItems = { ...state.cartItems };
            const item = action.payload;

            cartItems[item.id] = cartItems[item.id]
                ? { item, quantity: cartItems[item.id].quantity + 1 }
                : { item, quantity: 1 };

            return { ...state, cartItems };
        }
        case CartTypes.REMOVE_ITEM: {
            const id = action.payload;
            const newCartItems = { ...state.cartItems };
            const cartItem = { ...state.cartItems[id] };

            if (cartItem.quantity > 1) {
                cartItem.quantity--;
                newCartItems[id] = cartItem;

                return { ...state, cartItems: newCartItems };
            } else {
                const { [id]: _, ...otherCartIems } = state.cartItems;

                return { ...state, cartItems: otherCartIems };
            }
        }
        case CartTypes.CLEAR_ITEM_FROM_CART: {
            const id = action.payload;
            const { [id]: _, ...otherCartIems } = state.cartItems;

            return { ...state, cartItems: otherCartIems };
        }
        case CartTypes.CLEAR_CART: {
            return {
                ...state,
                cartItems: {}
            }
        }
        default:
            return state;
    }
};

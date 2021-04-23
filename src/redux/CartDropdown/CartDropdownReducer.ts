import { Item } from "../../common/types";
import { CartDropdownTypes } from "./CartDropdownActions"

interface CartDropdownState {
    isVisible: boolean;
    cartItems: Item[];
}

const INITIAL_CART_DROPDOWN_STATE: CartDropdownState = {
    isVisible: false,
    cartItems: []
}

export const cartDropdownReducer = (state = INITIAL_CART_DROPDOWN_STATE, action: any) => {
    switch (action.type) {
        case CartDropdownTypes.TOGGLE_CART_VISIBILITY:
            return {
                ...state,
                isVisible: !state.isVisible
            }
        case CartDropdownTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state;
    }
}
import { CartDropdownTypes } from "./CartDropdownActions"

interface CartDropdownState {
    isVisible: boolean;
}

const INITIAL_CART_DROPDOWN_STATE: CartDropdownState = {
    isVisible: false
}

export const cartDropdownReducer = (state = INITIAL_CART_DROPDOWN_STATE, action: any) => {
    switch (action.type) {
        case CartDropdownTypes.TOGGLE_CART_VISIBILITY:
            return {
                ...state,
                isVisible: !state.isVisible
            }
        default:
            return state;
    }
}
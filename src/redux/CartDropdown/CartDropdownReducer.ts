import { CartItem } from '../../common/types';
import { CartDropdownTypes } from './CartDropdownActions';

interface CartDropdownState {
    isVisible: boolean;
    cartItems: { [id: string]: CartItem };
}

const INITIAL_CART_DROPDOWN_STATE: CartDropdownState = {
    isVisible: false,
    cartItems: {},
};

export const cartDropdownReducer = (
    state = INITIAL_CART_DROPDOWN_STATE,
    action: any,
) => {
    switch (action.type) {
        case CartDropdownTypes.TOGGLE_CART_VISIBILITY:
            return {
                ...state,
                isVisible: !state.isVisible,
            };
        case CartDropdownTypes.ADD_ITEM:
            let newState = { ...state };
            const item = action.payload;
            if (!state.cartItems[item.id])
                newState.cartItems[item.id] = { item, quantity: 1 };
            else
                newState.cartItems[item.id] = {
                    item,
                    quantity: newState.cartItems[item.id].quantity + 1,
                };

            return newState;
        default:
            return state;
    }
};

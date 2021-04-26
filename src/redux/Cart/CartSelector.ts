import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CartState } from './CartReducer';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart: CartState) => cart.cartItems,
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => {
        return Object.values(cartItems).reduce((accumulatedQuantity: any, cartItem: any) => accumulatedQuantity + cartItem.quantity, 0);
    },
);

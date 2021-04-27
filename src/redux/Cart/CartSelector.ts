import { createSelector } from 'reselect';
import { Product } from '../../common/types';
import { RootState } from '../store';
import { CartState } from './CartReducer';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart: CartState) => cart.cartItems,
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems: { [id: string]: Product }) => {
        return Object.values(cartItems).reduce(
            (accumulatedQuantity: number, cartItem: Product) =>
                accumulatedQuantity + cartItem.quantity,
            0,
        );
    },
);

export const selectCartVisibility = createSelector(
    [selectCart],
    (cart: CartState) => cart.isVisible,
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems: { [id: string]: Product }) => {
        return Object.values(cartItems).reduce(
            (accumulatedTotal: number, cartItem: Product) =>
                accumulatedTotal + cartItem.item.price,
            0,
        );
    },
);

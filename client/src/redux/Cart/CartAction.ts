import { Item } from '../../common/types';

export const CartTypes = {
    TOGGLE_CART_VISIBILITY: 'cart/toggleVisibility',
    ADD_ITEM: 'cart/addItem',
    CLEAR_ITEM_FROM_CART: 'cart/clearItemFromCart',
    REMOVE_ITEM: 'cart/removeItem',
    CLEAR_CART: 'cart/clearCart',
};

export const toggleCartDropdownVisibility = () => ({
    type: CartTypes.TOGGLE_CART_VISIBILITY,
});

export const addItem = (item: Item) => ({
    type: CartTypes.ADD_ITEM,
    payload: item,
});

// Only need map key to remove after it is added
export const removeItem = (id: number) => ({
    type: CartTypes.REMOVE_ITEM,
    payload: id,
});

export const clearItemFromCart = (id: number) => ({
    type: CartTypes.CLEAR_ITEM_FROM_CART,
    payload: id,
});

export const clearCart = () => ({
    type: CartTypes.CLEAR_CART,
});

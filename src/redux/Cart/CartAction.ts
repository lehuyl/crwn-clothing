import { Item } from "../../common/types"

export const CartTypes = {
    TOGGLE_CART_VISIBILITY: 'cart/toggleVisibility',
    ADD_ITEM: 'cart/addItem',
    REMOVE_ITEM: 'cart/removeItem'
}

export const toggleCartDropdownVisibility = () => ({
    type: CartTypes.TOGGLE_CART_VISIBILITY
})

export const addItem = (item: Item) => ({
    type: CartTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (id: number) => ({
    type: CartTypes.REMOVE_ITEM,
    payload: id
})
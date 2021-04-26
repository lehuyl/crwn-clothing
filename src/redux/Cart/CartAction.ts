import { Item } from "../../common/types"

export const CartTypes = {
    TOGGLE_CART_VISIBILITY: 'cart/toggleVisibility',
    ADD_ITEM: 'cart/addItem'
}

export const toggleCartDropdownVisibility = () => ({
    type: CartTypes.TOGGLE_CART_VISIBILITY
})

export const addItem = (item: Item) => ({
    type: CartTypes.ADD_ITEM,
    payload: item
})
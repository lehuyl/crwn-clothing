import { Item } from "../../common/types"

export const CartDropdownTypes = {
    TOGGLE_CART_VISIBILITY: 'cart/toggleVisibility',
    ADD_ITEM: 'cart/addItem'
}

export const toggleCartDropdownVisibility = () => ({
    type: CartDropdownTypes.TOGGLE_CART_VISIBILITY
})

export const addItem = (item: Item) => ({
    type: CartDropdownTypes.ADD_ITEM,
    payload: item
})
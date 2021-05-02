import SHOP_DATA from "../../common/shop-data";
import { Collection } from "../../common/types";
import { RootState } from "../store";

export interface ShopState {
    collections: { [id: string]: Collection };
}

const INITIAL_SHOP_STATE: ShopState = {
    collections: SHOP_DATA
}

export const shopReducer = (state: RootState = INITIAL_SHOP_STATE, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}
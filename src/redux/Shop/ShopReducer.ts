import { Collection } from '../../common/types';
import { RootState } from '../store';
import { ShopActionTypes } from './ShopAction';

export interface ShopState {
    collections: { [id: string]: Collection } | null;
}

const INITIAL_SHOP_STATE: ShopState = {
    collections: null,
};

export const shopReducer = (
    state: RootState = INITIAL_SHOP_STATE,
    action: any,
) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTION:
            return { ...state, collections: action.payload };
        default:
            return state;
    }
};
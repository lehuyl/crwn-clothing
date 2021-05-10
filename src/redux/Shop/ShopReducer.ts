import { Collection } from '../../common/types';
import { RootState } from '../store';
import { ShopActionTypes } from './ShopAction';

export interface ShopState {
    collections: { [id: string]: Collection } | null;
    isFetching: boolean;
    errorMessage: any;
}

const INITIAL_SHOP_STATE: ShopState = {
    collections: null,
    isFetching: false,
    errorMessage: null,
};

export const shopReducer = (
    state: RootState = INITIAL_SHOP_STATE,
    action: any,
) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true,
            };
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return { ...state, isFetching: false, collections: action.payload };
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
};
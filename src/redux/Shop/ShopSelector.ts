import { createSelector } from 'reselect';
import { Collection } from '../../common/types';
import { RootState } from '../store';
import { ShopState } from './ShopReducer';
import memoize from 'lodash.memoize';

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop: ShopState) => shop.collections,
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections: { [id: string]: Collection }) => Object.values(collections)
)

export const selectCollection = memoize((collectionPathParam: string) =>
    createSelector([selectCollections], (collections: { [id: string]: Collection }) =>
        collections[collectionPathParam]
    ),
);


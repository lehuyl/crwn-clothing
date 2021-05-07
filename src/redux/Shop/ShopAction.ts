import { Collection } from "../../common/types"

export const ShopActionTypes = {
    UPDATE_COLLECTION: 'shop/update-collection'
}

export const updateCollections = (collectionsMap: { [id: string]: Collection }) => ({
    type: ShopActionTypes.UPDATE_COLLECTION,
    payload: collectionsMap
})
import { Collection } from '../../common/types';
import {
    convertCollectionsSnapshotToMap,
    firestore,
} from '../../firebase/firebase.utils';
import { AppDispatch } from '../store';

export const ShopActionTypes = {
    FETCH_COLLECTIONS_START: 'shop/fetch-collections-start',
    FETCH_COLLECTIONS_SUCCESS: 'shop/fetch-collections-success',
    FETCH_COLLECTIONS_FAILURE: 'shop/fetch-collections-failure',
};

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap: {
    [id: string]: Collection;
}) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
});

export const fetchCollectionsFailure = (error: any) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error,
});

export const fetchCollectionsStartAsync = () => {
    return (dispatch: AppDispatch) => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef
            .get()
            .then((snapshot: any) => {
                const collectionsMap = convertCollectionsSnapshotToMap(
                    snapshot,
                );
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch((error: any) => dispatch(fetchCollectionsFailure(error)));
    };
};
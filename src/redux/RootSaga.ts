import { all, call } from '@redux-saga/core/effects';
import { fetchCollectionsStart } from './Shop/ShopSaga';
import { userSagas } from './User/UserSaga';

export default function* rootSaga() {
    yield all([call(fetchCollectionsStart), call(userSagas)]);
}

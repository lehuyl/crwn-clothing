import { all, call } from '@redux-saga/core/effects';
import { cartSagas } from './Cart/CartSaga';
import { shopSagas } from './Shop/ShopSaga';
import { userSagas } from './User/UserSaga';

export default function* rootSaga() {
    yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}

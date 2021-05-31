import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import { UserActionTypes } from "../User/UserAction"
import { clearCart } from "./CartAction";

export function* cartSagas() {
    yield all([call(onSignOutSuccess)])
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* clearCartOnSignOut() {
    yield put(clearCart());
}
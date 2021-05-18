import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import {
    auth,
    createUserProfileDocument,
    googleProvider,
} from '../../firebase/firebase.utils';
import { signInFailure, signInSuccess, UserActionTypes } from './UserAction';

export function* getSnapshotFromUserAuth(
    userAuth: any,
): Generator<any, any, any> {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();

        yield put(
            signInSuccess({
                id: userSnapshot.id,
                ...userSnapshot.data(),
            }),
        );
    } catch (error: any) {
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle(): Generator<any, any, any> {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error: any) {
        yield put(signInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({
    payload: { email, password },
}: any): Generator<any, any, any> {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error: any) {
        yield put(signInFailure(error));
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}

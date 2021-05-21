import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import {
    auth,
    createUserProfileDocument,
    getCurrentUser,
    googleProvider,
} from '../../firebase/firebase.utils';
import {
    signInFailure,
    signInSuccess,
    signOutFailure,
    signOutSuccess,
    UserActionTypes,
} from './UserAction';

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
    ]);
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithGoogle(): Generator<any, any, any> {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error: any) {
        yield put(signInFailure(error));
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
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

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* isUserAuthenticated(): Generator<any, any, any> {
    try {
        const userAuth = yield getCurrentUser();

        if (!userAuth) return;
        else yield getSnapshotFromUserAuth(userAuth);
    } catch (error: any) {
        yield put(signInFailure(error));
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error: any) {
        yield put(signOutFailure(error));
    }
}

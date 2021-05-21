interface UserCredentials {
    email: string;
    password: string;
}

export const UserActionTypes = {
    GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
    EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
    SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
    SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
    CHECK_USER_SESSION: 'CHECK_USER_SESSION',
    SIGN_OUT_START: 'SIGN_OUT_START',
    SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
    SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE',
};

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (userCredentials: UserCredentials) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: userCredentials,
});

export const signInSuccess = (user: any) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user,
});

export const signInFailure = (error: any) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error,
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error: any) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error,
});

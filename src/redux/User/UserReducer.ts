import { UserActionTypes } from './UserAction';

export interface UserState {
    currentUser: any;
    error: any;
}

const INITIAL_USER_STATE: UserState = {
    currentUser: null,
    error: null,
};

export const userReducer = (state = INITIAL_USER_STATE, action: any) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null,
            };
        case UserActionTypes.SIGN_IN_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

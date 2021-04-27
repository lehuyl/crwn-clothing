import { UserActionTypes } from "./UserAction";

export interface UserState {
    currentUser: any
}

const INITIAL_USER_STATE: UserState = {
    currentUser: null
}

export const userReducer = (state = INITIAL_USER_STATE, action: any) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:  action.payload
            }
        default:
            return state;
    }
}
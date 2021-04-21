export const UserActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}
export const setCurrentUser = (user: any) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});
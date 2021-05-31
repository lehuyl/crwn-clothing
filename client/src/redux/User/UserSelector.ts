import { createSelector } from "reselect";
import { RootState } from "../store";
import { UserState } from "./UserReducer";

const selectUser = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user: UserState) => user.currentUser
)
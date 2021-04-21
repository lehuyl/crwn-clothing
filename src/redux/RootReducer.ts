import { combineReducers } from "redux";
import { cartDropdownReducer } from "./CartDropdown/CartDropdownReducer";
import { userReducer } from "./User/UserReducer";

export default combineReducers({
    user: userReducer,
    cartDropdown: cartDropdownReducer
});
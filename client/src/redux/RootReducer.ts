import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { cartReducer } from './Cart/CartReducer';
import { directoryReducer } from './Directory/DirectoryReducer';
import { shopReducer } from './Shop/ShopReducer';
import { userReducer } from './User/UserReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
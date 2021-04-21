import { createStore, applyMiddleware, Store } from 'redux';
import logger from 'redux-logger';
import rootReducer from './RootReducer';

const middlewares = [logger];

const store: Store = createStore(rootReducer, applyMiddleware(...middlewares));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export default store;
import { createStore, applyMiddleware, Store } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './RootReducer';
import { Persistor } from 'redux-persist/es/types';

const middlewares = [];

if (process.env.NODE_ENV === 'development') middlewares.push(logger);

export const store: Store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor: Persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
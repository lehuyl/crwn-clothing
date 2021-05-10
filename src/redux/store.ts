import { createStore, applyMiddleware, Store, Action } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './RootReducer';
import { Persistor } from 'redux-persist/es/types';
import thunk, { ThunkAction } from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') middlewares.push(logger as any);

export const store: Store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor: Persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

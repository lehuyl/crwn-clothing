import { createStore, applyMiddleware, Store } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './RootReducer';
import { Persistor } from 'redux-persist/es/types';
import createSagaMiddleware from 'redux-saga';
import { fetchCollectionsStart } from './Shop/ShopSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares: any = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') middlewares.push(logger);

export const store: Store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart);

export const persistor: Persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

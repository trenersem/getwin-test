import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { letterApi } from './services/letterApi';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './slice/userSlice';

const userPersistConfig = {
  key: 'user',
  storage,
  version: 1,
};
const persistedUserReducer = persistReducer(userPersistConfig, user);

const rootReducer = combineReducers({
  user: persistedUserReducer,
  [letterApi.reducerPath]: letterApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(letterApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
export const persistor = persistStore(store);

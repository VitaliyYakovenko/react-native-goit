import { configureStore } from "@reduxjs/toolkit"; 
import { authReducer } from "./slice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'token',
  storage: AsyncStorage,
  whitelist: ["token"],
};

const persistAuth = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistAuth,
  },
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
export { store, persistor };



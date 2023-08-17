import { configureStore } from "@reduxjs/toolkit"; 
import { authReducer } from "./user/slice";
import { postsReducer } from "./posts/slice";
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
    posts: postsReducer,
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



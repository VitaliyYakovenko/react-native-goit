import { configureStore } from "@reduxjs/toolkit"; 
import { registrationSlice } from "./registrationSlice";
import { authSlice } from "./authSlice";
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
  key: 'root',
  storage: AsyncStorage,
  // whiteList: ["token"],
};

const persistAuth = persistReducer(persistConfig, authSlice.reducer);

const store = configureStore({
  reducer: {
    registration: registrationSlice.reducer, 
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




// const saveData = async (data) => {
  //   try {
  //     await AsyncStorage.setItem('root', JSON.stringify(data)); 
  //     console.log('Data saved successfully', data);
      
  //   } catch (error) {
  //     console.error('Error saving data:', error);
  //   }
  // };
   
   
import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth , signOut} from "firebase/auth";



export const logOutUser = createAsyncThunk(
    "logOut/logOutUser",
    async (_, thunkAPI) => {
        const auth = getAuth();
    try {
        await signOut(auth);
        await AsyncStorage.removeItem('token')
        return {};
    } catch (error) {
        thunkAPI.rejectWithValue(error.message);
        throw error;
    }
  }
); 













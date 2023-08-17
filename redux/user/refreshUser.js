import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, doc, getDoc } from "firebase/firestore"; 
const db = getFirestore();



export const refreshUser = createAsyncThunk(
  "refresh/refreshUser",
  async (_, thunkAPI) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
     

      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        const token = idTokenResult.token;

        if (!token) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        const userDocRef = doc(db, "users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        const avatar = userDocSnapshot.data()?.avatarPath;
        
        await AsyncStorage.setItem("token", token);
        const { displayName, email,  } = user;
      
        return {
          refreshedToken: token,
          email: email,
          displayName: displayName,
          avatar: avatar,
        };
        
      } else {
        throw new Error("User is not logged in.");
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
      throw error;
    }
  }
);
import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";
const db = getFirestore();


export const registerUser = createAsyncThunk(
  "registration/registerUser",
  async (userData, thunkAPI) => {
    try {
      
      const data = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
      const { login, avatar } = userData;
      updateProfile(data.user, { displayName: login });
    
      const userDocRef = doc(db, "users", data.user.uid);

      const userDocData = {
        avatarPath: avatar,
      };
        
      await setDoc(userDocRef, userDocData);      
      return userData;
    } catch (error) {
  
      thunkAPI.rejectWithValue(error.message);
      throw error;
    }
  }
);





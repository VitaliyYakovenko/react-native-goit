import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

export const updateAvatarUser = createAsyncThunk(
  "updateAvatar/updateAvatarUser",
  async (newAvatarUrl, thunkAPI) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        throw new Error("User is not logged in.");
      }

      const userDocRef = doc(db, "users", user.uid);

      const userDocData = {
        avatarPath: newAvatarUrl,
      };

      await setDoc(userDocRef, userDocData);
      
     
      return newAvatarUrl;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
      throw error;
    }
  }
);


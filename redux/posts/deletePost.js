import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { auth } from "../../firebase/firebase";

const db = getFirestore();

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId, thunkAPI) => {
    try {
      const currentUser = auth.currentUser;

      if (!currentUser) {
        throw new Error("User is not logged in.");
      }

      const postDocRef = doc(db, "users", currentUser.uid, "posts", postId);  
      await deleteDoc(postDocRef);

      return postId;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
      throw error;
    }
  }
);
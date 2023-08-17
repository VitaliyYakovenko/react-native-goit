import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const db = getFirestore();






export const createComment = createAsyncThunk(
    "comments/createComment",
     async (data, thunkAPI) => {
    try {
      const { id, text, timestamp } = data;  
      const auth = getAuth();
      const user = auth.currentUser;
        
      if (!user) {
        throw new Error("User is not logged in.");
      }

      const commentsCollectionRef = collection(
        db,
        "users",
        user.uid,
        "posts",
        id,
        "comments"
      ); 
        
      const newComment = {
        text: text,
        author: user.uid,
        timestamp : timestamp,
      };

      await addDoc(commentsCollectionRef, newComment);
      
      return newComment;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
      throw error;
    }
  }
       

);



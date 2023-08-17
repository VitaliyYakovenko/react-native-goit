import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore();

export const getAllCommentsById = createAsyncThunk(
  "comments/getCommentsById",
    async (postId, thunkAPI) => {
        
    try {
      const auth = getAuth();
      const user = auth.currentUser; 
    if (!user) {
        throw new Error("User not found");     
      }  

      const commentsCollectionRef = collection(db, "users", user.uid, "posts", postId, "comments"); 
      const commentsQuery = query(commentsCollectionRef);

      const querySnapshot = await getDocs(commentsQuery);
      const comments = [];

      querySnapshot.forEach((doc) => {
        comments.push({ id: doc.id, ...doc.data() });
      });
     
      return comments;
    } catch (error) {
      
      thunkAPI.rejectWithValue(error.message);
      throw error;
    }
  }
);
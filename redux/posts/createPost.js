import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore, doc, collection, addDoc } from "firebase/firestore";
import { auth } from "../../firebase/firebase";
const db = getFirestore(); 


export const createPost = createAsyncThunk(
     "posts/addPost",
     async (post, thunkAPI) => {
    try {
       
      if (!post) throw new Error("Post could not be added or created"); 
        const currentUser = auth.currentUser;
        
      if (!currentUser) throw new Error("User is not logged in.");
      
      const userDocRef = doc(db, "users", currentUser.uid);
        
      const postsCollectionRef = collection(userDocRef, "posts");
        
      await addDoc(postsCollectionRef, post);
       
      return post;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
      throw error;
    }
  }  
    

);
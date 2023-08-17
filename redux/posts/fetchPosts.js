import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore, doc, collection , getDocs, query, where} from "firebase/firestore";
import { auth } from "../../firebase/firebase";
import { getAuth } from "firebase/auth";
const db = getFirestore(); 


export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    try {
      const currentUser = auth.currentUser;
      
      if (!currentUser) {
        throw new Error("User is not logged in.");
      }

      const userDocRef = doc(db, "users", currentUser.uid);
      const postsCollectionRef = collection(userDocRef, "posts");
      
      const querySnapshot = await getDocs(postsCollectionRef);
      const posts = [];

      querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data()});
      });
      
      const commentsCountPromises = posts.map((post) => getCommentsCountByPostId(post.id));
      
      const commentsCounts = await Promise.all(commentsCountPromises);
      posts.forEach((post, index) => {
        post.comments = commentsCounts[index];
      });

      return posts;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
      throw error;
    }
  }
);


const getCommentsCountByPostId = async (postId) => {
  const auth = getAuth();
  const user = auth.currentUser;  
  const commentsCollectionRef = collection(db, "users", user.uid, "posts", postId, "comments"); 
  const commentsQuery = query(commentsCollectionRef);
  const querySnapshot = await getDocs(commentsQuery);
  return querySnapshot.size;
};

import {
    View,
    Text,
    Image,
    ImageBackground,    
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { useState} from "react";
import { useSelector , useDispatch} from "react-redux";
import * as ImagePicker from 'expo-image-picker';
import { logOutUser } from '../../redux/user/logOutUser';
import { updateAvatarUser } from "../../redux/user/updateAvatarUser";
import { deletePost } from "../../redux/posts/deletePost";
import styles from "./ProfileScreenStyles";




export default function ProfileScreen({ navigation }) {
    const [newAvatar, setNewAvatar] = useState("");
    const { displayName, avatar, posts } = useSelector((state) => ({
    displayName: state.auth.displayName,
    avatar: state.auth.avatar,
    posts: state.posts.posts,
    }));
    const dispatch = useDispatch();

    const onNavigateOnComments = (id) => {
        navigation.navigate("CommentsScreen", {
            id: id,
        })
    };

    const onNavigateOnMapScreen = (id) => {
           navigation.navigate("MapScreen", {
            id: id,
        })
    };

    const onNavigatePostsScreen = () => {
      navigation.navigate("PostsScreen")
   };
    
   const onNavigateCreatePostsScreen = () => {
       navigation.navigate("CreatePostsScreen")
   }; 

   const onNavigateProfileScreen = () => {
       navigation.navigate("ProfileScreen")
   }
 
   const onLogOut = () => {
       dispatch(logOutUser()); 
       navigation.navigate("LoginScreen"); 
    };
  
   const onHandleScroll = (e) => {
     const offsetY = e.nativeEvent.contentOffset.y;
    };


    const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
        dispatch(updateAvatarUser(result.assets[0].uri));
        setNewAvatar(result.assets[0].uri);
    }
    };
  
    const onDeletePost = (id) => {
        dispatch(deletePost(id));
    };
     
    return (
        <>
    <ScrollView onScroll={onHandleScroll} style={styles.scrollViewContent}>
        <ImageBackground
            style={styles.backgroundImage}
            source={require("../../images/photo-bg.png")}>
        
    <View style={styles.whiteBgBox}>
  
        <View style={styles.userBlock}> 
                
                <View style={styles.avatarBox}>
                
                <TouchableOpacity onPress={pickImage}  style={styles.iconAdd}>              
                <Image  source={require("../../images/add.png")} /> 
                </TouchableOpacity>                      
                {avatar
                ? <Image style={styles.avatar} source={{uri: avatar}} />
                : <View style={styles.avatarNull}></View>
               }
            </View>
                
        <TouchableOpacity
        onPress={onLogOut}
        style={styles.iconLogOut}>
                    <Image
                    width="24"
                    height="24"
                    source={require('../../images/log-out.png')}/>
        </TouchableOpacity>            
        </View>


        <Text style={[[{ fontFamily: "Roboto-Bold" }, styles.userName]]}>{displayName}</Text>
    
       <ScrollView styles={styles.scrollViewContent}>
        {posts.map((post) => (    
            <View style={styles.postContent} key={post.id}>
            <TouchableOpacity onPress={() =>onDeletePost(post.id)} style={styles.removePostIcon}>
                 <Image  source={require("../../images/add.png")} />
            </TouchableOpacity>   

            <Image style={styles.imgPost} source={{uri: post.photo}} />
            <Text style={[[{ fontFamily: "Roboto-Bold" }, styles.locationPost]]}>{post.location}</Text>

            <View style={styles.infomationPostBox}>

            <TouchableOpacity onPress={() => onNavigateOnComments(post.id)} style={styles.commentsBox}> 
                        
            {post.comments === 0
            ? <Image
             width="24"
             height="24"
             source={require("../../images/no-comments.png")}  
            /> 
            : <Image source={require("../../images/comment-img.png")}/>
            }         
            
            <Text>{post.comments}</Text>
            </TouchableOpacity> 
                
            <Image style={styles.postIcons} source={require("../../images/like-img.png")}/> 
            <Text>0</Text>       
       
                
            <TouchableOpacity  onPress={() => onNavigateOnMapScreen(post.id)} style={styles.countryBox}>        
            <Image
            style={styles.postIcons}            
            width="24"
            height="24"
            source={require("../../images/map.png")} /> 
            <Text>{post.name}</Text>
            </TouchableOpacity> 

            </View>                 
          </View>
        ))}
                    
        </ScrollView>       
        </View>
    </ImageBackground>        
        </ScrollView>  
            
            <View style={styles.navMenu}>     
            <TouchableOpacity onPress={onNavigatePostsScreen}>
            <Image 
             width="24"
             height="24"
             source={require('../../images/menu.png')}/>
            </TouchableOpacity>
        
            <TouchableOpacity onPress={onNavigateCreatePostsScreen}>
            <View style={styles.mainBtn}>        
            <Image
            style={styles.iconUser}  
            width="24"
            height="24" 
            source={require('../../images/user-main-btn.png')} />
            </View>  
            </TouchableOpacity>
            

            <TouchableOpacity onPress={onNavigateProfileScreen}>
            <Image 
             width="40"
             height="40"
            source={require('../../images/plus.png')} />  
            </TouchableOpacity>                    
      </View>     
       </>     
    )
};



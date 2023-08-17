import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useIsFocused } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/posts/fetchPosts";
import { logOutUser } from "../../redux/user/logOutUser";
import SvgUri from "react-native-svg-uri";
import styles from "./PostsScreenStyles";


export default function PostsScreen({ navigation }) {
  const isFocused = useIsFocused();
  const { posts } = useSelector((state) => state.posts);
  const { email, displayName, avatar } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchPosts())

  },[dispatch, isFocused]);
   

  const onLogOut = () => {
    dispatch(logOutUser());
    navigation.navigate("LoginScreen"); 
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

  const onHandleScroll = (e) => {
     const offsetY = e.nativeEvent.contentOffset.y;
    };

  const onNavigatOnMap = (id) => {
    navigation.navigate("MapScreen", {
       id: id
    });
  }

  const onNavigatOnComments = (id) => {
    navigation.navigate("CommentsScreen", {
      id: id,
    });
  };
  
  return (
    <>
    <ScrollView style={styles.mainBox} onScroll={onHandleScroll}>
    <View style={styles.postsScreen}>
      
      <View style={styles.navBar}>
       <Text style={[{ fontFamily: "Roboto-Bold" }, styles.title]}>
        Публікації
      </Text>
    
      <TouchableOpacity onPress={onLogOut} style={styles.icon}>
      <SvgUri 
        width="24"
        height="24"
        source={require('../../assets/icons/log-out.svg')}
      />
      </TouchableOpacity>

      </View>
     
      <View style={styles.userBlock}>
       
      {avatar  
       ?  <Image style={styles.avatar} source={{uri: avatar}} />
       :  <View style={styles.nullAvatar}></View>}     
      
        
      <View style={styles.userBlockData}>
      <Text style={[[{ fontFamily: "Roboto-Bold" }, styles.name]]}>{displayName}</Text>
      <Text style={[[{ fontFamily: "Roboto-Medium" }, styles.email]]}>{email}</Text>
      </View>
      </View>

    {posts && posts.map(post=> (
        <ScrollView onScroll={onHandleScroll} key={post.id} style={styles.postBar}>
        <View style={styles.posts}>
        <Image style={styles.imgPost} source={{uri: post.photo}}/>
          <Text style={styles.postName}>{post.name}</Text>
          <View style={styles.postInformBar}>

          <TouchableOpacity onPress={() => onNavigatOnComments(post.id)} style={styles.postCommentsBar}>
            {post.comments === 0
            ? <SvgUri
             width="24"
             height="24"
             source={require("../../assets/icons/no-commetns-icon.svg")}  
            /> 
            : <Image source={require("../../images/comment-img.png")}/>
            }   
          
            <Text>{post.comments}</Text>
          </TouchableOpacity>
         
          <TouchableOpacity onPress={() => onNavigatOnMap(post.id)} style={styles.postLocationBar}> 
            <SvgUri
             width="24"
             height="24"
             source={require("../../assets/icons/map-icon.svg")}
            />
            <Text>{post.location}</Text>
          </TouchableOpacity>    

          </View>
        </View>
      </ScrollView>
    ))}
      </View>
    </ScrollView>
      
     <View style={styles.navMenu}>
            <TouchableOpacity onPress={onNavigatePostsScreen}>
            <SvgUri 
             width="24"
             height="24"
             source={require('../../assets/icons/menu-icon.svg')}/>
            </TouchableOpacity>
        
           <TouchableOpacity onPress={onNavigateCreatePostsScreen}>
            <View style={styles.mainBtn}>        
            <SvgUri
            style={styles.iconPlus}  
            width="50"
            height="50" 
            source={require("../../assets/icons/plus-icon.svg")} />
            </View>  
            </TouchableOpacity>

            <TouchableOpacity onPress={onNavigateProfileScreen}>
            <SvgUri 
             width="24"
             height="24"
            source={require('../../assets/icons/user-icon.svg')} />  
        </TouchableOpacity>
      </View>  
    </>
  );
};




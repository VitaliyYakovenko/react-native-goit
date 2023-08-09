import { useState , useEffect} from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import SvgUri from "react-native-svg-uri";
import styles from "./PostsScreenStyles";



export default function PostsScreen({ navigation, route }) {
  const [posts, setPosts] = useState([]);
  const [isShowPosts, setIsShowPosts] = useState(false);
  const [coords, setCoords] = useState(null);
  const [img, setImg] = useState("");
   
  useEffect(() => {
    const { photo, name, location , coords} = route.params || {};
      
    setCoords(coords);
    setImg(photo);
    if (photo && name && location) {
     
      const data = { photo, name, location };
      
      setPosts((prev) => [...prev, data]);
      setIsShowPosts(true);
    }
  
   }, [route]);
   
  
  const onLogOut = () => {
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

  const onNavigatOnMap = () => {
    navigation.navigate("MapScreen", {
       coords: coords,
    });
  }

  const onNavigatOnComments = () => {
    navigation.navigate("CommentsScreen", {
        img: img,
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

      <Image
        width="24"
        height="24"
        source={require("../../images/small-avatar.png")} />
        
      <View style={styles.userBlockData}>
      <Text style={[[{ fontFamily: "Roboto-Bold" }, styles.name]]}>Natali Romanova</Text>
      <Text style={[[{ fontFamily: "Roboto-Medium" }, styles.email]]}>email@example.com</Text>
      </View>
      </View>

    {isShowPosts && posts.map(post => (
        <ScrollView onScroll={onHandleScroll} key={post.photo} style={styles.postBar}>
        <View style={styles.posts}>
        <Image style={styles.imgPost} source={{uri: post.photo}}/>
          <Text style={styles.postName}>{post.name}</Text>
          <View style={styles.postInformBar}>

          <TouchableOpacity onPress={onNavigatOnComments} style={styles.postCommentsBar}>
            <SvgUri
             width="24"
             height="24"
             source={require("../../assets/icons/no-commetns-icon.svg")}  
            />
            <Text>0</Text>
          </TouchableOpacity>
         
          <TouchableOpacity onPress={onNavigatOnMap} style={styles.postLocationBar}> 
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




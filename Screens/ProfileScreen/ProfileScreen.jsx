import {
    View,
    Text,
    Image,
    ImageBackground,    
    TouchableOpacity,
    ScrollView,
} from "react-native";
import SvgUri from "react-native-svg-uri";
import styles from "./ProfileScreenStyles";

const posts = [
    {
        img: require("../../images/post-image.png"),
        comments: 8,
        likes: 153,
        location: "Ліс",
        country: "Ukraine",
    },
    {
        img: require("../../images/post-image-3.png"),
        comments: 3,
        likes: 200,
        location: "Захід на Чорному морі",
        country: "Ukraine",
    },
    {
        img: require("../../images/post-image-2.png"),
        comments: 50,
        likes: 200,
        location: "Старий будиночок у Венеції",
        country: "Italy",        
    }
]



export default function ProfileScreen({navigation}) {
    

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
    navigation.navigate("LoginScreen"); 
    };
  
    const onHandleScroll = (e) => {
     const offsetY = e.nativeEvent.contentOffset.y;
    };

    return (
        <>
    <ScrollView onScroll={onHandleScroll} style={styles.scrollViewContent}>
        <ImageBackground
            style={styles.backgroundImage}
            source={require("../../images/photo-bg.png")}>
        
    <View style={styles.whiteBgBox}>
  
        <View style={styles.userBlock}> 
                    
            <View style={styles.avatarBox} >      
                <Image style={styles.avatar} 
                source={require("../../images/avatar.png")} />
                <Image
                style={styles.btnRemoveAvatar}
                source={require("../../images/add.png")} />          
            </View>
                
        <TouchableOpacity
        onPress={onLogOut}
        style={styles.iconLogOut}>
                    <SvgUri
                    width="24"
                    height="24"
                    source={require('../../assets/icons/log-out.svg')}/>
        </TouchableOpacity>            
        </View>


        <Text style={[[{ fontFamily: "Roboto-Bold" }, styles.userName]]}>Natali Romanova</Text>
    
       <ScrollView styles={styles.scrollViewContent}>
        {posts.map((post) => (
          <View style={styles.postContent} key={post.img}>
            <Image style={styles.imgPost} source={post.img} />
            <Text style={[[{ fontFamily: "Roboto-Bold" }, styles.locationPost]]}>{post.location}</Text>

            <View style={styles.infomationPostBox}>

            <View style={styles.commentsBox}>        
            <Image style={styles.postIcons} source={require("../../images/comment-img.png")}/> 
            <Text>{post.comments}</Text>
            </View> 
                
            <Image style={styles.postIcons} source={require("../../images/like-img.png")}/> 
            <Text>{post.likes}</Text>       
       
                
            <View style={styles.countryBox}>        
            <SvgUri
            style={styles.postIcons}            
            width="24"
            height="24"
            source={require("../../assets/icons/map-icon.svg")} /> 
            <Text>{post.country}</Text>
            </View> 

            </View>                 
          </View>
        ))}
                    
        </ScrollView>       
        </View>
    </ImageBackground>
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
            style={styles.iconUser}  
            width="24"
            height="24" 
            source={require('../../assets/icons/user-icon.svg')} />
            </View>  
            </TouchableOpacity>
            

            <TouchableOpacity onPress={onNavigateProfileScreen}>
            <SvgUri 
             width="40"
             height="40"
            source={require('../../assets/icons/plus-icon.svg')} />  
            </TouchableOpacity>
         
                    
      </View>              
        </ScrollView>  
       </>     
    )
};



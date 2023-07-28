import { View, Text, Image ,TouchableOpacity } from "react-native";
import SvgUri from "react-native-svg-uri";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from "./PostsScreenStyles";

const Tab = createBottomTabNavigator();

export default function PostsScreen({ navigation }) {
 
  const onLogOut = () => {
     navigation.navigate("LoginScreen")
  }
  
  const onNavigatePostsScreen = () => {
      navigation.navigate("PostsScreen")
  };
    
  const onNavigateCreatePostsScreen = () => {
       navigation.navigate("CreatePostsScreen")
  }; 

  const onNavigateProfileScreen = () => {
       navigation.navigate("ProfileScreen")
  }


  return (
    <View style={styles.postsScreen}>
      
      <View style={styles.navBar}>
       <Text style={[{ fontFamily: "Roboto-Bold" }, styles.title]}>
        Публікації
      </Text>
      

      <TouchableOpacity
          style={styles.iconLogOut}
          onPress={onLogOut}>
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

      <View style={styles.navMenu}>
          
            <TouchableOpacity onPress={onNavigatePostsScreen}>
            <SvgUri 
             width="24"
             height="24"
             source={require('../../assets/icons/menu-icon.svg')}/>
            </TouchableOpacity>
        
            <TouchableOpacity onPress={onNavigateCreatePostsScreen}>
            <Image
            width="24"
            height="24"
            style={styles.mainBtn}  
            source={require("../../images/center-btn.png")} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onNavigateProfileScreen}>
            <SvgUri 
             width="24"
             height="24"
            source={require('../../assets/icons/user-icon.svg')} />  
            </TouchableOpacity>
      
      </View>  

      </View>
  );
};




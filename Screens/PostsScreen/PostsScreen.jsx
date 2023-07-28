import { View, Text, Image ,TouchableOpacity } from "react-native";
import SvgUri from "react-native-svg-uri";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import styles from "./PostsScreenStyles";

const Tab = createBottomTabNavigator();

export default function PostsScreen({ navigation }) {
 
  const onLogOut = () => {
     navigation.navigate("LoginScreen")
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
        
            <SvgUri 
             width="24"
             height="24"
             source={require('../../assets/icons/menu-icon.svg')}/>

            <Image
            width="24"
            height="24"
            style={styles.mainBtn}  
            source={require("../../images/center-btn.png")}/>

            <SvgUri 
             width="24"
             height="24"
             source={require('../../assets/icons/user-icon.svg')}/>  
      
      </View>  

      </View>
  );
};




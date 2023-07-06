import {
  View,
  Text,
  Image,
  Pressable  
} from "react-native";
import SvgUri from "react-native-svg-uri";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import Home from "../Home/Home";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import styles from "./PostsScreenStyles";


const Tab = createBottomTabNavigator();

export default function PostsScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <View style={styles.navBar}>
     
      <Text style={[{ fontFamily: "Roboto-Bold" }, styles.title]}>
        Публікації
      </Text>
      
      <SvgUri style={styles.icon}
        width="24"
        height="24"
        source={require('../../assets/icons/log-out.svg')}
        />
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
        <Pressable  onPress={() => navigation.navigate("Home")}>
        <SvgUri source={require("../../assets/icons/menu-icon.svg")} />
        </Pressable>  
        
        <Pressable
        onPress={() => navigation.navigate("CreatePostsScreen")}
        >
        <Image
          style={styles.mainBtn}        
            source={require("../../images/main-btn.png")} />
        </Pressable>  
      
        <Pressable  onPress={() => navigation.navigate("ProfileScreen")}>
        <SvgUri source={require("../../assets/icons/user-icon.svg")} />
        </Pressable>
      </View>
      </View>
  );
};



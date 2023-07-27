import { View, Text, Image } from "react-native";
import SvgUri from "react-native-svg-uri";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../Home/Home";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import styles from "./PostsScreenStyles";

const Tab = createBottomTabNavigator();

export default function PostsScreen({ navigation }) {

  return (
    <View style={styles.postsScreen}>
      
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
      </View>
  );
};




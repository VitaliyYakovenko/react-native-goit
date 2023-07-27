import { Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from "../PostsScreen/PostsScreen";
import SvgUri from "react-native-svg-uri";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";

const Tab = createBottomTabNavigator();



export default function Home({ navigation }) {


    // useEffect(() => {
    //    navigation.navigate("PostsScreen");
    //  }, []);
     
   return (
      <>
       <Tab.Navigator>
  
            <Tab.Screen
               name='PostsScreen'
               component={PostsScreen}
               options={{tabBarIcon: () => (
              <SvgUri
                source={require('../../assets/icons/menu-icon.svg')}
              />
            ),
              tabBarLabel: '',
              headerShown: false,
              headerBackVisible: false,
              }}
            />
              
            <Tab.Screen
              name='CreatePostsScreen'
              component={CreatePostsScreen}
              options={{tabBarIcon: () => (
                <Image
                source={require("../../images/center-btn.png")}
                />
            ),
              tabBarLabel: '',
              headerShown: false,
              headerBackVisible: false,
              }}
          />
          
            <Tab.Screen
              name='ProfileScreen'
              component={ProfileScreen}
              options={{tabBarIcon: () => (
              <SvgUri
                source={require('../../assets/icons/user-icon.svg')}
              />
            ),
              tabBarLabel: '',
              headerShown: false,
              headerBackVisible: false,
              }}
            />
      
      </Tab.Navigator>
      </>      
    );
};
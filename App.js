import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import {
  Keyboard,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import PostsScreen from './Screens/PostsScreen/PostsScreen';
import CreatePostsScreen from './Screens/CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";


const RootStack = createStackNavigator();




export default function App() {

   useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      });
    }
    loadFonts();
   }, []);
  
   const [fontsLoaded] = useFonts({
     'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
     'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
     'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  

  return ( 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
    <KeyboardAvoidingView style={styles.keyboardView}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -250}>
 
    <NavigationContainer>        
      <View style={styles.container}>
       
    <StatusBar style="auto" />

        <RootStack.Navigator initialRouteName={LoginScreen}>
              
              <RootStack.Screen name="LoginScreen"
          options={{ headerStyle: { ...styles.navEl }, headerLeft: false }}
          component={LoginScreen}/>
              
              <RootStack.Screen name="Registration"
          options={{headerStyle: {...styles.navEl}, headerLeft: false}}
          component={RegistrationScreen} />
 
           
              <RootStack.Screen name="PostsScreen"
          options={{headerStyle: {...styles.navEl}, headerLeft: false}}
          component={PostsScreen}/> 
                  

              <RootStack.Screen name="CreatePostsScreen"
          options={{headerStyle: {...styles.navEl}, headerLeft: false}}
          component={CreatePostsScreen}/>
 
              <RootStack.Screen name="ProfileScreen"
          options={{headerStyle: {...styles.navEl}, headerLeft: false}}
          component={ProfileScreen}/>   

     
      </RootStack.Navigator> 

      </View>
    </NavigationContainer>
         
    </KeyboardAvoidingView>
      
    </TouchableWithoutFeedback>
  
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor:"#FFF",
  },
  navEl: {
    height: 0,
  },
  keyboardView: {
    flex: 1,
  }
});


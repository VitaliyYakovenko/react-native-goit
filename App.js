import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
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



const MainStack = createStackNavigator();



export default function App() {
   const [cameraValue, setCameraValue] = useState("");
   console.log(cameraValue);
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

      <MainStack.Navigator initialRouteName={LoginScreen}>
          <MainStack.Screen name="LoginScreen" options={{
          headerStyle: {
              ...styles.navEl
            }}}
          component={LoginScreen}/>
              
        <MainStack.Screen name="Registration" 
           options={{ headerStyle: { ...styles.navEl }, headerLeft: false }}      
           component={RegistrationScreen} />
    
            
           
        <MainStack.Screen name="PostsScreen"
          options={{ headerStyle: { ...styles.navEl }, headerLeft: false }}       
          component={PostsScreen}/> 
                  

        <MainStack.Screen name="CreatePostsScreen"
          options={{ headerStyle: { ...styles.navEl }, headerLeft: false }}         
          component={CreatePostsScreen}/>
 
        <MainStack.Screen name="ProfileScreen"
          options={{ headerStyle: { ...styles.navEl }, headerLeft: false }}          
          component={ProfileScreen}/>   

     
      </MainStack.Navigator> 

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


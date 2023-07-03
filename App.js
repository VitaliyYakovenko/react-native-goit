import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import {
  Keyboard,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from './Screens/LoginScreen/LoginScreen';



export default function App() {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const handleKeyboardDidShow = () => {
    setKeyboardVisible(true);
  };

  const handleKeyboardDidHide = () => {
    setKeyboardVisible(false);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardDidShow
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardDidHide
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
 



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
    <View style={styles.container}>      
    <StatusBar style="auto" />
    <KeyboardAvoidingView style={styles.keyboardView}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >      
      
          
      {/* <RegistrationScreen  isKeyboardVisible={isKeyboardVisible}/>  */}
      <LoginScreen isKeyboardVisible={isKeyboardVisible}/>

    </KeyboardAvoidingView>      
    </View>  
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  keyboardView: {
    flex: 1,
  }
});


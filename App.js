import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import { useFonts } from 'expo-font';


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
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <RegistrationScreen />  */}
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});


import {
    TouchableHighlight,
    TouchableOpacity,
    Text,
    TextInput,
    View,
    Image,
    ImageBackground,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from "../../redux/registrationUser";
import styles from "./RegistrationScreenStyles";


export default function RegistrationScreen({navigation}) {
   const [login, setLogin] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [avatar, setAvatar] = useState(null);
   const [showPassword, setShowPassword] = useState(false);
   const [validateInput, setValidateInput] = useState(false);
   const [isFocusedLogin, setIsFocusedLogin] = useState(false); 
   const [isFocusedEmail, setIsFocusedEmail] = useState(false);
   const [isFocusedPassword, setIsFocusedPassword] = useState(false);
   const dispatch = useDispatch();

        
    const handleFocusLogin = () => {
        setIsFocusedLogin(true);
    };
    const handleBlurLogin = () => {
        setIsFocusedLogin(false);
    }; 
    
    const handleFocusEmail = () => {
     setIsFocusedEmail(true);
    };
   const handleBlurEmail = () => {
     setIsFocusedEmail(false);
    }; 

    const handleFocusPassword = () => {
     setIsFocusedPassword(true);
    };
   const handleBlurPassword = () => {
     setIsFocusedPassword(false);
    };  
  
   const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    };
  
    const getData = () => {
        if (login === "" || email === "" || password === "") {
            setValidateInput(true);
            return
      }
      
      navigation.navigate("LoginScreen");
      dispatch(registerUser({ email, password ,login, avatar}));
      reset();
    };
    
    const reset = () => {
        setEmail("");
        setLogin("");
        setPassword("");
        setValidateInput(false);
     }

    const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
        setAvatar(result.assets[0].uri)
    }
  };
 

    return (
        <>
        <ImageBackground
        style={styles.backgroundImage}    
        source={require('../../images/photo-bg.png')}>  
        <View style={styles.whiteBgBox}>
 
      <TouchableOpacity onPress={pickImage} style={styles.avatar} >
       {avatar ? (
       <Image style={styles.avatarImg} source={{ uri: avatar }}/>
       ) : (
      <Image
      source={require("../../images/add-photo-register.png")}/>)} 
      </TouchableOpacity> 
              
        <Text style={[{ fontFamily: "Roboto-Bold" }, styles.register]}>
        Реєстрація
        </Text>

        {validateInput
        ? <Text style={[[{ fontFamily: "Roboto-Bold" }, styles.validateText]]}>
        Ви пропустили одне з обов'язкових полів
        </Text>
        :<></>
        } 
                    
        <TextInput
        placeholder="Логін"
        placeholderTextColor="#BDBDBD"
        fontSize={16}
        fontFamily="Roboto-Light"        
        style={[
          styles.input,
          isFocusedLogin ? styles.inputFocused : null,
        ]}
        keyboardType="default" 
        
        onChangeText={setLogin} 
        value={login}
        onFocus={handleFocusLogin}
        onBlur={handleBlurLogin}                      
        />
        <TextInput        
        placeholder="Адреса електронної пошти"
        placeholderTextColor="#BDBDBD"
        fontSize={16} 
        fontFamily="Roboto-Light"         
        style={[
          styles.input,
          isFocusedEmail ? styles.inputFocused : null,
        ]}
        keyboardType="email-address"
        
        onChangeText={setEmail} 
        value={email}
        onFocus={handleFocusEmail}
        onBlur={handleBlurEmail}                  
        />
            
        <View style={styles.inputContainer}>  
        <TextInput                   
        placeholder="Пароль"
        placeholderTextColor="#BDBDBD"
        fontSize={16}
        fontFamily="Roboto-Light"         
        style={[
          styles.inputPassword,
          isFocusedPassword ? styles.inputFocused : null,
        ]}
        secureTextEntry={showPassword}                    
        keyboardType="default"
                            
        onChangeText={setPassword} 
        value={password}
        onFocus={handleFocusPassword}
        onBlur={handleBlurPassword}                       
        >            
        </TextInput>
        <TouchableOpacity>        
        <Text onPress={toggleShowPassword}
         style={styles.textShowPassword}>
        {showPassword ? 'Показати' : 'Приховати'}
        </Text>
        </TouchableOpacity>
                             
        </View>
       
        <TouchableHighlight
        onPress={getData}                
        style={styles.btnRegistr}>
        <Text style={styles.btnText}>
        Зареєстуватися
        </Text>        
        </TouchableHighlight>
        <Text
        onPress={() => navigation.navigate("LoginScreen")}                
        style={[{ fontFamily: "Roboto-Medium" }, styles.textLink]}>
        Вже є акаунт? Увійти
        </Text>
                    
        </View>         
        </ImageBackground>
        </>    
    ) 
};






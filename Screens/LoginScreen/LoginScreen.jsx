import {
    TouchableHighlight,
    TouchableOpacity,
    Text,
    TextInput,
    View,
    ImageBackground
} from 'react-native';
import { useState } from 'react';
import styles from './LoginScreenStyles';



export default function LoginScreen({ navigation }) {
  
 

   const isKeyboardVisible = true;
   const [email, setEmail] = useState(""); 
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const [validateInput, setValidateInput] = useState(false);
   const [isFocusedEmail, setIsFocusedEmail] = useState(false);
   const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  
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
       
        if (email === "" || password === "") {
            setValidateInput(true);
            return
        }
        navigation.navigate("Home") 
        console.log(
        `Email - ${email}, 
        Password - ${password}`);

        reset();
    };
    
    const reset = () => {
        setEmail("");
        setPassword("");
        setValidateInput(false);
    }  


    return (
        <>
        <ImageBackground
        style={styles.backgroundImage}        
        source={require('../../images/photo-bg.png')}>
                
        <View style={[
            styles.whiteBgBox,
            isKeyboardVisible ? styles.activeKeyboard : null
        ]}>
        <Text
        style={[[{ fontFamily: "Roboto-Bold" }, styles.logInText]]}>
        Увійти
        </Text>      
        
        {validateInput
        ? <Text style={[[{ fontFamily: "Roboto-Bold" }, styles.validateText]]}>
        Ви пропустили одне з обов'язкових полів
        </Text>
        :<></>}  


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
        <Text style={styles.textShowPassword}
        onPress={toggleShowPassword}                    
        >
        {showPassword ? 'Показати' : 'Приховати'}
        </Text>
        </TouchableOpacity>
        </View>
            
        <TouchableHighlight
        onPress={getData}                  
        style={styles.btnLogIn}>
        <Text style={styles.btnText}              
        >
        Увійти
        </Text>        
        </TouchableHighlight>
        <Text style={[{ fontFamily: "Roboto-Medium" }, styles.textLink]}>
        Немає акаунту?
        <Text
        onPress={() => navigation.navigate("Registration")}
        style={[{ fontFamily: "Roboto-Medium" }, styles.textRegister]}
        > Зареєструватися</Text>
        </Text>


        </View>
        </ImageBackground>       
        </>
    )

};
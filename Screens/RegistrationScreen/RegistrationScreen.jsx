import {
    TouchableHighlight,
    TouchableOpacity,
    Text,
    TextInput,
    View,
    Image,
    ImageBackground,
} from 'react-native';
import { useState } from 'react';
import styles from "./RegistrationScreenStyles";


export default function RegistrationScreen({navigation}) {
   const [login, setLogin] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const [validateInput, setValidateInput] = useState(false);
   const [isFocusedLogin, setIsFocusedLogin] = useState(false); 
   const [isFocusedEmail, setIsFocusedEmail] = useState(false);
   const [isFocusedPassword, setIsFocusedPassword] = useState(false);

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
      
        navigation.navigate("Home");
        console.log(
        `Login - ${login}, 
        Email - ${email}, 
        Password - ${password}`);

        reset();
    };
    
    const reset = () => {
        setEmail("");
        setLogin("");
        setPassword("");
        setValidateInput(false);
    }
    

    return (
        <>
        <ImageBackground
        style={styles.backgroundImage}    
        source={require('../../images/photo-bg.png')}>  
        <View style={styles.whiteBgBox}>

                 
        <Image
        style={styles.avatar}        
        source={require("../../images/avatar.png")} />
        <Image
        style={styles.iconAdd}
        source={require("../../images/add.png")} />   

                    
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






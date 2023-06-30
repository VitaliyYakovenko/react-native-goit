import {
    TouchableHighlight,
    TouchableOpacity,
    Text,
    TextInput,
    View,
    Image,
    ImageBackground
} from 'react-native';
import { useState } from 'react';
import styles from './LoginScreenStyles';



export default function LoginScreen() {
   const [password, setPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false)

   const toggleShowPassword = () => {
    setShowPassword(!showPassword);
   };
     


    return (
        <>
        <ImageBackground
        style={styles.backgroundImage}        
        source={require('../../images/photo-bg.png')}>
                
        <View style={styles.whiteBgBox}>
        <Text
        style={[[{ fontFamily: "Roboto-Bold" }, styles.logInText]]}>
        Увійти
        </Text>      
 
                    
        <TextInput        
        placeholder="Адреса електронної пошти"
        placeholderTextColor="#BDBDBD"
        fontSize={16} 
        fontFamily="Roboto-Light"         
        style={styles.input}
        keyboardType="email-address"   
        />
                    
        <View style={styles.inputContainer}>  
        <TextInput
        placeholder="Пароль"
        placeholderTextColor="#BDBDBD"
        fontSize={16}
        fontFamily="Roboto-Light"         
        style={styles.inputPassword}
        secureTextEntry={true}                    
        keyboardType="default"   
        >            
        </TextInput>
        <TouchableOpacity>        
        <Text style={styles.textShowPassword}>
        {showPassword ? 'Приховати' : 'Показати'}
        </Text>
        </TouchableOpacity>
        </View>
            
        <TouchableHighlight
        style={styles.btnLogIn}>
        <Text style={styles.btnText}>
        Увійти
        </Text>        
        </TouchableHighlight>
        <Text style={[{ fontFamily: "Roboto-Medium" }, styles.textLink]}>
        Немає акаунту?
        <Text style={[{ fontFamily: "Roboto-Medium" }, styles.textRegister]}
        > Зареєструватися</Text>
        </Text>


        </View>
        </ImageBackground>       
        </>
    )

};
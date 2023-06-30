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
import styles from "./RegistrationScreenStyles";


export default function RegistrationScreen() {
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

                 
        <Image
        style={styles.avatar}        
        source={require("../../images/avatar.png")} />
        <Image
        style={styles.iconAdd}
        source={require("../../images/add.png")} />   

                    
        <Text style={[{ fontFamily: "Roboto-Bold" }, styles.register]}>
        Реєстрація
        </Text>
        <TextInput
        placeholder="Логін"
        placeholderTextColor="#BDBDBD"
        fontSize={16}
        fontFamily="Roboto-Light"        
        style={styles.input}
        keyboardType="default"   
        />
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
        style={styles.btnRegistr}>
        <Text style={styles.btnText}>
        Зареєстуватися
        </Text>        
        </TouchableHighlight>
        <Text style={[{ fontFamily: "Roboto-Medium" }, styles.textLink]}>
        Вже є акаунт? Увійти
        </Text>
                    
        </View>         
        </ImageBackground>            
        </>    
    )
};






import {
    View,
    Text,
    Image,
    TouchableHighlight
} from "react-native";
import SvgUri from "react-native-svg-uri";
import styles from "./CreatePostsScreenStyles";


export default function CreatePostsScreen() {
 


    return (
        <View style={styles.createPostsScreen}>

        <View style={styles.navBarPosts}>  
        <SvgUri
        width="24" height="24"
        style={styles.icon}            
        source={require("../../assets/icons/arrow-left.svg")}    
        />
        <Text style={[{ fontFamily: "Roboto-Bold" }, styles.title]}>
        CreatePostsScreen
        </Text>
        </View>  

        <View style={styles.postBlock}> 
        <Image
        style={styles.imagePost}        
        source={require("../../images/post-image.png")} />
        <SvgUri
        width="60" height="60"
        style={styles.ellipseIcon}            
        source={require("../../assets/icons/ellipse.svg")}        
        /> 
           
        <Image
        width="24" height="24"
        style={styles.cameraIcon}
        source={require("../../images/camera.png")}            
        />
        </View>
            
        <Text
        style={[{ fontFamily: "Roboto-Medium" }, styles.editPhoto]}>
        Редагувати фото</Text>        
                
        <Text
        style={[{ fontFamily: "Roboto-Bold" }, styles.nameLocation]}>
        Ліс</Text>

        <View style={styles.addressBlock}>
        <SvgUri
        width="24" height="24"
        source={require("../../assets/icons/map-icon.svg")} />        
        <Text style={[{ fontFamily: "Roboto-Medium" }, styles.address]}>
        Ivano-Frankivs'k Region, Ukraine
        </Text>
        </View> 
            
        <TouchableHighlight
        style={styles.publickBtn}>
        <Text style={[{ fontFamily: "Roboto-Bold" }, styles.btnText]}>
        Опубліковати</Text>            
        </TouchableHighlight>

       <View style={styles.deleteBar}>
        <Image      
        width="70" height="40"
        source={require("../../images/delete-btn.png")}     
        /> 
        </View>
    </View>)
};



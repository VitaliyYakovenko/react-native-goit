import { useState} from "react";
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Alert
} from "react-native";
import { Camera } from "expo-camera";
import SvgUri from "react-native-svg-uri";
import styles from "./CreatePostsScreenStyles";


export default function CreatePostsScreen({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const type = Camera.Constants.Type.back;

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };   

  const onGoBack = () => {  
        navigation.navigate("PostsScreen"); 
  };


    return (  
        <View style={styles.createPostsScreen}>

         <View style={styles.navBarPosts}>    
             <Text style={[{ fontFamily: "Roboto-Bold" }, styles.title]}>
              CreatePostsScreen
             </Text>
         </View> 

         <TouchableOpacity onPress={onGoBack}>       
           <SvgUri
           width="24" height="24"
           style={styles.icon}            
           source={require("../../assets/icons/arrow-left.svg")}/>
        </TouchableOpacity>
                
         
        <View style={styles.postBlock}> 
        
        {photo && <Image style={styles.backgroundImage} source={{uri: photo}} />}
          
         <Camera
            style={styles.imagePost}
            type={type}
            ref={setCamera}
          />        
          
        <TouchableOpacity
        onPress={takePhoto}
        style={styles.ellipseIcon}>         
        <SvgUri
        width="60" height="60"          
        source={require("../../assets/icons/ellipse.svg")}        
        /> 
           
        <Image
        width="24" height="24"
        style={styles.cameraIcon}
        source={require("../../images/camera.png")}            
        />
        </TouchableOpacity>                
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


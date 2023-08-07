import { useState , useEffect} from "react";
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { Camera } from "expo-camera";
import SvgUri from "react-native-svg-uri";
import styles from "./CreatePostsScreenStyles";


export default function CreatePostsScreen({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [disabled, setDisabled] = useState(true);
  const type = Camera.Constants.Type.back;

  useEffect(() => {
    
    if (photo !== "" && name !== "" && location !== "") {
     
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [photo, name, location]);



  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log(photo);
  };   


  const onGoBack = () => {  
        navigation.navigate("PostsScreen"); 
  };

  const onEditPhoto = () => {
    setPhoto("");
  };

  const onPublickPost = () => {
    setPhoto("");
    setLocation("");
    setName("");
    navigation.navigate("PostsScreen", {
      photo: photo,
      name: name,
      location: location,
    }); 
  };


  const onDeletePost = () => {
    setPhoto("");
    setLocation("");
    setName("");
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
        
        <TouchableOpacity onPress={onEditPhoto}>
        <Text
        style={[{ fontFamily: "Roboto-Medium" }, styles.editPhoto]}>
        Редагувати фото</Text>        
        </TouchableOpacity>
        
        <View style={styles.nameLocationInput}>
        <TextInput
            placeholder="Назва..."
            placeholderTextColor="#BDBDBD"
            fontSize={16} 
            fontFamily="Roboto-Light"
            value={name}
            onChangeText={setName}
        />
        </View>
     

        <View style={styles.addressBlock}>
        <SvgUri style={styles.iconLocation}
        width="24" height="24"
        source={require("../../assets/icons/map-icon.svg")} />
        <TextInput
            placeholder="Назва..."
            placeholderTextColor="#BDBDBD"
            fontSize={16} 
            fontFamily="Roboto-Light"
            value={location}
            onChangeText={setLocation}
            />  
        </View> 
            
        <TouchableHighlight
        disabled={disabled}
         style={[
          styles.publickBtn,
           disabled ? null : styles.activePublickBtn,
          ]}
        onPress={onPublickPost}  
        >
          <Text  style={[{ fontFamily: "Roboto-Bold" },
                 styles.btnText,
                   disabled ? null : styles.activeBtnText
                  ]}>
        Опубліковати</Text>            
        </TouchableHighlight>

        <View style={styles.deleteBar}>
        <TouchableHighlight onPress={onDeletePost}>
        <Image      
        width="70" height="40"
        source={require("../../images/delete-btn.png")}     
          /> 
        </TouchableHighlight>
        </View>
    </View>)
};


import { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput
} from "react-native";
import SvgUri from "react-native-svg-uri";
import styles from "./CommentsScreenStyles";

export default function CommentsScreen({ navigation, route }) {
    const [comment, setComment] = useState("");
 
    const { img} = route.params || {};  
   

    const onGoBack = () => {
        
        navigation.navigate("PostsScreen");
    }

    const onSendComment = () => {
        console.log(comment);
        setComment("");
    };
    
    
    return (
        <>
        <ScrollView>
        <View style={styles.navBar}>
            <TouchableOpacity style={styles.iconGoBack}  onPress={onGoBack}>
            <SvgUri width="24" height="24"      
                source={require("../../assets/icons/arrow-left.svg")} />
            </TouchableOpacity>      
            <Text style={[{ fontFamily: "Roboto-Bold" }, styles.title]}>Коментарі</Text>
        </View>
        <View>
        <Image style={styles.imgPost} source={{uri: img}}/>
        </View>
     
        <View style={styles.commentBlock}>
            <Image style={styles.userAvatar} source={require("../../images/avatar-user-comments.png")} />
              <View style={styles.textCommentsBlock}>
                 <Text style={[{ fontFamily: "Roboto-Medium" }, styles.commentText]}>Really love your most recent photo.
                   I’ve been trying to capture the same
                   thing for a few months and would love some tips!
                 </Text>
                 <Text style={[{ fontFamily: "Roboto-Medium" }, styles.commentDate]}>
                 09 червня, 2020 | 08:40  
                 </Text>
              </View>
        </View>

         <View style={styles.commentBlock}>
              <View style={styles.textCommentsBlock}>
                 <Text style={[{ fontFamily: "Roboto-Medium" }, styles.commentText]}>Really love your most recent photo.
                    A fast 50mm like f1.8 would help with the bokeh.
                    I’ve been using primes as they tend to get a bit sharper images.
                 </Text>
                 <Text style={[{ fontFamily: "Roboto-Medium" }, styles.myCommentDate]}>
                 09 червня, 2020 | 09:14  
                 </Text>
            </View>
           <Image style={styles.myAvatar} source={require("../../images/my-avatar-comments.png")} /> 
        </View>

        
        <View style={styles.commentBlock}>
            <Image style={styles.userAvatar} source={require("../../images/avatar-user-comments.png")} />
              <View style={styles.textCommentsBlock}>
                 <Text style={[{ fontFamily: "Roboto-Medium" }, styles.commentText]}>Really love your most recent photo.
                  Thank you! That was very helpful!
                 </Text>
                 <Text style={[{ fontFamily: "Roboto-Medium" }, styles.commentDate]}>
                09 червня, 2020 | 09:20  
                 </Text>
              </View>
        </View>
       
        
        </ScrollView>
        <View styles={styles.inputBar}>
            <View style={styles.inputBlock}>
            <TextInput
            placeholder="Коментувати..."
            placeholderTextColor="#BDBDBD"
            fontSize={16}   
            fontFamily="Roboto-Light"
            style={styles.input}
            value={comment}
            onChangeText={setComment}            
            />
               <TouchableOpacity style={styles.sendCommentImg} onPress={onSendComment}>    
                <Image 
                source={require("../../images/send-comment-img.png")} />
                </TouchableOpacity>         
            </View>   
        </View>    
        </>)
};




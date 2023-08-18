import { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput
} from "react-native";
import { useDispatch,useSelector } from "react-redux";
import { getPostById } from "../../redux/posts/getPostById";
import { createComment } from "../../redux/posts/createComment";
import { getAllCommentsById } from "../../redux/posts/getAllCommentsById";
import { formatDateAndTime } from "../../utils/formatDateAndTime";
import styles from "./CommentsScreenStyles";

export default function CommentsScreen({ navigation, route }) {
    const { photo } = useSelector((state) => state.posts.post) || "";
    const { comments } = useSelector((state) => state.posts) || [];
    const {avatar} = useSelector((state) => state.auth);
    const [text, setText] = useState("");
    const date = formatDateAndTime();

    const dispatch = useDispatch();
    const { id } = route.params || {};  
    

    useEffect(() => {
        dispatch(getPostById(id));
    }, []);
   
     

    useEffect(() => {
        dispatch(getAllCommentsById(id));   
     }, [dispatch,text]);
       

    const onSendComment = () => {

        dispatch(createComment({id:id, text: text, timestamp: date}));
        setText("");
    };

    const onGoBack = () => {    
        navigation.navigate("PostsScreen");
    }

    return (
        <>
        <ScrollView>
        <View style={styles.navBar}>
            <TouchableOpacity style={styles.iconGoBack}  onPress={onGoBack}>
            <Image width="24" height="24"      
                source={require("../../images/arr")} />
            </TouchableOpacity>      
            <Text style={[{ fontFamily: "Roboto-Bold" }, styles.title]}>Коментарі</Text>
        </View>
        <View>
        <Image style={styles.imgPost} source={{uri: photo}}/>
        </View>

        {comments.map(comment => (
            <View key={comment.id} style={styles.commentBlock}>
            <Image style={styles.userAvatar} source={{uri: avatar}} />
              <View style={styles.textCommentsBlock}>
                  <Text style={[{ fontFamily: "Roboto-Medium" }, styles.commentText]}>
                  {comment.text}      
                 </Text>
                 <Text style={[{ fontFamily: "Roboto-Medium" }, styles.commentDate]}>
                  {comment.timestamp}
                 </Text>
              </View>
           </View>
        ))}     

        </ScrollView>
        <View styles={styles.inputBar}>
            <View style={styles.inputBlock}>
            <TextInput
            placeholder="Коментувати..."
            placeholderTextColor="#BDBDBD"
            fontSize={16}   
            fontFamily="Roboto-Light"
            style={styles.input}
            value={text}
            onChangeText={setText}            
            />
               <TouchableOpacity style={styles.sendCommentImg} onPress={onSendComment}>    
                <Image 
                source={require("../../images/send-comment-img.png")} />
                </TouchableOpacity>         
            </View>   
        </View>    
        </>)
};





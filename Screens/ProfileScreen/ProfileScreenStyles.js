import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    scrollViewContent: {
        flexGrow: 1,
    },

    backgroundImage: {
       paddingTop: 200,
       flex: 1,
       resizeMode: "stretch",
       justifyContent: "flex-end",
    },
    whiteBgBox: {
        position: "relative",
        borderRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: "#fff",
    },
    userBlock: {
        top: -66,
        position: "relative",
    }, 
    avatarBox: {
        position: "relative",
    },
    avatar: {
        marginLeft: "auto",
        marginRight:"auto",
    },
    btnRemoveAvatar: {
        position: "absolute",
        bottom: 8,
        left: 238,    
    },
    iconLogOut: {
        position: "absolute",
        right: 16,
        top: 82,
    },
    userName: {
        marginTop:-32,
        marginBottom: 32,
        marginRight: "auto",
        marginLeft: "auto", 
        color:"#212121",
        fontSize: 30,
        fontWeight: 500,
        letterSpacing: 0.3,
    },
    postContent: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 35,
    },
    imgPost: {
        marginBottom:8,
    },
    locationPost: {
        marginBottom:8,
        color: "#212121",
        fontSize: 16,
        fontWeight: 500,
    },
    infomationPostBox: {
        display: "flex",
        flexDirection: "row",
    },
    postIcons: {
        marginRight: 6,
    },
    commentsBox: {
      display: "flex",
      flexDirection: "row",
      marginRight:24,
    },
    countryBox: {
      display: "flex",
      flexDirection: "row",
      alignItems:"center",
      marginLeft:"auto",    
    }
    
});


export default styles;
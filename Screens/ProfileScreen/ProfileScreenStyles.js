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
        width: 120,
        height: 120,
        marginLeft: "auto",
        marginRight: "auto",
    }, 
    avatarBox: {
        position: "relative",
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 16,
        marginLeft: "auto",
        marginRight:"auto",
    },
    avatarNull: {
        width: 120,
        height: 120,
        borderRadius: 16,
        backgroundColor: "#F6F6F6",
    },
    btnRemoveAvatar: {
        position: "absolute",
        bottom: 8,
        right: -18,
    },
    iconLogOut: {
        position: "absolute",
        right: -115,
        top: 80,
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
    },
    
    
    navMenu: {
    backgroundColor: "white",
    borderTopWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    paddingBottom: 32,
    paddingTop: 9,
    },
   mainBtn: {
    marginLeft: 38,
    marginRight: 30,
    },
    mainBtn: {
       position:"relative",
       marginLeft: 38,
       marginRight: 38,
       width: 70,
       height: 40,
       borderRadius: 50,
       backgroundColor: "#FF6C00", 
    }
    ,
    iconUser: {
       position: "absolute",
       right: 22,
       top:5,
       fill: "#ffff",
    }
});



export default styles;
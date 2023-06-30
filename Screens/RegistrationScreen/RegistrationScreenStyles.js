import { StyleSheet } from "react-native";



 const styles = StyleSheet.create({
    backgroundImage: {
       flex: 1,
       resizeMode: "stretch",
       justifyContent: "flex-end",
    },
    
    iconAdd: {
        position: "absolute",
        left: 230,
        bottom: 495,
        zIndex: 3,
    },
    avatar: {
        position:"absolute",
        marginLeft: "auto",
        marginRight: "auto",
        bottom: 485,
        left: 130,
        zIndex: 2,
    },
    whiteBgBox: {
        position:"relative",
        borderRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: "#fff",
    }, 

    register: {
       marginLeft: "auto",
       marginRight: "auto",
       paddingTop: 80,

       color: "#212121",
       fontSize: 30,
       letterSpacing: 0.3,
       fontWeight: 900,
       marginBottom: 33,
    },
    input: {
        marginLeft: "auto",
        marginRight: "auto",

        backgroundColor: "#F6F6F6",
        width: 343,
        height: 50,
        padding: 16,
        borderRadius: 5,
        marginBottom: 16,
    },

    inputContainer: {
      marginLeft: "auto",
      marginRight: "auto",

      flexDirection: 'row',
      alignItems: 'center',
      width: 343,
      marginBottom: 43,
    },

    inputPassword: { 
        flex: 1,
        position: "relative",
        backgroundColor: "#F6F6F6",
        height: 50,
        padding: 16,
        borderRadius: 5,
        marginBottom: 16,
    },
    textShowPassword: {
        position: "absolute",
        right: 15,
        top: -18,
        color: "#1B4371",
    },

    btnRegistr: {
        marginLeft: "auto",
        marginRight: "auto",  

        backgroundColor: "#FF6C00",
        marginBottom: 16,
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 32,
        paddingRight: 32,
        borderRadius: 100,
        width: 343,
        height: 50,
        fontSize: 16,
    },
    btnText: {
        textAlign:"center",
        color: "#FFF",
        fontSize: 16,
        fontWeight: 700,
    },
    textLink: {
        marginLeft: "auto",
        marginRight: "auto",
        paddingBottom: 66,

        color: "#1B4371",
        fontSize: 16,
    }

});


export default styles;
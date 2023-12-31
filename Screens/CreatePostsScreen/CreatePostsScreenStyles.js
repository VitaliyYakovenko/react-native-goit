import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    createPostsScreen: {
        flex: 1,
    },
    navBarPosts: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingTop: 27,
        borderBottomColor: "black",
        borderWidth: 0.5,
        paddingBottom: 11,
        marginBottom: 32,
    },
    title: {
        position: "absolute",
        textAlign: 'center',
        top: '120%',
        left: 0,
        right: 0,
        fontSize: 17,
        fontWeight: 500,
        color: "#212121",
    },
    icon: {
        position: "absolute",
        top: -66,
        marginRight: 'auto',
        marginLeft: 16,
    },
    postBlock: {
        position: "relative",
        width: 344,
        height: 240,
        marginLeft: "auto",
        marginRight: "auto",
    },
    imagePost: {
        width: 344,
        height: 240,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderStyle: "solid",
        backgroundColor: "#F6F6F6",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 8,
    },
    backgroundImage: {
       position: "absolute",
       width: "100%",
       height: "100%",
       zIndex: 2,
    },
    ellipseIcon: {
        zIndex: 3,
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: -30,
        marginTop: -30,
    },
    cameraIcon: {
        position: "absolute",
        zIndex: 3,
        top: "50%",
        left: "50%",
        marginLeft: -12,
        marginTop: -12,
    },
    editPhoto: {
        marginLeft: 26,
        marginTop: 8,
        marginBottom: 48,
        fontSize: 16,
        fontWeight: 400,
        color: "#BDBDBD",
    },
    nameLocationInput: {
        width: 343,
        marginLeft: 26,
        marginBottom: 32,
        paddingBottom: 15,
        color: "#212121",
        fontSize: 16,
        fontWeight: 500,
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
    },
    addressBlock: {
        width: 343,
        marginLeft: 26,
        paddingBottom: 12,
        marginBottom:32,
        display: "flex",
        flexDirection: "row",
        justifyContent:"flex-start",
        alignItems: "center",
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
    },
    iconLocation: {
        marginRight: 4,
    },
    publickBtn: {
        marginLeft: "auto",
        marginRight: "auto",
        width: 343,
        height: 51,
        borderRadius: 100,
        marginBottom: 120,
        backgroundColor: "#F6F6F6",
      
    },
     activePublickBtn: {
         backgroundColor: "#FF6C00",
    },
    btnText: {
        color: "#FFFFFF",
        textAlign: "center",
        paddingTop: 16,
        paddingBottom: 16,
        fontSize: 16,
        color: "#BDBDBD",
    },
    activeBtnText: {
        color: "#FFF",
    },
    deleteBar: {
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto",
        paddingBottom: 140,
    }
});

export default styles;
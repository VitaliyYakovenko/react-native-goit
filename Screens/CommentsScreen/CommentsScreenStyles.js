import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"space-between",     
        paddingTop: 27,
        borderBottomColor: "black",
        borderWidth: 0.5,
        paddingBottom: 44,
        marginBottom: 32,
    },
    title: {
        position: "absolute",
        textAlign: 'center',
        top: '120%',
        left: 0,
        right: 0,
        paddingBottom: 11,
        paddingTop: 33,
        fontSize: 17,
        fontWeight: 500,
    },
    goBackBlock: {
        position: "absolute",
        top: 34,
        left: 16,
    },
    iconGoBack: {
        zIndex: 2,
        position: "absolute",
        top: 34,
        left: 16,
    },
    imgPost: {
       width: 344,
       height: 240,
       marginBottom: 32,
       marginLeft: "auto",
       marginRight: "auto",
       borderRadius: 8,
    },
    commentBlock: {
        display: "flex",
        flexDirection: "row",
        width: 344,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 32,
    },
    userAvatar: {
        marginRight: 16,
    },
    textCommentsBlock: {
        width: 300,
        padding: 16,
        borderRadius: 6,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
    },
    commentText: {
        marginBottom: 8,
        color: "#212121",
        fontSize: 13,
        fontWeight: 400,
        lineHeight: 18,
    },
    commentDate: {
        textAlign: "right",
        color: "#BDBDBD",
        fontSize: 10,
        fontWeight: 400,
    },
    myAvatar: {
        marginLeft: 16,
    },
    myCommentDate: {
        textAlign: "left",
        color: "#BDBDBD",
        fontSize: 10,
        fontWeight: 400,
    },
    inputBar: {
        position: "absolute",
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        width: 343,
    },
    inputBlock: {
        position: "relative",
        width: 343,
        height: 50,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 16,
    },
    input: {
        paddingBottom: 16,
        paddingLeft: 16,
        paddingTop: 16,
        borderRadius: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',        
    },
    sendCommentImg: {
        width: 34,
        height: 34,
        position: "absolute",
        right: 8,
        top: 8,
    }
});


export default styles;
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  mainBox: {
    backgroundColor: "white",
  },
   postsScreen: {
    flex: 1,
    position: "relative",
    backgroundColor:"fff",
    justifyContent:"space-between",
    backgroundColor:"#FFF",
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between",     
    paddingTop: 27,
    borderBottomColor: "black",
    borderWidth: 0.5,
    paddingBottom: 11,
  },
  title: {
    position: "absolute",
    textAlign: 'center',
    top: '120%',
    left: 0,
    right: 0,
    fontSize: 17,
    fontWeight: 500,
  },
  icon: {
    marginLeft: 'auto',
    
    marginRight:16,
  },
  userBlock: {
    
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    marginLeft: 16,
    marginBottom: 32,
  },
  userBlockData: {
    flex: 1,
    marginLeft: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  nullAvatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  name: {
    fontSize: 13,
    fontWeight: 500,
  },
  email: {
    fontSize: 11,
   },
  postBar: {
     width: 344,
     marginLeft: "auto",
     marginRight: "auto",
   },
  posts: {
     marginBottom: 34,
   },
  imgPost: {
     width: 344,
     height: 240,
     marginBottom: 8,
     borderRadius: 8,
   },
   postName: {
     marginBottom: 8,
  },
  postInformBar: {
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
   },
  postCommentsBar: {
    display: "flex",
    flexDirection:"row",
   },
  postLocationBar: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
   },
  navMenu: {
    position: "relative",
    bottom: 0,
    width: "100%",
    borderTopWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    paddingBottom: 32,
    paddingTop: 9,
    backgroundColor:"white",
    },

  mainBtn: {
    position:"relative",
    marginLeft: 38,
    marginRight: 38,
    width: 70,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#FF6C00", 
   },
});


export default styles;
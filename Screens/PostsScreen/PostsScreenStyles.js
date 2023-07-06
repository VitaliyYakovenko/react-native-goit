import { StyleSheet } from "react-native";


 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"space-between",
    backgroundColor:"white",
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
    position: "absolute",
    left: 16,
    top: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    marginLeft: 16,
  },
  userBlockData: {
    flex: 1,
    marginLeft: 8,
  },
  name: {
    fontSize: 13,
    fontWeight: 500,
  },
  email: {
    fontSize: 11,
  },
  navMenu: {
    borderTopWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    marginBottom: 32,
    paddingTop: 9,
   },

  mainBtn: {
    marginLeft: 38,
    marginRight: 38,
  }
});


export default styles;
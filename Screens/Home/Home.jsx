import { useEffect, useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function Home({ navigation }) {
   const [location, setLocation] = useState("sss");
   console.log(location);

    useEffect(() => {
       navigation.navigate("PostsScreen");
     }, []);
     
   return (
      <>
      
      </>      
    );
};
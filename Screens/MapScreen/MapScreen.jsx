import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Image,TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getPostById } from "../../redux/posts/getPostById";
import styles from "./MapScreenStyles";

export default function MapScreen({ navigation, route }) {
    const post = useSelector((state) => state.posts.post) || {};
    const latitude = post?.coords?.latitude;
    const longitude = post?.coords?.longitude;
    const dispatch = useDispatch();
    const { id } = route.params || {};

    console.log("latitude : " ,latitude,"longitude : ",longitude)
  
   useEffect(() => { 
    dispatch(getPostById(id));
    }, []);
  
 

    const onGoBack = () => {
        navigation.navigate("PostsScreen");
    }

  
    const [mapRegion, setMapRegion] = useState({
       latitude: latitude,
       longitude: longitude,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
    });

    useEffect(() => {
    setMapRegion((prevRegion) => ({
      ...prevRegion,
      latitude: latitude,
      longitude: longitude,
    }));
   }, [latitude, longitude]);

    
    const onRegionChange = (region) => {
      console.log("New map region:", region);
  };
    
    
    return (
      <>
    <View style={styles.container}>
          <TouchableOpacity onPress={onGoBack} style={styles.iconGoBack}>      
            <Image
                width="24"
                height="24"
                source={require("../../images/arrow-left.png")} />
          </TouchableOpacity>      
      <MapView
        style={styles.mapStyle}
        region={mapRegion}            
        mapType="standard"
        minZoomLevel={15}
        onRegionChangeComplete={onRegionChange}
      >
        <Marker
          title="I am here"
          coordinate={{ latitude:latitude || 0, longitude: longitude  || 0}}
          description='Hello'
        />
      </MapView> 
    </View>
    </>);
}


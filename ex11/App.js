import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default function App() {
  const [markers, setMarkers] = useState([]);

  const addMarker = (event) => {
    setMarkers((oldArray) => [...oldArray, event.coordinate]);
  }

  return (
    <View style={styles.container}>
        <MapView style={styles.map} onLongPress={(e) => addMarker(e.nativeEvent)}>
          {markers.map((marker, index) => {
            return (
                <Marker
                  key={index}
                  coordinate={marker}
                />
            );
          })}
        </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

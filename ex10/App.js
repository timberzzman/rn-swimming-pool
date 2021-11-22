import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
    })();
    setLocation((oldLocation) => {
      return {
      ...oldLocation,
          long: 0,
          lat: 0,
      }
    });
  }, []);

  const changeLocation = async (defaultValue=false) => {
    if (defaultValue === true) {
      setLocation((oldLocation) => {
        return {
          ...oldLocation,
          long: 0,
          lat: 0,
        }
      });
    } else {
      let getLocation = await Location.getCurrentPositionAsync({});
      setLocation((oldLocation) => {
        return {
          ...oldLocation,
          long: getLocation.coords.longitude,
          lat: getLocation.coords.latitude,
        }
      })
    }
  }

  return (
    <View style={styles.container}>
      <Text>Longitude : {location.long}</Text>
      <Text>Latitude : {location.lat}</Text>
      <View style={styles.button}>
        <Button onPress={async () => await changeLocation()}  title="Get location"/>
      </View>
      <View style={styles.button}>
        <Button onPress={async () => await changeLocation(true)} title="Reset location"/>
      </View>
      <Text>{errorMsg}</Text>
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
  button: {
    marginTop: 5
  }
});

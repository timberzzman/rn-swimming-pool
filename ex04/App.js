import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{color: "#fff"}}>Header</Text>
      </View>
      <View style={styles.body}>
        <Text>Hello</Text>
        <Image style={styles.image} source={{uri: 'https://media.discordapp.net/attachments/770232297039069184/897842122445705276/SPOILER_Capture_decran_2021-09-21_a_13.26.27.png'}}/>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height:"5%",
    width: "100%",
    color: "#fff",
    backgroundColor: "#000",
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    height:"90%",
    width: "100%",
    backgroundColor: "#cccccc",
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 300,
  },
  footer: {
    height:"5%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="BUTTON" color="#2196f3"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

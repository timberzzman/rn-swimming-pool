import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, StatusBar as sb } from 'react-native';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.row}>
            <View style={{...styles.square, ...styles.redSquare}}/>
            <View style={{...styles.square, ...styles.redSquare}}/>
            <View style={{...styles.square, ...styles.redSquare}}/>
          </View>
          <View style={styles.row}>
            <View style={{...styles.square, ...styles.violetSquare}}/>
            <View style={{...styles.square, ...styles.violetSquare}}/>
          </View>
          <View style={styles.row}>
            <View style={{...styles.square, ...styles.greenSquare}}/>
          </View>
          <View style={styles.row}>
            <View style={{...styles.square, ...styles.violetSquare}}/>
            <View style={{...styles.square, ...styles.violetSquare}}/>
          </View>
          <View style={styles.row}>
            <View style={{...styles.square, ...styles.redSquare}}/>
            <View style={{...styles.square, ...styles.redSquare}}/>
            <View style={{...styles.square, ...styles.redSquare}}/>
          </View>
          <View style={styles.row}>
            <View style={{...styles.square, ...styles.violetSquare}}/>
            <View style={{...styles.square, ...styles.violetSquare}}/>
          </View>
          <View style={styles.row}>
            <View style={{...styles.square, ...styles.redSquare}}/>
            <View style={{...styles.square, ...styles.redSquare}}/>
            <View style={{...styles.square, ...styles.redSquare}}/>
          </View>
          <View style={styles.row}>
            <View style={{...styles.square, ...styles.greenSquare}}/>
          </View>
          <View style={styles.row}>
            <View style={{...styles.square, ...styles.redSquare}}/>
            <View style={{...styles.square, ...styles.redSquare}}/>
            <View style={{...styles.square, ...styles.redSquare}}/>
          </View>
          <View style={styles.row}>
            <View style={{...styles.square, ...styles.greenSquare}}/>
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: sb.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  square: {
    flex:1,
    backgroundColor: 'red',
    marginHorizontal:20,
    height: 80,
  },
  redSquare: {
    backgroundColor: 'red',
  },
  violetSquare: {
    backgroundColor: 'violet',
  },
  greenSquare: {
    backgroundColor: 'green',
  }
});
